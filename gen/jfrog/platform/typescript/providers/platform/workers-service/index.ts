// https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkersServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The worker action with which the worker is associated. Valid values: BEFORE_DOWNLOAD, AFTER_DOWNLOAD, BEFORE_UPLOAD, AFTER_CREATE, AFTER_BUILD_INFO_SAVE, AFTER_MOVE, BEFORE_PROPERTY_CREATE, BEFORE_PROPERTY_DELETE, AFTER_PROPERTY_CREATE, AFTER_PROPERTY_DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#action WorkersService#action}
  */
  readonly action: string;
  /**
  * Description of the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#description WorkersService#description}
  */
  readonly description?: string;
  /**
  * Whether to enable the worker immediately after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#enabled WorkersService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Defines the repositories to be used or excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#filter_criteria WorkersService#filter_criteria}
  */
  readonly filterCriteria: WorkersServiceFilterCriteria;
  /**
  * The unique ID of the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#key WorkersService#key}
  */
  readonly key: string;
  /**
  * The secrets to be added to the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#secrets WorkersService#secrets}
  */
  readonly secrets?: WorkersServiceSecrets[] | cdktf.IResolvable;
  /**
  * The worker script in TypeScript or JavaScript.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#source_code WorkersService#source_code}
  */
  readonly sourceCode: string;
}
export interface WorkersServiceFilterCriteriaArtifactFilterCriteria {
  /**
  * Define patterns to for all repository paths for repositories to be excluded in the repoKeys. Defines those repositories that do not trigger the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#exclude_patterns WorkersService#exclude_patterns}
  */
  readonly excludePatterns?: string[];
  /**
  * Define patterns to match all repository paths for repositories identified in the repoKeys. Defines those repositories that trigger the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#include_patterns WorkersService#include_patterns}
  */
  readonly includePatterns?: string[];
  /**
  * Defines which repositories are used when an action event occurs to trigger the worker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#repo_keys WorkersService#repo_keys}
  */
  readonly repoKeys: string[];
}

export function workersServiceFilterCriteriaArtifactFilterCriteriaToTerraform(struct?: WorkersServiceFilterCriteriaArtifactFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
    include_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePatterns),
    repo_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.repoKeys),
  }
}


export function workersServiceFilterCriteriaArtifactFilterCriteriaToHclTerraform(struct?: WorkersServiceFilterCriteriaArtifactFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    repo_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.repoKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersServiceFilterCriteriaArtifactFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersServiceFilterCriteriaArtifactFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    if (this._includePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePatterns = this._includePatterns;
    }
    if (this._repoKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoKeys = this._repoKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersServiceFilterCriteriaArtifactFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludePatterns = undefined;
      this._includePatterns = undefined;
      this._repoKeys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludePatterns = value.excludePatterns;
      this._includePatterns = value.includePatterns;
      this._repoKeys = value.repoKeys;
    }
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_patterns'));
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }

  // include_patterns - computed: false, optional: true, required: false
  private _includePatterns?: string[]; 
  public get includePatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('include_patterns'));
  }
  public set includePatterns(value: string[]) {
    this._includePatterns = value;
  }
  public resetIncludePatterns() {
    this._includePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePatternsInput() {
    return this._includePatterns;
  }

  // repo_keys - computed: false, optional: false, required: true
  private _repoKeys?: string[]; 
  public get repoKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('repo_keys'));
  }
  public set repoKeys(value: string[]) {
    this._repoKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoKeysInput() {
    return this._repoKeys;
  }
}
export interface WorkersServiceFilterCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#artifact_filter_criteria WorkersService#artifact_filter_criteria}
  */
  readonly artifactFilterCriteria: WorkersServiceFilterCriteriaArtifactFilterCriteria;
}

export function workersServiceFilterCriteriaToTerraform(struct?: WorkersServiceFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_filter_criteria: workersServiceFilterCriteriaArtifactFilterCriteriaToTerraform(struct!.artifactFilterCriteria),
  }
}


