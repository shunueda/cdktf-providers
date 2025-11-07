// https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * the ess group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag#ess_id EssTag#ess_id}
  */
  readonly essId: string;
  /**
  * the ess tags map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag#tags EssTag#tags}
  */
  readonly tags: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag aliyun_ess_tag}
*/
export class EssTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aliyun_ess_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssTag to import
  * @param importFromId The id of the existing EssTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aliyun_ess_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shencan/aliyun/0.0.6/docs/resources/ess_tag aliyun_ess_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssTagConfig
  */
  public constructor(scope: Construct, id: string, config: EssTagConfig) {
    super(scope, id, {
      terraformResourceType: 'aliyun_ess_tag',
      terraformGeneratorMetadata: {
        providerName: 'aliyun',
        providerVersion: '0.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._essId = config.essId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ess_id - computed: false, optional: false, required: true
  private _essId?: string; 
  public get essId() {
    return this.getStringAttribute('ess_id');
  }
  public set essId(value: string) {
    this._essId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get essIdInput() {
    return this._essId;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ess_id: cdktf.stringToTerraform(this._essId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ess_id: {
        value: cdktf.stringToHclTerraform(this._essId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
