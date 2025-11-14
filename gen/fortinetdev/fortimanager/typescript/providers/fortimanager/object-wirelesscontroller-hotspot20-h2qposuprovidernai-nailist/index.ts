// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#adom ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#h2qp_osu_provider_nai ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#h2qp_osu_provider_nai}
  */
  readonly h2QpOsuProviderNai: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#id ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#name ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#osu_nai ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#osu_nai}
  */
  readonly osuNai?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#scopetype ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist}
*/
export class ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerHotspot20H2QposuprovidernaiNailistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_hotspot20_h2qposuprovidernai_nailist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._h2QpOsuProviderNai = config.h2QpOsuProviderNai;
    this._id = config.id;
    this._name = config.name;
    this._osuNai = config.osuNai;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // h2qp_osu_provider_nai - computed: false, optional: false, required: true
  private _h2QpOsuProviderNai?: string; 
  public get h2QpOsuProviderNai() {
    return this.getStringAttribute('h2qp_osu_provider_nai');
  }
  public set h2QpOsuProviderNai(value: string) {
    this._h2QpOsuProviderNai = value;
  }
  // Temporarily expose input value. Use with caution.
  public get h2QpOsuProviderNaiInput() {
    return this._h2QpOsuProviderNai;
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

  // name - computed: true, optional: true, required: false
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

  // osu_nai - computed: false, optional: true, required: false
  private _osuNai?: string; 
  public get osuNai() {
    return this.getStringAttribute('osu_nai');
  }
  public set osuNai(value: string) {
    this._osuNai = value;
  }
  public resetOsuNai() {
    this._osuNai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osuNaiInput() {
    return this._osuNai;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      h2qp_osu_provider_nai: cdktf.stringToTerraform(this._h2QpOsuProviderNai),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      osu_nai: cdktf.stringToTerraform(this._osuNai),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      h2qp_osu_provider_nai: {
        value: cdktf.stringToHclTerraform(this._h2QpOsuProviderNai),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osu_nai: {
        value: cdktf.stringToHclTerraform(this._osuNai),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
