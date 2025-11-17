import * as cdktf from 'cdktf';
import { DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectory,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelm,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomize,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestination,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferences,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesList,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfo,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoList,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadata,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGenerators,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsList,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferences,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesList,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFields,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategy,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyOutputReference,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicy,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyToTerraform,
dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyToHclTerraform,
DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyOutputReference } from './structs2800'
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#array DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#map DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#string DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#env DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#path DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
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

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#code DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
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

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#code DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
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

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
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
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ext_vars DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ext_vars}
  */
  readonly extVars?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#libs DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#tlas DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#tlas}
  */
  readonly tlas?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_vars: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsToTerraform, false)(struct!.extVars),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    tlas: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasToTerraform, false)(struct!.tlas),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_vars: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsToHclTerraform, false)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tlas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasToHclTerraform, false)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extVars.internalValue = undefined;
      this._libs = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extVars.internalValue = value.extVars;
      this._libs = value.libs;
      this._tlas.internalValue = value.tlas;
    }
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#exclude DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#include DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#include}
  */
  readonly include?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#jsonnet DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#recurse DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    jsonnet: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetToTerraform(struct!.jsonnet),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._jsonnet.internalValue = undefined;
      this._recurse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._jsonnet.internalValue = value.jsonnet;
      this._recurse = value.recurse;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#path DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#force_string DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
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

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
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
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#file_parameters DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#file_parameters}
  */
  readonly fileParameters?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ignore_missing_value_files DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#pass_credentials DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#release_name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#skip_crds DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value_files DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#values DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#values}
  */
  readonly values?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#values_object DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#version DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersToTerraform, false)(struct!.fileParameters),
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersToTerraform, false)(struct!.parameters),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersToHclTerraform, false)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersList",
    },
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersList",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._parameters.internalValue = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = value.fileParameters;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._parameters.internalValue = value.parameters;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
    }
  }

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
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
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#annotation_selector DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#group DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#label_selector DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#version DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
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

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#options DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#patch DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#path DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#target DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
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
    target: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
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

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
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

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#count DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#count}
  */
  readonly count: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#common_annotations DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#common_annotations_envsubst DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#common_annotations_envsubst}
  */
  readonly commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#common_labels DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#components DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#force_common_annotations DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#force_common_labels DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#images DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#images}
  */
  readonly images?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#label_without_selector DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#label_without_selector}
  */
  readonly labelWithoutSelector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name_prefix DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name_suffix DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#patches DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#replicas DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#replicas}
  */
  readonly replicas?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#version DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_annotations_envsubst: cdktf.booleanToTerraform(struct!.commonAnnotationsEnvsubst),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    label_without_selector: cdktf.booleanToTerraform(struct!.labelWithoutSelector),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patches: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesToTerraform, false)(struct!.patches),
    replicas: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasToTerraform, false)(struct!.replicas),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_annotations_envsubst: {
      value: cdktf.booleanToHclTerraform(struct!.commonAnnotationsEnvsubst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_without_selector: {
      value: cdktf.booleanToHclTerraform(struct!.labelWithoutSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesList",
    },
    replicas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasToHclTerraform, false)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasList",
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonAnnotationsEnvsubst !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotationsEnvsubst = this._commonAnnotationsEnvsubst;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labelWithoutSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWithoutSelector = this._labelWithoutSelector;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonAnnotationsEnvsubst = undefined;
      this._commonLabels = undefined;
      this._components = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._labelWithoutSelector = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._namespace = undefined;
      this._patches.internalValue = undefined;
      this._replicas.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonAnnotationsEnvsubst = value.commonAnnotationsEnvsubst;
      this._commonLabels = value.commonLabels;
      this._components = value.components;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._labelWithoutSelector = value.labelWithoutSelector;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._namespace = value.namespace;
      this._patches.internalValue = value.patches;
      this._replicas.internalValue = value.replicas;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_annotations_envsubst - computed: false, optional: true, required: false
  private _commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable; 
  public get commonAnnotationsEnvsubst() {
    return this.getBooleanAttribute('common_annotations_envsubst');
  }
  public set commonAnnotationsEnvsubst(value: boolean | cdktf.IResolvable) {
    this._commonAnnotationsEnvsubst = value;
  }
  public resetCommonAnnotationsEnvsubst() {
    this._commonAnnotationsEnvsubst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsEnvsubstInput() {
    return this._commonAnnotationsEnvsubst;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // label_without_selector - computed: false, optional: true, required: false
  private _labelWithoutSelector?: boolean | cdktf.IResolvable; 
  public get labelWithoutSelector() {
    return this.getBooleanAttribute('label_without_selector');
  }
  public set labelWithoutSelector(value: boolean | cdktf.IResolvable) {
    this._labelWithoutSelector = value;
  }
  public resetLabelWithoutSelector() {
    this._labelWithoutSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWithoutSelectorInput() {
    return this._labelWithoutSelector;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
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
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#value DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#array DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#map DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#string DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#env DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#name DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#path DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
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

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesPlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesOutputReference {
    return new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#allow_empty DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#prune DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#self_heal DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#annotations DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#labels DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#duration DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#factor DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#factor}
  */
  readonly factor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#max_duration DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#max_duration}
  */
  readonly maxDuration?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.numberToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
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

  // factor - computed: false, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#backoff DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#backoff}
  */
  readonly backoff?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#limit DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#limit}
  */
  readonly limit?: number;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoff.internalValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoff.internalValue = value.backoff;
      this._limit = value.limit;
    }
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#automated DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#automated}
  */
  readonly automated?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#managed_namespace_metadata DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#retry DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#retry}
  */
  readonly retry?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#sync_options DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#sync_options}
  */
  readonly syncOptions?: string[];
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated",
    },
    managed_namespace_metadata: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata",
    },
    retry: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry",
    },
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._syncOptions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
      this._syncOptions = value.syncOptions;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#destination DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#destination}
  */
  readonly destination: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ignore_differences DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ignore_differences}
  */
  readonly ignoreDifferences?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#info DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#info}
  */
  readonly info?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#project DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#revision_history_limit DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#source DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#sources DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#sync_policy DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#sync_policy}
  */
  readonly syncPolicy?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_differences: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesToTerraform, false)(struct!.ignoreDifferences),
    info: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoToTerraform, false)(struct!.info),
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    source: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceToTerraform(struct!.source),
    sources: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesToTerraform, false)(struct!.sources),
    sync_policy: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestination",
    },
    ignore_differences: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesToHclTerraform, false)(struct!.ignoreDifferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesList",
    },
    info: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoToHclTerraform, false)(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesList",
    },
    sync_policy: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifferences = this._ignoreDifferences?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifferences.internalValue = undefined;
      this._info.internalValue = undefined;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._source.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._ignoreDifferences.internalValue = value.ignoreDifferences;
      this._info.internalValue = value.info;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._source.internalValue = value.source;
      this._sources.internalValue = value.sources;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_differences - computed: false, optional: true, required: false
  private _ignoreDifferences = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferencesList(this, "ignore_differences", false);
  public get ignoreDifferences() {
    return this._ignoreDifferences;
  }
  public putIgnoreDifferences(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecIgnoreDifferences[] | cdktf.IResolvable) {
    this._ignoreDifferences.internalValue = value;
  }
  public resetIgnoreDifferences() {
    this._ignoreDifferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferencesInput() {
    return this._ignoreDifferences.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#metadata DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#spec DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#apply_nested_selectors DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#apply_nested_selectors}
  */
  readonly applyNestedSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#generators DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#generators}
  */
  readonly generators: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGenerators[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#go_template DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#go_template}
  */
  readonly goTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#go_template_options DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#go_template_options}
  */
  readonly goTemplateOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#ignore_application_differences DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#ignore_application_differences}
  */
  readonly ignoreApplicationDifferences?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferences[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#preserved_fields DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#preserved_fields}
  */
  readonly preservedFields?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFields;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#strategy DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#strategy}
  */
  readonly strategy?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#sync_policy DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#sync_policy}
  */
  readonly syncPolicy?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#template DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#template}
  */
  readonly template: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/argoproj_io_application_set_v1alpha1_manifest#template_patch DataK8SArgoprojIoApplicationSetV1Alpha1Manifest#template_patch}
  */
  readonly templatePatch?: string;
}

export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecToTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_nested_selectors: cdktf.booleanToTerraform(struct!.applyNestedSelectors),
    generators: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsToTerraform, false)(struct!.generators),
    go_template: cdktf.booleanToTerraform(struct!.goTemplate),
    go_template_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.goTemplateOptions),
    ignore_application_differences: cdktf.listMapper(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesToTerraform, false)(struct!.ignoreApplicationDifferences),
    preserved_fields: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsToTerraform(struct!.preservedFields),
    strategy: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyToTerraform(struct!.strategy),
    sync_policy: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyToTerraform(struct!.syncPolicy),
    template: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateToTerraform(struct!.template),
    template_patch: cdktf.stringToTerraform(struct!.templatePatch),
  }
}


