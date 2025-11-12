// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwSessionAgingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Idle Timeout time (default 2 seconds) (Second, default 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#icmp_idle_timeout FwSessionAging#icmp_idle_timeout}
  */
  readonly icmpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#id FwSessionAging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle Timeout time(sec), default is 30 (Second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#ip_idle_timeout FwSessionAging#ip_idle_timeout}
  */
  readonly ipIdleTimeout?: number;
  /**
  * session-aging Template (session-aging Template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#name FwSessionAging#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#user_tag FwSessionAging#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#uuid FwSessionAging#uuid}
  */
  readonly uuid?: string;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#tcp FwSessionAging#tcp}
  */
  readonly tcp?: FwSessionAgingTcp;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#udp FwSessionAging#udp}
  */
  readonly udp?: FwSessionAgingUdp;
}
export interface FwSessionAgingTcpPortCfg {
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#force_delete_timeout FwSessionAging#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#force_delete_timeout_100ms FwSessionAging#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#half_close_idle_timeout FwSessionAging#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#half_open_idle_timeout FwSessionAging#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Idle Timeout (sec), default is 600 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#tcp_idle_timeout FwSessionAging#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#tcp_port FwSessionAging#tcp_port}
  */
  readonly tcpPort?: number;
}

export function fwSessionAgingTcpPortCfgToTerraform(struct?: FwSessionAgingTcpPortCfg | cdktf.IResolvable): any {
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


export function fwSessionAgingTcpPortCfgToHclTerraform(struct?: FwSessionAgingTcpPortCfg | cdktf.IResolvable): any {
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

export class FwSessionAgingTcpPortCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwSessionAgingTcpPortCfg | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwSessionAgingTcpPortCfg | cdktf.IResolvable | undefined) {
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

export class FwSessionAgingTcpPortCfgList extends cdktf.ComplexList {
  public internalValue? : FwSessionAgingTcpPortCfg[] | cdktf.IResolvable

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
  public get(index: number): FwSessionAgingTcpPortCfgOutputReference {
    return new FwSessionAgingTcpPortCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwSessionAgingTcp {
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number (second))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#force_delete_timeout FwSessionAging#force_delete_timeout}
  */
  readonly forceDeleteTimeout?: number;
  /**
  * The maximum time that a session can stay in the system before being deleted, default is off (number in 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#force_delete_timeout_100ms FwSessionAging#force_delete_timeout_100ms}
  */
  readonly forceDeleteTimeout100Ms?: number;
  /**
  * TCP Half Close Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#half_close_idle_timeout FwSessionAging#half_close_idle_timeout}
  */
  readonly halfCloseIdleTimeout?: number;
  /**
  * TCP Half Open Idle Timeout (sec), default is off (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#half_open_idle_timeout FwSessionAging#half_open_idle_timeout}
  */
  readonly halfOpenIdleTimeout?: number;
  /**
  * Idle Timeout (sec), default is 600 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#tcp_idle_timeout FwSessionAging#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#uuid FwSessionAging#uuid}
  */
  readonly uuid?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#port_cfg FwSessionAging#port_cfg}
  */
  readonly portCfg?: FwSessionAgingTcpPortCfg[] | cdktf.IResolvable;
}

export function fwSessionAgingTcpToTerraform(struct?: FwSessionAgingTcpOutputReference | FwSessionAgingTcp): any {
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
    uuid: cdktf.stringToTerraform(struct!.uuid),
    port_cfg: cdktf.listMapper(fwSessionAgingTcpPortCfgToTerraform, true)(struct!.portCfg),
  }
}


export function fwSessionAgingTcpToHclTerraform(struct?: FwSessionAgingTcpOutputReference | FwSessionAgingTcp): any {
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_cfg: {
      value: cdktf.listMapperHcl(fwSessionAgingTcpPortCfgToHclTerraform, true)(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwSessionAgingTcpPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwSessionAgingTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwSessionAgingTcp | undefined {
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwSessionAgingTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceDeleteTimeout = undefined;
      this._forceDeleteTimeout100Ms = undefined;
      this._halfCloseIdleTimeout = undefined;
      this._halfOpenIdleTimeout = undefined;
      this._tcpIdleTimeout = undefined;
      this._uuid = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceDeleteTimeout = value.forceDeleteTimeout;
      this._forceDeleteTimeout100Ms = value.forceDeleteTimeout100Ms;
      this._halfCloseIdleTimeout = value.halfCloseIdleTimeout;
      this._halfOpenIdleTimeout = value.halfOpenIdleTimeout;
      this._tcpIdleTimeout = value.tcpIdleTimeout;
      this._uuid = value.uuid;
      this._portCfg.internalValue = value.portCfg;
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
  private _portCfg = new FwSessionAgingTcpPortCfgList(this, "port_cfg", false);
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: FwSessionAgingTcpPortCfg[] | cdktf.IResolvable) {
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
export interface FwSessionAgingUdpPortCfg {
  /**
  * Idle Timeout (sec), default is 120 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#udp_idle_timeout FwSessionAging#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#udp_port FwSessionAging#udp_port}
  */
  readonly udpPort?: number;
}

export function fwSessionAgingUdpPortCfgToTerraform(struct?: FwSessionAgingUdpPortCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_idle_timeout: cdktf.numberToTerraform(struct!.udpIdleTimeout),
    udp_port: cdktf.numberToTerraform(struct!.udpPort),
  }
}


export function fwSessionAgingUdpPortCfgToHclTerraform(struct?: FwSessionAgingUdpPortCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.udpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port: {
      value: cdktf.numberToHclTerraform(struct!.udpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwSessionAgingUdpPortCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwSessionAgingUdpPortCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIdleTimeout = this._udpIdleTimeout;
    }
    if (this._udpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPort = this._udpPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwSessionAgingUdpPortCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._udpIdleTimeout = undefined;
      this._udpPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._udpIdleTimeout = value.udpIdleTimeout;
      this._udpPort = value.udpPort;
    }
  }

  // udp_idle_timeout - computed: false, optional: true, required: false
  private _udpIdleTimeout?: number; 
  public get udpIdleTimeout() {
    return this.getNumberAttribute('udp_idle_timeout');
  }
  public set udpIdleTimeout(value: number) {
    this._udpIdleTimeout = value;
  }
  public resetUdpIdleTimeout() {
    this._udpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutInput() {
    return this._udpIdleTimeout;
  }

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }
}

export class FwSessionAgingUdpPortCfgList extends cdktf.ComplexList {
  public internalValue? : FwSessionAgingUdpPortCfg[] | cdktf.IResolvable

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
  public get(index: number): FwSessionAgingUdpPortCfgOutputReference {
    return new FwSessionAgingUdpPortCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FwSessionAgingUdp {
  /**
  * Idle Timeout (sec), default is 120 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#udp_idle_timeout FwSessionAging#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#uuid FwSessionAging#uuid}
  */
  readonly uuid?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#port_cfg FwSessionAging#port_cfg}
  */
  readonly portCfg?: FwSessionAgingUdpPortCfg[] | cdktf.IResolvable;
}

export function fwSessionAgingUdpToTerraform(struct?: FwSessionAgingUdpOutputReference | FwSessionAgingUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_idle_timeout: cdktf.numberToTerraform(struct!.udpIdleTimeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    port_cfg: cdktf.listMapper(fwSessionAgingUdpPortCfgToTerraform, true)(struct!.portCfg),
  }
}


export function fwSessionAgingUdpToHclTerraform(struct?: FwSessionAgingUdpOutputReference | FwSessionAgingUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.udpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_cfg: {
      value: cdktf.listMapperHcl(fwSessionAgingUdpPortCfgToHclTerraform, true)(struct!.portCfg),
      isBlock: true,
      type: "list",
      storageClassType: "FwSessionAgingUdpPortCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwSessionAgingUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwSessionAgingUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpIdleTimeout = this._udpIdleTimeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._portCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCfg = this._portCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwSessionAgingUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udpIdleTimeout = undefined;
      this._uuid = undefined;
      this._portCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udpIdleTimeout = value.udpIdleTimeout;
      this._uuid = value.uuid;
      this._portCfg.internalValue = value.portCfg;
    }
  }

  // udp_idle_timeout - computed: false, optional: true, required: false
  private _udpIdleTimeout?: number; 
  public get udpIdleTimeout() {
    return this.getNumberAttribute('udp_idle_timeout');
  }
  public set udpIdleTimeout(value: number) {
    this._udpIdleTimeout = value;
  }
  public resetUdpIdleTimeout() {
    this._udpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutInput() {
    return this._udpIdleTimeout;
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
  private _portCfg = new FwSessionAgingUdpPortCfgList(this, "port_cfg", false);
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: FwSessionAgingUdpPortCfg[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging thunder_fw_session_aging}
*/
export class FwSessionAging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_session_aging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwSessionAging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwSessionAging to import
  * @param importFromId The id of the existing FwSessionAging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwSessionAging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_session_aging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/fw_session_aging thunder_fw_session_aging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwSessionAgingConfig
  */
  public constructor(scope: Construct, id: string, config: FwSessionAgingConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_session_aging',
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
    this._icmpIdleTimeout = config.icmpIdleTimeout;
    this._id = config.id;
    this._ipIdleTimeout = config.ipIdleTimeout;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._tcp.internalValue = config.tcp;
    this._udp.internalValue = config.udp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icmp_idle_timeout - computed: false, optional: true, required: false
  private _icmpIdleTimeout?: number; 
  public get icmpIdleTimeout() {
    return this.getNumberAttribute('icmp_idle_timeout');
  }
  public set icmpIdleTimeout(value: number) {
    this._icmpIdleTimeout = value;
  }
  public resetIcmpIdleTimeout() {
    this._icmpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutInput() {
    return this._icmpIdleTimeout;
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

  // ip_idle_timeout - computed: false, optional: true, required: false
  private _ipIdleTimeout?: number; 
  public get ipIdleTimeout() {
    return this.getNumberAttribute('ip_idle_timeout');
  }
  public set ipIdleTimeout(value: number) {
    this._ipIdleTimeout = value;
  }
  public resetIpIdleTimeout() {
    this._ipIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipIdleTimeoutInput() {
    return this._ipIdleTimeout;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // tcp - computed: false, optional: true, required: false
  private _tcp = new FwSessionAgingTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: FwSessionAgingTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new FwSessionAgingUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: FwSessionAgingUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icmp_idle_timeout: cdktf.numberToTerraform(this._icmpIdleTimeout),
      id: cdktf.stringToTerraform(this._id),
      ip_idle_timeout: cdktf.numberToTerraform(this._ipIdleTimeout),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      tcp: fwSessionAgingTcpToTerraform(this._tcp.internalValue),
      udp: fwSessionAgingUdpToTerraform(this._udp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icmp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._icmpIdleTimeout),
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
      ip_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._ipIdleTimeout),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      tcp: {
        value: fwSessionAgingTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwSessionAgingTcpList",
      },
      udp: {
        value: fwSessionAgingUdpToHclTerraform(this._udp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwSessionAgingUdpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
