// https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active boot profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#active_profile Boot#active_profile}
  */
  readonly activeProfile?: string;
  /**
  * Active Architecture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#architecture Boot#architecture}
  */
  readonly architecture?: string;
  /**
  * One or more SSH key fingerprints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#authorized_keys Boot#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#id Boot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#language Boot#language}
  */
  readonly language?: string;
  /**
  * Active Operating System / Distribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#operating_system Boot#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Server ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#server_id Boot#server_id}
  */
  readonly serverId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot hetzner-robot_boot}
*/
export class Boot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hetzner-robot_boot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Boot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Boot to import
  * @param importFromId The id of the existing Boot that should be imported. Refer to the {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Boot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hetzner-robot_boot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/silenium-dev/hetzner-robot/3.5.5/docs/resources/boot hetzner-robot_boot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootConfig
  */
  public constructor(scope: Construct, id: string, config: BootConfig) {
    super(scope, id, {
      terraformResourceType: 'hetzner-robot_boot',
      terraformGeneratorMetadata: {
        providerName: 'hetzner-robot',
        providerVersion: '3.5.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeProfile = config.activeProfile;
    this._architecture = config.architecture;
    this._authorizedKeys = config.authorizedKeys;
    this._id = config.id;
    this._language = config.language;
    this._operatingSystem = config.operatingSystem;
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_profile - computed: false, optional: true, required: false
  private _activeProfile?: string; 
  public get activeProfile() {
    return this.getStringAttribute('active_profile');
  }
  public set activeProfile(value: string) {
    this._activeProfile = value;
  }
  public resetActiveProfile() {
    this._activeProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeProfileInput() {
    return this._activeProfile;
  }

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return this.getListAttribute('authorized_keys');
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
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

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_network - computed: true, optional: false, required: false
  public get ipv6Network() {
    return this.getStringAttribute('ipv6_network');
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: number; 
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }
  public set serverId(value: number) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_profile: cdktf.stringToTerraform(this._activeProfile),
      architecture: cdktf.stringToTerraform(this._architecture),
      authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedKeys),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      server_id: cdktf.numberToTerraform(this._serverId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_profile: {
        value: cdktf.stringToHclTerraform(this._activeProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorized_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_id: {
        value: cdktf.numberToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
