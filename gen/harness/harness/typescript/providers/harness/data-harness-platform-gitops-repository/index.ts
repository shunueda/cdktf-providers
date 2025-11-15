// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformGitopsRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#account_id DataHarnessPlatformGitopsRepository#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#agent_id DataHarnessPlatformGitopsRepository#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#id DataHarnessPlatformGitopsRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#identifier DataHarnessPlatformGitopsRepository#identifier}
  */
  readonly identifier: string;
  /**
  * Organization identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#org_id DataHarnessPlatformGitopsRepository#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the GitOps repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#project_id DataHarnessPlatformGitopsRepository#project_id}
  */
  readonly projectId?: string;
}
export interface DataHarnessPlatformGitopsRepositoryRepo {
}

export function dataHarnessPlatformGitopsRepositoryRepoToTerraform(struct?: DataHarnessPlatformGitopsRepositoryRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsRepositoryRepoToHclTerraform(struct?: DataHarnessPlatformGitopsRepositoryRepo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsRepositoryRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHarnessPlatformGitopsRepositoryRepo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsRepositoryRepo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // enable_lfs - computed: true, optional: false, required: false
  public get enableLfs() {
    return this.getBooleanAttribute('enable_lfs');
  }

  // enable_oci - computed: true, optional: false, required: false
  public get enableOci() {
    return this.getBooleanAttribute('enable_oci');
  }

  // github_app_enterprise_base_url - computed: true, optional: false, required: false
  public get githubAppEnterpriseBaseUrl() {
    return this.getStringAttribute('github_app_enterprise_base_url');
  }

  // github_app_id - computed: true, optional: false, required: false
  public get githubAppId() {
    return this.getStringAttribute('github_app_id');
  }

  // github_app_installation_id - computed: true, optional: false, required: false
  public get githubAppInstallationId() {
    return this.getStringAttribute('github_app_installation_id');
  }

  // github_app_private_key - computed: true, optional: false, required: false
  public get githubAppPrivateKey() {
    return this.getStringAttribute('github_app_private_key');
  }

  // inherited_creds - computed: true, optional: false, required: false
  public get inheritedCreds() {
    return this.getBooleanAttribute('inherited_creds');
  }

  // insecure - computed: true, optional: false, required: false
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }

  // insecure_ignore_host_key - computed: true, optional: false, required: false
  public get insecureIgnoreHostKey() {
    return this.getBooleanAttribute('insecure_ignore_host_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    return this.getStringAttribute('proxy');
  }

  // repo - computed: true, optional: false, required: false
  public get repo() {
    return this.getStringAttribute('repo');
  }

  // ssh_private_key - computed: true, optional: false, required: false
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }

  // tls_client_cert_data - computed: true, optional: false, required: false
  public get tlsClientCertData() {
    return this.getStringAttribute('tls_client_cert_data');
  }

  // tls_client_cert_key - computed: true, optional: false, required: false
  public get tlsClientCertKey() {
    return this.getStringAttribute('tls_client_cert_key');
  }

  // type_ - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type_');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataHarnessPlatformGitopsRepositoryRepoList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsRepositoryRepoOutputReference {
    return new DataHarnessPlatformGitopsRepositoryRepoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository harness_platform_gitops_repository}
*/
export class DataHarnessPlatformGitopsRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformGitopsRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformGitopsRepository to import
  * @param importFromId The id of the existing DataHarnessPlatformGitopsRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformGitopsRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_repository harness_platform_gitops_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformGitopsRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformGitopsRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_repository',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // enable_oci - computed: true, optional: false, required: false
  public get enableOci() {
    return this.getBooleanAttribute('enable_oci');
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo - computed: true, optional: false, required: false
  private _repo = new DataHarnessPlatformGitopsRepositoryRepoList(this, "repo", false);
  public get repo() {
    return this._repo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
