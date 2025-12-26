// https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template#id DataEnv0Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the name of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template#name DataEnv0Template#name}
  */
  readonly name?: string;
}
export interface DataEnv0TemplateSshKeys {
}

export function dataEnv0TemplateSshKeysToTerraform(struct?: DataEnv0TemplateSshKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataEnv0TemplateSshKeysToHclTerraform(struct?: DataEnv0TemplateSshKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataEnv0TemplateSshKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataEnv0TemplateSshKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataEnv0TemplateSshKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataEnv0TemplateSshKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataEnv0TemplateSshKeysOutputReference {
    return new DataEnv0TemplateSshKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template env0_template}
*/
export class DataEnv0Template extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0Template to import
  * @param importFromId The id of the existing DataEnv0Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.8/docs/data-sources/template env0_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0TemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnv0TemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'env0_template',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bitbucket_client_key - computed: true, optional: false, required: false
  public get bitbucketClientKey() {
    return this.getStringAttribute('bitbucket_client_key');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // github_installation_id - computed: true, optional: false, required: false
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }

  // id - computed: false, optional: true, required: false
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

  // is_azure_devops - computed: true, optional: false, required: false
  public get isAzureDevops() {
    return this.getBooleanAttribute('is_azure_devops');
  }

  // is_bitbucket_server - computed: true, optional: false, required: false
  public get isBitbucketServer() {
    return this.getBooleanAttribute('is_bitbucket_server');
  }

  // is_github_enterprise - computed: true, optional: false, required: false
  public get isGithubEnterprise() {
    return this.getBooleanAttribute('is_github_enterprise');
  }

  // is_gitlab_enterprise - computed: true, optional: false, required: false
  public get isGitlabEnterprise() {
    return this.getBooleanAttribute('is_gitlab_enterprise');
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return this.getListAttribute('project_ids');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // retries_on_deploy - computed: true, optional: false, required: false
  public get retriesOnDeploy() {
    return this.getNumberAttribute('retries_on_deploy');
  }

  // retries_on_destroy - computed: true, optional: false, required: false
  public get retriesOnDestroy() {
    return this.getNumberAttribute('retries_on_destroy');
  }

  // retry_on_deploy_only_when_matches_regex - computed: true, optional: false, required: false
  public get retryOnDeployOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_deploy_only_when_matches_regex');
  }

  // retry_on_destroy_only_when_matches_regex - computed: true, optional: false, required: false
  public get retryOnDestroyOnlyWhenMatchesRegex() {
    return this.getStringAttribute('retry_on_destroy_only_when_matches_regex');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // ssh_keys - computed: true, optional: false, required: false
  private _sshKeys = new DataEnv0TemplateSshKeysList(this, "ssh_keys", false);
  public get sshKeys() {
    return this._sshKeys;
  }

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // terragrunt_version - computed: true, optional: false, required: false
  public get terragruntVersion() {
    return this.getStringAttribute('terragrunt_version');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // token_name - computed: true, optional: false, required: false
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcs_connection_id - computed: true, optional: false, required: false
  public get vcsConnectionId() {
    return this.getStringAttribute('vcs_connection_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
