// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#metadata DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata;
  /**
  * VirtualServerRouteSpec is the spec of the VirtualServerRoute resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#spec DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#spec}
  */
  readonly spec?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec;
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#annotations DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#labels DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#namespace DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#set DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#always DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
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
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#add DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#url DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#body DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersList",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#return DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#url DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#body DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersList",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#codes DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#codes}
  */
  readonly codes?: string[];
  /**
  * ErrorPageRedirect defines a redirect for an ErrorPage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect;
  /**
  * ErrorPageReturn defines a return for an ErrorPage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#return DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.codes),
    redirect: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.codes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codes !== undefined) {
      hasAnyValues = true;
      internalValueResult.codes = this._codes;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codes = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codes = value.codes;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // codes - computed: false, optional: true, required: false
  private _codes?: string[]; 
  public get codes() {
    return this.getListAttribute('codes');
  }
  public set codes(value: string[]) {
    this._codes = value;
  }
  public resetCodes() {
    this._codes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codesInput() {
    return this._codes;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#set DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#always DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
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
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#add DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#url DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#body DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersList",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#return DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#argument DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#argument}
  */
  readonly argument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#cookie DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#header DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#variable DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#variable}
  */
  readonly variable?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument: cdktf.stringToTerraform(struct!.argument),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    value: cdktf.stringToTerraform(struct!.value),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument: {
      value: cdktf.stringToHclTerraform(struct!.argument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
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
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argument !== undefined) {
      hasAnyValues = true;
      internalValueResult.argument = this._argument;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argument = undefined;
      this._cookie = undefined;
      this._header = undefined;
      this._value = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argument = value.argument;
      this._cookie = value.cookie;
      this._header = value.header;
      this._value = value.value;
      this._variable = value.variable;
    }
  }

  // argument - computed: false, optional: true, required: false
  private _argument?: string; 
  public get argument() {
    return this.getStringAttribute('argument');
  }
  public set argument(value: string) {
    this._argument = value;
  }
  public resetArgument() {
    this._argument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentInput() {
    return this._argument;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
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

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#set DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#always DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
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
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#add DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#url DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#body DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersList",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#return DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#action DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#weight DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionToTerraform(struct!.action),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._weight = value.weight;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#action DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#conditions DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#conditions}
  */
  readonly conditions?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#splits DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#splits}
  */
  readonly splits?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsToTerraform, false)(struct!.conditions),
    splits: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsToTerraform, false)(struct!.splits),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction",
    },
    conditions: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsList",
    },
    splits: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsToHclTerraform, false)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._conditions.internalValue = undefined;
      this._splits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._conditions.internalValue = value.conditions;
      this._splits.internalValue = value.splits;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // splits - computed: false, optional: true, required: false
  private _splits = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  public resetSplits() {
    this._splits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#namespace DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#set DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#set}
  */
  readonly set?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.booleanToTerraform(struct!.pass),
    set: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.booleanToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._set.internalValue = value.set;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: boolean | cdktf.IResolvable; 
  public get pass() {
    return this.getBooleanAttribute('pass');
  }
  public set pass(value: boolean | cdktf.IResolvable) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#always DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#always}
  */
  readonly always?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always: cdktf.booleanToTerraform(struct!.always),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always: {
      value: cdktf.booleanToHclTerraform(struct!.always),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._always !== undefined) {
      hasAnyValues = true;
      internalValueResult.always = this._always;
    }
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._always = undefined;
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
      this._always = value.always;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // always - computed: false, optional: true, required: false
  private _always?: boolean | cdktf.IResolvable; 
  public get always() {
    return this.getBooleanAttribute('always');
  }
  public set always(value: boolean | cdktf.IResolvable) {
    this._always = value;
  }
  public resetAlways() {
    this._always = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysInput() {
    return this._always;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#add DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#add}
  */
  readonly add?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#hide DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#hide}
  */
  readonly hide?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ignore DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ignore}
  */
  readonly ignore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string[];
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddToTerraform, false)(struct!.add),
    hide: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hide),
    ignore: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignore),
    pass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pass),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddList",
    },
    hide: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hide),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignore),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._hide = undefined;
      this._ignore = undefined;
      this._pass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._hide = value.hide;
      this._ignore = value.ignore;
      this._pass = value.pass;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string[]; 
  public get hide() {
    return this.getListAttribute('hide');
  }
  public set hide(value: string[]) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: string[]; 
  public get ignore() {
    return this.getListAttribute('ignore');
  }
  public set ignore(value: string[]) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string[]; 
  public get pass() {
    return this.getListAttribute('pass');
  }
  public set pass(value: string[]) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy {
  /**
  * ProxyRequestHeaders defines the request headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#request_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#request_headers}
  */
  readonly requestHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders;
  /**
  * ProxyResponseHeaders defines the response headers manipulation in an ActionProxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#response_headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#response_headers}
  */
  readonly responseHeaders?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#rewrite_path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#rewrite_path}
  */
  readonly rewritePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#upstream DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#upstream}
  */
  readonly upstream?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersToTerraform(struct!.requestHeaders),
    response_headers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersToTerraform(struct!.responseHeaders),
    rewrite_path: cdktf.stringToTerraform(struct!.rewritePath),
    upstream: cdktf.stringToTerraform(struct!.upstream),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersToHclTerraform(struct!.requestHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders",
    },
    response_headers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersToHclTerraform(struct!.responseHeaders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders",
    },
    rewrite_path: {
      value: cdktf.stringToHclTerraform(struct!.rewritePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream: {
      value: cdktf.stringToHclTerraform(struct!.upstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders?.internalValue;
    }
    if (this._responseHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaders = this._responseHeaders?.internalValue;
    }
    if (this._rewritePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewritePath = this._rewritePath;
    }
    if (this._upstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = undefined;
      this._responseHeaders.internalValue = undefined;
      this._rewritePath = undefined;
      this._upstream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeaders.internalValue = value.requestHeaders;
      this._responseHeaders.internalValue = value.responseHeaders;
      this._rewritePath = value.rewritePath;
      this._upstream = value.upstream;
    }
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeadersOutputReference(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
  public putRequestHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyRequestHeaders) {
    this._requestHeaders.internalValue = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders.internalValue;
  }

  // response_headers - computed: false, optional: true, required: false
  private _responseHeaders = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeadersOutputReference(this, "response_headers");
  public get responseHeaders() {
    return this._responseHeaders;
  }
  public putResponseHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyResponseHeaders) {
    this._responseHeaders.internalValue = value;
  }
  public resetResponseHeaders() {
    this._responseHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersInput() {
    return this._responseHeaders.internalValue;
  }

  // rewrite_path - computed: false, optional: true, required: false
  private _rewritePath?: string; 
  public get rewritePath() {
    return this.getStringAttribute('rewrite_path');
  }
  public set rewritePath(value: string) {
    this._rewritePath = value;
  }
  public resetRewritePath() {
    this._rewritePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewritePathInput() {
    return this._rewritePath;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#url DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._url = value.url;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#body DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#code DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersToTerraform, false)(struct!.headers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersList",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._type = value.type;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#pass DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#pass}
  */
  readonly pass?: string;
  /**
  * ActionProxy defines a proxy in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#proxy DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#proxy}
  */
  readonly proxy?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy;
  /**
  * ActionRedirect defines a redirect in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#redirect DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#redirect}
  */
  readonly redirect?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect;
  /**
  * ActionReturn defines a return in an Action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#return DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#return}
  */
  readonly return?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass: cdktf.stringToTerraform(struct!.pass),
    proxy: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyToTerraform(struct!.proxy),
    redirect: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectToTerraform(struct!.redirect),
    return: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnToTerraform(struct!.return),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass: {
      value: cdktf.stringToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy",
    },
    redirect: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect",
    },
    return: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnToHclTerraform(struct!.return),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    if (this._return?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pass = undefined;
      this._proxy.internalValue = undefined;
      this._redirect.internalValue = undefined;
      this._return.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pass = value.pass;
      this._proxy.internalValue = value.proxy;
      this._redirect.internalValue = value.redirect;
      this._return.internalValue = value.return;
    }
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this.getStringAttribute('pass');
  }
  public set pass(value: string) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }

  // return - computed: false, optional: true, required: false
  private _return = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturnOutputReference(this, "return");
  public get return() {
    return this._return;
  }
  public putReturn(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionReturn) {
    this._return.internalValue = value;
  }
  public resetReturn() {
    this._return.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#action DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#weight DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionToTerraform(struct!.action),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._weight = value.weight;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes {
  /**
  * Action defines an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#action DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#action}
  */
  readonly action?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#dos DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#dos}
  */
  readonly dos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#error_pages DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#error_pages}
  */
  readonly errorPages?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#location_snippets DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#location_snippets}
  */
  readonly locationSnippets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#matches DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#matches}
  */
  readonly matches?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#policies DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#policies}
  */
  readonly policies?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#route DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#route}
  */
  readonly route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#splits DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#splits}
  */
  readonly splits?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionToTerraform(struct!.action),
    dos: cdktf.stringToTerraform(struct!.dos),
    error_pages: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesToTerraform, false)(struct!.errorPages),
    location_snippets: cdktf.stringToTerraform(struct!.locationSnippets),
    matches: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesToTerraform, false)(struct!.matches),
    path: cdktf.stringToTerraform(struct!.path),
    policies: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesToTerraform, false)(struct!.policies),
    route: cdktf.stringToTerraform(struct!.route),
    splits: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsToTerraform, false)(struct!.splits),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction",
    },
    dos: {
      value: cdktf.stringToHclTerraform(struct!.dos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_pages: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesToHclTerraform, false)(struct!.errorPages),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesList",
    },
    location_snippets: {
      value: cdktf.stringToHclTerraform(struct!.locationSnippets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matches: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesToHclTerraform, false)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesToHclTerraform, false)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesList",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    splits: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsToHclTerraform, false)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._dos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dos = this._dos;
    }
    if (this._errorPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPages = this._errorPages?.internalValue;
    }
    if (this._locationSnippets !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationSnippets = this._locationSnippets;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._dos = undefined;
      this._errorPages.internalValue = undefined;
      this._locationSnippets = undefined;
      this._matches.internalValue = undefined;
      this._path = undefined;
      this._policies.internalValue = undefined;
      this._route = undefined;
      this._splits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._dos = value.dos;
      this._errorPages.internalValue = value.errorPages;
      this._locationSnippets = value.locationSnippets;
      this._matches.internalValue = value.matches;
      this._path = value.path;
      this._policies.internalValue = value.policies;
      this._route = value.route;
      this._splits.internalValue = value.splits;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // dos - computed: false, optional: true, required: false
  private _dos?: string; 
  public get dos() {
    return this.getStringAttribute('dos');
  }
  public set dos(value: string) {
    this._dos = value;
  }
  public resetDos() {
    this._dos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosInput() {
    return this._dos;
  }

  // error_pages - computed: false, optional: true, required: false
  private _errorPages = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPagesList(this, "error_pages", false);
  public get errorPages() {
    return this._errorPages;
  }
  public putErrorPages(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesErrorPages[] | cdktf.IResolvable) {
    this._errorPages.internalValue = value;
  }
  public resetErrorPages() {
    this._errorPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPagesInput() {
    return this._errorPages.internalValue;
  }

  // location_snippets - computed: false, optional: true, required: false
  private _locationSnippets?: string; 
  public get locationSnippets() {
    return this.getStringAttribute('location_snippets');
  }
  public set locationSnippets(value: string) {
    this._locationSnippets = value;
  }
  public resetLocationSnippets() {
    this._locationSnippets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationSnippetsInput() {
    return this._locationSnippets;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }

  // splits - computed: false, optional: true, required: false
  private _splits = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  public resetSplits() {
    this._splits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#number DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#number}
  */
  readonly number?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#size DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number: cdktf.numberToTerraform(struct!.number),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._number = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._number = value.number;
      this._size = value.size;
    }
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#value DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable): any {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#connect_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#fails DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#fails}
  */
  readonly fails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#grpc_service DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#grpc_service}
  */
  readonly grpcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#grpc_status DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#grpc_status}
  */
  readonly grpcStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#headers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#headers}
  */
  readonly headers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#interval DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#jitter DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#jitter}
  */
  readonly jitter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#keepalive_time DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#keepalive_time}
  */
  readonly keepaliveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#mandatory DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#passes DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#passes}
  */
  readonly passes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#persistent DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#port DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#read_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#send_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#send_timeout}
  */
  readonly sendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#status_match DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#status_match}
  */
  readonly statusMatch?: string;
  /**
  * UpstreamTLS defines a TLS configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#tls DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    enable: cdktf.booleanToTerraform(struct!.enable),
    fails: cdktf.numberToTerraform(struct!.fails),
    grpc_service: cdktf.stringToTerraform(struct!.grpcService),
    grpc_status: cdktf.numberToTerraform(struct!.grpcStatus),
    headers: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersToTerraform, false)(struct!.headers),
    interval: cdktf.stringToTerraform(struct!.interval),
    jitter: cdktf.stringToTerraform(struct!.jitter),
    keepalive_time: cdktf.stringToTerraform(struct!.keepaliveTime),
    mandatory: cdktf.booleanToTerraform(struct!.mandatory),
    passes: cdktf.numberToTerraform(struct!.passes),
    path: cdktf.stringToTerraform(struct!.path),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    send_timeout: cdktf.stringToTerraform(struct!.sendTimeout),
    status_match: cdktf.stringToTerraform(struct!.statusMatch),
    tls: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsToTerraform(struct!.tls),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fails: {
      value: cdktf.numberToHclTerraform(struct!.fails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_service: {
      value: cdktf.stringToHclTerraform(struct!.grpcService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grpc_status: {
      value: cdktf.numberToHclTerraform(struct!.grpcStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersList",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter: {
      value: cdktf.stringToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_time: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mandatory: {
      value: cdktf.booleanToHclTerraform(struct!.mandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    passes: {
      value: cdktf.numberToHclTerraform(struct!.passes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_match: {
      value: cdktf.stringToHclTerraform(struct!.statusMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._fails !== undefined) {
      hasAnyValues = true;
      internalValueResult.fails = this._fails;
    }
    if (this._grpcService !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcService = this._grpcService;
    }
    if (this._grpcStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcStatus = this._grpcStatus;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._keepaliveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTime = this._keepaliveTime;
    }
    if (this._mandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatory = this._mandatory;
    }
    if (this._passes !== undefined) {
      hasAnyValues = true;
      internalValueResult.passes = this._passes;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._statusMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMatch = this._statusMatch;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectTimeout = undefined;
      this._enable = undefined;
      this._fails = undefined;
      this._grpcService = undefined;
      this._grpcStatus = undefined;
      this._headers.internalValue = undefined;
      this._interval = undefined;
      this._jitter = undefined;
      this._keepaliveTime = undefined;
      this._mandatory = undefined;
      this._passes = undefined;
      this._path = undefined;
      this._persistent = undefined;
      this._port = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._statusMatch = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectTimeout = value.connectTimeout;
      this._enable = value.enable;
      this._fails = value.fails;
      this._grpcService = value.grpcService;
      this._grpcStatus = value.grpcStatus;
      this._headers.internalValue = value.headers;
      this._interval = value.interval;
      this._jitter = value.jitter;
      this._keepaliveTime = value.keepaliveTime;
      this._mandatory = value.mandatory;
      this._passes = value.passes;
      this._path = value.path;
      this._persistent = value.persistent;
      this._port = value.port;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._statusMatch = value.statusMatch;
      this._tls.internalValue = value.tls;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fails - computed: false, optional: true, required: false
  private _fails?: number; 
  public get fails() {
    return this.getNumberAttribute('fails');
  }
  public set fails(value: number) {
    this._fails = value;
  }
  public resetFails() {
    this._fails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsInput() {
    return this._fails;
  }

  // grpc_service - computed: false, optional: true, required: false
  private _grpcService?: string; 
  public get grpcService() {
    return this.getStringAttribute('grpc_service');
  }
  public set grpcService(value: string) {
    this._grpcService = value;
  }
  public resetGrpcService() {
    this._grpcService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcServiceInput() {
    return this._grpcService;
  }

  // grpc_status - computed: false, optional: true, required: false
  private _grpcStatus?: number; 
  public get grpcStatus() {
    return this.getNumberAttribute('grpc_status');
  }
  public set grpcStatus(value: number) {
    this._grpcStatus = value;
  }
  public resetGrpcStatus() {
    this._grpcStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcStatusInput() {
    return this._grpcStatus;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
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

  // jitter - computed: false, optional: true, required: false
  private _jitter?: string; 
  public get jitter() {
    return this.getStringAttribute('jitter');
  }
  public set jitter(value: string) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: string; 
  public get keepaliveTime() {
    return this.getStringAttribute('keepalive_time');
  }
  public set keepaliveTime(value: string) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // passes - computed: false, optional: true, required: false
  private _passes?: number; 
  public get passes() {
    return this.getNumberAttribute('passes');
  }
  public set passes(value: number) {
    this._passes = value;
  }
  public resetPasses() {
    this._passes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passesInput() {
    return this._passes;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
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

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: string; 
  public get sendTimeout() {
    return this.getStringAttribute('send_timeout');
  }
  public set sendTimeout(value: string) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // status_match - computed: false, optional: true, required: false
  private _statusMatch?: string; 
  public get statusMatch() {
    return this.getStringAttribute('status_match');
  }
  public set statusMatch(value: string) {
    this._statusMatch = value;
  }
  public resetStatusMatch() {
    this._statusMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMatchInput() {
    return this._statusMatch;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#size DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#timeout}
  */
  readonly timeout?: string;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._timeout = value.timeout;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#domain DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#expires DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#expires}
  */
  readonly expires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#http_only DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#http_only}
  */
  readonly httpOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#path DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#samesite DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#secure DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#secure}
  */
  readonly secure?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    enable: cdktf.booleanToTerraform(struct!.enable),
    expires: cdktf.stringToTerraform(struct!.expires),
    http_only: cdktf.booleanToTerraform(struct!.httpOnly),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite: cdktf.stringToTerraform(struct!.samesite),
    secure: cdktf.booleanToTerraform(struct!.secure),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_only: {
      value: cdktf.booleanToHclTerraform(struct!.httpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite: {
      value: cdktf.stringToHclTerraform(struct!.samesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure: {
      value: cdktf.booleanToHclTerraform(struct!.secure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._httpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOnly = this._httpOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesite = this._samesite;
    }
    if (this._secure !== undefined) {
      hasAnyValues = true;
      internalValueResult.secure = this._secure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._enable = undefined;
      this._expires = undefined;
      this._httpOnly = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesite = undefined;
      this._secure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._enable = value.enable;
      this._expires = value.expires;
      this._httpOnly = value.httpOnly;
      this._name = value.name;
      this._path = value.path;
      this._samesite = value.samesite;
      this._secure = value.secure;
    }
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // http_only - computed: false, optional: true, required: false
  private _httpOnly?: boolean | cdktf.IResolvable; 
  public get httpOnly() {
    return this.getBooleanAttribute('http_only');
  }
  public set httpOnly(value: boolean | cdktf.IResolvable) {
    this._httpOnly = value;
  }
  public resetHttpOnly() {
    this._httpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOnlyInput() {
    return this._httpOnly;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // samesite - computed: false, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // secure - computed: false, optional: true, required: false
  private _secure?: boolean | cdktf.IResolvable; 
  public get secure() {
    return this.getBooleanAttribute('secure');
  }
  public set secure(value: boolean | cdktf.IResolvable) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#enable DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#backup DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#backup}
  */
  readonly backup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#backup_port DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#backup_port}
  */
  readonly backupPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#buffer_size DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#buffering DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#buffering}
  */
  readonly buffering?: boolean | cdktf.IResolvable;
  /**
  * UpstreamBuffers defines Buffer Configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#buffers DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#buffers}
  */
  readonly buffers?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#client_max_body_size DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#client_max_body_size}
  */
  readonly clientMaxBodySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#connect_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#connect_timeout}
  */
  readonly connectTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#fail_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#fail_timeout}
  */
  readonly failTimeout?: string;
  /**
  * HealthCheck defines the parameters for active Upstream HealthChecks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#health_check DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#health_check}
  */
  readonly healthCheck?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#keepalive DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#lb_method DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#lb_method}
  */
  readonly lbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#max_conns DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#max_conns}
  */
  readonly maxConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#max_fails DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#max_fails}
  */
  readonly maxFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#next_upstream DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#next_upstream}
  */
  readonly nextUpstream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#next_upstream_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#next_upstream_timeout}
  */
  readonly nextUpstreamTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#next_upstream_tries DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#next_upstream_tries}
  */
  readonly nextUpstreamTries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ntlm DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ntlm}
  */
  readonly ntlm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#port DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#port}
  */
  readonly port?: number;
  /**
  * UpstreamQueue defines Queue Configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#queue DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#queue}
  */
  readonly queue?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#read_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#read_timeout}
  */
  readonly readTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#send_timeout DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#send_timeout}
  */
  readonly sendTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#service DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#service}
  */
  readonly service?: string;
  /**
  * SessionCookie defines the parameters for session persistence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#session_cookie DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#session_cookie}
  */
  readonly sessionCookie?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#slow_start DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#slow_start}
  */
  readonly slowStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#subselector DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#subselector}
  */
  readonly subselector?: { [key: string]: string };
  /**
  * UpstreamTLS defines a TLS configuration for an Upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#tls DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#tls}
  */
  readonly tls?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#type DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#use_cluster_ip DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#use_cluster_ip}
  */
  readonly useClusterIp?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.stringToTerraform(struct!.backup),
    backup_port: cdktf.numberToTerraform(struct!.backupPort),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    buffering: cdktf.booleanToTerraform(struct!.buffering),
    buffers: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersToTerraform(struct!.buffers),
    client_max_body_size: cdktf.stringToTerraform(struct!.clientMaxBodySize),
    connect_timeout: cdktf.stringToTerraform(struct!.connectTimeout),
    fail_timeout: cdktf.stringToTerraform(struct!.failTimeout),
    health_check: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckToTerraform(struct!.healthCheck),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    lb_method: cdktf.stringToTerraform(struct!.lbMethod),
    max_conns: cdktf.numberToTerraform(struct!.maxConns),
    max_fails: cdktf.numberToTerraform(struct!.maxFails),
    name: cdktf.stringToTerraform(struct!.name),
    next_upstream: cdktf.stringToTerraform(struct!.nextUpstream),
    next_upstream_timeout: cdktf.stringToTerraform(struct!.nextUpstreamTimeout),
    next_upstream_tries: cdktf.numberToTerraform(struct!.nextUpstreamTries),
    ntlm: cdktf.booleanToTerraform(struct!.ntlm),
    port: cdktf.numberToTerraform(struct!.port),
    queue: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueToTerraform(struct!.queue),
    read_timeout: cdktf.stringToTerraform(struct!.readTimeout),
    send_timeout: cdktf.stringToTerraform(struct!.sendTimeout),
    service: cdktf.stringToTerraform(struct!.service),
    session_cookie: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieToTerraform(struct!.sessionCookie),
    slow_start: cdktf.stringToTerraform(struct!.slowStart),
    subselector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.subselector),
    tls: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsToTerraform(struct!.tls),
    type: cdktf.stringToTerraform(struct!.type),
    use_cluster_ip: cdktf.booleanToTerraform(struct!.useClusterIp),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.stringToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_port: {
      value: cdktf.numberToHclTerraform(struct!.backupPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffering: {
      value: cdktf.booleanToHclTerraform(struct!.buffering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    buffers: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersToHclTerraform(struct!.buffers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers",
    },
    client_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.clientMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_timeout: {
      value: cdktf.stringToHclTerraform(struct!.failTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckToHclTerraform(struct!.healthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_method: {
      value: cdktf.stringToHclTerraform(struct!.lbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_conns: {
      value: cdktf.numberToHclTerraform(struct!.maxConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_fails: {
      value: cdktf.numberToHclTerraform(struct!.maxFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream: {
      value: cdktf.stringToHclTerraform(struct!.nextUpstream),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nextUpstreamTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_upstream_tries: {
      value: cdktf.numberToHclTerraform(struct!.nextUpstreamTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm: {
      value: cdktf.booleanToHclTerraform(struct!.ntlm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueToHclTerraform(struct!.queue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue",
    },
    read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieToHclTerraform(struct!.sessionCookie),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie",
    },
    slow_start: {
      value: cdktf.stringToHclTerraform(struct!.slowStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subselector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.subselector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls: {
      value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cluster_ip: {
      value: cdktf.booleanToHclTerraform(struct!.useClusterIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._backupPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPort = this._backupPort;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._buffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffering = this._buffering;
    }
    if (this._buffers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffers = this._buffers?.internalValue;
    }
    if (this._clientMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxBodySize = this._clientMaxBodySize;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._failTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.failTimeout = this._failTimeout;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._lbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbMethod = this._lbMethod;
    }
    if (this._maxConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConns = this._maxConns;
    }
    if (this._maxFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFails = this._maxFails;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextUpstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstream = this._nextUpstream;
    }
    if (this._nextUpstreamTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTimeout = this._nextUpstreamTimeout;
    }
    if (this._nextUpstreamTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpstreamTries = this._nextUpstreamTries;
    }
    if (this._ntlm !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlm = this._ntlm;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._queue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue?.internalValue;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sessionCookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookie = this._sessionCookie?.internalValue;
    }
    if (this._slowStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStart = this._slowStart;
    }
    if (this._subselector !== undefined) {
      hasAnyValues = true;
      internalValueResult.subselector = this._subselector;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useClusterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useClusterIp = this._useClusterIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._backupPort = undefined;
      this._bufferSize = undefined;
      this._buffering = undefined;
      this._buffers.internalValue = undefined;
      this._clientMaxBodySize = undefined;
      this._connectTimeout = undefined;
      this._failTimeout = undefined;
      this._healthCheck.internalValue = undefined;
      this._keepalive = undefined;
      this._lbMethod = undefined;
      this._maxConns = undefined;
      this._maxFails = undefined;
      this._name = undefined;
      this._nextUpstream = undefined;
      this._nextUpstreamTimeout = undefined;
      this._nextUpstreamTries = undefined;
      this._ntlm = undefined;
      this._port = undefined;
      this._queue.internalValue = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._service = undefined;
      this._sessionCookie.internalValue = undefined;
      this._slowStart = undefined;
      this._subselector = undefined;
      this._tls.internalValue = undefined;
      this._type = undefined;
      this._useClusterIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._backupPort = value.backupPort;
      this._bufferSize = value.bufferSize;
      this._buffering = value.buffering;
      this._buffers.internalValue = value.buffers;
      this._clientMaxBodySize = value.clientMaxBodySize;
      this._connectTimeout = value.connectTimeout;
      this._failTimeout = value.failTimeout;
      this._healthCheck.internalValue = value.healthCheck;
      this._keepalive = value.keepalive;
      this._lbMethod = value.lbMethod;
      this._maxConns = value.maxConns;
      this._maxFails = value.maxFails;
      this._name = value.name;
      this._nextUpstream = value.nextUpstream;
      this._nextUpstreamTimeout = value.nextUpstreamTimeout;
      this._nextUpstreamTries = value.nextUpstreamTries;
      this._ntlm = value.ntlm;
      this._port = value.port;
      this._queue.internalValue = value.queue;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._service = value.service;
      this._sessionCookie.internalValue = value.sessionCookie;
      this._slowStart = value.slowStart;
      this._subselector = value.subselector;
      this._tls.internalValue = value.tls;
      this._type = value.type;
      this._useClusterIp = value.useClusterIp;
    }
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: string; 
  public get backup() {
    return this.getStringAttribute('backup');
  }
  public set backup(value: string) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // backup_port - computed: false, optional: true, required: false
  private _backupPort?: number; 
  public get backupPort() {
    return this.getNumberAttribute('backup_port');
  }
  public set backupPort(value: number) {
    this._backupPort = value;
  }
  public resetBackupPort() {
    this._backupPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPortInput() {
    return this._backupPort;
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // buffering - computed: false, optional: true, required: false
  private _buffering?: boolean | cdktf.IResolvable; 
  public get buffering() {
    return this.getBooleanAttribute('buffering');
  }
  public set buffering(value: boolean | cdktf.IResolvable) {
    this._buffering = value;
  }
  public resetBuffering() {
    this._buffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingInput() {
    return this._buffering;
  }

  // buffers - computed: false, optional: true, required: false
  private _buffers = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffersOutputReference(this, "buffers");
  public get buffers() {
    return this._buffers;
  }
  public putBuffers(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsBuffers) {
    this._buffers.internalValue = value;
  }
  public resetBuffers() {
    this._buffers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersInput() {
    return this._buffers.internalValue;
  }

  // client_max_body_size - computed: false, optional: true, required: false
  private _clientMaxBodySize?: string; 
  public get clientMaxBodySize() {
    return this.getStringAttribute('client_max_body_size');
  }
  public set clientMaxBodySize(value: string) {
    this._clientMaxBodySize = value;
  }
  public resetClientMaxBodySize() {
    this._clientMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxBodySizeInput() {
    return this._clientMaxBodySize;
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: string; 
  public get connectTimeout() {
    return this.getStringAttribute('connect_timeout');
  }
  public set connectTimeout(value: string) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // fail_timeout - computed: false, optional: true, required: false
  private _failTimeout?: string; 
  public get failTimeout() {
    return this.getStringAttribute('fail_timeout');
  }
  public set failTimeout(value: string) {
    this._failTimeout = value;
  }
  public resetFailTimeout() {
    this._failTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTimeoutInput() {
    return this._failTimeout;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // keepalive - computed: false, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // lb_method - computed: false, optional: true, required: false
  private _lbMethod?: string; 
  public get lbMethod() {
    return this.getStringAttribute('lb_method');
  }
  public set lbMethod(value: string) {
    this._lbMethod = value;
  }
  public resetLbMethod() {
    this._lbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbMethodInput() {
    return this._lbMethod;
  }

  // max_conns - computed: false, optional: true, required: false
  private _maxConns?: number; 
  public get maxConns() {
    return this.getNumberAttribute('max_conns');
  }
  public set maxConns(value: number) {
    this._maxConns = value;
  }
  public resetMaxConns() {
    this._maxConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnsInput() {
    return this._maxConns;
  }

  // max_fails - computed: false, optional: true, required: false
  private _maxFails?: number; 
  public get maxFails() {
    return this.getNumberAttribute('max_fails');
  }
  public set maxFails(value: number) {
    this._maxFails = value;
  }
  public resetMaxFails() {
    this._maxFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailsInput() {
    return this._maxFails;
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

  // next_upstream - computed: false, optional: true, required: false
  private _nextUpstream?: string; 
  public get nextUpstream() {
    return this.getStringAttribute('next_upstream');
  }
  public set nextUpstream(value: string) {
    this._nextUpstream = value;
  }
  public resetNextUpstream() {
    this._nextUpstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamInput() {
    return this._nextUpstream;
  }

  // next_upstream_timeout - computed: false, optional: true, required: false
  private _nextUpstreamTimeout?: string; 
  public get nextUpstreamTimeout() {
    return this.getStringAttribute('next_upstream_timeout');
  }
  public set nextUpstreamTimeout(value: string) {
    this._nextUpstreamTimeout = value;
  }
  public resetNextUpstreamTimeout() {
    this._nextUpstreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTimeoutInput() {
    return this._nextUpstreamTimeout;
  }

  // next_upstream_tries - computed: false, optional: true, required: false
  private _nextUpstreamTries?: number; 
  public get nextUpstreamTries() {
    return this.getNumberAttribute('next_upstream_tries');
  }
  public set nextUpstreamTries(value: number) {
    this._nextUpstreamTries = value;
  }
  public resetNextUpstreamTries() {
    this._nextUpstreamTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpstreamTriesInput() {
    return this._nextUpstreamTries;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm?: boolean | cdktf.IResolvable; 
  public get ntlm() {
    return this.getBooleanAttribute('ntlm');
  }
  public set ntlm(value: boolean | cdktf.IResolvable) {
    this._ntlm = value;
  }
  public resetNtlm() {
    this._ntlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm;
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

  // queue - computed: false, optional: true, required: false
  private _queue = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueueOutputReference(this, "queue");
  public get queue() {
    return this._queue;
  }
  public putQueue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsQueue) {
    this._queue.internalValue = value;
  }
  public resetQueue() {
    this._queue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue.internalValue;
  }

  // read_timeout - computed: false, optional: true, required: false
  private _readTimeout?: string; 
  public get readTimeout() {
    return this.getStringAttribute('read_timeout');
  }
  public set readTimeout(value: string) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: false, optional: true, required: false
  private _sendTimeout?: string; 
  public get sendTimeout() {
    return this.getStringAttribute('send_timeout');
  }
  public set sendTimeout(value: string) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // session_cookie - computed: false, optional: true, required: false
  private _sessionCookie = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookieOutputReference(this, "session_cookie");
  public get sessionCookie() {
    return this._sessionCookie;
  }
  public putSessionCookie(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsSessionCookie) {
    this._sessionCookie.internalValue = value;
  }
  public resetSessionCookie() {
    this._sessionCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieInput() {
    return this._sessionCookie.internalValue;
  }

  // slow_start - computed: false, optional: true, required: false
  private _slowStart?: string; 
  public get slowStart() {
    return this.getStringAttribute('slow_start');
  }
  public set slowStart(value: string) {
    this._slowStart = value;
  }
  public resetSlowStart() {
    this._slowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartInput() {
    return this._slowStart;
  }

  // subselector - computed: false, optional: true, required: false
  private _subselector?: { [key: string]: string }; 
  public get subselector() {
    return this.getStringMapAttribute('subselector');
  }
  public set subselector(value: { [key: string]: string }) {
    this._subselector = value;
  }
  public resetSubselector() {
    this._subselector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subselectorInput() {
    return this._subselector;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
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

  // use_cluster_ip - computed: false, optional: true, required: false
  private _useClusterIp?: boolean | cdktf.IResolvable; 
  public get useClusterIp() {
    return this.getBooleanAttribute('use_cluster_ip');
  }
  public set useClusterIp(value: boolean | cdktf.IResolvable) {
    this._useClusterIp = value;
  }
  public resetUseClusterIp() {
    this._useClusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useClusterIpInput() {
    return this._useClusterIp;
  }
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsOutputReference {
    return new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#host DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#ingress_class_name DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#subroutes DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#subroutes}
  */
  readonly subroutes?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#upstreams DataK8SK8SNginxOrgVirtualServerRouteV1Manifest#upstreams}
  */
  readonly upstreams?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams[] | cdktf.IResolvable;
}

export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecToTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    subroutes: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesToTerraform, false)(struct!.subroutes),
    upstreams: cdktf.listMapper(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsToTerraform, false)(struct!.upstreams),
  }
}


export function dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecToHclTerraform(struct?: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subroutes: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesToHclTerraform, false)(struct!.subroutes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesList",
    },
    upstreams: {
      value: cdktf.listMapperHcl(dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsToHclTerraform, false)(struct!.upstreams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._subroutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subroutes = this._subroutes?.internalValue;
    }
    if (this._upstreams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreams = this._upstreams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._ingressClassName = undefined;
      this._subroutes.internalValue = undefined;
      this._upstreams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._ingressClassName = value.ingressClassName;
      this._subroutes.internalValue = value.subroutes;
      this._upstreams.internalValue = value.upstreams;
    }
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

  // subroutes - computed: false, optional: true, required: false
  private _subroutes = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutesList(this, "subroutes", false);
  public get subroutes() {
    return this._subroutes;
  }
  public putSubroutes(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecSubroutes[] | cdktf.IResolvable) {
    this._subroutes.internalValue = value;
  }
  public resetSubroutes() {
    this._subroutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subroutesInput() {
    return this._subroutes.internalValue;
  }

  // upstreams - computed: false, optional: true, required: false
  private _upstreams = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreamsList(this, "upstreams", false);
  public get upstreams() {
    return this._upstreams;
  }
  public putUpstreams(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecUpstreams[] | cdktf.IResolvable) {
    this._upstreams.internalValue = value;
  }
  public resetUpstreams() {
    this._upstreams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamsInput() {
    return this._upstreams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest k8s_k8s_nginx_org_virtual_server_route_v1_manifest}
*/
export class DataK8SK8SNginxOrgVirtualServerRouteV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_nginx_org_virtual_server_route_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SNginxOrgVirtualServerRouteV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SNginxOrgVirtualServerRouteV1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SNginxOrgVirtualServerRouteV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SNginxOrgVirtualServerRouteV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_nginx_org_virtual_server_route_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/k8s_nginx_org_virtual_server_route_v1_manifest k8s_k8s_nginx_org_virtual_server_route_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SNginxOrgVirtualServerRouteV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_nginx_org_virtual_server_route_v1_manifest',
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
  private _metadata = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec) {
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
      metadata: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SNginxOrgVirtualServerRouteV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
