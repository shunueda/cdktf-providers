// https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PreAuthKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ACL tags on the pre auth key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#acl_tags PreAuthKey#acl_tags}
  */
  readonly aclTags?: string[];
  /**
  * If the key is ephemeral.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#ephemeral PreAuthKey#ephemeral}
  */
  readonly ephemeral?: boolean | cdktf.IResolvable;
  /**
  * If the key is reusable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#reusable PreAuthKey#reusable}
  */
  readonly reusable?: boolean | cdktf.IResolvable;
  /**
  * The time until the key expires. This is a string in the format of `30m`, `3h`, `90d`, etc. Defaults to `1h`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#time_to_expire PreAuthKey#time_to_expire}
  */
  readonly timeToExpire?: string;
  /**
  * The ID of the user that will own the pre auth key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#user PreAuthKey#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key headscale_pre_auth_key}
*/
export class PreAuthKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "headscale_pre_auth_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PreAuthKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PreAuthKey to import
  * @param importFromId The id of the existing PreAuthKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PreAuthKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "headscale_pre_auth_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/awlsring/headscale/0.4.2/docs/resources/pre_auth_key headscale_pre_auth_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PreAuthKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PreAuthKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'headscale_pre_auth_key',
      terraformGeneratorMetadata: {
        providerName: 'headscale',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclTags = config.aclTags;
    this._ephemeral = config.ephemeral;
    this._reusable = config.reusable;
    this._timeToExpire = config.timeToExpire;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_tags - computed: true, optional: true, required: false
  private _aclTags?: string[]; 
  public get aclTags() {
    return this.getListAttribute('acl_tags');
  }
  public set aclTags(value: string[]) {
    this._aclTags = value;
  }
  public resetAclTags() {
    this._aclTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclTagsInput() {
    return this._aclTags;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // ephemeral - computed: true, optional: true, required: false
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

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // reusable - computed: true, optional: true, required: false
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

  // time_to_expire - computed: false, optional: true, required: false
  private _timeToExpire?: string; 
  public get timeToExpire() {
    return this.getStringAttribute('time_to_expire');
  }
  public set timeToExpire(value: string) {
    this._timeToExpire = value;
  }
  public resetTimeToExpire() {
    this._timeToExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToExpireInput() {
    return this._timeToExpire;
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getBooleanAttribute('used');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aclTags),
      ephemeral: cdktf.booleanToTerraform(this._ephemeral),
      reusable: cdktf.booleanToTerraform(this._reusable),
      time_to_expire: cdktf.stringToTerraform(this._timeToExpire),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aclTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ephemeral: {
        value: cdktf.booleanToHclTerraform(this._ephemeral),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reusable: {
        value: cdktf.booleanToHclTerraform(this._reusable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_to_expire: {
        value: cdktf.stringToHclTerraform(this._timeToExpire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
