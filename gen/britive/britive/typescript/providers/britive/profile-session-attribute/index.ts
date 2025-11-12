// https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileSessionAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application name of the application, profile is assciated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#app_name ProfileSessionAttribute#app_name}
  */
  readonly appName?: string;
  /**
  * The attribute name associate with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#attribute_name ProfileSessionAttribute#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * The type of attribute associate with the profile, should be one of [Static, Identity]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#attribute_type ProfileSessionAttribute#attribute_type}
  */
  readonly attributeType?: string;
  /**
  * The attribute value associate with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#attribute_value ProfileSessionAttribute#attribute_value}
  */
  readonly attributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#id ProfileSessionAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The attribute mapping name associate with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#mapping_name ProfileSessionAttribute#mapping_name}
  */
  readonly mappingName: string;
  /**
  * The identifier of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#profile_id ProfileSessionAttribute#profile_id}
  */
  readonly profileId: string;
  /**
  * The name of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#profile_name ProfileSessionAttribute#profile_name}
  */
  readonly profileName?: string;
  /**
  * The attribute transitive associate with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#transitive ProfileSessionAttribute#transitive}
  */
  readonly transitive?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute britive_profile_session_attribute}
*/
export class ProfileSessionAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_profile_session_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileSessionAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileSessionAttribute to import
  * @param importFromId The id of the existing ProfileSessionAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileSessionAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_profile_session_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.4/docs/resources/profile_session_attribute britive_profile_session_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileSessionAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileSessionAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_profile_session_attribute',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.4',
        providerVersionConstraint: '2.2.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._attributeName = config.attributeName;
    this._attributeType = config.attributeType;
    this._attributeValue = config.attributeValue;
    this._id = config.id;
    this._mappingName = config.mappingName;
    this._profileId = config.profileId;
    this._profileName = config.profileName;
    this._transitive = config.transitive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: true, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_type - computed: false, optional: true, required: false
  private _attributeType?: string; 
  public get attributeType() {
    return this.getStringAttribute('attribute_type');
  }
  public set attributeType(value: string) {
    this._attributeType = value;
  }
  public resetAttributeType() {
    this._attributeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeTypeInput() {
    return this._attributeType;
  }

  // attribute_value - computed: false, optional: true, required: false
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  public resetAttributeValue() {
    this._attributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
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

  // mapping_name - computed: false, optional: false, required: true
  private _mappingName?: string; 
  public get mappingName() {
    return this.getStringAttribute('mapping_name');
  }
  public set mappingName(value: string) {
    this._mappingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingNameInput() {
    return this._mappingName;
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // transitive - computed: false, optional: true, required: false
  private _transitive?: boolean | cdktf.IResolvable; 
  public get transitive() {
    return this.getBooleanAttribute('transitive');
  }
  public set transitive(value: boolean | cdktf.IResolvable) {
    this._transitive = value;
  }
  public resetTransitive() {
    this._transitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveInput() {
    return this._transitive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      attribute_type: cdktf.stringToTerraform(this._attributeType),
      attribute_value: cdktf.stringToTerraform(this._attributeValue),
      id: cdktf.stringToTerraform(this._id),
      mapping_name: cdktf.stringToTerraform(this._mappingName),
      profile_id: cdktf.stringToTerraform(this._profileId),
      profile_name: cdktf.stringToTerraform(this._profileName),
      transitive: cdktf.booleanToTerraform(this._transitive),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_type: {
        value: cdktf.stringToHclTerraform(this._attributeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_value: {
        value: cdktf.stringToHclTerraform(this._attributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping_name: {
        value: cdktf.stringToHclTerraform(this._mappingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transitive: {
        value: cdktf.booleanToHclTerraform(this._transitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
