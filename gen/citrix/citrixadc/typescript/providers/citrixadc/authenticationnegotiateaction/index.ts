// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationnegotiateactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#defaultauthenticationgroup Authenticationnegotiateaction#defaultauthenticationgroup}
  */
  readonly defaultauthenticationgroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#domain Authenticationnegotiateaction#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#domainuser Authenticationnegotiateaction#domainuser}
  */
  readonly domainuser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#domainuserpasswd Authenticationnegotiateaction#domainuserpasswd}
  */
  readonly domainuserpasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#id Authenticationnegotiateaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#keytab Authenticationnegotiateaction#keytab}
  */
  readonly keytab?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#name Authenticationnegotiateaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#ntlmpath Authenticationnegotiateaction#ntlmpath}
  */
  readonly ntlmpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#ou Authenticationnegotiateaction#ou}
  */
  readonly ou?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction citrixadc_authenticationnegotiateaction}
*/
export class Authenticationnegotiateaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationnegotiateaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationnegotiateaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationnegotiateaction to import
  * @param importFromId The id of the existing Authenticationnegotiateaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationnegotiateaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationnegotiateaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/authenticationnegotiateaction citrixadc_authenticationnegotiateaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationnegotiateactionConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationnegotiateactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationnegotiateaction',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultauthenticationgroup = config.defaultauthenticationgroup;
    this._domain = config.domain;
    this._domainuser = config.domainuser;
    this._domainuserpasswd = config.domainuserpasswd;
    this._id = config.id;
    this._keytab = config.keytab;
    this._name = config.name;
    this._ntlmpath = config.ntlmpath;
    this._ou = config.ou;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultauthenticationgroup - computed: true, optional: true, required: false
  private _defaultauthenticationgroup?: string; 
  public get defaultauthenticationgroup() {
    return this.getStringAttribute('defaultauthenticationgroup');
  }
  public set defaultauthenticationgroup(value: string) {
    this._defaultauthenticationgroup = value;
  }
  public resetDefaultauthenticationgroup() {
    this._defaultauthenticationgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthenticationgroupInput() {
    return this._defaultauthenticationgroup;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domainuser - computed: true, optional: true, required: false
  private _domainuser?: string; 
  public get domainuser() {
    return this.getStringAttribute('domainuser');
  }
  public set domainuser(value: string) {
    this._domainuser = value;
  }
  public resetDomainuser() {
    this._domainuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainuserInput() {
    return this._domainuser;
  }

  // domainuserpasswd - computed: true, optional: true, required: false
  private _domainuserpasswd?: string; 
  public get domainuserpasswd() {
    return this.getStringAttribute('domainuserpasswd');
  }
  public set domainuserpasswd(value: string) {
    this._domainuserpasswd = value;
  }
  public resetDomainuserpasswd() {
    this._domainuserpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainuserpasswdInput() {
    return this._domainuserpasswd;
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

  // ntlmpath - computed: true, optional: true, required: false
  private _ntlmpath?: string; 
  public get ntlmpath() {
    return this.getStringAttribute('ntlmpath');
  }
  public set ntlmpath(value: string) {
    this._ntlmpath = value;
  }
  public resetNtlmpath() {
    this._ntlmpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmpathInput() {
    return this._ntlmpath;
  }

  // ou - computed: true, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultauthenticationgroup: cdktf.stringToTerraform(this._defaultauthenticationgroup),
      domain: cdktf.stringToTerraform(this._domain),
      domainuser: cdktf.stringToTerraform(this._domainuser),
      domainuserpasswd: cdktf.stringToTerraform(this._domainuserpasswd),
      id: cdktf.stringToTerraform(this._id),
      keytab: cdktf.stringToTerraform(this._keytab),
      name: cdktf.stringToTerraform(this._name),
      ntlmpath: cdktf.stringToTerraform(this._ntlmpath),
      ou: cdktf.stringToTerraform(this._ou),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultauthenticationgroup: {
        value: cdktf.stringToHclTerraform(this._defaultauthenticationgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domainuser: {
        value: cdktf.stringToHclTerraform(this._domainuser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domainuserpasswd: {
        value: cdktf.stringToHclTerraform(this._domainuserpasswd),
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
      keytab: {
        value: cdktf.stringToHclTerraform(this._keytab),
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
      ntlmpath: {
        value: cdktf.stringToHclTerraform(this._ntlmpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
