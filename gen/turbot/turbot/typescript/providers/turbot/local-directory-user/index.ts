// https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalDirectoryUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#display_name LocalDirectoryUser#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#email LocalDirectoryUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#family_name LocalDirectoryUser#family_name}
  */
  readonly familyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#given_name LocalDirectoryUser#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#id LocalDirectoryUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#middle_name LocalDirectoryUser#middle_name}
  */
  readonly middleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#parent LocalDirectoryUser#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#picture LocalDirectoryUser#picture}
  */
  readonly picture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#tags LocalDirectoryUser#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#title LocalDirectoryUser#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user turbot_local_directory_user}
*/
export class LocalDirectoryUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "turbot_local_directory_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalDirectoryUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalDirectoryUser to import
  * @param importFromId The id of the existing LocalDirectoryUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalDirectoryUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "turbot_local_directory_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/turbot/1.13.0/docs/resources/local_directory_user turbot_local_directory_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalDirectoryUserConfig
  */
  public constructor(scope: Construct, id: string, config: LocalDirectoryUserConfig) {
    super(scope, id, {
      terraformResourceType: 'turbot_local_directory_user',
      terraformGeneratorMetadata: {
        providerName: 'turbot',
        providerVersion: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._email = config.email;
    this._familyName = config.familyName;
    this._givenName = config.givenName;
    this._id = config.id;
    this._middleName = config.middleName;
    this._parent = config.parent;
    this._picture = config.picture;
    this._tags = config.tags;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // family_name - computed: false, optional: true, required: false
  private _familyName?: string; 
  public get familyName() {
    return this.getStringAttribute('family_name');
  }
  public set familyName(value: string) {
    this._familyName = value;
  }
  public resetFamilyName() {
    this._familyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyNameInput() {
    return this._familyName;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
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

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // parent_akas - computed: true, optional: false, required: false
  public get parentAkas() {
    return this.getListAttribute('parent_akas');
  }

  // password_timestamp - computed: true, optional: false, required: false
  public get passwordTimestamp() {
    return this.getStringAttribute('password_timestamp');
  }

  // picture - computed: false, optional: true, required: false
  private _picture?: string; 
  public get picture() {
    return this.getStringAttribute('picture');
  }
  public set picture(value: string) {
    this._picture = value;
  }
  public resetPicture() {
    this._picture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureInput() {
    return this._picture;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      family_name: cdktf.stringToTerraform(this._familyName),
      given_name: cdktf.stringToTerraform(this._givenName),
      id: cdktf.stringToTerraform(this._id),
      middle_name: cdktf.stringToTerraform(this._middleName),
      parent: cdktf.stringToTerraform(this._parent),
      picture: cdktf.stringToTerraform(this._picture),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family_name: {
        value: cdktf.stringToHclTerraform(this._familyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      given_name: {
        value: cdktf.stringToHclTerraform(this._givenName),
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
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      picture: {
        value: cdktf.stringToHclTerraform(this._picture),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
