// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallCasbprofileSaasapplicationAccessruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#action ObjectFirewallCasbprofileSaasapplicationAccessrule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#adom ObjectFirewallCasbprofileSaasapplicationAccessrule#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#bypass ObjectFirewallCasbprofileSaasapplicationAccessrule#bypass}
  */
  readonly bypass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#casb_profile ObjectFirewallCasbprofileSaasapplicationAccessrule#casb_profile}
  */
  readonly casbProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#id ObjectFirewallCasbprofileSaasapplicationAccessrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#name ObjectFirewallCasbprofileSaasapplicationAccessrule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#saas_application ObjectFirewallCasbprofileSaasapplicationAccessrule#saas_application}
  */
  readonly saasApplication: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#scopetype ObjectFirewallCasbprofileSaasapplicationAccessrule#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule fortimanager_object_firewall_casbprofile_saasapplication_accessrule}
*/
export class ObjectFirewallCasbprofileSaasapplicationAccessrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_casbprofile_saasapplication_accessrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallCasbprofileSaasapplicationAccessrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallCasbprofileSaasapplicationAccessrule to import
  * @param importFromId The id of the existing ObjectFirewallCasbprofileSaasapplicationAccessrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallCasbprofileSaasapplicationAccessrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_casbprofile_saasapplication_accessrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_casbprofile_saasapplication_accessrule fortimanager_object_firewall_casbprofile_saasapplication_accessrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallCasbprofileSaasapplicationAccessruleConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallCasbprofileSaasapplicationAccessruleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_casbprofile_saasapplication_accessrule',
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
    this._action = config.action;
    this._adom = config.adom;
    this._bypass = config.bypass;
    this._casbProfile = config.casbProfile;
    this._id = config.id;
    this._name = config.name;
    this._saasApplication = config.saasApplication;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // bypass - computed: true, optional: true, required: false
  private _bypass?: string[]; 
  public get bypass() {
    return cdktf.Fn.tolist(this.getListAttribute('bypass'));
  }
  public set bypass(value: string[]) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }

  // casb_profile - computed: false, optional: false, required: true
  private _casbProfile?: string; 
  public get casbProfile() {
    return this.getStringAttribute('casb_profile');
  }
  public set casbProfile(value: string) {
    this._casbProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get casbProfileInput() {
    return this._casbProfile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypass),
      casb_profile: cdktf.stringToTerraform(this._casbProfile),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      saas_application: cdktf.stringToTerraform(this._saasApplication),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypass),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      casb_profile: {
        value: cdktf.stringToHclTerraform(this._casbProfile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
