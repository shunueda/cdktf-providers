// https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/data-sources/account_gitops_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCodefreshAccountGitopsSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/data-sources/account_gitops_settings codefresh_account_gitops_settings}
*/
export class DataCodefreshAccountGitopsSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "codefresh_account_gitops_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCodefreshAccountGitopsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCodefreshAccountGitopsSettings to import
  * @param importFromId The id of the existing DataCodefreshAccountGitopsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/data-sources/account_gitops_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCodefreshAccountGitopsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "codefresh_account_gitops_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codefresh-io/codefresh/1.2.0/docs/data-sources/account_gitops_settings codefresh_account_gitops_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCodefreshAccountGitopsSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCodefreshAccountGitopsSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'codefresh_account_gitops_settings',
      terraformGeneratorMetadata: {
        providerName: 'codefresh',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admins - computed: true, optional: false, required: false
  public get admins() {
    return this.getListAttribute('admins');
  }

  // git_provider - computed: true, optional: false, required: false
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }

  // git_provider_api_url - computed: true, optional: false, required: false
  public get gitProviderApiUrl() {
    return this.getStringAttribute('git_provider_api_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_config_repository - computed: true, optional: false, required: false
  public get sharedConfigRepository() {
    return this.getStringAttribute('shared_config_repository');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
