// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbservicegroupGslbservicegroupmemberBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#hashid GslbservicegroupGslbservicegroupmemberBinding#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#id GslbservicegroupGslbservicegroupmemberBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#ip GslbservicegroupGslbservicegroupmemberBinding#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#order GslbservicegroupGslbservicegroupmemberBinding#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#port GslbservicegroupGslbservicegroupmemberBinding#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#publicip GslbservicegroupGslbservicegroupmemberBinding#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#publicport GslbservicegroupGslbservicegroupmemberBinding#publicport}
  */
  readonly publicport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#servername GslbservicegroupGslbservicegroupmemberBinding#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#servicegroupname GslbservicegroupGslbservicegroupmemberBinding#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#siteprefix GslbservicegroupGslbservicegroupmemberBinding#siteprefix}
  */
  readonly siteprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#state GslbservicegroupGslbservicegroupmemberBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#weight GslbservicegroupGslbservicegroupmemberBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding citrixadc_gslbservicegroup_gslbservicegroupmember_binding}
*/
export class GslbservicegroupGslbservicegroupmemberBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbservicegroup_gslbservicegroupmember_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbservicegroupGslbservicegroupmemberBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbservicegroupGslbservicegroupmemberBinding to import
  * @param importFromId The id of the existing GslbservicegroupGslbservicegroupmemberBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbservicegroupGslbservicegroupmemberBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbservicegroup_gslbservicegroupmember_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_gslbservicegroupmember_binding citrixadc_gslbservicegroup_gslbservicegroupmember_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbservicegroupGslbservicegroupmemberBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbservicegroupGslbservicegroupmemberBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbservicegroup_gslbservicegroupmember_binding',
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
    this._hashid = config.hashid;
    this._id = config.id;
    this._ip = config.ip;
    this._order = config.order;
    this._port = config.port;
    this._publicip = config.publicip;
    this._publicport = config.publicport;
    this._servername = config.servername;
    this._servicegroupname = config.servicegroupname;
    this._siteprefix = config.siteprefix;
    this._state = config.state;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hashid - computed: true, optional: true, required: false
  private _hashid?: number; 
  public get hashid() {
    return this.getNumberAttribute('hashid');
  }
  public set hashid(value: number) {
    this._hashid = value;
  }
  public resetHashid() {
    this._hashid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashidInput() {
    return this._hashid;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // publicport - computed: true, optional: true, required: false
  private _publicport?: number; 
  public get publicport() {
    return this.getNumberAttribute('publicport');
  }
  public set publicport(value: number) {
    this._publicport = value;
  }
  public resetPublicport() {
    this._publicport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicportInput() {
    return this._publicport;
  }

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // servicegroupname - computed: false, optional: false, required: true
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupnameInput() {
    return this._servicegroupname;
  }

  // siteprefix - computed: true, optional: true, required: false
  private _siteprefix?: string; 
  public get siteprefix() {
    return this.getStringAttribute('siteprefix');
  }
  public set siteprefix(value: string) {
    this._siteprefix = value;
  }
  public resetSiteprefix() {
    this._siteprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteprefixInput() {
    return this._siteprefix;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hashid: cdktf.numberToTerraform(this._hashid),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      order: cdktf.numberToTerraform(this._order),
      port: cdktf.numberToTerraform(this._port),
      publicip: cdktf.stringToTerraform(this._publicip),
      publicport: cdktf.numberToTerraform(this._publicport),
      servername: cdktf.stringToTerraform(this._servername),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      siteprefix: cdktf.stringToTerraform(this._siteprefix),
      state: cdktf.stringToTerraform(this._state),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hashid: {
        value: cdktf.numberToHclTerraform(this._hashid),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicport: {
        value: cdktf.numberToHclTerraform(this._publicport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteprefix: {
        value: cdktf.stringToHclTerraform(this._siteprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
