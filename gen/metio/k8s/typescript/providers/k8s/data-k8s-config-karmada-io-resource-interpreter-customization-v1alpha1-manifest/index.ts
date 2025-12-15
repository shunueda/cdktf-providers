// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#metadata DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata;
  /**
  * Spec describes the configuration in detail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#spec DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec;
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#annotations DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#labels DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#name DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation {
  /**
  * LuaScript holds the Lua script that is used to interpret the dependencies of a specific resource. The script should implement a function as follows: ``` luaScript: > function GetDependencies(desiredObj) dependencies = {} serviceAccountName = desiredObj.spec.template.spec.serviceAccountName if serviceAccountName ~= nil and serviceAccountName ~= 'default' then dependency = {} dependency.apiVersion = 'v1' dependency.kind = 'ServiceAccount' dependency.name = serviceAccountName dependency.namespace = desiredObj.metadata.namespace dependencies[1] = dependency end return dependencies end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - desiredObj: the object represents the configuration to be applied to the member cluster. The returned value should be expressed by a slice of DependentObjectReference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation {
  /**
  * LuaScript holds the Lua script that is used to assess the health state of a specific resource. The script should implement a function as follows: ``` luaScript: > function InterpretHealth(observedObj) if observedObj.status.readyReplicas == observedObj.spec.replicas then return true end end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - observedObj: the object represents the configuration that is observed from a specific member cluster. The returned boolean value indicates the health status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource {
  /**
  * LuaScript holds the Lua script that is used to discover the resource's replica as well as resource requirements The script should implement a function as follows: ``` luaScript: > function GetReplicas(desiredObj) replica = desiredObj.spec.replicas requirement = {} requirement.nodeClaim = {} requirement.nodeClaim.nodeSelector = desiredObj.spec.template.spec.nodeSelector requirement.nodeClaim.tolerations = desiredObj.spec.template.spec.tolerations requirement.resourceRequest = desiredObj.spec.template.spec.containers[1].resources.limits return replica, requirement end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - desiredObj: the object represents the configuration to be applied to the member cluster. The function expects two return values: - replica: the declared replica number - requirement: the resource required by each replica expressed with a ResourceBindingSpec.ReplicaRequirements. The returned values will be set into a ResourceBinding or ClusterResourceBinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision {
  /**
  * LuaScript holds the Lua script that is used to revise replicas in the desired specification. The script should implement a function as follows: ``` luaScript: > function ReviseReplica(desiredObj, desiredReplica) desiredObj.spec.replicas = desiredReplica return desiredObj end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - desiredObj: the object represents the configuration to be applied to the member cluster. - desiredReplica: the replica number should be applied with. The returned object should be a revised configuration which will be applied to member cluster eventually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention {
  /**
  * LuaScript holds the Lua script that is used to retain runtime values to the desired specification. The script should implement a function as follows: ``` luaScript: > function Retain(desiredObj, observedObj) desiredObj.spec.fieldFoo = observedObj.spec.fieldFoo return desiredObj end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - desiredObj: the object represents the configuration to be applied to the member cluster. - observedObj: the object represents the configuration that is observed from a specific member cluster. The returned object should be a retained configuration which will be applied to member cluster eventually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation {
  /**
  * LuaScript holds the Lua script that is used to aggregate decentralized statuses to the desired specification. The script should implement a function as follows: ``` luaScript: > function AggregateStatus(desiredObj, statusItems) for i = 1, #statusItems do desiredObj.status.readyReplicas = desiredObj.status.readyReplicas + items[i].readyReplicas end return desiredObj end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - desiredObj: the object represents a resource template. - statusItems: the slice of status expressed with AggregatedStatusItem. The returned object should be a whole object with status aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection {
  /**
  * LuaScript holds the Lua script that is used to get the status from the observed specification. The script should implement a function as follows: ``` luaScript: > function ReflectStatus(observedObj) status = {} status.readyReplicas = observedObj.status.observedObj return status end ``` The content of the LuaScript needs to be a whole function including both declaration and implementation. The parameters will be supplied by the system: - observedObj: the object represents the configuration that is observed from a specific member cluster. The returned status could be the whole status or part of it and will be set into both Work and ResourceBinding(ClusterResourceBinding).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#lua_script DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#lua_script}
  */
  readonly luaScript: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lua_script: cdktf.stringToTerraform(struct!.luaScript),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lua_script: {
      value: cdktf.stringToHclTerraform(struct!.luaScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._luaScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.luaScript = this._luaScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._luaScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._luaScript = value.luaScript;
    }
  }

  // lua_script - computed: false, optional: false, required: true
  private _luaScript?: string; 
  public get luaScript() {
    return this.getStringAttribute('lua_script');
  }
  public set luaScript(value: string) {
    this._luaScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get luaScriptInput() {
    return this._luaScript;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations {
  /**
  * DependencyInterpretation describes the rules for Karmada to analyze the dependent resources. Karmada provides built-in rules for several standard Kubernetes types, see: https://karmada.io/docs/userguide/globalview/customizing-resource-interpreter/#interpretdependency If DependencyInterpretation is set, the built-in rules will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#dependency_interpretation DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#dependency_interpretation}
  */
  readonly dependencyInterpretation?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation;
  /**
  * HealthInterpretation describes the health assessment rules by which Karmada can assess the health state of the resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#health_interpretation DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#health_interpretation}
  */
  readonly healthInterpretation?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation;
  /**
  * ReplicaResource describes the rules for Karmada to discover the resource's replica as well as resource requirements. It would be useful for those CRD resources that declare workload types like Deployment. It is usually not needed for Kubernetes native resources(Deployment, Job) as Karmada knows how to discover info from them. But if it is set, the built-in discovery rules will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#replica_resource DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#replica_resource}
  */
  readonly replicaResource?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource;
  /**
  * ReplicaRevision describes the rules for Karmada to revise the resource's replica. It would be useful for those CRD resources that declare workload types like Deployment. It is usually not needed for Kubernetes native resources(Deployment, Job) as Karmada knows how to revise replicas for them. But if it is set, the built-in revision rules will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#replica_revision DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#replica_revision}
  */
  readonly replicaRevision?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision;
  /**
  * Retention describes the desired behavior that Karmada should react on the changes made by member cluster components. This avoids system running into a meaningless loop that Karmada resource controller and the member cluster component continually applying opposite values of a field. For example, the 'replicas' of Deployment might be changed by the HPA controller on member cluster. In this case, Karmada should retain the 'replicas' and not try to change it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#retention DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#retention}
  */
  readonly retention?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention;
  /**
  * StatusAggregation describes the rules for Karmada to aggregate status collected from member clusters to resource template. Karmada provides built-in rules for several standard Kubernetes types, see: https://karmada.io/docs/userguide/globalview/customizing-resource-interpreter/#aggregatestatus If StatusAggregation is set, the built-in rules will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#status_aggregation DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#status_aggregation}
  */
  readonly statusAggregation?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation;
  /**
  * StatusReflection describes the rules for Karmada to pick the resource's status. Karmada provides built-in rules for several standard Kubernetes types, see: https://karmada.io/docs/userguide/globalview/customizing-resource-interpreter/#interpretstatus If StatusReflection is set, the built-in rules will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#status_reflection DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#status_reflection}
  */
  readonly statusReflection?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dependency_interpretation: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationToTerraform(struct!.dependencyInterpretation),
    health_interpretation: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationToTerraform(struct!.healthInterpretation),
    replica_resource: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceToTerraform(struct!.replicaResource),
    replica_revision: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionToTerraform(struct!.replicaRevision),
    retention: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionToTerraform(struct!.retention),
    status_aggregation: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationToTerraform(struct!.statusAggregation),
    status_reflection: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionToTerraform(struct!.statusReflection),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dependency_interpretation: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationToHclTerraform(struct!.dependencyInterpretation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation",
    },
    health_interpretation: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationToHclTerraform(struct!.healthInterpretation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation",
    },
    replica_resource: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceToHclTerraform(struct!.replicaResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource",
    },
    replica_revision: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionToHclTerraform(struct!.replicaRevision),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision",
    },
    retention: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionToHclTerraform(struct!.retention),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention",
    },
    status_aggregation: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationToHclTerraform(struct!.statusAggregation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation",
    },
    status_reflection: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionToHclTerraform(struct!.statusReflection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependencyInterpretation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencyInterpretation = this._dependencyInterpretation?.internalValue;
    }
    if (this._healthInterpretation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthInterpretation = this._healthInterpretation?.internalValue;
    }
    if (this._replicaResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaResource = this._replicaResource?.internalValue;
    }
    if (this._replicaRevision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaRevision = this._replicaRevision?.internalValue;
    }
    if (this._retention?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention?.internalValue;
    }
    if (this._statusAggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusAggregation = this._statusAggregation?.internalValue;
    }
    if (this._statusReflection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusReflection = this._statusReflection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependencyInterpretation.internalValue = undefined;
      this._healthInterpretation.internalValue = undefined;
      this._replicaResource.internalValue = undefined;
      this._replicaRevision.internalValue = undefined;
      this._retention.internalValue = undefined;
      this._statusAggregation.internalValue = undefined;
      this._statusReflection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependencyInterpretation.internalValue = value.dependencyInterpretation;
      this._healthInterpretation.internalValue = value.healthInterpretation;
      this._replicaResource.internalValue = value.replicaResource;
      this._replicaRevision.internalValue = value.replicaRevision;
      this._retention.internalValue = value.retention;
      this._statusAggregation.internalValue = value.statusAggregation;
      this._statusReflection.internalValue = value.statusReflection;
    }
  }

  // dependency_interpretation - computed: false, optional: true, required: false
  private _dependencyInterpretation = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretationOutputReference(this, "dependency_interpretation");
  public get dependencyInterpretation() {
    return this._dependencyInterpretation;
  }
  public putDependencyInterpretation(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsDependencyInterpretation) {
    this._dependencyInterpretation.internalValue = value;
  }
  public resetDependencyInterpretation() {
    this._dependencyInterpretation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyInterpretationInput() {
    return this._dependencyInterpretation.internalValue;
  }

  // health_interpretation - computed: false, optional: true, required: false
  private _healthInterpretation = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretationOutputReference(this, "health_interpretation");
  public get healthInterpretation() {
    return this._healthInterpretation;
  }
  public putHealthInterpretation(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsHealthInterpretation) {
    this._healthInterpretation.internalValue = value;
  }
  public resetHealthInterpretation() {
    this._healthInterpretation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInterpretationInput() {
    return this._healthInterpretation.internalValue;
  }

  // replica_resource - computed: false, optional: true, required: false
  private _replicaResource = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResourceOutputReference(this, "replica_resource");
  public get replicaResource() {
    return this._replicaResource;
  }
  public putReplicaResource(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaResource) {
    this._replicaResource.internalValue = value;
  }
  public resetReplicaResource() {
    this._replicaResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaResourceInput() {
    return this._replicaResource.internalValue;
  }

  // replica_revision - computed: false, optional: true, required: false
  private _replicaRevision = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevisionOutputReference(this, "replica_revision");
  public get replicaRevision() {
    return this._replicaRevision;
  }
  public putReplicaRevision(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsReplicaRevision) {
    this._replicaRevision.internalValue = value;
  }
  public resetReplicaRevision() {
    this._replicaRevision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRevisionInput() {
    return this._replicaRevision.internalValue;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetentionOutputReference(this, "retention");
  public get retention() {
    return this._retention;
  }
  public putRetention(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsRetention) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // status_aggregation - computed: false, optional: true, required: false
  private _statusAggregation = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregationOutputReference(this, "status_aggregation");
  public get statusAggregation() {
    return this._statusAggregation;
  }
  public putStatusAggregation(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusAggregation) {
    this._statusAggregation.internalValue = value;
  }
  public resetStatusAggregation() {
    this._statusAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusAggregationInput() {
    return this._statusAggregation.internalValue;
  }

  // status_reflection - computed: false, optional: true, required: false
  private _statusReflection = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflectionOutputReference(this, "status_reflection");
  public get statusReflection() {
    return this._statusReflection;
  }
  public putStatusReflection(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsStatusReflection) {
    this._statusReflection.internalValue = value;
  }
  public resetStatusReflection() {
    this._statusReflection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusReflectionInput() {
    return this._statusReflection.internalValue;
  }
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget {
  /**
  * APIVersion represents the API version of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#api_version DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind represents the Kind of target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#kind DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget | cdktf.IResolvable): any {
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

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
}
export interface DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec {
  /**
  * Customizations describe the interpretation rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#customizations DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#customizations}
  */
  readonly customizations: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations;
  /**
  * CustomizationTarget represents the resource type that the customization applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#target DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest#target}
  */
  readonly target: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget;
}

export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customizations: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsToTerraform(struct!.customizations),
    target: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetToTerraform(struct!.target),
  }
}


export function dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customizations: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsToHclTerraform(struct!.customizations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations",
    },
    target: {
      value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customizations = this._customizations?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customizations.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customizations.internalValue = value.customizations;
      this._target.internalValue = value.target;
    }
  }

  // customizations - computed: false, optional: false, required: true
  private _customizations = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizationsOutputReference(this, "customizations");
  public get customizations() {
    return this._customizations;
  }
  public putCustomizations(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecCustomizations) {
    this._customizations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customizationsInput() {
    return this._customizations.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest k8s_config_karmada_io_resource_interpreter_customization_v1alpha1_manifest}
*/
export class DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_config_karmada_io_resource_interpreter_customization_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_config_karmada_io_resource_interpreter_customization_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/config_karmada_io_resource_interpreter_customization_v1alpha1_manifest k8s_config_karmada_io_resource_interpreter_customization_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_config_karmada_io_resource_interpreter_customization_v1alpha1_manifest',
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
  private _metadata = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SConfigKarmadaIoResourceInterpreterCustomizationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
