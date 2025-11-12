// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicegroupLbmonitorBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#customserverid ServicegroupLbmonitorBinding#customserverid}
  */
  readonly customserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#dbsttl ServicegroupLbmonitorBinding#dbsttl}
  */
  readonly dbsttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#hashid ServicegroupLbmonitorBinding#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#id ServicegroupLbmonitorBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#monitorname ServicegroupLbmonitorBinding#monitorname}
  */
  readonly monitorname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#monstate ServicegroupLbmonitorBinding#monstate}
  */
  readonly monstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#nameserver ServicegroupLbmonitorBinding#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#passive ServicegroupLbmonitorBinding#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#port ServicegroupLbmonitorBinding#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#serverid ServicegroupLbmonitorBinding#serverid}
  */
  readonly serverid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#servicegroupname ServicegroupLbmonitorBinding#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#state ServicegroupLbmonitorBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#weight ServicegroupLbmonitorBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding citrixadc_servicegroup_lbmonitor_binding}
*/
export class ServicegroupLbmonitorBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_servicegroup_lbmonitor_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicegroupLbmonitorBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicegroupLbmonitorBinding to import
  * @param importFromId The id of the existing ServicegroupLbmonitorBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicegroupLbmonitorBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_servicegroup_lbmonitor_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup_lbmonitor_binding citrixadc_servicegroup_lbmonitor_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicegroupLbmonitorBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ServicegroupLbmonitorBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_servicegroup_lbmonitor_binding',
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
    this._customserverid = config.customserverid;
    this._dbsttl = config.dbsttl;
    this._hashid = config.hashid;
    this._id = config.id;
    this._monitorname = config.monitorname;
    this._monstate = config.monstate;
    this._nameserver = config.nameserver;
    this._passive = config.passive;
    this._port = config.port;
    this._serverid = config.serverid;
    this._servicegroupname = config.servicegroupname;
    this._state = config.state;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customserverid - computed: true, optional: true, required: false
  private _customserverid?: string; 
  public get customserverid() {
    return this.getStringAttribute('customserverid');
  }
  public set customserverid(value: string) {
    this._customserverid = value;
  }
  public resetCustomserverid() {
    this._customserverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customserveridInput() {
    return this._customserverid;
  }

  // dbsttl - computed: true, optional: true, required: false
  private _dbsttl?: number; 
  public get dbsttl() {
    return this.getNumberAttribute('dbsttl');
  }
  public set dbsttl(value: number) {
    this._dbsttl = value;
  }
  public resetDbsttl() {
    this._dbsttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsttlInput() {
    return this._dbsttl;
  }

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

  // monitorname - computed: false, optional: false, required: true
  private _monitorname?: string; 
  public get monitorname() {
    return this.getStringAttribute('monitorname');
  }
  public set monitorname(value: string) {
    this._monitorname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornameInput() {
    return this._monitorname;
  }

  // monstate - computed: true, optional: true, required: false
  private _monstate?: string; 
  public get monstate() {
    return this.getStringAttribute('monstate');
  }
  public set monstate(value: string) {
    this._monstate = value;
  }
  public resetMonstate() {
    this._monstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monstateInput() {
    return this._monstate;
  }

  // nameserver - computed: true, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // serverid - computed: true, optional: true, required: false
  private _serverid?: number; 
  public get serverid() {
    return this.getNumberAttribute('serverid');
  }
  public set serverid(value: number) {
    this._serverid = value;
  }
  public resetServerid() {
    this._serverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveridInput() {
    return this._serverid;
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
      customserverid: cdktf.stringToTerraform(this._customserverid),
      dbsttl: cdktf.numberToTerraform(this._dbsttl),
      hashid: cdktf.numberToTerraform(this._hashid),
      id: cdktf.stringToTerraform(this._id),
      monitorname: cdktf.stringToTerraform(this._monitorname),
      monstate: cdktf.stringToTerraform(this._monstate),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      passive: cdktf.booleanToTerraform(this._passive),
      port: cdktf.numberToTerraform(this._port),
      serverid: cdktf.numberToTerraform(this._serverid),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      state: cdktf.stringToTerraform(this._state),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      customserverid: {
        value: cdktf.stringToHclTerraform(this._customserverid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbsttl: {
        value: cdktf.numberToHclTerraform(this._dbsttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      monitorname: {
        value: cdktf.stringToHclTerraform(this._monitorname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monstate: {
        value: cdktf.stringToHclTerraform(this._monstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver: {
        value: cdktf.stringToHclTerraform(this._nameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serverid: {
        value: cdktf.numberToHclTerraform(this._serverid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
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
