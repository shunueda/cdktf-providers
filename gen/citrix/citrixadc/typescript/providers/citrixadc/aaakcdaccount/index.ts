// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaakcdaccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#cacert Aaakcdaccount#cacert}
  */
  readonly cacert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#delegateduser Aaakcdaccount#delegateduser}
  */
  readonly delegateduser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#enterpriserealm Aaakcdaccount#enterpriserealm}
  */
  readonly enterpriserealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#id Aaakcdaccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#kcdaccount Aaakcdaccount#kcdaccount}
  */
  readonly kcdaccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#kcdpassword Aaakcdaccount#kcdpassword}
  */
  readonly kcdpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#keytab Aaakcdaccount#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#realmstr Aaakcdaccount#realmstr}
  */
  readonly realmstr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#servicespn Aaakcdaccount#servicespn}
  */
  readonly servicespn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#usercert Aaakcdaccount#usercert}
  */
  readonly usercert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#userrealm Aaakcdaccount#userrealm}
  */
  readonly userrealm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount citrixadc_aaakcdaccount}
*/
export class Aaakcdaccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaakcdaccount";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaakcdaccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaakcdaccount to import
  * @param importFromId The id of the existing Aaakcdaccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaakcdaccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaakcdaccount", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaakcdaccount citrixadc_aaakcdaccount} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaakcdaccountConfig
  */
  public constructor(scope: Construct, id: string, config: AaakcdaccountConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaakcdaccount',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacert = config.cacert;
    this._delegateduser = config.delegateduser;
    this._enterpriserealm = config.enterpriserealm;
    this._id = config.id;
    this._kcdaccount = config.kcdaccount;
    this._kcdpassword = config.kcdpassword;
    this._keytab = config.keytab;
    this._realmstr = config.realmstr;
    this._servicespn = config.servicespn;
    this._usercert = config.usercert;
    this._userrealm = config.userrealm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cacert - computed: true, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // delegateduser - computed: true, optional: true, required: false
  private _delegateduser?: string; 
  public get delegateduser() {
    return this.getStringAttribute('delegateduser');
  }
  public set delegateduser(value: string) {
    this._delegateduser = value;
  }
  public resetDelegateduser() {
    this._delegateduser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateduserInput() {
    return this._delegateduser;
  }

  // enterpriserealm - computed: true, optional: true, required: false
  private _enterpriserealm?: string; 
  public get enterpriserealm() {
    return this.getStringAttribute('enterpriserealm');
  }
  public set enterpriserealm(value: string) {
    this._enterpriserealm = value;
  }
  public resetEnterpriserealm() {
    this._enterpriserealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriserealmInput() {
    return this._enterpriserealm;
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

  // kcdaccount - computed: false, optional: false, required: true
  private _kcdaccount?: string; 
  public get kcdaccount() {
    return this.getStringAttribute('kcdaccount');
  }
  public set kcdaccount(value: string) {
    this._kcdaccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdaccountInput() {
    return this._kcdaccount;
  }

  // kcdpassword - computed: true, optional: true, required: false
  private _kcdpassword?: string; 
  public get kcdpassword() {
    return this.getStringAttribute('kcdpassword');
  }
  public set kcdpassword(value: string) {
    this._kcdpassword = value;
  }
  public resetKcdpassword() {
    this._kcdpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdpasswordInput() {
    return this._kcdpassword;
  }

  // keytab - computed: true, optional: true, required: false
  private _keytab?: string; 
  public get keytab() {
    return this.getStringAttribute('keytab');
  }
  public set keytab(value: string) {
    this._keytab = value;
  }
  public resetKeytab() {
    this._keytab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab;
  }

  // realmstr - computed: true, optional: true, required: false
  private _realmstr?: string; 
  public get realmstr() {
    return this.getStringAttribute('realmstr');
  }
  public set realmstr(value: string) {
    this._realmstr = value;
  }
  public resetRealmstr() {
    this._realmstr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmstrInput() {
    return this._realmstr;
  }

  // servicespn - computed: true, optional: true, required: false
  private _servicespn?: string; 
  public get servicespn() {
    return this.getStringAttribute('servicespn');
  }
  public set servicespn(value: string) {
    this._servicespn = value;
  }
  public resetServicespn() {
    this._servicespn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicespnInput() {
    return this._servicespn;
  }

  // usercert - computed: true, optional: true, required: false
  private _usercert?: string; 
  public get usercert() {
    return this.getStringAttribute('usercert');
  }
  public set usercert(value: string) {
    this._usercert = value;
  }
  public resetUsercert() {
    this._usercert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usercertInput() {
    return this._usercert;
  }

  // userrealm - computed: true, optional: true, required: false
  private _userrealm?: string; 
  public get userrealm() {
    return this.getStringAttribute('userrealm');
  }
  public set userrealm(value: string) {
    this._userrealm = value;
  }
  public resetUserrealm() {
    this._userrealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userrealmInput() {
    return this._userrealm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cacert: cdktf.stringToTerraform(this._cacert),
      delegateduser: cdktf.stringToTerraform(this._delegateduser),
      enterpriserealm: cdktf.stringToTerraform(this._enterpriserealm),
      id: cdktf.stringToTerraform(this._id),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      kcdpassword: cdktf.stringToTerraform(this._kcdpassword),
      keytab: cdktf.stringToTerraform(this._keytab),
      realmstr: cdktf.stringToTerraform(this._realmstr),
      servicespn: cdktf.stringToTerraform(this._servicespn),
      usercert: cdktf.stringToTerraform(this._usercert),
      userrealm: cdktf.stringToTerraform(this._userrealm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cacert: {
        value: cdktf.stringToHclTerraform(this._cacert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegateduser: {
        value: cdktf.stringToHclTerraform(this._delegateduser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterpriserealm: {
        value: cdktf.stringToHclTerraform(this._enterpriserealm),
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
      kcdaccount: {
        value: cdktf.stringToHclTerraform(this._kcdaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kcdpassword: {
        value: cdktf.stringToHclTerraform(this._kcdpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keytab: {
        value: cdktf.stringToHclTerraform(this._keytab),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realmstr: {
        value: cdktf.stringToHclTerraform(this._realmstr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicespn: {
        value: cdktf.stringToHclTerraform(this._servicespn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usercert: {
        value: cdktf.stringToHclTerraform(this._usercert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userrealm: {
        value: cdktf.stringToHclTerraform(this._userrealm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
