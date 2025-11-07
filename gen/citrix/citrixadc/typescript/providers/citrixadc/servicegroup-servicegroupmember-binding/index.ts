// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicegroupServicegroupmemberBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#customserverid ServicegroupServicegroupmemberBinding#customserverid}
  */
  readonly customserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#dbsttl ServicegroupServicegroupmemberBinding#dbsttl}
  */
  readonly dbsttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#disable_read ServicegroupServicegroupmemberBinding#disable_read}
  */
  readonly disableRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#hashid ServicegroupServicegroupmemberBinding#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#id ServicegroupServicegroupmemberBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#ip ServicegroupServicegroupmemberBinding#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#nameserver ServicegroupServicegroupmemberBinding#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#port ServicegroupServicegroupmemberBinding#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#serverid ServicegroupServicegroupmemberBinding#serverid}
  */
  readonly serverid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#servername ServicegroupServicegroupmemberBinding#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#servicegroupname ServicegroupServicegroupmemberBinding#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#state ServicegroupServicegroupmemberBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#weight ServicegroupServicegroupmemberBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding citrixadc_servicegroup_servicegroupmember_binding}
*/
export class ServicegroupServicegroupmemberBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_servicegroup_servicegroupmember_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicegroupServicegroupmemberBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicegroupServicegroupmemberBinding to import
  * @param importFromId The id of the existing ServicegroupServicegroupmemberBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicegroupServicegroupmemberBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_servicegroup_servicegroupmember_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/servicegroup_servicegroupmember_binding citrixadc_servicegroup_servicegroupmember_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicegroupServicegroupmemberBindingConfig
  */
  public constructor(scope: Construct, id: string, config: ServicegroupServicegroupmemberBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_servicegroup_servicegroupmember_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._disableRead = config.disableRead;
    this._hashid = config.hashid;
    this._id = config.id;
    this._ip = config.ip;
    this._nameserver = config.nameserver;
    this._port = config.port;
    this._serverid = config.serverid;
    this._servername = config.servername;
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

  // disable_read - computed: false, optional: true, required: false
  private _disableRead?: boolean | cdktf.IResolvable; 
  public get disableRead() {
    return this.getBooleanAttribute('disable_read');
  }
  public set disableRead(value: boolean | cdktf.IResolvable) {
    this._disableRead = value;
  }
  public resetDisableRead() {
    this._disableRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReadInput() {
    return this._disableRead;
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
      disable_read: cdktf.booleanToTerraform(this._disableRead),
      hashid: cdktf.numberToTerraform(this._hashid),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      port: cdktf.numberToTerraform(this._port),
      serverid: cdktf.numberToTerraform(this._serverid),
      servername: cdktf.stringToTerraform(this._servername),
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
      disable_read: {
        value: cdktf.booleanToHclTerraform(this._disableRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
