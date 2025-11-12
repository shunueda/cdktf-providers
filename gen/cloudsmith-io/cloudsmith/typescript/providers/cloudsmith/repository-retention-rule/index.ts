// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryRetentionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#id RepositoryRetentionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#namespace RepositoryRetentionRule#namespace}
  */
  readonly namespace: string;
  /**
  * The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#repository RepositoryRetentionRule#repository}
  */
  readonly repository: string;
  /**
  * The maximum number of packages to retain. Must be between 0 and 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_count_limit RepositoryRetentionRule#retention_count_limit}
  */
  readonly retentionCountLimit?: number;
  /**
  * The number of days of packages to retain. Must be between 0 and 180. Defaults to 28 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_days_limit RepositoryRetentionRule#retention_days_limit}
  */
  readonly retentionDaysLimit?: number;
  /**
  * If true, the retention lifecycle rules will be activated for the repository and settings will be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_enabled RepositoryRetentionRule#retention_enabled}
  */
  readonly retentionEnabled: boolean | cdktf.IResolvable;
  /**
  * If true, retention will apply to packages by package formats rather than across all package formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_group_by_format RepositoryRetentionRule#retention_group_by_format}
  */
  readonly retentionGroupByFormat?: boolean | cdktf.IResolvable;
  /**
  * If true, retention will apply to groups of packages by name rather than all packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_group_by_name RepositoryRetentionRule#retention_group_by_name}
  */
  readonly retentionGroupByName?: boolean | cdktf.IResolvable;
  /**
  * If true, retention will apply to packages by package type rather than across all package types for one or more formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_group_by_package_type RepositoryRetentionRule#retention_group_by_package_type}
  */
  readonly retentionGroupByPackageType?: boolean | cdktf.IResolvable;
  /**
  * A package search expression which, if provided, filters the packages to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_package_query_string RepositoryRetentionRule#retention_package_query_string}
  */
  readonly retentionPackageQueryString?: string;
  /**
  * The maximum total size (in bytes) of packages to retain. Must be between 0 and 21474836480 (21.47 GB / 21474.83 MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#retention_size_limit RepositoryRetentionRule#retention_size_limit}
  */
  readonly retentionSizeLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule cloudsmith_repository_retention_rule}
