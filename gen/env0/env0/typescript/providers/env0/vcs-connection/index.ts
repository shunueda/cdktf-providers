// https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#id VcsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the VCS connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#name VcsConnection#name}
  */
  readonly name: string;
  /**
  * the VCS type (BitBucketServer, GitLabEnterprise, or GitHubEnterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#type VcsConnection#type}
  */
  readonly type: string;
  /**
  * URL of the VCS server. This can either be a 'VCS URL' (e.g.: https://github.com) or 'Repository URL' (E.g.: https://github.com/env0/myrepo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#url VcsConnection#url}
  */
  readonly url: string;
  /**
  * VCS agent key. Use a custom agent key or 'ENV0_DEFAULT' to use the default env0 agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#vcs_agent_key VcsConnection#vcs_agent_key}
  */
  readonly vcsAgentKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection env0_vcs_connection}
*/
export class VcsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_vcs_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsConnection to import
  * @param importFromId The id of the existing VcsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_vcs_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.4/docs/resources/vcs_connection env0_vcs_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VcsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_vcs_connection',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.4'
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
    this._type = config.type;
    this._url = config.url;
    this._vcsAgentKey = config.vcsAgentKey;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // vcs_agent_key - computed: false, optional: true, required: false
  private _vcsAgentKey?: string; 
  public get vcsAgentKey() {
    return this.getStringAttribute('vcs_agent_key');
  }
  public set vcsAgentKey(value: string) {
    this._vcsAgentKey = value;
  }
  public resetVcsAgentKey() {
    this._vcsAgentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsAgentKeyInput() {
    return this._vcsAgentKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      vcs_agent_key: cdktf.stringToTerraform(this._vcsAgentKey),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcs_agent_key: {
        value: cdktf.stringToHclTerraform(this._vcsAgentKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
