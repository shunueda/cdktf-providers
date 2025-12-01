// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata;
  /**
  * VMSingleSpec defines the desired state of VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions {
  /**
  * Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig {
  /**
  * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#nameservers DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#options DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#options}
  */
  readonly options?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable;
  /**
  * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#searches DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#searches}
  */
  readonly searches?: string[];
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    options: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsToTerraform, false)(struct!.options),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    options: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameservers = undefined;
      this._options.internalValue = undefined;
      this._searches = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameservers = value.nameservers;
      this._options.internalValue = value.options;
      this._searches = value.searches;
    }
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases {
  /**
  * Hostnames for the above IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#hostnames DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * IP address of the host file entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#ip DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#ip}
  */
  readonly ip: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostnames = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostnames = value.hostnames;
      this._ip = value.ip;
    }
  }

  // hostnames - computed: false, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage {
  /**
  * PullPolicy describes how to pull docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#pull_policy DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Repository contains name of docker image + it's repository if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#repository DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag contains desired docker image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#tag DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts {
  /**
  * GraphitePort listen port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#graphite_port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#graphite_port}
  */
  readonly graphitePort?: string;
  /**
  * InfluxPort listen port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#influx_port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#influx_port}
  */
  readonly influxPort?: string;
  /**
  * OpenTSDBPort for tcp and udp listen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#open_tsdb_port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#open_tsdb_port}
  */
  readonly openTsdbPort?: string;
  /**
  * OpenTSDBHTTPPort for http connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#open_tsdbhttp_port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#open_tsdbhttp_port}
  */
  readonly openTsdbhttpPort?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graphite_port: cdktf.stringToTerraform(struct!.graphitePort),
    influx_port: cdktf.stringToTerraform(struct!.influxPort),
    open_tsdb_port: cdktf.stringToTerraform(struct!.openTsdbPort),
    open_tsdbhttp_port: cdktf.stringToTerraform(struct!.openTsdbhttpPort),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    graphite_port: {
      value: cdktf.stringToHclTerraform(struct!.graphitePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    influx_port: {
      value: cdktf.stringToHclTerraform(struct!.influxPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_tsdb_port: {
      value: cdktf.stringToHclTerraform(struct!.openTsdbPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_tsdbhttp_port: {
      value: cdktf.stringToHclTerraform(struct!.openTsdbhttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._graphitePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphitePort = this._graphitePort;
    }
    if (this._influxPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxPort = this._influxPort;
    }
    if (this._openTsdbPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTsdbPort = this._openTsdbPort;
    }
    if (this._openTsdbhttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.openTsdbhttpPort = this._openTsdbhttpPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._graphitePort = undefined;
      this._influxPort = undefined;
      this._openTsdbPort = undefined;
      this._openTsdbhttpPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._graphitePort = value.graphitePort;
      this._influxPort = value.influxPort;
      this._openTsdbPort = value.openTsdbPort;
      this._openTsdbhttpPort = value.openTsdbhttpPort;
    }
  }

  // graphite_port - computed: false, optional: true, required: false
  private _graphitePort?: string; 
  public get graphitePort() {
    return this.getStringAttribute('graphite_port');
  }
  public set graphitePort(value: string) {
    this._graphitePort = value;
  }
  public resetGraphitePort() {
    this._graphitePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphitePortInput() {
    return this._graphitePort;
  }

  // influx_port - computed: false, optional: true, required: false
  private _influxPort?: string; 
  public get influxPort() {
    return this.getStringAttribute('influx_port');
  }
  public set influxPort(value: string) {
    this._influxPort = value;
  }
  public resetInfluxPort() {
    this._influxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxPortInput() {
    return this._influxPort;
  }

  // open_tsdb_port - computed: false, optional: true, required: false
  private _openTsdbPort?: string; 
  public get openTsdbPort() {
    return this.getStringAttribute('open_tsdb_port');
  }
  public set openTsdbPort(value: string) {
    this._openTsdbPort = value;
  }
  public resetOpenTsdbPort() {
    this._openTsdbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTsdbPortInput() {
    return this._openTsdbPort;
  }

  // open_tsdbhttp_port - computed: false, optional: true, required: false
  private _openTsdbhttpPort?: string; 
  public get openTsdbhttpPort() {
    return this.getStringAttribute('open_tsdbhttp_port');
  }
  public set openTsdbhttpPort(value: string) {
    this._openTsdbhttpPort = value;
  }
  public resetOpenTsdbhttpPort() {
    this._openTsdbhttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTsdbhttpPortInput() {
    return this._openTsdbhttpPort;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense {
  /**
  * Enterprise license key. This flag is available only in [VictoriaMetrics enterprise](https://docs.victoriametrics.com/enterprise). To request a trial license, [go to](https://victoriametrics.com/products/enterprise/trial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * KeyRef is reference to secret with license key for enterprise features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key_ref}
  */
  readonly keyRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    key_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefToTerraform(struct!.keyRef),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense | cdktf.IResolvable): any {
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
    key_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefToHclTerraform(struct!.keyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRef = this._keyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._keyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._keyRef.internalValue = value.keyRef;
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

  // key_ref - computed: false, optional: true, required: false
  private _keyRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRefOutputReference(this, "key_ref");
  public get keyRef() {
    return this._keyRef;
  }
  public putKeyRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseKeyRef) {
    this._keyRef.internalValue = value;
  }
  public resetKeyRef() {
    this._keyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRefInput() {
    return this._keyRef.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates {
  /**
  * ConditionType refers to a condition in the pod's condition list with matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#condition_type DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec {
  /**
  * EmbeddedObjectMetadata defines objectMeta for additional service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata;
  /**
  * ServiceSpec describes the attributes that a user creates on a service. More info: https://kubernetes.io/docs/concepts/services-networking/service/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#spec}
  */
  readonly spec: { [key: string]: string };
  /**
  * UseAsDefault applies changes from given service definition to the main object Service Changing from headless service to clusterIP or loadbalancer may break cross-component communication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#use_as_default DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#use_as_default}
  */
  readonly useAsDefault?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataToTerraform(struct!.metadata),
    spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.spec),
    use_as_default: cdktf.booleanToTerraform(struct!.useAsDefault),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata",
    },
    spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.spec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    use_as_default: {
      value: cdktf.booleanToHclTerraform(struct!.useAsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._useAsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAsDefault = this._useAsDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec = undefined;
      this._useAsDefault = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec = value.spec;
      this._useAsDefault = value.useAsDefault;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: { [key: string]: string }; 
  public get spec() {
    return this.getStringMapAttribute('spec');
  }
  public set spec(value: { [key: string]: string }) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // use_as_default - computed: false, optional: true, required: false
  private _useAsDefault?: boolean | cdktf.IResolvable; 
  public get useAsDefault() {
    return this.getBooleanAttribute('use_as_default');
  }
  public set useAsDefault(value: boolean | cdktf.IResolvable) {
    this._useAsDefault = value;
  }
  public resetUseAsDefault() {
    this._useAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAsDefaultInput() {
    return this._useAsDefault;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#api_group DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#kind DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#access_modes DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#data_source DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#data_source_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#storage_class_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volume_attributes_class_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volume_mode DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volume_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesToTerraform(struct!.resources),
    selector: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource",
    },
    data_source_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#action DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * If represents metricsQL match expression (or list of expressions): '{__name__=~'foo_.*'}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#if DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#if}
  */
  readonly if?: { [key: string]: string };
  /**
  * Labels is used together with Match for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match is used together with Labels for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#match DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#match}
  */
  readonly match?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#modulus DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)' victoriaMetrics supports multiline regex joined with | https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#regex DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#regex}
  */
  readonly regex?: { [key: string]: string };
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#replacement DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#separator DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#source_labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#target_label DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    if: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.if),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    match: cdktf.stringToTerraform(struct!.match),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.if),
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
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._if !== undefined) {
      hasAnyValues = true;
      internalValueResult.if = this._if;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._if = undefined;
      this._labels = undefined;
      this._match = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._if = value.if;
      this._labels = value.labels;
      this._match = value.match;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // if - computed: false, optional: true, required: false
  private _if?: { [key: string]: string }; 
  public get if() {
    return this.getStringMapAttribute('if');
  }
  public set if(value: { [key: string]: string }) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: { [key: string]: string }; 
  public get regex() {
    return this.getStringMapAttribute('regex');
  }
  public set regex(value: { [key: string]: string }) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#action DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * If represents metricsQL match expression (or list of expressions): '{__name__=~'foo_.*'}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#if DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#if}
  */
  readonly if?: { [key: string]: string };
  /**
  * Labels is used together with Match for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match is used together with Labels for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#match DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#match}
  */
  readonly match?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#modulus DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)' victoriaMetrics supports multiline regex joined with | https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#regex DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#regex}
  */
  readonly regex?: { [key: string]: string };
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#replacement DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#separator DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#source_labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#target_label DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    if: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.if),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    match: cdktf.stringToTerraform(struct!.match),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.if),
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
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._if !== undefined) {
      hasAnyValues = true;
      internalValueResult.if = this._if;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._if = undefined;
      this._labels = undefined;
      this._match = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._if = value.if;
      this._labels = value.labels;
      this._match = value.match;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // if - computed: false, optional: true, required: false
  private _if?: { [key: string]: string }; 
  public get if() {
    return this.getStringMapAttribute('if');
  }
  public set if(value: { [key: string]: string }) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: { [key: string]: string }; 
  public get regex() {
    return this.getStringMapAttribute('regex');
  }
  public set regex(value: { [key: string]: string }) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules {
  /**
  * By is an optional list of labels for grouping input series. See also Without. If neither By nor Without are set, then the Outputs are calculated individually per each input time series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#by DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#by}
  */
  readonly by?: string[];
  /**
  * DedupInterval is an optional interval for deduplication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#dedup_interval DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#dedup_interval}
  */
  readonly dedupInterval?: string;
  /**
  * DropInputLabels is an optional list with labels, which must be dropped before further processing of input samples. Labels are dropped before de-duplication and aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#drop_input_labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#drop_input_labels}
  */
  readonly dropInputLabels?: string[];
  /**
  * FlushOnShutdown defines whether to flush the aggregation state on process termination or config reload. Is 'false' by default. It is not recommended changing this setting, unless unfinished aggregations states are preferred to missing data points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#flush_on_shutdown DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#flush_on_shutdown}
  */
  readonly flushOnShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#ignore_first_intervals DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#ignore_first_intervals}
  */
  readonly ignoreFirstIntervals?: number;
  /**
  * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#ignore_old_samples DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#ignore_old_samples}
  */
  readonly ignoreOldSamples?: boolean | cdktf.IResolvable;
  /**
  * InputRelabelConfigs is an optional relabeling rules, which are applied on the input before aggregation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#input_relabel_configs DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#input_relabel_configs}
  */
  readonly inputRelabelConfigs?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs[] | cdktf.IResolvable;
  /**
  * Interval is the interval between aggregations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#interval DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#interval}
  */
  readonly interval: string;
  /**
  * KeepMetricNames instructs to leave metric names as is for the output time series without adding any suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#keep_metric_names DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#keep_metric_names}
  */
  readonly keepMetricNames?: boolean | cdktf.IResolvable;
  /**
  * Match is a label selector (or list of label selectors) for filtering time series for the given selector. If the match isn't set, then all the input time series are processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#match DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * NoAlignFlushToInterval disables aligning of flushes to multiples of Interval. By default flushes are aligned to Interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#no_align_flush_to_interval DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#no_align_flush_to_interval}
  */
  readonly noAlignFlushToInterval?: boolean | cdktf.IResolvable;
  /**
  * OutputRelabelConfigs is an optional relabeling rules, which are applied on the aggregated output before being sent to remote storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#output_relabel_configs DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#output_relabel_configs}
  */
  readonly outputRelabelConfigs?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs[] | cdktf.IResolvable;
  /**
  * Outputs is a list of output aggregate functions to produce. The following names are allowed: - total - aggregates input counters - increase - counts the increase over input counters - count_series - counts the input series - count_samples - counts the input samples - sum_samples - sums the input samples - last - the last biggest sample value - min - the minimum sample value - max - the maximum sample value - avg - the average value across all the samples - stddev - standard deviation across all the samples - stdvar - standard variance across all the samples - histogram_bucket - creates VictoriaMetrics histogram for input samples - quantiles(phi1, ..., phiN) - quantiles' estimation for phi in the range [0..1] The output time series will have the following names: input_name:aggr_<interval>_<output>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#outputs DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#outputs}
  */
  readonly outputs: string[];
  /**
  * Staleness interval is interval after which the series state will be reset if no samples have been sent during it. The parameter is only relevant for outputs: total, total_prometheus, increase, increase_prometheus and histogram_bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#staleness_interval DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#staleness_interval}
  */
  readonly stalenessInterval?: string;
  /**
  * Without is an optional list of labels, which must be excluded when grouping input series. See also By. If neither By nor Without are set, then the Outputs are calculated individually per each input time series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#without DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#without}
  */
  readonly without?: string[];
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.by),
    dedup_interval: cdktf.stringToTerraform(struct!.dedupInterval),
    drop_input_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dropInputLabels),
    flush_on_shutdown: cdktf.booleanToTerraform(struct!.flushOnShutdown),
    ignore_first_intervals: cdktf.numberToTerraform(struct!.ignoreFirstIntervals),
    ignore_old_samples: cdktf.booleanToTerraform(struct!.ignoreOldSamples),
    input_relabel_configs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsToTerraform, false)(struct!.inputRelabelConfigs),
    interval: cdktf.stringToTerraform(struct!.interval),
    keep_metric_names: cdktf.booleanToTerraform(struct!.keepMetricNames),
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    no_align_flush_to_interval: cdktf.booleanToTerraform(struct!.noAlignFlushToInterval),
    output_relabel_configs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsToTerraform, false)(struct!.outputRelabelConfigs),
    outputs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outputs),
    staleness_interval: cdktf.stringToTerraform(struct!.stalenessInterval),
    without: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.without),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.by),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dedup_interval: {
      value: cdktf.stringToHclTerraform(struct!.dedupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_input_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dropInputLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    flush_on_shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.flushOnShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_first_intervals: {
      value: cdktf.numberToHclTerraform(struct!.ignoreFirstIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_old_samples: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreOldSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    input_relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsToHclTerraform, false)(struct!.inputRelabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_metric_names: {
      value: cdktf.booleanToHclTerraform(struct!.keepMetricNames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_align_flush_to_interval: {
      value: cdktf.booleanToHclTerraform(struct!.noAlignFlushToInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsToHclTerraform, false)(struct!.outputRelabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsList",
    },
    outputs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outputs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    staleness_interval: {
      value: cdktf.stringToHclTerraform(struct!.stalenessInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    without: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.without),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._by !== undefined) {
      hasAnyValues = true;
      internalValueResult.by = this._by;
    }
    if (this._dedupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupInterval = this._dedupInterval;
    }
    if (this._dropInputLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropInputLabels = this._dropInputLabels;
    }
    if (this._flushOnShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.flushOnShutdown = this._flushOnShutdown;
    }
    if (this._ignoreFirstIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreFirstIntervals = this._ignoreFirstIntervals;
    }
    if (this._ignoreOldSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreOldSamples = this._ignoreOldSamples;
    }
    if (this._inputRelabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputRelabelConfigs = this._inputRelabelConfigs?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._keepMetricNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepMetricNames = this._keepMetricNames;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._noAlignFlushToInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAlignFlushToInterval = this._noAlignFlushToInterval;
    }
    if (this._outputRelabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputRelabelConfigs = this._outputRelabelConfigs?.internalValue;
    }
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    if (this._stalenessInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.stalenessInterval = this._stalenessInterval;
    }
    if (this._without !== undefined) {
      hasAnyValues = true;
      internalValueResult.without = this._without;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._by = undefined;
      this._dedupInterval = undefined;
      this._dropInputLabels = undefined;
      this._flushOnShutdown = undefined;
      this._ignoreFirstIntervals = undefined;
      this._ignoreOldSamples = undefined;
      this._inputRelabelConfigs.internalValue = undefined;
      this._interval = undefined;
      this._keepMetricNames = undefined;
      this._match = undefined;
      this._noAlignFlushToInterval = undefined;
      this._outputRelabelConfigs.internalValue = undefined;
      this._outputs = undefined;
      this._stalenessInterval = undefined;
      this._without = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._by = value.by;
      this._dedupInterval = value.dedupInterval;
      this._dropInputLabels = value.dropInputLabels;
      this._flushOnShutdown = value.flushOnShutdown;
      this._ignoreFirstIntervals = value.ignoreFirstIntervals;
      this._ignoreOldSamples = value.ignoreOldSamples;
      this._inputRelabelConfigs.internalValue = value.inputRelabelConfigs;
      this._interval = value.interval;
      this._keepMetricNames = value.keepMetricNames;
      this._match = value.match;
      this._noAlignFlushToInterval = value.noAlignFlushToInterval;
      this._outputRelabelConfigs.internalValue = value.outputRelabelConfigs;
      this._outputs = value.outputs;
      this._stalenessInterval = value.stalenessInterval;
      this._without = value.without;
    }
  }

  // by - computed: false, optional: true, required: false
  private _by?: string[]; 
  public get by() {
    return this.getListAttribute('by');
  }
  public set by(value: string[]) {
    this._by = value;
  }
  public resetBy() {
    this._by = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byInput() {
    return this._by;
  }

  // dedup_interval - computed: false, optional: true, required: false
  private _dedupInterval?: string; 
  public get dedupInterval() {
    return this.getStringAttribute('dedup_interval');
  }
  public set dedupInterval(value: string) {
    this._dedupInterval = value;
  }
  public resetDedupInterval() {
    this._dedupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupIntervalInput() {
    return this._dedupInterval;
  }

  // drop_input_labels - computed: false, optional: true, required: false
  private _dropInputLabels?: string[]; 
  public get dropInputLabels() {
    return this.getListAttribute('drop_input_labels');
  }
  public set dropInputLabels(value: string[]) {
    this._dropInputLabels = value;
  }
  public resetDropInputLabels() {
    this._dropInputLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInputLabelsInput() {
    return this._dropInputLabels;
  }

  // flush_on_shutdown - computed: false, optional: true, required: false
  private _flushOnShutdown?: boolean | cdktf.IResolvable; 
  public get flushOnShutdown() {
    return this.getBooleanAttribute('flush_on_shutdown');
  }
  public set flushOnShutdown(value: boolean | cdktf.IResolvable) {
    this._flushOnShutdown = value;
  }
  public resetFlushOnShutdown() {
    this._flushOnShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flushOnShutdownInput() {
    return this._flushOnShutdown;
  }

  // ignore_first_intervals - computed: false, optional: true, required: false
  private _ignoreFirstIntervals?: number; 
  public get ignoreFirstIntervals() {
    return this.getNumberAttribute('ignore_first_intervals');
  }
  public set ignoreFirstIntervals(value: number) {
    this._ignoreFirstIntervals = value;
  }
  public resetIgnoreFirstIntervals() {
    this._ignoreFirstIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFirstIntervalsInput() {
    return this._ignoreFirstIntervals;
  }

  // ignore_old_samples - computed: false, optional: true, required: false
  private _ignoreOldSamples?: boolean | cdktf.IResolvable; 
  public get ignoreOldSamples() {
    return this.getBooleanAttribute('ignore_old_samples');
  }
  public set ignoreOldSamples(value: boolean | cdktf.IResolvable) {
    this._ignoreOldSamples = value;
  }
  public resetIgnoreOldSamples() {
    this._ignoreOldSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOldSamplesInput() {
    return this._ignoreOldSamples;
  }

  // input_relabel_configs - computed: false, optional: true, required: false
  private _inputRelabelConfigs = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigsList(this, "input_relabel_configs", false);
  public get inputRelabelConfigs() {
    return this._inputRelabelConfigs;
  }
  public putInputRelabelConfigs(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesInputRelabelConfigs[] | cdktf.IResolvable) {
    this._inputRelabelConfigs.internalValue = value;
  }
  public resetInputRelabelConfigs() {
    this._inputRelabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRelabelConfigsInput() {
    return this._inputRelabelConfigs.internalValue;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // keep_metric_names - computed: false, optional: true, required: false
  private _keepMetricNames?: boolean | cdktf.IResolvable; 
  public get keepMetricNames() {
    return this.getBooleanAttribute('keep_metric_names');
  }
  public set keepMetricNames(value: boolean | cdktf.IResolvable) {
    this._keepMetricNames = value;
  }
  public resetKeepMetricNames() {
    this._keepMetricNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMetricNamesInput() {
    return this._keepMetricNames;
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // no_align_flush_to_interval - computed: false, optional: true, required: false
  private _noAlignFlushToInterval?: boolean | cdktf.IResolvable; 
  public get noAlignFlushToInterval() {
    return this.getBooleanAttribute('no_align_flush_to_interval');
  }
  public set noAlignFlushToInterval(value: boolean | cdktf.IResolvable) {
    this._noAlignFlushToInterval = value;
  }
  public resetNoAlignFlushToInterval() {
    this._noAlignFlushToInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAlignFlushToIntervalInput() {
    return this._noAlignFlushToInterval;
  }

  // output_relabel_configs - computed: false, optional: true, required: false
  private _outputRelabelConfigs = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigsList(this, "output_relabel_configs", false);
  public get outputRelabelConfigs() {
    return this._outputRelabelConfigs;
  }
  public putOutputRelabelConfigs(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputRelabelConfigs[] | cdktf.IResolvable) {
    this._outputRelabelConfigs.internalValue = value;
  }
  public resetOutputRelabelConfigs() {
    this._outputRelabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputRelabelConfigsInput() {
    return this._outputRelabelConfigs.internalValue;
  }

  // outputs - computed: false, optional: false, required: true
  private _outputs?: string[]; 
  public get outputs() {
    return this.getListAttribute('outputs');
  }
  public set outputs(value: string[]) {
    this._outputs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // staleness_interval - computed: false, optional: true, required: false
  private _stalenessInterval?: string; 
  public get stalenessInterval() {
    return this.getStringAttribute('staleness_interval');
  }
  public set stalenessInterval(value: string) {
    this._stalenessInterval = value;
  }
  public resetStalenessInterval() {
    this._stalenessInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stalenessIntervalInput() {
    return this._stalenessInterval;
  }

  // without - computed: false, optional: true, required: false
  private _without?: string[]; 
  public get without() {
    return this.getListAttribute('without');
  }
  public set without(value: string[]) {
    this._without = value;
  }
  public resetWithout() {
    this._without = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withoutInput() {
    return this._without;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig {
  /**
  * ConfigMap with stream aggregation rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#configmap DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#configmap}
  */
  readonly configmap?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap;
  /**
  * Allows setting different de-duplication intervals per each configured remote storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#dedup_interval DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#dedup_interval}
  */
  readonly dedupInterval?: string;
  /**
  * Allow drop all the input samples after the aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#drop_input DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#drop_input}
  */
  readonly dropInput?: boolean | cdktf.IResolvable;
  /**
  * labels to drop from samples for aggregator before stream de-duplication and aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#drop_input_labels DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#drop_input_labels}
  */
  readonly dropInputLabels?: string[];
  /**
  * IgnoreFirstIntervals instructs to ignore first interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#ignore_first_intervals DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#ignore_first_intervals}
  */
  readonly ignoreFirstIntervals?: number;
  /**
  * IgnoreOldSamples instructs to ignore samples with old timestamps outside the current aggregation interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#ignore_old_samples DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#ignore_old_samples}
  */
  readonly ignoreOldSamples?: boolean | cdktf.IResolvable;
  /**
  * Allows writing both raw and aggregate data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#keep_input DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#keep_input}
  */
  readonly keepInput?: boolean | cdktf.IResolvable;
  /**
  * Stream aggregation rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#rules DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#rules}
  */
  readonly rules?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmap: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapToTerraform(struct!.configmap),
    dedup_interval: cdktf.stringToTerraform(struct!.dedupInterval),
    drop_input: cdktf.booleanToTerraform(struct!.dropInput),
    drop_input_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dropInputLabels),
    ignore_first_intervals: cdktf.numberToTerraform(struct!.ignoreFirstIntervals),
    ignore_old_samples: cdktf.booleanToTerraform(struct!.ignoreOldSamples),
    keep_input: cdktf.booleanToTerraform(struct!.keepInput),
    rules: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesToTerraform, false)(struct!.rules),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configmap: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapToHclTerraform(struct!.configmap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap",
    },
    dedup_interval: {
      value: cdktf.stringToHclTerraform(struct!.dedupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_input: {
      value: cdktf.booleanToHclTerraform(struct!.dropInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drop_input_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dropInputLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_first_intervals: {
      value: cdktf.numberToHclTerraform(struct!.ignoreFirstIntervals),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_old_samples: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreOldSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_input: {
      value: cdktf.booleanToHclTerraform(struct!.keepInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configmap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmap = this._configmap?.internalValue;
    }
    if (this._dedupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedupInterval = this._dedupInterval;
    }
    if (this._dropInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropInput = this._dropInput;
    }
    if (this._dropInputLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropInputLabels = this._dropInputLabels;
    }
    if (this._ignoreFirstIntervals !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreFirstIntervals = this._ignoreFirstIntervals;
    }
    if (this._ignoreOldSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreOldSamples = this._ignoreOldSamples;
    }
    if (this._keepInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepInput = this._keepInput;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configmap.internalValue = undefined;
      this._dedupInterval = undefined;
      this._dropInput = undefined;
      this._dropInputLabels = undefined;
      this._ignoreFirstIntervals = undefined;
      this._ignoreOldSamples = undefined;
      this._keepInput = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configmap.internalValue = value.configmap;
      this._dedupInterval = value.dedupInterval;
      this._dropInput = value.dropInput;
      this._dropInputLabels = value.dropInputLabels;
      this._ignoreFirstIntervals = value.ignoreFirstIntervals;
      this._ignoreOldSamples = value.ignoreOldSamples;
      this._keepInput = value.keepInput;
      this._rules.internalValue = value.rules;
    }
  }

  // configmap - computed: false, optional: true, required: false
  private _configmap = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmapOutputReference(this, "configmap");
  public get configmap() {
    return this._configmap;
  }
  public putConfigmap(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigConfigmap) {
    this._configmap.internalValue = value;
  }
  public resetConfigmap() {
    this._configmap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapInput() {
    return this._configmap.internalValue;
  }

  // dedup_interval - computed: false, optional: true, required: false
  private _dedupInterval?: string; 
  public get dedupInterval() {
    return this.getStringAttribute('dedup_interval');
  }
  public set dedupInterval(value: string) {
    this._dedupInterval = value;
  }
  public resetDedupInterval() {
    this._dedupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedupIntervalInput() {
    return this._dedupInterval;
  }

  // drop_input - computed: false, optional: true, required: false
  private _dropInput?: boolean | cdktf.IResolvable; 
  public get dropInput() {
    return this.getBooleanAttribute('drop_input');
  }
  public set dropInput(value: boolean | cdktf.IResolvable) {
    this._dropInput = value;
  }
  public resetDropInput() {
    this._dropInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInputInput() {
    return this._dropInput;
  }

  // drop_input_labels - computed: false, optional: true, required: false
  private _dropInputLabels?: string[]; 
  public get dropInputLabels() {
    return this.getListAttribute('drop_input_labels');
  }
  public set dropInputLabels(value: string[]) {
    this._dropInputLabels = value;
  }
  public resetDropInputLabels() {
    this._dropInputLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInputLabelsInput() {
    return this._dropInputLabels;
  }

  // ignore_first_intervals - computed: false, optional: true, required: false
  private _ignoreFirstIntervals?: number; 
  public get ignoreFirstIntervals() {
    return this.getNumberAttribute('ignore_first_intervals');
  }
  public set ignoreFirstIntervals(value: number) {
    this._ignoreFirstIntervals = value;
  }
  public resetIgnoreFirstIntervals() {
    this._ignoreFirstIntervals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFirstIntervalsInput() {
    return this._ignoreFirstIntervals;
  }

  // ignore_old_samples - computed: false, optional: true, required: false
  private _ignoreOldSamples?: boolean | cdktf.IResolvable; 
  public get ignoreOldSamples() {
    return this.getBooleanAttribute('ignore_old_samples');
  }
  public set ignoreOldSamples(value: boolean | cdktf.IResolvable) {
    this._ignoreOldSamples = value;
  }
  public resetIgnoreOldSamples() {
    this._ignoreOldSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOldSamplesInput() {
    return this._ignoreOldSamples;
  }

  // keep_input - computed: false, optional: true, required: false
  private _keepInput?: boolean | cdktf.IResolvable; 
  public get keepInput() {
    return this.getBooleanAttribute('keep_input');
  }
  public set keepInput(value: boolean | cdktf.IResolvable) {
    this._keepInput = value;
  }
  public resetKeepInput() {
    this._keepInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepInputInput() {
    return this._keepInput;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#effect DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#toleration_seconds DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#api_version DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#field_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#container_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#divisor DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#resource DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#config_map_key_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#field_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#resource_field_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#secret_key_ref DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#value DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#value_from DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage {
  /**
  * PullPolicy describes how to pull docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#pull_policy DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#pull_policy}
  */
  readonly pullPolicy?: string;
  /**
  * Repository contains name of docker image + it's repository if needed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#repository DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag contains desired docker image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#tag DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_policy: cdktf.stringToTerraform(struct!.pullPolicy),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.pullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullPolicy = this._pullPolicy;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pullPolicy = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pullPolicy = value.pullPolicy;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // pull_policy - computed: false, optional: true, required: false
  private _pullPolicy?: string; 
  public get pullPolicy() {
    return this.getStringAttribute('pull_policy');
  }
  public set pullPolicy(value: string) {
    this._pullPolicy = value;
  }
  public resetPullPolicy() {
    this._pullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullPolicyInput() {
    return this._pullPolicy;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#claims DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#limits DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#requests DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart {
  /**
  * Enabled defines if restore on start enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#enabled DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore {
  /**
  * OnStart defines configuration for restore on pod start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#on_start DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#on_start}
  */
  readonly onStart?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_start: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartToTerraform(struct!.onStart),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_start: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartToHclTerraform(struct!.onStart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStart = this._onStart?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._onStart.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._onStart.internalValue = value.onStart;
    }
  }

  // on_start - computed: false, optional: true, required: false
  private _onStart = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStartOutputReference(this, "on_start");
  public get onStart() {
    return this._onStart;
  }
  public putOnStart(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOnStart) {
    this._onStart.internalValue = value;
  }
  public resetOnStart() {
    this._onStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartInput() {
    return this._onStart.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#mount_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#mount_propagation DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#read_only DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#recursive_read_only DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#sub_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#sub_path_expr DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup {
  /**
  * AcceptEULA accepts enterprise feature usage, must be set to true. otherwise backupmanager cannot be added to single/cluster version. https://victoriametrics.com/legal/esa/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#accept_eula DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#accept_eula}
  */
  readonly acceptEula?: boolean | cdktf.IResolvable;
  /**
  * Defines number of concurrent workers. Higher concurrency may reduce backup duration (default 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#concurrency DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * CredentialsSecret is secret in the same namespace for access to remote storage The secret is mounted into /etc/vm/creds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#credentials_secret DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#credentials_secret}
  */
  readonly credentialsSecret?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret;
  /**
  * Custom S3 endpoint for use with S3-compatible storages (e.g. MinIO). S3 is used if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#custom_s3_endpoint DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#custom_s3_endpoint}
  */
  readonly customS3Endpoint?: string;
  /**
  * Defines destination for backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#destination DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#destination}
  */
  readonly destination?: string;
  /**
  * DestinationDisableSuffixAdd - disables suffix adding for cluster version backups each vmstorage backup must have unique backup folder so operator adds POD_NAME as suffix for backup destination folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#destination_disable_suffix_add DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#destination_disable_suffix_add}
  */
  readonly destinationDisableSuffixAdd?: boolean | cdktf.IResolvable;
  /**
  * Defines if daily backups disabled (default false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#disable_daily DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#disable_daily}
  */
  readonly disableDaily?: boolean | cdktf.IResolvable;
  /**
  * Defines if hourly backups disabled (default false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#disable_hourly DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#disable_hourly}
  */
  readonly disableHourly?: boolean | cdktf.IResolvable;
  /**
  * Defines if monthly backups disabled (default false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#disable_monthly DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#disable_monthly}
  */
  readonly disableMonthly?: boolean | cdktf.IResolvable;
  /**
  * Defines if weekly backups disabled (default false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#disable_weekly DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#disable_weekly}
  */
  readonly disableWeekly?: boolean | cdktf.IResolvable;
  /**
  * extra args like maxBytesPerSecond default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#extra_args DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#extra_envs DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#extra_envs}
  */
  readonly extraEnvs?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs[] | cdktf.IResolvable;
  /**
  * Image - docker image settings for VMBackuper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#image DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#image}
  */
  readonly image?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage;
  /**
  * LogFormat for VMBackup to be configured with. default or json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#log_format DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * LogLevel for VMBackup to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#log_level DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * Port for health check connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources;
  /**
  * Restore Allows to enable restore options for pod Read [more](https://docs.victoriametrics.com/vmbackupmanager#restore-commands)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#restore DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#restore}
  */
  readonly restore?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore;
  /**
  * SnapshotCreateURL overwrites url for snapshot create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#snapshot_create_url DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#snapshot_create_url}
  */
  readonly snapshotCreateUrl?: string;
  /**
  * SnapShotDeleteURL overwrites url for snapshot delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#snapshot_delete_url DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#snapshot_delete_url}
  */
  readonly snapshotDeleteUrl?: string;
  /**
  * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment definition. VolumeMounts specified will be appended to other VolumeMounts in the vmbackupmanager container, that are generated as a result of StorageSpec objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volume_mounts DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    credentials_secret: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretToTerraform(struct!.credentialsSecret),
    custom_s3_endpoint: cdktf.stringToTerraform(struct!.customS3Endpoint),
    destination: cdktf.stringToTerraform(struct!.destination),
    destination_disable_suffix_add: cdktf.booleanToTerraform(struct!.destinationDisableSuffixAdd),
    disable_daily: cdktf.booleanToTerraform(struct!.disableDaily),
    disable_hourly: cdktf.booleanToTerraform(struct!.disableHourly),
    disable_monthly: cdktf.booleanToTerraform(struct!.disableMonthly),
    disable_weekly: cdktf.booleanToTerraform(struct!.disableWeekly),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_envs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsToTerraform, false)(struct!.extraEnvs),
    image: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageToTerraform(struct!.image),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    port: cdktf.stringToTerraform(struct!.port),
    resources: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesToTerraform(struct!.resources),
    restore: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreToTerraform(struct!.restore),
    snapshot_create_url: cdktf.stringToTerraform(struct!.snapshotCreateUrl),
    snapshot_delete_url: cdktf.stringToTerraform(struct!.snapshotDeleteUrl),
    volume_mounts: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credentials_secret: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretToHclTerraform(struct!.credentialsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret",
    },
    custom_s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.customS3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_disable_suffix_add: {
      value: cdktf.booleanToHclTerraform(struct!.destinationDisableSuffixAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_daily: {
      value: cdktf.booleanToHclTerraform(struct!.disableDaily),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_hourly: {
      value: cdktf.booleanToHclTerraform(struct!.disableHourly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_monthly: {
      value: cdktf.booleanToHclTerraform(struct!.disableMonthly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_weekly: {
      value: cdktf.booleanToHclTerraform(struct!.disableWeekly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_envs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsToHclTerraform, false)(struct!.extraEnvs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsList",
    },
    image: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources",
    },
    restore: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreToHclTerraform(struct!.restore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore",
    },
    snapshot_create_url: {
      value: cdktf.stringToHclTerraform(struct!.snapshotCreateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_delete_url: {
      value: cdktf.stringToHclTerraform(struct!.snapshotDeleteUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._credentialsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret?.internalValue;
    }
    if (this._customS3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.customS3Endpoint = this._customS3Endpoint;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._destinationDisableSuffixAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDisableSuffixAdd = this._destinationDisableSuffixAdd;
    }
    if (this._disableDaily !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDaily = this._disableDaily;
    }
    if (this._disableHourly !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHourly = this._disableHourly;
    }
    if (this._disableMonthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMonthly = this._disableMonthly;
    }
    if (this._disableWeekly !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWeekly = this._disableWeekly;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraEnvs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvs = this._extraEnvs?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restore = this._restore?.internalValue;
    }
    if (this._snapshotCreateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotCreateUrl = this._snapshotCreateUrl;
    }
    if (this._snapshotDeleteUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotDeleteUrl = this._snapshotDeleteUrl;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptEula = undefined;
      this._concurrency = undefined;
      this._credentialsSecret.internalValue = undefined;
      this._customS3Endpoint = undefined;
      this._destination = undefined;
      this._destinationDisableSuffixAdd = undefined;
      this._disableDaily = undefined;
      this._disableHourly = undefined;
      this._disableMonthly = undefined;
      this._disableWeekly = undefined;
      this._extraArgs = undefined;
      this._extraEnvs.internalValue = undefined;
      this._image.internalValue = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._port = undefined;
      this._resources.internalValue = undefined;
      this._restore.internalValue = undefined;
      this._snapshotCreateUrl = undefined;
      this._snapshotDeleteUrl = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptEula = value.acceptEula;
      this._concurrency = value.concurrency;
      this._credentialsSecret.internalValue = value.credentialsSecret;
      this._customS3Endpoint = value.customS3Endpoint;
      this._destination = value.destination;
      this._destinationDisableSuffixAdd = value.destinationDisableSuffixAdd;
      this._disableDaily = value.disableDaily;
      this._disableHourly = value.disableHourly;
      this._disableMonthly = value.disableMonthly;
      this._disableWeekly = value.disableWeekly;
      this._extraArgs = value.extraArgs;
      this._extraEnvs.internalValue = value.extraEnvs;
      this._image.internalValue = value.image;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._port = value.port;
      this._resources.internalValue = value.resources;
      this._restore.internalValue = value.restore;
      this._snapshotCreateUrl = value.snapshotCreateUrl;
      this._snapshotDeleteUrl = value.snapshotDeleteUrl;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // credentials_secret - computed: false, optional: true, required: false
  private _credentialsSecret = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecretOutputReference(this, "credentials_secret");
  public get credentialsSecret() {
    return this._credentialsSecret;
  }
  public putCredentialsSecret(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupCredentialsSecret) {
    this._credentialsSecret.internalValue = value;
  }
  public resetCredentialsSecret() {
    this._credentialsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret.internalValue;
  }

  // custom_s3_endpoint - computed: false, optional: true, required: false
  private _customS3Endpoint?: string; 
  public get customS3Endpoint() {
    return this.getStringAttribute('custom_s3_endpoint');
  }
  public set customS3Endpoint(value: string) {
    this._customS3Endpoint = value;
  }
  public resetCustomS3Endpoint() {
    this._customS3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customS3EndpointInput() {
    return this._customS3Endpoint;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_disable_suffix_add - computed: false, optional: true, required: false
  private _destinationDisableSuffixAdd?: boolean | cdktf.IResolvable; 
  public get destinationDisableSuffixAdd() {
    return this.getBooleanAttribute('destination_disable_suffix_add');
  }
  public set destinationDisableSuffixAdd(value: boolean | cdktf.IResolvable) {
    this._destinationDisableSuffixAdd = value;
  }
  public resetDestinationDisableSuffixAdd() {
    this._destinationDisableSuffixAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDisableSuffixAddInput() {
    return this._destinationDisableSuffixAdd;
  }

  // disable_daily - computed: false, optional: true, required: false
  private _disableDaily?: boolean | cdktf.IResolvable; 
  public get disableDaily() {
    return this.getBooleanAttribute('disable_daily');
  }
  public set disableDaily(value: boolean | cdktf.IResolvable) {
    this._disableDaily = value;
  }
  public resetDisableDaily() {
    this._disableDaily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDailyInput() {
    return this._disableDaily;
  }

  // disable_hourly - computed: false, optional: true, required: false
  private _disableHourly?: boolean | cdktf.IResolvable; 
  public get disableHourly() {
    return this.getBooleanAttribute('disable_hourly');
  }
  public set disableHourly(value: boolean | cdktf.IResolvable) {
    this._disableHourly = value;
  }
  public resetDisableHourly() {
    this._disableHourly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHourlyInput() {
    return this._disableHourly;
  }

  // disable_monthly - computed: false, optional: true, required: false
  private _disableMonthly?: boolean | cdktf.IResolvable; 
  public get disableMonthly() {
    return this.getBooleanAttribute('disable_monthly');
  }
  public set disableMonthly(value: boolean | cdktf.IResolvable) {
    this._disableMonthly = value;
  }
  public resetDisableMonthly() {
    this._disableMonthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMonthlyInput() {
    return this._disableMonthly;
  }

  // disable_weekly - computed: false, optional: true, required: false
  private _disableWeekly?: boolean | cdktf.IResolvable; 
  public get disableWeekly() {
    return this.getBooleanAttribute('disable_weekly');
  }
  public set disableWeekly(value: boolean | cdktf.IResolvable) {
    this._disableWeekly = value;
  }
  public resetDisableWeekly() {
    this._disableWeekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWeeklyInput() {
    return this._disableWeekly;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_envs - computed: false, optional: true, required: false
  private _extraEnvs = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvsList(this, "extra_envs", false);
  public get extraEnvs() {
    return this._extraEnvs;
  }
  public putExtraEnvs(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupExtraEnvs[] | cdktf.IResolvable) {
    this._extraEnvs.internalValue = value;
  }
  public resetExtraEnvs() {
    this._extraEnvs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvsInput() {
    return this._extraEnvs.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restore - computed: false, optional: true, required: false
  private _restore = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestoreOutputReference(this, "restore");
  public get restore() {
    return this._restore;
  }
  public putRestore(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupRestore) {
    this._restore.internalValue = value;
  }
  public resetRestore() {
    this._restore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreInput() {
    return this._restore.internalValue;
  }

  // snapshot_create_url - computed: false, optional: true, required: false
  private _snapshotCreateUrl?: string; 
  public get snapshotCreateUrl() {
    return this.getStringAttribute('snapshot_create_url');
  }
  public set snapshotCreateUrl(value: string) {
    this._snapshotCreateUrl = value;
  }
  public resetSnapshotCreateUrl() {
    this._snapshotCreateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotCreateUrlInput() {
    return this._snapshotCreateUrl;
  }

  // snapshot_delete_url - computed: false, optional: true, required: false
  private _snapshotDeleteUrl?: string; 
  public get snapshotDeleteUrl() {
    return this.getStringAttribute('snapshot_delete_url');
  }
  public set snapshotDeleteUrl(value: string) {
    this._snapshotDeleteUrl = value;
  }
  public resetSnapshotDeleteUrl() {
    this._snapshotDeleteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotDeleteUrlInput() {
    return this._snapshotDeleteUrl;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#mount_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#mount_propagation DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#read_only DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#recursive_read_only DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#sub_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#sub_path_expr DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec {
  /**
  * Affinity If specified, the pod's scheduling constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#affinity DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#affinity}
  */
  readonly affinity?: { [key: string]: string };
  /**
  * ConfigMaps is a list of ConfigMaps in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/configs/CONFIGMAP_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#config_maps DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#config_maps}
  */
  readonly configMaps?: string[];
  /**
  * Containers property allows to inject additions sidecars or to patch existing containers. It can be useful for proxies, backup, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#containers DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#containers}
  */
  readonly containers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * DisableSelfServiceScrape controls creation of VMServiceScrape by operator for the application. Has priority over 'VM_DISABLESELFSERVICESCRAPECREATION' operator env variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#disable_self_service_scrape DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#disable_self_service_scrape}
  */
  readonly disableSelfServiceScrape?: boolean | cdktf.IResolvable;
  /**
  * Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#dns_config DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#dns_config}
  */
  readonly dnsConfig?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig;
  /**
  * DNSPolicy sets DNS policy for the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#dns_policy DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#dns_policy}
  */
  readonly dnsPolicy?: string;
  /**
  * ExtraArgs that will be passed to the application container for example remoteWrite.tmpDataPath: /tmp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#extra_args DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#extra_args}
  */
  readonly extraArgs?: { [key: string]: string };
  /**
  * ExtraEnvs that will be passed to the application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#extra_envs DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#extra_envs}
  */
  readonly extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * HostAliases provides mapping for ip and hostname, that would be propagated to pod, cannot be used with HostNetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#host_aliases DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#host_aliases}
  */
  readonly hostAliases?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable;
  /**
  * HostNetwork controls whether the pod may use the node network namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#host_network DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Image - docker image settings if no specified operator uses default version from operator config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#image DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#image}
  */
  readonly image?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage;
  /**
  * ImagePullSecrets An optional list of references to secrets in the same namespace to use for pulling images from registries see https://kubernetes.io/docs/concepts/containers/images/#referring-to-an-imagepullsecrets-on-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#image_pull_secrets DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InitContainers allows adding initContainers to the pod definition. Any errors during the execution of an initContainer will lead to a restart of the Pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#init_containers DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * InsertPorts - additional listen ports for data ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#insert_ports DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#insert_ports}
  */
  readonly insertPorts?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts;
  /**
  * License allows to configure license key to be used for enterprise features. Using license key is supported starting from VictoriaMetrics v1.94.0. See [here](https://docs.victoriametrics.com/enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#license DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#license}
  */
  readonly license?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense;
  /**
  * LivenessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#liveness_probe DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: { [key: string]: string };
  /**
  * LogFormat for VMSingle to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#log_format DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#log_format}
  */
  readonly logFormat?: string;
  /**
  * LogLevel for victoria metrics single to be configured with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#log_level DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * MinReadySeconds defines a minim number os seconds to wait before starting update next pod if previous in healthy state Has no effect for VLogs and VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#min_ready_seconds DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NodeSelector Define which Nodes the Pods are scheduled on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#node_selector DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Paused If set to true all actions on the underlying managed objects are not going to be performed, except for delete actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#paused DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * PodMetadata configures Labels and Annotations which are propagated to the VMSingle pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#pod_metadata DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#pod_metadata}
  */
  readonly podMetadata?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata;
  /**
  * Port listen address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * PriorityClassName class assigned to the Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#priority_class_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * ReadinessGates defines pod readiness gates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#readiness_gates DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * ReadinessProbe that will be added CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#readiness_probe DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: { [key: string]: string };
  /**
  * RemovePvcAfterDelete - if true, controller adds ownership to pvc and after VMSingle object deletion - pvc will be garbage collected by controller manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#remove_pvc_after_delete DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#remove_pvc_after_delete}
  */
  readonly removePvcAfterDelete?: boolean | cdktf.IResolvable;
  /**
  * ReplicaCount is the expected size of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#replica_count DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * Resources container resource request and limits, https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ if not defined default resources from operator config will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#resources DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources;
  /**
  * RetentionPeriod for the stored metrics Note VictoriaMetrics has data/ and indexdb/ folders metrics from data/ removed eventually as soon as partition leaves retention period reverse index data at indexdb rotates once at the half of configured [retention period](https://docs.victoriametrics.com/Single-server-VictoriaMetrics/#retention)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#retention_period DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#retention_period}
  */
  readonly retentionPeriod: string;
  /**
  * The number of old ReplicaSets to retain to allow rollback in deployment or maximum number of revisions that will be maintained in the Deployment revision history. Has no effect at StatefulSets Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#revision_history_limit_count DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#revision_history_limit_count}
  */
  readonly revisionHistoryLimitCount?: number;
  /**
  * RuntimeClassName - defines runtime class for kubernetes pod. https://kubernetes.io/docs/concepts/containers/runtime-class/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#runtime_class_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#runtime_class_name}
  */
  readonly runtimeClassName?: string;
  /**
  * SchedulerName - defines kubernetes scheduler name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#scheduler_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Secrets is a list of Secrets in the same namespace as the Application object, which shall be mounted into the Application container at /etc/vm/secrets/SECRET_NAME folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#secrets DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#secrets}
  */
  readonly secrets?: string[];
  /**
  * SecurityContext holds pod-level security attributes and common container settings. This defaults to the default PodSecurityContext.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#security_context DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#security_context}
  */
  readonly securityContext?: { [key: string]: string };
  /**
  * ServiceAccountName is the name of the ServiceAccount to use to run the pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#service_account_name DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * ServiceScrapeSpec that will be added to vmsingle VMServiceScrape spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#service_scrape_spec DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#service_scrape_spec}
  */
  readonly serviceScrapeSpec?: { [key: string]: string };
  /**
  * ServiceSpec that will be added to vmsingle service spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#service_spec DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#service_spec}
  */
  readonly serviceSpec?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec;
  /**
  * StartupProbe that will be added to CRD pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#startup_probe DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: { [key: string]: string };
  /**
  * Storage is the definition of how storage will be used by the VMSingle by default it's empty dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#storage DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#storage}
  */
  readonly storage?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage;
  /**
  * StorageDataPath disables spec.storage option and overrides arg for victoria-metrics binary --storageDataPath, its users responsibility to mount proper device into given path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#storage_data_path DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#storage_data_path}
  */
  readonly storageDataPath?: string;
  /**
  * StorageMeta defines annotations and labels attached to PVC for given vmsingle CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#storage_metadata DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#storage_metadata}
  */
  readonly storageMetadata?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata;
  /**
  * StreamAggrConfig defines stream aggregation configuration for VMSingle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#stream_aggr_config DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#stream_aggr_config}
  */
  readonly streamAggrConfig?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig;
  /**
  * TerminationGracePeriodSeconds period for container graceful termination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#termination_grace_period_seconds DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Tolerations If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#tolerations DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints embedded kubernetes pod configuration option, controls how pods are spread across your cluster among failure-domains such as regions, zones, nodes, and other user-defined topology domains https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#topology_spread_constraints DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * UseDefaultResources controls resource settings By default, operator sets built-in resource requirements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#use_default_resources DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#use_default_resources}
  */
  readonly useDefaultResources?: boolean | cdktf.IResolvable;
  /**
  * UseStrictSecurity enables strict security mode for component it restricts disk writes access uses non-root user out of the box drops not needed security permissions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#use_strict_security DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#use_strict_security}
  */
  readonly useStrictSecurity?: boolean | cdktf.IResolvable;
  /**
  * VMBackup configuration for backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#vm_backup DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#vm_backup}
  */
  readonly vmBackup?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup;
  /**
  * VolumeMounts allows configuration of additional VolumeMounts on the output Deployment/StatefulSet definition. VolumeMounts specified will be appended to other VolumeMounts in the Application container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volume_mounts DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable;
  /**
  * Volumes allows configuration of additional volumes on the output Deployment/StatefulSet definition. Volumes specified will be appended to other volumes that are generated. / +optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#volumes DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest#volumes}
  */
  readonly volumes?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.affinity),
    config_maps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configMaps),
    containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.containers),
    disable_self_service_scrape: cdktf.booleanToTerraform(struct!.disableSelfServiceScrape),
    dns_config: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigToTerraform(struct!.dnsConfig),
    dns_policy: cdktf.stringToTerraform(struct!.dnsPolicy),
    extra_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraArgs),
    extra_envs: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.extraEnvs),
    host_aliases: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesToTerraform, false)(struct!.hostAliases),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.initContainers),
    insert_ports: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsToTerraform(struct!.insertPorts),
    license: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseToTerraform(struct!.license),
    liveness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.livenessProbe),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    paused: cdktf.booleanToTerraform(struct!.paused),
    pod_metadata: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataToTerraform(struct!.podMetadata),
    port: cdktf.stringToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    readiness_gates: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    readiness_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.readinessProbe),
    remove_pvc_after_delete: cdktf.booleanToTerraform(struct!.removePvcAfterDelete),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    resources: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesToTerraform(struct!.resources),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
    revision_history_limit_count: cdktf.numberToTerraform(struct!.revisionHistoryLimitCount),
    runtime_class_name: cdktf.stringToTerraform(struct!.runtimeClassName),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secrets),
    security_context: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.securityContext),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    service_scrape_spec: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceScrapeSpec),
    service_spec: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecToTerraform(struct!.serviceSpec),
    startup_probe: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.startupProbe),
    storage: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageToTerraform(struct!.storage),
    storage_data_path: cdktf.stringToTerraform(struct!.storageDataPath),
    storage_metadata: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataToTerraform(struct!.storageMetadata),
    stream_aggr_config: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigToTerraform(struct!.streamAggrConfig),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    tolerations: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.topologySpreadConstraints),
    use_default_resources: cdktf.booleanToTerraform(struct!.useDefaultResources),
    use_strict_security: cdktf.booleanToTerraform(struct!.useStrictSecurity),
    vm_backup: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupToTerraform(struct!.vmBackup),
    volume_mounts: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.volumes),
  }
}


export function dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.affinity),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_maps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configMaps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    disable_self_service_scrape: {
      value: cdktf.booleanToHclTerraform(struct!.disableSelfServiceScrape),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_config: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig",
    },
    dns_policy: {
      value: cdktf.stringToHclTerraform(struct!.dnsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_envs: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.extraEnvs),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    host_aliases: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesToHclTerraform, false)(struct!.hostAliases),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.initContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    insert_ports: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsToHclTerraform(struct!.insertPorts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts",
    },
    license: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense",
    },
    liveness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.livenessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_metadata: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataToHclTerraform(struct!.podMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesList",
    },
    readiness_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.readinessProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove_pvc_after_delete: {
      value: cdktf.booleanToHclTerraform(struct!.removePvcAfterDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_context: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.securityContext),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_scrape_spec: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceScrapeSpec),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_spec: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecToHclTerraform(struct!.serviceSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec",
    },
    startup_probe: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.startupProbe),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage",
    },
    storage_data_path: {
      value: cdktf.stringToHclTerraform(struct!.storageDataPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_metadata: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataToHclTerraform(struct!.storageMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata",
    },
    stream_aggr_config: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigToHclTerraform(struct!.streamAggrConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.topologySpreadConstraints),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    use_default_resources: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_strict_security: {
      value: cdktf.booleanToHclTerraform(struct!.useStrictSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_backup: {
      value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupToHclTerraform(struct!.vmBackup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._configMaps !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._disableSelfServiceScrape !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSelfServiceScrape = this._disableSelfServiceScrape;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._dnsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicy = this._dnsPolicy;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._extraEnvs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraEnvs = this._extraEnvs;
    }
    if (this._hostAliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAliases = this._hostAliases?.internalValue;
    }
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._insertPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertPorts = this._insertPorts?.internalValue;
    }
    if (this._license?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license?.internalValue;
    }
    if (this._livenessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._podMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podMetadata = this._podMetadata?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._readinessProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe;
    }
    if (this._removePvcAfterDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePvcAfterDelete = this._removePvcAfterDelete;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._revisionHistoryLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimitCount = this._revisionHistoryLimitCount;
    }
    if (this._runtimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClassName = this._runtimeClassName;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._secrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets;
    }
    if (this._securityContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._serviceScrapeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceScrapeSpec = this._serviceScrapeSpec;
    }
    if (this._serviceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSpec = this._serviceSpec?.internalValue;
    }
    if (this._startupProbe !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._storageDataPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDataPath = this._storageDataPath;
    }
    if (this._storageMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMetadata = this._storageMetadata?.internalValue;
    }
    if (this._streamAggrConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAggrConfig = this._streamAggrConfig?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints;
    }
    if (this._useDefaultResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultResources = this._useDefaultResources;
    }
    if (this._useStrictSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStrictSecurity = this._useStrictSecurity;
    }
    if (this._vmBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmBackup = this._vmBackup?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._configMaps = undefined;
      this._containers = undefined;
      this._disableSelfServiceScrape = undefined;
      this._dnsConfig.internalValue = undefined;
      this._dnsPolicy = undefined;
      this._extraArgs = undefined;
      this._extraEnvs = undefined;
      this._hostAliases.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainers = undefined;
      this._insertPorts.internalValue = undefined;
      this._license.internalValue = undefined;
      this._livenessProbe = undefined;
      this._logFormat = undefined;
      this._logLevel = undefined;
      this._minReadySeconds = undefined;
      this._nodeSelector = undefined;
      this._paused = undefined;
      this._podMetadata.internalValue = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._readinessGates.internalValue = undefined;
      this._readinessProbe = undefined;
      this._removePvcAfterDelete = undefined;
      this._replicaCount = undefined;
      this._resources.internalValue = undefined;
      this._retentionPeriod = undefined;
      this._revisionHistoryLimitCount = undefined;
      this._runtimeClassName = undefined;
      this._schedulerName = undefined;
      this._secrets = undefined;
      this._securityContext = undefined;
      this._serviceAccountName = undefined;
      this._serviceScrapeSpec = undefined;
      this._serviceSpec.internalValue = undefined;
      this._startupProbe = undefined;
      this._storage.internalValue = undefined;
      this._storageDataPath = undefined;
      this._storageMetadata.internalValue = undefined;
      this._streamAggrConfig.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints = undefined;
      this._useDefaultResources = undefined;
      this._useStrictSecurity = undefined;
      this._vmBackup.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._configMaps = value.configMaps;
      this._containers = value.containers;
      this._disableSelfServiceScrape = value.disableSelfServiceScrape;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._dnsPolicy = value.dnsPolicy;
      this._extraArgs = value.extraArgs;
      this._extraEnvs = value.extraEnvs;
      this._hostAliases.internalValue = value.hostAliases;
      this._hostNetwork = value.hostNetwork;
      this._image.internalValue = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainers = value.initContainers;
      this._insertPorts.internalValue = value.insertPorts;
      this._license.internalValue = value.license;
      this._livenessProbe = value.livenessProbe;
      this._logFormat = value.logFormat;
      this._logLevel = value.logLevel;
      this._minReadySeconds = value.minReadySeconds;
      this._nodeSelector = value.nodeSelector;
      this._paused = value.paused;
      this._podMetadata.internalValue = value.podMetadata;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._readinessGates.internalValue = value.readinessGates;
      this._readinessProbe = value.readinessProbe;
      this._removePvcAfterDelete = value.removePvcAfterDelete;
      this._replicaCount = value.replicaCount;
      this._resources.internalValue = value.resources;
      this._retentionPeriod = value.retentionPeriod;
      this._revisionHistoryLimitCount = value.revisionHistoryLimitCount;
      this._runtimeClassName = value.runtimeClassName;
      this._schedulerName = value.schedulerName;
      this._secrets = value.secrets;
      this._securityContext = value.securityContext;
      this._serviceAccountName = value.serviceAccountName;
      this._serviceScrapeSpec = value.serviceScrapeSpec;
      this._serviceSpec.internalValue = value.serviceSpec;
      this._startupProbe = value.startupProbe;
      this._storage.internalValue = value.storage;
      this._storageDataPath = value.storageDataPath;
      this._storageMetadata.internalValue = value.storageMetadata;
      this._streamAggrConfig.internalValue = value.streamAggrConfig;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints = value.topologySpreadConstraints;
      this._useDefaultResources = value.useDefaultResources;
      this._useStrictSecurity = value.useStrictSecurity;
      this._vmBackup.internalValue = value.vmBackup;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes = value.volumes;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity?: { [key: string]: string }; 
  public get affinity() {
    return this.getStringMapAttribute('affinity');
  }
  public set affinity(value: { [key: string]: string }) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps?: string[]; 
  public get configMaps() {
    return this.getListAttribute('config_maps');
  }
  public set configMaps(value: string[]) {
    this._configMaps = value;
  }
  public resetConfigMaps() {
    this._configMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get containers() {
    return this.interpolationForAttribute('containers');
  }
  public set containers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // disable_self_service_scrape - computed: false, optional: true, required: false
  private _disableSelfServiceScrape?: boolean | cdktf.IResolvable; 
  public get disableSelfServiceScrape() {
    return this.getBooleanAttribute('disable_self_service_scrape');
  }
  public set disableSelfServiceScrape(value: boolean | cdktf.IResolvable) {
    this._disableSelfServiceScrape = value;
  }
  public resetDisableSelfServiceScrape() {
    this._disableSelfServiceScrape = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSelfServiceScrapeInput() {
    return this._disableSelfServiceScrape;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // dns_policy - computed: false, optional: true, required: false
  private _dnsPolicy?: string; 
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }
  public set dnsPolicy(value: string) {
    this._dnsPolicy = value;
  }
  public resetDnsPolicy() {
    this._dnsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyInput() {
    return this._dnsPolicy;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: { [key: string]: string }; 
  public get extraArgs() {
    return this.getStringMapAttribute('extra_args');
  }
  public set extraArgs(value: { [key: string]: string }) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // extra_envs - computed: false, optional: true, required: false
  private _extraEnvs?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get extraEnvs() {
    return this.interpolationForAttribute('extra_envs');
  }
  public set extraEnvs(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._extraEnvs = value;
  }
  public resetExtraEnvs() {
    this._extraEnvs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraEnvsInput() {
    return this._extraEnvs;
  }

  // host_aliases - computed: false, optional: true, required: false
  private _hostAliases = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliasesList(this, "host_aliases", false);
  public get hostAliases() {
    return this._hostAliases;
  }
  public putHostAliases(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecHostAliases[] | cdktf.IResolvable) {
    this._hostAliases.internalValue = value;
  }
  public resetHostAliases() {
    this._hostAliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAliasesInput() {
    return this._hostAliases.internalValue;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get initContainers() {
    return this.interpolationForAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
  }

  // insert_ports - computed: false, optional: true, required: false
  private _insertPorts = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPortsOutputReference(this, "insert_ports");
  public get insertPorts() {
    return this._insertPorts;
  }
  public putInsertPorts(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecInsertPorts) {
    this._insertPorts.internalValue = value;
  }
  public resetInsertPorts() {
    this._insertPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertPortsInput() {
    return this._insertPorts.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe?: { [key: string]: string }; 
  public get livenessProbe() {
    return this.getStringMapAttribute('liveness_probe');
  }
  public set livenessProbe(value: { [key: string]: string }) {
    this._livenessProbe = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // pod_metadata - computed: false, optional: true, required: false
  private _podMetadata = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadataOutputReference(this, "pod_metadata");
  public get podMetadata() {
    return this._podMetadata;
  }
  public putPodMetadata(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecPodMetadata) {
    this._podMetadata.internalValue = value;
  }
  public resetPodMetadata() {
    this._podMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMetadataInput() {
    return this._podMetadata.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
  }

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe?: { [key: string]: string }; 
  public get readinessProbe() {
    return this.getStringMapAttribute('readiness_probe');
  }
  public set readinessProbe(value: { [key: string]: string }) {
    this._readinessProbe = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe;
  }

  // remove_pvc_after_delete - computed: false, optional: true, required: false
  private _removePvcAfterDelete?: boolean | cdktf.IResolvable; 
  public get removePvcAfterDelete() {
    return this.getBooleanAttribute('remove_pvc_after_delete');
  }
  public set removePvcAfterDelete(value: boolean | cdktf.IResolvable) {
    this._removePvcAfterDelete = value;
  }
  public resetRemovePvcAfterDelete() {
    this._removePvcAfterDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePvcAfterDeleteInput() {
    return this._removePvcAfterDelete;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // retention_period - computed: false, optional: false, required: true
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // revision_history_limit_count - computed: false, optional: true, required: false
  private _revisionHistoryLimitCount?: number; 
  public get revisionHistoryLimitCount() {
    return this.getNumberAttribute('revision_history_limit_count');
  }
  public set revisionHistoryLimitCount(value: number) {
    this._revisionHistoryLimitCount = value;
  }
  public resetRevisionHistoryLimitCount() {
    this._revisionHistoryLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitCountInput() {
    return this._revisionHistoryLimitCount;
  }

  // runtime_class_name - computed: false, optional: true, required: false
  private _runtimeClassName?: string; 
  public get runtimeClassName() {
    return this.getStringAttribute('runtime_class_name');
  }
  public set runtimeClassName(value: string) {
    this._runtimeClassName = value;
  }
  public resetRuntimeClassName() {
    this._runtimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassNameInput() {
    return this._runtimeClassName;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string[]; 
  public get secrets() {
    return this.getListAttribute('secrets');
  }
  public set secrets(value: string[]) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext?: { [key: string]: string }; 
  public get securityContext() {
    return this.getStringMapAttribute('security_context');
  }
  public set securityContext(value: { [key: string]: string }) {
    this._securityContext = value;
  }
  public resetSecurityContext() {
    this._securityContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // service_scrape_spec - computed: false, optional: true, required: false
  private _serviceScrapeSpec?: { [key: string]: string }; 
  public get serviceScrapeSpec() {
    return this.getStringMapAttribute('service_scrape_spec');
  }
  public set serviceScrapeSpec(value: { [key: string]: string }) {
    this._serviceScrapeSpec = value;
  }
  public resetServiceScrapeSpec() {
    this._serviceScrapeSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceScrapeSpecInput() {
    return this._serviceScrapeSpec;
  }

  // service_spec - computed: false, optional: true, required: false
  private _serviceSpec = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpecOutputReference(this, "service_spec");
  public get serviceSpec() {
    return this._serviceSpec;
  }
  public putServiceSpec(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecServiceSpec) {
    this._serviceSpec.internalValue = value;
  }
  public resetServiceSpec() {
    this._serviceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSpecInput() {
    return this._serviceSpec.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe?: { [key: string]: string }; 
  public get startupProbe() {
    return this.getStringMapAttribute('startup_probe');
  }
  public set startupProbe(value: { [key: string]: string }) {
    this._startupProbe = value;
  }
  public resetStartupProbe() {
    this._startupProbe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // storage_data_path - computed: false, optional: true, required: false
  private _storageDataPath?: string; 
  public get storageDataPath() {
    return this.getStringAttribute('storage_data_path');
  }
  public set storageDataPath(value: string) {
    this._storageDataPath = value;
  }
  public resetStorageDataPath() {
    this._storageDataPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDataPathInput() {
    return this._storageDataPath;
  }

  // storage_metadata - computed: false, optional: true, required: false
  private _storageMetadata = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadataOutputReference(this, "storage_metadata");
  public get storageMetadata() {
    return this._storageMetadata;
  }
  public putStorageMetadata(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStorageMetadata) {
    this._storageMetadata.internalValue = value;
  }
  public resetStorageMetadata() {
    this._storageMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMetadataInput() {
    return this._storageMetadata.internalValue;
  }

  // stream_aggr_config - computed: false, optional: true, required: false
  private _streamAggrConfig = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfigOutputReference(this, "stream_aggr_config");
  public get streamAggrConfig() {
    return this._streamAggrConfig;
  }
  public putStreamAggrConfig(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecStreamAggrConfig) {
    this._streamAggrConfig.internalValue = value;
  }
  public resetStreamAggrConfig() {
    this._streamAggrConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAggrConfigInput() {
    return this._streamAggrConfig.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get topologySpreadConstraints() {
    return this.interpolationForAttribute('topology_spread_constraints');
  }
  public set topologySpreadConstraints(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._topologySpreadConstraints = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints;
  }

  // use_default_resources - computed: false, optional: true, required: false
  private _useDefaultResources?: boolean | cdktf.IResolvable; 
  public get useDefaultResources() {
    return this.getBooleanAttribute('use_default_resources');
  }
  public set useDefaultResources(value: boolean | cdktf.IResolvable) {
    this._useDefaultResources = value;
  }
  public resetUseDefaultResources() {
    this._useDefaultResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultResourcesInput() {
    return this._useDefaultResources;
  }

  // use_strict_security - computed: false, optional: true, required: false
  private _useStrictSecurity?: boolean | cdktf.IResolvable; 
  public get useStrictSecurity() {
    return this.getBooleanAttribute('use_strict_security');
  }
  public set useStrictSecurity(value: boolean | cdktf.IResolvable) {
    this._useStrictSecurity = value;
  }
  public resetUseStrictSecurity() {
    this._useStrictSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStrictSecurityInput() {
    return this._useStrictSecurity;
  }

  // vm_backup - computed: false, optional: true, required: false
  private _vmBackup = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackupOutputReference(this, "vm_backup");
  public get vmBackup() {
    return this._vmBackup;
  }
  public putVmBackup(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVmBackup) {
    this._vmBackup.internalValue = value;
  }
  public resetVmBackup() {
    this._vmBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmBackupInput() {
    return this._vmBackup.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get volumes() {
    return this.interpolationForAttribute('volumes');
  }
  public set volumes(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest k8s_operator_victoriametrics_com_vm_single_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_single_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmSingleV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_single_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/operator_victoriametrics_com_vm_single_v1beta1_manifest k8s_operator_victoriametrics_com_vm_single_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_single_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmSingleV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
