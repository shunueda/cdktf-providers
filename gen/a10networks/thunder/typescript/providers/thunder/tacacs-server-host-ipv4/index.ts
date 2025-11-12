// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsServerHostIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#id TacacsServerHostIpv4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV4 address of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#ipv4_addr TacacsServerHostIpv4#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#uuid TacacsServerHostIpv4#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#secret TacacsServerHostIpv4#secret}
  */
  readonly secret?: TacacsServerHostIpv4Secret;
}
export interface TacacsServerHostIpv4SecretPortCfg {
  /**
  * Specify monitor TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#monitor TacacsServerHostIpv4#monitor}
  */
  readonly monitor?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#password TacacsServerHostIpv4#password}
  */
  readonly password?: number;
  /**
  * The user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#password_value TacacsServerHostIpv4#password_value}
  */
  readonly passwordValue?: string;
  /**
  * Specify the port number used by TACACS+ server.( default port is 49) (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#port TacacsServerHostIpv4#port}
  */
  readonly port?: number;
  /**
  * Specify the maximum time allowed for setting up a connection with the TACACS+ server. (default timeout is 12 seconds) (Maximum time allowed for setting up a connection with the TACACS+ server, in seconds (default 12))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#timeout TacacsServerHostIpv4#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#username TacacsServerHostIpv4#username}
  */
  readonly username?: string;
}

