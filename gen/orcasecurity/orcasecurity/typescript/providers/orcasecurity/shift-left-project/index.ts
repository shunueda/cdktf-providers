// https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShiftLeftProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not the Orca built-in policies are attached to the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#default_policies ShiftLeftProject#default_policies}
  */
  readonly defaultPolicies: boolean | cdktf.IResolvable;
  /**
  * Shift Left project description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#description ShiftLeftProject#description}
  */
  readonly description: string;
  /**
  * Exception lists to attach to this project, specified by their IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#exceptions_ids ShiftLeftProject#exceptions_ids}
  */
  readonly exceptionsIds?: string[];
  /**
  * By default, the main or master branch is used to capture the baseline. If you need to select a different branch that will serve as your project's/repository's main (protect) branch, specify it here. You can read more [here](https://docs.orcasecurity.io/docs/shift-left-baseline).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#git_default_baseline_branch ShiftLeftProject#git_default_baseline_branch}
  */
  readonly gitDefaultBaselineBranch?: string;
  /**
  * Shift Left key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#key ShiftLeftProject#key}
  */
  readonly key: string;
  /**
  * Shift Left project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#name ShiftLeftProject#name}
  */
  readonly name: string;
  /**
  * Policies to attach to this project, specified by their IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#policies_ids ShiftLeftProject#policies_ids}
  */
  readonly policiesIds?: string[];
  /**
  * Controls whether IaC code comments (for suppressing findings) should be allowed, ignored, or blocked. You can read more about it [here](https://docs.orcasecurity.io/docs/managing-iac-exceptions). Possible values are BLOCK, ALLOW, and IGNORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#support_code_comments_via_cli ShiftLeftProject#support_code_comments_via_cli}
  */
  readonly supportCodeCommentsViaCli?: string;
  /**
  * Control whether CVEs exception management via code should be allowed or blocked. Possible values are BLOCK and ALLOW. ALLOW: an exception file can be passed to the CLI execution in order to suppress issues. BLOCK: the scan will fail when exceptions are defined and specified in the CLI execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#support_cve_exceptions_via_cli ShiftLeftProject#support_cve_exceptions_via_cli}
  */
  readonly supportCveExceptionsViaCli?: string;
  /**
  * Control whether code comments or exception handling via config file to suppress found secrets should be allowed, ignored, or blocked. Possible values are BLOCK, ALLOW, and IGNORE. If BLOCK is specified, the scan will fail if issues are found that are ignored via code comments or the exception configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#support_secret_detection_suppression_via_cli ShiftLeftProject#support_secret_detection_suppression_via_cli}
  */
  readonly supportSecretDetectionSuppressionViaCli?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project orcasecurity_shift_left_project}
