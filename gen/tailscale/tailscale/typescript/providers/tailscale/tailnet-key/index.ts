// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TailnetKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the key consisting of alphanumeric characters. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#description TailnetKey#description}
  */
  readonly description?: string;
  /**
  * Indicates if the key is ephemeral. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#ephemeral TailnetKey#ephemeral}
  */
  readonly ephemeral?: boolean | cdktf.IResolvable;
  /**
  * The expiry of the key in seconds. Defaults to `7776000` (90 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#expiry TailnetKey#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#id TailnetKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines whether or not the machines authenticated by the key will be authorized for the tailnet by default. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#preauthorized TailnetKey#preauthorized}
  */
  readonly preauthorized?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the key should be created again if it becomes invalid. By default, reusable keys will be recreated, but single-use keys will not. Possible values: 'always', 'never'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#recreate_if_invalid TailnetKey#recreate_if_invalid}
  */
  readonly recreateIfInvalid?: string;
  /**
  * Indicates if the key is reusable or single-use. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#reusable TailnetKey#reusable}
  */
  readonly reusable?: boolean | cdktf.IResolvable;
  /**
  * List of tags to apply to the machines authenticated by the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#tags TailnetKey#tags}
  */
  readonly tags?: string[];
  /**
  * ID of the user who created this key, empty for keys created by OAuth clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#user_id TailnetKey#user_id}
  */
  readonly userId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key tailscale_tailnet_key}
*/
export class TailnetKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_tailnet_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TailnetKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TailnetKey to import
  * @param importFromId The id of the existing TailnetKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TailnetKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_tailnet_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/tailnet_key tailscale_tailnet_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TailnetKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TailnetKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tailscale_tailnet_key',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0',
        providerVersionConstraint: '0.24.0'
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
    this._ephemeral = config.ephemeral;
    this._expiry = config.expiry;
    this._id = config.id;
    this._preauthorized = config.preauthorized;
    this._recreateIfInvalid = config.recreateIfInvalid;
    this._reusable = config.reusable;
    this._tags = config.tags;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // ephemeral - computed: false, optional: true, required: false
  private _ephemeral?: boolean | cdktf.IResolvable; 
  public get ephemeral() {
    return this.getBooleanAttribute('ephemeral');
  }
  public set ephemeral(value: boolean | cdktf.IResolvable) {
    this._ephemeral = value;
  }
  public resetEphemeral() {
    this._ephemeral = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralInput() {
    return this._ephemeral;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
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

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // preauthorized - computed: false, optional: true, required: false
  private _preauthorized?: boolean | cdktf.IResolvable; 
  public get preauthorized() {
    return this.getBooleanAttribute('preauthorized');
  }
  public set preauthorized(value: boolean | cdktf.IResolvable) {
    this._preauthorized = value;
  }
  public resetPreauthorized() {
    this._preauthorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preauthorizedInput() {
    return this._preauthorized;
  }

  // recreate_if_invalid - computed: false, optional: true, required: false
  private _recreateIfInvalid?: string; 
  public get recreateIfInvalid() {
    return this.getStringAttribute('recreate_if_invalid');
  }
  public set recreateIfInvalid(value: string) {
    this._recreateIfInvalid = value;
  }
  public resetRecreateIfInvalid() {
    this._recreateIfInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateIfInvalidInput() {
    return this._recreateIfInvalid;
  }

  // reusable - computed: false, optional: true, required: false
  private _reusable?: boolean | cdktf.IResolvable; 
  public get reusable() {
    return this.getBooleanAttribute('reusable');
  }
  public set reusable(value: boolean | cdktf.IResolvable) {
    this._reusable = value;
  }
  public resetReusable() {
    this._reusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reusableInput() {
    return this._reusable;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      ephemeral: cdktf.booleanToTerraform(this._ephemeral),
      expiry: cdktf.numberToTerraform(this._expiry),
      id: cdktf.stringToTerraform(this._id),
      preauthorized: cdktf.booleanToTerraform(this._preauthorized),
      recreate_if_invalid: cdktf.stringToTerraform(this._recreateIfInvalid),
      reusable: cdktf.booleanToTerraform(this._reusable),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_id: cdktf.stringToTerraform(this._userId),
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
      ephemeral: {
        value: cdktf.booleanToHclTerraform(this._ephemeral),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry: {
        value: cdktf.numberToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preauthorized: {
        value: cdktf.booleanToHclTerraform(this._preauthorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      recreate_if_invalid: {
        value: cdktf.stringToHclTerraform(this._recreateIfInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reusable: {
        value: cdktf.booleanToHclTerraform(this._reusable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
