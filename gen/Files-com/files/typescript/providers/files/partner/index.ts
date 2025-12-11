// https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow Partner Admins to change Two-Factor Authentication requirements for Partner Users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#allow_bypassing_2fa_policies Partner#allow_bypassing_2fa_policies}
  */
  readonly allowBypassing2FaPolicies?: boolean | cdktf.IResolvable;
  /**
  * Allow Partner Admins to change or reset credentials for users belonging to this Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#allow_credential_changes Partner#allow_credential_changes}
  */
  readonly allowCredentialChanges?: boolean | cdktf.IResolvable;
  /**
  * Allow Partner Admins to provide GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#allow_providing_gpg_keys Partner#allow_providing_gpg_keys}
  */
  readonly allowProvidingGpgKeys?: boolean | cdktf.IResolvable;
  /**
  * Allow Partner Admins to create users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#allow_user_creation Partner#allow_user_creation}
  */
  readonly allowUserCreation?: boolean | cdktf.IResolvable;
  /**
  * The name of the Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#name Partner#name}
  */
  readonly name: string;
  /**
  * Notes about this Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#notes Partner#notes}
  */
  readonly notes?: string;
  /**
  * The root folder path for this Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#root_folder Partner#root_folder}
  */
  readonly rootFolder?: string;
  /**
  * Comma-separated list of Tags for this Partner. Tags are used for other features, such as UserLifecycleRules, which can target specific tags.  Tags must only contain lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#tags Partner#tags}
  */
  readonly tags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner files_partner}
*/
export class Partner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Partner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Partner to import
  * @param importFromId The id of the existing Partner that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Partner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/partner files_partner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartnerConfig
  */
  public constructor(scope: Construct, id: string, config: PartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'files_partner',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.409',
        providerVersionConstraint: '0.1.409'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBypassing2FaPolicies = config.allowBypassing2FaPolicies;
    this._allowCredentialChanges = config.allowCredentialChanges;
    this._allowProvidingGpgKeys = config.allowProvidingGpgKeys;
    this._allowUserCreation = config.allowUserCreation;
    this._name = config.name;
    this._notes = config.notes;
    this._rootFolder = config.rootFolder;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bypassing_2fa_policies - computed: true, optional: true, required: false
  private _allowBypassing2FaPolicies?: boolean | cdktf.IResolvable; 
  public get allowBypassing2FaPolicies() {
    return this.getBooleanAttribute('allow_bypassing_2fa_policies');
  }
  public set allowBypassing2FaPolicies(value: boolean | cdktf.IResolvable) {
    this._allowBypassing2FaPolicies = value;
  }
  public resetAllowBypassing2FaPolicies() {
    this._allowBypassing2FaPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBypassing2FaPoliciesInput() {
    return this._allowBypassing2FaPolicies;
  }

  // allow_credential_changes - computed: true, optional: true, required: false
  private _allowCredentialChanges?: boolean | cdktf.IResolvable; 
  public get allowCredentialChanges() {
    return this.getBooleanAttribute('allow_credential_changes');
  }
  public set allowCredentialChanges(value: boolean | cdktf.IResolvable) {
    this._allowCredentialChanges = value;
  }
  public resetAllowCredentialChanges() {
    this._allowCredentialChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialChangesInput() {
    return this._allowCredentialChanges;
  }

  // allow_providing_gpg_keys - computed: true, optional: true, required: false
  private _allowProvidingGpgKeys?: boolean | cdktf.IResolvable; 
  public get allowProvidingGpgKeys() {
    return this.getBooleanAttribute('allow_providing_gpg_keys');
  }
  public set allowProvidingGpgKeys(value: boolean | cdktf.IResolvable) {
    this._allowProvidingGpgKeys = value;
  }
  public resetAllowProvidingGpgKeys() {
    this._allowProvidingGpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProvidingGpgKeysInput() {
    return this._allowProvidingGpgKeys;
  }

  // allow_user_creation - computed: true, optional: true, required: false
  private _allowUserCreation?: boolean | cdktf.IResolvable; 
  public get allowUserCreation() {
    return this.getBooleanAttribute('allow_user_creation');
  }
  public set allowUserCreation(value: boolean | cdktf.IResolvable) {
    this._allowUserCreation = value;
  }
  public resetAllowUserCreation() {
    this._allowUserCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserCreationInput() {
    return this._allowUserCreation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // partner_admin_ids - computed: true, optional: false, required: false
  public get partnerAdminIds() {
    return this.getNumberListAttribute('partner_admin_ids');
  }

  // root_folder - computed: true, optional: true, required: false
  private _rootFolder?: string; 
  public get rootFolder() {
    return this.getStringAttribute('root_folder');
  }
  public set rootFolder(value: string) {
    this._rootFolder = value;
  }
  public resetRootFolder() {
    this._rootFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFolderInput() {
    return this._rootFolder;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_bypassing_2fa_policies: cdktf.booleanToTerraform(this._allowBypassing2FaPolicies),
      allow_credential_changes: cdktf.booleanToTerraform(this._allowCredentialChanges),
      allow_providing_gpg_keys: cdktf.booleanToTerraform(this._allowProvidingGpgKeys),
      allow_user_creation: cdktf.booleanToTerraform(this._allowUserCreation),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      root_folder: cdktf.stringToTerraform(this._rootFolder),
      tags: cdktf.stringToTerraform(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_bypassing_2fa_policies: {
        value: cdktf.booleanToHclTerraform(this._allowBypassing2FaPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_credential_changes: {
        value: cdktf.booleanToHclTerraform(this._allowCredentialChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_providing_gpg_keys: {
        value: cdktf.booleanToHclTerraform(this._allowProvidingGpgKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_creation: {
        value: cdktf.booleanToHclTerraform(this._allowUserCreation),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_folder: {
        value: cdktf.stringToHclTerraform(this._rootFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
