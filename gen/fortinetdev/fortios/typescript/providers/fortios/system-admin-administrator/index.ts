// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminAdministratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#accprofile SystemAdminAdministrator#accprofile}
  */
  readonly accprofile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#comments SystemAdminAdministrator#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#id SystemAdminAdministrator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#name SystemAdminAdministrator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#password SystemAdminAdministrator#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost1 SystemAdminAdministrator#trusthost1}
  */
  readonly trusthost1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost10 SystemAdminAdministrator#trusthost10}
  */
  readonly trusthost10?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost2 SystemAdminAdministrator#trusthost2}
  */
  readonly trusthost2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost3 SystemAdminAdministrator#trusthost3}
  */
  readonly trusthost3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost4 SystemAdminAdministrator#trusthost4}
  */
  readonly trusthost4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost5 SystemAdminAdministrator#trusthost5}
  */
  readonly trusthost5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost6 SystemAdminAdministrator#trusthost6}
  */
  readonly trusthost6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost7 SystemAdminAdministrator#trusthost7}
  */
  readonly trusthost7?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost8 SystemAdminAdministrator#trusthost8}
  */
  readonly trusthost8?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#trusthost9 SystemAdminAdministrator#trusthost9}
  */
  readonly trusthost9?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#vdom SystemAdminAdministrator#vdom}
  */
  readonly vdom?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator fortios_system_admin_administrator}
*/
export class SystemAdminAdministrator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_admin_administrator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminAdministrator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminAdministrator to import
  * @param importFromId The id of the existing SystemAdminAdministrator that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminAdministrator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_admin_administrator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_admin_administrator fortios_system_admin_administrator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminAdministratorConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAdminAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_admin_administrator',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._comments = config.comments;
    this._id = config.id;
    this._name = config.name;
    this._password = config.password;
    this._trusthost1 = config.trusthost1;
    this._trusthost10 = config.trusthost10;
    this._trusthost2 = config.trusthost2;
    this._trusthost3 = config.trusthost3;
    this._trusthost4 = config.trusthost4;
    this._trusthost5 = config.trusthost5;
    this._trusthost6 = config.trusthost6;
    this._trusthost7 = config.trusthost7;
    this._trusthost8 = config.trusthost8;
    this._trusthost9 = config.trusthost9;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: false, optional: false, required: true
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // trusthost1 - computed: true, optional: true, required: false
  private _trusthost1?: string; 
  public get trusthost1() {
    return this.getStringAttribute('trusthost1');
  }
  public set trusthost1(value: string) {
    this._trusthost1 = value;
  }
  public resetTrusthost1() {
    this._trusthost1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost1Input() {
    return this._trusthost1;
  }

  // trusthost10 - computed: true, optional: true, required: false
  private _trusthost10?: string; 
  public get trusthost10() {
    return this.getStringAttribute('trusthost10');
  }
  public set trusthost10(value: string) {
    this._trusthost10 = value;
  }
  public resetTrusthost10() {
    this._trusthost10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost10Input() {
    return this._trusthost10;
  }

  // trusthost2 - computed: true, optional: true, required: false
  private _trusthost2?: string; 
  public get trusthost2() {
    return this.getStringAttribute('trusthost2');
  }
  public set trusthost2(value: string) {
    this._trusthost2 = value;
  }
  public resetTrusthost2() {
    this._trusthost2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost2Input() {
    return this._trusthost2;
  }

  // trusthost3 - computed: true, optional: true, required: false
  private _trusthost3?: string; 
  public get trusthost3() {
    return this.getStringAttribute('trusthost3');
  }
  public set trusthost3(value: string) {
    this._trusthost3 = value;
  }
  public resetTrusthost3() {
    this._trusthost3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost3Input() {
    return this._trusthost3;
  }

  // trusthost4 - computed: true, optional: true, required: false
  private _trusthost4?: string; 
  public get trusthost4() {
    return this.getStringAttribute('trusthost4');
  }
  public set trusthost4(value: string) {
    this._trusthost4 = value;
  }
  public resetTrusthost4() {
    this._trusthost4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost4Input() {
    return this._trusthost4;
  }

  // trusthost5 - computed: true, optional: true, required: false
  private _trusthost5?: string; 
  public get trusthost5() {
    return this.getStringAttribute('trusthost5');
  }
  public set trusthost5(value: string) {
    this._trusthost5 = value;
  }
  public resetTrusthost5() {
    this._trusthost5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost5Input() {
    return this._trusthost5;
  }

  // trusthost6 - computed: true, optional: true, required: false
  private _trusthost6?: string; 
  public get trusthost6() {
    return this.getStringAttribute('trusthost6');
  }
  public set trusthost6(value: string) {
    this._trusthost6 = value;
  }
  public resetTrusthost6() {
    this._trusthost6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost6Input() {
    return this._trusthost6;
  }

  // trusthost7 - computed: true, optional: true, required: false
  private _trusthost7?: string; 
  public get trusthost7() {
    return this.getStringAttribute('trusthost7');
  }
  public set trusthost7(value: string) {
    this._trusthost7 = value;
  }
  public resetTrusthost7() {
    this._trusthost7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost7Input() {
    return this._trusthost7;
  }

  // trusthost8 - computed: true, optional: true, required: false
  private _trusthost8?: string; 
  public get trusthost8() {
    return this.getStringAttribute('trusthost8');
  }
  public set trusthost8(value: string) {
    this._trusthost8 = value;
  }
  public resetTrusthost8() {
    this._trusthost8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost8Input() {
    return this._trusthost8;
  }

  // trusthost9 - computed: true, optional: true, required: false
  private _trusthost9?: string; 
  public get trusthost9() {
    return this.getStringAttribute('trusthost9');
  }
  public set trusthost9(value: string) {
    this._trusthost9 = value;
  }
  public resetTrusthost9() {
    this._trusthost9 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trusthost9Input() {
    return this._trusthost9;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return this.getListAttribute('vdom');
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.stringToTerraform(this._accprofile),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      trusthost1: cdktf.stringToTerraform(this._trusthost1),
      trusthost10: cdktf.stringToTerraform(this._trusthost10),
      trusthost2: cdktf.stringToTerraform(this._trusthost2),
      trusthost3: cdktf.stringToTerraform(this._trusthost3),
      trusthost4: cdktf.stringToTerraform(this._trusthost4),
      trusthost5: cdktf.stringToTerraform(this._trusthost5),
      trusthost6: cdktf.stringToTerraform(this._trusthost6),
      trusthost7: cdktf.stringToTerraform(this._trusthost7),
      trusthost8: cdktf.stringToTerraform(this._trusthost8),
      trusthost9: cdktf.stringToTerraform(this._trusthost9),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.stringToHclTerraform(this._accprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost1: {
        value: cdktf.stringToHclTerraform(this._trusthost1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost10: {
        value: cdktf.stringToHclTerraform(this._trusthost10),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost2: {
        value: cdktf.stringToHclTerraform(this._trusthost2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost3: {
        value: cdktf.stringToHclTerraform(this._trusthost3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost4: {
        value: cdktf.stringToHclTerraform(this._trusthost4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost5: {
        value: cdktf.stringToHclTerraform(this._trusthost5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost6: {
        value: cdktf.stringToHclTerraform(this._trusthost6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost7: {
        value: cdktf.stringToHclTerraform(this._trusthost7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost8: {
        value: cdktf.stringToHclTerraform(this._trusthost8),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusthost9: {
        value: cdktf.stringToHclTerraform(this._trusthost9),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
