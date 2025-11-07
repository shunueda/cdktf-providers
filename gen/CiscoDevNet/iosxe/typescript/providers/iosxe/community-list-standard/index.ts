// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CommunityListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard#deny_entries CommunityListStandard#deny_entries}
  */
  readonly denyEntries?: string[];
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard#device CommunityListStandard#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard#name CommunityListStandard#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard#permit_entries CommunityListStandard#permit_entries}
  */
  readonly permitEntries?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard iosxe_community_list_standard}
*/
export class CommunityListStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_community_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CommunityListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CommunityListStandard to import
  * @param importFromId The id of the existing CommunityListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CommunityListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_community_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/community_list_standard iosxe_community_list_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CommunityListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: CommunityListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_community_list_standard',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._denyEntries = config.denyEntries;
    this._device = config.device;
    this._name = config.name;
    this._permitEntries = config.permitEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deny_entries - computed: false, optional: true, required: false
  private _denyEntries?: string[]; 
  public get denyEntries() {
    return cdktf.Fn.tolist(this.getListAttribute('deny_entries'));
  }
  public set denyEntries(value: string[]) {
    this._denyEntries = value;
  }
  public resetDenyEntries() {
    this._denyEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyEntriesInput() {
    return this._denyEntries;
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

  // permit_entries - computed: false, optional: true, required: false
  private _permitEntries?: string[]; 
  public get permitEntries() {
    return cdktf.Fn.tolist(this.getListAttribute('permit_entries'));
  }
  public set permitEntries(value: string[]) {
    this._permitEntries = value;
  }
  public resetPermitEntries() {
    this._permitEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitEntriesInput() {
    return this._permitEntries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deny_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._denyEntries),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      permit_entries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permitEntries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deny_entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._denyEntries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      permit_entries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permitEntries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
