// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvGroupLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link#env_group_id EnvGroupLink#env_group_id}
  */
  readonly envGroupId: string;
  /**
  * Set of service ids linked to the environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link#service_ids EnvGroupLink#service_ids}
  */
  readonly serviceIds: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link render_env_group_link}
*/
export class EnvGroupLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_env_group_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvGroupLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvGroupLink to import
  * @param importFromId The id of the existing EnvGroupLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvGroupLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_env_group_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group_link render_env_group_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvGroupLinkConfig
  */
  public constructor(scope: Construct, id: string, config: EnvGroupLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'render_env_group_link',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5',
        providerVersionConstraint: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envGroupId = config.envGroupId;
    this._serviceIds = config.serviceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_group_id - computed: false, optional: false, required: true
  private _envGroupId?: string; 
  public get envGroupId() {
    return this.getStringAttribute('env_group_id');
  }
  public set envGroupId(value: string) {
    this._envGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envGroupIdInput() {
    return this._envGroupId;
  }

  // service_ids - computed: false, optional: false, required: true
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_ids'));
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_group_id: cdktf.stringToTerraform(this._envGroupId),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_group_id: {
        value: cdktf.stringToHclTerraform(this._envGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
