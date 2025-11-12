// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the ID of the custom resource to create the attribute for.  Must be a valid PingOne resource ID.  Required if `resource_type` is set to `CUSTOM`, but cannot be set if `resource_type` is set to `OPENID_CONNECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#custom_resource_id ResourceAttribute#custom_resource_id}
  */
  readonly customResourceId?: string;
  /**
  * The ID of the environment to create the resource attribute in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#environment_id ResourceAttribute#environment_id}
  */
  readonly environmentId: string;
  /**
  * A boolean that specifies whether the attribute mapping should be available in the ID Token.  Only applies to resources that are of type `OPENID_CONNECT` and the `id_token_enabled` and `userinfo_enabled` properties cannot both be set to false. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#id_token_enabled ResourceAttribute#id_token_enabled}
  */
  readonly idTokenEnabled?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the name of the resource attribute to map a value for. When the resource's type property is `OPENID_CONNECT`, the following are reserved names and cannot be used: `acr`, `amr`, `aud`, `auth_time`, `client_id`, `env`, `exp`, `iat`, `iss`, `jti`, `org`, `p1.*`, `scope`, `sid`, `sub`.  The resource will also override the default configured values for a resource, rather than creating new attributes.  For resources of type `CUSTOM`, the `sub` name is overridden.  For resources of type `OPENID_CONNECT`, the following names are overridden: `address.country`, `address.formatted`, `address.locality`, `address.postal_code`, `address.region`, `address.street_address`, `birthdate`, `email`, `email_verified`, `family_name`, `gender`, `given_name`, `locale`, `middle_name`, `name`, `nickname`, `phone_number`, `phone_number_verified`, `picture`, `preferred_username`, `profile`, `updated_at`, `website`, `zoneinfo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#name ResourceAttribute#name}
  */
  readonly name: string;
  /**
  * The type of the resource to create the attribute for.  When the value is set to `CUSTOM`, `custom_resource_id` must be specified.  Options are `CUSTOM`, `OPENID_CONNECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#resource_type ResourceAttribute#resource_type}
  */
  readonly resourceType: string;
  /**
  * A boolean that specifies whether the attribute mapping should be available through the /as/userinfo endpoint.  Only applies to resources that are of type `OPENID_CONNECT` and the `id_token_enabled` and `userinfo_enabled` properties cannot both be set to false. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#userinfo_enabled ResourceAttribute#userinfo_enabled}
  */
  readonly userinfoEnabled?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the value of the custom resource attribute. This value can be a placeholder that references an attribute in the user schema, expressed as `${user.path.to.value}`, or it can be an expression, or a static string. Placeholders must be valid, enabled attributes in the environment’s user schema. Examples of valid values are: `${user.email}`, `${user.name.family}`, and `myClaimValueString`.  Note that definition in HCL requires escaping with the `$` character when defining attribute paths, for example `value = "$${user.email}"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#value ResourceAttribute#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute pingone_resource_attribute}
*/
export class ResourceAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_resource_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceAttribute to import
  * @param importFromId The id of the existing ResourceAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_resource_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/resource_attribute pingone_resource_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_resource_attribute',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customResourceId = config.customResourceId;
    this._environmentId = config.environmentId;
    this._idTokenEnabled = config.idTokenEnabled;
    this._name = config.name;
    this._resourceType = config.resourceType;
    this._userinfoEnabled = config.userinfoEnabled;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_resource_id - computed: false, optional: true, required: false
  private _customResourceId?: string; 
  public get customResourceId() {
    return this.getStringAttribute('custom_resource_id');
  }
  public set customResourceId(value: string) {
    this._customResourceId = value;
  }
  public resetCustomResourceId() {
    this._customResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceIdInput() {
    return this._customResourceId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_enabled - computed: true, optional: true, required: false
  private _idTokenEnabled?: boolean | cdktf.IResolvable; 
  public get idTokenEnabled() {
    return this.getBooleanAttribute('id_token_enabled');
  }
  public set idTokenEnabled(value: boolean | cdktf.IResolvable) {
    this._idTokenEnabled = value;
  }
  public resetIdTokenEnabled() {
    this._idTokenEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenEnabledInput() {
    return this._idTokenEnabled;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // userinfo_enabled - computed: true, optional: true, required: false
  private _userinfoEnabled?: boolean | cdktf.IResolvable; 
  public get userinfoEnabled() {
    return this.getBooleanAttribute('userinfo_enabled');
  }
  public set userinfoEnabled(value: boolean | cdktf.IResolvable) {
    this._userinfoEnabled = value;
  }
  public resetUserinfoEnabled() {
    this._userinfoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEnabledInput() {
    return this._userinfoEnabled;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_resource_id: cdktf.stringToTerraform(this._customResourceId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id_token_enabled: cdktf.booleanToTerraform(this._idTokenEnabled),
      name: cdktf.stringToTerraform(this._name),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      userinfo_enabled: cdktf.booleanToTerraform(this._userinfoEnabled),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_resource_id: {
        value: cdktf.stringToHclTerraform(this._customResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_token_enabled: {
        value: cdktf.booleanToHclTerraform(this._idTokenEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userinfo_enabled: {
        value: cdktf.booleanToHclTerraform(this._userinfoEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
