// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityProviderAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to create the identity provider attribute in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#environment_id IdentityProviderAttribute#environment_id}
  */
  readonly environmentId: string;
  /**
  * The ID of the identity provider to create the attribute mapping for.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#identity_provider_id IdentityProviderAttribute#identity_provider_id}
  */
  readonly identityProviderId: string;
  /**
  * A string that specifies the name of the PingOne directory attribute to map the Identity Provider attribute value to. The attribute must not be defined as read only from the user schema or of type `COMPLEX` based on the user schema. Examples are `email`, `name.given`.  The following attributes may not be used: `account`, `id`, `created`, `updated`, `lifecycle`, `mfaEnabled`, `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#name IdentityProviderAttribute#name}
  */
  readonly name: string;
  /**
  * Indicates whether to update the user attribute in the directory with the non-empty mapped value from the IdP. Options are `EMPTY_ONLY` (only update the user attribute if it has an empty value); `ALWAYS` (always update the user attribute value). Defaults to `EMPTY_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#update IdentityProviderAttribute#update}
  */
  readonly update?: string;
  /**
  * A placeholder referring to the attribute (or attributes) from the provider. Placeholders must be valid for the attributes returned by the IdP type and use the `${}` syntax (for example, `${email}`). For SAML, any placeholder is acceptable, and it is mapped against the attributes available in the SAML assertion after authentication. The `${samlAssertion.subject}` placeholder is a special reserved placeholder used to refer to the subject name ID in the SAML assertion response.
  * 
  * For a full list of social providers and their configurable attribute mappings, see the [Social Provider and External Identity Provider Attribute Reference](#social-provider-and-external-identity-provider-attribute-reference) below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#value IdentityProviderAttribute#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute pingone_identity_provider_attribute}
*/
export class IdentityProviderAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_identity_provider_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityProviderAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityProviderAttribute to import
  * @param importFromId The id of the existing IdentityProviderAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityProviderAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_identity_provider_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/identity_provider_attribute pingone_identity_provider_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityProviderAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityProviderAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_identity_provider_attribute',
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
    this._environmentId = config.environmentId;
    this._identityProviderId = config.identityProviderId;
    this._name = config.name;
    this._update = config.update;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId?: string; 
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdInput() {
    return this._identityProviderId;
  }

  // mapping_type - computed: true, optional: false, required: false
  public get mappingType() {
    return this.getStringAttribute('mapping_type');
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

  // update - computed: true, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      identity_provider_id: cdktf.stringToTerraform(this._identityProviderId),
      name: cdktf.stringToTerraform(this._name),
      update: cdktf.stringToTerraform(this._update),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_id: {
        value: cdktf.stringToHclTerraform(this._identityProviderId),
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
      update: {
        value: cdktf.stringToHclTerraform(this._update),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
