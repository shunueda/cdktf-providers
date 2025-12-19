// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwSessionAgingTcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#force_delete_timeout FwSessionAgingTcpA#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#force_delete_timeout_100ms FwSessionAgingTcpA#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#half_close_idle_timeout FwSessionAgingTcpA#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#half_open_idle_timeout FwSessionAgingTcpA#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#id FwSessionAgingTcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session_aging_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#session_aging_name FwSessionAgingTcpA#session_aging_name}
  */
  readonly sessionAgingName: string;
  /**
  * Idle Timeout (sec), default is 600 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#tcp_idle_timeout FwSessionAgingTcpA#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#uuid FwSessionAgingTcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#port_cfg FwSessionAgingTcpA#port_cfg}
  */
  readonly portCfg?: FwSessionAgingTcpPortCfgA[] | cdktf.IResolvable;
}
export interface FwSessionAgingTcpPortCfgA {
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#force_delete_timeout FwSessionAgingTcpA#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#force_delete_timeout_100ms FwSessionAgingTcpA#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#half_close_idle_timeout FwSessionAgingTcpA#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#half_open_idle_timeout FwSessionAgingTcpA#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Idle Timeout (sec), default is 600 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#tcp_idle_timeout FwSessionAgingTcpA#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#tcp_port FwSessionAgingTcpA#tcp_port}
  */
  readonly tcpPort?: number;
}

export function fwSessionAgingTcpPortCfgAToTerraform(struct?: FwSessionAgingTcpPortCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_delete_timeout: cdktf.numberToTerraform(struct!.forceDeleteTimeout),
    force_delete_timeout_100ms: cdktf.numberToTerraform(struct!.forceDeleteTimeout100Ms),
    half_close_idle_timeout: cdktf.numberToTerraform(struct!.halfCloseIdleTimeout),
    half_open_idle_timeout: cdktf.numberToTerraform(struct!.halfOpenIdleTimeout),
    tcp_idle_timeout: cdktf.numberToTerraform(struct!.tcpIdleTimeout),
    tcp_port: cdktf.numberToTerraform(struct!.tcpPort),
  }
}


