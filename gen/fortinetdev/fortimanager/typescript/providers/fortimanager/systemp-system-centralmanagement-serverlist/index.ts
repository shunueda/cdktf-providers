// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempSystemCentralmanagementServerlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#addr_type SystempSystemCentralmanagementServerlist#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#adom SystempSystemCentralmanagementServerlist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#devprof SystempSystemCentralmanagementServerlist#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#fosid SystempSystemCentralmanagementServerlist#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#fqdn SystempSystemCentralmanagementServerlist#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#id SystempSystemCentralmanagementServerlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#scopetype SystempSystemCentralmanagementServerlist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#server_address SystempSystemCentralmanagementServerlist#server_address}
  */
  readonly serverAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#server_address6 SystempSystemCentralmanagementServerlist#server_address6}
  */
  readonly serverAddress6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#server_type SystempSystemCentralmanagementServerlist#server_type}
  */
  readonly serverType?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist fortimanager_systemp_system_centralmanagement_serverlist}
*/
export class SystempSystemCentralmanagementServerlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_system_centralmanagement_serverlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempSystemCentralmanagementServerlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempSystemCentralmanagementServerlist to import
  * @param importFromId The id of the existing SystempSystemCentralmanagementServerlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempSystemCentralmanagementServerlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_system_centralmanagement_serverlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_system_centralmanagement_serverlist fortimanager_systemp_system_centralmanagement_serverlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempSystemCentralmanagementServerlistConfig
  */
  public constructor(scope: Construct, id: string, config: SystempSystemCentralmanagementServerlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_system_centralmanagement_serverlist',
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
    this._addrType = config.addrType;
    this._adom = config.adom;
    this._devprof = config.devprof;
    this._fosid = config.fosid;
    this._fqdn = config.fqdn;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._serverAddress = config.serverAddress;
    this._serverAddress6 = config.serverAddress6;
    this._serverType = config.serverType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
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

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // server_address - computed: true, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // server_address6 - computed: true, optional: true, required: false
  private _serverAddress6?: string; 
  public get serverAddress6() {
    return this.getStringAttribute('server_address6');
  }
  public set serverAddress6(value: string) {
    this._serverAddress6 = value;
  }
  public resetServerAddress6() {
    this._serverAddress6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddress6Input() {
    return this._serverAddress6;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string[]; 
  public get serverType() {
    return cdktf.Fn.tolist(this.getListAttribute('server_type'));
  }
  public set serverType(value: string[]) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      adom: cdktf.stringToTerraform(this._adom),
      devprof: cdktf.stringToTerraform(this._devprof),
      fosid: cdktf.numberToTerraform(this._fosid),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server_address: cdktf.stringToTerraform(this._serverAddress),
      server_address6: cdktf.stringToTerraform(this._serverAddress6),
      server_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
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
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_address: {
        value: cdktf.stringToHclTerraform(this._serverAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_address6: {
        value: cdktf.stringToHclTerraform(this._serverAddress6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
