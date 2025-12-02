// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModelservingTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the AI model serving auth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#description ModelservingToken#description}
  */
  readonly description?: string;
  /**
  * Name of the AI model serving auth token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#name ModelservingToken#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the AI model serving auth token is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#project_id ModelservingToken#project_id}
  */
  readonly projectId: string;
  /**
  * Region to which the AI model serving auth token is associated. If not defined, the provider region is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#region ModelservingToken#region}
  */
  readonly region?: string;
  /**
  * A map of arbitrary key/value pairs that will force recreation of the token when they change, enabling token rotation based on external conditions such as a rotating timestamp. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#rotate_when_changed ModelservingToken#rotate_when_changed}
  */
  readonly rotateWhenChanged?: { [key: string]: string };
  /**
  * The TTL duration of the AI model serving auth token. E.g. 5h30m40s,5h,5h30m,30m,30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#ttl_duration ModelservingToken#ttl_duration}
  */
  readonly ttlDuration?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token stackit_modelserving_token}
*/
export class ModelservingToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_modelserving_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModelservingToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModelservingToken to import
  * @param importFromId The id of the existing ModelservingToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModelservingToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_modelserving_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/modelserving_token stackit_modelserving_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModelservingTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ModelservingTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_modelserving_token',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._rotateWhenChanged = config.rotateWhenChanged;
    this._ttlDuration = config.ttlDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // rotate_when_changed - computed: false, optional: true, required: false
  private _rotateWhenChanged?: { [key: string]: string }; 
  public get rotateWhenChanged() {
    return this.getStringMapAttribute('rotate_when_changed');
  }
  public set rotateWhenChanged(value: { [key: string]: string }) {
    this._rotateWhenChanged = value;
  }
  public resetRotateWhenChanged() {
    this._rotateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWhenChangedInput() {
    return this._rotateWhenChanged;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // ttl_duration - computed: false, optional: true, required: false
  private _ttlDuration?: string; 
  public get ttlDuration() {
    return this.getStringAttribute('ttl_duration');
  }
  public set ttlDuration(value: string) {
    this._ttlDuration = value;
  }
  public resetTtlDuration() {
    this._ttlDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDurationInput() {
    return this._ttlDuration;
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      rotate_when_changed: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotateWhenChanged),
      ttl_duration: cdktf.stringToTerraform(this._ttlDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_when_changed: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotateWhenChanged),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ttl_duration: {
        value: cdktf.stringToHclTerraform(this._ttlDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
