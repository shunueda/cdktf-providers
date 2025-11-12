// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Create default set of records when creating the domain. `0/1, yes/no, true/false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#createrecords Dnsdomain#createrecords}
  */
  readonly createrecords?: string;
  /**
  * Domain expire TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#expire Dnsdomain#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#id Dnsdomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Domain minimum TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#minimum Dnsdomain#minimum}
  */
  readonly minimum?: number;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#name Dnsdomain#name}
  */
  readonly name: string;
  /**
  * Domain primary nameserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#primarynameserver Dnsdomain#primarynameserver}
  */
  readonly primarynameserver?: string;
  /**
  * Domain refresh TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#refresh Dnsdomain#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#responsibleperson Dnsdomain#responsibleperson}
  */
  readonly responsibleperson?: string;
  /**
  * Domain retry TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#retry Dnsdomain#retry}
  */
  readonly retry?: number;
  /**
  * Domain default TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#ttl Dnsdomain#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain glesys_dnsdomain}
*/
export class Dnsdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_dnsdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsdomain to import
  * @param importFromId The id of the existing Dnsdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_dnsdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/dnsdomain glesys_dnsdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsdomainConfig
  */
  public constructor(scope: Construct, id: string, config: DnsdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_dnsdomain',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createrecords = config.createrecords;
    this._expire = config.expire;
    this._id = config.id;
    this._minimum = config.minimum;
    this._name = config.name;
    this._primarynameserver = config.primarynameserver;
    this._refresh = config.refresh;
    this._responsibleperson = config.responsibleperson;
    this._retry = config.retry;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // createrecords - computed: false, optional: true, required: false
  private _createrecords?: string; 
  public get createrecords() {
    return this.getStringAttribute('createrecords');
  }
  public set createrecords(value: string) {
    this._createrecords = value;
  }
  public resetCreaterecords() {
    this._createrecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createrecordsInput() {
    return this._createrecords;
  }

  // createtime - computed: true, optional: false, required: false
  public get createtime() {
    return this.getStringAttribute('createtime');
  }

  // displayname - computed: true, optional: false, required: false
  public get displayname() {
    return this.getStringAttribute('displayname');
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
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

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

  // primarynameserver - computed: true, optional: true, required: false
  private _primarynameserver?: string; 
  public get primarynameserver() {
    return this.getStringAttribute('primarynameserver');
  }
  public set primarynameserver(value: string) {
    this._primarynameserver = value;
  }
  public resetPrimarynameserver() {
    this._primarynameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primarynameserverInput() {
    return this._primarynameserver;
  }

  // recordcount - computed: true, optional: false, required: false
  public get recordcount() {
    return this.getNumberAttribute('recordcount');
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // registrarinfo_autorenew - computed: true, optional: false, required: false
  public get registrarinfoAutorenew() {
    return this.getStringAttribute('registrarinfo_autorenew');
  }

  // registrarinfo_expire - computed: true, optional: false, required: false
  public get registrarinfoExpire() {
    return this.getStringAttribute('registrarinfo_expire');
  }

  // registrarinfo_invoicenumber - computed: true, optional: false, required: false
  public get registrarinfoInvoicenumber() {
    return this.getStringAttribute('registrarinfo_invoicenumber');
  }

  // registrarinfo_state - computed: true, optional: false, required: false
  public get registrarinfoState() {
    return this.getStringAttribute('registrarinfo_state');
  }

  // registrarinfo_statedescr - computed: true, optional: false, required: false
  public get registrarinfoStatedescr() {
    return this.getStringAttribute('registrarinfo_statedescr');
  }

  // registrarinfo_tld - computed: true, optional: false, required: false
  public get registrarinfoTld() {
    return this.getStringAttribute('registrarinfo_tld');
  }

  // responsibleperson - computed: true, optional: true, required: false
  private _responsibleperson?: string; 
  public get responsibleperson() {
    return this.getStringAttribute('responsibleperson');
  }
  public set responsibleperson(value: string) {
    this._responsibleperson = value;
  }
  public resetResponsibleperson() {
    this._responsibleperson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsiblepersonInput() {
    return this._responsibleperson;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
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

  // usingglesysnameserver - computed: true, optional: false, required: false
  public get usingglesysnameserver() {
    return this.getStringAttribute('usingglesysnameserver');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      createrecords: cdktf.stringToTerraform(this._createrecords),
      expire: cdktf.numberToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      minimum: cdktf.numberToTerraform(this._minimum),
      name: cdktf.stringToTerraform(this._name),
      primarynameserver: cdktf.stringToTerraform(this._primarynameserver),
      refresh: cdktf.numberToTerraform(this._refresh),
      responsibleperson: cdktf.stringToTerraform(this._responsibleperson),
      retry: cdktf.numberToTerraform(this._retry),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      createrecords: {
        value: cdktf.stringToHclTerraform(this._createrecords),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum: {
        value: cdktf.numberToHclTerraform(this._minimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primarynameserver: {
        value: cdktf.stringToHclTerraform(this._primarynameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      responsibleperson: {
        value: cdktf.stringToHclTerraform(this._responsibleperson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
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
