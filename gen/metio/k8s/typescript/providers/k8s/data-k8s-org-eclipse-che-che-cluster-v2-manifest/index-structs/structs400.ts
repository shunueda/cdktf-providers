import * as cdktf from 'cdktf';
import { DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorization,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationToTerraform,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationToHclTerraform,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationOutputReference,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponents,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsToTerraform,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsToHclTerraform,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsOutputReference,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistry,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryToTerraform,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryToHclTerraform,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryOutputReference,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironments,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsToTerraform,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsToHclTerraform,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsOutputReference,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServices,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesToTerraform,
dataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesToHclTerraform,
DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesOutputReference } from './structs0'
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#key DataK8SOrgEclipseCheCheClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#name DataK8SOrgEclipseCheCheClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#optional DataK8SOrgEclipseCheCheClusterV2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#api_version DataK8SOrgEclipseCheCheClusterV2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#field_path DataK8SOrgEclipseCheCheClusterV2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#container_name DataK8SOrgEclipseCheCheClusterV2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#divisor DataK8SOrgEclipseCheCheClusterV2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#resource DataK8SOrgEclipseCheCheClusterV2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#key DataK8SOrgEclipseCheCheClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#name DataK8SOrgEclipseCheCheClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#optional DataK8SOrgEclipseCheCheClusterV2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#config_map_key_ref DataK8SOrgEclipseCheCheClusterV2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#field_ref DataK8SOrgEclipseCheCheClusterV2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#resource_field_ref DataK8SOrgEclipseCheCheClusterV2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#secret_key_ref DataK8SOrgEclipseCheCheClusterV2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromSecretKeyRef) {
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
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#name DataK8SOrgEclipseCheCheClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#value DataK8SOrgEclipseCheCheClusterV2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#value_from DataK8SOrgEclipseCheCheClusterV2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv | cdktf.IResolvable): any {
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
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvValueFrom) {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvOutputReference {
    return new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits {
  /**
  * CPU, in cores. (500m = .5 cores) If the value is not specified, then the default value is set depending on the component. If value is '0', then no value is set for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#cpu DataK8SOrgEclipseCheCheClusterV2Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory, in bytes. (500Gi = 500GiB = 500 * 1024 * 1024 * 1024) If the value is not specified, then the default value is set depending on the component. If value is '0', then no value is set for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#memory DataK8SOrgEclipseCheCheClusterV2Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest {
  /**
  * CPU, in cores. (500m = .5 cores) If the value is not specified, then the default value is set depending on the component. If value is '0', then no value is set for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#cpu DataK8SOrgEclipseCheCheClusterV2Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory, in bytes. (500Gi = 500GiB = 500 * 1024 * 1024 * 1024) If the value is not specified, then the default value is set depending on the component. If value is '0', then no value is set for the component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#memory DataK8SOrgEclipseCheCheClusterV2Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources {
  /**
  * Describes the maximum amount of compute resources allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#limits DataK8SOrgEclipseCheCheClusterV2Manifest#limits}
  */
  readonly limits?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits;
  /**
  * Describes the minimum amount of compute resources required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#request DataK8SOrgEclipseCheCheClusterV2Manifest#request}
  */
  readonly request?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsToTerraform(struct!.limits),
    request: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestToTerraform(struct!.request),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits",
    },
    request: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._request.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._request.internalValue = value.request;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers {
  /**
  * List of environment variables to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#env DataK8SOrgEclipseCheCheClusterV2Manifest#env}
  */
  readonly env?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv[] | cdktf.IResolvable;
  /**
  * Container image. Omit it or leave it empty to use the default container image provided by the Operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#image DataK8SOrgEclipseCheCheClusterV2Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. Default value is 'Always' for 'nightly', 'next' or 'latest' images, and 'IfNotPresent' in other cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#image_pull_policy DataK8SOrgEclipseCheCheClusterV2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#name DataK8SOrgEclipseCheCheClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * Compute resources required by this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#resources DataK8SOrgEclipseCheCheClusterV2Manifest#resources}
  */
  readonly resources?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvToTerraform, false)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
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
    resources: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._name = value.name;
      this._resources.internalValue = value.resources;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersOutputReference {
    return new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext {
  /**
  * A special supplemental group that applies to all containers in a pod. The default value is '1724'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#fs_group DataK8SOrgEclipseCheCheClusterV2Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * The UID to run the entrypoint of the container process. The default value is '1724'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#run_as_user DataK8SOrgEclipseCheCheClusterV2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._runAsUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._runAsUser = value.runAsUser;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#effect DataK8SOrgEclipseCheCheClusterV2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#key DataK8SOrgEclipseCheCheClusterV2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#operator DataK8SOrgEclipseCheCheClusterV2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#toleration_seconds DataK8SOrgEclipseCheCheClusterV2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#value DataK8SOrgEclipseCheCheClusterV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations | cdktf.IResolvable): any {
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


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations | cdktf.IResolvable): any {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsOutputReference {
    return new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment {
  /**
  * List of containers belonging to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#containers DataK8SOrgEclipseCheCheClusterV2Manifest#containers}
  */
  readonly containers?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers[] | cdktf.IResolvable;
  /**
  * The node selector limits the nodes that can run the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#node_selector DataK8SOrgEclipseCheCheClusterV2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Security options the pod should run with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#security_context DataK8SOrgEclipseCheCheClusterV2Manifest#security_context}
  */
  readonly securityContext?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext;
  /**
  * The pod tolerations of the component pod limit where the pod can run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#tolerations DataK8SOrgEclipseCheCheClusterV2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations[] | cdktf.IResolvable;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersToTerraform, false)(struct!.containers),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    security_context: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    security_context: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers.internalValue = undefined;
      this._nodeSelector = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers.internalValue = value.containers;
      this._nodeSelector = value.nodeSelector;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
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

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy {
  /**
  * The glog log level for the kube-rbac-proxy container within the gateway pod. Larger values represent a higher verbosity. The default value is '0'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#log_level DataK8SOrgEclipseCheCheClusterV2Manifest#log_level}
  */
  readonly logLevel?: number;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_level: cdktf.numberToTerraform(struct!.logLevel),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_level: {
      value: cdktf.numberToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
    }
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy {
  /**
  * Expire timeframe for cookie. If set to 0, cookie becomes a session-cookie which will expire when the browser is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#cookie_expire_seconds DataK8SOrgEclipseCheCheClusterV2Manifest#cookie_expire_seconds}
  */
  readonly cookieExpireSeconds?: number;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expire_seconds: cdktf.numberToTerraform(struct!.cookieExpireSeconds),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expire_seconds: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpireSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpireSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpireSeconds = this._cookieExpireSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieExpireSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieExpireSeconds = value.cookieExpireSeconds;
    }
  }

  // cookie_expire_seconds - computed: false, optional: true, required: false
  private _cookieExpireSeconds?: number; 
  public get cookieExpireSeconds() {
    return this.getNumberAttribute('cookie_expire_seconds');
  }
  public set cookieExpireSeconds(value: number) {
    this._cookieExpireSeconds = value;
  }
  public resetCookieExpireSeconds() {
    this._cookieExpireSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpireSecondsInput() {
    return this._cookieExpireSeconds;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik {
  /**
  * The log level for the Traefik container within the gateway pod: 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', or 'PANIC'. The default value is 'INFO'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#log_level DataK8SOrgEclipseCheCheClusterV2Manifest#log_level}
  */
  readonly logLevel?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
    }
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
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway {
  /**
  * Gateway configuration labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#config_labels DataK8SOrgEclipseCheCheClusterV2Manifest#config_labels}
  */
  readonly configLabels?: { [key: string]: string };
  /**
  * Deployment override options. Since gateway deployment consists of several containers, they must be distinguished in the configuration by their names: - 'gateway' - 'configbump' - 'oauth-proxy' - 'kube-rbac-proxy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#deployment DataK8SOrgEclipseCheCheClusterV2Manifest#deployment}
  */
  readonly deployment?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment;
  /**
  * Configuration for kube-rbac-proxy within the Che gateway pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#kube_rbac_proxy DataK8SOrgEclipseCheCheClusterV2Manifest#kube_rbac_proxy}
  */
  readonly kubeRbacProxy?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy;
  /**
  * Configuration for oauth-proxy within the Che gateway pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_proxy DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_proxy}
  */
  readonly oAuthProxy?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy;
  /**
  * Configuration for Traefik within the Che gateway pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#traefik DataK8SOrgEclipseCheCheClusterV2Manifest#traefik}
  */
  readonly traefik?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configLabels),
    deployment: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentToTerraform(struct!.deployment),
    kube_rbac_proxy: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyToTerraform(struct!.kubeRbacProxy),
    o_auth_proxy: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyToTerraform(struct!.oAuthProxy),
    traefik: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikToTerraform(struct!.traefik),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deployment: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment",
    },
    kube_rbac_proxy: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyToHclTerraform(struct!.kubeRbacProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy",
    },
    o_auth_proxy: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyToHclTerraform(struct!.oAuthProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy",
    },
    traefik: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikToHclTerraform(struct!.traefik),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.configLabels = this._configLabels;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._kubeRbacProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeRbacProxy = this._kubeRbacProxy?.internalValue;
    }
    if (this._oAuthProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthProxy = this._oAuthProxy?.internalValue;
    }
    if (this._traefik?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.traefik = this._traefik?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configLabels = undefined;
      this._deployment.internalValue = undefined;
      this._kubeRbacProxy.internalValue = undefined;
      this._oAuthProxy.internalValue = undefined;
      this._traefik.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configLabels = value.configLabels;
      this._deployment.internalValue = value.deployment;
      this._kubeRbacProxy.internalValue = value.kubeRbacProxy;
      this._oAuthProxy.internalValue = value.oAuthProxy;
      this._traefik.internalValue = value.traefik;
    }
  }

  // config_labels - computed: false, optional: true, required: false
  private _configLabels?: { [key: string]: string }; 
  public get configLabels() {
    return this.getStringMapAttribute('config_labels');
  }
  public set configLabels(value: { [key: string]: string }) {
    this._configLabels = value;
  }
  public resetConfigLabels() {
    this._configLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configLabelsInput() {
    return this._configLabels;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // kube_rbac_proxy - computed: false, optional: true, required: false
  private _kubeRbacProxy = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxyOutputReference(this, "kube_rbac_proxy");
  public get kubeRbacProxy() {
    return this._kubeRbacProxy;
  }
  public putKubeRbacProxy(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayKubeRbacProxy) {
    this._kubeRbacProxy.internalValue = value;
  }
  public resetKubeRbacProxy() {
    this._kubeRbacProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeRbacProxyInput() {
    return this._kubeRbacProxy.internalValue;
  }

  // o_auth_proxy - computed: false, optional: true, required: false
  private _oAuthProxy = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxyOutputReference(this, "o_auth_proxy");
  public get oAuthProxy() {
    return this._oAuthProxy;
  }
  public putOAuthProxy(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOAuthProxy) {
    this._oAuthProxy.internalValue = value;
  }
  public resetOAuthProxy() {
    this._oAuthProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthProxyInput() {
    return this._oAuthProxy.internalValue;
  }

  // traefik - computed: false, optional: true, required: false
  private _traefik = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefikOutputReference(this, "traefik");
  public get traefik() {
    return this._traefik;
  }
  public putTraefik(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayTraefik) {
    this._traefik.internalValue = value;
  }
  public resetTraefik() {
    this._traefik.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traefikInput() {
    return this._traefik.internalValue;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth {
  /**
  * Advance authorization settings. Determines which users and groups are allowed to access Che. User is allowed to access Che if he/she is either in the 'allowUsers' list or is member of group from 'allowGroups' list and not in neither the 'denyUsers' list nor is member of group from 'denyGroups' list. If 'allowUsers' and 'allowGroups' are empty, then all users are allowed to access Che. if 'denyUsers' and 'denyGroups' are empty, then no users are denied to access Che.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#advanced_authorization DataK8SOrgEclipseCheCheClusterV2Manifest#advanced_authorization}
  */
  readonly advancedAuthorization?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorization;
  /**
  * Gateway settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#gateway DataK8SOrgEclipseCheCheClusterV2Manifest#gateway}
  */
  readonly gateway?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway;
  /**
  * Public URL of the Identity Provider server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#identity_provider_url DataK8SOrgEclipseCheCheClusterV2Manifest#identity_provider_url}
  */
  readonly identityProviderUrl?: string;
  /**
  * Identity token to be passed to upstream. There are two types of tokens supported: 'id_token' and 'access_token'. Default value is 'id_token'. This field is specific to Che installations made for Kubernetes only and ignored for OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#identity_token DataK8SOrgEclipseCheCheClusterV2Manifest#identity_token}
  */
  readonly identityToken?: string;
  /**
  * Inactivity timeout for tokens to set in the OpenShift 'OAuthClient' resource used to set up identity federation on the OpenShift side. 0 means tokens for this client never time out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_access_token_inactivity_timeout_seconds DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_access_token_inactivity_timeout_seconds}
  */
  readonly oAuthAccessTokenInactivityTimeoutSeconds?: number;
  /**
  * Access token max age for tokens to set in the OpenShift 'OAuthClient' resource used to set up identity federation on the OpenShift side. 0 means no expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_access_token_max_age_seconds DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_access_token_max_age_seconds}
  */
  readonly oAuthAccessTokenMaxAgeSeconds?: number;
  /**
  * Name of the OpenShift 'OAuthClient' resource used to set up identity federation on the OpenShift side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_client_name DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_client_name}
  */
  readonly oAuthClientName?: string;
  /**
  * Access Token Scope. This field is specific to Che installations made for Kubernetes only and ignored for OpenShift.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_scope DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_scope}
  */
  readonly oAuthScope?: string;
  /**
  * Name of the secret set in the OpenShift 'OAuthClient' resource used to set up identity federation on the OpenShift side. For Kubernetes, this can either be the plain text oAuthSecret value, or the name of a kubernetes secret which contains a key 'oAuthSecret' and the value is the secret. NOTE: this secret must exist in the same namespace as the 'CheCluster' resource and contain the label 'app.kubernetes.io/part-of=che.eclipse.org'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#o_auth_secret DataK8SOrgEclipseCheCheClusterV2Manifest#o_auth_secret}
  */
  readonly oAuthSecret?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_authorization: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationToTerraform(struct!.advancedAuthorization),
    gateway: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayToTerraform(struct!.gateway),
    identity_provider_url: cdktf.stringToTerraform(struct!.identityProviderUrl),
    identity_token: cdktf.stringToTerraform(struct!.identityToken),
    o_auth_access_token_inactivity_timeout_seconds: cdktf.numberToTerraform(struct!.oAuthAccessTokenInactivityTimeoutSeconds),
    o_auth_access_token_max_age_seconds: cdktf.numberToTerraform(struct!.oAuthAccessTokenMaxAgeSeconds),
    o_auth_client_name: cdktf.stringToTerraform(struct!.oAuthClientName),
    o_auth_scope: cdktf.stringToTerraform(struct!.oAuthScope),
    o_auth_secret: cdktf.stringToTerraform(struct!.oAuthSecret),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_authorization: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationToHclTerraform(struct!.advancedAuthorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorization",
    },
    gateway: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway",
    },
    identity_provider_url: {
      value: cdktf.stringToHclTerraform(struct!.identityProviderUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_token: {
      value: cdktf.stringToHclTerraform(struct!.identityToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_access_token_inactivity_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.oAuthAccessTokenInactivityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    o_auth_access_token_max_age_seconds: {
      value: cdktf.numberToHclTerraform(struct!.oAuthAccessTokenMaxAgeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    o_auth_client_name: {
      value: cdktf.stringToHclTerraform(struct!.oAuthClientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_scope: {
      value: cdktf.stringToHclTerraform(struct!.oAuthScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_auth_secret: {
      value: cdktf.stringToHclTerraform(struct!.oAuthSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedAuthorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAuthorization = this._advancedAuthorization?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._identityProviderUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviderUrl = this._identityProviderUrl;
    }
    if (this._identityToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityToken = this._identityToken;
    }
    if (this._oAuthAccessTokenInactivityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthAccessTokenInactivityTimeoutSeconds = this._oAuthAccessTokenInactivityTimeoutSeconds;
    }
    if (this._oAuthAccessTokenMaxAgeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthAccessTokenMaxAgeSeconds = this._oAuthAccessTokenMaxAgeSeconds;
    }
    if (this._oAuthClientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthClientName = this._oAuthClientName;
    }
    if (this._oAuthScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthScope = this._oAuthScope;
    }
    if (this._oAuthSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.oAuthSecret = this._oAuthSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advancedAuthorization.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._identityProviderUrl = undefined;
      this._identityToken = undefined;
      this._oAuthAccessTokenInactivityTimeoutSeconds = undefined;
      this._oAuthAccessTokenMaxAgeSeconds = undefined;
      this._oAuthClientName = undefined;
      this._oAuthScope = undefined;
      this._oAuthSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advancedAuthorization.internalValue = value.advancedAuthorization;
      this._gateway.internalValue = value.gateway;
      this._identityProviderUrl = value.identityProviderUrl;
      this._identityToken = value.identityToken;
      this._oAuthAccessTokenInactivityTimeoutSeconds = value.oAuthAccessTokenInactivityTimeoutSeconds;
      this._oAuthAccessTokenMaxAgeSeconds = value.oAuthAccessTokenMaxAgeSeconds;
      this._oAuthClientName = value.oAuthClientName;
      this._oAuthScope = value.oAuthScope;
      this._oAuthSecret = value.oAuthSecret;
    }
  }

  // advanced_authorization - computed: false, optional: true, required: false
  private _advancedAuthorization = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorizationOutputReference(this, "advanced_authorization");
  public get advancedAuthorization() {
    return this._advancedAuthorization;
  }
  public putAdvancedAuthorization(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthAdvancedAuthorization) {
    this._advancedAuthorization.internalValue = value;
  }
  public resetAdvancedAuthorization() {
    this._advancedAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedAuthorizationInput() {
    return this._advancedAuthorization.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // identity_provider_url - computed: false, optional: true, required: false
  private _identityProviderUrl?: string; 
  public get identityProviderUrl() {
    return this.getStringAttribute('identity_provider_url');
  }
  public set identityProviderUrl(value: string) {
    this._identityProviderUrl = value;
  }
  public resetIdentityProviderUrl() {
    this._identityProviderUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderUrlInput() {
    return this._identityProviderUrl;
  }

  // identity_token - computed: false, optional: true, required: false
  private _identityToken?: string; 
  public get identityToken() {
    return this.getStringAttribute('identity_token');
  }
  public set identityToken(value: string) {
    this._identityToken = value;
  }
  public resetIdentityToken() {
    this._identityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTokenInput() {
    return this._identityToken;
  }

  // o_auth_access_token_inactivity_timeout_seconds - computed: false, optional: true, required: false
  private _oAuthAccessTokenInactivityTimeoutSeconds?: number; 
  public get oAuthAccessTokenInactivityTimeoutSeconds() {
    return this.getNumberAttribute('o_auth_access_token_inactivity_timeout_seconds');
  }
  public set oAuthAccessTokenInactivityTimeoutSeconds(value: number) {
    this._oAuthAccessTokenInactivityTimeoutSeconds = value;
  }
  public resetOAuthAccessTokenInactivityTimeoutSeconds() {
    this._oAuthAccessTokenInactivityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthAccessTokenInactivityTimeoutSecondsInput() {
    return this._oAuthAccessTokenInactivityTimeoutSeconds;
  }

  // o_auth_access_token_max_age_seconds - computed: false, optional: true, required: false
  private _oAuthAccessTokenMaxAgeSeconds?: number; 
  public get oAuthAccessTokenMaxAgeSeconds() {
    return this.getNumberAttribute('o_auth_access_token_max_age_seconds');
  }
  public set oAuthAccessTokenMaxAgeSeconds(value: number) {
    this._oAuthAccessTokenMaxAgeSeconds = value;
  }
  public resetOAuthAccessTokenMaxAgeSeconds() {
    this._oAuthAccessTokenMaxAgeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthAccessTokenMaxAgeSecondsInput() {
    return this._oAuthAccessTokenMaxAgeSeconds;
  }

  // o_auth_client_name - computed: false, optional: true, required: false
  private _oAuthClientName?: string; 
  public get oAuthClientName() {
    return this.getStringAttribute('o_auth_client_name');
  }
  public set oAuthClientName(value: string) {
    this._oAuthClientName = value;
  }
  public resetOAuthClientName() {
    this._oAuthClientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthClientNameInput() {
    return this._oAuthClientName;
  }

  // o_auth_scope - computed: false, optional: true, required: false
  private _oAuthScope?: string; 
  public get oAuthScope() {
    return this.getStringAttribute('o_auth_scope');
  }
  public set oAuthScope(value: string) {
    this._oAuthScope = value;
  }
  public resetOAuthScope() {
    this._oAuthScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthScopeInput() {
    return this._oAuthScope;
  }

  // o_auth_secret - computed: false, optional: true, required: false
  private _oAuthSecret?: string; 
  public get oAuthSecret() {
    return this.getStringAttribute('o_auth_secret');
  }
  public set oAuthSecret(value: string) {
    this._oAuthSecret = value;
  }
  public resetOAuthSecret() {
    this._oAuthSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oAuthSecretInput() {
    return this._oAuthSecret;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking {
  /**
  * Defines annotations which will be set for an Ingress (a route for OpenShift platform). The defaults for kubernetes platforms are: kubernetes.io/ingress.class: 'nginx' nginx.ingress.kubernetes.io/proxy-read-timeout: '3600', nginx.ingress.kubernetes.io/proxy-connect-timeout: '3600', nginx.ingress.kubernetes.io/ssl-redirect: 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#annotations DataK8SOrgEclipseCheCheClusterV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Authentication settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#auth DataK8SOrgEclipseCheCheClusterV2Manifest#auth}
  */
  readonly auth?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth;
  /**
  * For an OpenShift cluster, the Operator uses the domain to generate a hostname for the route. The generated hostname follows this pattern: che-<che-namespace>.<domain>. The <che-namespace> is the namespace where the CheCluster CRD is created. In conjunction with labels, it creates a route served by a non-default Ingress controller. For a Kubernetes cluster, it contains a global ingress domain. There are no default values: you must specify them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#domain DataK8SOrgEclipseCheCheClusterV2Manifest#domain}
  */
  readonly domain?: string;
  /**
  * The public hostname of the installed Che server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#hostname DataK8SOrgEclipseCheCheClusterV2Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * IngressClassName is the name of an IngressClass cluster resource. If a class name is defined in both the 'IngressClassName' field and the 'kubernetes.io/ingress.class' annotation, 'IngressClassName' field takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#ingress_class_name DataK8SOrgEclipseCheCheClusterV2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Defines labels which will be set for an Ingress (a route for OpenShift platform).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#labels DataK8SOrgEclipseCheCheClusterV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the secret used to set up Ingress TLS termination. If the field is an empty string, the default cluster certificate is used. The secret must have a 'app.kubernetes.io/part-of=che.eclipse.org' label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#tls_secret_name DataK8SOrgEclipseCheCheClusterV2Manifest#tls_secret_name}
  */
  readonly tlsSecretName?: string;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    auth: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthToTerraform(struct!.auth),
    domain: cdktf.stringToTerraform(struct!.domain),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    tls_secret_name: cdktf.stringToTerraform(struct!.tlsSecretName),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking | cdktf.IResolvable): any {
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
    auth: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tls_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._tlsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretName = this._tlsSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._auth.internalValue = undefined;
      this._domain = undefined;
      this._hostname = undefined;
      this._ingressClassName = undefined;
      this._labels = undefined;
      this._tlsSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._auth.internalValue = value.auth;
      this._domain = value.domain;
      this._hostname = value.hostname;
      this._ingressClassName = value.ingressClassName;
      this._labels = value.labels;
      this._tlsSecretName = value.tlsSecretName;
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

  // auth - computed: false, optional: true, required: false
  private _auth = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // tls_secret_name - computed: false, optional: true, required: false
  private _tlsSecretName?: string; 
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
  public set tlsSecretName(value: string) {
    this._tlsSecretName = value;
  }
  public resetTlsSecretName() {
    this._tlsSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretNameInput() {
    return this._tlsSecretName;
  }
}
export interface DataK8SOrgEclipseCheCheClusterV2ManifestSpec {
  /**
  * Che components configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#components DataK8SOrgEclipseCheCheClusterV2Manifest#components}
  */
  readonly components?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponents;
  /**
  * Configuration of an alternative registry that stores Che images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#container_registry DataK8SOrgEclipseCheCheClusterV2Manifest#container_registry}
  */
  readonly containerRegistry?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistry;
  /**
  * Development environment default configuration options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#dev_environments DataK8SOrgEclipseCheCheClusterV2Manifest#dev_environments}
  */
  readonly devEnvironments?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironments;
  /**
  * A configuration that allows users to work with remote Git repositories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#git_services DataK8SOrgEclipseCheCheClusterV2Manifest#git_services}
  */
  readonly gitServices?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServices;
  /**
  * Networking, Che authentication, and TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/org_eclipse_che_che_cluster_v2_manifest#networking DataK8SOrgEclipseCheCheClusterV2Manifest#networking}
  */
  readonly networking?: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking;
}

export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecToTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: dataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsToTerraform(struct!.components),
    container_registry: dataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryToTerraform(struct!.containerRegistry),
    dev_environments: dataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsToTerraform(struct!.devEnvironments),
    git_services: dataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesToTerraform(struct!.gitServices),
    networking: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingToTerraform(struct!.networking),
  }
}


export function dataK8SOrgEclipseCheCheClusterV2ManifestSpecToHclTerraform(struct?: DataK8SOrgEclipseCheCheClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsToHclTerraform(struct!.components),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponents",
    },
    container_registry: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryToHclTerraform(struct!.containerRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistry",
    },
    dev_environments: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsToHclTerraform(struct!.devEnvironments),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironments",
    },
    git_services: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesToHclTerraform(struct!.gitServices),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServices",
    },
    networking: {
      value: dataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingToHclTerraform(struct!.networking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOrgEclipseCheCheClusterV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOrgEclipseCheCheClusterV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._containerRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRegistry = this._containerRegistry?.internalValue;
    }
    if (this._devEnvironments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devEnvironments = this._devEnvironments?.internalValue;
    }
    if (this._gitServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitServices = this._gitServices?.internalValue;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._containerRegistry.internalValue = undefined;
      this._devEnvironments.internalValue = undefined;
      this._gitServices.internalValue = undefined;
      this._networking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._containerRegistry.internalValue = value.containerRegistry;
      this._devEnvironments.internalValue = value.devEnvironments;
      this._gitServices.internalValue = value.gitServices;
      this._networking.internalValue = value.networking;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecComponents) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // container_registry - computed: false, optional: true, required: false
  private _containerRegistry = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistryOutputReference(this, "container_registry");
  public get containerRegistry() {
    return this._containerRegistry;
  }
  public putContainerRegistry(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecContainerRegistry) {
    this._containerRegistry.internalValue = value;
  }
  public resetContainerRegistry() {
    this._containerRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryInput() {
    return this._containerRegistry.internalValue;
  }

  // dev_environments - computed: false, optional: true, required: false
  private _devEnvironments = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironmentsOutputReference(this, "dev_environments");
  public get devEnvironments() {
    return this._devEnvironments;
  }
  public putDevEnvironments(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecDevEnvironments) {
    this._devEnvironments.internalValue = value;
  }
  public resetDevEnvironments() {
    this._devEnvironments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devEnvironmentsInput() {
    return this._devEnvironments.internalValue;
  }

  // git_services - computed: false, optional: true, required: false
  private _gitServices = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServicesOutputReference(this, "git_services");
  public get gitServices() {
    return this._gitServices;
  }
  public putGitServices(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecGitServices) {
    this._gitServices.internalValue = value;
  }
  public resetGitServices() {
    this._gitServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitServicesInput() {
    return this._gitServices.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: DataK8SOrgEclipseCheCheClusterV2ManifestSpecNetworking) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }
}
