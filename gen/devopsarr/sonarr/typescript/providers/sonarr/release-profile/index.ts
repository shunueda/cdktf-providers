// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#enabled ReleaseProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Ignored terms. At least one of `required` and `ignored` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#ignored ReleaseProfile#ignored}
  */
  readonly ignored?: string[];
  /**
  * Indexer ID. Default to all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#indexer_id ReleaseProfile#indexer_id}
  */
  readonly indexerId?: number;
  /**
  * Release profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#name ReleaseProfile#name}
  */
  readonly name?: string;
  /**
  * Required terms. At least one of `required` and `ignored` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#required ReleaseProfile#required}
  */
  readonly required?: string[];
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#tags ReleaseProfile#tags}
  */
  readonly tags?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile sonarr_release_profile}
*/
export class ReleaseProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_release_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReleaseProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReleaseProfile to import
  * @param importFromId The id of the existing ReleaseProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReleaseProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_release_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/release_profile sonarr_release_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReleaseProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonarr_release_profile',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._ignored = config.ignored;
    this._indexerId = config.indexerId;
    this._name = config.name;
    this._required = config.required;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ignored - computed: true, optional: true, required: false
  private _ignored?: string[]; 
  public get ignored() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored'));
  }
  public set ignored(value: string[]) {
    this._ignored = value;
  }
  public resetIgnored() {
    this._ignored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredInput() {
    return this._ignored;
  }

  // indexer_id - computed: true, optional: true, required: false
  private _indexerId?: number; 
  public get indexerId() {
    return this.getNumberAttribute('indexer_id');
  }
  public set indexerId(value: number) {
    this._indexerId = value;
  }
  public resetIndexerId() {
    this._indexerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexerIdInput() {
    return this._indexerId;
  }

  // name - computed: true, optional: true, required: false
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

  // required - computed: true, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return cdktf.Fn.tolist(this.getListAttribute('required'));
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      ignored: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignored),
      indexer_id: cdktf.numberToTerraform(this._indexerId),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.listMapper(cdktf.stringToTerraform, false)(this._required),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignored: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignored),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      indexer_id: {
        value: cdktf.numberToHclTerraform(this._indexerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._required),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