*/
export class ShiftLeftProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "orcasecurity_shift_left_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ShiftLeftProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ShiftLeftProject to import
  * @param importFromId The id of the existing ShiftLeftProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ShiftLeftProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "orcasecurity_shift_left_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/orcasecurity/orcasecurity/0.0.25/docs/resources/shift_left_project orcasecurity_shift_left_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShiftLeftProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ShiftLeftProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'orcasecurity_shift_left_project',
      terraformGeneratorMetadata: {
        providerName: 'orcasecurity',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultPolicies = config.defaultPolicies;
    this._description = config.description;
    this._exceptionsIds = config.exceptionsIds;
    this._gitDefaultBaselineBranch = config.gitDefaultBaselineBranch;
    this._key = config.key;
    this._name = config.name;
    this._policiesIds = config.policiesIds;
    this._supportCodeCommentsViaCli = config.supportCodeCommentsViaCli;
    this._supportCveExceptionsViaCli = config.supportCveExceptionsViaCli;
    this._supportSecretDetectionSuppressionViaCli = config.supportSecretDetectionSuppressionViaCli;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_policies - computed: false, optional: false, required: true
  private _defaultPolicies?: boolean | cdktf.IResolvable; 
  public get defaultPolicies() {
    return this.getBooleanAttribute('default_policies');
  }
  public set defaultPolicies(value: boolean | cdktf.IResolvable) {
    this._defaultPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoliciesInput() {
    return this._defaultPolicies;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // exceptions_ids - computed: false, optional: true, required: false
  private _exceptionsIds?: string[]; 
  public get exceptionsIds() {
    return this.getListAttribute('exceptions_ids');
  }
  public set exceptionsIds(value: string[]) {
    this._exceptionsIds = value;
  }
  public resetExceptionsIds() {
    this._exceptionsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsIdsInput() {
    return this._exceptionsIds;
  }

  // git_default_baseline_branch - computed: false, optional: true, required: false
  private _gitDefaultBaselineBranch?: string; 
  public get gitDefaultBaselineBranch() {
    return this.getStringAttribute('git_default_baseline_branch');
  }
  public set gitDefaultBaselineBranch(value: string) {
    this._gitDefaultBaselineBranch = value;
  }
  public resetGitDefaultBaselineBranch() {
    this._gitDefaultBaselineBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitDefaultBaselineBranchInput() {
    return this._gitDefaultBaselineBranch;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policies_ids - computed: false, optional: true, required: false
  private _policiesIds?: string[]; 
  public get policiesIds() {
    return this.getListAttribute('policies_ids');
  }
  public set policiesIds(value: string[]) {
    this._policiesIds = value;
  }
  public resetPoliciesIds() {
    this._policiesIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesIdsInput() {
    return this._policiesIds;
  }

  // support_code_comments_via_cli - computed: false, optional: true, required: false
  private _supportCodeCommentsViaCli?: string; 
  public get supportCodeCommentsViaCli() {
    return this.getStringAttribute('support_code_comments_via_cli');
  }
  public set supportCodeCommentsViaCli(value: string) {
    this._supportCodeCommentsViaCli = value;
  }
  public resetSupportCodeCommentsViaCli() {
    this._supportCodeCommentsViaCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCodeCommentsViaCliInput() {
    return this._supportCodeCommentsViaCli;
  }

  // support_cve_exceptions_via_cli - computed: false, optional: true, required: false
  private _supportCveExceptionsViaCli?: string; 
  public get supportCveExceptionsViaCli() {
    return this.getStringAttribute('support_cve_exceptions_via_cli');
  }
  public set supportCveExceptionsViaCli(value: string) {
    this._supportCveExceptionsViaCli = value;
  }
  public resetSupportCveExceptionsViaCli() {
    this._supportCveExceptionsViaCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportCveExceptionsViaCliInput() {
    return this._supportCveExceptionsViaCli;
  }

  // support_secret_detection_suppression_via_cli - computed: false, optional: true, required: false
  private _supportSecretDetectionSuppressionViaCli?: string; 
  public get supportSecretDetectionSuppressionViaCli() {
    return this.getStringAttribute('support_secret_detection_suppression_via_cli');
  }
  public set supportSecretDetectionSuppressionViaCli(value: string) {
    this._supportSecretDetectionSuppressionViaCli = value;
  }
  public resetSupportSecretDetectionSuppressionViaCli() {
    this._supportSecretDetectionSuppressionViaCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportSecretDetectionSuppressionViaCliInput() {
    return this._supportSecretDetectionSuppressionViaCli;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_policies: cdktf.booleanToTerraform(this._defaultPolicies),
      description: cdktf.stringToTerraform(this._description),
      exceptions_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exceptionsIds),
      git_default_baseline_branch: cdktf.stringToTerraform(this._gitDefaultBaselineBranch),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      policies_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policiesIds),
      support_code_comments_via_cli: cdktf.stringToTerraform(this._supportCodeCommentsViaCli),
      support_cve_exceptions_via_cli: cdktf.stringToTerraform(this._supportCveExceptionsViaCli),
      support_secret_detection_suppression_via_cli: cdktf.stringToTerraform(this._supportSecretDetectionSuppressionViaCli),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_policies: {
        value: cdktf.booleanToHclTerraform(this._defaultPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exceptions_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exceptionsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      git_default_baseline_branch: {
        value: cdktf.stringToHclTerraform(this._gitDefaultBaselineBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policiesIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      support_code_comments_via_cli: {
        value: cdktf.stringToHclTerraform(this._supportCodeCommentsViaCli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_cve_exceptions_via_cli: {
        value: cdktf.stringToHclTerraform(this._supportCveExceptionsViaCli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_secret_detection_suppression_via_cli: {
        value: cdktf.stringToHclTerraform(this._supportSecretDetectionSuppressionViaCli),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
