// https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CraasTokenV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#all_registries CraasTokenV2#all_registries}
  */
  readonly allRegistries: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#expires_at CraasTokenV2#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#id CraasTokenV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#is_set CraasTokenV2#is_set}
  */
  readonly isSet: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#mode_rw CraasTokenV2#mode_rw}
  */
  readonly modeRw: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#name CraasTokenV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#project_id CraasTokenV2#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#registry_ids CraasTokenV2#registry_ids}
  */
  readonly registryIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2 selectel_craas_token_v2}
*/
export class CraasTokenV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_craas_token_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CraasTokenV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CraasTokenV2 to import
  * @param importFromId The id of the existing CraasTokenV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CraasTokenV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_craas_token_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/craas_token_v2 selectel_craas_token_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CraasTokenV2Config
  */
  public constructor(scope: Construct, id: string, config: CraasTokenV2Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_craas_token_v2',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allRegistries = config.allRegistries;
    this._expiresAt = config.expiresAt;
    this._id = config.id;
    this._isSet = config.isSet;
    this._modeRw = config.modeRw;
    this._name = config.name;
    this._projectId = config.projectId;
    this._registryIds = config.registryIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_registries - computed: false, optional: false, required: true
  private _allRegistries?: boolean | cdktf.IResolvable; 
  public get allRegistries() {
    return this.getBooleanAttribute('all_registries');
  }
  public set allRegistries(value: boolean | cdktf.IResolvable) {
    this._allRegistries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegistriesInput() {
    return this._allRegistries;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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

  // is_set - computed: false, optional: false, required: true
  private _isSet?: boolean | cdktf.IResolvable; 
  public get isSet() {
    return this.getBooleanAttribute('is_set');
  }
  public set isSet(value: boolean | cdktf.IResolvable) {
    this._isSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isSetInput() {
    return this._isSet;
  }

  // mode_rw - computed: false, optional: false, required: true
  private _modeRw?: boolean | cdktf.IResolvable; 
  public get modeRw() {
    return this.getBooleanAttribute('mode_rw');
  }
  public set modeRw(value: boolean | cdktf.IResolvable) {
    this._modeRw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeRwInput() {
    return this._modeRw;
  }

  // name - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // registry_ids - computed: false, optional: true, required: false
  private _registryIds?: string[]; 
  public get registryIds() {
    return this.getListAttribute('registry_ids');
  }
  public set registryIds(value: string[]) {
    this._registryIds = value;
  }
  public resetRegistryIds() {
    this._registryIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdsInput() {
    return this._registryIds;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_registries: cdktf.booleanToTerraform(this._allRegistries),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      is_set: cdktf.booleanToTerraform(this._isSet),
      mode_rw: cdktf.booleanToTerraform(this._modeRw),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      registry_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registryIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_registries: {
        value: cdktf.booleanToHclTerraform(this._allRegistries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
      is_set: {
        value: cdktf.booleanToHclTerraform(this._isSet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode_rw: {
        value: cdktf.booleanToHclTerraform(this._modeRw),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registryIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
