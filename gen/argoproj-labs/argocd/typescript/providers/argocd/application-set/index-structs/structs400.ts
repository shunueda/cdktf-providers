import * as cdktf from 'cdktf';
import { ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter,
applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToTerraform,
applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterList,
ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory,
applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToTerraform,
applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryOutputReference,
ApplicationSetSpecGeneratorMatrixTemplateSpecDestination,
applicationSetSpecGeneratorMatrixTemplateSpecDestinationToTerraform,
applicationSetSpecGeneratorMatrixTemplateSpecDestinationToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationOutputReference,
ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference,
applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToTerraform,
applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceList,
ApplicationSetSpecGeneratorMatrixTemplateSpecInfo,
applicationSetSpecGeneratorMatrixTemplateSpecInfoToTerraform,
applicationSetSpecGeneratorMatrixTemplateSpecInfoToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateSpecInfoList,
ApplicationSetSpecGeneratorMatrixTemplateMetadata,
applicationSetSpecGeneratorMatrixTemplateMetadataToTerraform,
applicationSetSpecGeneratorMatrixTemplateMetadataToHclTerraform,
ApplicationSetSpecGeneratorMatrixTemplateMetadataOutputReference } from './structs0'
import { ApplicationSetSpecGenerator,
applicationSetSpecGeneratorToTerraform,
applicationSetSpecGeneratorToHclTerraform,
ApplicationSetSpecGeneratorList } from './structs800'
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
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

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
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
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
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

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize): any {
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
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
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

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
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

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
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

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
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

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrixTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff): any {
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
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
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
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
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

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrixTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorMatrixTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorMatrixTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorMatrixTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorMatrixTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorMatrixTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorMatrixTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateSpecOutputReference | ApplicationSetSpecGeneratorMatrixTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    destination: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorMatrixTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorMatrixTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorMatrixTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorMatrixTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorMatrixTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorMatrixTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorMatrixTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecGeneratorMatrixTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorMatrixTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorMatrixTemplateSpec;
}

