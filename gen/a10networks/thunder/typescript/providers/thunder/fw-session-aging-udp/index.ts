// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwSessionAgingUdpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#id FwSessionAgingUdpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Session_aging_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#session_aging_name FwSessionAgingUdpA#session_aging_name}
  */
  readonly sessionAgingName: string;
  /**
  * Idle Timeout (sec), default is 120 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#udp_idle_timeout FwSessionAgingUdpA#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#uuid FwSessionAgingUdpA#uuid}
  */
  readonly uuid?: string;
  /**
  * port_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#port_cfg FwSessionAgingUdpA#port_cfg}
  */
  readonly portCfg?: FwSessionAgingUdpPortCfgA[] | cdktf.IResolvable;
}
export interface FwSessionAgingUdpPortCfgA {
  /**
  * Idle Timeout (sec), default is 120 (number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#udp_idle_timeout FwSessionAgingUdpA#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#udp_port FwSessionAgingUdpA#udp_port}
  */
  readonly udpPort?: number;
}

export function fwSessionAgingUdpPortCfgAToTerraform(struct?: FwSessionAgingUdpPortCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_idle_timeout: cdktf.numberToTerraform(struct!.udpIdleTimeout),
    udp_port: cdktf.numberToTerraform(struct!.udpPort),
  }
}


export function fwSessionAgingUdpPortCfgAToHclTerraform(struct?: FwSessionAgingUdpPortCfgA | cdktf.IResolvable): any {
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

export class FwSessionAgingUdpPortCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwSessionAgingUdpPortCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwSessionAgingUdpPortCfgA | cdktf.IResolvable | undefined) {
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

export class FwSessionAgingUdpPortCfgAList extends cdktf.ComplexList {
  public internalValue? : FwSessionAgingUdpPortCfgA[] | cdktf.IResolvable

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
  public get(index: number): FwSessionAgingUdpPortCfgAOutputReference {
    return new FwSessionAgingUdpPortCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp thunder_fw_session_aging_udp}
*/
export class FwSessionAgingUdpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_session_aging_udp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwSessionAgingUdpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwSessionAgingUdpA to import
  * @param importFromId The id of the existing FwSessionAgingUdpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwSessionAgingUdpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_session_aging_udp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_session_aging_udp thunder_fw_session_aging_udp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwSessionAgingUdpAConfig
  */
  public constructor(scope: Construct, id: string, config: FwSessionAgingUdpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_session_aging_udp',
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
    this._id = config.id;
    this._sessionAgingName = config.sessionAgingName;
    this._udpIdleTimeout = config.udpIdleTimeout;
    this._uuid = config.uuid;
    this._portCfg.internalValue = config.portCfg;
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
  private _portCfg = new FwSessionAgingUdpPortCfgAList(this, "port_cfg", false);
  public get portCfg() {
    return this._portCfg;
  }
  public putPortCfg(value: FwSessionAgingUdpPortCfgA[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      session_aging_name: cdktf.stringToTerraform(this._sessionAgingName),
      udp_idle_timeout: cdktf.numberToTerraform(this._udpIdleTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      port_cfg: cdktf.listMapper(fwSessionAgingUdpPortCfgAToTerraform, true)(this._portCfg.internalValue),
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
      session_aging_name: {
        value: cdktf.stringToHclTerraform(this._sessionAgingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimeout),
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
        value: cdktf.listMapperHcl(fwSessionAgingUdpPortCfgAToHclTerraform, true)(this._portCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwSessionAgingUdpPortCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
