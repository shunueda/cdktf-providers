// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbvserverDomainBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#backupip GslbvserverDomainBinding#backupip}
  */
  readonly backupip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#backupipflag GslbvserverDomainBinding#backupipflag}
  */
  readonly backupipflag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#cookiedomain GslbvserverDomainBinding#cookiedomain}
  */
  readonly cookiedomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#cookiedomainflag GslbvserverDomainBinding#cookiedomainflag}
  */
  readonly cookiedomainflag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#cookietimeout GslbvserverDomainBinding#cookietimeout}
  */
  readonly cookietimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#domainname GslbvserverDomainBinding#domainname}
  */
  readonly domainname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#id GslbvserverDomainBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#name GslbvserverDomainBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#sitedomainttl GslbvserverDomainBinding#sitedomainttl}
  */
  readonly sitedomainttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#ttl GslbvserverDomainBinding#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding citrixadc_gslbvserver_domain_binding}
*/
export class GslbvserverDomainBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbvserver_domain_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbvserverDomainBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbvserverDomainBinding to import
  * @param importFromId The id of the existing GslbvserverDomainBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbvserverDomainBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbvserver_domain_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbvserver_domain_binding citrixadc_gslbvserver_domain_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbvserverDomainBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbvserverDomainBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbvserver_domain_binding',
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
    this._backupip = config.backupip;
    this._backupipflag = config.backupipflag;
    this._cookiedomain = config.cookiedomain;
    this._cookiedomainflag = config.cookiedomainflag;
    this._cookietimeout = config.cookietimeout;
    this._domainname = config.domainname;
    this._id = config.id;
    this._name = config.name;
    this._sitedomainttl = config.sitedomainttl;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backupip - computed: true, optional: true, required: false
  private _backupip?: string; 
  public get backupip() {
    return this.getStringAttribute('backupip');
  }
  public set backupip(value: string) {
    this._backupip = value;
  }
  public resetBackupip() {
    this._backupip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupipInput() {
    return this._backupip;
  }

  // backupipflag - computed: true, optional: true, required: false
  private _backupipflag?: boolean | cdktf.IResolvable; 
  public get backupipflag() {
    return this.getBooleanAttribute('backupipflag');
  }
  public set backupipflag(value: boolean | cdktf.IResolvable) {
    this._backupipflag = value;
  }
  public resetBackupipflag() {
    this._backupipflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupipflagInput() {
    return this._backupipflag;
  }

  // cookiedomain - computed: true, optional: true, required: false
  private _cookiedomain?: string; 
  public get cookiedomain() {
    return this.getStringAttribute('cookiedomain');
  }
  public set cookiedomain(value: string) {
    this._cookiedomain = value;
  }
  public resetCookiedomain() {
    this._cookiedomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainInput() {
    return this._cookiedomain;
  }

  // cookiedomainflag - computed: true, optional: true, required: false
  private _cookiedomainflag?: boolean | cdktf.IResolvable; 
  public get cookiedomainflag() {
    return this.getBooleanAttribute('cookiedomainflag');
  }
  public set cookiedomainflag(value: boolean | cdktf.IResolvable) {
    this._cookiedomainflag = value;
  }
  public resetCookiedomainflag() {
    this._cookiedomainflag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiedomainflagInput() {
    return this._cookiedomainflag;
  }

  // cookietimeout - computed: true, optional: true, required: false
  private _cookietimeout?: number; 
  public get cookietimeout() {
    return this.getNumberAttribute('cookietimeout');
  }
  public set cookietimeout(value: number) {
    this._cookietimeout = value;
  }
  public resetCookietimeout() {
    this._cookietimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookietimeoutInput() {
    return this._cookietimeout;
  }

  // domainname - computed: false, optional: false, required: true
  private _domainname?: string; 
  public get domainname() {
    return this.getStringAttribute('domainname');
  }
  public set domainname(value: string) {
    this._domainname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainnameInput() {
    return this._domainname;
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

  // sitedomainttl - computed: true, optional: true, required: false
  private _sitedomainttl?: number; 
  public get sitedomainttl() {
    return this.getNumberAttribute('sitedomainttl');
  }
  public set sitedomainttl(value: number) {
    this._sitedomainttl = value;
  }
  public resetSitedomainttl() {
    this._sitedomainttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitedomainttlInput() {
    return this._sitedomainttl;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backupip: cdktf.stringToTerraform(this._backupip),
      backupipflag: cdktf.booleanToTerraform(this._backupipflag),
      cookiedomain: cdktf.stringToTerraform(this._cookiedomain),
      cookiedomainflag: cdktf.booleanToTerraform(this._cookiedomainflag),
      cookietimeout: cdktf.numberToTerraform(this._cookietimeout),
      domainname: cdktf.stringToTerraform(this._domainname),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sitedomainttl: cdktf.numberToTerraform(this._sitedomainttl),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backupip: {
        value: cdktf.stringToHclTerraform(this._backupip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupipflag: {
        value: cdktf.booleanToHclTerraform(this._backupipflag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookiedomain: {
        value: cdktf.stringToHclTerraform(this._cookiedomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiedomainflag: {
        value: cdktf.booleanToHclTerraform(this._cookiedomainflag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookietimeout: {
        value: cdktf.numberToHclTerraform(this._cookietimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domainname: {
        value: cdktf.stringToHclTerraform(this._domainname),
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
      sitedomainttl: {
        value: cdktf.numberToHclTerraform(this._sitedomainttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
