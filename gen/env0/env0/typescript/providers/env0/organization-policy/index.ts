// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * the default environment time-to-live allowed on deploy time. Format is <number>-<M/w/d/h> (Examples: 12-h, 3-d, 1-w, 1-M). Omit for infinite ttl. must be equal or shorter than max_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#default_ttl OrganizationPolicy#default_ttl}
  */
  readonly defaultTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#do_not_consider_merge_commits_for_pr_plans OrganizationPolicy#do_not_consider_merge_commits_for_pr_plans}
  */
  readonly doNotConsiderMergeCommitsForPrPlans?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#do_not_report_skipped_status_checks OrganizationPolicy#do_not_report_skipped_status_checks}
  */
  readonly doNotReportSkippedStatusChecks?: boolean | cdktf.IResolvable;
  /**
  * set to 'true' to enable OIDC token (JWT) availability during env0 deployments (defaults to 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#enable_oidc OrganizationPolicy#enable_oidc}
  */
  readonly enableOidc?: boolean | cdktf.IResolvable;
  /**
  * set to 'true' to enforce PR commenter permissions during env0 deployments (defaults to 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#enforce_pr_commenter_permissions OrganizationPolicy#enforce_pr_commenter_permissions}
  */
  readonly enforcePrCommenterPermissions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#id OrganizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the maximum environment time-to-live allowed on deploy time. Format is <number>-<M/w/d/h> (Examples: 12-h, 3-d, 1-w, 1-M). Omit for infinite ttl. must be equal or longer than default_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#max_ttl OrganizationPolicy#max_ttl}
  */
  readonly maxTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy env0_organization_policy}
*/
export class OrganizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_organization_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationPolicy to import
  * @param importFromId The id of the existing OrganizationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_organization_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/resources/organization_policy env0_organization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.8',
        providerVersionConstraint: '1.29.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultTtl = config.defaultTtl;
    this._doNotConsiderMergeCommitsForPrPlans = config.doNotConsiderMergeCommitsForPrPlans;
    this._doNotReportSkippedStatusChecks = config.doNotReportSkippedStatusChecks;
    this._enableOidc = config.enableOidc;
    this._enforcePrCommenterPermissions = config.enforcePrCommenterPermissions;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: string; 
  public get defaultTtl() {
    return this.getStringAttribute('default_ttl');
  }
  public set defaultTtl(value: string) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // do_not_consider_merge_commits_for_pr_plans - computed: false, optional: true, required: false
  private _doNotConsiderMergeCommitsForPrPlans?: boolean | cdktf.IResolvable; 
  public get doNotConsiderMergeCommitsForPrPlans() {
    return this.getBooleanAttribute('do_not_consider_merge_commits_for_pr_plans');
  }
  public set doNotConsiderMergeCommitsForPrPlans(value: boolean | cdktf.IResolvable) {
    this._doNotConsiderMergeCommitsForPrPlans = value;
  }
  public resetDoNotConsiderMergeCommitsForPrPlans() {
    this._doNotConsiderMergeCommitsForPrPlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotConsiderMergeCommitsForPrPlansInput() {
    return this._doNotConsiderMergeCommitsForPrPlans;
  }

  // do_not_report_skipped_status_checks - computed: false, optional: true, required: false
  private _doNotReportSkippedStatusChecks?: boolean | cdktf.IResolvable; 
  public get doNotReportSkippedStatusChecks() {
    return this.getBooleanAttribute('do_not_report_skipped_status_checks');
  }
  public set doNotReportSkippedStatusChecks(value: boolean | cdktf.IResolvable) {
    this._doNotReportSkippedStatusChecks = value;
  }
  public resetDoNotReportSkippedStatusChecks() {
    this._doNotReportSkippedStatusChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotReportSkippedStatusChecksInput() {
    return this._doNotReportSkippedStatusChecks;
  }

  // enable_oidc - computed: false, optional: true, required: false
  private _enableOidc?: boolean | cdktf.IResolvable; 
  public get enableOidc() {
    return this.getBooleanAttribute('enable_oidc');
  }
  public set enableOidc(value: boolean | cdktf.IResolvable) {
    this._enableOidc = value;
  }
  public resetEnableOidc() {
    this._enableOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOidcInput() {
    return this._enableOidc;
  }

  // enforce_pr_commenter_permissions - computed: false, optional: true, required: false
  private _enforcePrCommenterPermissions?: boolean | cdktf.IResolvable; 
  public get enforcePrCommenterPermissions() {
    return this.getBooleanAttribute('enforce_pr_commenter_permissions');
  }
  public set enforcePrCommenterPermissions(value: boolean | cdktf.IResolvable) {
    this._enforcePrCommenterPermissions = value;
  }
  public resetEnforcePrCommenterPermissions() {
    this._enforcePrCommenterPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcePrCommenterPermissionsInput() {
    return this._enforcePrCommenterPermissions;
  }

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

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_ttl: cdktf.stringToTerraform(this._defaultTtl),
      do_not_consider_merge_commits_for_pr_plans: cdktf.booleanToTerraform(this._doNotConsiderMergeCommitsForPrPlans),
      do_not_report_skipped_status_checks: cdktf.booleanToTerraform(this._doNotReportSkippedStatusChecks),
      enable_oidc: cdktf.booleanToTerraform(this._enableOidc),
      enforce_pr_commenter_permissions: cdktf.booleanToTerraform(this._enforcePrCommenterPermissions),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_ttl: {
        value: cdktf.stringToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      do_not_consider_merge_commits_for_pr_plans: {
        value: cdktf.booleanToHclTerraform(this._doNotConsiderMergeCommitsForPrPlans),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      do_not_report_skipped_status_checks: {
        value: cdktf.booleanToHclTerraform(this._doNotReportSkippedStatusChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_oidc: {
        value: cdktf.booleanToHclTerraform(this._enableOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_pr_commenter_permissions: {
        value: cdktf.booleanToHclTerraform(this._enforcePrCommenterPermissions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
