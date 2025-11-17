import * as cdktf from 'cdktf';
import { DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSource,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResources,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStore,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDisk,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFile,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfs,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinder,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMap,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsi,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApi,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDir,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariables,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesList,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMounts,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsList,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariables,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesList,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecret,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMounts,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsList,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumes,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesList,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstall,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallOutputReference,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelector,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorToTerraform,
dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorToHclTerraform,
DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorOutputReference } from './structs0'
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#key DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#operator DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#values DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#match_expressions DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#match_labels DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#access_modes DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#data_source DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#data_source}
  */
  readonly dataSource?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#data_source_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#resources DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#resources}
  */
  readonly resources?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#selector DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storage_class_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_attributes_class_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable): any {
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
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef",
    },
    resources: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResources",
    },
    selector: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec | cdktf.IResolvable | undefined) {
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
  private _dataSource = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSource) {
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
  private _dataSourceRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecDataSourceRef) {
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
  private _resources = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecResources) {
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
  private _selector = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecSelector) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate {
  /**
  * May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#metadata DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#spec DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    spec: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    spec: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral {
  /**
  * Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod. The name of the PVC will be '<pod name>-<volume name>' where '<volume name>' is the name from the 'PodSpec.Volumes' array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long). An existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster. This field is read-only and no changes will be made by Kubernetes to the PVC after it has been created. Required, must not be nil.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_claim_template DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_claim_template}
  */
  readonly volumeClaimTemplate?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_claim_template: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateToTerraform(struct!.volumeClaimTemplate),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_claim_template: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateToHclTerraform(struct!.volumeClaimTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeClaimTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimTemplate = this._volumeClaimTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeClaimTemplate.internalValue = value.volumeClaimTemplate;
    }
  }

  // volume_claim_template - computed: false, optional: true, required: false
  private _volumeClaimTemplate = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplateOutputReference(this, "volume_claim_template");
  public get volumeClaimTemplate() {
    return this._volumeClaimTemplate;
  }
  public putVolumeClaimTemplate(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralVolumeClaimTemplate) {
    this._volumeClaimTemplate.internalValue = value;
  }
  public resetVolumeClaimTemplate() {
    this._volumeClaimTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimTemplateInput() {
    return this._volumeClaimTemplate.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * lun is Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#lun DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * targetWWNs is Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#target_ww_ns DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#wwids DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
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

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume {
  /**
  * driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#driver DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#driver}
  */
  readonly driver: string;
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * options is Optional: this field holds extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#options DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker {
  /**
  * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#dataset_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#dataset_uuid DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk {
  /**
  * fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#partition DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#pd_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
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
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo {
  /**
  * directory is the target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#directory DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * repository is the URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#repository DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#repository}
  */
  readonly repository: string;
  /**
  * revision is the commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#revision DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
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
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs {
  /**
  * endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#endpoints DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
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
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath {
  /**
  * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
    }
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi {
  /**
  * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#chap_auth_discovery DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * chapAuthSession defines whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#chap_auth_session DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#initiator_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * iqn is the target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#iqn DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#iscsi_interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * lun represents iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#lun DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#lun}
  */
  readonly lun: number;
  /**
  * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#portals DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is the CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef;
  /**
  * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#target_portal DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs {
  /**
  * path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#server DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#claim_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
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
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * pdID is the ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#pd_id DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume {
  /**
  * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * volumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_id DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#key DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#operator DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#values DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#match_expressions DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#match_labels DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle {
  /**
  * Select all ClusterTrustBundles that match this label selector. Only has effect if signerName is set. Mutually-exclusive with name. If unset, interpreted as 'match nothing'. If set but empty, interpreted as 'match everything'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#label_selector DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector;
  /**
  * Select a single ClusterTrustBundle by object name. Mutually-exclusive with signerName and labelSelector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available. If using name, then the named ClusterTrustBundle is allowed not to exist. If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#optional DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Relative path from the volume root to write the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name. The contents of all selected ClusterTrustBundles will be unified and deduplicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#signer_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#signer_name}
  */
  readonly signerName?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    path: cdktf.stringToTerraform(struct!.path),
    signer_name: cdktf.stringToTerraform(struct!.signerName),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector",
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktf.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._path = undefined;
      this._signerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._name = value.name;
      this._optional = value.optional;
      this._path = value.path;
      this._signerName = value.signerName;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
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

  // signer_name - computed: false, optional: true, required: false
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  public resetSignerName() {
    this._signerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#key DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#items DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#items}
  */
  readonly items?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#optional DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#api_version DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#field_path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#container_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#divisor DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#resource DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#field_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#resource_field_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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
    resource_field_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#items DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#items}
  */
  readonly items?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#key DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#items DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#items}
  */
  readonly items?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#optional DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#audience DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#expiration_seconds DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cluster_trust_bundle DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#config_map DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#downward_api DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#service_account_token DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#default_mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#sources DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#sources}
  */
  readonly sources?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte {
  /**
  * group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#group DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#group}
  */
  readonly group?: string;
  /**
  * readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#registry DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#registry}
  */
  readonly registry: string;
  /**
  * tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#tenant DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * user to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#user DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#user}
  */
  readonly user?: string;
  /**
  * volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte | cdktf.IResolvable): any {
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
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

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd {
  /**
  * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#keyring DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#monitors DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#pool DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef;
  /**
  * user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#user DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
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
    secret_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * gateway is the host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#gateway DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#protection_domain DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef;
  /**
  * sslEnabled Flag enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#ssl_enabled DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storage_mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * storagePool is the ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storage_pool DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * system is the name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#system DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
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
    secret_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
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

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#key DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret {
  /**
  * defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#default_mode DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#items DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#items}
  */
  readonly items?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * optional field specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#optional DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef {
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos {
  /**
  * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#read_only DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * secretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret_ref DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef;
  /**
  * volumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * volumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_namespace DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
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
    secret_ref: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
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

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
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

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume {
  /**
  * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fs_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storage_policy_id DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storage_policy_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * volumePath is the path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes {
  /**
  * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#aws_elastic_block_store DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStore;
  /**
  * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#azure_disk DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDisk;
  /**
  * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#azure_file DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFile;
  /**
  * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cephfs DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfs;
  /**
  * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cinder DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cinder}
  */
  readonly cinder?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinder;
  /**
  * configMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#config_map DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMap;
  /**
  * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#csi DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#csi}
  */
  readonly csi?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsi;
  /**
  * downwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#downward_api DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApi;
  /**
  * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#empty_dir DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDir;
  /**
  * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed. Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity tracking are needed, c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through a PersistentVolumeClaim (see EphemeralVolumeSource for more information on the connection between this volume type and PersistentVolumeClaim). Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod. Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information. A pod can use both types of ephemeral volumes and persistent volumes at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#ephemeral DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#ephemeral}
  */
  readonly ephemeral?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral;
  /**
  * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#fc DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#fc}
  */
  readonly fc?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc;
  /**
  * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#flex_volume DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume;
  /**
  * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#flocker DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#flocker}
  */
  readonly flocker?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker;
  /**
  * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#gce_persistent_disk DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk;
  /**
  * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#git_repo DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo;
  /**
  * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#glusterfs DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs;
  /**
  * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#host_path DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#host_path}
  */
  readonly hostPath?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath;
  /**
  * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#iscsi DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi;
  /**
  * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#nfs DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#nfs}
  */
  readonly nfs?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs;
  /**
  * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#persistent_volume_claim DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim;
  /**
  * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#photon_persistent_disk DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk;
  /**
  * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#portworx_volume DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume;
  /**
  * projected items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#projected DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#projected}
  */
  readonly projected?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected;
  /**
  * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#quobyte DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte;
  /**
  * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#rbd DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#rbd}
  */
  readonly rbd?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd;
  /**
  * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#scale_io DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo;
  /**
  * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#secret DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret;
  /**
  * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#storageos DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#storageos}
  */
  readonly storageos?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos;
  /**
  * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#vsphere_volume DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirToTerraform(struct!.emptyDir),
    ephemeral: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralToTerraform(struct!.ephemeral),
    fc: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfs",
    },
    cinder: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinder",
    },
    config_map: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMap",
    },
    csi: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsi",
    },
    downward_api: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDir",
    },
    ephemeral: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralToHclTerraform(struct!.ephemeral),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral",
    },
    fc: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc",
    },
    flex_volume: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath",
    },
    iscsi: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected",
    },
    quobyte: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte",
    },
    rbd: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd",
    },
    scale_io: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo",
    },
    secret: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret",
    },
    storageos: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._ephemeral?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeral = this._ephemeral?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._ephemeral.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._ephemeral.internalValue = value.ephemeral;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeralOutputReference(this, "ephemeral");
  public get ephemeral() {
    return this._ephemeral;
  }
  public putEphemeral(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesEphemeral) {
    this._ephemeral.internalValue = value;
  }
  public resetEphemeral() {
    this._ephemeral.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall {
  /**
  * This specifies the command executes before InstallCmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cmd DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cmd}
  */
  readonly cmd?: string[];
  /**
  * This specifies the env variables for the pre-install daemon set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#environment_variables DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#environment_variables}
  */
  readonly environmentVariables?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * This specifies the image for the pre-install scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * This specifies the volumeMounts for the pre-install daemon set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volume_mounts DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMounts[] | cdktf.IResolvable;
  /**
  * This specifies the volumes for the pre-install daemon set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#volumes DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#volumes}
  */
  readonly volumes?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes[] | cdktf.IResolvable;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cmd),
    environment_variables: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesToTerraform, false)(struct!.environmentVariables),
    image: cdktf.stringToTerraform(struct!.image),
    volume_mounts: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsToTerraform, false)(struct!.volumeMounts),
    volumes: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment_variables: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesToHclTerraform, false)(struct!.environmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmd = this._cmd;
    }
    if (this._environmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmd = undefined;
      this._environmentVariables.internalValue = undefined;
      this._image = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmd = value.cmd;
      this._environmentVariables.internalValue = value.environmentVariables;
      this._image = value.image;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // cmd - computed: false, optional: true, required: false
  private _cmd?: string[]; 
  public get cmd() {
    return this.getListAttribute('cmd');
  }
  public set cmd(value: string[]) {
    this._cmd = value;
  }
  public resetCmd() {
    this._cmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdInput() {
    return this._cmd;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallEnvironmentVariables[] | cdktf.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
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

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumeMounts[] | cdktf.IResolvable) {
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
  private _volumes = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses {
  /**
  * Name of the runtime class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * The pulling image method to be used by the runtime class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#pulltype DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#pulltype}
  */
  readonly pulltype: string;
  /**
  * The snapshotter to be used by the runtime class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#snapshotter DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#snapshotter}
  */
  readonly snapshotter: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    pulltype: cdktf.stringToTerraform(struct!.pulltype),
    snapshotter: cdktf.stringToTerraform(struct!.snapshotter),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses | cdktf.IResolvable): any {
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
    pulltype: {
      value: cdktf.stringToHclTerraform(struct!.pulltype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshotter: {
      value: cdktf.stringToHclTerraform(struct!.snapshotter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pulltype !== undefined) {
      hasAnyValues = true;
      internalValueResult.pulltype = this._pulltype;
    }
    if (this._snapshotter !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotter = this._snapshotter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._pulltype = undefined;
      this._snapshotter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._pulltype = value.pulltype;
      this._snapshotter = value.snapshotter;
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

  // pulltype - computed: false, optional: false, required: true
  private _pulltype?: string; 
  public get pulltype() {
    return this.getStringAttribute('pulltype');
  }
  public set pulltype(value: string) {
    this._pulltype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pulltypeInput() {
    return this._pulltype;
  }

  // snapshotter - computed: false, optional: false, required: true
  private _snapshotter?: string; 
  public get snapshotter() {
    return this.getStringAttribute('snapshotter');
  }
  public set snapshotter(value: string) {
    this._snapshotter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotterInput() {
    return this._snapshotter;
  }
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesList extends cdktf.ComplexList {
  public internalValue? : DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesOutputReference {
    return new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig {
  /**
  * This specifies the command for cleanup on the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cleanup_cmd DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cleanup_cmd}
  */
  readonly cleanupCmd?: string[];
  /**
  * This specifies whether the CcRuntime (kata or enclave-cc) will be running on debug mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#debug DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * This specifies the RuntimeClass to be used as the default one If not set, the default 'kata' runtime class will NOT be created. Otherwise, the default 'kata' runtime class will be created as as 'alias' for the value set here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#default_runtime_class_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#default_runtime_class_name}
  */
  readonly defaultRuntimeClassName?: string;
  /**
  * This specifies the environment variables required by the daemon set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#environment_variables DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#environment_variables}
  */
  readonly environmentVariables?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * This specifies the location of the container image containing the guest initrd If both bundleImage and guestInitrdImage are specified, then guestInitrdImage content will override the equivalent one in payloadImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#guest_initrd_image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#guest_initrd_image}
  */
  readonly guestInitrdImage?: string;
  /**
  * This specifies the location of the container image containing the guest kernel If both bundleImage and guestKernelImage are specified, then guestKernelImage content will override the equivalent one in payloadImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#guest_kernel_image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#guest_kernel_image}
  */
  readonly guestKernelImage?: string;
  /**
  * PullPolicy describes a policy for if/when to pull a container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#image_pull_policy DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * This specifies the registry secret to pull of the container images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#image_pull_secret DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#image_pull_secret}
  */
  readonly imagePullSecret?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecret;
  /**
  * This specifies the command for installation of the runtime on the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#install_cmd DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#install_cmd}
  */
  readonly installCmd?: string[];
  /**
  * This specifies the label that the install daemonset adds to nodes when the installation is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#install_done_label DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#install_done_label}
  */
  readonly installDoneLabel?: { [key: string]: string };
  /**
  * This indicates whether to use native OS packaging (rpm/deb) or Container image Default is bundle (container image)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#install_type DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#install_type}
  */
  readonly installType: string;
  /**
  * This specifies volume mounts required for the installer pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#installer_volume_mounts DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#installer_volume_mounts}
  */
  readonly installerVolumeMounts?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMounts[] | cdktf.IResolvable;
  /**
  * This specifies volumes required for the installer pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#installer_volumes DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#installer_volumes}
  */
  readonly installerVolumes?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumes[] | cdktf.IResolvable;
  /**
  * This specifies the repo location to be used when using rpm/deb packages Some examples add-apt-repository 'deb [arch=amd64] https://repo.confidential-containers.org/apt/ubuntu’ add-apt-repository ppa:confidential-containers/cc-bundle dnf install -y https://repo.confidential-containers.org/yum/centos/cc-bundle-repo.rpm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#os_native_repo DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#os_native_repo}
  */
  readonly osNativeRepo?: string;
  /**
  * This specifies the location of the container image with all artifacts (Cc runtime binaries, initrd, kernel, config etc) when using 'bundle' installType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#payload_image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#payload_image}
  */
  readonly payloadImage: string;
  /**
  * This specifies the configuration for the post-uninstall daemonset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#post_uninstall DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#post_uninstall}
  */
  readonly postUninstall?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstall;
  /**
  * This specifies the configuration for the pre-install daemonset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#pre_install DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#pre_install}
  */
  readonly preInstall?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall;
  /**
  * This specifies the RuntimeClasses that need to be created, with its name and an associated snapshotter to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#runtime_classes DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#runtime_classes}
  */
  readonly runtimeClasses?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses[] | cdktf.IResolvable;
  /**
  * This specifies the location of the container image containing the Cc runtime binaries If both payloadImage and runtimeImage are specified, then runtimeImage content will override the equivalent one in payloadImage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#runtime_image DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#runtime_image}
  */
  readonly runtimeImage?: string;
  /**
  * This specifies the command for uninstallation of the runtime on the nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#uninstall_cmd DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#uninstall_cmd}
  */
  readonly uninstallCmd?: string[];
  /**
  * This specifies the label that the uninstall daemonset adds to nodes when the uninstallation is done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#uninstall_done_label DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#uninstall_done_label}
  */
  readonly uninstallDoneLabel?: { [key: string]: string };
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cleanupCmd),
    debug: cdktf.booleanToTerraform(struct!.debug),
    default_runtime_class_name: cdktf.stringToTerraform(struct!.defaultRuntimeClassName),
    environment_variables: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesToTerraform, false)(struct!.environmentVariables),
    guest_initrd_image: cdktf.stringToTerraform(struct!.guestInitrdImage),
    guest_kernel_image: cdktf.stringToTerraform(struct!.guestKernelImage),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secret: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretToTerraform(struct!.imagePullSecret),
    install_cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.installCmd),
    install_done_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.installDoneLabel),
    install_type: cdktf.stringToTerraform(struct!.installType),
    installer_volume_mounts: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsToTerraform, false)(struct!.installerVolumeMounts),
    installer_volumes: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesToTerraform, false)(struct!.installerVolumes),
    os_native_repo: cdktf.stringToTerraform(struct!.osNativeRepo),
    payload_image: cdktf.stringToTerraform(struct!.payloadImage),
    post_uninstall: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallToTerraform(struct!.postUninstall),
    pre_install: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallToTerraform(struct!.preInstall),
    runtime_classes: cdktf.listMapper(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesToTerraform, false)(struct!.runtimeClasses),
    runtime_image: cdktf.stringToTerraform(struct!.runtimeImage),
    uninstall_cmd: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uninstallCmd),
    uninstall_done_label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.uninstallDoneLabel),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cleanupCmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_runtime_class_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultRuntimeClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_variables: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesToHclTerraform, false)(struct!.environmentVariables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesList",
    },
    guest_initrd_image: {
      value: cdktf.stringToHclTerraform(struct!.guestInitrdImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_kernel_image: {
      value: cdktf.stringToHclTerraform(struct!.guestKernelImage),
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
    image_pull_secret: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretToHclTerraform(struct!.imagePullSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecret",
    },
    install_cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.installCmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    install_done_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.installDoneLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    installer_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsToHclTerraform, false)(struct!.installerVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsList",
    },
    installer_volumes: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesToHclTerraform, false)(struct!.installerVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesList",
    },
    os_native_repo: {
      value: cdktf.stringToHclTerraform(struct!.osNativeRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_image: {
      value: cdktf.stringToHclTerraform(struct!.payloadImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_uninstall: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallToHclTerraform(struct!.postUninstall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstall",
    },
    pre_install: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallToHclTerraform(struct!.preInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall",
    },
    runtime_classes: {
      value: cdktf.listMapperHcl(dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesToHclTerraform, false)(struct!.runtimeClasses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesList",
    },
    runtime_image: {
      value: cdktf.stringToHclTerraform(struct!.runtimeImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uninstall_cmd: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uninstallCmd),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uninstall_done_label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.uninstallDoneLabel),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupCmd = this._cleanupCmd;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._defaultRuntimeClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRuntimeClassName = this._defaultRuntimeClassName;
    }
    if (this._environmentVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables?.internalValue;
    }
    if (this._guestInitrdImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestInitrdImage = this._guestInitrdImage;
    }
    if (this._guestKernelImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestKernelImage = this._guestKernelImage;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecret = this._imagePullSecret?.internalValue;
    }
    if (this._installCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.installCmd = this._installCmd;
    }
    if (this._installDoneLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.installDoneLabel = this._installDoneLabel;
    }
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._installerVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerVolumeMounts = this._installerVolumeMounts?.internalValue;
    }
    if (this._installerVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installerVolumes = this._installerVolumes?.internalValue;
    }
    if (this._osNativeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.osNativeRepo = this._osNativeRepo;
    }
    if (this._payloadImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadImage = this._payloadImage;
    }
    if (this._postUninstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postUninstall = this._postUninstall?.internalValue;
    }
    if (this._preInstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstall = this._preInstall?.internalValue;
    }
    if (this._runtimeClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeClasses = this._runtimeClasses?.internalValue;
    }
    if (this._runtimeImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeImage = this._runtimeImage;
    }
    if (this._uninstallCmd !== undefined) {
      hasAnyValues = true;
      internalValueResult.uninstallCmd = this._uninstallCmd;
    }
    if (this._uninstallDoneLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.uninstallDoneLabel = this._uninstallDoneLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupCmd = undefined;
      this._debug = undefined;
      this._defaultRuntimeClassName = undefined;
      this._environmentVariables.internalValue = undefined;
      this._guestInitrdImage = undefined;
      this._guestKernelImage = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecret.internalValue = undefined;
      this._installCmd = undefined;
      this._installDoneLabel = undefined;
      this._installType = undefined;
      this._installerVolumeMounts.internalValue = undefined;
      this._installerVolumes.internalValue = undefined;
      this._osNativeRepo = undefined;
      this._payloadImage = undefined;
      this._postUninstall.internalValue = undefined;
      this._preInstall.internalValue = undefined;
      this._runtimeClasses.internalValue = undefined;
      this._runtimeImage = undefined;
      this._uninstallCmd = undefined;
      this._uninstallDoneLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupCmd = value.cleanupCmd;
      this._debug = value.debug;
      this._defaultRuntimeClassName = value.defaultRuntimeClassName;
      this._environmentVariables.internalValue = value.environmentVariables;
      this._guestInitrdImage = value.guestInitrdImage;
      this._guestKernelImage = value.guestKernelImage;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecret.internalValue = value.imagePullSecret;
      this._installCmd = value.installCmd;
      this._installDoneLabel = value.installDoneLabel;
      this._installType = value.installType;
      this._installerVolumeMounts.internalValue = value.installerVolumeMounts;
      this._installerVolumes.internalValue = value.installerVolumes;
      this._osNativeRepo = value.osNativeRepo;
      this._payloadImage = value.payloadImage;
      this._postUninstall.internalValue = value.postUninstall;
      this._preInstall.internalValue = value.preInstall;
      this._runtimeClasses.internalValue = value.runtimeClasses;
      this._runtimeImage = value.runtimeImage;
      this._uninstallCmd = value.uninstallCmd;
      this._uninstallDoneLabel = value.uninstallDoneLabel;
    }
  }

  // cleanup_cmd - computed: false, optional: true, required: false
  private _cleanupCmd?: string[]; 
  public get cleanupCmd() {
    return this.getListAttribute('cleanup_cmd');
  }
  public set cleanupCmd(value: string[]) {
    this._cleanupCmd = value;
  }
  public resetCleanupCmd() {
    this._cleanupCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupCmdInput() {
    return this._cleanupCmd;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // default_runtime_class_name - computed: false, optional: true, required: false
  private _defaultRuntimeClassName?: string; 
  public get defaultRuntimeClassName() {
    return this.getStringAttribute('default_runtime_class_name');
  }
  public set defaultRuntimeClassName(value: string) {
    this._defaultRuntimeClassName = value;
  }
  public resetDefaultRuntimeClassName() {
    this._defaultRuntimeClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuntimeClassNameInput() {
    return this._defaultRuntimeClassName;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigEnvironmentVariables[] | cdktf.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // guest_initrd_image - computed: false, optional: true, required: false
  private _guestInitrdImage?: string; 
  public get guestInitrdImage() {
    return this.getStringAttribute('guest_initrd_image');
  }
  public set guestInitrdImage(value: string) {
    this._guestInitrdImage = value;
  }
  public resetGuestInitrdImage() {
    this._guestInitrdImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestInitrdImageInput() {
    return this._guestInitrdImage;
  }

  // guest_kernel_image - computed: false, optional: true, required: false
  private _guestKernelImage?: string; 
  public get guestKernelImage() {
    return this.getStringAttribute('guest_kernel_image');
  }
  public set guestKernelImage(value: string) {
    this._guestKernelImage = value;
  }
  public resetGuestKernelImage() {
    this._guestKernelImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestKernelImageInput() {
    return this._guestKernelImage;
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

  // image_pull_secret - computed: false, optional: true, required: false
  private _imagePullSecret = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecretOutputReference(this, "image_pull_secret");
  public get imagePullSecret() {
    return this._imagePullSecret;
  }
  public putImagePullSecret(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigImagePullSecret) {
    this._imagePullSecret.internalValue = value;
  }
  public resetImagePullSecret() {
    this._imagePullSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretInput() {
    return this._imagePullSecret.internalValue;
  }

  // install_cmd - computed: false, optional: true, required: false
  private _installCmd?: string[]; 
  public get installCmd() {
    return this.getListAttribute('install_cmd');
  }
  public set installCmd(value: string[]) {
    this._installCmd = value;
  }
  public resetInstallCmd() {
    this._installCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installCmdInput() {
    return this._installCmd;
  }

  // install_done_label - computed: false, optional: true, required: false
  private _installDoneLabel?: { [key: string]: string }; 
  public get installDoneLabel() {
    return this.getStringMapAttribute('install_done_label');
  }
  public set installDoneLabel(value: { [key: string]: string }) {
    this._installDoneLabel = value;
  }
  public resetInstallDoneLabel() {
    this._installDoneLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDoneLabelInput() {
    return this._installDoneLabel;
  }

  // install_type - computed: false, optional: false, required: true
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // installer_volume_mounts - computed: false, optional: true, required: false
  private _installerVolumeMounts = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMountsList(this, "installer_volume_mounts", false);
  public get installerVolumeMounts() {
    return this._installerVolumeMounts;
  }
  public putInstallerVolumeMounts(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumeMounts[] | cdktf.IResolvable) {
    this._installerVolumeMounts.internalValue = value;
  }
  public resetInstallerVolumeMounts() {
    this._installerVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerVolumeMountsInput() {
    return this._installerVolumeMounts.internalValue;
  }

  // installer_volumes - computed: false, optional: true, required: false
  private _installerVolumes = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumesList(this, "installer_volumes", false);
  public get installerVolumes() {
    return this._installerVolumes;
  }
  public putInstallerVolumes(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigInstallerVolumes[] | cdktf.IResolvable) {
    this._installerVolumes.internalValue = value;
  }
  public resetInstallerVolumes() {
    this._installerVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installerVolumesInput() {
    return this._installerVolumes.internalValue;
  }

  // os_native_repo - computed: false, optional: true, required: false
  private _osNativeRepo?: string; 
  public get osNativeRepo() {
    return this.getStringAttribute('os_native_repo');
  }
  public set osNativeRepo(value: string) {
    this._osNativeRepo = value;
  }
  public resetOsNativeRepo() {
    this._osNativeRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNativeRepoInput() {
    return this._osNativeRepo;
  }

  // payload_image - computed: false, optional: false, required: true
  private _payloadImage?: string; 
  public get payloadImage() {
    return this.getStringAttribute('payload_image');
  }
  public set payloadImage(value: string) {
    this._payloadImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadImageInput() {
    return this._payloadImage;
  }

  // post_uninstall - computed: false, optional: true, required: false
  private _postUninstall = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstallOutputReference(this, "post_uninstall");
  public get postUninstall() {
    return this._postUninstall;
  }
  public putPostUninstall(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPostUninstall) {
    this._postUninstall.internalValue = value;
  }
  public resetPostUninstall() {
    this._postUninstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postUninstallInput() {
    return this._postUninstall.internalValue;
  }

  // pre_install - computed: false, optional: true, required: false
  private _preInstall = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstallOutputReference(this, "pre_install");
  public get preInstall() {
    return this._preInstall;
  }
  public putPreInstall(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigPreInstall) {
    this._preInstall.internalValue = value;
  }
  public resetPreInstall() {
    this._preInstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInstallInput() {
    return this._preInstall.internalValue;
  }

  // runtime_classes - computed: false, optional: true, required: false
  private _runtimeClasses = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClassesList(this, "runtime_classes", false);
  public get runtimeClasses() {
    return this._runtimeClasses;
  }
  public putRuntimeClasses(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigRuntimeClasses[] | cdktf.IResolvable) {
    this._runtimeClasses.internalValue = value;
  }
  public resetRuntimeClasses() {
    this._runtimeClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeClassesInput() {
    return this._runtimeClasses.internalValue;
  }

  // runtime_image - computed: false, optional: true, required: false
  private _runtimeImage?: string; 
  public get runtimeImage() {
    return this.getStringAttribute('runtime_image');
  }
  public set runtimeImage(value: string) {
    this._runtimeImage = value;
  }
  public resetRuntimeImage() {
    this._runtimeImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeImageInput() {
    return this._runtimeImage;
  }

  // uninstall_cmd - computed: false, optional: true, required: false
  private _uninstallCmd?: string[]; 
  public get uninstallCmd() {
    return this.getListAttribute('uninstall_cmd');
  }
  public set uninstallCmd(value: string[]) {
    this._uninstallCmd = value;
  }
  public resetUninstallCmd() {
    this._uninstallCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallCmdInput() {
    return this._uninstallCmd;
  }

  // uninstall_done_label - computed: false, optional: true, required: false
  private _uninstallDoneLabel?: { [key: string]: string }; 
  public get uninstallDoneLabel() {
    return this.getStringMapAttribute('uninstall_done_label');
  }
  public set uninstallDoneLabel(value: { [key: string]: string }) {
    this._uninstallDoneLabel = value;
  }
  public resetUninstallDoneLabel() {
    this._uninstallDoneLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uninstallDoneLabelInput() {
    return this._uninstallDoneLabel;
  }
}
export interface DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpec {
  /**
  * CcNodeSelector is used to select the worker nodes to deploy the runtime if not specified, all worker nodes are selected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#cc_node_selector DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#cc_node_selector}
  */
  readonly ccNodeSelector?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelector;
  /**
  * CcInstallConfig is a placeholder struct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#config DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#config}
  */
  readonly config: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/confidentialcontainers_org_cc_runtime_v1beta1_manifest#runtime_name DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1Manifest#runtime_name}
  */
  readonly runtimeName: string;
}

export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecToTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cc_node_selector: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorToTerraform(struct!.ccNodeSelector),
    config: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigToTerraform(struct!.config),
    runtime_name: cdktf.stringToTerraform(struct!.runtimeName),
  }
}


export function dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cc_node_selector: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorToHclTerraform(struct!.ccNodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelector",
    },
    config: {
      value: dataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig",
    },
    runtime_name: {
      value: cdktf.stringToHclTerraform(struct!.runtimeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ccNodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccNodeSelector = this._ccNodeSelector?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._runtimeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeName = this._runtimeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ccNodeSelector.internalValue = undefined;
      this._config.internalValue = undefined;
      this._runtimeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ccNodeSelector.internalValue = value.ccNodeSelector;
      this._config.internalValue = value.config;
      this._runtimeName = value.runtimeName;
    }
  }

  // cc_node_selector - computed: false, optional: true, required: false
  private _ccNodeSelector = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelectorOutputReference(this, "cc_node_selector");
  public get ccNodeSelector() {
    return this._ccNodeSelector;
  }
  public putCcNodeSelector(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecCcNodeSelector) {
    this._ccNodeSelector.internalValue = value;
  }
  public resetCcNodeSelector() {
    this._ccNodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccNodeSelectorInput() {
    return this._ccNodeSelector.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SConfidentialcontainersOrgCcRuntimeV1Beta1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // runtime_name - computed: false, optional: false, required: true
  private _runtimeName?: string; 
  public get runtimeName() {
    return this.getStringAttribute('runtime_name');
  }
  public set runtimeName(value: string) {
    this._runtimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeNameInput() {
    return this._runtimeName;
  }
}