*/
export class RepositoryRetentionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_repository_retention_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryRetentionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryRetentionRule to import
  * @param importFromId The id of the existing RepositoryRetentionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryRetentionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_repository_retention_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/repository_retention_rule cloudsmith_repository_retention_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryRetentionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryRetentionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_repository_retention_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66',
        providerVersionConstraint: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._namespace = config.namespace;
    this._repository = config.repository;
    this._retentionCountLimit = config.retentionCountLimit;
    this._retentionDaysLimit = config.retentionDaysLimit;
    this._retentionEnabled = config.retentionEnabled;
    this._retentionGroupByFormat = config.retentionGroupByFormat;
    this._retentionGroupByName = config.retentionGroupByName;
    this._retentionGroupByPackageType = config.retentionGroupByPackageType;
    this._retentionPackageQueryString = config.retentionPackageQueryString;
    this._retentionSizeLimit = config.retentionSizeLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
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

  // retention_count_limit - computed: false, optional: true, required: false
  private _retentionCountLimit?: number; 
  public get retentionCountLimit() {
    return this.getNumberAttribute('retention_count_limit');
  }
  public set retentionCountLimit(value: number) {
    this._retentionCountLimit = value;
  }
  public resetRetentionCountLimit() {
    this._retentionCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionCountLimitInput() {
    return this._retentionCountLimit;
  }

  // retention_days_limit - computed: false, optional: true, required: false
  private _retentionDaysLimit?: number; 
  public get retentionDaysLimit() {
    return this.getNumberAttribute('retention_days_limit');
  }
  public set retentionDaysLimit(value: number) {
    this._retentionDaysLimit = value;
  }
  public resetRetentionDaysLimit() {
    this._retentionDaysLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysLimitInput() {
    return this._retentionDaysLimit;
  }

  // retention_enabled - computed: false, optional: false, required: true
  private _retentionEnabled?: boolean | cdktf.IResolvable; 
  public get retentionEnabled() {
    return this.getBooleanAttribute('retention_enabled');
  }
  public set retentionEnabled(value: boolean | cdktf.IResolvable) {
    this._retentionEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionEnabledInput() {
    return this._retentionEnabled;
  }

  // retention_group_by_format - computed: false, optional: true, required: false
  private _retentionGroupByFormat?: boolean | cdktf.IResolvable; 
  public get retentionGroupByFormat() {
    return this.getBooleanAttribute('retention_group_by_format');
  }
  public set retentionGroupByFormat(value: boolean | cdktf.IResolvable) {
    this._retentionGroupByFormat = value;
  }
  public resetRetentionGroupByFormat() {
    this._retentionGroupByFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionGroupByFormatInput() {
    return this._retentionGroupByFormat;
  }

  // retention_group_by_name - computed: false, optional: true, required: false
  private _retentionGroupByName?: boolean | cdktf.IResolvable; 
  public get retentionGroupByName() {
    return this.getBooleanAttribute('retention_group_by_name');
  }
  public set retentionGroupByName(value: boolean | cdktf.IResolvable) {
    this._retentionGroupByName = value;
  }
  public resetRetentionGroupByName() {
    this._retentionGroupByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionGroupByNameInput() {
    return this._retentionGroupByName;
  }

  // retention_group_by_package_type - computed: false, optional: true, required: false
  private _retentionGroupByPackageType?: boolean | cdktf.IResolvable; 
  public get retentionGroupByPackageType() {
    return this.getBooleanAttribute('retention_group_by_package_type');
  }
  public set retentionGroupByPackageType(value: boolean | cdktf.IResolvable) {
    this._retentionGroupByPackageType = value;
  }
  public resetRetentionGroupByPackageType() {
    this._retentionGroupByPackageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionGroupByPackageTypeInput() {
    return this._retentionGroupByPackageType;
  }

  // retention_package_query_string - computed: false, optional: true, required: false
  private _retentionPackageQueryString?: string; 
  public get retentionPackageQueryString() {
    return this.getStringAttribute('retention_package_query_string');
  }
  public set retentionPackageQueryString(value: string) {
    this._retentionPackageQueryString = value;
  }
  public resetRetentionPackageQueryString() {
    this._retentionPackageQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPackageQueryStringInput() {
    return this._retentionPackageQueryString;
  }

  // retention_size_limit - computed: false, optional: true, required: false
  private _retentionSizeLimit?: number; 
  public get retentionSizeLimit() {
    return this.getNumberAttribute('retention_size_limit');
  }
  public set retentionSizeLimit(value: number) {
    this._retentionSizeLimit = value;
  }
  public resetRetentionSizeLimit() {
    this._retentionSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionSizeLimitInput() {
    return this._retentionSizeLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      repository: cdktf.stringToTerraform(this._repository),
      retention_count_limit: cdktf.numberToTerraform(this._retentionCountLimit),
      retention_days_limit: cdktf.numberToTerraform(this._retentionDaysLimit),
      retention_enabled: cdktf.booleanToTerraform(this._retentionEnabled),
      retention_group_by_format: cdktf.booleanToTerraform(this._retentionGroupByFormat),
      retention_group_by_name: cdktf.booleanToTerraform(this._retentionGroupByName),
      retention_group_by_package_type: cdktf.booleanToTerraform(this._retentionGroupByPackageType),
      retention_package_query_string: cdktf.stringToTerraform(this._retentionPackageQueryString),
      retention_size_limit: cdktf.numberToTerraform(this._retentionSizeLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_count_limit: {
        value: cdktf.numberToHclTerraform(this._retentionCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_days_limit: {
        value: cdktf.numberToHclTerraform(this._retentionDaysLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retention_enabled: {
        value: cdktf.booleanToHclTerraform(this._retentionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_group_by_format: {
        value: cdktf.booleanToHclTerraform(this._retentionGroupByFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_group_by_name: {
        value: cdktf.booleanToHclTerraform(this._retentionGroupByName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_group_by_package_type: {
        value: cdktf.booleanToHclTerraform(this._retentionGroupByPackageType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_package_query_string: {
        value: cdktf.stringToHclTerraform(this._retentionPackageQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_size_limit: {
        value: cdktf.numberToHclTerraform(this._retentionSizeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
