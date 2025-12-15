// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#metadata DataK8SApisixApacheOrgApisixUpstreamV2Manifest#metadata}
  */
  readonly metadata: DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#spec DataK8SApisixApacheOrgApisixUpstreamV2Manifest#spec}
  */
  readonly spec?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec;
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#annotations DataK8SApisixApacheOrgApisixUpstreamV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#labels DataK8SApisixApacheOrgApisixUpstreamV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#namespace DataK8SApisixApacheOrgApisixUpstreamV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#args DataK8SApisixApacheOrgApisixUpstreamV2Manifest#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#service_name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._serviceName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._serviceName = value.serviceName;
      this._type = value.type;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#port DataK8SApisixApacheOrgApisixUpstreamV2Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#weight DataK8SApisixApacheOrgApisixUpstreamV2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._port = undefined;
      this._type = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._port = value.port;
      this._type = value.type;
      this._weight = value.weight;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesOutputReference {
    return new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#interval DataK8SApisixApacheOrgApisixUpstreamV2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#successes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#successes}
  */
  readonly successes?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    interval: cdktf.stringToTerraform(struct!.interval),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._interval = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._interval = value.interval;
      this._successes = value.successes;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // successes - computed: false, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#interval DataK8SApisixApacheOrgApisixUpstreamV2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#tcp_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeouts DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeouts}
  */
  readonly timeouts?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._httpFailures = undefined;
      this._interval = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._httpFailures = value.httpFailures;
      this._interval = value.interval;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // http_failures - computed: false, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // tcp_failures - computed: false, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#concurrency DataK8SApisixApacheOrgApisixUpstreamV2Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#healthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#healthy}
  */
  readonly healthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#host DataK8SApisixApacheOrgApisixUpstreamV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_path DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_path}
  */
  readonly httpPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#port DataK8SApisixApacheOrgApisixUpstreamV2Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#request_headers DataK8SApisixApacheOrgApisixUpstreamV2Manifest#request_headers}
  */
  readonly requestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#strict_tls DataK8SApisixApacheOrgApisixUpstreamV2Manifest#strict_tls}
  */
  readonly strictTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#unhealthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#unhealthy}
  */
  readonly unhealthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    healthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyToTerraform(struct!.healthy),
    host: cdktf.stringToTerraform(struct!.host),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    port: cdktf.numberToTerraform(struct!.port),
    request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeaders),
    strict_tls: cdktf.booleanToTerraform(struct!.strictTls),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
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
    request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strict_tls: {
      value: cdktf.booleanToHclTerraform(struct!.strictTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._strictTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTls = this._strictTls;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._healthy.internalValue = undefined;
      this._host = undefined;
      this._httpPath = undefined;
      this._port = undefined;
      this._requestHeaders = undefined;
      this._strictTls = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._healthy.internalValue = value.healthy;
      this._host = value.host;
      this._httpPath = value.httpPath;
      this._port = value.port;
      this._requestHeaders = value.requestHeaders;
      this._strictTls = value.strictTls;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
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

  // healthy - computed: false, optional: true, required: false
  private _healthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_path - computed: false, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: string[]; 
  public get requestHeaders() {
    return this.getListAttribute('request_headers');
  }
  public set requestHeaders(value: string[]) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // strict_tls - computed: false, optional: true, required: false
  private _strictTls?: boolean | cdktf.IResolvable; 
  public get strictTls() {
    return this.getBooleanAttribute('strict_tls');
  }
  public set strictTls(value: boolean | cdktf.IResolvable) {
    this._strictTls = value;
  }
  public resetStrictTls() {
    this._strictTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTlsInput() {
    return this._strictTls;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: false, optional: true, required: false
  private _unhealthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#successes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#successes}
  */
  readonly successes?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._successes = value.successes;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // successes - computed: false, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#tcp_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeouts DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeouts}
  */
  readonly timeouts?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._httpFailures = undefined;
      this._tcpFailures = undefined;
      this._timeouts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._httpFailures = value.httpFailures;
      this._tcpFailures = value.tcpFailures;
      this._timeouts = value.timeouts;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // http_failures - computed: false, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // tcp_failures - computed: false, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#healthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#healthy}
  */
  readonly healthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#unhealthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#unhealthy}
  */
  readonly unhealthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyToTerraform(struct!.healthy),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy.internalValue = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy.internalValue = value.healthy;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: false, optional: true, required: false
  private _unhealthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#active DataK8SApisixApacheOrgApisixUpstreamV2Manifest#active}
  */
  readonly active?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#passive DataK8SApisixApacheOrgApisixUpstreamV2Manifest#passive}
  */
  readonly passive?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveToTerraform(struct!.active),
    passive: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveToTerraform(struct!.passive),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveToHclTerraform(struct!.active),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive",
    },
    passive: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active.internalValue = undefined;
      this._passive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active.internalValue = value.active;
      this._passive.internalValue = value.passive;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActiveOutputReference(this, "active");
  public get active() {
    return this._active;
  }
  public putActive(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckActive) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // passive - computed: false, optional: true, required: false
  private _passive = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckPassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#hash_on DataK8SApisixApacheOrgApisixUpstreamV2Manifest#hash_on}
  */
  readonly hashOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#key DataK8SApisixApacheOrgApisixUpstreamV2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_on: cdktf.stringToTerraform(struct!.hashOn),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_on: {
      value: cdktf.stringToHclTerraform(struct!.hashOn),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashOn = this._hashOn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashOn = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashOn = value.hashOn;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // hash_on - computed: false, optional: true, required: false
  private _hashOn?: string; 
  public get hashOn() {
    return this.getStringAttribute('hash_on');
  }
  public set hashOn(value: string) {
    this._hashOn = value;
  }
  public resetHashOn() {
    this._hashOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnInput() {
    return this._hashOn;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#interval DataK8SApisixApacheOrgApisixUpstreamV2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#successes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#successes}
  */
  readonly successes?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    interval: cdktf.stringToTerraform(struct!.interval),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._interval = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._interval = value.interval;
      this._successes = value.successes;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // successes - computed: false, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#interval DataK8SApisixApacheOrgApisixUpstreamV2Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#tcp_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    interval: cdktf.stringToTerraform(struct!.interval),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._httpFailures = undefined;
      this._interval = undefined;
      this._tcpFailures = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._httpFailures = value.httpFailures;
      this._interval = value.interval;
      this._tcpFailures = value.tcpFailures;
      this._timeout = value.timeout;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // http_failures - computed: false, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // tcp_failures - computed: false, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#concurrency DataK8SApisixApacheOrgApisixUpstreamV2Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#healthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#healthy}
  */
  readonly healthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#host DataK8SApisixApacheOrgApisixUpstreamV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_path DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_path}
  */
  readonly httpPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#port DataK8SApisixApacheOrgApisixUpstreamV2Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#request_headers DataK8SApisixApacheOrgApisixUpstreamV2Manifest#request_headers}
  */
  readonly requestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#strict_tls DataK8SApisixApacheOrgApisixUpstreamV2Manifest#strict_tls}
  */
  readonly strictTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#unhealthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#unhealthy}
  */
  readonly unhealthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    healthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyToTerraform(struct!.healthy),
    host: cdktf.stringToTerraform(struct!.host),
    http_path: cdktf.stringToTerraform(struct!.httpPath),
    port: cdktf.numberToTerraform(struct!.port),
    request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeaders),
    strict_tls: cdktf.booleanToTerraform(struct!.strictTls),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_path: {
      value: cdktf.stringToHclTerraform(struct!.httpPath),
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
    request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    strict_tls: {
      value: cdktf.booleanToHclTerraform(struct!.strictTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPath = this._httpPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._strictTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTls = this._strictTls;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._healthy.internalValue = undefined;
      this._host = undefined;
      this._httpPath = undefined;
      this._port = undefined;
      this._requestHeaders = undefined;
      this._strictTls = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._healthy.internalValue = value.healthy;
      this._host = value.host;
      this._httpPath = value.httpPath;
      this._port = value.port;
      this._requestHeaders = value.requestHeaders;
      this._strictTls = value.strictTls;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
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

  // healthy - computed: false, optional: true, required: false
  private _healthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_path - computed: false, optional: true, required: false
  private _httpPath?: string; 
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
  public set httpPath(value: string) {
    this._httpPath = value;
  }
  public resetHttpPath() {
    this._httpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPathInput() {
    return this._httpPath;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: string[]; 
  public get requestHeaders() {
    return this.getListAttribute('request_headers');
  }
  public set requestHeaders(value: string[]) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // strict_tls - computed: false, optional: true, required: false
  private _strictTls?: boolean | cdktf.IResolvable; 
  public get strictTls() {
    return this.getBooleanAttribute('strict_tls');
  }
  public set strictTls(value: boolean | cdktf.IResolvable) {
    this._strictTls = value;
  }
  public resetStrictTls() {
    this._strictTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTlsInput() {
    return this._strictTls;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: false, optional: true, required: false
  private _unhealthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#successes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#successes}
  */
  readonly successes?: number;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    successes: cdktf.numberToTerraform(struct!.successes),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    successes: {
      value: cdktf.numberToHclTerraform(struct!.successes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._successes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successes = this._successes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._successes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._successes = value.successes;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // successes - computed: false, optional: true, required: false
  private _successes?: number; 
  public get successes() {
    return this.getNumberAttribute('successes');
  }
  public set successes(value: number) {
    this._successes = value;
  }
  public resetSuccesses() {
    this._successes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successesInput() {
    return this._successes;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_codes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_codes}
  */
  readonly httpCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#http_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#http_failures}
  */
  readonly httpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#tcp_failures DataK8SApisixApacheOrgApisixUpstreamV2Manifest#tcp_failures}
  */
  readonly tcpFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpCodes),
    http_failures: cdktf.numberToTerraform(struct!.httpFailures),
    tcp_failures: cdktf.numberToTerraform(struct!.tcpFailures),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_failures: {
      value: cdktf.numberToHclTerraform(struct!.httpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_failures: {
      value: cdktf.numberToHclTerraform(struct!.tcpFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodes = this._httpCodes;
    }
    if (this._httpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpFailures = this._httpFailures;
    }
    if (this._tcpFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFailures = this._tcpFailures;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpCodes = undefined;
      this._httpFailures = undefined;
      this._tcpFailures = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpCodes = value.httpCodes;
      this._httpFailures = value.httpFailures;
      this._tcpFailures = value.tcpFailures;
      this._timeout = value.timeout;
    }
  }

  // http_codes - computed: false, optional: true, required: false
  private _httpCodes?: string[]; 
  public get httpCodes() {
    return this.getListAttribute('http_codes');
  }
  public set httpCodes(value: string[]) {
    this._httpCodes = value;
  }
  public resetHttpCodes() {
    this._httpCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodesInput() {
    return this._httpCodes;
  }

  // http_failures - computed: false, optional: true, required: false
  private _httpFailures?: number; 
  public get httpFailures() {
    return this.getNumberAttribute('http_failures');
  }
  public set httpFailures(value: number) {
    this._httpFailures = value;
  }
  public resetHttpFailures() {
    this._httpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailuresInput() {
    return this._httpFailures;
  }

  // tcp_failures - computed: false, optional: true, required: false
  private _tcpFailures?: number; 
  public get tcpFailures() {
    return this.getNumberAttribute('tcp_failures');
  }
  public set tcpFailures(value: number) {
    this._tcpFailures = value;
  }
  public resetTcpFailures() {
    this._tcpFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFailuresInput() {
    return this._tcpFailures;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#healthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#healthy}
  */
  readonly healthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#unhealthy DataK8SApisixApacheOrgApisixUpstreamV2Manifest#unhealthy}
  */
  readonly unhealthy?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyToTerraform(struct!.healthy),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyToTerraform(struct!.unhealthy),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyToHclTerraform(struct!.healthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyToHclTerraform(struct!.unhealthy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthy = this._healthy?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthy = this._unhealthy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthy.internalValue = undefined;
      this._type = undefined;
      this._unhealthy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthy.internalValue = value.healthy;
      this._type = value.type;
      this._unhealthy.internalValue = value.unhealthy;
    }
  }

  // healthy - computed: false, optional: true, required: false
  private _healthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthyOutputReference(this, "healthy");
  public get healthy() {
    return this._healthy;
  }
  public putHealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveHealthy) {
    this._healthy.internalValue = value;
  }
  public resetHealthy() {
    this._healthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyInput() {
    return this._healthy.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy - computed: false, optional: true, required: false
  private _unhealthy = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthyOutputReference(this, "unhealthy");
  public get unhealthy() {
    return this._unhealthy;
  }
  public putUnhealthy(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveUnhealthy) {
    this._unhealthy.internalValue = value;
  }
  public resetUnhealthy() {
    this._unhealthy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyInput() {
    return this._unhealthy.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#active DataK8SApisixApacheOrgApisixUpstreamV2Manifest#active}
  */
  readonly active?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#passive DataK8SApisixApacheOrgApisixUpstreamV2Manifest#passive}
  */
  readonly passive?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveToTerraform(struct!.active),
    passive: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveToTerraform(struct!.passive),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveToHclTerraform(struct!.active),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive",
    },
    passive: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveToHclTerraform(struct!.passive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._passive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active.internalValue = undefined;
      this._passive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active.internalValue = value.active;
      this._passive.internalValue = value.passive;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActiveOutputReference(this, "active");
  public get active() {
    return this._active;
  }
  public putActive(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckActive) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // passive - computed: false, optional: true, required: false
  private _passive = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassiveOutputReference(this, "passive");
  public get passive() {
    return this._passive;
  }
  public putPassive(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckPassive) {
    this._passive.internalValue = value;
  }
  public resetPassive() {
    this._passive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#hash_on DataK8SApisixApacheOrgApisixUpstreamV2Manifest#hash_on}
  */
  readonly hashOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#key DataK8SApisixApacheOrgApisixUpstreamV2Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#type DataK8SApisixApacheOrgApisixUpstreamV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_on: cdktf.stringToTerraform(struct!.hashOn),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_on: {
      value: cdktf.stringToHclTerraform(struct!.hashOn),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashOn = this._hashOn;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashOn = undefined;
      this._key = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashOn = value.hashOn;
      this._key = value.key;
      this._type = value.type;
    }
  }

  // hash_on - computed: false, optional: true, required: false
  private _hashOn?: string; 
  public get hashOn() {
    return this.getStringAttribute('hash_on');
  }
  public set hashOn(value: string) {
    this._hashOn = value;
  }
  public resetHashOn() {
    this._hashOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashOnInput() {
    return this._hashOn;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#connect DataK8SApisixApacheOrgApisixUpstreamV2Manifest#connect}
  */
  readonly connect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#read DataK8SApisixApacheOrgApisixUpstreamV2Manifest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#send DataK8SApisixApacheOrgApisixUpstreamV2Manifest#send}
  */
  readonly send?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.stringToTerraform(struct!.connect),
    read: cdktf.stringToTerraform(struct!.read),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
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
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._read = undefined;
      this._send = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._read = value.read;
      this._send = value.send;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: string; 
  public get connect() {
    return this.getStringAttribute('connect');
  }
  public set connect(value: string) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
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

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#health_check DataK8SApisixApacheOrgApisixUpstreamV2Manifest#health_check}
  */
  readonly healthCheck?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#loadbalancer DataK8SApisixApacheOrgApisixUpstreamV2Manifest#loadbalancer}
  */
  readonly loadbalancer?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#port DataK8SApisixApacheOrgApisixUpstreamV2Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#retries DataK8SApisixApacheOrgApisixUpstreamV2Manifest#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#scheme DataK8SApisixApacheOrgApisixUpstreamV2Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckToTerraform(struct!.healthCheck),
    loadbalancer: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerToTerraform(struct!.loadbalancer),
    port: cdktf.numberToTerraform(struct!.port),
    retries: cdktf.numberToTerraform(struct!.retries),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    timeout: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutToTerraform(struct!.timeout),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck",
    },
    loadbalancer: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerToHclTerraform(struct!.loadbalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._loadbalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancer = this._loadbalancer?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._loadbalancer.internalValue = undefined;
      this._port = undefined;
      this._retries = undefined;
      this._scheme = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck.internalValue = value.healthCheck;
      this._loadbalancer.internalValue = value.loadbalancer;
      this._port = value.port;
      this._retries = value.retries;
      this._scheme = value.scheme;
      this._timeout.internalValue = value.timeout;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // loadbalancer - computed: false, optional: true, required: false
  private _loadbalancer = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancerOutputReference(this, "loadbalancer");
  public get loadbalancer() {
    return this._loadbalancer;
  }
  public putLoadbalancer(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsLoadbalancer) {
    this._loadbalancer.internalValue = value;
  }
  public resetLoadbalancer() {
    this._loadbalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerInput() {
    return this._loadbalancer.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsOutputReference {
    return new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#labels DataK8SApisixApacheOrgApisixUpstreamV2Manifest#labels}
  */
  readonly labels: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._labels = value.labels;
      this._name = value.name;
    }
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsOutputReference {
    return new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#connect DataK8SApisixApacheOrgApisixUpstreamV2Manifest#connect}
  */
  readonly connect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#read DataK8SApisixApacheOrgApisixUpstreamV2Manifest#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#send DataK8SApisixApacheOrgApisixUpstreamV2Manifest#send}
  */
  readonly send?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.stringToTerraform(struct!.connect),
    read: cdktf.stringToTerraform(struct!.read),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
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
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._read = undefined;
      this._send = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._read = value.read;
      this._send = value.send;
    }
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: string; 
  public get connect() {
    return this.getStringAttribute('connect');
  }
  public set connect(value: string) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
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

  // send - computed: false, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#namespace DataK8SApisixApacheOrgApisixUpstreamV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec {
  /**
  * Discovery is used to configure service discovery for upstream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#discovery DataK8SApisixApacheOrgApisixUpstreamV2Manifest#discovery}
  */
  readonly discovery?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery;
  /**
  * ExternalNodes contains external nodes the Upstream should use If this field is set, the upstream will use these nodes directly without any further resolves
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#external_nodes DataK8SApisixApacheOrgApisixUpstreamV2Manifest#external_nodes}
  */
  readonly externalNodes?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#health_check DataK8SApisixApacheOrgApisixUpstreamV2Manifest#health_check}
  */
  readonly healthCheck?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#ingress_class_name DataK8SApisixApacheOrgApisixUpstreamV2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#loadbalancer DataK8SApisixApacheOrgApisixUpstreamV2Manifest#loadbalancer}
  */
  readonly loadbalancer?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#pass_host DataK8SApisixApacheOrgApisixUpstreamV2Manifest#pass_host}
  */
  readonly passHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#port_level_settings DataK8SApisixApacheOrgApisixUpstreamV2Manifest#port_level_settings}
  */
  readonly portLevelSettings?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#retries DataK8SApisixApacheOrgApisixUpstreamV2Manifest#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#scheme DataK8SApisixApacheOrgApisixUpstreamV2Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#subsets DataK8SApisixApacheOrgApisixUpstreamV2Manifest#subsets}
  */
  readonly subsets?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#timeout DataK8SApisixApacheOrgApisixUpstreamV2Manifest#timeout}
  */
  readonly timeout?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout;
  /**
  * ApisixSecret describes the Kubernetes Secret name and namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#tls_secret DataK8SApisixApacheOrgApisixUpstreamV2Manifest#tls_secret}
  */
  readonly tlsSecret?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#upstream_host DataK8SApisixApacheOrgApisixUpstreamV2Manifest#upstream_host}
  */
  readonly upstreamHost?: string;
}

export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecToTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryToTerraform(struct!.discovery),
    external_nodes: cdktf.listMapper(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesToTerraform, false)(struct!.externalNodes),
    health_check: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckToTerraform(struct!.healthCheck),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    loadbalancer: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerToTerraform(struct!.loadbalancer),
    pass_host: cdktf.stringToTerraform(struct!.passHost),
    port_level_settings: cdktf.listMapper(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsToTerraform, false)(struct!.portLevelSettings),
    retries: cdktf.numberToTerraform(struct!.retries),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    subsets: cdktf.listMapper(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsToTerraform, false)(struct!.subsets),
    timeout: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutToTerraform(struct!.timeout),
    tls_secret: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretToTerraform(struct!.tlsSecret),
    upstream_host: cdktf.stringToTerraform(struct!.upstreamHost),
  }
}


export function dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecToHclTerraform(struct?: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryToHclTerraform(struct!.discovery),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery",
    },
    external_nodes: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesToHclTerraform, false)(struct!.externalNodes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesList",
    },
    health_check: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loadbalancer: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerToHclTerraform(struct!.loadbalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer",
    },
    pass_host: {
      value: cdktf.stringToHclTerraform(struct!.passHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_level_settings: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsToHclTerraform, false)(struct!.portLevelSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsList",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subsets: {
      value: cdktf.listMapperHcl(dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsToHclTerraform, false)(struct!.subsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsList",
    },
    timeout: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout",
    },
    tls_secret: {
      value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretToHclTerraform(struct!.tlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret",
    },
    upstream_host: {
      value: cdktf.stringToHclTerraform(struct!.upstreamHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discovery = this._discovery?.internalValue;
    }
    if (this._externalNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNodes = this._externalNodes?.internalValue;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._loadbalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancer = this._loadbalancer?.internalValue;
    }
    if (this._passHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHost = this._passHost;
    }
    if (this._portLevelSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portLevelSettings = this._portLevelSettings?.internalValue;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._subsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subsets = this._subsets?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecret = this._tlsSecret?.internalValue;
    }
    if (this._upstreamHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamHost = this._upstreamHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discovery.internalValue = undefined;
      this._externalNodes.internalValue = undefined;
      this._healthCheck.internalValue = undefined;
      this._ingressClassName = undefined;
      this._loadbalancer.internalValue = undefined;
      this._passHost = undefined;
      this._portLevelSettings.internalValue = undefined;
      this._retries = undefined;
      this._scheme = undefined;
      this._subsets.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tlsSecret.internalValue = undefined;
      this._upstreamHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discovery.internalValue = value.discovery;
      this._externalNodes.internalValue = value.externalNodes;
      this._healthCheck.internalValue = value.healthCheck;
      this._ingressClassName = value.ingressClassName;
      this._loadbalancer.internalValue = value.loadbalancer;
      this._passHost = value.passHost;
      this._portLevelSettings.internalValue = value.portLevelSettings;
      this._retries = value.retries;
      this._scheme = value.scheme;
      this._subsets.internalValue = value.subsets;
      this._timeout.internalValue = value.timeout;
      this._tlsSecret.internalValue = value.tlsSecret;
      this._upstreamHost = value.upstreamHost;
    }
  }

  // discovery - computed: false, optional: true, required: false
  private _discovery = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }
  public putDiscovery(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecDiscovery) {
    this._discovery.internalValue = value;
  }
  public resetDiscovery() {
    this._discovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryInput() {
    return this._discovery.internalValue;
  }

  // external_nodes - computed: false, optional: true, required: false
  private _externalNodes = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodesList(this, "external_nodes", false);
  public get externalNodes() {
    return this._externalNodes;
  }
  public putExternalNodes(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecExternalNodes[] | cdktf.IResolvable) {
    this._externalNodes.internalValue = value;
  }
  public resetExternalNodes() {
    this._externalNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNodesInput() {
    return this._externalNodes.internalValue;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // loadbalancer - computed: false, optional: true, required: false
  private _loadbalancer = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancerOutputReference(this, "loadbalancer");
  public get loadbalancer() {
    return this._loadbalancer;
  }
  public putLoadbalancer(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecLoadbalancer) {
    this._loadbalancer.internalValue = value;
  }
  public resetLoadbalancer() {
    this._loadbalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerInput() {
    return this._loadbalancer.internalValue;
  }

  // pass_host - computed: false, optional: true, required: false
  private _passHost?: string; 
  public get passHost() {
    return this.getStringAttribute('pass_host');
  }
  public set passHost(value: string) {
    this._passHost = value;
  }
  public resetPassHost() {
    this._passHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostInput() {
    return this._passHost;
  }

  // port_level_settings - computed: false, optional: true, required: false
  private _portLevelSettings = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettingsList(this, "port_level_settings", false);
  public get portLevelSettings() {
    return this._portLevelSettings;
  }
  public putPortLevelSettings(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecPortLevelSettings[] | cdktf.IResolvable) {
    this._portLevelSettings.internalValue = value;
  }
  public resetPortLevelSettings() {
    this._portLevelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portLevelSettingsInput() {
    return this._portLevelSettings.internalValue;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // subsets - computed: false, optional: true, required: false
  private _subsets = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsetsList(this, "subsets", false);
  public get subsets() {
    return this._subsets;
  }
  public putSubsets(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecSubsets[] | cdktf.IResolvable) {
    this._subsets.internalValue = value;
  }
  public resetSubsets() {
    this._subsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetsInput() {
    return this._subsets.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls_secret - computed: false, optional: true, required: false
  private _tlsSecret = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecretOutputReference(this, "tls_secret");
  public get tlsSecret() {
    return this._tlsSecret;
  }
  public putTlsSecret(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecTlsSecret) {
    this._tlsSecret.internalValue = value;
  }
  public resetTlsSecret() {
    this._tlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretInput() {
    return this._tlsSecret.internalValue;
  }

  // upstream_host - computed: false, optional: true, required: false
  private _upstreamHost?: string; 
  public get upstreamHost() {
    return this.getStringAttribute('upstream_host');
  }
  public set upstreamHost(value: string) {
    this._upstreamHost = value;
  }
  public resetUpstreamHost() {
    this._upstreamHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamHostInput() {
    return this._upstreamHost;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest k8s_apisix_apache_org_apisix_upstream_v2_manifest}
*/
export class DataK8SApisixApacheOrgApisixUpstreamV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apisix_apache_org_apisix_upstream_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApisixApacheOrgApisixUpstreamV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApisixApacheOrgApisixUpstreamV2Manifest to import
  * @param importFromId The id of the existing DataK8SApisixApacheOrgApisixUpstreamV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApisixApacheOrgApisixUpstreamV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apisix_apache_org_apisix_upstream_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apisix_apache_org_apisix_upstream_v2_manifest k8s_apisix_apache_org_apisix_upstream_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApisixApacheOrgApisixUpstreamV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApisixApacheOrgApisixUpstreamV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apisix_apache_org_apisix_upstream_v2_manifest',
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
  private _metadata = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec) {
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
      metadata: dataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestMetadata",
      },
      spec: {
        value: dataK8SApisixApacheOrgApisixUpstreamV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixUpstreamV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