export function fwSessionAgingTcpPortCfgAToHclTerraform(struct?: FwSessionAgingTcpPortCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_delete_timeout: {
      value: cdktf.numberToHclTerraform(struct!.forceDeleteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_delete_timeout_100ms: {
      value: cdktf.numberToHclTerraform(struct!.forceDeleteTimeout100Ms),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_close_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.halfCloseIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_open_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.halfOpenIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwSessionAgingTcpPortCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FwSessionAgingTcpPortCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceDeleteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeleteTimeout = this._forceDeleteTimeout;
    }
    if (this._forceDeleteTimeout100Ms !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceDeleteTimeout100Ms = this._forceDeleteTimeout100Ms;
    }
    if (this._halfCloseIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfCloseIdleTimeout = this._halfCloseIdleTimeout;
    }
    if (this._halfOpenIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfOpenIdleTimeout = this._halfOpenIdleTimeout;
    }
    if (this._tcpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpIdleTimeout = this._tcpIdleTimeout;
    }
    if (this._tcpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPort = this._tcpPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwSessionAgingTcpPortCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceDeleteTimeout = undefined;
      this._forceDeleteTimeout100Ms = undefined;
      this._halfCloseIdleTimeout = undefined;
      this._halfOpenIdleTimeout = undefined;
      this._tcpIdleTimeout = undefined;
      this._tcpPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceDeleteTimeout = value.forceDeleteTimeout;
      this._forceDeleteTimeout100Ms = value.forceDeleteTimeout100Ms;
      this._halfCloseIdleTimeout = value.halfCloseIdleTimeout;
      this._halfOpenIdleTimeout = value.halfOpenIdleTimeout;
      this._tcpIdleTimeout = value.tcpIdleTimeout;
      this._tcpPort = value.tcpPort;
    }
  }

  // force_delete_timeout - computed: false, optional: true, required: false
  private _forceDeleteTimeout?: number; 
  public get forceDeleteTimeout() {
    return this.getNumberAttribute('force_delete_timeout');
  }
  public set forceDeleteTimeout(value: number) {
    this._forceDeleteTimeout = value;
  }
  public resetForceDeleteTimeout() {
    this._forceDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeoutInput() {
    return this._forceDeleteTimeout;
  }

  // force_delete_timeout_100ms - computed: false, optional: true, required: false
  private _forceDeleteTimeout100Ms?: number; 
  public get forceDeleteTimeout100Ms() {
    return this.getNumberAttribute('force_delete_timeout_100ms');
  }
  public set forceDeleteTimeout100Ms(value: number) {
    this._forceDeleteTimeout100Ms = value;
  }
  public resetForceDeleteTimeout100Ms() {
    this._forceDeleteTimeout100Ms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeout100MsInput() {
    return this._forceDeleteTimeout100Ms;
  }

  // half_close_idle_timeout - computed: false, optional: true, required: false
  private _halfCloseIdleTimeout?: number; 
  public get halfCloseIdleTimeout() {
    return this.getNumberAttribute('half_close_idle_timeout');
  }
  public set halfCloseIdleTimeout(value: number) {
    this._halfCloseIdleTimeout = value;
  }
  public resetHalfCloseIdleTimeout() {
    this._halfCloseIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseIdleTimeoutInput() {
    return this._halfCloseIdleTimeout;
  }

  // half_open_idle_timeout - computed: false, optional: true, required: false
  private _halfOpenIdleTimeout?: number; 
  public get halfOpenIdleTimeout() {
    return this.getNumberAttribute('half_open_idle_timeout');
  }
  public set halfOpenIdleTimeout(value: number) {
    this._halfOpenIdleTimeout = value;
  }
  public resetHalfOpenIdleTimeout() {
    this._halfOpenIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenIdleTimeoutInput() {
    return this._halfOpenIdleTimeout;
  }

  // tcp_idle_timeout - computed: false, optional: true, required: false
  private _tcpIdleTimeout?: number; 
  public get tcpIdleTimeout() {
    return this.getNumberAttribute('tcp_idle_timeout');
  }
  public set tcpIdleTimeout(value: number) {
    this._tcpIdleTimeout = value;
  }
  public resetTcpIdleTimeout() {
    this._tcpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutInput() {
    return this._tcpIdleTimeout;
  }

  // tcp_port - computed: false, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }
}

export class FwSessionAgingTcpPortCfgAList extends cdktf.ComplexList {
  public internalValue? : FwSessionAgingTcpPortCfgA[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FwSessionAgingTcpPortCfgAOutputReference {
    return new FwSessionAgingTcpPortCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp thunder_fw_session_aging_tcp}
*/
export class FwSessionAgingTcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_session_aging_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwSessionAgingTcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwSessionAgingTcpA to import
  * @param importFromId The id of the existing FwSessionAgingTcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwSessionAgingTcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_session_aging_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_tcp thunder_fw_session_aging_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwSessionAgingTcpAConfig
  */
  public constructor(scope: Construct, id: string, config: FwSessionAgingTcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_session_aging_tcp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceDeleteTimeout = config.forceDeleteTimeout;
    this._forceDeleteTimeout100Ms = config.forceDeleteTimeout100Ms;
    this._halfCloseIdleTimeout = config.halfCloseIdleTimeout;
    this._halfOpenIdleTimeout = config.halfOpenIdleTimeout;
    this._id = config.id;
    this._sessionAgingName = config.sessionAgingName;
    this._tcpIdleTimeout = config.tcpIdleTimeout;
    this._uuid = config.uuid;
    this._portCfg.internalValue = config.portCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_delete_timeout - computed: false, optional: true, required: false
  private _forceDeleteTimeout?: number; 
  public get forceDeleteTimeout() {
    return this.getNumberAttribute('force_delete_timeout');
  }
  public set forceDeleteTimeout(value: number) {
    this._forceDeleteTimeout = value;
  }
  public resetForceDeleteTimeout() {
    this._forceDeleteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeoutInput() {
    return this._forceDeleteTimeout;
  }

  // force_delete_timeout_100ms - computed: false, optional: true, required: false
  private _forceDeleteTimeout100Ms?: number; 
  public get forceDeleteTimeout100Ms() {
    return this.getNumberAttribute('force_delete_timeout_100ms');
  }
  public set forceDeleteTimeout100Ms(value: number) {
    this._forceDeleteTimeout100Ms = value;
  }
  public resetForceDeleteTimeout100Ms() {
    this._forceDeleteTimeout100Ms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteTimeout100MsInput() {
    return this._forceDeleteTimeout100Ms;
  }

  // half_close_idle_timeout - computed: false, optional: true, required: false
  private _halfCloseIdleTimeout?: number; 
  public get halfCloseIdleTimeout() {
    return this.getNumberAttribute('half_close_idle_timeout');
  }
  public set halfCloseIdleTimeout(value: number) {
    this._halfCloseIdleTimeout = value;
  }
  public resetHalfCloseIdleTimeout() {
    this._halfCloseIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseIdleTimeoutInput() {
    return this._halfCloseIdleTimeout;
  }

  // half_open_idle_timeout - computed: false, optional: true, required: false
  private _halfOpenIdleTimeout?: number; 
  public get halfOpenIdleTimeout() {
    return this.getNumberAttribute('half_open_idle_timeout');
  }
  public set halfOpenIdleTimeout(value: number) {
    this._halfOpenIdleTimeout = value;
  }
  public resetHalfOpenIdleTimeout() {
    this._halfOpenIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfOpenIdleTimeoutInput() {
    return this._halfOpenIdleTimeout;
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

  // session_aging_name - computed: false, optional: false, required: true
  private _sessionAgingName?: string; 
  public get sessionAgingName() {
    return this.getStringAttribute('session_aging_name');
  }
  public set sessionAgingName(value: string) {
    this._sessionAgingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAgingNameInput() {
    return this._sessionAgingName;
  }

  // tcp_idle_timeout - computed: false, optional: true, required: false
  private _tcpIdleTimeout?: number; 
  public get tcpIdleTimeout() {
    return this.getNumberAttribute('tcp_idle_timeout');
  }
  public set tcpIdleTimeout(value: number) {
    this._tcpIdleTimeout = value;
  }
  public resetTcpIdleTimeout() {
    this._tcpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutInput() {
    return this._tcpIdleTimeout;
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

  // port_cfg - computed: false, optional: true, required: false
  private _portCfg = new FwSessionAgingTcpPortCfgAList(this, "port_cfg", false);
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: FwSessionAgingTcpPortCfgA[] | cdktf.IResolvable) {
    this._portCfg.internalValue = value;
  }
  public resetPortCfg() {
    this._portCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCfgInput() {
    return this._portCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_delete_timeout: cdktf.numberToTerraform(this._forceDeleteTimeout),
      force_delete_timeout_100ms: cdktf.numberToTerraform(this._forceDeleteTimeout100Ms),
      half_close_idle_timeout: cdktf.numberToTerraform(this._halfCloseIdleTimeout),
      half_open_idle_timeout: cdktf.numberToTerraform(this._halfOpenIdleTimeout),
      id: cdktf.stringToTerraform(this._id),
      session_aging_name: cdktf.stringToTerraform(this._sessionAgingName),
      tcp_idle_timeout: cdktf.numberToTerraform(this._tcpIdleTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      port_cfg: cdktf.listMapper(fwSessionAgingTcpPortCfgAToTerraform, true)(this._portCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_delete_timeout: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_delete_timeout_100ms: {
        value: cdktf.numberToHclTerraform(this._forceDeleteTimeout100Ms),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_close_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfCloseIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_open_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._halfOpenIdleTimeout),
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
      session_aging_name: {
        value: cdktf.stringToHclTerraform(this._sessionAgingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_cfg: {
        value: cdktf.listMapperHcl(fwSessionAgingTcpPortCfgAToHclTerraform, true)(this._portCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwSessionAgingTcpPortCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
