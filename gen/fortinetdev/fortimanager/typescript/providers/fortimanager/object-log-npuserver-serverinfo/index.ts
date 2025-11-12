// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectLogNpuserverServerinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#adom ObjectLogNpuserverServerinfo#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#dest_port ObjectLogNpuserverServerinfo#dest_port}
  */
  readonly destPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#fosid ObjectLogNpuserverServerinfo#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#id ObjectLogNpuserverServerinfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#ip_family ObjectLogNpuserverServerinfo#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#ipv4_server ObjectLogNpuserverServerinfo#ipv4_server}
  */
  readonly ipv4Server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#ipv6_server ObjectLogNpuserverServerinfo#ipv6_server}
  */
  readonly ipv6Server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#log_transport ObjectLogNpuserverServerinfo#log_transport}
  */
  readonly logTransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#scopetype ObjectLogNpuserverServerinfo#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#source_port ObjectLogNpuserverServerinfo#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#template_tx_timeout ObjectLogNpuserverServerinfo#template_tx_timeout}
  */
  readonly templateTxTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#vdom ObjectLogNpuserverServerinfo#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo fortimanager_object_log_npuserver_serverinfo}
*/
export class ObjectLogNpuserverServerinfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_log_npuserver_serverinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectLogNpuserverServerinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectLogNpuserverServerinfo to import
  * @param importFromId The id of the existing ObjectLogNpuserverServerinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectLogNpuserverServerinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_log_npuserver_serverinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver_serverinfo fortimanager_object_log_npuserver_serverinfo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectLogNpuserverServerinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectLogNpuserverServerinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_log_npuserver_serverinfo',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._destPort = config.destPort;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ipFamily = config.ipFamily;
    this._ipv4Server = config.ipv4Server;
    this._ipv6Server = config.ipv6Server;
    this._logTransport = config.logTransport;
    this._scopetype = config.scopetype;
    this._sourcePort = config.sourcePort;
    this._templateTxTimeout = config.templateTxTimeout;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
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

  // ip_family - computed: true, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // ipv4_server - computed: true, optional: true, required: false
  private _ipv4Server?: string; 
  public get ipv4Server() {
    return this.getStringAttribute('ipv4_server');
  }
  public set ipv4Server(value: string) {
    this._ipv4Server = value;
  }
  public resetIpv4Server() {
    this._ipv4Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServerInput() {
    return this._ipv4Server;
  }

  // ipv6_server - computed: true, optional: true, required: false
  private _ipv6Server?: string; 
  public get ipv6Server() {
    return this.getStringAttribute('ipv6_server');
  }
  public set ipv6Server(value: string) {
    this._ipv6Server = value;
  }
  public resetIpv6Server() {
    this._ipv6Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServerInput() {
    return this._ipv6Server;
  }

  // log_transport - computed: true, optional: true, required: false
  private _logTransport?: string; 
  public get logTransport() {
    return this.getStringAttribute('log_transport');
  }
  public set logTransport(value: string) {
    this._logTransport = value;
  }
  public resetLogTransport() {
    this._logTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransportInput() {
    return this._logTransport;
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

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // template_tx_timeout - computed: true, optional: true, required: false
  private _templateTxTimeout?: number; 
  public get templateTxTimeout() {
    return this.getNumberAttribute('template_tx_timeout');
  }
  public set templateTxTimeout(value: number) {
    this._templateTxTimeout = value;
  }
  public resetTemplateTxTimeout() {
    this._templateTxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTxTimeoutInput() {
    return this._templateTxTimeout;
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
      adom: cdktf.stringToTerraform(this._adom),
      dest_port: cdktf.numberToTerraform(this._destPort),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ip_family: cdktf.stringToTerraform(this._ipFamily),
      ipv4_server: cdktf.stringToTerraform(this._ipv4Server),
      ipv6_server: cdktf.stringToTerraform(this._ipv6Server),
      log_transport: cdktf.stringToTerraform(this._logTransport),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      template_tx_timeout: cdktf.numberToTerraform(this._templateTxTimeout),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.numberToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      ip_family: {
        value: cdktf.stringToHclTerraform(this._ipFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_server: {
        value: cdktf.stringToHclTerraform(this._ipv4Server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_server: {
        value: cdktf.stringToHclTerraform(this._ipv6Server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_transport: {
        value: cdktf.stringToHclTerraform(this._logTransport),
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
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_tx_timeout: {
        value: cdktf.numberToHclTerraform(this._templateTxTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
