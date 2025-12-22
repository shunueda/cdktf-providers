// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#metadata DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#metadata}
  */
  readonly metadata: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata;
  /**
  * IntentsSpec defines the desired state of ClientIntents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#spec DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#spec}
  */
  readonly spec?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec;
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#annotations DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#labels DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#namespace DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#database_name DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#operations DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#operations}
  */
  readonly operations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#table DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#table}
  */
  readonly table?: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._operations = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._operations = value.operations;
      this._table = value.table;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // operations - computed: false, optional: true, required: false
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#methods DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#methods}
  */
  readonly methods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#path DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#operations DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#operations}
  */
  readonly operations: string[];
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operations),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics | cdktf.IResolvable): any {
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
    operations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operations = value.operations;
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

  // operations - computed: false, optional: false, required: true
  private _operations?: string[]; 
  public get operations() {
    return this.getListAttribute('operations');
  }
  public set operations(value: string[]) {
    this._operations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#database_resources DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#database_resources}
  */
  readonly databaseResources?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#resources DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#resources}
  */
  readonly resources?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#topics DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#topics}
  */
  readonly topics?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#type DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_resources: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesToTerraform, false)(struct!.databaseResources),
    name: cdktf.stringToTerraform(struct!.name),
    resources: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesToTerraform, false)(struct!.resources),
    topics: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsToTerraform, false)(struct!.topics),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_resources: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesToHclTerraform, false)(struct!.databaseResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesList",
    },
    topics: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsToHclTerraform, false)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsList",
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseResources = this._databaseResources?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseResources.internalValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
      this._topics.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseResources.internalValue = value.databaseResources;
      this._name = value.name;
      this._resources.internalValue = value.resources;
      this._topics.internalValue = value.topics;
      this._type = value.type;
    }
  }

  // database_resources - computed: false, optional: true, required: false
  private _databaseResources = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResourcesList(this, "database_resources", false);
  public get databaseResources() {
    return this._databaseResources;
  }
  public putDatabaseResources(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsDatabaseResources[] | cdktf.IResolvable) {
    this._databaseResources.internalValue = value;
  }
  public resetDatabaseResources() {
    this._databaseResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseResourcesInput() {
    return this._databaseResources.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // topics - computed: false, optional: true, required: false
  private _topics = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  public resetTopics() {
    this._topics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsList extends cdktf.ComplexList {
  public internalValue? : DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsOutputReference {
    return new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#name DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService | cdktf.IResolvable): any {
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

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#calls DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#calls}
  */
  readonly calls: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#service DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest#service}
  */
  readonly service: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService;
}

export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecToTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calls: cdktf.listMapper(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsToTerraform, false)(struct!.calls),
    service: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceToTerraform(struct!.service),
  }
}


export function dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecToHclTerraform(struct?: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calls: {
      value: cdktf.listMapperHcl(dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsToHclTerraform, false)(struct!.calls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsList",
    },
    service: {
      value: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calls = this._calls?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calls.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calls.internalValue = value.calls;
      this._service.internalValue = value.service;
    }
  }

  // calls - computed: false, optional: false, required: true
  private _calls = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCallsList(this, "calls", false);
  public get calls() {
    return this._calls;
  }
  public putCalls(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecCalls[] | cdktf.IResolvable) {
    this._calls.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callsInput() {
    return this._calls.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest k8s_k8s_otterize_com_client_intents_v1alpha2_manifest}
*/
export class DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_otterize_com_client_intents_v1alpha2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest to import
  * @param importFromId The id of the existing DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SOtterizeComClientIntentsV1Alpha2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_otterize_com_client_intents_v1alpha2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/k8s_otterize_com_client_intents_v1alpha2_manifest k8s_k8s_otterize_com_client_intents_v1alpha2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_otterize_com_client_intents_v1alpha2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec) {
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
      metadata: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SOtterizeComClientIntentsV1Alpha2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