export function applicationSetSpecGeneratorMatrixTemplateToTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateOutputReference | ApplicationSetSpecGeneratorMatrixTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorMatrixTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorMatrixTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorMatrixTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrixTemplateOutputReference | ApplicationSetSpecGeneratorMatrixTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorMatrixTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorMatrixTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMatrixTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMatrixTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorMatrixTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorMatrixTemplateMetadata) {
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
  private _spec = new ApplicationSetSpecGeneratorMatrixTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorMatrixTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMatrix {
  /**
  * generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#generator ApplicationSet#generator}
  */
  readonly generator: ApplicationSetSpecGenerator[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorMatrixTemplate;
}

export function applicationSetSpecGeneratorMatrixToTerraform(struct?: ApplicationSetSpecGeneratorMatrix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generator: cdktf.listMapper(applicationSetSpecGeneratorToTerraform, true)(struct!.generator),
    template: applicationSetSpecGeneratorMatrixTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorMatrixToHclTerraform(struct?: ApplicationSetSpecGeneratorMatrix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generator: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorToHclTerraform, true)(struct!.generator),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorList",
    },
    template: {
      value: applicationSetSpecGeneratorMatrixTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMatrixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMatrix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generator = this._generator?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMatrix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generator.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generator.internalValue = value.generator;
      this._template.internalValue = value.template;
    }
  }

  // generator - computed: false, optional: false, required: true
  private _generator = new ApplicationSetSpecGeneratorList(this, "generator", false);
  public get generator() {
    return this._generator;
  }
  public putGenerator(value: ApplicationSetSpecGenerator[] | cdktf.IResolvable) {
    this._generator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorInput() {
    return this._generator.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorMatrixTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorMatrixTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMatrixList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMatrix[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMatrixOutputReference {
    return new ApplicationSetSpecGeneratorMatrixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorMergeTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateMetadataOutputReference | ApplicationSetSpecGeneratorMergeTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorMergeTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateMetadataOutputReference | ApplicationSetSpecGeneratorMergeTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorMergeTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecDestination): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecDestination): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecDestination | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
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

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory): any {
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
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory | undefined {
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
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
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

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
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

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
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
      value: applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
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

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize): any {
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
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
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

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
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

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorMergeTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorMergeTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
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

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
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

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorMergeTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorMergeTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMergeTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorMergeTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff): any {
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
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
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
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
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

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMergeTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorMergeTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorMergeTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorMergeTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorMergeTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorMergeTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorMergeTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorMergeTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateSpecOutputReference | ApplicationSetSpecGeneratorMergeTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    destination: {
      value: applicationSetSpecGeneratorMergeTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorMergeTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorMergeTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorMergeTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorMergeTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorMergeTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorMergeTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorMergeTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorMergeTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorMergeTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecGeneratorMergeTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorMergeTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorMergeTemplateSpec;
}

export function applicationSetSpecGeneratorMergeTemplateToTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateOutputReference | ApplicationSetSpecGeneratorMergeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorMergeTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorMergeTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorMergeTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorMergeTemplateOutputReference | ApplicationSetSpecGeneratorMergeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorMergeTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorMergeTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorMergeTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorMergeTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorMergeTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorMergeTemplateMetadata) {
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
  private _spec = new ApplicationSetSpecGeneratorMergeTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorMergeTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorMerge {
  /**
  * Keys to merge into resulting parameter set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#merge_keys ApplicationSet#merge_keys}
  */
  readonly mergeKeys: string[];
  /**
  * generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#generator ApplicationSet#generator}
  */
  readonly generator: ApplicationSetSpecGenerator[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorMergeTemplate;
}

export function applicationSetSpecGeneratorMergeToTerraform(struct?: ApplicationSetSpecGeneratorMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    merge_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mergeKeys),
    generator: cdktf.listMapper(applicationSetSpecGeneratorToTerraform, true)(struct!.generator),
    template: applicationSetSpecGeneratorMergeTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorMergeToHclTerraform(struct?: ApplicationSetSpecGeneratorMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    merge_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mergeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    generator: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorToHclTerraform, true)(struct!.generator),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorList",
    },
    template: {
      value: applicationSetSpecGeneratorMergeTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorMergeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorMerge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mergeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeKeys = this._mergeKeys;
    }
    if (this._generator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generator = this._generator?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorMerge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mergeKeys = undefined;
      this._generator.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mergeKeys = value.mergeKeys;
      this._generator.internalValue = value.generator;
      this._template.internalValue = value.template;
    }
  }

  // merge_keys - computed: false, optional: false, required: true
  private _mergeKeys?: string[]; 
  public get mergeKeys() {
    return this.getListAttribute('merge_keys');
  }
  public set mergeKeys(value: string[]) {
    this._mergeKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeKeysInput() {
    return this._mergeKeys;
  }

  // generator - computed: false, optional: false, required: true
  private _generator = new ApplicationSetSpecGeneratorList(this, "generator", false);
  public get generator() {
    return this._generator;
  }
  public putGenerator(value: ApplicationSetSpecGenerator[] | cdktf.IResolvable) {
    this._generator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generatorInput() {
    return this._generator.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorMergeTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorMergeTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorMergeList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorMerge[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorMergeOutputReference {
    return new ApplicationSetSpecGeneratorMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginInput {
  /**
  * Arbitrary key-value pairs which are passed directly as parameters to the plugin. A current limitation is that this cannot fully express the parameters that can be accepted by the plugin generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameters ApplicationSet#parameters}
  */
  readonly parameters: { [key: string]: string };
}

export function applicationSetSpecGeneratorPluginInputToTerraform(struct?: ApplicationSetSpecGeneratorPluginInputOutputReference | ApplicationSetSpecGeneratorPluginInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function applicationSetSpecGeneratorPluginInputToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginInputOutputReference | ApplicationSetSpecGeneratorPluginInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
    }
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorPluginTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateMetadataOutputReference | ApplicationSetSpecGeneratorPluginTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorPluginTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateMetadataOutputReference | ApplicationSetSpecGeneratorPluginTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorPluginTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecDestination): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecDestination): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecDestination | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
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

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory): any {
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
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory | undefined {
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
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
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

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
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

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
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
      value: applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
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

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize): any {
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
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
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

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
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

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorPluginTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorPluginTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
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

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
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

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorPluginTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorPluginTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPluginTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorPluginTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff): any {
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
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
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
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
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

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPluginTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorPluginTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorPluginTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorPluginTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorPluginTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorPluginTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorPluginTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorPluginTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateSpecOutputReference | ApplicationSetSpecGeneratorPluginTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    destination: {
      value: applicationSetSpecGeneratorPluginTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorPluginTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorPluginTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorPluginTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorPluginTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorPluginTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorPluginTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorPluginTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorPluginTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorPluginTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecGeneratorPluginTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorPluginTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorPluginTemplateSpec;
}

export function applicationSetSpecGeneratorPluginTemplateToTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateOutputReference | ApplicationSetSpecGeneratorPluginTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorPluginTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorPluginTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorPluginTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorPluginTemplateOutputReference | ApplicationSetSpecGeneratorPluginTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorPluginTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorPluginTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPluginTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPluginTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorPluginTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorPluginTemplateMetadata) {
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
  private _spec = new ApplicationSetSpecGeneratorPluginTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorPluginTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPlugin {
  /**
  * ConfigMap with the plugin configuration needed to retrieve the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#config_map_ref ApplicationSet#config_map_ref}
  */
  readonly configMapRef: string;
  /**
  * How often to check for changes (in seconds). Default: 3min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#requeue_after_seconds ApplicationSet#requeue_after_seconds}
  */
  readonly requeueAfterSeconds?: string;
  /**
  * Arbitrary string key-value pairs to pass to the template via the values field of the git generator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: { [key: string]: string };
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#input ApplicationSet#input}
  */
  readonly input?: ApplicationSetSpecGeneratorPluginInput;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorPluginTemplate;
}

export function applicationSetSpecGeneratorPluginToTerraform(struct?: ApplicationSetSpecGeneratorPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: cdktf.stringToTerraform(struct!.configMapRef),
    requeue_after_seconds: cdktf.stringToTerraform(struct!.requeueAfterSeconds),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    input: applicationSetSpecGeneratorPluginInputToTerraform(struct!.input),
    template: applicationSetSpecGeneratorPluginTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorPluginToHclTerraform(struct?: ApplicationSetSpecGeneratorPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: cdktf.stringToHclTerraform(struct!.configMapRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requeue_after_seconds: {
      value: cdktf.stringToHclTerraform(struct!.requeueAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    input: {
      value: applicationSetSpecGeneratorPluginInputToHclTerraform(struct!.input),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginInputList",
    },
    template: {
      value: applicationSetSpecGeneratorPluginTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef;
    }
    if (this._requeueAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueAfterSeconds = this._requeueAfterSeconds;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._input?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef = undefined;
      this._requeueAfterSeconds = undefined;
      this._values = undefined;
      this._input.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef = value.configMapRef;
      this._requeueAfterSeconds = value.requeueAfterSeconds;
      this._values = value.values;
      this._input.internalValue = value.input;
      this._template.internalValue = value.template;
    }
  }

  // config_map_ref - computed: false, optional: false, required: true
  private _configMapRef?: string; 
  public get configMapRef() {
    return this.getStringAttribute('config_map_ref');
  }
  public set configMapRef(value: string) {
    this._configMapRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef;
  }

  // requeue_after_seconds - computed: false, optional: true, required: false
  private _requeueAfterSeconds?: string; 
  public get requeueAfterSeconds() {
    return this.getStringAttribute('requeue_after_seconds');
  }
  public set requeueAfterSeconds(value: string) {
    this._requeueAfterSeconds = value;
  }
  public resetRequeueAfterSeconds() {
    this._requeueAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueAfterSecondsInput() {
    return this._requeueAfterSeconds;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // input - computed: false, optional: true, required: false
  private _input = new ApplicationSetSpecGeneratorPluginInputOutputReference(this, "input");
  public get input() {
    return this._input;
  }
  public putInput(value: ApplicationSetSpecGeneratorPluginInput) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorPluginTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorPluginTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPluginList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPlugin[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPluginOutputReference {
    return new ApplicationSetSpecGeneratorPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef): any {
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

export class ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth {
  /**
  * Username for Basic auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#username ApplicationSet#username}
  */
  readonly username?: string;
  /**
  * password_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#password_ref ApplicationSet#password_ref}
  */
  readonly passwordRef?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef;
}

export function applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password_ref: applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefToTerraform(struct!.passwordRef),
  }
}


export function applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_ref: {
      value: applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefToHclTerraform(struct!.passwordRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._passwordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._passwordRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._passwordRef.internalValue = value.passwordRef;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password_ref - computed: false, optional: true, required: false
  private _passwordRef = new ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRefOutputReference(this, "password_ref");
  public get passwordRef() {
    return this._passwordRef;
  }
  public putPasswordRef(value: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthPasswordRef) {
    this._passwordRef.internalValue = value;
  }
  public resetPasswordRef() {
    this._passwordRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestBitbucketServer {
  /**
  * The Bitbucket REST API URL to talk to e.g. https://bitbucket.org/rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api: string;
  /**
  * Project to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project: string;
  /**
  * Repo name to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo ApplicationSet#repo}
  */
  readonly repo: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#basic_auth ApplicationSet#basic_auth}
  */
  readonly basicAuth?: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth;
}

export function applicationSetSpecGeneratorPullRequestBitbucketServerToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    project: cdktf.stringToTerraform(struct!.project),
    repo: cdktf.stringToTerraform(struct!.repo),
    basic_auth: applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function applicationSetSpecGeneratorPullRequestBitbucketServerToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestBitbucketServerOutputReference | ApplicationSetSpecGeneratorPullRequestBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: applicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestBitbucketServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestBitbucketServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestBitbucketServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._project = undefined;
      this._repo = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._project = value.project;
      this._repo = value.repo;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
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

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ApplicationSetSpecGeneratorPullRequestBitbucketServerBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestFilter {
  /**
  * A regex which must match the branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#branch_match ApplicationSet#branch_match}
  */
  readonly branchMatch?: string;
}

export function applicationSetSpecGeneratorPullRequestFilterToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_match: cdktf.stringToTerraform(struct!.branchMatch),
  }
}


export function applicationSetSpecGeneratorPullRequestFilterToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_match: {
      value: cdktf.stringToHclTerraform(struct!.branchMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchMatch = this._branchMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchMatch = value.branchMatch;
    }
  }

  // branch_match - computed: false, optional: true, required: false
  private _branchMatch?: string; 
  public get branchMatch() {
    return this.getStringAttribute('branch_match');
  }
  public set branchMatch(value: string) {
    this._branchMatch = value;
  }
  public resetBranchMatch() {
    this._branchMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchMatchInput() {
    return this._branchMatch;
  }
}

export class ApplicationSetSpecGeneratorPullRequestFilterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestFilter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestFilterOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGiteaTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorPullRequestGiteaTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGiteaTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGiteaTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorPullRequestGiteaTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGiteaTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGiteaTokenRef): any {
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

export class ApplicationSetSpecGeneratorPullRequestGiteaTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGiteaTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGiteaTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGitea {
  /**
  * The Gitea API URL to talk to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api: string;
  /**
  * Allow insecure tls, for self-signed certificates; default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#insecure ApplicationSet#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Gitea org or user to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#owner ApplicationSet#owner}
  */
  readonly owner: string;
  /**
  * Gitea repo name to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo ApplicationSet#repo}
  */
  readonly repo: string;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorPullRequestGiteaTokenRef;
}

export function applicationSetSpecGeneratorPullRequestGiteaToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGiteaOutputReference | ApplicationSetSpecGeneratorPullRequestGitea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    owner: cdktf.stringToTerraform(struct!.owner),
    repo: cdktf.stringToTerraform(struct!.repo),
    token_ref: applicationSetSpecGeneratorPullRequestGiteaTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorPullRequestGiteaToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGiteaOutputReference | ApplicationSetSpecGeneratorPullRequestGitea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ref: {
      value: applicationSetSpecGeneratorPullRequestGiteaTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGiteaTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestGiteaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGitea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGitea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._insecure = undefined;
      this._owner = undefined;
      this._repo = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._insecure = value.insecure;
      this._owner = value.owner;
      this._repo = value.repo;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorPullRequestGiteaTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorPullRequestGiteaTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGithubTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorPullRequestGithubTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGithubTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGithubTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorPullRequestGithubTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGithubTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGithubTokenRef): any {
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

export class ApplicationSetSpecGeneratorPullRequestGithubTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGithubTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGithubTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGithub {
  /**
  * The GitHub API URL to talk to. Default https://api.github.com/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Reference to a GitHub App repo-creds secret with permission to access pull requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#app_secret_name ApplicationSet#app_secret_name}
  */
  readonly appSecretName?: string;
  /**
  * Labels is used to filter the PRs that you want to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: string[];
  /**
  * GitHub org or user to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#owner ApplicationSet#owner}
  */
  readonly owner: string;
  /**
  * GitHub repo name to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo ApplicationSet#repo}
  */
  readonly repo: string;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorPullRequestGithubTokenRef;
}

export function applicationSetSpecGeneratorPullRequestGithubToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGithubOutputReference | ApplicationSetSpecGeneratorPullRequestGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    app_secret_name: cdktf.stringToTerraform(struct!.appSecretName),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    owner: cdktf.stringToTerraform(struct!.owner),
    repo: cdktf.stringToTerraform(struct!.repo),
    token_ref: applicationSetSpecGeneratorPullRequestGithubTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorPullRequestGithubToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGithubOutputReference | ApplicationSetSpecGeneratorPullRequestGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.appSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ref: {
      value: applicationSetSpecGeneratorPullRequestGithubTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGithubTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._appSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretName = this._appSecretName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._appSecretName = undefined;
      this._labels = undefined;
      this._owner = undefined;
      this._repo = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._appSecretName = value.appSecretName;
      this._labels = value.labels;
      this._owner = value.owner;
      this._repo = value.repo;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // app_secret_name - computed: false, optional: true, required: false
  private _appSecretName?: string; 
  public get appSecretName() {
    return this.getStringAttribute('app_secret_name');
  }
  public set appSecretName(value: string) {
    this._appSecretName = value;
  }
  public resetAppSecretName() {
    this._appSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretNameInput() {
    return this._appSecretName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorPullRequestGithubTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorPullRequestGithubTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGitlabTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorPullRequestGitlabTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGitlabTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGitlabTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorPullRequestGitlabTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGitlabTokenRefOutputReference | ApplicationSetSpecGeneratorPullRequestGitlabTokenRef): any {
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

export class ApplicationSetSpecGeneratorPullRequestGitlabTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGitlabTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGitlabTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestGitlab {
  /**
  * The GitLab API URL to talk to. If blank, uses https://gitlab.com/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Labels is used to filter the PRs that you want to target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: string[];
  /**
  * GitLab project to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project: string;
  /**
  * additional MRs filter to get only those with a certain state. Default:  "" (all states).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pull_request_state ApplicationSet#pull_request_state}
  */
  readonly pullRequestState?: string;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorPullRequestGitlabTokenRef;
}

export function applicationSetSpecGeneratorPullRequestGitlabToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGitlabOutputReference | ApplicationSetSpecGeneratorPullRequestGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    project: cdktf.stringToTerraform(struct!.project),
    pull_request_state: cdktf.stringToTerraform(struct!.pullRequestState),
    token_ref: applicationSetSpecGeneratorPullRequestGitlabTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorPullRequestGitlabToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestGitlabOutputReference | ApplicationSetSpecGeneratorPullRequestGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request_state: {
      value: cdktf.stringToHclTerraform(struct!.pullRequestState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ref: {
      value: applicationSetSpecGeneratorPullRequestGitlabTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGitlabTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._pullRequestState !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequestState = this._pullRequestState;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._labels = undefined;
      this._project = undefined;
      this._pullRequestState = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._labels = value.labels;
      this._project = value.project;
      this._pullRequestState = value.pullRequestState;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // pull_request_state - computed: false, optional: true, required: false
  private _pullRequestState?: string; 
  public get pullRequestState() {
    return this.getStringAttribute('pull_request_state');
  }
  public set pullRequestState(value: string) {
    this._pullRequestState = value;
  }
  public resetPullRequestState() {
    this._pullRequestState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestStateInput() {
    return this._pullRequestState;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorPullRequestGitlabTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorPullRequestGitlabTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateMetadataOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateMetadataOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorPullRequestTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla {
  /**
  * Determines whether the variable should be evaluated as jsonnet code or treated as string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#code ApplicationSet#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of Jsonnet variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#libs ApplicationSet#libs}
  */
  readonly libs?: string[];
  /**
  * ext_var block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ext_var ApplicationSet#ext_var}
  */
  readonly extVar?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_var: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVar = this._extVar?.internalValue;
    }
    if (this._tla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tla = this._tla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libs = undefined;
      this._extVar.internalValue = undefined;
      this._tla.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libs = value.libs;
      this._extVar.internalValue = value.extVar;
      this._tla.internalValue = value.tla;
    }
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

  // ext_var - computed: false, optional: true, required: false
  private _extVar = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
    this._extVar.internalValue = value;
  }
  public resetExtVar() {
    this._extVar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarInput() {
    return this._extVar.internalValue;
  }

  // tla - computed: false, optional: true, required: false
  private _tla = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
    this._tla.internalValue = value;
  }
  public resetTla() {
    this._tla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlaInput() {
    return this._tla.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation. This takes precedence over the `include` field. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{config.yaml,env-use2/*}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#exclude ApplicationSet#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation. If this field is set, only matching manifests will be included. To match multiple patterns, wrap the patterns in {} and separate them with commas. For example: '{*.yml,*.yaml}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include ApplicationSet#include}
  */
  readonly include?: string;
  /**
  * Whether to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#recurse ApplicationSet#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jsonnet ApplicationSet#jsonnet}
  */
  readonly jsonnet?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory): any {
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
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory | undefined {
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
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
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

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#force_string ApplicationSet#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_missing_value_files ApplicationSet#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pass_credentials ApplicationSet#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#release_name ApplicationSet#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#skip_crds ApplicationSet#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value_files ApplicationSet#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string;
  /**
  * The Helm version to use for templating. Accepts either `v2` or `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * file_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#file_parameter ApplicationSet#file_parameter}
  */
  readonly fileParameter?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameter = this._fileParameter?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameter.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameter.internalValue = value.fileParameter;
      this._parameter.internalValue = value.parameter;
    }
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

  // file_parameter - computed: false, optional: true, required: false
  private _fileParameter = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
    this._fileParameter.internalValue = value;
  }
  public resetFileParameter() {
    this._fileParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParameterInput() {
    return this._fileParameter.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget {
  /**
  * Annotation selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotation_selector ApplicationSet#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * Label selector to use when matching the Kubernetes resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_selector ApplicationSet#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kubernetes resource Version to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches {
  /**
  * Additional [options](https://kubectl.docs.kubernetes.io/references/kustomize/kustomization/patches/#name-and-kind-changes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#options ApplicationSet#options}
  */
  readonly options?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Inline Kustomize patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patch ApplicationSet#patch}
  */
  readonly patch?: string;
  /**
  * Path to a file containing the patch to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target ApplicationSet#target}
  */
  readonly target: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
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
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _options?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get options() {
    return this.getBooleanMapAttribute('options');
  }
  public set options(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
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

  // target - computed: false, optional: false, required: true
  private _target = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_annotations ApplicationSet#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#common_labels ApplicationSet#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * List of Kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#images ApplicationSet#images}
  */
  readonly images?: string[];
  /**
  * Prefix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_prefix ApplicationSet#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for Kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name_suffix ApplicationSet#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of Kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#version ApplicationSet#version}
  */
  readonly version?: string;
  /**
  * patches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#patches ApplicationSet#patches}
  */
  readonly patches?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
    patches: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize): any {
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
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patches: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
      this._patches.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
      this._patches.internalValue = value.patches;
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

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
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

  // patches - computed: false, optional: true, required: false
  private _patches = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin {
  /**
  * Name of the plugin. Only set the plugin name if the plugin is defined in `argocd-cm`. If the plugin is defined as a sidecar, omit the name. The plugin will be automatically matched with the Application according to the plugin's discovery rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#env ApplicationSet#env}
  */
  readonly env?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin): any {
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
    env: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._env.internalValue = value.env;
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

  // env - computed: false, optional: true, required: false
  private _env = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSource {
  /**
  * Helm chart name. Must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#chart ApplicationSet#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is supported in multi-source Applications since version 2.14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Directory path within the repository. Only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#path ApplicationSet#path}
  */
  readonly path?: string;
  /**
  * Reference to another `source` within defined sources. See associated documentation on [Helm value files from external Git repository](https://argo-cd.readthedocs.io/en/stable/user-guide/multiple_sources/#helm-value-files-from-external-git-repository) regarding combining `ref` with `path` and/or `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ref ApplicationSet#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (Git or Helm) that contains the application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repo_url ApplicationSet#repo_url}
  */
  readonly repoUrl?: string;
  /**
  * Revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#target_revision ApplicationSet#target_revision}
  */
  readonly targetRevision?: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#directory ApplicationSet#directory}
  */
  readonly directory?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
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

  // repo_url - computed: false, optional: true, required: false
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  public resetRepoUrl() {
    this._repoUrl = undefined;
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

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequestTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated {
  /**
  * Allows apps have zero live resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#allow_empty ApplicationSet#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#prune ApplicationSet#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Whether to revert resources back to their desired state upon modification in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#self_heal ApplicationSet#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Annotations to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to apply to the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#duration ApplicationSet#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#factor ApplicationSet#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed for the backoff strategy. Default unit is seconds, but could also be a duration (e.g. `2m`, `1h`), as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_duration ApplicationSet#max_duration}
  */
  readonly maxDuration?: string;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff): any {
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
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
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
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry {
  /**
  * Maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#limit ApplicationSet#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#backoff ApplicationSet#backoff}
  */
  readonly backoff?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy {
  /**
  * List of sync options. More info: https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_options ApplicationSet#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#automated ApplicationSet#automated}
  */
  readonly automated?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
    }
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

  // automated - computed: false, optional: true, required: false
  private _automated = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequestTemplateSpec {
  /**
  * The project the application belongs to. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project?: string;
  /**
  * Limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#revision_history_limit ApplicationSet#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#destination ApplicationSet#destination}
  */
  readonly destination?: ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorPullRequestTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorPullRequestTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorPullRequestTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateSpecOutputReference | ApplicationSetSpecGeneratorPullRequestTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    destination: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifference = this._ignoreDifference?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifference.internalValue = undefined;
      this._info.internalValue = undefined;
      this._source.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._ignoreDifference.internalValue = value.ignoreDifference;
      this._info.internalValue = value.info;
      this._source.internalValue = value.source;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
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

  // destination - computed: false, optional: true, required: false
  private _destination = new ApplicationSetSpecGeneratorPullRequestTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
    this._ignoreDifference.internalValue = value;
  }
  public resetIgnoreDifference() {
    this._ignoreDifference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferenceInput() {
    return this._ignoreDifference.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new ApplicationSetSpecGeneratorPullRequestTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorPullRequestTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecGeneratorPullRequestTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorPullRequestTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorPullRequestTemplateSpec;
}

export function applicationSetSpecGeneratorPullRequestTemplateToTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateOutputReference | ApplicationSetSpecGeneratorPullRequestTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorPullRequestTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorPullRequestTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorPullRequestTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequestTemplateOutputReference | ApplicationSetSpecGeneratorPullRequestTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorPullRequestTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorPullRequestTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorPullRequestTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequestTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ApplicationSetSpecGeneratorPullRequestTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorPullRequestTemplateMetadata) {
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
  private _spec = new ApplicationSetSpecGeneratorPullRequestTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorPullRequestTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorPullRequest {
  /**
  * How often to check for changes (in seconds). Default: 30min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#requeue_after_seconds ApplicationSet#requeue_after_seconds}
  */
  readonly requeueAfterSeconds?: string;
  /**
  * bitbucket_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#bitbucket_server ApplicationSet#bitbucket_server}
  */
  readonly bitbucketServer?: ApplicationSetSpecGeneratorPullRequestBitbucketServer;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#filter ApplicationSet#filter}
  */
  readonly filter?: ApplicationSetSpecGeneratorPullRequestFilter[] | cdktf.IResolvable;
  /**
  * gitea block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#gitea ApplicationSet#gitea}
  */
  readonly gitea?: ApplicationSetSpecGeneratorPullRequestGitea;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#github ApplicationSet#github}
  */
  readonly github?: ApplicationSetSpecGeneratorPullRequestGithub;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#gitlab ApplicationSet#gitlab}
  */
  readonly gitlab?: ApplicationSetSpecGeneratorPullRequestGitlab;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorPullRequestTemplate;
}

export function applicationSetSpecGeneratorPullRequestToTerraform(struct?: ApplicationSetSpecGeneratorPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requeue_after_seconds: cdktf.stringToTerraform(struct!.requeueAfterSeconds),
    bitbucket_server: applicationSetSpecGeneratorPullRequestBitbucketServerToTerraform(struct!.bitbucketServer),
    filter: cdktf.listMapper(applicationSetSpecGeneratorPullRequestFilterToTerraform, true)(struct!.filter),
    gitea: applicationSetSpecGeneratorPullRequestGiteaToTerraform(struct!.gitea),
    github: applicationSetSpecGeneratorPullRequestGithubToTerraform(struct!.github),
    gitlab: applicationSetSpecGeneratorPullRequestGitlabToTerraform(struct!.gitlab),
    template: applicationSetSpecGeneratorPullRequestTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorPullRequestToHclTerraform(struct?: ApplicationSetSpecGeneratorPullRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requeue_after_seconds: {
      value: cdktf.stringToHclTerraform(struct!.requeueAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bitbucket_server: {
      value: applicationSetSpecGeneratorPullRequestBitbucketServerToHclTerraform(struct!.bitbucketServer),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestBitbucketServerList",
    },
    filter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestFilterList",
    },
    gitea: {
      value: applicationSetSpecGeneratorPullRequestGiteaToHclTerraform(struct!.gitea),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGiteaList",
    },
    github: {
      value: applicationSetSpecGeneratorPullRequestGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGithubList",
    },
    gitlab: {
      value: applicationSetSpecGeneratorPullRequestGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestGitlabList",
    },
    template: {
      value: applicationSetSpecGeneratorPullRequestTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorPullRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorPullRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requeueAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueAfterSeconds = this._requeueAfterSeconds;
    }
    if (this._bitbucketServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketServer = this._bitbucketServer?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._gitea?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitea = this._gitea?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorPullRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requeueAfterSeconds = undefined;
      this._bitbucketServer.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._gitea.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requeueAfterSeconds = value.requeueAfterSeconds;
      this._bitbucketServer.internalValue = value.bitbucketServer;
      this._filter.internalValue = value.filter;
      this._gitea.internalValue = value.gitea;
      this._github.internalValue = value.github;
      this._gitlab.internalValue = value.gitlab;
      this._template.internalValue = value.template;
    }
  }

  // requeue_after_seconds - computed: false, optional: true, required: false
  private _requeueAfterSeconds?: string; 
  public get requeueAfterSeconds() {
    return this.getStringAttribute('requeue_after_seconds');
  }
  public set requeueAfterSeconds(value: string) {
    this._requeueAfterSeconds = value;
  }
  public resetRequeueAfterSeconds() {
    this._requeueAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueAfterSecondsInput() {
    return this._requeueAfterSeconds;
  }

  // bitbucket_server - computed: false, optional: true, required: false
  private _bitbucketServer = new ApplicationSetSpecGeneratorPullRequestBitbucketServerOutputReference(this, "bitbucket_server");
  public get bitbucketServer() {
    return this._bitbucketServer;
  }
  public putBitbucketServer(value: ApplicationSetSpecGeneratorPullRequestBitbucketServer) {
    this._bitbucketServer.internalValue = value;
  }
  public resetBitbucketServer() {
    this._bitbucketServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerInput() {
    return this._bitbucketServer.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ApplicationSetSpecGeneratorPullRequestFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ApplicationSetSpecGeneratorPullRequestFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // gitea - computed: false, optional: true, required: false
  private _gitea = new ApplicationSetSpecGeneratorPullRequestGiteaOutputReference(this, "gitea");
  public get gitea() {
    return this._gitea;
  }
  public putGitea(value: ApplicationSetSpecGeneratorPullRequestGitea) {
    this._gitea.internalValue = value;
  }
  public resetGitea() {
    this._gitea.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giteaInput() {
    return this._gitea.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new ApplicationSetSpecGeneratorPullRequestGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: ApplicationSetSpecGeneratorPullRequestGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new ApplicationSetSpecGeneratorPullRequestGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: ApplicationSetSpecGeneratorPullRequestGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ApplicationSetSpecGeneratorPullRequestTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorPullRequestTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ApplicationSetSpecGeneratorPullRequestList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorPullRequest[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorPullRequestOutputReference {
    return new ApplicationSetSpecGeneratorPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderAzureDevops {
  /**
  * Scan all branches instead of just the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * The URL to Azure DevOps. Defaults to https://dev.azure.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Azure Devops organization. E.g. "my-organization".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#organization ApplicationSet#organization}
  */
  readonly organization: string;
  /**
  * Azure Devops team project. E.g. "my-team".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#team_project ApplicationSet#team_project}
  */
  readonly teamProject: string;
  /**
  * access_token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#access_token_ref ApplicationSet#access_token_ref}
  */
  readonly accessTokenRef?: ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef;
}

export function applicationSetSpecGeneratorScmProviderAzureDevopsToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderAzureDevopsOutputReference | ApplicationSetSpecGeneratorScmProviderAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    api: cdktf.stringToTerraform(struct!.api),
    organization: cdktf.stringToTerraform(struct!.organization),
    team_project: cdktf.stringToTerraform(struct!.teamProject),
    access_token_ref: applicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefToTerraform(struct!.accessTokenRef),
  }
}


export function applicationSetSpecGeneratorScmProviderAzureDevopsToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderAzureDevopsOutputReference | ApplicationSetSpecGeneratorScmProviderAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_project: {
      value: cdktf.stringToHclTerraform(struct!.teamProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_ref: {
      value: applicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefToHclTerraform(struct!.accessTokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderAzureDevopsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderAzureDevops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._teamProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamProject = this._teamProject;
    }
    if (this._accessTokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenRef = this._accessTokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderAzureDevops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._api = undefined;
      this._organization = undefined;
      this._teamProject = undefined;
      this._accessTokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._api = value.api;
      this._organization = value.organization;
      this._teamProject = value.teamProject;
      this._accessTokenRef.internalValue = value.accessTokenRef;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // team_project - computed: false, optional: false, required: true
  private _teamProject?: string; 
  public get teamProject() {
    return this.getStringAttribute('team_project');
  }
  public set teamProject(value: string) {
    this._teamProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamProjectInput() {
    return this._teamProject;
  }

  // access_token_ref - computed: false, optional: true, required: false
  private _accessTokenRef = new ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRefOutputReference(this, "access_token_ref");
  public get accessTokenRef() {
    return this._accessTokenRef;
  }
  public putAccessTokenRef(value: ApplicationSetSpecGeneratorScmProviderAzureDevopsAccessTokenRef) {
    this._accessTokenRef.internalValue = value;
  }
  public resetAccessTokenRef() {
    this._accessTokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenRefInput() {
    return this._accessTokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderBitbucketCloud {
  /**
  * Scan all branches instead of just the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * Bitbucket workspace to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#owner ApplicationSet#owner}
  */
  readonly owner: string;
  /**
  * Bitbucket user to use when authenticating. Should have a "member" role to be able to read all repositories and branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#user ApplicationSet#user}
  */
  readonly user: string;
  /**
  * app_password_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#app_password_ref ApplicationSet#app_password_ref}
  */
  readonly appPasswordRef?: ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef;
}

export function applicationSetSpecGeneratorScmProviderBitbucketCloudToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketCloudOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    owner: cdktf.stringToTerraform(struct!.owner),
    user: cdktf.stringToTerraform(struct!.user),
    app_password_ref: applicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefToTerraform(struct!.appPasswordRef),
  }
}


export function applicationSetSpecGeneratorScmProviderBitbucketCloudToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketCloudOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
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
    app_password_ref: {
      value: applicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefToHclTerraform(struct!.appPasswordRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderBitbucketCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderBitbucketCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._appPasswordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPasswordRef = this._appPasswordRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderBitbucketCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._owner = undefined;
      this._user = undefined;
      this._appPasswordRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._owner = value.owner;
      this._user = value.user;
      this._appPasswordRef.internalValue = value.appPasswordRef;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // app_password_ref - computed: false, optional: true, required: false
  private _appPasswordRef = new ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRefOutputReference(this, "app_password_ref");
  public get appPasswordRef() {
    return this._appPasswordRef;
  }
  public putAppPasswordRef(value: ApplicationSetSpecGeneratorScmProviderBitbucketCloudAppPasswordRef) {
    this._appPasswordRef.internalValue = value;
  }
  public resetAppPasswordRef() {
    this._appPasswordRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPasswordRefInput() {
    return this._appPasswordRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth {
  /**
  * Username for Basic auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#username ApplicationSet#username}
  */
  readonly username?: string;
  /**
  * password_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#password_ref ApplicationSet#password_ref}
  */
  readonly passwordRef?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef;
}

export function applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password_ref: applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefToTerraform(struct!.passwordRef),
  }
}


export function applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_ref: {
      value: applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefToHclTerraform(struct!.passwordRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._passwordRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._passwordRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._passwordRef.internalValue = value.passwordRef;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password_ref - computed: false, optional: true, required: false
  private _passwordRef = new ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRefOutputReference(this, "password_ref");
  public get passwordRef() {
    return this._passwordRef;
  }
  public putPasswordRef(value: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthPasswordRef) {
    this._passwordRef.internalValue = value;
  }
  public resetPasswordRef() {
    this._passwordRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderBitbucketServer {
  /**
  * Scan all branches instead of just the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * The Bitbucket REST API URL to talk to e.g. https://bitbucket.org/rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api: string;
  /**
  * Project to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#project ApplicationSet#project}
  */
  readonly project: string;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#basic_auth ApplicationSet#basic_auth}
  */
  readonly basicAuth?: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth;
}

export function applicationSetSpecGeneratorScmProviderBitbucketServerToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    api: cdktf.stringToTerraform(struct!.api),
    project: cdktf.stringToTerraform(struct!.project),
    basic_auth: applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthToTerraform(struct!.basicAuth),
  }
}


export function applicationSetSpecGeneratorScmProviderBitbucketServerToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderBitbucketServerOutputReference | ApplicationSetSpecGeneratorScmProviderBitbucketServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_auth: {
      value: applicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderBitbucketServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderBitbucketServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderBitbucketServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._api = undefined;
      this._project = undefined;
      this._basicAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._api = value.api;
      this._project = value.project;
      this._basicAuth.internalValue = value.basicAuth;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
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

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: ApplicationSetSpecGeneratorScmProviderBitbucketServerBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderFilter {
  /**
  * A regex which must match the branch name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#branch_match ApplicationSet#branch_match}
  */
  readonly branchMatch?: string;
  /**
  * A regex which must match at least one label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#label_match ApplicationSet#label_match}
  */
  readonly labelMatch?: string;
  /**
  * An array of paths, all of which must not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#paths_do_not_exist ApplicationSet#paths_do_not_exist}
  */
  readonly pathsDoNotExist?: string[];
  /**
  * An array of paths, all of which must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#paths_exist ApplicationSet#paths_exist}
  */
  readonly pathsExist?: string[];
  /**
  * A regex for repo names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#repository_match ApplicationSet#repository_match}
  */
  readonly repositoryMatch?: string;
}

export function applicationSetSpecGeneratorScmProviderFilterToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_match: cdktf.stringToTerraform(struct!.branchMatch),
    label_match: cdktf.stringToTerraform(struct!.labelMatch),
    paths_do_not_exist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathsDoNotExist),
    paths_exist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pathsExist),
    repository_match: cdktf.stringToTerraform(struct!.repositoryMatch),
  }
}


export function applicationSetSpecGeneratorScmProviderFilterToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_match: {
      value: cdktf.stringToHclTerraform(struct!.branchMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_match: {
      value: cdktf.stringToHclTerraform(struct!.labelMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths_do_not_exist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathsDoNotExist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    paths_exist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pathsExist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository_match: {
      value: cdktf.stringToHclTerraform(struct!.repositoryMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchMatch = this._branchMatch;
    }
    if (this._labelMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatch = this._labelMatch;
    }
    if (this._pathsDoNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathsDoNotExist = this._pathsDoNotExist;
    }
    if (this._pathsExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathsExist = this._pathsExist;
    }
    if (this._repositoryMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryMatch = this._repositoryMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchMatch = undefined;
      this._labelMatch = undefined;
      this._pathsDoNotExist = undefined;
      this._pathsExist = undefined;
      this._repositoryMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchMatch = value.branchMatch;
      this._labelMatch = value.labelMatch;
      this._pathsDoNotExist = value.pathsDoNotExist;
      this._pathsExist = value.pathsExist;
      this._repositoryMatch = value.repositoryMatch;
    }
  }

  // branch_match - computed: false, optional: true, required: false
  private _branchMatch?: string; 
  public get branchMatch() {
    return this.getStringAttribute('branch_match');
  }
  public set branchMatch(value: string) {
    this._branchMatch = value;
  }
  public resetBranchMatch() {
    this._branchMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchMatchInput() {
    return this._branchMatch;
  }

  // label_match - computed: false, optional: true, required: false
  private _labelMatch?: string; 
  public get labelMatch() {
    return this.getStringAttribute('label_match');
  }
  public set labelMatch(value: string) {
    this._labelMatch = value;
  }
  public resetLabelMatch() {
    this._labelMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchInput() {
    return this._labelMatch;
  }

  // paths_do_not_exist - computed: false, optional: true, required: false
  private _pathsDoNotExist?: string[]; 
  public get pathsDoNotExist() {
    return this.getListAttribute('paths_do_not_exist');
  }
  public set pathsDoNotExist(value: string[]) {
    this._pathsDoNotExist = value;
  }
  public resetPathsDoNotExist() {
    this._pathsDoNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsDoNotExistInput() {
    return this._pathsDoNotExist;
  }

  // paths_exist - computed: false, optional: true, required: false
  private _pathsExist?: string[]; 
  public get pathsExist() {
    return this.getListAttribute('paths_exist');
  }
  public set pathsExist(value: string[]) {
    this._pathsExist = value;
  }
  public resetPathsExist() {
    this._pathsExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsExistInput() {
    return this._pathsExist;
  }

  // repository_match - computed: false, optional: true, required: false
  private _repositoryMatch?: string; 
  public get repositoryMatch() {
    return this.getStringAttribute('repository_match');
  }
  public set repositoryMatch(value: string) {
    this._repositoryMatch = value;
  }
  public resetRepositoryMatch() {
    this._repositoryMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryMatchInput() {
    return this._repositoryMatch;
  }
}

export class ApplicationSetSpecGeneratorScmProviderFilterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderFilter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderFilterOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGiteaTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderGiteaTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGiteaTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGiteaTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderGiteaTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGiteaTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGiteaTokenRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderGiteaTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGiteaTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGiteaTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGitea {
  /**
  * Scan all branches instead of just the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * The Gitea URL to talk to. For example https://gitea.mydomain.com/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Allow self-signed TLS / Certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#insecure ApplicationSet#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Gitea organization or user to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#owner ApplicationSet#owner}
  */
  readonly owner: string;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorScmProviderGiteaTokenRef;
}

export function applicationSetSpecGeneratorScmProviderGiteaToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGiteaOutputReference | ApplicationSetSpecGeneratorScmProviderGitea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    api: cdktf.stringToTerraform(struct!.api),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    owner: cdktf.stringToTerraform(struct!.owner),
    token_ref: applicationSetSpecGeneratorScmProviderGiteaTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorScmProviderGiteaToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGiteaOutputReference | ApplicationSetSpecGeneratorScmProviderGitea): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ref: {
      value: applicationSetSpecGeneratorScmProviderGiteaTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGiteaTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderGiteaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGitea | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGitea | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._api = undefined;
      this._insecure = undefined;
      this._owner = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._api = value.api;
      this._insecure = value.insecure;
      this._owner = value.owner;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorScmProviderGiteaTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorScmProviderGiteaTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGithubTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderGithubTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGithubTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGithubTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderGithubTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGithubTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGithubTokenRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderGithubTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGithubTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGithubTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGithub {
  /**
  * If true, scan every branch of every repository. If false, scan only the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * The GitHub API URL to talk to. Default https://api.github.com/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Reference to a GitHub App repo-creds secret. Uses a GitHub App to access the API instead of a PAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#app_secret_name ApplicationSet#app_secret_name}
  */
  readonly appSecretName?: string;
  /**
  * GitHub org to scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#organization ApplicationSet#organization}
  */
  readonly organization: string;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorScmProviderGithubTokenRef;
}

export function applicationSetSpecGeneratorScmProviderGithubToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGithubOutputReference | ApplicationSetSpecGeneratorScmProviderGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    api: cdktf.stringToTerraform(struct!.api),
    app_secret_name: cdktf.stringToTerraform(struct!.appSecretName),
    organization: cdktf.stringToTerraform(struct!.organization),
    token_ref: applicationSetSpecGeneratorScmProviderGithubTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorScmProviderGithubToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGithubOutputReference | ApplicationSetSpecGeneratorScmProviderGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.appSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_ref: {
      value: applicationSetSpecGeneratorScmProviderGithubTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGithubTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._appSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appSecretName = this._appSecretName;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._api = undefined;
      this._appSecretName = undefined;
      this._organization = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._api = value.api;
      this._appSecretName = value.appSecretName;
      this._organization = value.organization;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // app_secret_name - computed: false, optional: true, required: false
  private _appSecretName?: string; 
  public get appSecretName() {
    return this.getStringAttribute('app_secret_name');
  }
  public set appSecretName(value: string) {
    this._appSecretName = value;
  }
  public resetAppSecretName() {
    this._appSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSecretNameInput() {
    return this._appSecretName;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorScmProviderGithubTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorScmProviderGithubTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGitlabTokenRef {
  /**
  * Key containing information in Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key: string;
  /**
  * Name of Kubernetes `Secret`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#secret_name ApplicationSet#secret_name}
  */
  readonly secretName: string;
}

export function applicationSetSpecGeneratorScmProviderGitlabTokenRefToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGitlabTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGitlabTokenRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function applicationSetSpecGeneratorScmProviderGitlabTokenRefToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGitlabTokenRefOutputReference | ApplicationSetSpecGeneratorScmProviderGitlabTokenRef): any {
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

export class ApplicationSetSpecGeneratorScmProviderGitlabTokenRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGitlabTokenRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGitlabTokenRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secretName = value.secretName;
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

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderGitlab {
  /**
  * If true, scan every branch of every repository. If false, scan only the default branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#all_branches ApplicationSet#all_branches}
  */
  readonly allBranches?: boolean | cdktf.IResolvable;
  /**
  * The Gitlab API URL to talk to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#api ApplicationSet#api}
  */
  readonly api?: string;
  /**
  * Gitlab group to scan. You can use either the project id (recommended) or the full namespaced path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group: string;
  /**
  * Recurse through subgroups (true) or scan only the base group (false). Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#include_subgroups ApplicationSet#include_subgroups}
  */
  readonly includeSubgroups?: boolean | cdktf.IResolvable;
  /**
  * token_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#token_ref ApplicationSet#token_ref}
  */
  readonly tokenRef?: ApplicationSetSpecGeneratorScmProviderGitlabTokenRef;
}

export function applicationSetSpecGeneratorScmProviderGitlabToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGitlabOutputReference | ApplicationSetSpecGeneratorScmProviderGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_branches: cdktf.booleanToTerraform(struct!.allBranches),
    api: cdktf.stringToTerraform(struct!.api),
    group: cdktf.stringToTerraform(struct!.group),
    include_subgroups: cdktf.booleanToTerraform(struct!.includeSubgroups),
    token_ref: applicationSetSpecGeneratorScmProviderGitlabTokenRefToTerraform(struct!.tokenRef),
  }
}


export function applicationSetSpecGeneratorScmProviderGitlabToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderGitlabOutputReference | ApplicationSetSpecGeneratorScmProviderGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_branches: {
      value: cdktf.booleanToHclTerraform(struct!.allBranches),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api: {
      value: cdktf.stringToHclTerraform(struct!.api),
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
    include_subgroups: {
      value: cdktf.booleanToHclTerraform(struct!.includeSubgroups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_ref: {
      value: applicationSetSpecGeneratorScmProviderGitlabTokenRefToHclTerraform(struct!.tokenRef),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGitlabTokenRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allBranches !== undefined) {
      hasAnyValues = true;
      internalValueResult.allBranches = this._allBranches;
    }
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._includeSubgroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSubgroups = this._includeSubgroups;
    }
    if (this._tokenRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRef = this._tokenRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allBranches = undefined;
      this._api = undefined;
      this._group = undefined;
      this._includeSubgroups = undefined;
      this._tokenRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allBranches = value.allBranches;
      this._api = value.api;
      this._group = value.group;
      this._includeSubgroups = value.includeSubgroups;
      this._tokenRef.internalValue = value.tokenRef;
    }
  }

  // all_branches - computed: false, optional: true, required: false
  private _allBranches?: boolean | cdktf.IResolvable; 
  public get allBranches() {
    return this.getBooleanAttribute('all_branches');
  }
  public set allBranches(value: boolean | cdktf.IResolvable) {
    this._allBranches = value;
  }
  public resetAllBranches() {
    this._allBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allBranchesInput() {
    return this._allBranches;
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // include_subgroups - computed: false, optional: true, required: false
  private _includeSubgroups?: boolean | cdktf.IResolvable; 
  public get includeSubgroups() {
    return this.getBooleanAttribute('include_subgroups');
  }
  public set includeSubgroups(value: boolean | cdktf.IResolvable) {
    this._includeSubgroups = value;
  }
  public resetIncludeSubgroups() {
    this._includeSubgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubgroupsInput() {
    return this._includeSubgroups;
  }

  // token_ref - computed: false, optional: true, required: false
  private _tokenRef = new ApplicationSetSpecGeneratorScmProviderGitlabTokenRefOutputReference(this, "token_ref");
  public get tokenRef() {
    return this._tokenRef;
  }
  public putTokenRef(value: ApplicationSetSpecGeneratorScmProviderGitlabTokenRef) {
    this._tokenRef.internalValue = value;
  }
  public resetTokenRef() {
    this._tokenRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefInput() {
    return this._tokenRef.internalValue;
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateMetadata {
  /**
  * An unstructured key value map that may be used to store arbitrary metadata for the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#annotations ApplicationSet#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * List of finalizers to apply to the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#finalizers ApplicationSet#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the resulting Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#labels ApplicationSet#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorScmProviderTemplateMetadataToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateMetadataOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateMetadataOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateMetadata): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorScmProviderTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination {
  /**
  * Name of the target cluster. Can be used instead of `server`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster and must be set to the Kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#server ApplicationSet#server}
  */
  readonly server?: string;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference {
  /**
  * The Kubernetes resource Group to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#group ApplicationSet#group}
  */
  readonly group?: string;
  /**
  * List of JQ path expression strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * List of JSONPaths strings targeting the field(s) to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * The Kubernetes resource Kind to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kind ApplicationSet#kind}
  */
  readonly kind?: string;
  /**
  * List of external controller manager names whose changes to fields should be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_fields_managers ApplicationSet#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * The Kubernetes resource Name to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * The Kubernetes resource Namespace to match for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return cdktf.Fn.tolist(this.getListAttribute('jq_path_expressions'));
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return cdktf.Fn.tolist(this.getListAttribute('json_pointers'));
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_fields_managers'));
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo {
  /**
  * Name of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
  /**
  * Value of the information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#value ApplicationSet#value}
  */
  readonly value?: string;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
