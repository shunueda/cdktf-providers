// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLoadBalanceServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#address_type GlobalLoadBalanceServers#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#auth_type GlobalLoadBalanceServers#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#auto_sync GlobalLoadBalanceServers#auto_sync}
  */
  readonly autoSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#cert GlobalLoadBalanceServers#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#data_center GlobalLoadBalanceServers#data_center}
  */
  readonly dataCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#health_check_ctrl GlobalLoadBalanceServers#health_check_ctrl}
  */
  readonly healthCheckCtrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#health_check_list GlobalLoadBalanceServers#health_check_list}
  */
  readonly healthCheckList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#health_check_relationship GlobalLoadBalanceServers#health_check_relationship}
  */
  readonly healthCheckRelationship?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#id GlobalLoadBalanceServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#ip GlobalLoadBalanceServers#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#ip6 GlobalLoadBalanceServers#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#mkey GlobalLoadBalanceServers#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#password GlobalLoadBalanceServers#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#port GlobalLoadBalanceServers#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#sdn_connector GlobalLoadBalanceServers#sdn_connector}
  */
  readonly sdnConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#server_type GlobalLoadBalanceServers#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#use_sdn_private_ip GlobalLoadBalanceServers#use_sdn_private_ip}
  */
  readonly useSdnPrivateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#user_defined_cert GlobalLoadBalanceServers#user_defined_cert}
  */
  readonly userDefinedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#vdom GlobalLoadBalanceServers#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers fortiadc_global_load_balance_servers}
*/
export class GlobalLoadBalanceServers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_load_balance_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLoadBalanceServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLoadBalanceServers to import
  * @param importFromId The id of the existing GlobalLoadBalanceServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLoadBalanceServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_load_balance_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers fortiadc_global_load_balance_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLoadBalanceServersConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLoadBalanceServersConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_load_balance_servers',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressType = config.addressType;
    this._authType = config.authType;
    this._autoSync = config.autoSync;
    this._cert = config.cert;
    this._dataCenter = config.dataCenter;
    this._healthCheckCtrl = config.healthCheckCtrl;
    this._healthCheckList = config.healthCheckList;
    this._healthCheckRelationship = config.healthCheckRelationship;
    this._id = config.id;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._mkey = config.mkey;
    this._password = config.password;
    this._port = config.port;
    this._sdnConnector = config.sdnConnector;
    this._serverType = config.serverType;
    this._useSdnPrivateIp = config.useSdnPrivateIp;
    this._userDefinedCert = config.userDefinedCert;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auto_sync - computed: true, optional: true, required: false
  private _autoSync?: string; 
  public get autoSync() {
    return this.getStringAttribute('auto_sync');
  }
  public set autoSync(value: string) {
    this._autoSync = value;
  }
  public resetAutoSync() {
    this._autoSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncInput() {
    return this._autoSync;
  }

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // data_center - computed: true, optional: true, required: false
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  public resetDataCenter() {
    this._dataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // health_check_ctrl - computed: true, optional: true, required: false
  private _healthCheckCtrl?: string; 
  public get healthCheckCtrl() {
    return this.getStringAttribute('health_check_ctrl');
  }
  public set healthCheckCtrl(value: string) {
    this._healthCheckCtrl = value;
  }
  public resetHealthCheckCtrl() {
    this._healthCheckCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCtrlInput() {
    return this._healthCheckCtrl;
  }

  // health_check_list - computed: true, optional: true, required: false
  private _healthCheckList?: string; 
  public get healthCheckList() {
    return this.getStringAttribute('health_check_list');
  }
  public set healthCheckList(value: string) {
    this._healthCheckList = value;
  }
  public resetHealthCheckList() {
    this._healthCheckList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckListInput() {
    return this._healthCheckList;
  }

  // health_check_relationship - computed: true, optional: true, required: false
  private _healthCheckRelationship?: string; 
  public get healthCheckRelationship() {
    return this.getStringAttribute('health_check_relationship');
  }
  public set healthCheckRelationship(value: string) {
    this._healthCheckRelationship = value;
  }
  public resetHealthCheckRelationship() {
    this._healthCheckRelationship = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckRelationshipInput() {
    return this._healthCheckRelationship;
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

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sdn_connector - computed: true, optional: true, required: false
  private _sdnConnector?: string; 
  public get sdnConnector() {
    return this.getStringAttribute('sdn_connector');
  }
  public set sdnConnector(value: string) {
    this._sdnConnector = value;
  }
  public resetSdnConnector() {
    this._sdnConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnConnectorInput() {
    return this._sdnConnector;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // use_sdn_private_ip - computed: true, optional: true, required: false
  private _useSdnPrivateIp?: string; 
  public get useSdnPrivateIp() {
    return this.getStringAttribute('use_sdn_private_ip');
  }
  public set useSdnPrivateIp(value: string) {
    this._useSdnPrivateIp = value;
  }
  public resetUseSdnPrivateIp() {
    this._useSdnPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSdnPrivateIpInput() {
    return this._useSdnPrivateIp;
  }

  // user_defined_cert - computed: true, optional: true, required: false
  private _userDefinedCert?: string; 
  public get userDefinedCert() {
    return this.getStringAttribute('user_defined_cert');
  }
  public set userDefinedCert(value: string) {
    this._userDefinedCert = value;
  }
  public resetUserDefinedCert() {
    this._userDefinedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedCertInput() {
    return this._userDefinedCert;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
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
      address_type: cdktf.stringToTerraform(this._addressType),
      auth_type: cdktf.stringToTerraform(this._authType),
      auto_sync: cdktf.stringToTerraform(this._autoSync),
      cert: cdktf.stringToTerraform(this._cert),
      data_center: cdktf.stringToTerraform(this._dataCenter),
      health_check_ctrl: cdktf.stringToTerraform(this._healthCheckCtrl),
      health_check_list: cdktf.stringToTerraform(this._healthCheckList),
      health_check_relationship: cdktf.stringToTerraform(this._healthCheckRelationship),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      mkey: cdktf.stringToTerraform(this._mkey),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      sdn_connector: cdktf.stringToTerraform(this._sdnConnector),
      server_type: cdktf.stringToTerraform(this._serverType),
      use_sdn_private_ip: cdktf.stringToTerraform(this._useSdnPrivateIp),
      user_defined_cert: cdktf.stringToTerraform(this._userDefinedCert),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_sync: {
        value: cdktf.stringToHclTerraform(this._autoSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.stringToHclTerraform(this._dataCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_ctrl: {
        value: cdktf.stringToHclTerraform(this._healthCheckCtrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_list: {
        value: cdktf.stringToHclTerraform(this._healthCheckList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_relationship: {
        value: cdktf.stringToHclTerraform(this._healthCheckRelationship),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
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
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_connector: {
        value: cdktf.stringToHclTerraform(this._sdnConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sdn_private_ip: {
        value: cdktf.stringToHclTerraform(this._useSdnPrivateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_cert: {
        value: cdktf.stringToHclTerraform(this._userDefinedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
