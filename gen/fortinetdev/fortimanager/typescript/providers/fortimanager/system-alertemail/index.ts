// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAlertemailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#authentication SystemAlertemail#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#fromaddress SystemAlertemail#fromaddress}
  */
  readonly fromaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#fromname SystemAlertemail#fromname}
  */
  readonly fromname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#id SystemAlertemail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#smtppassword SystemAlertemail#smtppassword}
  */
  readonly smtppassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#smtpport SystemAlertemail#smtpport}
  */
  readonly smtpport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#smtpserver SystemAlertemail#smtpserver}
  */
  readonly smtpserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#smtpuser SystemAlertemail#smtpuser}
  */
  readonly smtpuser?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail fortimanager_system_alertemail}
*/
export class SystemAlertemail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_alertemail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAlertemail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAlertemail to import
  * @param importFromId The id of the existing SystemAlertemail that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAlertemail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_alertemail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/system_alertemail fortimanager_system_alertemail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAlertemailConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAlertemailConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_alertemail',
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
    this._authentication = config.authentication;
    this._fromaddress = config.fromaddress;
    this._fromname = config.fromname;
    this._id = config.id;
    this._smtppassword = config.smtppassword;
    this._smtpport = config.smtpport;
    this._smtpserver = config.smtpserver;
    this._smtpuser = config.smtpuser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // fromaddress - computed: true, optional: true, required: false
  private _fromaddress?: string; 
  public get fromaddress() {
    return this.getStringAttribute('fromaddress');
  }
  public set fromaddress(value: string) {
    this._fromaddress = value;
  }
  public resetFromaddress() {
    this._fromaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromaddressInput() {
    return this._fromaddress;
  }

  // fromname - computed: true, optional: true, required: false
  private _fromname?: string; 
  public get fromname() {
    return this.getStringAttribute('fromname');
  }
  public set fromname(value: string) {
    this._fromname = value;
  }
  public resetFromname() {
    this._fromname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromnameInput() {
    return this._fromname;
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

  // smtppassword - computed: true, optional: true, required: false
  private _smtppassword?: string[]; 
  public get smtppassword() {
    return cdktf.Fn.tolist(this.getListAttribute('smtppassword'));
  }
  public set smtppassword(value: string[]) {
    this._smtppassword = value;
  }
  public resetSmtppassword() {
    this._smtppassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtppasswordInput() {
    return this._smtppassword;
  }

  // smtpport - computed: true, optional: true, required: false
  private _smtpport?: number; 
  public get smtpport() {
    return this.getNumberAttribute('smtpport');
  }
  public set smtpport(value: number) {
    this._smtpport = value;
  }
  public resetSmtpport() {
    this._smtpport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpportInput() {
    return this._smtpport;
  }

  // smtpserver - computed: true, optional: true, required: false
  private _smtpserver?: string; 
  public get smtpserver() {
    return this.getStringAttribute('smtpserver');
  }
  public set smtpserver(value: string) {
    this._smtpserver = value;
  }
  public resetSmtpserver() {
    this._smtpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpserverInput() {
    return this._smtpserver;
  }

  // smtpuser - computed: false, optional: true, required: false
  private _smtpuser?: string; 
  public get smtpuser() {
    return this.getStringAttribute('smtpuser');
  }
  public set smtpuser(value: string) {
    this._smtpuser = value;
  }
  public resetSmtpuser() {
    this._smtpuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpuserInput() {
    return this._smtpuser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication: cdktf.stringToTerraform(this._authentication),
      fromaddress: cdktf.stringToTerraform(this._fromaddress),
      fromname: cdktf.stringToTerraform(this._fromname),
      id: cdktf.stringToTerraform(this._id),
      smtppassword: cdktf.listMapper(cdktf.stringToTerraform, false)(this._smtppassword),
      smtpport: cdktf.numberToTerraform(this._smtpport),
      smtpserver: cdktf.stringToTerraform(this._smtpserver),
      smtpuser: cdktf.stringToTerraform(this._smtpuser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fromaddress: {
        value: cdktf.stringToHclTerraform(this._fromaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fromname: {
        value: cdktf.stringToHclTerraform(this._fromname),
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
      smtppassword: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._smtppassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      smtpport: {
        value: cdktf.numberToHclTerraform(this._smtpport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smtpserver: {
        value: cdktf.stringToHclTerraform(this._smtpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtpuser: {
        value: cdktf.stringToHclTerraform(this._smtpuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