export function dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_nested_selectors: {
      value: cdktf.booleanToHclTerraform(struct!.applyNestedSelectors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generators: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsToHclTerraform, false)(struct!.generators),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsList",
    },
    go_template: {
      value: cdktf.booleanToHclTerraform(struct!.goTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    go_template_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.goTemplateOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_application_differences: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesToHclTerraform, false)(struct!.ignoreApplicationDifferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesList",
    },
    preserved_fields: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsToHclTerraform(struct!.preservedFields),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFields",
    },
    strategy: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategy",
    },
    sync_policy: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicy",
    },
    template: {
      value: dataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate",
    },
    template_patch: {
      value: cdktf.stringToHclTerraform(struct!.templatePatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyNestedSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyNestedSelectors = this._applyNestedSelectors;
    }
    if (this._generators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generators = this._generators?.internalValue;
    }
    if (this._goTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.goTemplate = this._goTemplate;
    }
    if (this._goTemplateOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.goTemplateOptions = this._goTemplateOptions;
    }
    if (this._ignoreApplicationDifferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreApplicationDifferences = this._ignoreApplicationDifferences?.internalValue;
    }
    if (this._preservedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preservedFields = this._preservedFields?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templatePatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePatch = this._templatePatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyNestedSelectors = undefined;
      this._generators.internalValue = undefined;
      this._goTemplate = undefined;
      this._goTemplateOptions = undefined;
      this._ignoreApplicationDifferences.internalValue = undefined;
      this._preservedFields.internalValue = undefined;
      this._strategy.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templatePatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyNestedSelectors = value.applyNestedSelectors;
      this._generators.internalValue = value.generators;
      this._goTemplate = value.goTemplate;
      this._goTemplateOptions = value.goTemplateOptions;
      this._ignoreApplicationDifferences.internalValue = value.ignoreApplicationDifferences;
      this._preservedFields.internalValue = value.preservedFields;
      this._strategy.internalValue = value.strategy;
      this._syncPolicy.internalValue = value.syncPolicy;
      this._template.internalValue = value.template;
      this._templatePatch = value.templatePatch;
    }
  }

  // apply_nested_selectors - computed: false, optional: true, required: false
  private _applyNestedSelectors?: boolean | cdktf.IResolvable; 
  public get applyNestedSelectors() {
    return this.getBooleanAttribute('apply_nested_selectors');
  }
  public set applyNestedSelectors(value: boolean | cdktf.IResolvable) {
    this._applyNestedSelectors = value;
  }
  public resetApplyNestedSelectors() {
    this._applyNestedSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyNestedSelectorsInput() {
    return this._applyNestedSelectors;
  }

  // generators - computed: false, optional: false, required: true
  private _generators = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGeneratorsList(this, "generators", false);
  public get generators() {
    return this._generators;
  }
  public putGenerators(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecGenerators[] | cdktf.IResolvable) {
    this._generators.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorsInput() {
    return this._generators.internalValue;
  }

  // go_template - computed: false, optional: true, required: false
  private _goTemplate?: boolean | cdktf.IResolvable; 
  public get goTemplate() {
    return this.getBooleanAttribute('go_template');
  }
  public set goTemplate(value: boolean | cdktf.IResolvable) {
    this._goTemplate = value;
  }
  public resetGoTemplate() {
    this._goTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goTemplateInput() {
    return this._goTemplate;
  }

  // go_template_options - computed: false, optional: true, required: false
  private _goTemplateOptions?: string[]; 
  public get goTemplateOptions() {
    return this.getListAttribute('go_template_options');
  }
  public set goTemplateOptions(value: string[]) {
    this._goTemplateOptions = value;
  }
  public resetGoTemplateOptions() {
    this._goTemplateOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goTemplateOptionsInput() {
    return this._goTemplateOptions;
  }

  // ignore_application_differences - computed: false, optional: true, required: false
  private _ignoreApplicationDifferences = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferencesList(this, "ignore_application_differences", false);
  public get ignoreApplicationDifferences() {
    return this._ignoreApplicationDifferences;
  }
  public putIgnoreApplicationDifferences(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecIgnoreApplicationDifferences[] | cdktf.IResolvable) {
    this._ignoreApplicationDifferences.internalValue = value;
  }
  public resetIgnoreApplicationDifferences() {
    this._ignoreApplicationDifferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreApplicationDifferencesInput() {
    return this._ignoreApplicationDifferences.internalValue;
  }

  // preserved_fields - computed: false, optional: true, required: false
  private _preservedFields = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFieldsOutputReference(this, "preserved_fields");
  public get preservedFields() {
    return this._preservedFields;
  }
  public putPreservedFields(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecPreservedFields) {
    this._preservedFields.internalValue = value;
  }
  public resetPreservedFields() {
    this._preservedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preservedFieldsInput() {
    return this._preservedFields.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SArgoprojIoApplicationSetV1Alpha1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_patch - computed: false, optional: true, required: false
  private _templatePatch?: string; 
  public get templatePatch() {
    return this.getStringAttribute('template_patch');
  }
  public set templatePatch(value: string) {
    this._templatePatch = value;
  }
  public resetTemplatePatch() {
    this._templatePatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePatchInput() {
    return this._templatePatch;
  }
}
