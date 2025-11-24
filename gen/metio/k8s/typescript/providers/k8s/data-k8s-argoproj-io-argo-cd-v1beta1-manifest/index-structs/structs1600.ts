import * as cdktf from 'cdktf';
import { DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFrom,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServer,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerOutputReference } from './structs1200'
import { DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSet,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBanner,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerOutputReference } from './structs0'
import { DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecController,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafana,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHa,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImport,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHosts,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersions,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsList,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoring,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacement,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotifications,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheus,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbac,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedis,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisOutputReference } from './structs400'
import { DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepo,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoOutputReference,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActions,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsList,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecks,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksList,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferences,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesToTerraform,
dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesToHclTerraform,
DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesOutputReference } from './structs800'
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#name DataK8SArgoprojIoArgoCdV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#value DataK8SArgoprojIoArgoCdV1Beta1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#value_from DataK8SArgoprojIoArgoCdV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFrom;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv | cdktf.IResolvable): any {
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
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvValueFrom) {
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvOutputReference {
    return new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#name DataK8SArgoprojIoArgoCdV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsOutputReference {
    return new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#claims DataK8SArgoprojIoArgoCdV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#limits DataK8SArgoprojIoArgoCdV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#requests DataK8SArgoprojIoArgoCdV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsList",
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex {
  /**
  * Config is the dex connector configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#config DataK8SArgoprojIoArgoCdV1Beta1Manifest#config}
  */
  readonly config?: string;
  /**
  * Env lets you specify environment variables for Dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#env DataK8SArgoprojIoArgoCdV1Beta1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv[] | cdktf.IResolvable;
  /**
  * Optional list of required groups a user must be a member of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#groups DataK8SArgoprojIoArgoCdV1Beta1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * Image is the Dex container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#image DataK8SArgoprojIoArgoCdV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * OpenShiftOAuth enables OpenShift OAuth authentication for the Dex server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#open_shift_o_auth DataK8SArgoprojIoArgoCdV1Beta1Manifest#open_shift_o_auth}
  */
  readonly openShiftOAuth?: boolean | cdktf.IResolvable;
  /**
  * Resources defines the Compute Resources required by the container for Dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resources DataK8SArgoprojIoArgoCdV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources;
  /**
  * Version is the Dex container image tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#version DataK8SArgoprojIoArgoCdV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    env: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvToTerraform, false)(struct!.env),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    image: cdktf.stringToTerraform(struct!.image),
    open_shift_o_auth: cdktf.booleanToTerraform(struct!.openShiftOAuth),
    resources: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesToTerraform(struct!.resources),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvList",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_shift_o_auth: {
      value: cdktf.booleanToHclTerraform(struct!.openShiftOAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._openShiftOAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.openShiftOAuth = this._openShiftOAuth;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._env.internalValue = undefined;
      this._groups = undefined;
      this._image = undefined;
      this._openShiftOAuth = undefined;
      this._resources.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._env.internalValue = value.env;
      this._groups = value.groups;
      this._image = value.image;
      this._openShiftOAuth = value.openShiftOAuth;
      this._resources.internalValue = value.resources;
      this._version = value.version;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // open_shift_o_auth - computed: false, optional: true, required: false
  private _openShiftOAuth?: boolean | cdktf.IResolvable; 
  public get openShiftOAuth() {
    return this.getBooleanAttribute('open_shift_o_auth');
  }
  public set openShiftOAuth(value: boolean | cdktf.IResolvable) {
    this._openShiftOAuth = value;
  }
  public resetOpenShiftOAuth() {
    this._openShiftOAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openShiftOAuthInput() {
    return this._openShiftOAuth;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#name DataK8SArgoprojIoArgoCdV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsOutputReference {
    return new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#claims DataK8SArgoprojIoArgoCdV1Beta1Manifest#claims}
  */
  readonly claims?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#limits DataK8SArgoprojIoArgoCdV1Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#requests DataK8SArgoprojIoArgoCdV1Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsList",
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

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak {
  /**
  * Host is the hostname to use for Ingress/Route resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#host DataK8SArgoprojIoArgoCdV1Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Image is the Keycloak container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#image DataK8SArgoprojIoArgoCdV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Resources defines the Compute Resources required by the container for Keycloak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resources DataK8SArgoprojIoArgoCdV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources;
  /**
  * Custom root CA certificate for communicating with the Keycloak OIDC provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#root_ca DataK8SArgoprojIoArgoCdV1Beta1Manifest#root_ca}
  */
  readonly rootCa?: string;
  /**
  * VerifyTLS set to false disables strict TLS validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#verify_tls DataK8SArgoprojIoArgoCdV1Beta1Manifest#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
  /**
  * Version is the Keycloak container image tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#version DataK8SArgoprojIoArgoCdV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    image: cdktf.stringToTerraform(struct!.image),
    resources: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesToTerraform(struct!.resources),
    root_ca: cdktf.stringToTerraform(struct!.rootCa),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak | cdktf.IResolvable): any {
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
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources",
    },
    root_ca: {
      value: cdktf.stringToHclTerraform(struct!.rootCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._rootCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCa = this._rootCa;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._image = undefined;
      this._resources.internalValue = undefined;
      this._rootCa = undefined;
      this._verifyTls = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._image = value.image;
      this._resources.internalValue = value.resources;
      this._rootCa = value.rootCa;
      this._verifyTls = value.verifyTls;
      this._version = value.version;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // root_ca - computed: false, optional: true, required: false
  private _rootCa?: string; 
  public get rootCa() {
    return this.getStringAttribute('root_ca');
  }
  public set rootCa(value: string) {
    this._rootCa = value;
  }
  public resetRootCa() {
    this._rootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaInput() {
    return this._rootCa;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso {
  /**
  * Dex contains the configuration for Argo CD dex authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#dex DataK8SArgoprojIoArgoCdV1Beta1Manifest#dex}
  */
  readonly dex?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex;
  /**
  * Keycloak contains the configuration for Argo CD keycloak authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#keycloak DataK8SArgoprojIoArgoCdV1Beta1Manifest#keycloak}
  */
  readonly keycloak?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak;
  /**
  * Provider installs and configures the given SSO Provider with Argo CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#provider DataK8SArgoprojIoArgoCdV1Beta1Manifest#provider}
  */
  readonly provider?: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dex: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexToTerraform(struct!.dex),
    keycloak: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakToTerraform(struct!.keycloak),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dex: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexToHclTerraform(struct!.dex),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex",
    },
    keycloak: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakToHclTerraform(struct!.keycloak),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dex = this._dex?.internalValue;
    }
    if (this._keycloak?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keycloak = this._keycloak?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dex.internalValue = undefined;
      this._keycloak.internalValue = undefined;
      this._provider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dex.internalValue = value.dex;
      this._keycloak.internalValue = value.keycloak;
      this._provider = value.provider;
    }
  }

  // dex - computed: false, optional: true, required: false
  private _dex = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDexOutputReference(this, "dex");
  public get dex() {
    return this._dex;
  }
  public putDex(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoDex) {
    this._dex.internalValue = value;
  }
  public resetDex() {
    this._dex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dexInput() {
    return this._dex.internalValue;
  }

  // keycloak - computed: false, optional: true, required: false
  private _keycloak = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloakOutputReference(this, "keycloak");
  public get keycloak() {
    return this._keycloak;
  }
  public putKeycloak(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoKeycloak) {
    this._keycloak.internalValue = value;
  }
  public resetKeycloak() {
    this._keycloak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keycloakInput() {
    return this._keycloak.internalValue;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa {
  /**
  * ConfigMapName is the name of the ConfigMap containing the CA Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#config_map_name DataK8SArgoprojIoArgoCdV1Beta1Manifest#config_map_name}
  */
  readonly configMapName?: string;
  /**
  * SecretName is the name of the Secret containing the CA Certificate and Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#secret_name DataK8SArgoprojIoArgoCdV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_name: cdktf.stringToTerraform(struct!.configMapName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_name: {
      value: cdktf.stringToHclTerraform(struct!.configMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapName = this._configMapName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapName = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapName = value.configMapName;
      this._secretName = value.secretName;
    }
  }

  // config_map_name - computed: false, optional: true, required: false
  private _configMapName?: string; 
  public get configMapName() {
    return this.getStringAttribute('config_map_name');
  }
  public set configMapName(value: string) {
    this._configMapName = value;
  }
  public resetConfigMapName() {
    this._configMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapNameInput() {
    return this._configMapName;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls {
  /**
  * CA defines the CA options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#ca DataK8SArgoprojIoArgoCdV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa;
  /**
  * InitialCerts defines custom TLS certificates upon creation of the cluster for connecting Git repositories via HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#initial_certs DataK8SArgoprojIoArgoCdV1Beta1Manifest#initial_certs}
  */
  readonly initialCerts?: { [key: string]: string };
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaToTerraform(struct!.ca),
    initial_certs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.initialCerts),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa",
    },
    initial_certs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.initialCerts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._initialCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCerts = this._initialCerts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._initialCerts = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._initialCerts = value.initialCerts;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // initial_certs - computed: false, optional: true, required: false
  private _initialCerts?: { [key: string]: string }; 
  public get initialCerts() {
    return this.getStringMapAttribute('initial_certs');
  }
  public set initialCerts(value: { [key: string]: string }) {
    this._initialCerts = value;
  }
  public resetInitialCerts() {
    this._initialCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCertsInput() {
    return this._initialCerts;
  }
}
export interface DataK8SArgoprojIoArgoCdV1Beta1ManifestSpec {
  /**
  * AggregatedClusterRoles will allow users to have aggregated ClusterRoles for a cluster scoped instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#aggregated_cluster_roles DataK8SArgoprojIoArgoCdV1Beta1Manifest#aggregated_cluster_roles}
  */
  readonly aggregatedClusterRoles?: boolean | cdktf.IResolvable;
  /**
  * ApplicationInstanceLabelKey is the key name where Argo CD injects the app name as a tracking label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#application_instance_label_key DataK8SArgoprojIoArgoCdV1Beta1Manifest#application_instance_label_key}
  */
  readonly applicationInstanceLabelKey?: string;
  /**
  * ArgoCDApplicationSet defines whether the Argo CD ApplicationSet controller should be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#application_set DataK8SArgoprojIoArgoCdV1Beta1Manifest#application_set}
  */
  readonly applicationSet?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSet;
  /**
  * Banner defines an additional banner to be displayed in Argo CD UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#banner DataK8SArgoprojIoArgoCdV1Beta1Manifest#banner}
  */
  readonly banner?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBanner;
  /**
  * ConfigManagementPlugins is used to specify additional config management plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#config_management_plugins DataK8SArgoprojIoArgoCdV1Beta1Manifest#config_management_plugins}
  */
  readonly configManagementPlugins?: string;
  /**
  * Controller defines the Application Controller options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#controller DataK8SArgoprojIoArgoCdV1Beta1Manifest#controller}
  */
  readonly controller?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecController;
  /**
  * DefaultClusterScopedRoleDisabled will disable creation of default ClusterRoles for a cluster scoped instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#default_cluster_scoped_role_disabled DataK8SArgoprojIoArgoCdV1Beta1Manifest#default_cluster_scoped_role_disabled}
  */
  readonly defaultClusterScopedRoleDisabled?: boolean | cdktf.IResolvable;
  /**
  * DisableAdmin will disable the admin user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#disable_admin DataK8SArgoprojIoArgoCdV1Beta1Manifest#disable_admin}
  */
  readonly disableAdmin?: boolean | cdktf.IResolvable;
  /**
  * ExtraConfig can be used to add fields to Argo CD configmap that are not supported by Argo CD CRD. Note: ExtraConfig takes precedence over Argo CD CRD. For example, A user sets 'argocd.Spec.DisableAdmin' = true and also 'a.Spec.ExtraConfig['admin.enabled']' = true. In this case, operator updates Argo CD Configmap as follows -> argocd-cm.Data['admin.enabled'] = true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#extra_config DataK8SArgoprojIoArgoCdV1Beta1Manifest#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * GAAnonymizeUsers toggles user IDs being hashed before sending to google analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#ga_anonymize_users DataK8SArgoprojIoArgoCdV1Beta1Manifest#ga_anonymize_users}
  */
  readonly gaAnonymizeUsers?: boolean | cdktf.IResolvable;
  /**
  * GATrackingID is the google analytics tracking ID to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#ga_tracking_id DataK8SArgoprojIoArgoCdV1Beta1Manifest#ga_tracking_id}
  */
  readonly gaTrackingId?: string;
  /**
  * Deprecated: Grafana defines the Grafana server options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#grafana DataK8SArgoprojIoArgoCdV1Beta1Manifest#grafana}
  */
  readonly grafana?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafana;
  /**
  * HA options for High Availability support for the Redis component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#ha DataK8SArgoprojIoArgoCdV1Beta1Manifest#ha}
  */
  readonly ha?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHa;
  /**
  * HelpChatText is the text for getting chat help, defaults to 'Chat now!'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#help_chat_text DataK8SArgoprojIoArgoCdV1Beta1Manifest#help_chat_text}
  */
  readonly helpChatText?: string;
  /**
  * HelpChatURL is the URL for getting chat help, this will typically be your Slack channel for support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#help_chat_url DataK8SArgoprojIoArgoCdV1Beta1Manifest#help_chat_url}
  */
  readonly helpChatUrl?: string;
  /**
  * Image is the ArgoCD container image for all ArgoCD components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#image DataK8SArgoprojIoArgoCdV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Import is the import/restore options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#import DataK8SArgoprojIoArgoCdV1Beta1Manifest#import}
  */
  readonly import?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImport;
  /**
  * InitialRepositories to configure Argo CD with upon creation of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#initial_repositories DataK8SArgoprojIoArgoCdV1Beta1Manifest#initial_repositories}
  */
  readonly initialRepositories?: string;
  /**
  * InitialSSHKnownHosts defines the SSH known hosts data upon creation of the cluster for connecting Git repositories via SSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#initial_ssh_known_hosts DataK8SArgoprojIoArgoCdV1Beta1Manifest#initial_ssh_known_hosts}
  */
  readonly initialSshKnownHosts?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHosts;
  /**
  * KustomizeBuildOptions is used to specify build options/parameters to use with 'kustomize build'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#kustomize_build_options DataK8SArgoprojIoArgoCdV1Beta1Manifest#kustomize_build_options}
  */
  readonly kustomizeBuildOptions?: string;
  /**
  * KustomizeVersions is a listing of configured versions of Kustomize to be made available within ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#kustomize_versions DataK8SArgoprojIoArgoCdV1Beta1Manifest#kustomize_versions}
  */
  readonly kustomizeVersions?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersions[] | cdktf.IResolvable;
  /**
  * Monitoring defines whether workload status monitoring configuration for this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#monitoring DataK8SArgoprojIoArgoCdV1Beta1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoring;
  /**
  * NodePlacement defines NodeSelectors and Taints for Argo CD workloads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#node_placement DataK8SArgoprojIoArgoCdV1Beta1Manifest#node_placement}
  */
  readonly nodePlacement?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacement;
  /**
  * Notifications defines whether the Argo CD Notifications controller should be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#notifications DataK8SArgoprojIoArgoCdV1Beta1Manifest#notifications}
  */
  readonly notifications?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotifications;
  /**
  * OIDCConfig is the OIDC configuration as an alternative to dex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#oidc_config DataK8SArgoprojIoArgoCdV1Beta1Manifest#oidc_config}
  */
  readonly oidcConfig?: string;
  /**
  * Prometheus defines the Prometheus server options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#prometheus DataK8SArgoprojIoArgoCdV1Beta1Manifest#prometheus}
  */
  readonly prometheus?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheus;
  /**
  * RBAC defines the RBAC configuration for Argo CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#rbac DataK8SArgoprojIoArgoCdV1Beta1Manifest#rbac}
  */
  readonly rbac?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbac;
  /**
  * Redis defines the Redis server options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#redis DataK8SArgoprojIoArgoCdV1Beta1Manifest#redis}
  */
  readonly redis?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedis;
  /**
  * Repo defines the repo server options for Argo CD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#repo DataK8SArgoprojIoArgoCdV1Beta1Manifest#repo}
  */
  readonly repo?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepo;
  /**
  * RepositoryCredentials are the Git pull credentials to configure Argo CD with upon creation of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#repository_credentials DataK8SArgoprojIoArgoCdV1Beta1Manifest#repository_credentials}
  */
  readonly repositoryCredentials?: string;
  /**
  * ResourceActions customizes resource action behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_actions DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_actions}
  */
  readonly resourceActions?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActions[] | cdktf.IResolvable;
  /**
  * ResourceExclusions is used to completely ignore entire classes of resource group/kinds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_exclusions DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_exclusions}
  */
  readonly resourceExclusions?: string;
  /**
  * ResourceHealthChecks customizes resource health check behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_health_checks DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_health_checks}
  */
  readonly resourceHealthChecks?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecks[] | cdktf.IResolvable;
  /**
  * ResourceIgnoreDifferences customizes resource ignore difference behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_ignore_differences DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_ignore_differences}
  */
  readonly resourceIgnoreDifferences?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferences;
  /**
  * ResourceInclusions is used to only include specific group/kinds in the reconciliation process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_inclusions DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_inclusions}
  */
  readonly resourceInclusions?: string;
  /**
  * ResourceTrackingMethod defines how Argo CD should track resources that it manages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#resource_tracking_method DataK8SArgoprojIoArgoCdV1Beta1Manifest#resource_tracking_method}
  */
  readonly resourceTrackingMethod?: string;
  /**
  * Server defines the options for the ArgoCD Server component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#server DataK8SArgoprojIoArgoCdV1Beta1Manifest#server}
  */
  readonly server?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServer;
  /**
  * SourceNamespaces defines the namespaces application resources are allowed to be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#source_namespaces DataK8SArgoprojIoArgoCdV1Beta1Manifest#source_namespaces}
  */
  readonly sourceNamespaces?: string[];
  /**
  * SSO defines the Single Sign-on configuration for Argo CD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#sso DataK8SArgoprojIoArgoCdV1Beta1Manifest#sso}
  */
  readonly sso?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso;
  /**
  * StatusBadgeEnabled toggles application status badge feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#status_badge_enabled DataK8SArgoprojIoArgoCdV1Beta1Manifest#status_badge_enabled}
  */
  readonly statusBadgeEnabled?: boolean | cdktf.IResolvable;
  /**
  * TLS defines the TLS options for ArgoCD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#tls DataK8SArgoprojIoArgoCdV1Beta1Manifest#tls}
  */
  readonly tls?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls;
  /**
  * UsersAnonymousEnabled toggles anonymous user access. The anonymous users get default role permissions specified argocd-rbac-cm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#users_anonymous_enabled DataK8SArgoprojIoArgoCdV1Beta1Manifest#users_anonymous_enabled}
  */
  readonly usersAnonymousEnabled?: boolean | cdktf.IResolvable;
  /**
  * Version is the tag to use with the ArgoCD container image for all ArgoCD components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/argoproj_io_argo_cd_v1beta1_manifest#version DataK8SArgoprojIoArgoCdV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecToTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregated_cluster_roles: cdktf.booleanToTerraform(struct!.aggregatedClusterRoles),
    application_instance_label_key: cdktf.stringToTerraform(struct!.applicationInstanceLabelKey),
    application_set: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetToTerraform(struct!.applicationSet),
    banner: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerToTerraform(struct!.banner),
    config_management_plugins: cdktf.stringToTerraform(struct!.configManagementPlugins),
    controller: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerToTerraform(struct!.controller),
    default_cluster_scoped_role_disabled: cdktf.booleanToTerraform(struct!.defaultClusterScopedRoleDisabled),
    disable_admin: cdktf.booleanToTerraform(struct!.disableAdmin),
    extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraConfig),
    ga_anonymize_users: cdktf.booleanToTerraform(struct!.gaAnonymizeUsers),
    ga_tracking_id: cdktf.stringToTerraform(struct!.gaTrackingId),
    grafana: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaToTerraform(struct!.grafana),
    ha: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaToTerraform(struct!.ha),
    help_chat_text: cdktf.stringToTerraform(struct!.helpChatText),
    help_chat_url: cdktf.stringToTerraform(struct!.helpChatUrl),
    image: cdktf.stringToTerraform(struct!.image),
    import: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportToTerraform(struct!.import),
    initial_repositories: cdktf.stringToTerraform(struct!.initialRepositories),
    initial_ssh_known_hosts: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsToTerraform(struct!.initialSshKnownHosts),
    kustomize_build_options: cdktf.stringToTerraform(struct!.kustomizeBuildOptions),
    kustomize_versions: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsToTerraform, false)(struct!.kustomizeVersions),
    monitoring: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    node_placement: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementToTerraform(struct!.nodePlacement),
    notifications: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsToTerraform(struct!.notifications),
    oidc_config: cdktf.stringToTerraform(struct!.oidcConfig),
    prometheus: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusToTerraform(struct!.prometheus),
    rbac: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacToTerraform(struct!.rbac),
    redis: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisToTerraform(struct!.redis),
    repo: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoToTerraform(struct!.repo),
    repository_credentials: cdktf.stringToTerraform(struct!.repositoryCredentials),
    resource_actions: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsToTerraform, false)(struct!.resourceActions),
    resource_exclusions: cdktf.stringToTerraform(struct!.resourceExclusions),
    resource_health_checks: cdktf.listMapper(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksToTerraform, false)(struct!.resourceHealthChecks),
    resource_ignore_differences: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesToTerraform(struct!.resourceIgnoreDifferences),
    resource_inclusions: cdktf.stringToTerraform(struct!.resourceInclusions),
    resource_tracking_method: cdktf.stringToTerraform(struct!.resourceTrackingMethod),
    server: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerToTerraform(struct!.server),
    source_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNamespaces),
    sso: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoToTerraform(struct!.sso),
    status_badge_enabled: cdktf.booleanToTerraform(struct!.statusBadgeEnabled),
    tls: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsToTerraform(struct!.tls),
    users_anonymous_enabled: cdktf.booleanToTerraform(struct!.usersAnonymousEnabled),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregated_cluster_roles: {
      value: cdktf.booleanToHclTerraform(struct!.aggregatedClusterRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_instance_label_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationInstanceLabelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_set: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetToHclTerraform(struct!.applicationSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSet",
    },
    banner: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerToHclTerraform(struct!.banner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBanner",
    },
    config_management_plugins: {
      value: cdktf.stringToHclTerraform(struct!.configManagementPlugins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecController",
    },
    default_cluster_scoped_role_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.defaultClusterScopedRoleDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_admin: {
      value: cdktf.booleanToHclTerraform(struct!.disableAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extra_config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraConfig),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ga_anonymize_users: {
      value: cdktf.booleanToHclTerraform(struct!.gaAnonymizeUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ga_tracking_id: {
      value: cdktf.stringToHclTerraform(struct!.gaTrackingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grafana: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaToHclTerraform(struct!.grafana),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafana",
    },
    ha: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaToHclTerraform(struct!.ha),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHa",
    },
    help_chat_text: {
      value: cdktf.stringToHclTerraform(struct!.helpChatText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    help_chat_url: {
      value: cdktf.stringToHclTerraform(struct!.helpChatUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportToHclTerraform(struct!.import),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImport",
    },
    initial_repositories: {
      value: cdktf.stringToHclTerraform(struct!.initialRepositories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_ssh_known_hosts: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsToHclTerraform(struct!.initialSshKnownHosts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHosts",
    },
    kustomize_build_options: {
      value: cdktf.stringToHclTerraform(struct!.kustomizeBuildOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kustomize_versions: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsToHclTerraform, false)(struct!.kustomizeVersions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsList",
    },
    monitoring: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoring",
    },
    node_placement: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementToHclTerraform(struct!.nodePlacement),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacement",
    },
    notifications: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsToHclTerraform(struct!.notifications),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotifications",
    },
    oidc_config: {
      value: cdktf.stringToHclTerraform(struct!.oidcConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheus",
    },
    rbac: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacToHclTerraform(struct!.rbac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbac",
    },
    redis: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedis",
    },
    repo: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoToHclTerraform(struct!.repo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepo",
    },
    repository_credentials: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_actions: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsToHclTerraform, false)(struct!.resourceActions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsList",
    },
    resource_exclusions: {
      value: cdktf.stringToHclTerraform(struct!.resourceExclusions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_health_checks: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksToHclTerraform, false)(struct!.resourceHealthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksList",
    },
    resource_ignore_differences: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesToHclTerraform(struct!.resourceIgnoreDifferences),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferences",
    },
    resource_inclusions: {
      value: cdktf.stringToHclTerraform(struct!.resourceInclusions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_tracking_method: {
      value: cdktf.stringToHclTerraform(struct!.resourceTrackingMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServer",
    },
    source_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sso: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoToHclTerraform(struct!.sso),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso",
    },
    status_badge_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.statusBadgeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls: {
      value: dataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls",
    },
    users_anonymous_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.usersAnonymousEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoArgoCdV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatedClusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatedClusterRoles = this._aggregatedClusterRoles;
    }
    if (this._applicationInstanceLabelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationInstanceLabelKey = this._applicationInstanceLabelKey;
    }
    if (this._applicationSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationSet = this._applicationSet?.internalValue;
    }
    if (this._banner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.banner = this._banner?.internalValue;
    }
    if (this._configManagementPlugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.configManagementPlugins = this._configManagementPlugins;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._defaultClusterScopedRoleDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultClusterScopedRoleDisabled = this._defaultClusterScopedRoleDisabled;
    }
    if (this._disableAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAdmin = this._disableAdmin;
    }
    if (this._extraConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraConfig = this._extraConfig;
    }
    if (this._gaAnonymizeUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaAnonymizeUsers = this._gaAnonymizeUsers;
    }
    if (this._gaTrackingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gaTrackingId = this._gaTrackingId;
    }
    if (this._grafana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafana = this._grafana?.internalValue;
    }
    if (this._ha?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ha = this._ha?.internalValue;
    }
    if (this._helpChatText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpChatText = this._helpChatText;
    }
    if (this._helpChatUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpChatUrl = this._helpChatUrl;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._import?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.import = this._import?.internalValue;
    }
    if (this._initialRepositories !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialRepositories = this._initialRepositories;
    }
    if (this._initialSshKnownHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialSshKnownHosts = this._initialSshKnownHosts?.internalValue;
    }
    if (this._kustomizeBuildOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomizeBuildOptions = this._kustomizeBuildOptions;
    }
    if (this._kustomizeVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomizeVersions = this._kustomizeVersions?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._nodePlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePlacement = this._nodePlacement?.internalValue;
    }
    if (this._notifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications?.internalValue;
    }
    if (this._oidcConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcConfig = this._oidcConfig;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._rbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbac = this._rbac?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._repo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo?.internalValue;
    }
    if (this._repositoryCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentials = this._repositoryCredentials;
    }
    if (this._resourceActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceActions = this._resourceActions?.internalValue;
    }
    if (this._resourceExclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceExclusions = this._resourceExclusions;
    }
    if (this._resourceHealthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHealthChecks = this._resourceHealthChecks?.internalValue;
    }
    if (this._resourceIgnoreDifferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIgnoreDifferences = this._resourceIgnoreDifferences?.internalValue;
    }
    if (this._resourceInclusions !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceInclusions = this._resourceInclusions;
    }
    if (this._resourceTrackingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTrackingMethod = this._resourceTrackingMethod;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._sourceNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespaces = this._sourceNamespaces;
    }
    if (this._sso?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sso = this._sso?.internalValue;
    }
    if (this._statusBadgeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusBadgeEnabled = this._statusBadgeEnabled;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._usersAnonymousEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersAnonymousEnabled = this._usersAnonymousEnabled;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregatedClusterRoles = undefined;
      this._applicationInstanceLabelKey = undefined;
      this._applicationSet.internalValue = undefined;
      this._banner.internalValue = undefined;
      this._configManagementPlugins = undefined;
      this._controller.internalValue = undefined;
      this._defaultClusterScopedRoleDisabled = undefined;
      this._disableAdmin = undefined;
      this._extraConfig = undefined;
      this._gaAnonymizeUsers = undefined;
      this._gaTrackingId = undefined;
      this._grafana.internalValue = undefined;
      this._ha.internalValue = undefined;
      this._helpChatText = undefined;
      this._helpChatUrl = undefined;
      this._image = undefined;
      this._import.internalValue = undefined;
      this._initialRepositories = undefined;
      this._initialSshKnownHosts.internalValue = undefined;
      this._kustomizeBuildOptions = undefined;
      this._kustomizeVersions.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._nodePlacement.internalValue = undefined;
      this._notifications.internalValue = undefined;
      this._oidcConfig = undefined;
      this._prometheus.internalValue = undefined;
      this._rbac.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._repo.internalValue = undefined;
      this._repositoryCredentials = undefined;
      this._resourceActions.internalValue = undefined;
      this._resourceExclusions = undefined;
      this._resourceHealthChecks.internalValue = undefined;
      this._resourceIgnoreDifferences.internalValue = undefined;
      this._resourceInclusions = undefined;
      this._resourceTrackingMethod = undefined;
      this._server.internalValue = undefined;
      this._sourceNamespaces = undefined;
      this._sso.internalValue = undefined;
      this._statusBadgeEnabled = undefined;
      this._tls.internalValue = undefined;
      this._usersAnonymousEnabled = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregatedClusterRoles = value.aggregatedClusterRoles;
      this._applicationInstanceLabelKey = value.applicationInstanceLabelKey;
      this._applicationSet.internalValue = value.applicationSet;
      this._banner.internalValue = value.banner;
      this._configManagementPlugins = value.configManagementPlugins;
      this._controller.internalValue = value.controller;
      this._defaultClusterScopedRoleDisabled = value.defaultClusterScopedRoleDisabled;
      this._disableAdmin = value.disableAdmin;
      this._extraConfig = value.extraConfig;
      this._gaAnonymizeUsers = value.gaAnonymizeUsers;
      this._gaTrackingId = value.gaTrackingId;
      this._grafana.internalValue = value.grafana;
      this._ha.internalValue = value.ha;
      this._helpChatText = value.helpChatText;
      this._helpChatUrl = value.helpChatUrl;
      this._image = value.image;
      this._import.internalValue = value.import;
      this._initialRepositories = value.initialRepositories;
      this._initialSshKnownHosts.internalValue = value.initialSshKnownHosts;
      this._kustomizeBuildOptions = value.kustomizeBuildOptions;
      this._kustomizeVersions.internalValue = value.kustomizeVersions;
      this._monitoring.internalValue = value.monitoring;
      this._nodePlacement.internalValue = value.nodePlacement;
      this._notifications.internalValue = value.notifications;
      this._oidcConfig = value.oidcConfig;
      this._prometheus.internalValue = value.prometheus;
      this._rbac.internalValue = value.rbac;
      this._redis.internalValue = value.redis;
      this._repo.internalValue = value.repo;
      this._repositoryCredentials = value.repositoryCredentials;
      this._resourceActions.internalValue = value.resourceActions;
      this._resourceExclusions = value.resourceExclusions;
      this._resourceHealthChecks.internalValue = value.resourceHealthChecks;
      this._resourceIgnoreDifferences.internalValue = value.resourceIgnoreDifferences;
      this._resourceInclusions = value.resourceInclusions;
      this._resourceTrackingMethod = value.resourceTrackingMethod;
      this._server.internalValue = value.server;
      this._sourceNamespaces = value.sourceNamespaces;
      this._sso.internalValue = value.sso;
      this._statusBadgeEnabled = value.statusBadgeEnabled;
      this._tls.internalValue = value.tls;
      this._usersAnonymousEnabled = value.usersAnonymousEnabled;
      this._version = value.version;
    }
  }

  // aggregated_cluster_roles - computed: false, optional: true, required: false
  private _aggregatedClusterRoles?: boolean | cdktf.IResolvable; 
  public get aggregatedClusterRoles() {
    return this.getBooleanAttribute('aggregated_cluster_roles');
  }
  public set aggregatedClusterRoles(value: boolean | cdktf.IResolvable) {
    this._aggregatedClusterRoles = value;
  }
  public resetAggregatedClusterRoles() {
    this._aggregatedClusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatedClusterRolesInput() {
    return this._aggregatedClusterRoles;
  }

  // application_instance_label_key - computed: false, optional: true, required: false
  private _applicationInstanceLabelKey?: string; 
  public get applicationInstanceLabelKey() {
    return this.getStringAttribute('application_instance_label_key');
  }
  public set applicationInstanceLabelKey(value: string) {
    this._applicationInstanceLabelKey = value;
  }
  public resetApplicationInstanceLabelKey() {
    this._applicationInstanceLabelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInstanceLabelKeyInput() {
    return this._applicationInstanceLabelKey;
  }

  // application_set - computed: false, optional: true, required: false
  private _applicationSet = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSetOutputReference(this, "application_set");
  public get applicationSet() {
    return this._applicationSet;
  }
  public putApplicationSet(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecApplicationSet) {
    this._applicationSet.internalValue = value;
  }
  public resetApplicationSet() {
    this._applicationSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSetInput() {
    return this._applicationSet.internalValue;
  }

  // banner - computed: false, optional: true, required: false
  private _banner = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBannerOutputReference(this, "banner");
  public get banner() {
    return this._banner;
  }
  public putBanner(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecBanner) {
    this._banner.internalValue = value;
  }
  public resetBanner() {
    this._banner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerInput() {
    return this._banner.internalValue;
  }

  // config_management_plugins - computed: false, optional: true, required: false
  private _configManagementPlugins?: string; 
  public get configManagementPlugins() {
    return this.getStringAttribute('config_management_plugins');
  }
  public set configManagementPlugins(value: string) {
    this._configManagementPlugins = value;
  }
  public resetConfigManagementPlugins() {
    this._configManagementPlugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configManagementPluginsInput() {
    return this._configManagementPlugins;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // default_cluster_scoped_role_disabled - computed: false, optional: true, required: false
  private _defaultClusterScopedRoleDisabled?: boolean | cdktf.IResolvable; 
  public get defaultClusterScopedRoleDisabled() {
    return this.getBooleanAttribute('default_cluster_scoped_role_disabled');
  }
  public set defaultClusterScopedRoleDisabled(value: boolean | cdktf.IResolvable) {
    this._defaultClusterScopedRoleDisabled = value;
  }
  public resetDefaultClusterScopedRoleDisabled() {
    this._defaultClusterScopedRoleDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClusterScopedRoleDisabledInput() {
    return this._defaultClusterScopedRoleDisabled;
  }

  // disable_admin - computed: false, optional: true, required: false
  private _disableAdmin?: boolean | cdktf.IResolvable; 
  public get disableAdmin() {
    return this.getBooleanAttribute('disable_admin');
  }
  public set disableAdmin(value: boolean | cdktf.IResolvable) {
    this._disableAdmin = value;
  }
  public resetDisableAdmin() {
    this._disableAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdminInput() {
    return this._disableAdmin;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // ga_anonymize_users - computed: false, optional: true, required: false
  private _gaAnonymizeUsers?: boolean | cdktf.IResolvable; 
  public get gaAnonymizeUsers() {
    return this.getBooleanAttribute('ga_anonymize_users');
  }
  public set gaAnonymizeUsers(value: boolean | cdktf.IResolvable) {
    this._gaAnonymizeUsers = value;
  }
  public resetGaAnonymizeUsers() {
    this._gaAnonymizeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaAnonymizeUsersInput() {
    return this._gaAnonymizeUsers;
  }

  // ga_tracking_id - computed: false, optional: true, required: false
  private _gaTrackingId?: string; 
  public get gaTrackingId() {
    return this.getStringAttribute('ga_tracking_id');
  }
  public set gaTrackingId(value: string) {
    this._gaTrackingId = value;
  }
  public resetGaTrackingId() {
    this._gaTrackingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gaTrackingIdInput() {
    return this._gaTrackingId;
  }

  // grafana - computed: false, optional: true, required: false
  private _grafana = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
  }

  // ha - computed: false, optional: true, required: false
  private _ha = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHaOutputReference(this, "ha");
  public get ha() {
    return this._ha;
  }
  public putHa(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecHa) {
    this._ha.internalValue = value;
  }
  public resetHa() {
    this._ha.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha.internalValue;
  }

  // help_chat_text - computed: false, optional: true, required: false
  private _helpChatText?: string; 
  public get helpChatText() {
    return this.getStringAttribute('help_chat_text');
  }
  public set helpChatText(value: string) {
    this._helpChatText = value;
  }
  public resetHelpChatText() {
    this._helpChatText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpChatTextInput() {
    return this._helpChatText;
  }

  // help_chat_url - computed: false, optional: true, required: false
  private _helpChatUrl?: string; 
  public get helpChatUrl() {
    return this.getStringAttribute('help_chat_url');
  }
  public set helpChatUrl(value: string) {
    this._helpChatUrl = value;
  }
  public resetHelpChatUrl() {
    this._helpChatUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpChatUrlInput() {
    return this._helpChatUrl;
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

  // import - computed: false, optional: true, required: false
  private _import = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImportOutputReference(this, "import");
  public get import() {
    return this._import;
  }
  public putImport(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecImport) {
    this._import.internalValue = value;
  }
  public resetImport() {
    this._import.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import.internalValue;
  }

  // initial_repositories - computed: false, optional: true, required: false
  private _initialRepositories?: string; 
  public get initialRepositories() {
    return this.getStringAttribute('initial_repositories');
  }
  public set initialRepositories(value: string) {
    this._initialRepositories = value;
  }
  public resetInitialRepositories() {
    this._initialRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialRepositoriesInput() {
    return this._initialRepositories;
  }

  // initial_ssh_known_hosts - computed: false, optional: true, required: false
  private _initialSshKnownHosts = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHostsOutputReference(this, "initial_ssh_known_hosts");
  public get initialSshKnownHosts() {
    return this._initialSshKnownHosts;
  }
  public putInitialSshKnownHosts(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecInitialSshKnownHosts) {
    this._initialSshKnownHosts.internalValue = value;
  }
  public resetInitialSshKnownHosts() {
    this._initialSshKnownHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialSshKnownHostsInput() {
    return this._initialSshKnownHosts.internalValue;
  }

  // kustomize_build_options - computed: false, optional: true, required: false
  private _kustomizeBuildOptions?: string; 
  public get kustomizeBuildOptions() {
    return this.getStringAttribute('kustomize_build_options');
  }
  public set kustomizeBuildOptions(value: string) {
    this._kustomizeBuildOptions = value;
  }
  public resetKustomizeBuildOptions() {
    this._kustomizeBuildOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeBuildOptionsInput() {
    return this._kustomizeBuildOptions;
  }

  // kustomize_versions - computed: false, optional: true, required: false
  private _kustomizeVersions = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersionsList(this, "kustomize_versions", false);
  public get kustomizeVersions() {
    return this._kustomizeVersions;
  }
  public putKustomizeVersions(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecKustomizeVersions[] | cdktf.IResolvable) {
    this._kustomizeVersions.internalValue = value;
  }
  public resetKustomizeVersions() {
    this._kustomizeVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeVersionsInput() {
    return this._kustomizeVersions.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // node_placement - computed: false, optional: true, required: false
  private _nodePlacement = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacementOutputReference(this, "node_placement");
  public get nodePlacement() {
    return this._nodePlacement;
  }
  public putNodePlacement(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNodePlacement) {
    this._nodePlacement.internalValue = value;
  }
  public resetNodePlacement() {
    this._nodePlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePlacementInput() {
    return this._nodePlacement.internalValue;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotificationsOutputReference(this, "notifications");
  public get notifications() {
    return this._notifications;
  }
  public putNotifications(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecNotifications) {
    this._notifications.internalValue = value;
  }
  public resetNotifications() {
    this._notifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications.internalValue;
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig?: string; 
  public get oidcConfig() {
    return this.getStringAttribute('oidc_config');
  }
  public set oidcConfig(value: string) {
    this._oidcConfig = value;
  }
  public resetOidcConfig() {
    this._oidcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // rbac - computed: false, optional: true, required: false
  private _rbac = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbacOutputReference(this, "rbac");
  public get rbac() {
    return this._rbac;
  }
  public putRbac(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRbac) {
    this._rbac.internalValue = value;
  }
  public resetRbac() {
    this._rbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacInput() {
    return this._rbac.internalValue;
  }

  // redis - computed: false, optional: true, required: false
  private _redis = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // repo - computed: false, optional: true, required: false
  private _repo = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepoOutputReference(this, "repo");
  public get repo() {
    return this._repo;
  }
  public putRepo(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecRepo) {
    this._repo.internalValue = value;
  }
  public resetRepo() {
    this._repo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo.internalValue;
  }

  // repository_credentials - computed: false, optional: true, required: false
  private _repositoryCredentials?: string; 
  public get repositoryCredentials() {
    return this.getStringAttribute('repository_credentials');
  }
  public set repositoryCredentials(value: string) {
    this._repositoryCredentials = value;
  }
  public resetRepositoryCredentials() {
    this._repositoryCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsInput() {
    return this._repositoryCredentials;
  }

  // resource_actions - computed: false, optional: true, required: false
  private _resourceActions = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActionsList(this, "resource_actions", false);
  public get resourceActions() {
    return this._resourceActions;
  }
  public putResourceActions(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceActions[] | cdktf.IResolvable) {
    this._resourceActions.internalValue = value;
  }
  public resetResourceActions() {
    this._resourceActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceActionsInput() {
    return this._resourceActions.internalValue;
  }

  // resource_exclusions - computed: false, optional: true, required: false
  private _resourceExclusions?: string; 
  public get resourceExclusions() {
    return this.getStringAttribute('resource_exclusions');
  }
  public set resourceExclusions(value: string) {
    this._resourceExclusions = value;
  }
  public resetResourceExclusions() {
    this._resourceExclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceExclusionsInput() {
    return this._resourceExclusions;
  }

  // resource_health_checks - computed: false, optional: true, required: false
  private _resourceHealthChecks = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecksList(this, "resource_health_checks", false);
  public get resourceHealthChecks() {
    return this._resourceHealthChecks;
  }
  public putResourceHealthChecks(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceHealthChecks[] | cdktf.IResolvable) {
    this._resourceHealthChecks.internalValue = value;
  }
  public resetResourceHealthChecks() {
    this._resourceHealthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHealthChecksInput() {
    return this._resourceHealthChecks.internalValue;
  }

  // resource_ignore_differences - computed: false, optional: true, required: false
  private _resourceIgnoreDifferences = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferencesOutputReference(this, "resource_ignore_differences");
  public get resourceIgnoreDifferences() {
    return this._resourceIgnoreDifferences;
  }
  public putResourceIgnoreDifferences(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecResourceIgnoreDifferences) {
    this._resourceIgnoreDifferences.internalValue = value;
  }
  public resetResourceIgnoreDifferences() {
    this._resourceIgnoreDifferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIgnoreDifferencesInput() {
    return this._resourceIgnoreDifferences.internalValue;
  }

  // resource_inclusions - computed: false, optional: true, required: false
  private _resourceInclusions?: string; 
  public get resourceInclusions() {
    return this.getStringAttribute('resource_inclusions');
  }
  public set resourceInclusions(value: string) {
    this._resourceInclusions = value;
  }
  public resetResourceInclusions() {
    this._resourceInclusions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInclusionsInput() {
    return this._resourceInclusions;
  }

  // resource_tracking_method - computed: false, optional: true, required: false
  private _resourceTrackingMethod?: string; 
  public get resourceTrackingMethod() {
    return this.getStringAttribute('resource_tracking_method');
  }
  public set resourceTrackingMethod(value: string) {
    this._resourceTrackingMethod = value;
  }
  public resetResourceTrackingMethod() {
    this._resourceTrackingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTrackingMethodInput() {
    return this._resourceTrackingMethod;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // source_namespaces - computed: false, optional: true, required: false
  private _sourceNamespaces?: string[]; 
  public get sourceNamespaces() {
    return this.getListAttribute('source_namespaces');
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

  // sso - computed: false, optional: true, required: false
  private _sso = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSsoOutputReference(this, "sso");
  public get sso() {
    return this._sso;
  }
  public putSso(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecSso) {
    this._sso.internalValue = value;
  }
  public resetSso() {
    this._sso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso.internalValue;
  }

  // status_badge_enabled - computed: false, optional: true, required: false
  private _statusBadgeEnabled?: boolean | cdktf.IResolvable; 
  public get statusBadgeEnabled() {
    return this.getBooleanAttribute('status_badge_enabled');
  }
  public set statusBadgeEnabled(value: boolean | cdktf.IResolvable) {
    this._statusBadgeEnabled = value;
  }
  public resetStatusBadgeEnabled() {
    this._statusBadgeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusBadgeEnabledInput() {
    return this._statusBadgeEnabled;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SArgoprojIoArgoCdV1Beta1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // users_anonymous_enabled - computed: false, optional: true, required: false
  private _usersAnonymousEnabled?: boolean | cdktf.IResolvable; 
  public get usersAnonymousEnabled() {
    return this.getBooleanAttribute('users_anonymous_enabled');
  }
  public set usersAnonymousEnabled(value: boolean | cdktf.IResolvable) {
    this._usersAnonymousEnabled = value;
  }
  public resetUsersAnonymousEnabled() {
    this._usersAnonymousEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersAnonymousEnabledInput() {
    return this._usersAnonymousEnabled;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
