// https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImmutableTagRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#disabled ImmutableTagRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#id ImmutableTagRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#project_id ImmutableTagRule#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#repo_excluding ImmutableTagRule#repo_excluding}
  */
  readonly repoExcluding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#repo_matching ImmutableTagRule#repo_matching}
  */
  readonly repoMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#tag_excluding ImmutableTagRule#tag_excluding}
  */
  readonly tagExcluding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#tag_matching ImmutableTagRule#tag_matching}
  */
  readonly tagMatching?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule harbor_immutable_tag_rule}
*/
export class ImmutableTagRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_immutable_tag_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImmutableTagRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImmutableTagRule to import
  * @param importFromId The id of the existing ImmutableTagRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImmutableTagRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_immutable_tag_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.2/docs/resources/immutable_tag_rule harbor_immutable_tag_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImmutableTagRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ImmutableTagRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_immutable_tag_rule',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.2',
        providerVersionConstraint: '3.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._id = config.id;
    this._projectId = config.projectId;
    this._repoExcluding = config.repoExcluding;
    this._repoMatching = config.repoMatching;
    this._tagExcluding = config.tagExcluding;
    this._tagMatching = config.tagMatching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // repo_excluding - computed: false, optional: true, required: false
  private _repoExcluding?: string; 
  public get repoExcluding() {
    return this.getStringAttribute('repo_excluding');
  }
  public set repoExcluding(value: string) {
    this._repoExcluding = value;
  }
  public resetRepoExcluding() {
    this._repoExcluding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoExcludingInput() {
    return this._repoExcluding;
  }

  // repo_matching - computed: false, optional: true, required: false
  private _repoMatching?: string; 
  public get repoMatching() {
    return this.getStringAttribute('repo_matching');
  }
  public set repoMatching(value: string) {
    this._repoMatching = value;
  }
  public resetRepoMatching() {
    this._repoMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoMatchingInput() {
    return this._repoMatching;
  }

  // tag_excluding - computed: false, optional: true, required: false
  private _tagExcluding?: string; 
  public get tagExcluding() {
    return this.getStringAttribute('tag_excluding');
  }
  public set tagExcluding(value: string) {
    this._tagExcluding = value;
  }
  public resetTagExcluding() {
    this._tagExcluding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagExcludingInput() {
    return this._tagExcluding;
  }

  // tag_matching - computed: false, optional: true, required: false
  private _tagMatching?: string; 
  public get tagMatching() {
    return this.getStringAttribute('tag_matching');
  }
  public set tagMatching(value: string) {
    this._tagMatching = value;
  }
  public resetTagMatching() {
    this._tagMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagMatchingInput() {
    return this._tagMatching;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      repo_excluding: cdktf.stringToTerraform(this._repoExcluding),
      repo_matching: cdktf.stringToTerraform(this._repoMatching),
      tag_excluding: cdktf.stringToTerraform(this._tagExcluding),
      tag_matching: cdktf.stringToTerraform(this._tagMatching),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_excluding: {
        value: cdktf.stringToHclTerraform(this._repoExcluding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_matching: {
        value: cdktf.stringToHclTerraform(this._repoMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_excluding: {
        value: cdktf.stringToHclTerraform(this._tagExcluding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_matching: {
        value: cdktf.stringToHclTerraform(this._tagMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
