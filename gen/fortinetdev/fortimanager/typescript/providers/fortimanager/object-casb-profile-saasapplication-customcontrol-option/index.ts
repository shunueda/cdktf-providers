// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCasbProfileSaasapplicationCustomcontrolOptionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#adom ObjectCasbProfileSaasapplicationCustomcontrolOptionA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#custom_control ObjectCasbProfileSaasapplicationCustomcontrolOptionA#custom_control}
  */
  readonly customControl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#id ObjectCasbProfileSaasapplicationCustomcontrolOptionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#name ObjectCasbProfileSaasapplicationCustomcontrolOptionA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#profile ObjectCasbProfileSaasapplicationCustomcontrolOptionA#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#saas_application ObjectCasbProfileSaasapplicationCustomcontrolOptionA#saas_application}
  */
  readonly saasApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#scopetype ObjectCasbProfileSaasapplicationCustomcontrolOptionA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#user_input ObjectCasbProfileSaasapplicationCustomcontrolOptionA#user_input}
  */
  readonly userInput?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option fortimanager_object_casb_profile_saasapplication_customcontrol_option}
*/
export class ObjectCasbProfileSaasapplicationCustomcontrolOptionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_casb_profile_saasapplication_customcontrol_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCasbProfileSaasapplicationCustomcontrolOptionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCasbProfileSaasapplicationCustomcontrolOptionA to import
  * @param importFromId The id of the existing ObjectCasbProfileSaasapplicationCustomcontrolOptionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCasbProfileSaasapplicationCustomcontrolOptionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_casb_profile_saasapplication_customcontrol_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_casb_profile_saasapplication_customcontrol_option fortimanager_object_casb_profile_saasapplication_customcontrol_option} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCasbProfileSaasapplicationCustomcontrolOptionAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectCasbProfileSaasapplicationCustomcontrolOptionAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_casb_profile_saasapplication_customcontrol_option',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._customControl = config.customControl;
    this._id = config.id;
    this._name = config.name;
    this._profile = config.profile;
    this._saasApplication = config.saasApplication;
    this._scopetype = config.scopetype;
    this._userInput = config.userInput;
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

  // custom_control - computed: false, optional: false, required: true
  private _customControl?: string; 
  public get customControl() {
    return this.getStringAttribute('custom_control');
  }
  public set customControl(value: string) {
    this._customControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customControlInput() {
    return this._customControl;
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

  // saas_application - computed: false, optional: false, required: true
  private _saasApplication?: string; 
  public get saasApplication() {
    return this.getStringAttribute('saas_application');
  }
  public set saasApplication(value: string) {
    this._saasApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saasApplicationInput() {
    return this._saasApplication;
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

  // user_input - computed: true, optional: true, required: false
  private _userInput?: string[]; 
  public get userInput() {
    return cdktf.Fn.tolist(this.getListAttribute('user_input'));
  }
  public set userInput(value: string[]) {
    this._userInput = value;
  }
  public resetUserInput() {
    this._userInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInputInput() {
    return this._userInput;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      custom_control: cdktf.stringToTerraform(this._customControl),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      profile: cdktf.stringToTerraform(this._profile),
      saas_application: cdktf.stringToTerraform(this._saasApplication),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      user_input: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userInput),
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
      custom_control: {
        value: cdktf.stringToHclTerraform(this._customControl),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_application: {
        value: cdktf.stringToHclTerraform(this._saasApplication),
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
      user_input: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userInput),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
