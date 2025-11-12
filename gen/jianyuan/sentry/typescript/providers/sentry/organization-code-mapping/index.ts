// https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationCodeMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default branch of your code we fall back to if you do not have commit tracking set up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#default_branch OrganizationCodeMapping#default_branch}
  */
  readonly defaultBranch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#id OrganizationCodeMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sentry Organization Integration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#integration_id OrganizationCodeMapping#integration_id}
  */
  readonly integrationId: string;
  /**
  * The slug of the organization the code mapping is under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#organization OrganizationCodeMapping#organization}
  */
  readonly organization: string;
  /**
  * Sentry Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#project_id OrganizationCodeMapping#project_id}
  */
  readonly projectId: string;
  /**
  * Sentry Organization Repository ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#repository_id OrganizationCodeMapping#repository_id}
  */
  readonly repositoryId: string;
  /**
  * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#source_root OrganizationCodeMapping#source_root}
  */
  readonly sourceRoot?: string;
  /**
  * https://docs.sentry.io/product/integrations/source-code-mgmt/github/#stack-trace-linking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#stack_root OrganizationCodeMapping#stack_root}
  */
  readonly stackRoot?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping sentry_organization_code_mapping}
*/
export class OrganizationCodeMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sentry_organization_code_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationCodeMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationCodeMapping to import
  * @param importFromId The id of the existing OrganizationCodeMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationCodeMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sentry_organization_code_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jianyuan/sentry/0.14.6/docs/resources/organization_code_mapping sentry_organization_code_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationCodeMappingConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationCodeMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'sentry_organization_code_mapping',
      terraformGeneratorMetadata: {
        providerName: 'sentry',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultBranch = config.defaultBranch;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._organization = config.organization;
    this._projectId = config.projectId;
    this._repositoryId = config.repositoryId;
    this._sourceRoot = config.sourceRoot;
    this._stackRoot = config.stackRoot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_branch - computed: false, optional: false, required: true
  private _defaultBranch?: string; 
  public get defaultBranch() {
    return this.getStringAttribute('default_branch');
  }
  public set defaultBranch(value: string) {
    this._defaultBranch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBranchInput() {
    return this._defaultBranch;
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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // source_root - computed: false, optional: true, required: false
  private _sourceRoot?: string; 
  public get sourceRoot() {
    return this.getStringAttribute('source_root');
  }
  public set sourceRoot(value: string) {
    this._sourceRoot = value;
  }
  public resetSourceRoot() {
    this._sourceRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRootInput() {
    return this._sourceRoot;
  }

  // stack_root - computed: false, optional: true, required: false
  private _stackRoot?: string; 
  public get stackRoot() {
    return this.getStringAttribute('stack_root');
  }
  public set stackRoot(value: string) {
    this._stackRoot = value;
  }
  public resetStackRoot() {
    this._stackRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackRootInput() {
    return this._stackRoot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_branch: cdktf.stringToTerraform(this._defaultBranch),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      organization: cdktf.stringToTerraform(this._organization),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      source_root: cdktf.stringToTerraform(this._sourceRoot),
      stack_root: cdktf.stringToTerraform(this._stackRoot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_branch: {
        value: cdktf.stringToHclTerraform(this._defaultBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      source_root: {
        value: cdktf.stringToHclTerraform(this._sourceRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_root: {
        value: cdktf.stringToHclTerraform(this._stackRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
