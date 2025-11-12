// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to `true` it will enable alert on policy violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#alert_on_violation RepositoryConfAnalysis#alert_on_violation}
  */
  readonly alertOnViolation?: boolean | cdktf.IResolvable;
  /**
  * If set to `true` it will enable query blocking in case of a policy violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#block_on_violation RepositoryConfAnalysis#block_on_violation}
  */
  readonly blockOnViolation?: boolean | cdktf.IResolvable;
  /**
  * Valid values are: `identity`, `client`, `repo`, `sidecar`. The default behavior is to set only the `identity` when this option is enabled, but you can also opt to add the contents of `client`, `repo`,  `sidecar` logging blocks as query comments.  [Learn more](https://support.cyral.com/support/solutions/articles/44002218978).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#comment_annotation_groups RepositoryConfAnalysis#comment_annotation_groups}
  */
  readonly commentAnnotationGroups?: string[];
  /**
  * If set to `true` it will *disable* filter analysis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#disable_filter_analysis RepositoryConfAnalysis#disable_filter_analysis}
  */
  readonly disableFilterAnalysis?: boolean | cdktf.IResolvable;
  /**
  * If set to `true` it will *disable* preconfigured alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#disable_pre_configured_alerts RepositoryConfAnalysis#disable_pre_configured_alerts}
  */
  readonly disablePreConfiguredAlerts?: boolean | cdktf.IResolvable;
  /**
  * If set to `true` it will allow policies to force the masking  of specified data fields in the results of queries. [Learn more](https://cyral.com/docs/using-cyral/masking/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#enable_data_masking RepositoryConfAnalysis#enable_data_masking}
  */
  readonly enableDataMasking?: boolean | cdktf.IResolvable;
  /**
  * If set to `true` it will enable rewriting queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#enable_dataset_rewrites RepositoryConfAnalysis#enable_dataset_rewrites}
  */
  readonly enableDatasetRewrites?: boolean | cdktf.IResolvable;
  /**
  * Responsible for configuring the Log Settings. Valid values are documented below. The `log_groups` list support the following values: 
  *   - `everything` - Enables all the Log Settings.
  *   - `dql` - Enables the `DQLs` setting for `all requests`.
  *   - `dml` - Enables the `DMLs` setting for `all requests`.
  *   - `ddl` - Enables the `DDLs` setting for `all requests`.
  *   - `sensitive & dql` - Enables the `DQLs` setting for `logged fields`.
  *   - `sensitive & dml` - Enables the `DMLs` setting for `logged fields`.
  *   - `sensitive & ddl` - Enables the `DDLs` setting for `logged fields`.
  *   - `privileged` - Enables the `Privileged commands` setting.
  *   - `port-scan` - Enables the `Port scans` setting.
  *   - `auth-failure` - Enables the `Authentication failures` setting.
  *   - `full-table-scan` - Enables the `Full scans` setting.
  *   - `violations` - Enables the `Policy violations` setting.
  *   - `connections` - Enables the `Connection activity` setting.
  *   - `sensitive` - Log all queries manipulating sensitive fields (watches)
  *   - `data-classification` - Log all queries whose response was automatically classified as sensitive (credit card numbers, emails and so on).
  *   - `audit` - Log `sensitive`, `DQLs`, `DDLs`, `DMLs` and `privileged`.
  *   - `error` - Log analysis errors.
  *   - `new-connections` - Log new connections.
  *   - `closed-connections` - Log closed connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#log_groups RepositoryConfAnalysis#log_groups}
  */
  readonly logGroups?: string[];
  /**
  * If set to `true` it will also mask filtering conditions like in `WHERE`, `HAVING` or `ON` clauses. **Note**: Enabling this may cause some performance degradation on large tables. It is required to set `enable_data_masking=true` to use this feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#mask_all_occurrences RepositoryConfAnalysis#mask_all_occurrences}
  */
  readonly maskAllOccurrences?: boolean | cdktf.IResolvable;
  /**
  * Valid values are: `all`, `none` and `watched`. If set to `all` it will enable the redact of all literal values, `none` will disable it, and `watched` will only redact values from tracked fields set in the Datamap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#redact RepositoryConfAnalysis#redact}
  */
  readonly redact?: string;
  /**
  * The ID of an existing data repository resource that will be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#repository_id RepositoryConfAnalysis#repository_id}
  */
  readonly repositoryId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis cyral_repository_conf_analysis}
