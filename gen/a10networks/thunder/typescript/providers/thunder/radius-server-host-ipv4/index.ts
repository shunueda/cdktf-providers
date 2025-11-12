// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusServerHostIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#id RadiusServerHostIpv4#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV4 address of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#ipv4_addr RadiusServerHostIpv4#ipv4_addr}
  */
  readonly ipv4Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#uuid RadiusServerHostIpv4#uuid}
  */
  readonly uuid?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#secret RadiusServerHostIpv4#secret}
  */
  readonly secret?: RadiusServerHostIpv4Secret;
}
export interface RadiusServerHostIpv4SecretPortCfg {
  /**
  * Specify the RADIUS server's accounting port (default 1813)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#acct_port RadiusServerHostIpv4#acct_port}
  */
  readonly acctPort?: number;
  /**
  * Specify the RADIUS server's authentication port (default 1812)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#auth_port RadiusServerHostIpv4#auth_port}
  */
  readonly authPort?: number;
  /**
  * Specify the maximum times allowed for resending an request to the radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#retransmit RadiusServerHostIpv4#retransmit}
  */
  readonly retransmit?: number;
  /**
  * Specify the maximum time allowed for waiting for a response from a radius server (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#timeout RadiusServerHostIpv4#timeout}
  */
  readonly timeout?: number;
}

export function radiusServerHostIpv4SecretPortCfgToTerraform(struct?: RadiusServerHostIpv4SecretPortCfgOutputReference | RadiusServerHostIpv4SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acct_port: cdktf.numberToTerraform(struct!.acctPort),
    auth_port: cdktf.numberToTerraform(struct!.authPort),
    retransmit: cdktf.numberToTerraform(struct!.retransmit),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function radiusServerHostIpv4SecretPortCfgToHclTerraform(struct?: RadiusServerHostIpv4SecretPortCfgOutputReference | RadiusServerHostIpv4SecretPortCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acct_port: {
      value: cdktf.numberToHclTerraform(struct!.acctPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_port: {
      value: cdktf.numberToHclTerraform(struct!.authPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit: {
      value: cdktf.numberToHclTerraform(struct!.retransmit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv4SecretPortCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv4SecretPortCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acctPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.acctPort = this._acctPort;
    }
    if (this._authPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPort = this._authPort;
    }
    if (this._retransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmit = this._retransmit;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv4SecretPortCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acctPort = undefined;
      this._authPort = undefined;
      this._retransmit = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acctPort = value.acctPort;
      this._authPort = value.authPort;
      this._retransmit = value.retransmit;
      this._timeout = value.timeout;
    }
  }

  // acct_port - computed: false, optional: true, required: false
  private _acctPort?: number; 
  public get acctPort() {
    return this.getNumberAttribute('acct_port');
  }
  public set acctPort(value: number) {
    this._acctPort = value;
  }
  public resetAcctPort() {
    this._acctPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acctPortInput() {
    return this._acctPort;
  }

  // auth_port - computed: false, optional: true, required: false
  private _authPort?: number; 
  public get authPort() {
    return this.getNumberAttribute('auth_port');
  }
  public set authPort(value: number) {
    this._authPort = value;
  }
  public resetAuthPort() {
    this._authPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortInput() {
    return this._authPort;
  }

  // retransmit - computed: false, optional: true, required: false
  private _retransmit?: number; 
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }
  public set retransmit(value: number) {
    this._retransmit = value;
  }
  public resetRetransmit() {
    this._retransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitInput() {
    return this._retransmit;
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
}
export interface RadiusServerHostIpv4Secret {
  /**
  * The RADIUS server's secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#secret_value RadiusServerHostIpv4#secret_value}
  */
  readonly secretValue?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#port_cfg RadiusServerHostIpv4#port_cfg}
  */
  readonly portCfg?: RadiusServerHostIpv4SecretPortCfg;
}

export function radiusServerHostIpv4SecretToTerraform(struct?: RadiusServerHostIpv4SecretOutputReference | RadiusServerHostIpv4Secret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    port_cfg: radiusServerHostIpv4SecretPortCfgToTerraform(struct!.portCfg),
  }
}


export function radiusServerHostIpv4SecretToHclTerraform(struct?: RadiusServerHostIpv4SecretOutputReference | RadiusServerHostIpv4Secret): any {
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
    port_cfg: {
      value: radiusServerHostIpv4SecretPortCfgToHclTerraform(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RadiusServerHostIpv4SecretPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RadiusServerHostIpv4SecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RadiusServerHostIpv4Secret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RadiusServerHostIpv4Secret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretValue = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretValue = value.secretValue;
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

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new RadiusServerHostIpv4SecretPortCfgOutputReference(this, "port_cfg");
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: RadiusServerHostIpv4SecretPortCfg) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4 thunder_radius_server_host_ipv4}
*/
export class RadiusServerHostIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_radius_server_host_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RadiusServerHostIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RadiusServerHostIpv4 to import
  * @param importFromId The id of the existing RadiusServerHostIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RadiusServerHostIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_radius_server_host_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/radius_server_host_ipv4 thunder_radius_server_host_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusServerHostIpv4Config
  */
  public constructor(scope: Construct, id: string, config: RadiusServerHostIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_radius_server_host_ipv4',
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
  private _secret = new RadiusServerHostIpv4SecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: RadiusServerHostIpv4Secret) {
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
      secret: radiusServerHostIpv4SecretToTerraform(this._secret.internalValue),
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
        value: radiusServerHostIpv4SecretToHclTerraform(this._secret.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RadiusServerHostIpv4SecretList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