export function workersServiceFilterCriteriaToHclTerraform(struct?: WorkersServiceFilterCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_filter_criteria: {
      value: workersServiceFilterCriteriaArtifactFilterCriteriaToHclTerraform(struct!.artifactFilterCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "WorkersServiceFilterCriteriaArtifactFilterCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkersServiceFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkersServiceFilterCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactFilterCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactFilterCriteria = this._artifactFilterCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersServiceFilterCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactFilterCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactFilterCriteria.internalValue = value.artifactFilterCriteria;
    }
  }

  // artifact_filter_criteria - computed: false, optional: false, required: true
  private _artifactFilterCriteria = new WorkersServiceFilterCriteriaArtifactFilterCriteriaOutputReference(this, "artifact_filter_criteria");
  public get artifactFilterCriteria() {
    return this._artifactFilterCriteria;
  }
  public putArtifactFilterCriteria(value: WorkersServiceFilterCriteriaArtifactFilterCriteria) {
    this._artifactFilterCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactFilterCriteriaInput() {
    return this._artifactFilterCriteria.internalValue;
  }
}
export interface WorkersServiceSecrets {
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#key WorkersService#key}
  */
  readonly key: string;
  /**
  * The name of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#value WorkersService#value}
  */
  readonly value: string;
}

export function workersServiceSecretsToTerraform(struct?: WorkersServiceSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function workersServiceSecretsToHclTerraform(struct?: WorkersServiceSecrets | cdktf.IResolvable): any {
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

export class WorkersServiceSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkersServiceSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkersServiceSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class WorkersServiceSecretsList extends cdktf.ComplexList {
  public internalValue? : WorkersServiceSecrets[] | cdktf.IResolvable

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
  public get(index: number): WorkersServiceSecretsOutputReference {
    return new WorkersServiceSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service platform_workers_service}
*/
export class WorkersService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "platform_workers_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkersService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkersService to import
  * @param importFromId The id of the existing WorkersService that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkersService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "platform_workers_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/platform/2.2.6/docs/resources/workers_service platform_workers_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkersServiceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkersServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'platform_workers_service',
      terraformGeneratorMetadata: {
        providerName: 'platform',
        providerVersion: '2.2.6',
        providerVersionConstraint: '2.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filterCriteria.internalValue = config.filterCriteria;
    this._key = config.key;
    this._secrets.internalValue = config.secrets;
    this._sourceCode = config.sourceCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // filter_criteria - computed: false, optional: false, required: true
  private _filterCriteria = new WorkersServiceFilterCriteriaOutputReference(this, "filter_criteria");
  public get filterCriteria() {
    return this._filterCriteria;
  }
  public putFilterCriteria(value: WorkersServiceFilterCriteria) {
    this._filterCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCriteriaInput() {
    return this._filterCriteria.internalValue;
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

  // secrets - computed: false, optional: true, required: false
  private _secrets = new WorkersServiceSecretsList(this, "secrets", true);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: WorkersServiceSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // source_code - computed: false, optional: false, required: true
  private _sourceCode?: string; 
  public get sourceCode() {
    return this.getStringAttribute('source_code');
  }
  public set sourceCode(value: string) {
    this._sourceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeInput() {
    return this._sourceCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter_criteria: workersServiceFilterCriteriaToTerraform(this._filterCriteria.internalValue),
      key: cdktf.stringToTerraform(this._key),
      secrets: cdktf.listMapper(workersServiceSecretsToTerraform, false)(this._secrets.internalValue),
      source_code: cdktf.stringToTerraform(this._sourceCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_criteria: {
        value: workersServiceFilterCriteriaToHclTerraform(this._filterCriteria.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkersServiceFilterCriteria",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secrets: {
        value: cdktf.listMapperHcl(workersServiceSecretsToHclTerraform, false)(this._secrets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkersServiceSecretsList",
      },
      source_code: {
        value: cdktf.stringToHclTerraform(this._sourceCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
