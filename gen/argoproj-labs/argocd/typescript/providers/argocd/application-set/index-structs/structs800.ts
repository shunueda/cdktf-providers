import * as cdktf from 'cdktf';
import { ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination,
applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToTerraform,
applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToHclTerraform,
ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationOutputReference,
ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference,
applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToTerraform,
applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToHclTerraform,
ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceList,
ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo,
applicationSetSpecGeneratorScmProviderTemplateSpecInfoToTerraform,
applicationSetSpecGeneratorScmProviderTemplateSpecInfoToHclTerraform,
ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoList,
ApplicationSetSpecGeneratorScmProviderTemplateMetadata,
applicationSetSpecGeneratorScmProviderTemplateMetadataToTerraform,
applicationSetSpecGeneratorScmProviderTemplateMetadataToHclTerraform,
ApplicationSetSpecGeneratorScmProviderTemplateMetadataOutputReference,
ApplicationSetSpecGeneratorScmProviderAzureDevops,
applicationSetSpecGeneratorScmProviderAzureDevopsToTerraform,
applicationSetSpecGeneratorScmProviderAzureDevopsToHclTerraform,
ApplicationSetSpecGeneratorScmProviderAzureDevopsOutputReference,
ApplicationSetSpecGeneratorScmProviderBitbucketCloud,
applicationSetSpecGeneratorScmProviderBitbucketCloudToTerraform,
applicationSetSpecGeneratorScmProviderBitbucketCloudToHclTerraform,
ApplicationSetSpecGeneratorScmProviderBitbucketCloudOutputReference,
ApplicationSetSpecGeneratorScmProviderBitbucketServer,
applicationSetSpecGeneratorScmProviderBitbucketServerToTerraform,
applicationSetSpecGeneratorScmProviderBitbucketServerToHclTerraform,
ApplicationSetSpecGeneratorScmProviderBitbucketServerOutputReference,
ApplicationSetSpecGeneratorScmProviderFilter,
applicationSetSpecGeneratorScmProviderFilterToTerraform,
applicationSetSpecGeneratorScmProviderFilterToHclTerraform,
ApplicationSetSpecGeneratorScmProviderFilterList,
ApplicationSetSpecGeneratorScmProviderGitea,
applicationSetSpecGeneratorScmProviderGiteaToTerraform,
applicationSetSpecGeneratorScmProviderGiteaToHclTerraform,
ApplicationSetSpecGeneratorScmProviderGiteaOutputReference,
ApplicationSetSpecGeneratorScmProviderGithub,
applicationSetSpecGeneratorScmProviderGithubToTerraform,
applicationSetSpecGeneratorScmProviderGithubToHclTerraform,
ApplicationSetSpecGeneratorScmProviderGithubOutputReference,
ApplicationSetSpecGeneratorScmProviderGitlab,
applicationSetSpecGeneratorScmProviderGitlabToTerraform,
applicationSetSpecGeneratorScmProviderGitlabToHclTerraform,
ApplicationSetSpecGeneratorScmProviderGitlabOutputReference,
ApplicationSetSpecGeneratorMatrix,
applicationSetSpecGeneratorMatrixToTerraform,
applicationSetSpecGeneratorMatrixToHclTerraform,
ApplicationSetSpecGeneratorMatrixList,
ApplicationSetSpecGeneratorMerge,
applicationSetSpecGeneratorMergeToTerraform,
applicationSetSpecGeneratorMergeToHclTerraform,
ApplicationSetSpecGeneratorMergeList,
ApplicationSetSpecGeneratorPlugin,
applicationSetSpecGeneratorPluginToTerraform,
applicationSetSpecGeneratorPluginToHclTerraform,
ApplicationSetSpecGeneratorPluginList,
ApplicationSetSpecGeneratorPullRequest,
applicationSetSpecGeneratorPullRequestToTerraform,
applicationSetSpecGeneratorPullRequestToHclTerraform,
ApplicationSetSpecGeneratorPullRequestList } from './structs400'
import { ApplicationSetSpecGeneratorClusterDecisionResource,
applicationSetSpecGeneratorClusterDecisionResourceToTerraform,
applicationSetSpecGeneratorClusterDecisionResourceToHclTerraform,
ApplicationSetSpecGeneratorClusterDecisionResourceList,
ApplicationSetSpecGeneratorClusters,
applicationSetSpecGeneratorClustersToTerraform,
applicationSetSpecGeneratorClustersToHclTerraform,
ApplicationSetSpecGeneratorClustersList,
ApplicationSetSpecGeneratorGit,
applicationSetSpecGeneratorGitToTerraform,
applicationSetSpecGeneratorGitToHclTerraform,
ApplicationSetSpecGeneratorGitList,
ApplicationSetSpecGeneratorListStruct,
applicationSetSpecGeneratorListStructToTerraform,
applicationSetSpecGeneratorListStructToHclTerraform,
ApplicationSetSpecGeneratorListStructList } from './structs0'
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet {
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
  readonly extVar?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet | undefined) {
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
  private _extVar = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
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
  private _tla = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory {
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
  readonly jsonnet?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory | undefined) {
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
  private _jsonnet = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryJsonnet) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm {
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
  readonly fileParameter?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm): any {
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
    file_parameter: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm | undefined) {
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
  private _fileParameter = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
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
  private _parameter = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget | undefined) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches {
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
  readonly target: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _target = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize {
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
  readonly patches?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize): any {
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
    patches: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize | undefined) {
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
  private _patches = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin {
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
  readonly env?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin | undefined) {
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
  private _env = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSource {
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
  readonly directory?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSource | cdktf.IResolvable): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSource | cdktf.IResolvable | undefined) {
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
  private _directory = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceKustomize) {
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
  private _plugin = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSourcePlugin) {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProviderTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated | undefined) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff {
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

export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff): any {
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


export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff): any {
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

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff | undefined) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry {
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
  readonly backoff?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry | undefined) {
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
  private _backoff = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryBackoff) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy {
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
  readonly automated?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy | undefined) {
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
  private _automated = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyRetry) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplateSpec {
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
  readonly destination?: ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy;
}

export function applicationSetSpecGeneratorScmProviderTemplateSpecToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecGeneratorScmProviderTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateSpecToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateSpecOutputReference | ApplicationSetSpecGeneratorScmProviderTemplateSpec): any {
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
      value: applicationSetSpecGeneratorScmProviderTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplateSpec | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplateSpec | undefined) {
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
  private _destination = new ApplicationSetSpecGeneratorScmProviderTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecDestination) {
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
  private _ignoreDifference = new ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
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
  private _info = new ApplicationSetSpecGeneratorScmProviderTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecInfo[] | cdktf.IResolvable) {
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
  private _source = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSource[] | cdktf.IResolvable) {
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
  private _syncPolicy = new ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecGeneratorScmProviderTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecGeneratorScmProviderTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata?: ApplicationSetSpecGeneratorScmProviderTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec?: ApplicationSetSpecGeneratorScmProviderTemplateSpec;
}

export function applicationSetSpecGeneratorScmProviderTemplateToTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateOutputReference | ApplicationSetSpecGeneratorScmProviderTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecGeneratorScmProviderTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecGeneratorScmProviderTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecGeneratorScmProviderTemplateToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProviderTemplateOutputReference | ApplicationSetSpecGeneratorScmProviderTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecGeneratorScmProviderTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecGeneratorScmProviderTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorScmProviderTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProviderTemplate | undefined) {
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
  private _metadata = new ApplicationSetSpecGeneratorScmProviderTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecGeneratorScmProviderTemplateMetadata) {
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
  private _spec = new ApplicationSetSpecGeneratorScmProviderTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecGeneratorScmProviderTemplateSpec) {
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
export interface ApplicationSetSpecGeneratorScmProvider {
  /**
  * Which protocol to use for the SCM URL. Default is provider-specific but ssh if possible. Not all providers necessarily support all protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#clone_protocol ApplicationSet#clone_protocol}
  */
  readonly cloneProtocol?: string;
  /**
  * How often to check for changes (in seconds). Default: 3min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#requeue_after_seconds ApplicationSet#requeue_after_seconds}
  */
  readonly requeueAfterSeconds?: string;
  /**
  * azure_devops block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#azure_devops ApplicationSet#azure_devops}
  */
  readonly azureDevops?: ApplicationSetSpecGeneratorScmProviderAzureDevops;
  /**
  * bitbucket_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#bitbucket_cloud ApplicationSet#bitbucket_cloud}
  */
  readonly bitbucketCloud?: ApplicationSetSpecGeneratorScmProviderBitbucketCloud;
  /**
  * bitbucket_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#bitbucket_server ApplicationSet#bitbucket_server}
  */
  readonly bitbucketServer?: ApplicationSetSpecGeneratorScmProviderBitbucketServer;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#filter ApplicationSet#filter}
  */
  readonly filter?: ApplicationSetSpecGeneratorScmProviderFilter[] | cdktf.IResolvable;
  /**
  * gitea block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#gitea ApplicationSet#gitea}
  */
  readonly gitea?: ApplicationSetSpecGeneratorScmProviderGitea;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#github ApplicationSet#github}
  */
  readonly github?: ApplicationSetSpecGeneratorScmProviderGithub;
  /**
  * gitlab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#gitlab ApplicationSet#gitlab}
  */
  readonly gitlab?: ApplicationSetSpecGeneratorScmProviderGitlab;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template?: ApplicationSetSpecGeneratorScmProviderTemplate;
}

export function applicationSetSpecGeneratorScmProviderToTerraform(struct?: ApplicationSetSpecGeneratorScmProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clone_protocol: cdktf.stringToTerraform(struct!.cloneProtocol),
    requeue_after_seconds: cdktf.stringToTerraform(struct!.requeueAfterSeconds),
    azure_devops: applicationSetSpecGeneratorScmProviderAzureDevopsToTerraform(struct!.azureDevops),
    bitbucket_cloud: applicationSetSpecGeneratorScmProviderBitbucketCloudToTerraform(struct!.bitbucketCloud),
    bitbucket_server: applicationSetSpecGeneratorScmProviderBitbucketServerToTerraform(struct!.bitbucketServer),
    filter: cdktf.listMapper(applicationSetSpecGeneratorScmProviderFilterToTerraform, true)(struct!.filter),
    gitea: applicationSetSpecGeneratorScmProviderGiteaToTerraform(struct!.gitea),
    github: applicationSetSpecGeneratorScmProviderGithubToTerraform(struct!.github),
    gitlab: applicationSetSpecGeneratorScmProviderGitlabToTerraform(struct!.gitlab),
    template: applicationSetSpecGeneratorScmProviderTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecGeneratorScmProviderToHclTerraform(struct?: ApplicationSetSpecGeneratorScmProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clone_protocol: {
      value: cdktf.stringToHclTerraform(struct!.cloneProtocol),
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
    azure_devops: {
      value: applicationSetSpecGeneratorScmProviderAzureDevopsToHclTerraform(struct!.azureDevops),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderAzureDevopsList",
    },
    bitbucket_cloud: {
      value: applicationSetSpecGeneratorScmProviderBitbucketCloudToHclTerraform(struct!.bitbucketCloud),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderBitbucketCloudList",
    },
    bitbucket_server: {
      value: applicationSetSpecGeneratorScmProviderBitbucketServerToHclTerraform(struct!.bitbucketServer),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderBitbucketServerList",
    },
    filter: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderFilterList",
    },
    gitea: {
      value: applicationSetSpecGeneratorScmProviderGiteaToHclTerraform(struct!.gitea),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGiteaList",
    },
    github: {
      value: applicationSetSpecGeneratorScmProviderGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGithubList",
    },
    gitlab: {
      value: applicationSetSpecGeneratorScmProviderGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderGitlabList",
    },
    template: {
      value: applicationSetSpecGeneratorScmProviderTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorScmProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorScmProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneProtocol = this._cloneProtocol;
    }
    if (this._requeueAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueAfterSeconds = this._requeueAfterSeconds;
    }
    if (this._azureDevops?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDevops = this._azureDevops?.internalValue;
    }
    if (this._bitbucketCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketCloud = this._bitbucketCloud?.internalValue;
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

  public set internalValue(value: ApplicationSetSpecGeneratorScmProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneProtocol = undefined;
      this._requeueAfterSeconds = undefined;
      this._azureDevops.internalValue = undefined;
      this._bitbucketCloud.internalValue = undefined;
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
      this._cloneProtocol = value.cloneProtocol;
      this._requeueAfterSeconds = value.requeueAfterSeconds;
      this._azureDevops.internalValue = value.azureDevops;
      this._bitbucketCloud.internalValue = value.bitbucketCloud;
      this._bitbucketServer.internalValue = value.bitbucketServer;
      this._filter.internalValue = value.filter;
      this._gitea.internalValue = value.gitea;
      this._github.internalValue = value.github;
      this._gitlab.internalValue = value.gitlab;
      this._template.internalValue = value.template;
    }
  }

  // clone_protocol - computed: false, optional: true, required: false
  private _cloneProtocol?: string; 
  public get cloneProtocol() {
    return this.getStringAttribute('clone_protocol');
  }
  public set cloneProtocol(value: string) {
    this._cloneProtocol = value;
  }
  public resetCloneProtocol() {
    this._cloneProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneProtocolInput() {
    return this._cloneProtocol;
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

  // azure_devops - computed: false, optional: true, required: false
  private _azureDevops = new ApplicationSetSpecGeneratorScmProviderAzureDevopsOutputReference(this, "azure_devops");
  public get azureDevops() {
    return this._azureDevops;
  }
  public putAzureDevops(value: ApplicationSetSpecGeneratorScmProviderAzureDevops) {
    this._azureDevops.internalValue = value;
  }
  public resetAzureDevops() {
    this._azureDevops.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDevopsInput() {
    return this._azureDevops.internalValue;
  }

  // bitbucket_cloud - computed: false, optional: true, required: false
  private _bitbucketCloud = new ApplicationSetSpecGeneratorScmProviderBitbucketCloudOutputReference(this, "bitbucket_cloud");
  public get bitbucketCloud() {
    return this._bitbucketCloud;
  }
  public putBitbucketCloud(value: ApplicationSetSpecGeneratorScmProviderBitbucketCloud) {
    this._bitbucketCloud.internalValue = value;
  }
  public resetBitbucketCloud() {
    this._bitbucketCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketCloudInput() {
    return this._bitbucketCloud.internalValue;
  }

  // bitbucket_server - computed: false, optional: true, required: false
  private _bitbucketServer = new ApplicationSetSpecGeneratorScmProviderBitbucketServerOutputReference(this, "bitbucket_server");
  public get bitbucketServer() {
    return this._bitbucketServer;
  }
  public putBitbucketServer(value: ApplicationSetSpecGeneratorScmProviderBitbucketServer) {
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
  private _filter = new ApplicationSetSpecGeneratorScmProviderFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ApplicationSetSpecGeneratorScmProviderFilter[] | cdktf.IResolvable) {
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
  private _gitea = new ApplicationSetSpecGeneratorScmProviderGiteaOutputReference(this, "gitea");
  public get gitea() {
    return this._gitea;
  }
  public putGitea(value: ApplicationSetSpecGeneratorScmProviderGitea) {
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
  private _github = new ApplicationSetSpecGeneratorScmProviderGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: ApplicationSetSpecGeneratorScmProviderGithub) {
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
  private _gitlab = new ApplicationSetSpecGeneratorScmProviderGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: ApplicationSetSpecGeneratorScmProviderGitlab) {
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
  private _template = new ApplicationSetSpecGeneratorScmProviderTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecGeneratorScmProviderTemplate) {
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

export class ApplicationSetSpecGeneratorScmProviderList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorScmProvider[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorScmProviderOutputReference {
    return new ApplicationSetSpecGeneratorScmProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#operator ApplicationSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string[];
}

export function applicationSetSpecGeneratorSelectorMatchExpressionsToTerraform(struct?: ApplicationSetSpecGeneratorSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function applicationSetSpecGeneratorSelectorMatchExpressionsToHclTerraform(struct?: ApplicationSetSpecGeneratorSelectorMatchExpressions | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGeneratorSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecGeneratorSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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

export class ApplicationSetSpecGeneratorSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGeneratorSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorSelectorMatchExpressionsOutputReference {
    return new ApplicationSetSpecGeneratorSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecGeneratorSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_labels ApplicationSet#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_expressions ApplicationSet#match_expressions}
  */
  readonly matchExpressions?: ApplicationSetSpecGeneratorSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function applicationSetSpecGeneratorSelectorToTerraform(struct?: ApplicationSetSpecGeneratorSelectorOutputReference | ApplicationSetSpecGeneratorSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(applicationSetSpecGeneratorSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function applicationSetSpecGeneratorSelectorToHclTerraform(struct?: ApplicationSetSpecGeneratorSelectorOutputReference | ApplicationSetSpecGeneratorSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecGeneratorSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGeneratorSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
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

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApplicationSetSpecGeneratorSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApplicationSetSpecGeneratorSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ApplicationSetSpecGenerator {
  /**
  * cluster_decision_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#cluster_decision_resource ApplicationSet#cluster_decision_resource}
  */
  readonly clusterDecisionResource?: ApplicationSetSpecGeneratorClusterDecisionResource[] | cdktf.IResolvable;
  /**
  * clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#clusters ApplicationSet#clusters}
  */
  readonly clusters?: ApplicationSetSpecGeneratorClusters[] | cdktf.IResolvable;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#git ApplicationSet#git}
  */
  readonly git?: ApplicationSetSpecGeneratorGit[] | cdktf.IResolvable;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#list ApplicationSet#list}
  */
  readonly list?: ApplicationSetSpecGeneratorListStruct[] | cdktf.IResolvable;
  /**
  * matrix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#matrix ApplicationSet#matrix}
  */
  readonly matrix?: ApplicationSetSpecGeneratorMatrix[] | cdktf.IResolvable;
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#merge ApplicationSet#merge}
  */
  readonly merge?: ApplicationSetSpecGeneratorMerge[] | cdktf.IResolvable;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecGeneratorPlugin[] | cdktf.IResolvable;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#pull_request ApplicationSet#pull_request}
  */
  readonly pullRequest?: ApplicationSetSpecGeneratorPullRequest[] | cdktf.IResolvable;
  /**
  * scm_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#scm_provider ApplicationSet#scm_provider}
  */
  readonly scmProvider?: ApplicationSetSpecGeneratorScmProvider[] | cdktf.IResolvable;
  /**
  * selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#selector ApplicationSet#selector}
  */
  readonly selector?: ApplicationSetSpecGeneratorSelector;
}

export function applicationSetSpecGeneratorToTerraform(struct?: ApplicationSetSpecGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_decision_resource: cdktf.listMapper(applicationSetSpecGeneratorClusterDecisionResourceToTerraform, true)(struct!.clusterDecisionResource),
    clusters: cdktf.listMapper(applicationSetSpecGeneratorClustersToTerraform, true)(struct!.clusters),
    git: cdktf.listMapper(applicationSetSpecGeneratorGitToTerraform, true)(struct!.git),
    list: cdktf.listMapper(applicationSetSpecGeneratorListStructToTerraform, true)(struct!.list),
    matrix: cdktf.listMapper(applicationSetSpecGeneratorMatrixToTerraform, true)(struct!.matrix),
    merge: cdktf.listMapper(applicationSetSpecGeneratorMergeToTerraform, true)(struct!.merge),
    plugin: cdktf.listMapper(applicationSetSpecGeneratorPluginToTerraform, true)(struct!.plugin),
    pull_request: cdktf.listMapper(applicationSetSpecGeneratorPullRequestToTerraform, true)(struct!.pullRequest),
    scm_provider: cdktf.listMapper(applicationSetSpecGeneratorScmProviderToTerraform, true)(struct!.scmProvider),
    selector: applicationSetSpecGeneratorSelectorToTerraform(struct!.selector),
  }
}


export function applicationSetSpecGeneratorToHclTerraform(struct?: ApplicationSetSpecGenerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_decision_resource: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClusterDecisionResourceToHclTerraform, true)(struct!.clusterDecisionResource),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClusterDecisionResourceList",
    },
    clusters: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorClustersToHclTerraform, true)(struct!.clusters),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorClustersList",
    },
    git: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorGitToHclTerraform, true)(struct!.git),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorGitList",
    },
    list: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorListStructList",
    },
    matrix: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMatrixToHclTerraform, true)(struct!.matrix),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMatrixList",
    },
    merge: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorMergeToHclTerraform, true)(struct!.merge),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorMergeList",
    },
    plugin: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPluginToHclTerraform, true)(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPluginList",
    },
    pull_request: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorPullRequestToHclTerraform, true)(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorPullRequestList",
    },
    scm_provider: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorScmProviderToHclTerraform, true)(struct!.scmProvider),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorScmProviderList",
    },
    selector: {
      value: applicationSetSpecGeneratorSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecGeneratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecGenerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDecisionResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDecisionResource = this._clusterDecisionResource?.internalValue;
    }
    if (this._clusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters?.internalValue;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._matrix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matrix = this._matrix?.internalValue;
    }
    if (this._merge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.merge = this._merge?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._scmProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scmProvider = this._scmProvider?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecGenerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDecisionResource.internalValue = undefined;
      this._clusters.internalValue = undefined;
      this._git.internalValue = undefined;
      this._list.internalValue = undefined;
      this._matrix.internalValue = undefined;
      this._merge.internalValue = undefined;
      this._plugin.internalValue = undefined;
      this._pullRequest.internalValue = undefined;
      this._scmProvider.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDecisionResource.internalValue = value.clusterDecisionResource;
      this._clusters.internalValue = value.clusters;
      this._git.internalValue = value.git;
      this._list.internalValue = value.list;
      this._matrix.internalValue = value.matrix;
      this._merge.internalValue = value.merge;
      this._plugin.internalValue = value.plugin;
      this._pullRequest.internalValue = value.pullRequest;
      this._scmProvider.internalValue = value.scmProvider;
      this._selector.internalValue = value.selector;
    }
  }

  // cluster_decision_resource - computed: false, optional: true, required: false
  private _clusterDecisionResource = new ApplicationSetSpecGeneratorClusterDecisionResourceList(this, "cluster_decision_resource", false);
  public get clusterDecisionResource() {
    return this._clusterDecisionResource;
  }
  public putClusterDecisionResource(value: ApplicationSetSpecGeneratorClusterDecisionResource[] | cdktf.IResolvable) {
    this._clusterDecisionResource.internalValue = value;
  }
  public resetClusterDecisionResource() {
    this._clusterDecisionResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDecisionResourceInput() {
    return this._clusterDecisionResource.internalValue;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters = new ApplicationSetSpecGeneratorClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }
  public putClusters(value: ApplicationSetSpecGeneratorClusters[] | cdktf.IResolvable) {
    this._clusters.internalValue = value;
  }
  public resetClusters() {
    this._clusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters.internalValue;
  }

  // git - computed: false, optional: true, required: false
  private _git = new ApplicationSetSpecGeneratorGitList(this, "git", false);
  public get git() {
    return this._git;
  }
  public putGit(value: ApplicationSetSpecGeneratorGit[] | cdktf.IResolvable) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new ApplicationSetSpecGeneratorListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: ApplicationSetSpecGeneratorListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // matrix - computed: false, optional: true, required: false
  private _matrix = new ApplicationSetSpecGeneratorMatrixList(this, "matrix", false);
  public get matrix() {
    return this._matrix;
  }
  public putMatrix(value: ApplicationSetSpecGeneratorMatrix[] | cdktf.IResolvable) {
    this._matrix.internalValue = value;
  }
  public resetMatrix() {
    this._matrix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matrixInput() {
    return this._matrix.internalValue;
  }

  // merge - computed: false, optional: true, required: false
  private _merge = new ApplicationSetSpecGeneratorMergeList(this, "merge", false);
  public get merge() {
    return this._merge;
  }
  public putMerge(value: ApplicationSetSpecGeneratorMerge[] | cdktf.IResolvable) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new ApplicationSetSpecGeneratorPluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecGeneratorPlugin[] | cdktf.IResolvable) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new ApplicationSetSpecGeneratorPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: ApplicationSetSpecGeneratorPullRequest[] | cdktf.IResolvable) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // scm_provider - computed: false, optional: true, required: false
  private _scmProvider = new ApplicationSetSpecGeneratorScmProviderList(this, "scm_provider", false);
  public get scmProvider() {
    return this._scmProvider;
  }
  public putScmProvider(value: ApplicationSetSpecGeneratorScmProvider[] | cdktf.IResolvable) {
    this._scmProvider.internalValue = value;
  }
  public resetScmProvider() {
    this._scmProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scmProviderInput() {
    return this._scmProvider.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new ApplicationSetSpecGeneratorSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: ApplicationSetSpecGeneratorSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

export class ApplicationSetSpecGeneratorList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecGenerator[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecGeneratorOutputReference {
    return new ApplicationSetSpecGeneratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecIgnoreApplicationDifferences {
  /**
  * jq path to ignore differences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#jq_path_expressions ApplicationSet#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * Json pointers to ignore differences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#json_pointers ApplicationSet#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#name ApplicationSet#name}
  */
  readonly name?: string;
}

export function applicationSetSpecIgnoreApplicationDifferencesToTerraform(struct?: ApplicationSetSpecIgnoreApplicationDifferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function applicationSetSpecIgnoreApplicationDifferencesToHclTerraform(struct?: ApplicationSetSpecIgnoreApplicationDifferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ApplicationSetSpecIgnoreApplicationDifferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecIgnoreApplicationDifferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecIgnoreApplicationDifferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._name = value.name;
    }
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

export class ApplicationSetSpecIgnoreApplicationDifferencesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecIgnoreApplicationDifferences[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecIgnoreApplicationDifferencesOutputReference {
    return new ApplicationSetSpecIgnoreApplicationDifferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecStrategyRollingSyncStepMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#key ApplicationSet#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#operator ApplicationSet#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#values ApplicationSet#values}
  */
  readonly values?: string[];
}

export function applicationSetSpecStrategyRollingSyncStepMatchExpressionsToTerraform(struct?: ApplicationSetSpecStrategyRollingSyncStepMatchExpressions | cdktf.IResolvable): any {
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


export function applicationSetSpecStrategyRollingSyncStepMatchExpressionsToHclTerraform(struct?: ApplicationSetSpecStrategyRollingSyncStepMatchExpressions | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecStrategyRollingSyncStepMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecStrategyRollingSyncStepMatchExpressions | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
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

export class ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecStrategyRollingSyncStepMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsOutputReference {
    return new ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecStrategyRollingSyncStep {
  /**
  * Maximum number of simultaneous Application updates in a group. Supports both integer and percentage string values (rounds down, but floored at 1 Application for >0%). Default is 100%, unbounded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#max_update ApplicationSet#max_update}
  */
  readonly maxUpdate?: string;
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#match_expressions ApplicationSet#match_expressions}
  */
  readonly matchExpressions?: ApplicationSetSpecStrategyRollingSyncStepMatchExpressions[] | cdktf.IResolvable;
}

export function applicationSetSpecStrategyRollingSyncStepToTerraform(struct?: ApplicationSetSpecStrategyRollingSyncStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_update: cdktf.stringToTerraform(struct!.maxUpdate),
    match_expressions: cdktf.listMapper(applicationSetSpecStrategyRollingSyncStepMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function applicationSetSpecStrategyRollingSyncStepToHclTerraform(struct?: ApplicationSetSpecStrategyRollingSyncStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_update: {
      value: cdktf.stringToHclTerraform(struct!.maxUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(applicationSetSpecStrategyRollingSyncStepMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecStrategyRollingSyncStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecStrategyRollingSyncStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUpdate = this._maxUpdate;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecStrategyRollingSyncStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUpdate = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUpdate = value.maxUpdate;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // max_update - computed: false, optional: true, required: false
  private _maxUpdate?: string; 
  public get maxUpdate() {
    return this.getStringAttribute('max_update');
  }
  public set maxUpdate(value: string) {
    this._maxUpdate = value;
  }
  public resetMaxUpdate() {
    this._maxUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUpdateInput() {
    return this._maxUpdate;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ApplicationSetSpecStrategyRollingSyncStepMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ApplicationSetSpecStrategyRollingSyncStepMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}

export class ApplicationSetSpecStrategyRollingSyncStepList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecStrategyRollingSyncStep[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecStrategyRollingSyncStepOutputReference {
    return new ApplicationSetSpecStrategyRollingSyncStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecStrategyRollingSync {
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#step ApplicationSet#step}
  */
  readonly step: ApplicationSetSpecStrategyRollingSyncStep[] | cdktf.IResolvable;
}

export function applicationSetSpecStrategyRollingSyncToTerraform(struct?: ApplicationSetSpecStrategyRollingSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step: cdktf.listMapper(applicationSetSpecStrategyRollingSyncStepToTerraform, true)(struct!.step),
  }
}


export function applicationSetSpecStrategyRollingSyncToHclTerraform(struct?: ApplicationSetSpecStrategyRollingSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step: {
      value: cdktf.listMapperHcl(applicationSetSpecStrategyRollingSyncStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecStrategyRollingSyncStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecStrategyRollingSyncOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecStrategyRollingSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecStrategyRollingSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._step.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._step.internalValue = value.step;
    }
  }

  // step - computed: false, optional: false, required: true
  private _step = new ApplicationSetSpecStrategyRollingSyncStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: ApplicationSetSpecStrategyRollingSyncStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}

export class ApplicationSetSpecStrategyRollingSyncList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecStrategyRollingSync[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecStrategyRollingSyncOutputReference {
    return new ApplicationSetSpecStrategyRollingSyncOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecStrategy {
  /**
  * Type of progressive sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#type ApplicationSet#type}
  */
  readonly type: string;
  /**
  * rolling_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#rolling_sync ApplicationSet#rolling_sync}
  */
  readonly rollingSync?: ApplicationSetSpecStrategyRollingSync[] | cdktf.IResolvable;
}

export function applicationSetSpecStrategyToTerraform(struct?: ApplicationSetSpecStrategyOutputReference | ApplicationSetSpecStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    rolling_sync: cdktf.listMapper(applicationSetSpecStrategyRollingSyncToTerraform, true)(struct!.rollingSync),
  }
}


export function applicationSetSpecStrategyToHclTerraform(struct?: ApplicationSetSpecStrategyOutputReference | ApplicationSetSpecStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rolling_sync: {
      value: cdktf.listMapperHcl(applicationSetSpecStrategyRollingSyncToHclTerraform, true)(struct!.rollingSync),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecStrategyRollingSyncList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._rollingSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingSync = this._rollingSync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._rollingSync.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._rollingSync.internalValue = value.rollingSync;
    }
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

  // rolling_sync - computed: false, optional: true, required: false
  private _rollingSync = new ApplicationSetSpecStrategyRollingSyncList(this, "rolling_sync", false);
  public get rollingSync() {
    return this._rollingSync;
  }
  public putRollingSync(value: ApplicationSetSpecStrategyRollingSync[] | cdktf.IResolvable) {
    this._rollingSync.internalValue = value;
  }
  public resetRollingSync() {
    this._rollingSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingSyncInput() {
    return this._rollingSync.internalValue;
  }
}
export interface ApplicationSetSpecSyncPolicy {
  /**
  * Represents the policy applied on the generated applications. Possible values are create-only, create-update, create-delete, and sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#applications_sync ApplicationSet#applications_sync}
  */
  readonly applicationsSync?: string;
  /**
  * Label selector used to narrow the scope of targeted clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#preserve_resources_on_deletion ApplicationSet#preserve_resources_on_deletion}
  */
  readonly preserveResourcesOnDeletion?: boolean | cdktf.IResolvable;
}

export function applicationSetSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecSyncPolicyOutputReference | ApplicationSetSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications_sync: cdktf.stringToTerraform(struct!.applicationsSync),
    preserve_resources_on_deletion: cdktf.booleanToTerraform(struct!.preserveResourcesOnDeletion),
  }
}


export function applicationSetSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecSyncPolicyOutputReference | ApplicationSetSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications_sync: {
      value: cdktf.stringToHclTerraform(struct!.applicationsSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_resources_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.preserveResourcesOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationsSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationsSync = this._applicationsSync;
    }
    if (this._preserveResourcesOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveResourcesOnDeletion = this._preserveResourcesOnDeletion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationsSync = undefined;
      this._preserveResourcesOnDeletion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationsSync = value.applicationsSync;
      this._preserveResourcesOnDeletion = value.preserveResourcesOnDeletion;
    }
  }

  // applications_sync - computed: false, optional: true, required: false
  private _applicationsSync?: string; 
  public get applicationsSync() {
    return this.getStringAttribute('applications_sync');
  }
  public set applicationsSync(value: string) {
    this._applicationsSync = value;
  }
  public resetApplicationsSync() {
    this._applicationsSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsSyncInput() {
    return this._applicationsSync;
  }

  // preserve_resources_on_deletion - computed: false, optional: true, required: false
  private _preserveResourcesOnDeletion?: boolean | cdktf.IResolvable; 
  public get preserveResourcesOnDeletion() {
    return this.getBooleanAttribute('preserve_resources_on_deletion');
  }
  public set preserveResourcesOnDeletion(value: boolean | cdktf.IResolvable) {
    this._preserveResourcesOnDeletion = value;
  }
  public resetPreserveResourcesOnDeletion() {
    this._preserveResourcesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveResourcesOnDeletionInput() {
    return this._preserveResourcesOnDeletion;
  }
}
export interface ApplicationSetSpecTemplateMetadata {
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
  readonly name: string;
  /**
  * Namespace of the resulting Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#namespace ApplicationSet#namespace}
  */
  readonly namespace?: string;
}

export function applicationSetSpecTemplateMetadataToTerraform(struct?: ApplicationSetSpecTemplateMetadataOutputReference | ApplicationSetSpecTemplateMetadata): any {
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


export function applicationSetSpecTemplateMetadataToHclTerraform(struct?: ApplicationSetSpecTemplateMetadataOutputReference | ApplicationSetSpecTemplateMetadata): any {
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

export class ApplicationSetSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateMetadata | undefined) {
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
}
export interface ApplicationSetSpecTemplateSpecDestination {
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

export function applicationSetSpecTemplateSpecDestinationToTerraform(struct?: ApplicationSetSpecTemplateSpecDestinationOutputReference | ApplicationSetSpecTemplateSpecDestination): any {
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


export function applicationSetSpecTemplateSpecDestinationToHclTerraform(struct?: ApplicationSetSpecTemplateSpecDestinationOutputReference | ApplicationSetSpecTemplateSpecDestination): any {
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

export class ApplicationSetSpecTemplateSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecDestination | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecDestination | undefined) {
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
export interface ApplicationSetSpecTemplateSpecIgnoreDifference {
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

export function applicationSetSpecTemplateSpecIgnoreDifferenceToTerraform(struct?: ApplicationSetSpecTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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


export function applicationSetSpecTemplateSpecIgnoreDifferenceToHclTerraform(struct?: ApplicationSetSpecTemplateSpecIgnoreDifference | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecIgnoreDifferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecIgnoreDifference | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecIgnoreDifferenceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecIgnoreDifference[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecIgnoreDifferenceOutputReference {
    return new ApplicationSetSpecTemplateSpecIgnoreDifferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecInfo {
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

export function applicationSetSpecTemplateSpecInfoToTerraform(struct?: ApplicationSetSpecTemplateSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecTemplateSpecInfoToHclTerraform(struct?: ApplicationSetSpecTemplateSpecInfo | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecInfo | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecInfoList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecInfoOutputReference {
    return new ApplicationSetSpecTemplateSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar {
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

export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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


export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla {
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

export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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


export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet {
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
  readonly extVar?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable;
  /**
  * tla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#tla ApplicationSet#tla}
  */
  readonly tla?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable;
}

export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_var: cdktf.listMapper(applicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarToTerraform, true)(struct!.extVar),
    tla: cdktf.listMapper(applicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaToTerraform, true)(struct!.tla),
  }
}


export function applicationSetSpecTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetOutputReference | ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarToHclTerraform, true)(struct!.extVar),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarList",
    },
    tla: {
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaToHclTerraform, true)(struct!.tla),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet | undefined) {
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
  private _extVar = new ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVarList(this, "ext_var", false);
  public get extVar() {
    return this._extVar;
  }
  public putExtVar(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetExtVar[] | cdktf.IResolvable) {
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
  private _tla = new ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTlaList(this, "tla", true);
  public get tla() {
    return this._tla;
  }
  public putTla(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetTla[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecTemplateSpecSourceDirectory {
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
  readonly jsonnet?: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet;
}

export function applicationSetSpecTemplateSpecSourceDirectoryToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecTemplateSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: applicationSetSpecTemplateSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
  }
}


export function applicationSetSpecTemplateSpecSourceDirectoryToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceDirectoryOutputReference | ApplicationSetSpecTemplateSpecSourceDirectory): any {
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
      value: applicationSetSpecTemplateSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceDirectory | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceDirectory | undefined) {
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
  private _jsonnet = new ApplicationSetSpecTemplateSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: ApplicationSetSpecTemplateSpecSourceDirectoryJsonnet) {
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
export interface ApplicationSetSpecTemplateSpecSourceHelmFileParameter {
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

export function applicationSetSpecTemplateSpecSourceHelmFileParameterToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function applicationSetSpecTemplateSpecSourceHelmFileParameterToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmFileParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecSourceHelmFileParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceHelmFileParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecSourceHelmFileParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceHelmFileParameterOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceHelmFileParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceHelmParameter {
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

export function applicationSetSpecTemplateSpecSourceHelmParameterToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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


export function applicationSetSpecTemplateSpecSourceHelmParameterToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmParameter | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecSourceHelmParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceHelmParameter | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecSourceHelmParameterList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourceHelmParameter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceHelmParameterOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceHelmParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceHelm {
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
  readonly fileParameter?: ApplicationSetSpecTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#parameter ApplicationSet#parameter}
  */
  readonly parameter?: ApplicationSetSpecTemplateSpecSourceHelmParameter[] | cdktf.IResolvable;
}

export function applicationSetSpecTemplateSpecSourceHelmToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmOutputReference | ApplicationSetSpecTemplateSpecSourceHelm): any {
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
    file_parameter: cdktf.listMapper(applicationSetSpecTemplateSpecSourceHelmFileParameterToTerraform, true)(struct!.fileParameter),
    parameter: cdktf.listMapper(applicationSetSpecTemplateSpecSourceHelmParameterToTerraform, true)(struct!.parameter),
  }
}


export function applicationSetSpecTemplateSpecSourceHelmToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceHelmOutputReference | ApplicationSetSpecTemplateSpecSourceHelm): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceHelmFileParameterToHclTerraform, true)(struct!.fileParameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceHelmFileParameterList",
    },
    parameter: {
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceHelmParameterToHclTerraform, true)(struct!.parameter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceHelmParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceHelm | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceHelm | undefined) {
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
  private _fileParameter = new ApplicationSetSpecTemplateSpecSourceHelmFileParameterList(this, "file_parameter", true);
  public get fileParameter() {
    return this._fileParameter;
  }
  public putFileParameter(value: ApplicationSetSpecTemplateSpecSourceHelmFileParameter[] | cdktf.IResolvable) {
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
  private _parameter = new ApplicationSetSpecTemplateSpecSourceHelmParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: ApplicationSetSpecTemplateSpecSourceHelmParameter[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget {
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

export function applicationSetSpecTemplateSpecSourceKustomizePatchesTargetToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget): any {
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


export function applicationSetSpecTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizePatchesTargetOutputReference | ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget): any {
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

export class ApplicationSetSpecTemplateSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget | undefined) {
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
export interface ApplicationSetSpecTemplateSpecSourceKustomizePatches {
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
  readonly target: ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget;
}

export function applicationSetSpecTemplateSpecSourceKustomizePatchesToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: applicationSetSpecTemplateSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function applicationSetSpecTemplateSpecSourceKustomizePatchesToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizePatches | cdktf.IResolvable): any {
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
      value: applicationSetSpecTemplateSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceKustomizePatchesTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
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
  private _target = new ApplicationSetSpecTemplateSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ApplicationSetSpecTemplateSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class ApplicationSetSpecTemplateSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceKustomizePatchesOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourceKustomize {
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
  readonly patches?: ApplicationSetSpecTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable;
}

export function applicationSetSpecTemplateSpecSourceKustomizeToTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecTemplateSpecSourceKustomize): any {
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
    patches: cdktf.listMapper(applicationSetSpecTemplateSpecSourceKustomizePatchesToTerraform, true)(struct!.patches),
  }
}


export function applicationSetSpecTemplateSpecSourceKustomizeToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourceKustomizeOutputReference | ApplicationSetSpecTemplateSpecSourceKustomize): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceKustomizePatchesToHclTerraform, true)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceKustomizePatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourceKustomize | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourceKustomize | undefined) {
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
  private _patches = new ApplicationSetSpecTemplateSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: ApplicationSetSpecTemplateSpecSourceKustomizePatches[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecTemplateSpecSourcePluginEnv {
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

export function applicationSetSpecTemplateSpecSourcePluginEnvToTerraform(struct?: ApplicationSetSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationSetSpecTemplateSpecSourcePluginEnvToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class ApplicationSetSpecTemplateSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
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

export class ApplicationSetSpecTemplateSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourcePluginEnvOutputReference {
    return new ApplicationSetSpecTemplateSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSourcePlugin {
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
  readonly env?: ApplicationSetSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function applicationSetSpecTemplateSpecSourcePluginToTerraform(struct?: ApplicationSetSpecTemplateSpecSourcePluginOutputReference | ApplicationSetSpecTemplateSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(applicationSetSpecTemplateSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function applicationSetSpecTemplateSpecSourcePluginToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSourcePluginOutputReference | ApplicationSetSpecTemplateSpecSourcePlugin): any {
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
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSourcePlugin | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSourcePlugin | undefined) {
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
  private _env = new ApplicationSetSpecTemplateSpecSourcePluginEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: ApplicationSetSpecTemplateSpecSourcePluginEnv[] | cdktf.IResolvable) {
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
export interface ApplicationSetSpecTemplateSpecSource {
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
  readonly repoUrl: string;
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
  readonly directory?: ApplicationSetSpecTemplateSpecSourceDirectory;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#helm ApplicationSet#helm}
  */
  readonly helm?: ApplicationSetSpecTemplateSpecSourceHelm;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#kustomize ApplicationSet#kustomize}
  */
  readonly kustomize?: ApplicationSetSpecTemplateSpecSourceKustomize;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#plugin ApplicationSet#plugin}
  */
  readonly plugin?: ApplicationSetSpecTemplateSpecSourcePlugin;
}

export function applicationSetSpecTemplateSpecSourceToTerraform(struct?: ApplicationSetSpecTemplateSpecSource | cdktf.IResolvable): any {
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
    directory: applicationSetSpecTemplateSpecSourceDirectoryToTerraform(struct!.directory),
    helm: applicationSetSpecTemplateSpecSourceHelmToTerraform(struct!.helm),
    kustomize: applicationSetSpecTemplateSpecSourceKustomizeToTerraform(struct!.kustomize),
    plugin: applicationSetSpecTemplateSpecSourcePluginToTerraform(struct!.plugin),
  }
}


export function applicationSetSpecTemplateSpecSourceToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSource | cdktf.IResolvable): any {
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
      value: applicationSetSpecTemplateSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceDirectoryList",
    },
    helm: {
      value: applicationSetSpecTemplateSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceHelmList",
    },
    kustomize: {
      value: applicationSetSpecTemplateSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceKustomizeList",
    },
    plugin: {
      value: applicationSetSpecTemplateSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSetSpecTemplateSpecSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSource | cdktf.IResolvable | undefined) {
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

  // directory - computed: false, optional: true, required: false
  private _directory = new ApplicationSetSpecTemplateSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: ApplicationSetSpecTemplateSpecSourceDirectory) {
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
  private _helm = new ApplicationSetSpecTemplateSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: ApplicationSetSpecTemplateSpecSourceHelm) {
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
  private _kustomize = new ApplicationSetSpecTemplateSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: ApplicationSetSpecTemplateSpecSourceKustomize) {
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
  private _plugin = new ApplicationSetSpecTemplateSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: ApplicationSetSpecTemplateSpecSourcePlugin) {
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

export class ApplicationSetSpecTemplateSpecSourceList extends cdktf.ComplexList {
  public internalValue? : ApplicationSetSpecTemplateSpecSource[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSetSpecTemplateSpecSourceOutputReference {
    return new ApplicationSetSpecTemplateSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSetSpecTemplateSpecSyncPolicyAutomated {
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

export function applicationSetSpecTemplateSpecSyncPolicyAutomatedToTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyAutomated): any {
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


export function applicationSetSpecTemplateSpecSyncPolicyAutomatedToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyAutomatedOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyAutomated): any {
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

export class ApplicationSetSpecTemplateSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSyncPolicyAutomated | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSyncPolicyAutomated | undefined) {
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
export interface ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata {
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

export function applicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function applicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata): any {
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

export class ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata | undefined) {
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
export interface ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff {
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

export function applicationSetSpecTemplateSpecSyncPolicyRetryBackoffToTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff): any {
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


export function applicationSetSpecTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoffOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff): any {
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

export class ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff | undefined) {
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
export interface ApplicationSetSpecTemplateSpecSyncPolicyRetry {
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
  readonly backoff?: ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff;
}

export function applicationSetSpecTemplateSpecSyncPolicyRetryToTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: applicationSetSpecTemplateSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function applicationSetSpecTemplateSpecSyncPolicyRetryToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyRetryOutputReference | ApplicationSetSpecTemplateSpecSyncPolicyRetry): any {
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
      value: applicationSetSpecTemplateSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSyncPolicyRetry | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSyncPolicyRetry | undefined) {
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
  private _backoff = new ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: ApplicationSetSpecTemplateSpecSyncPolicyRetryBackoff) {
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
export interface ApplicationSetSpecTemplateSpecSyncPolicy {
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
  readonly automated?: ApplicationSetSpecTemplateSpecSyncPolicyAutomated;
  /**
  * managed_namespace_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#managed_namespace_metadata ApplicationSet#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#retry ApplicationSet#retry}
  */
  readonly retry?: ApplicationSetSpecTemplateSpecSyncPolicyRetry;
}

export function applicationSetSpecTemplateSpecSyncPolicyToTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecTemplateSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: applicationSetSpecTemplateSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: applicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: applicationSetSpecTemplateSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function applicationSetSpecTemplateSpecSyncPolicyToHclTerraform(struct?: ApplicationSetSpecTemplateSpecSyncPolicyOutputReference | ApplicationSetSpecTemplateSpecSyncPolicy): any {
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
      value: applicationSetSpecTemplateSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecSyncPolicyAutomatedList",
    },
    managed_namespace_metadata: {
      value: applicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataList",
    },
    retry: {
      value: applicationSetSpecTemplateSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpecSyncPolicy | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpecSyncPolicy | undefined) {
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
  private _automated = new ApplicationSetSpecTemplateSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: ApplicationSetSpecTemplateSpecSyncPolicyAutomated) {
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
  private _managedNamespaceMetadata = new ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: ApplicationSetSpecTemplateSpecSyncPolicyManagedNamespaceMetadata) {
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
  private _retry = new ApplicationSetSpecTemplateSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: ApplicationSetSpecTemplateSpecSyncPolicyRetry) {
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
export interface ApplicationSetSpecTemplateSpec {
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
  readonly destination: ApplicationSetSpecTemplateSpecDestination;
  /**
  * ignore_difference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_difference ApplicationSet#ignore_difference}
  */
  readonly ignoreDifference?: ApplicationSetSpecTemplateSpecIgnoreDifference[] | cdktf.IResolvable;
  /**
  * info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#info ApplicationSet#info}
  */
  readonly info?: ApplicationSetSpecTemplateSpecInfo[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#source ApplicationSet#source}
  */
  readonly source: ApplicationSetSpecTemplateSpecSource[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecTemplateSpecSyncPolicy;
}

export function applicationSetSpecTemplateSpecToTerraform(struct?: ApplicationSetSpecTemplateSpecOutputReference | ApplicationSetSpecTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    destination: applicationSetSpecTemplateSpecDestinationToTerraform(struct!.destination),
    ignore_difference: cdktf.listMapper(applicationSetSpecTemplateSpecIgnoreDifferenceToTerraform, true)(struct!.ignoreDifference),
    info: cdktf.listMapper(applicationSetSpecTemplateSpecInfoToTerraform, true)(struct!.info),
    source: cdktf.listMapper(applicationSetSpecTemplateSpecSourceToTerraform, true)(struct!.source),
    sync_policy: applicationSetSpecTemplateSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function applicationSetSpecTemplateSpecToHclTerraform(struct?: ApplicationSetSpecTemplateSpecOutputReference | ApplicationSetSpecTemplateSpec): any {
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
      value: applicationSetSpecTemplateSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecDestinationList",
    },
    ignore_difference: {
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecIgnoreDifferenceToHclTerraform, true)(struct!.ignoreDifference),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecIgnoreDifferenceList",
    },
    info: {
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecInfoToHclTerraform, true)(struct!.info),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationSetSpecTemplateSpecInfoList",
    },
    source: {
      value: cdktf.listMapperHcl(applicationSetSpecTemplateSpecSourceToHclTerraform, true)(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSourceList",
    },
    sync_policy: {
      value: applicationSetSpecTemplateSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplateSpec | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplateSpec | undefined) {
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

  // destination - computed: false, optional: false, required: true
  private _destination = new ApplicationSetSpecTemplateSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: ApplicationSetSpecTemplateSpecDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_difference - computed: false, optional: true, required: false
  private _ignoreDifference = new ApplicationSetSpecTemplateSpecIgnoreDifferenceList(this, "ignore_difference", false);
  public get ignoreDifference() {
    return this._ignoreDifference;
  }
  public putIgnoreDifference(value: ApplicationSetSpecTemplateSpecIgnoreDifference[] | cdktf.IResolvable) {
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
  private _info = new ApplicationSetSpecTemplateSpecInfoList(this, "info", true);
  public get info() {
    return this._info;
  }
  public putInfo(value: ApplicationSetSpecTemplateSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new ApplicationSetSpecTemplateSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }
  public putSource(value: ApplicationSetSpecTemplateSpecSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new ApplicationSetSpecTemplateSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecTemplateSpecSyncPolicy) {
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
export interface ApplicationSetSpecTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#metadata ApplicationSet#metadata}
  */
  readonly metadata: ApplicationSetSpecTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#spec ApplicationSet#spec}
  */
  readonly spec: ApplicationSetSpecTemplateSpec;
}

export function applicationSetSpecTemplateToTerraform(struct?: ApplicationSetSpecTemplateOutputReference | ApplicationSetSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: applicationSetSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: applicationSetSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function applicationSetSpecTemplateToHclTerraform(struct?: ApplicationSetSpecTemplateOutputReference | ApplicationSetSpecTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: applicationSetSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateMetadataList",
    },
    spec: {
      value: applicationSetSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpecTemplate | undefined {
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

  public set internalValue(value: ApplicationSetSpecTemplate | undefined) {
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ApplicationSetSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApplicationSetSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ApplicationSetSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ApplicationSetSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface ApplicationSetSpec {
  /**
  * Enable use of [Go Text Template](https://pkg.go.dev/text/template).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#go_template ApplicationSet#go_template}
  */
  readonly goTemplate?: boolean | cdktf.IResolvable;
  /**
  * Optional list of [Go Templating Options](https://pkg.go.dev/text/template#Template.Option). Only relevant if `go_template` is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#go_template_options ApplicationSet#go_template_options}
  */
  readonly goTemplateOptions?: string[];
  /**
  * Application set template patch, as in the [Argo CD ApplicationSet spec](https://argocd-applicationset.readthedocs.io/en/stable/fields/#templatepatch).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template_patch ApplicationSet#template_patch}
  */
  readonly templatePatch?: string;
  /**
  * generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#generator ApplicationSet#generator}
  */
  readonly generator: ApplicationSetSpecGenerator[] | cdktf.IResolvable;
  /**
  * ignore_application_differences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#ignore_application_differences ApplicationSet#ignore_application_differences}
  */
  readonly ignoreApplicationDifferences?: ApplicationSetSpecIgnoreApplicationDifferences[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#strategy ApplicationSet#strategy}
  */
  readonly strategy?: ApplicationSetSpecStrategy;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#sync_policy ApplicationSet#sync_policy}
  */
  readonly syncPolicy?: ApplicationSetSpecSyncPolicy;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.11.2/docs/resources/application_set#template ApplicationSet#template}
  */
  readonly template: ApplicationSetSpecTemplate;
}

export function applicationSetSpecToTerraform(struct?: ApplicationSetSpecOutputReference | ApplicationSetSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    go_template: cdktf.booleanToTerraform(struct!.goTemplate),
    go_template_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.goTemplateOptions),
    template_patch: cdktf.stringToTerraform(struct!.templatePatch),
    generator: cdktf.listMapper(applicationSetSpecGeneratorToTerraform, true)(struct!.generator),
    ignore_application_differences: cdktf.listMapper(applicationSetSpecIgnoreApplicationDifferencesToTerraform, true)(struct!.ignoreApplicationDifferences),
    strategy: applicationSetSpecStrategyToTerraform(struct!.strategy),
    sync_policy: applicationSetSpecSyncPolicyToTerraform(struct!.syncPolicy),
    template: applicationSetSpecTemplateToTerraform(struct!.template),
  }
}


export function applicationSetSpecToHclTerraform(struct?: ApplicationSetSpecOutputReference | ApplicationSetSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    go_template: {
      value: cdktf.booleanToHclTerraform(struct!.goTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    go_template_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.goTemplateOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_patch: {
      value: cdktf.stringToHclTerraform(struct!.templatePatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generator: {
      value: cdktf.listMapperHcl(applicationSetSpecGeneratorToHclTerraform, true)(struct!.generator),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecGeneratorList",
    },
    ignore_application_differences: {
      value: cdktf.listMapperHcl(applicationSetSpecIgnoreApplicationDifferencesToHclTerraform, true)(struct!.ignoreApplicationDifferences),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecIgnoreApplicationDifferencesList",
    },
    strategy: {
      value: applicationSetSpecStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecStrategyList",
    },
    sync_policy: {
      value: applicationSetSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecSyncPolicyList",
    },
    template: {
      value: applicationSetSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSetSpecTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSetSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSetSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.goTemplate = this._goTemplate;
    }
    if (this._goTemplateOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.goTemplateOptions = this._goTemplateOptions;
    }
    if (this._templatePatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePatch = this._templatePatch;
    }
    if (this._generator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generator = this._generator?.internalValue;
    }
    if (this._ignoreApplicationDifferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreApplicationDifferences = this._ignoreApplicationDifferences?.internalValue;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSetSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goTemplate = undefined;
      this._goTemplateOptions = undefined;
      this._templatePatch = undefined;
      this._generator.internalValue = undefined;
      this._ignoreApplicationDifferences.internalValue = undefined;
      this._strategy.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
      this._template.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goTemplate = value.goTemplate;
      this._goTemplateOptions = value.goTemplateOptions;
      this._templatePatch = value.templatePatch;
      this._generator.internalValue = value.generator;
      this._ignoreApplicationDifferences.internalValue = value.ignoreApplicationDifferences;
      this._strategy.internalValue = value.strategy;
      this._syncPolicy.internalValue = value.syncPolicy;
      this._template.internalValue = value.template;
    }
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
    return cdktf.Fn.tolist(this.getListAttribute('go_template_options'));
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

  // ignore_application_differences - computed: false, optional: true, required: false
  private _ignoreApplicationDifferences = new ApplicationSetSpecIgnoreApplicationDifferencesList(this, "ignore_application_differences", false);
  public get ignoreApplicationDifferences() {
    return this._ignoreApplicationDifferences;
  }
  public putIgnoreApplicationDifferences(value: ApplicationSetSpecIgnoreApplicationDifferences[] | cdktf.IResolvable) {
    this._ignoreApplicationDifferences.internalValue = value;
  }
  public resetIgnoreApplicationDifferences() {
    this._ignoreApplicationDifferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreApplicationDifferencesInput() {
    return this._ignoreApplicationDifferences.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ApplicationSetSpecStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ApplicationSetSpecStrategy) {
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
  private _syncPolicy = new ApplicationSetSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: ApplicationSetSpecSyncPolicy) {
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
  private _template = new ApplicationSetSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: ApplicationSetSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