export function tacacsServerHostIpv4SecretPortCfgToTerraform(struct?: TacacsServerHostIpv4SecretPortCfgOutputReference | TacacsServerHostIpv4SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor: cdktf.numberToTerraform(struct!.monitor),
    password: cdktf.numberToTerraform(struct!.password),
    password_value: cdktf.stringToTerraform(struct!.passwordValue),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function tacacsServerHostIpv4SecretPortCfgToHclTerraform(struct?: TacacsServerHostIpv4SecretPortCfgOutputReference | TacacsServerHostIpv4SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor: {
      value: cdktf.numberToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_value: {
      value: cdktf.stringToHclTerraform(struct!.passwordValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv4SecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv4SecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordValue = this._passwordValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv4SecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monitor = undefined;
      this._password = undefined;
      this._passwordValue = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monitor = value.monitor;
      this._password = value.password;
      this._passwordValue = value.passwordValue;
      this._port = value.port;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: number; 
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }
  public set monitor(value: number) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_value - computed: false, optional: true, required: false
  private _passwordValue?: string; 
  public get passwordValue() {
    return this.getStringAttribute('password_value');
  }
  public set passwordValue(value: string) {
    this._passwordValue = value;
  }
  public resetPasswordValue() {
    this._passwordValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValueInput() {
    return this._passwordValue;
  }

  // port - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface TacacsServerHostIpv4Secret {
  /**
  * The TACACS+ server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#secret_value TacacsServerHostIpv4#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_eth TacacsServerHostIpv4#source_eth}
  */
  readonly sourceEth?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_ip TacacsServerHostIpv4#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Logical interface (Lif interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_lif TacacsServerHostIpv4#source_lif}
  */
  readonly sourceLif?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_loopback TacacsServerHostIpv4#source_loopback}
  */
  readonly sourceLoopback?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_trunk TacacsServerHostIpv4#source_trunk}
  */
  readonly sourceTrunk?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#source_ve TacacsServerHostIpv4#source_ve}
  */
  readonly sourceVe?: number;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#port_cfg TacacsServerHostIpv4#port_cfg}
  */
  readonly portCfg?: TacacsServerHostIpv4SecretPortCfg;
}

export function tacacsServerHostIpv4SecretToTerraform(struct?: TacacsServerHostIpv4SecretOutputReference | TacacsServerHostIpv4Secret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    source_eth: cdktf.numberToTerraform(struct!.sourceEth),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_lif: cdktf.numberToTerraform(struct!.sourceLif),
    source_loopback: cdktf.numberToTerraform(struct!.sourceLoopback),
    source_trunk: cdktf.numberToTerraform(struct!.sourceTrunk),
    source_ve: cdktf.numberToTerraform(struct!.sourceVe),
    port_cfg: tacacsServerHostIpv4SecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function tacacsServerHostIpv4SecretToHclTerraform(struct?: TacacsServerHostIpv4SecretOutputReference | TacacsServerHostIpv4Secret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_eth: {
      value: cdktf.numberToHclTerraform(struct!.sourceEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_lif: {
      value: cdktf.numberToHclTerraform(struct!.sourceLif),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_loopback: {
      value: cdktf.numberToHclTerraform(struct!.sourceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_trunk: {
      value: cdktf.numberToHclTerraform(struct!.sourceTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ve: {
      value: cdktf.numberToHclTerraform(struct!.sourceVe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_cfg: {
      value: tacacsServerHostIpv4SecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "TacacsServerHostIpv4SecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TacacsServerHostIpv4SecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TacacsServerHostIpv4Secret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._sourceEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEth = this._sourceEth;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceLif !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLif = this._sourceLif;
    }
    if (this._sourceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLoopback = this._sourceLoopback;
    }
    if (this._sourceTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTrunk = this._sourceTrunk;
    }
    if (this._sourceVe !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceVe = this._sourceVe;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TacacsServerHostIpv4Secret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._sourceEth = undefined;
      this._sourceIp = undefined;
      this._sourceLif = undefined;
      this._sourceLoopback = undefined;
      this._sourceTrunk = undefined;
      this._sourceVe = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
      this._sourceEth = value.sourceEth;
      this._sourceIp = value.sourceIp;
      this._sourceLif = value.sourceLif;
      this._sourceLoopback = value.sourceLoopback;
      this._sourceTrunk = value.sourceTrunk;
      this._sourceVe = value.sourceVe;
      this._portCfg.internalValue = value.portCfg;
    }
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // source_eth - computed: false, optional: true, required: false
  private _sourceEth?: number; 
  public get sourceEth() {
    return this.getNumberAttribute('source_eth');
  }
  public set sourceEth(value: number) {
    this._sourceEth = value;
  }
  public resetSourceEth() {
    this._sourceEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEthInput() {
    return this._sourceEth;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_lif - computed: false, optional: true, required: false
  private _sourceLif?: number; 
  public get sourceLif() {
    return this.getNumberAttribute('source_lif');
  }
  public set sourceLif(value: number) {
    this._sourceLif = value;
  }
  public resetSourceLif() {
    this._sourceLif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLifInput() {
    return this._sourceLif;
  }

  // source_loopback - computed: false, optional: true, required: false
  private _sourceLoopback?: number; 
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }
  public set sourceLoopback(value: number) {
    this._sourceLoopback = value;
  }
  public resetSourceLoopback() {
    this._sourceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLoopbackInput() {
    return this._sourceLoopback;
  }

  // source_trunk - computed: false, optional: true, required: false
  private _sourceTrunk?: number; 
  public get sourceTrunk() {
    return this.getNumberAttribute('source_trunk');
  }
  public set sourceTrunk(value: number) {
    this._sourceTrunk = value;
  }
  public resetSourceTrunk() {
    this._sourceTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTrunkInput() {
    return this._sourceTrunk;
  }

  // source_ve - computed: false, optional: true, required: false
  private _sourceVe?: number; 
  public get sourceVe() {
    return this.getNumberAttribute('source_ve');
  }
  public set sourceVe(value: number) {
    this._sourceVe = value;
  }
  public resetSourceVe() {
    this._sourceVe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVeInput() {
    return this._sourceVe;
  }

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new TacacsServerHostIpv4SecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: TacacsServerHostIpv4SecretPortCfg) {
    this._portCfg.internalValue = value;
  }
  public resetPortCfg() {
    this._portCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCfgInput() {
    return this._portCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4 thunder_tacacs_server_host_ipv4}
*/
export class TacacsServerHostIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tacacs_server_host_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsServerHostIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsServerHostIpv4 to import
  * @param importFromId The id of the existing TacacsServerHostIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsServerHostIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tacacs_server_host_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tacacs_server_host_ipv4 thunder_tacacs_server_host_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsServerHostIpv4Config
  */
  public constructor(scope: Construct, id: string, config: TacacsServerHostIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_tacacs_server_host_ipv4',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipv4Addr = config.ipv4Addr;
    this._uuid = config.uuid;
    this._secret.internalValue = config.secret;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv4_addr - computed: false, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new TacacsServerHostIpv4SecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: TacacsServerHostIpv4Secret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv4_addr: cdktf.stringToTerraform(this._ipv4Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
      secret: tacacsServerHostIpv4SecretToTerraform(this._secret.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: tacacsServerHostIpv4SecretToHclTerraform(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TacacsServerHostIpv4SecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