*/
export class RepositoryConfAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_conf_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryConfAnalysis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryConfAnalysis to import
  * @param importFromId The id of the existing RepositoryConfAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryConfAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_conf_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_conf_analysis cyral_repository_conf_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_conf_analysis',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertOnViolation = config.alertOnViolation;
    this._blockOnViolation = config.blockOnViolation;
    this._commentAnnotationGroups = config.commentAnnotationGroups;
    this._disableFilterAnalysis = config.disableFilterAnalysis;
    this._disablePreConfiguredAlerts = config.disablePreConfiguredAlerts;
    this._enableDataMasking = config.enableDataMasking;
    this._enableDatasetRewrites = config.enableDatasetRewrites;
    this._logGroups = config.logGroups;
    this._maskAllOccurrences = config.maskAllOccurrences;
    this._redact = config.redact;
    this._repositoryId = config.repositoryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_on_violation - computed: false, optional: true, required: false
  private _alertOnViolation?: boolean | cdktf.IResolvable; 
  public get alertOnViolation() {
    return this.getBooleanAttribute('alert_on_violation');
  }
  public set alertOnViolation(value: boolean | cdktf.IResolvable) {
    this._alertOnViolation = value;
  }
  public resetAlertOnViolation() {
    this._alertOnViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnViolationInput() {
    return this._alertOnViolation;
  }

  // block_on_violation - computed: false, optional: true, required: false
  private _blockOnViolation?: boolean | cdktf.IResolvable; 
  public get blockOnViolation() {
    return this.getBooleanAttribute('block_on_violation');
  }
  public set blockOnViolation(value: boolean | cdktf.IResolvable) {
    this._blockOnViolation = value;
  }
  public resetBlockOnViolation() {
    this._blockOnViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOnViolationInput() {
    return this._blockOnViolation;
  }

  // comment_annotation_groups - computed: false, optional: true, required: false
  private _commentAnnotationGroups?: string[]; 
  public get commentAnnotationGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('comment_annotation_groups'));
  }
  public set commentAnnotationGroups(value: string[]) {
    this._commentAnnotationGroups = value;
  }
  public resetCommentAnnotationGroups() {
    this._commentAnnotationGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentAnnotationGroupsInput() {
    return this._commentAnnotationGroups;
  }

  // disable_filter_analysis - computed: false, optional: true, required: false
  private _disableFilterAnalysis?: boolean | cdktf.IResolvable; 
  public get disableFilterAnalysis() {
    return this.getBooleanAttribute('disable_filter_analysis');
  }
  public set disableFilterAnalysis(value: boolean | cdktf.IResolvable) {
    this._disableFilterAnalysis = value;
  }
  public resetDisableFilterAnalysis() {
    this._disableFilterAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFilterAnalysisInput() {
    return this._disableFilterAnalysis;
  }

  // disable_pre_configured_alerts - computed: false, optional: true, required: false
  private _disablePreConfiguredAlerts?: boolean | cdktf.IResolvable; 
  public get disablePreConfiguredAlerts() {
    return this.getBooleanAttribute('disable_pre_configured_alerts');
  }
  public set disablePreConfiguredAlerts(value: boolean | cdktf.IResolvable) {
    this._disablePreConfiguredAlerts = value;
  }
  public resetDisablePreConfiguredAlerts() {
    this._disablePreConfiguredAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePreConfiguredAlertsInput() {
    return this._disablePreConfiguredAlerts;
  }

  // enable_data_masking - computed: false, optional: true, required: false
  private _enableDataMasking?: boolean | cdktf.IResolvable; 
  public get enableDataMasking() {
    return this.getBooleanAttribute('enable_data_masking');
  }
  public set enableDataMasking(value: boolean | cdktf.IResolvable) {
    this._enableDataMasking = value;
  }
  public resetEnableDataMasking() {
    this._enableDataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDataMaskingInput() {
    return this._enableDataMasking;
  }

  // enable_dataset_rewrites - computed: false, optional: true, required: false
  private _enableDatasetRewrites?: boolean | cdktf.IResolvable; 
  public get enableDatasetRewrites() {
    return this.getBooleanAttribute('enable_dataset_rewrites');
  }
  public set enableDatasetRewrites(value: boolean | cdktf.IResolvable) {
    this._enableDatasetRewrites = value;
  }
  public resetEnableDatasetRewrites() {
    this._enableDatasetRewrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDatasetRewritesInput() {
    return this._enableDatasetRewrites;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_groups - computed: false, optional: true, required: false
  private _logGroups?: string[]; 
  public get logGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('log_groups'));
  }
  public set logGroups(value: string[]) {
    this._logGroups = value;
  }
  public resetLogGroups() {
    this._logGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupsInput() {
    return this._logGroups;
  }

  // mask_all_occurrences - computed: false, optional: true, required: false
  private _maskAllOccurrences?: boolean | cdktf.IResolvable; 
  public get maskAllOccurrences() {
    return this.getBooleanAttribute('mask_all_occurrences');
  }
  public set maskAllOccurrences(value: boolean | cdktf.IResolvable) {
    this._maskAllOccurrences = value;
  }
  public resetMaskAllOccurrences() {
    this._maskAllOccurrences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskAllOccurrencesInput() {
    return this._maskAllOccurrences;
  }

  // redact - computed: false, optional: true, required: false
  private _redact?: string; 
  public get redact() {
    return this.getStringAttribute('redact');
  }
  public set redact(value: string) {
    this._redact = value;
  }
  public resetRedact() {
    this._redact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactInput() {
    return this._redact;
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_on_violation: cdktf.booleanToTerraform(this._alertOnViolation),
      block_on_violation: cdktf.booleanToTerraform(this._blockOnViolation),
      comment_annotation_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commentAnnotationGroups),
      disable_filter_analysis: cdktf.booleanToTerraform(this._disableFilterAnalysis),
      disable_pre_configured_alerts: cdktf.booleanToTerraform(this._disablePreConfiguredAlerts),
      enable_data_masking: cdktf.booleanToTerraform(this._enableDataMasking),
      enable_dataset_rewrites: cdktf.booleanToTerraform(this._enableDatasetRewrites),
      log_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logGroups),
      mask_all_occurrences: cdktf.booleanToTerraform(this._maskAllOccurrences),
      redact: cdktf.stringToTerraform(this._redact),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_on_violation: {
        value: cdktf.booleanToHclTerraform(this._alertOnViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_on_violation: {
        value: cdktf.booleanToHclTerraform(this._blockOnViolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment_annotation_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commentAnnotationGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_filter_analysis: {
        value: cdktf.booleanToHclTerraform(this._disableFilterAnalysis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_pre_configured_alerts: {
        value: cdktf.booleanToHclTerraform(this._disablePreConfiguredAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_data_masking: {
        value: cdktf.booleanToHclTerraform(this._enableDataMasking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dataset_rewrites: {
        value: cdktf.booleanToHclTerraform(this._enableDatasetRewrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mask_all_occurrences: {
        value: cdktf.booleanToHclTerraform(this._maskAllOccurrences),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      redact: {
        value: cdktf.stringToHclTerraform(this._redact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
