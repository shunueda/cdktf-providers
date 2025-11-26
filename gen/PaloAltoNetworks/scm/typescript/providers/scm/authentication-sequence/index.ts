// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationSequenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * An ordered list of authentication profiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#authentication_profiles AuthenticationSequence#authentication_profiles}
  */
  readonly authenticationProfiles?: string[];
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#device AuthenticationSequence#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#folder AuthenticationSequence#folder}
  */
  readonly folder?: string;
  /**
  * The name of the authentication sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#name AuthenticationSequence#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#snippet AuthenticationSequence#snippet}
  */
  readonly snippet?: string;
  /**
  * Use domain to determine authentication profile?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#use_domain_find_profile AuthenticationSequence#use_domain_find_profile}
  */
  readonly useDomainFindProfile?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence scm_authentication_sequence}
*/
export class AuthenticationSequence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_authentication_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationSequence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationSequence to import
  * @param importFromId The id of the existing AuthenticationSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_authentication_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/authentication_sequence scm_authentication_sequence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_authentication_sequence',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationProfiles = config.authenticationProfiles;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._snippet = config.snippet;
    this._useDomainFindProfile = config.useDomainFindProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_profiles - computed: false, optional: true, required: false
  private _authenticationProfiles?: string[]; 
  public get authenticationProfiles() {
    return this.getListAttribute('authentication_profiles');
  }
  public set authenticationProfiles(value: string[]) {
    this._authenticationProfiles = value;
  }
  public resetAuthenticationProfiles() {
    this._authenticationProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationProfilesInput() {
    return this._authenticationProfiles;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // use_domain_find_profile - computed: true, optional: true, required: false
  private _useDomainFindProfile?: boolean | cdktf.IResolvable; 
  public get useDomainFindProfile() {
    return this.getBooleanAttribute('use_domain_find_profile');
  }
  public set useDomainFindProfile(value: boolean | cdktf.IResolvable) {
    this._useDomainFindProfile = value;
  }
  public resetUseDomainFindProfile() {
    this._useDomainFindProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainFindProfileInput() {
    return this._useDomainFindProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationProfiles),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      use_domain_find_profile: cdktf.booleanToTerraform(this._useDomainFindProfile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_domain_find_profile: {
        value: cdktf.booleanToHclTerraform(this._useDomainFindProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
