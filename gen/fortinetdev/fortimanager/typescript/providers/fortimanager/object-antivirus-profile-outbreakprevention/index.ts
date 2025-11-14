// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectAntivirusProfileOutbreakpreventionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#adom ObjectAntivirusProfileOutbreakprevention#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#external_blocklist ObjectAntivirusProfileOutbreakprevention#external_blocklist}
  */
  readonly externalBlocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#ftgd_service ObjectAntivirusProfileOutbreakprevention#ftgd_service}
  */
  readonly ftgdService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#id ObjectAntivirusProfileOutbreakprevention#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#profile ObjectAntivirusProfileOutbreakprevention#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#scopetype ObjectAntivirusProfileOutbreakprevention#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention fortimanager_object_antivirus_profile_outbreakprevention}
*/
export class ObjectAntivirusProfileOutbreakprevention extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_antivirus_profile_outbreakprevention";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectAntivirusProfileOutbreakprevention resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectAntivirusProfileOutbreakprevention to import
  * @param importFromId The id of the existing ObjectAntivirusProfileOutbreakprevention that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectAntivirusProfileOutbreakprevention to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_antivirus_profile_outbreakprevention", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_antivirus_profile_outbreakprevention fortimanager_object_antivirus_profile_outbreakprevention} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectAntivirusProfileOutbreakpreventionConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectAntivirusProfileOutbreakpreventionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_antivirus_profile_outbreakprevention',
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
    this._externalBlocklist = config.externalBlocklist;
    this._ftgdService = config.ftgdService;
    this._id = config.id;
    this._profile = config.profile;
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

  // external_blocklist - computed: true, optional: true, required: false
  private _externalBlocklist?: string; 
  public get externalBlocklist() {
    return this.getStringAttribute('external_blocklist');
  }
  public set externalBlocklist(value: string) {
    this._externalBlocklist = value;
  }
  public resetExternalBlocklist() {
    this._externalBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalBlocklistInput() {
    return this._externalBlocklist;
  }

  // ftgd_service - computed: true, optional: true, required: false
  private _ftgdService?: string; 
  public get ftgdService() {
    return this.getStringAttribute('ftgd_service');
  }
  public set ftgdService(value: string) {
    this._ftgdService = value;
  }
  public resetFtgdService() {
    this._ftgdService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdServiceInput() {
    return this._ftgdService;
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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
      external_blocklist: cdktf.stringToTerraform(this._externalBlocklist),
      ftgd_service: cdktf.stringToTerraform(this._ftgdService),
      id: cdktf.stringToTerraform(this._id),
      profile: cdktf.stringToTerraform(this._profile),
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
      external_blocklist: {
        value: cdktf.stringToHclTerraform(this._externalBlocklist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftgd_service: {
        value: cdktf.stringToHclTerraform(this._ftgdService),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
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
