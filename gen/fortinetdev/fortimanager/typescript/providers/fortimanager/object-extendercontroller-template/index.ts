// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectExtendercontrollerTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#adom ObjectExtendercontrollerTemplate#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#dataplan ObjectExtendercontrollerTemplate#dataplan}
  */
  readonly dataplan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#description ObjectExtendercontrollerTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#id ObjectExtendercontrollerTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#modem1_ifname ObjectExtendercontrollerTemplate#modem1_ifname}
  */
  readonly modem1Ifname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#modem1_sim_profile ObjectExtendercontrollerTemplate#modem1_sim_profile}
  */
  readonly modem1SimProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#modem2_ifname ObjectExtendercontrollerTemplate#modem2_ifname}
  */
  readonly modem2Ifname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#modem2_sim_profile ObjectExtendercontrollerTemplate#modem2_sim_profile}
  */
  readonly modem2SimProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#name ObjectExtendercontrollerTemplate#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#scopetype ObjectExtendercontrollerTemplate#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template fortimanager_object_extendercontroller_template}
*/
export class ObjectExtendercontrollerTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_extendercontroller_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectExtendercontrollerTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectExtendercontrollerTemplate to import
  * @param importFromId The id of the existing ObjectExtendercontrollerTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectExtendercontrollerTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_extendercontroller_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_extendercontroller_template fortimanager_object_extendercontroller_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectExtendercontrollerTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectExtendercontrollerTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_extendercontroller_template',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
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
    this._adom = config.adom;
    this._dataplan = config.dataplan;
    this._description = config.description;
    this._id = config.id;
    this._modem1Ifname = config.modem1Ifname;
    this._modem1SimProfile = config.modem1SimProfile;
    this._modem2Ifname = config.modem2Ifname;
    this._modem2SimProfile = config.modem2SimProfile;
    this._name = config.name;
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

  // dataplan - computed: false, optional: true, required: false
  private _dataplan?: string; 
  public get dataplan() {
    return this.getStringAttribute('dataplan');
  }
  public set dataplan(value: string) {
    this._dataplan = value;
  }
  public resetDataplan() {
    this._dataplan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplanInput() {
    return this._dataplan;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // modem1_ifname - computed: false, optional: true, required: false
  private _modem1Ifname?: string; 
  public get modem1Ifname() {
    return this.getStringAttribute('modem1_ifname');
  }
  public set modem1Ifname(value: string) {
    this._modem1Ifname = value;
  }
  public resetModem1Ifname() {
    this._modem1Ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1IfnameInput() {
    return this._modem1Ifname;
  }

  // modem1_sim_profile - computed: false, optional: true, required: false
  private _modem1SimProfile?: string; 
  public get modem1SimProfile() {
    return this.getStringAttribute('modem1_sim_profile');
  }
  public set modem1SimProfile(value: string) {
    this._modem1SimProfile = value;
  }
  public resetModem1SimProfile() {
    this._modem1SimProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem1SimProfileInput() {
    return this._modem1SimProfile;
  }

  // modem2_ifname - computed: false, optional: true, required: false
  private _modem2Ifname?: string; 
  public get modem2Ifname() {
    return this.getStringAttribute('modem2_ifname');
  }
  public set modem2Ifname(value: string) {
    this._modem2Ifname = value;
  }
  public resetModem2Ifname() {
    this._modem2Ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2IfnameInput() {
    return this._modem2Ifname;
  }

  // modem2_sim_profile - computed: false, optional: true, required: false
  private _modem2SimProfile?: string; 
  public get modem2SimProfile() {
    return this.getStringAttribute('modem2_sim_profile');
  }
  public set modem2SimProfile(value: string) {
    this._modem2SimProfile = value;
  }
  public resetModem2SimProfile() {
    this._modem2SimProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modem2SimProfileInput() {
    return this._modem2SimProfile;
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
      dataplan: cdktf.stringToTerraform(this._dataplan),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      modem1_ifname: cdktf.stringToTerraform(this._modem1Ifname),
      modem1_sim_profile: cdktf.stringToTerraform(this._modem1SimProfile),
      modem2_ifname: cdktf.stringToTerraform(this._modem2Ifname),
      modem2_sim_profile: cdktf.stringToTerraform(this._modem2SimProfile),
      name: cdktf.stringToTerraform(this._name),
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
      dataplan: {
        value: cdktf.stringToHclTerraform(this._dataplan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      modem1_ifname: {
        value: cdktf.stringToHclTerraform(this._modem1Ifname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem1_sim_profile: {
        value: cdktf.stringToHclTerraform(this._modem1SimProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem2_ifname: {
        value: cdktf.stringToHclTerraform(this._modem2Ifname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem2_sim_profile: {
        value: cdktf.stringToHclTerraform(this._modem2SimProfile),
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
