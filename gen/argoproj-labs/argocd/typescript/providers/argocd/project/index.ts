// https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#metadata Project#metadata}
  */
  readonly metadata?: ProjectMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#spec Project#spec}
  */
  readonly spec?: ProjectSpec[] | cdktf.IResolvable;
}
export interface ProjectMetadata {
  /**
  * An unstructured key value map stored with the cluster secret that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#annotations Project#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the cluster secret. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#labels Project#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the appproject, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Namespace of the appproject, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespace Project#namespace}
  */
  readonly namespace?: string;
}

export function projectMetadataToTerraform(struct?: ProjectMetadata | cdktf.IResolvable): any {
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


export function projectMetadataToHclTerraform(struct?: ProjectMetadata | cdktf.IResolvable): any {
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

export class ProjectMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ProjectMetadata | cdktf.IResolvable | undefined) {
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

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
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

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ProjectMetadataList extends cdktf.ComplexList {
  public internalValue? : ProjectMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProjectMetadataOutputReference {
    return new ProjectMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecClusterResourceBlacklistStruct {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#group Project#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
}

export function projectSpecClusterResourceBlacklistStructToTerraform(struct?: ProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function projectSpecClusterResourceBlacklistStructToHclTerraform(struct?: ProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecClusterResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ProjectSpecClusterResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecClusterResourceBlacklistStructOutputReference {
    return new ProjectSpecClusterResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecClusterResourceWhitelistStruct {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#group Project#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
}

export function projectSpecClusterResourceWhitelistStructToTerraform(struct?: ProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function projectSpecClusterResourceWhitelistStructToHclTerraform(struct?: ProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecClusterResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ProjectSpecClusterResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecClusterResourceWhitelistStructOutputReference {
    return new ProjectSpecClusterResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecDestination {
  /**
  * Name of the destination cluster which can be used instead of server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#name Project#name}
  */
  readonly name?: string;
  /**
  * Target namespace for applications' resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespace Project#namespace}
  */
  readonly namespace: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#server Project#server}
  */
  readonly server?: string;
}

export function projectSpecDestinationToTerraform(struct?: ProjectSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function projectSpecDestinationToHclTerraform(struct?: ProjectSpecDestination | cdktf.IResolvable): any {
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecDestination | cdktf.IResolvable | undefined {
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
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
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
      this._server = value.server;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class ProjectSpecDestinationList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecDestination[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecDestinationOutputReference {
    return new ProjectSpecDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecDestinationServiceAccount {
  /**
  * Used for impersonation during the sync operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#default_service_account Project#default_service_account}
  */
  readonly defaultServiceAccount: string;
  /**
  * Specifies the target namespace for the application's resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespace Project#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the URL of the target cluster's Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#server Project#server}
  */
  readonly server?: string;
}

export function projectSpecDestinationServiceAccountToTerraform(struct?: ProjectSpecDestinationServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_service_account: cdktf.stringToTerraform(struct!.defaultServiceAccount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function projectSpecDestinationServiceAccountToHclTerraform(struct?: ProjectSpecDestinationServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_service_account: {
      value: cdktf.stringToHclTerraform(struct!.defaultServiceAccount),
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecDestinationServiceAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecDestinationServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultServiceAccount = this._defaultServiceAccount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecDestinationServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultServiceAccount = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultServiceAccount = value.defaultServiceAccount;
      this._namespace = value.namespace;
      this._server = value.server;
    }
  }

  // default_service_account - computed: false, optional: false, required: true
  private _defaultServiceAccount?: string; 
  public get defaultServiceAccount() {
    return this.getStringAttribute('default_service_account');
  }
  public set defaultServiceAccount(value: string) {
    this._defaultServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultServiceAccountInput() {
    return this._defaultServiceAccount;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class ProjectSpecDestinationServiceAccountList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecDestinationServiceAccount[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecDestinationServiceAccountOutputReference {
    return new ProjectSpecDestinationServiceAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecNamespaceResourceBlacklistStruct {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#group Project#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
}

export function projectSpecNamespaceResourceBlacklistStructToTerraform(struct?: ProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function projectSpecNamespaceResourceBlacklistStructToHclTerraform(struct?: ProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecNamespaceResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ProjectSpecNamespaceResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecNamespaceResourceBlacklistStructOutputReference {
    return new ProjectSpecNamespaceResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecNamespaceResourceWhitelistStruct {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#group Project#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
}

export function projectSpecNamespaceResourceWhitelistStructToTerraform(struct?: ProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function projectSpecNamespaceResourceWhitelistStructToHclTerraform(struct?: ProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecNamespaceResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

export class ProjectSpecNamespaceResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecNamespaceResourceWhitelistStructOutputReference {
    return new ProjectSpecNamespaceResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecOrphanedResourcesIgnore {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#group Project#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
  /**
  * The Kubernetes resource name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#name Project#name}
  */
  readonly name?: string;
}

export function projectSpecOrphanedResourcesIgnoreToTerraform(struct?: ProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function projectSpecOrphanedResourcesIgnoreToHclTerraform(struct?: ProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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

export class ProjectSpecOrphanedResourcesIgnoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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

  public set internalValue(value: ProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

export class ProjectSpecOrphanedResourcesIgnoreList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecOrphanedResourcesIgnoreOutputReference {
    return new ProjectSpecOrphanedResourcesIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecOrphanedResources {
  /**
  * Whether a warning condition should be created for apps which have orphaned resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#warn Project#warn}
  */
  readonly warn?: boolean | cdktf.IResolvable;
  /**
  * ignore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#ignore Project#ignore}
  */
  readonly ignore?: ProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable;
}

export function projectSpecOrphanedResourcesToTerraform(struct?: ProjectSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    warn: cdktf.booleanToTerraform(struct!.warn),
    ignore: cdktf.listMapper(projectSpecOrphanedResourcesIgnoreToTerraform, true)(struct!.ignore),
  }
}


export function projectSpecOrphanedResourcesToHclTerraform(struct?: ProjectSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    warn: {
      value: cdktf.booleanToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore: {
      value: cdktf.listMapperHcl(projectSpecOrphanedResourcesIgnoreToHclTerraform, true)(struct!.ignore),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecOrphanedResourcesIgnoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecOrphanedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecOrphanedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    if (this._ignore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecOrphanedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._warn = undefined;
      this._ignore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._warn = value.warn;
      this._ignore.internalValue = value.ignore;
    }
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: boolean | cdktf.IResolvable; 
  public get warn() {
    return this.getBooleanAttribute('warn');
  }
  public set warn(value: boolean | cdktf.IResolvable) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore = new ProjectSpecOrphanedResourcesIgnoreList(this, "ignore", true);
  public get ignore() {
    return this._ignore;
  }
  public putIgnore(value: ProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable) {
    this._ignore.internalValue = value;
  }
  public resetIgnore() {
    this._ignore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore.internalValue;
  }
}

export class ProjectSpecOrphanedResourcesList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecOrphanedResources[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecOrphanedResourcesOutputReference {
    return new ProjectSpecOrphanedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecRoleJwtTokens {
  /**
  * Token expiration (timestamp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#exp Project#exp}
  */
  readonly exp?: number;
  /**
  * Token issued at (timestamp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#iat Project#iat}
  */
  readonly iat: number;
  /**
  * Token identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function projectSpecRoleJwtTokensToTerraform(struct?: ProjectSpecRoleJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp: cdktf.numberToTerraform(struct!.exp),
    iat: cdktf.numberToTerraform(struct!.iat),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function projectSpecRoleJwtTokensToHclTerraform(struct?: ProjectSpecRoleJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp: {
      value: cdktf.numberToHclTerraform(struct!.exp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iat: {
      value: cdktf.numberToHclTerraform(struct!.iat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecRoleJwtTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecRoleJwtTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exp !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp;
    }
    if (this._iat !== undefined) {
      hasAnyValues = true;
      internalValueResult.iat = this._iat;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecRoleJwtTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exp = undefined;
      this._iat = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exp = value.exp;
      this._iat = value.iat;
      this._id = value.id;
    }
  }

  // exp - computed: false, optional: true, required: false
  private _exp?: number; 
  public get exp() {
    return this.getNumberAttribute('exp');
  }
  public set exp(value: number) {
    this._exp = value;
  }
  public resetExp() {
    this._exp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp;
  }

  // iat - computed: false, optional: false, required: true
  private _iat?: number; 
  public get iat() {
    return this.getNumberAttribute('iat');
  }
  public set iat(value: number) {
    this._iat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iatInput() {
    return this._iat;
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
}

export class ProjectSpecRoleJwtTokensList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecRoleJwtTokens[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecRoleJwtTokensOutputReference {
    return new ProjectSpecRoleJwtTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecRole {
  /**
  * Description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * List of OIDC group claims bound to this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#groups Project#groups}
  */
  readonly groups?: string[];
  /**
  * List of JWT tokens issued for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#jwt_tokens Project#jwt_tokens}
  */
  readonly jwtTokens?: ProjectSpecRoleJwtTokens[] | cdktf.IResolvable;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * List of casbin formatted strings that define access policies for the role in the project. For more information, see the [ArgoCD RBAC reference](https://argoproj.github.io/argo-cd/operator-manual/rbac/#rbac-permission-structure).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#policies Project#policies}
  */
  readonly policies: string[];
}

export function projectSpecRoleToTerraform(struct?: ProjectSpecRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    jwt_tokens: cdktf.listMapper(projectSpecRoleJwtTokensToTerraform, false)(struct!.jwtTokens),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function projectSpecRoleToHclTerraform(struct?: ProjectSpecRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_tokens: {
      value: cdktf.listMapperHcl(projectSpecRoleJwtTokensToHclTerraform, false)(struct!.jwtTokens),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecRoleJwtTokensList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._jwtTokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokens = this._jwtTokens?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._jwtTokens.internalValue = undefined;
      this._name = undefined;
      this._policies = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groups = value.groups;
      this._jwtTokens.internalValue = value.jwtTokens;
      this._name = value.name;
      this._policies = value.policies;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // jwt_tokens - computed: false, optional: true, required: false
  private _jwtTokens = new ProjectSpecRoleJwtTokensList(this, "jwt_tokens", true);
  public get jwtTokens() {
    return this._jwtTokens;
  }
  public putJwtTokens(value: ProjectSpecRoleJwtTokens[] | cdktf.IResolvable) {
    this._jwtTokens.internalValue = value;
  }
  public resetJwtTokens() {
    this._jwtTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokensInput() {
    return this._jwtTokens.internalValue;
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

  // policies - computed: false, optional: false, required: true
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }
}

export class ProjectSpecRoleList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecRole[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecRoleOutputReference {
    return new ProjectSpecRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpecSyncWindow {
  /**
  * List of applications that the window will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#applications Project#applications}
  */
  readonly applications?: string[];
  /**
  *  List of clusters that the window will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#clusters Project#clusters}
  */
  readonly clusters?: string[];
  /**
  * Amount of time the sync window will be open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#duration Project#duration}
  */
  readonly duration?: string;
  /**
  * Defines if the window allows or blocks syncs, allowed values are `allow` or `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#kind Project#kind}
  */
  readonly kind?: string;
  /**
  * Enables manual syncs when they would otherwise be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#manual_sync Project#manual_sync}
  */
  readonly manualSync?: boolean | cdktf.IResolvable;
  /**
  * List of namespaces that the window will apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespaces Project#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Time the window will begin, specified in cron format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#schedule Project#schedule}
  */
  readonly schedule?: string;
  /**
  * Timezone that the schedule will be evaluated in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#timezone Project#timezone}
  */
  readonly timezone?: string;
}

export function projectSpecSyncWindowToTerraform(struct?: ProjectSpecSyncWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    duration: cdktf.stringToTerraform(struct!.duration),
    kind: cdktf.stringToTerraform(struct!.kind),
    manual_sync: cdktf.booleanToTerraform(struct!.manualSync),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function projectSpecSyncWindowToHclTerraform(struct?: ProjectSpecSyncWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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
    manual_sync: {
      value: cdktf.booleanToHclTerraform(struct!.manualSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecSyncWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpecSyncWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._manualSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSync = this._manualSync;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpecSyncWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._clusters = undefined;
      this._duration = undefined;
      this._kind = undefined;
      this._manualSync = undefined;
      this._namespaces = undefined;
      this._schedule = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._clusters = value.clusters;
      this._duration = value.duration;
      this._kind = value.kind;
      this._manualSync = value.manualSync;
      this._namespaces = value.namespaces;
      this._schedule = value.schedule;
      this._timezone = value.timezone;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // manual_sync - computed: false, optional: true, required: false
  private _manualSync?: boolean | cdktf.IResolvable; 
  public get manualSync() {
    return this.getBooleanAttribute('manual_sync');
  }
  public set manualSync(value: boolean | cdktf.IResolvable) {
    this._manualSync = value;
  }
  public resetManualSync() {
    this._manualSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSyncInput() {
    return this._manualSync;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}

export class ProjectSpecSyncWindowList extends cdktf.ComplexList {
  public internalValue? : ProjectSpecSyncWindow[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecSyncWindowOutputReference {
    return new ProjectSpecSyncWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSpec {
  /**
  * Project description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Signature keys for verifying the integrity of applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#signature_keys Project#signature_keys}
  */
  readonly signatureKeys?: string[];
  /**
  * List of source namespaces for applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#source_namespaces Project#source_namespaces}
  */
  readonly sourceNamespaces?: string[];
  /**
  * List of repositories from which applications may be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#source_repos Project#source_repos}
  */
  readonly sourceRepos?: string[];
  /**
  * cluster_resource_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#cluster_resource_blacklist Project#cluster_resource_blacklist}
  */
  readonly clusterResourceBlacklist?: ProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * cluster_resource_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#cluster_resource_whitelist Project#cluster_resource_whitelist}
  */
  readonly clusterResourceWhitelist?: ProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#destination Project#destination}
  */
  readonly destination?: ProjectSpecDestination[] | cdktf.IResolvable;
  /**
  * destination_service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#destination_service_account Project#destination_service_account}
  */
  readonly destinationServiceAccount?: ProjectSpecDestinationServiceAccount[] | cdktf.IResolvable;
  /**
  * namespace_resource_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespace_resource_blacklist Project#namespace_resource_blacklist}
  */
  readonly namespaceResourceBlacklist?: ProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * namespace_resource_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#namespace_resource_whitelist Project#namespace_resource_whitelist}
  */
  readonly namespaceResourceWhitelist?: ProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * orphaned_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#orphaned_resources Project#orphaned_resources}
  */
  readonly orphanedResources?: ProjectSpecOrphanedResources[] | cdktf.IResolvable;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#role Project#role}
  */
  readonly role?: ProjectSpecRole[] | cdktf.IResolvable;
  /**
  * sync_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#sync_window Project#sync_window}
  */
  readonly syncWindow?: ProjectSpecSyncWindow[] | cdktf.IResolvable;
}

export function projectSpecToTerraform(struct?: ProjectSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    signature_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signatureKeys),
    source_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNamespaces),
    source_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRepos),
    cluster_resource_blacklist: cdktf.listMapper(projectSpecClusterResourceBlacklistStructToTerraform, true)(struct!.clusterResourceBlacklist),
    cluster_resource_whitelist: cdktf.listMapper(projectSpecClusterResourceWhitelistStructToTerraform, true)(struct!.clusterResourceWhitelist),
    destination: cdktf.listMapper(projectSpecDestinationToTerraform, true)(struct!.destination),
    destination_service_account: cdktf.listMapper(projectSpecDestinationServiceAccountToTerraform, true)(struct!.destinationServiceAccount),
    namespace_resource_blacklist: cdktf.listMapper(projectSpecNamespaceResourceBlacklistStructToTerraform, true)(struct!.namespaceResourceBlacklist),
    namespace_resource_whitelist: cdktf.listMapper(projectSpecNamespaceResourceWhitelistStructToTerraform, true)(struct!.namespaceResourceWhitelist),
    orphaned_resources: cdktf.listMapper(projectSpecOrphanedResourcesToTerraform, true)(struct!.orphanedResources),
    role: cdktf.listMapper(projectSpecRoleToTerraform, true)(struct!.role),
    sync_window: cdktf.listMapper(projectSpecSyncWindowToTerraform, true)(struct!.syncWindow),
  }
}


export function projectSpecToHclTerraform(struct?: ProjectSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signatureKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNamespaces),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRepos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_resource_blacklist: {
      value: cdktf.listMapperHcl(projectSpecClusterResourceBlacklistStructToHclTerraform, true)(struct!.clusterResourceBlacklist),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecClusterResourceBlacklistStructList",
    },
    cluster_resource_whitelist: {
      value: cdktf.listMapperHcl(projectSpecClusterResourceWhitelistStructToHclTerraform, true)(struct!.clusterResourceWhitelist),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecClusterResourceWhitelistStructList",
    },
    destination: {
      value: cdktf.listMapperHcl(projectSpecDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecDestinationList",
    },
    destination_service_account: {
      value: cdktf.listMapperHcl(projectSpecDestinationServiceAccountToHclTerraform, true)(struct!.destinationServiceAccount),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecDestinationServiceAccountList",
    },
    namespace_resource_blacklist: {
      value: cdktf.listMapperHcl(projectSpecNamespaceResourceBlacklistStructToHclTerraform, true)(struct!.namespaceResourceBlacklist),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecNamespaceResourceBlacklistStructList",
    },
    namespace_resource_whitelist: {
      value: cdktf.listMapperHcl(projectSpecNamespaceResourceWhitelistStructToHclTerraform, true)(struct!.namespaceResourceWhitelist),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecNamespaceResourceWhitelistStructList",
    },
    orphaned_resources: {
      value: cdktf.listMapperHcl(projectSpecOrphanedResourcesToHclTerraform, true)(struct!.orphanedResources),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecOrphanedResourcesList",
    },
    role: {
      value: cdktf.listMapperHcl(projectSpecRoleToHclTerraform, true)(struct!.role),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecRoleList",
    },
    sync_window: {
      value: cdktf.listMapperHcl(projectSpecSyncWindowToHclTerraform, true)(struct!.syncWindow),
      isBlock: true,
      type: "set",
      storageClassType: "ProjectSpecSyncWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._signatureKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureKeys = this._signatureKeys;
    }
    if (this._sourceNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespaces = this._sourceNamespaces;
    }
    if (this._sourceRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRepos = this._sourceRepos;
    }
    if (this._clusterResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceBlacklist = this._clusterResourceBlacklist?.internalValue;
    }
    if (this._clusterResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceWhitelist = this._clusterResourceWhitelist?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._destinationServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationServiceAccount = this._destinationServiceAccount?.internalValue;
    }
    if (this._namespaceResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceBlacklist = this._namespaceResourceBlacklist?.internalValue;
    }
    if (this._namespaceResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceWhitelist = this._namespaceResourceWhitelist?.internalValue;
    }
    if (this._orphanedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanedResources = this._orphanedResources?.internalValue;
    }
    if (this._role?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role?.internalValue;
    }
    if (this._syncWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWindow = this._syncWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._signatureKeys = undefined;
      this._sourceNamespaces = undefined;
      this._sourceRepos = undefined;
      this._clusterResourceBlacklist.internalValue = undefined;
      this._clusterResourceWhitelist.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._destinationServiceAccount.internalValue = undefined;
      this._namespaceResourceBlacklist.internalValue = undefined;
      this._namespaceResourceWhitelist.internalValue = undefined;
      this._orphanedResources.internalValue = undefined;
      this._role.internalValue = undefined;
      this._syncWindow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._signatureKeys = value.signatureKeys;
      this._sourceNamespaces = value.sourceNamespaces;
      this._sourceRepos = value.sourceRepos;
      this._clusterResourceBlacklist.internalValue = value.clusterResourceBlacklist;
      this._clusterResourceWhitelist.internalValue = value.clusterResourceWhitelist;
      this._destination.internalValue = value.destination;
      this._destinationServiceAccount.internalValue = value.destinationServiceAccount;
      this._namespaceResourceBlacklist.internalValue = value.namespaceResourceBlacklist;
      this._namespaceResourceWhitelist.internalValue = value.namespaceResourceWhitelist;
      this._orphanedResources.internalValue = value.orphanedResources;
      this._role.internalValue = value.role;
      this._syncWindow.internalValue = value.syncWindow;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // signature_keys - computed: false, optional: true, required: false
  private _signatureKeys?: string[]; 
  public get signatureKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_keys'));
  }
  public set signatureKeys(value: string[]) {
    this._signatureKeys = value;
  }
  public resetSignatureKeys() {
    this._signatureKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureKeysInput() {
    return this._signatureKeys;
  }

  // source_namespaces - computed: false, optional: true, required: false
  private _sourceNamespaces?: string[]; 
  public get sourceNamespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('source_namespaces'));
  }
  public set sourceNamespaces(value: string[]) {
    this._sourceNamespaces = value;
  }
  public resetSourceNamespaces() {
    this._sourceNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespacesInput() {
    return this._sourceNamespaces;
  }

  // source_repos - computed: false, optional: true, required: false
  private _sourceRepos?: string[]; 
  public get sourceRepos() {
    return this.getListAttribute('source_repos');
  }
  public set sourceRepos(value: string[]) {
    this._sourceRepos = value;
  }
  public resetSourceRepos() {
    this._sourceRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceReposInput() {
    return this._sourceRepos;
  }

  // cluster_resource_blacklist - computed: false, optional: true, required: false
  private _clusterResourceBlacklist = new ProjectSpecClusterResourceBlacklistStructList(this, "cluster_resource_blacklist", true);
  public get clusterResourceBlacklist() {
    return this._clusterResourceBlacklist;
  }
  public putClusterResourceBlacklist(value: ProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._clusterResourceBlacklist.internalValue = value;
  }
  public resetClusterResourceBlacklist() {
    this._clusterResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceBlacklistInput() {
    return this._clusterResourceBlacklist.internalValue;
  }

  // cluster_resource_whitelist - computed: false, optional: true, required: false
  private _clusterResourceWhitelist = new ProjectSpecClusterResourceWhitelistStructList(this, "cluster_resource_whitelist", true);
  public get clusterResourceWhitelist() {
    return this._clusterResourceWhitelist;
  }
  public putClusterResourceWhitelist(value: ProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._clusterResourceWhitelist.internalValue = value;
  }
  public resetClusterResourceWhitelist() {
    this._clusterResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceWhitelistInput() {
    return this._clusterResourceWhitelist.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new ProjectSpecDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ProjectSpecDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // destination_service_account - computed: false, optional: true, required: false
  private _destinationServiceAccount = new ProjectSpecDestinationServiceAccountList(this, "destination_service_account", true);
  public get destinationServiceAccount() {
    return this._destinationServiceAccount;
  }
  public putDestinationServiceAccount(value: ProjectSpecDestinationServiceAccount[] | cdktf.IResolvable) {
    this._destinationServiceAccount.internalValue = value;
  }
  public resetDestinationServiceAccount() {
    this._destinationServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationServiceAccountInput() {
    return this._destinationServiceAccount.internalValue;
  }

  // namespace_resource_blacklist - computed: false, optional: true, required: false
  private _namespaceResourceBlacklist = new ProjectSpecNamespaceResourceBlacklistStructList(this, "namespace_resource_blacklist", true);
  public get namespaceResourceBlacklist() {
    return this._namespaceResourceBlacklist;
  }
  public putNamespaceResourceBlacklist(value: ProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceBlacklist.internalValue = value;
  }
  public resetNamespaceResourceBlacklist() {
    this._namespaceResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceBlacklistInput() {
    return this._namespaceResourceBlacklist.internalValue;
  }

  // namespace_resource_whitelist - computed: false, optional: true, required: false
  private _namespaceResourceWhitelist = new ProjectSpecNamespaceResourceWhitelistStructList(this, "namespace_resource_whitelist", true);
  public get namespaceResourceWhitelist() {
    return this._namespaceResourceWhitelist;
  }
  public putNamespaceResourceWhitelist(value: ProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceWhitelist.internalValue = value;
  }
  public resetNamespaceResourceWhitelist() {
    this._namespaceResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceWhitelistInput() {
    return this._namespaceResourceWhitelist.internalValue;
  }

  // orphaned_resources - computed: false, optional: true, required: false
  private _orphanedResources = new ProjectSpecOrphanedResourcesList(this, "orphaned_resources", true);
  public get orphanedResources() {
    return this._orphanedResources;
  }
  public putOrphanedResources(value: ProjectSpecOrphanedResources[] | cdktf.IResolvable) {
    this._orphanedResources.internalValue = value;
  }
  public resetOrphanedResources() {
    this._orphanedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanedResourcesInput() {
    return this._orphanedResources.internalValue;
  }

  // role - computed: false, optional: true, required: false
  private _role = new ProjectSpecRoleList(this, "role", true);
  public get role() {
    return this._role;
  }
  public putRole(value: ProjectSpecRole[] | cdktf.IResolvable) {
    this._role.internalValue = value;
  }
  public resetRole() {
    this._role.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // sync_window - computed: false, optional: true, required: false
  private _syncWindow = new ProjectSpecSyncWindowList(this, "sync_window", true);
  public get syncWindow() {
    return this._syncWindow;
  }
  public putSyncWindow(value: ProjectSpecSyncWindow[] | cdktf.IResolvable) {
    this._syncWindow.internalValue = value;
  }
  public resetSyncWindow() {
    this._syncWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWindowInput() {
    return this._syncWindow.internalValue;
  }
}

export class ProjectSpecList extends cdktf.ComplexList {
  public internalValue? : ProjectSpec[] | cdktf.IResolvable

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
  public get(index: number): ProjectSpecOutputReference {
    return new ProjectSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project argocd_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/project argocd_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'argocd_project',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.12.3',
        providerVersionConstraint: '7.12.3'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ProjectMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProjectMetadata[] | cdktf.IResolvable) {
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
  private _spec = new ProjectSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ProjectSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: cdktf.listMapper(projectMetadataToTerraform, true)(this._metadata.internalValue),
      spec: cdktf.listMapper(projectSpecToTerraform, true)(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: cdktf.listMapperHcl(projectMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectMetadataList",
      },
      spec: {
        value: cdktf.listMapperHcl(projectSpecToHclTerraform, true)(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
