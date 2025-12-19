// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodTcpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#id HealthMonitorMethodTcpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#maintenance HealthMonitorMethodTcpA#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#maintenance_text HealthMonitorMethodTcpA#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * TCP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#method_tcp HealthMonitorMethodTcpA#method_tcp}
  */
  readonly methodTcp?: number;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#monitor_name HealthMonitorMethodTcpA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Set TCP SYN check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#port_halfopen HealthMonitorMethodTcpA#port_halfopen}
  */
  readonly portHalfopen?: number;
  /**
  * Send a string to server (Specify the string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#port_send HealthMonitorMethodTcpA#port_send}
  */
  readonly portSend?: string;
  /**
  * Specify TCP port (Specify port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#tcp_port HealthMonitorMethodTcpA#tcp_port}
  */
  readonly tcpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#uuid HealthMonitorMethodTcpA#uuid}
  */
  readonly uuid?: string;
  /**
  * port_resp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#port_resp HealthMonitorMethodTcpA#port_resp}
  */
  readonly portResp?: HealthMonitorMethodTcpPortRespA;
}
export interface HealthMonitorMethodTcpPortRespA {
  /**
  * Mark server up if response string contains string (Specify the string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#port_contains HealthMonitorMethodTcpA#port_contains}
  */
  readonly portContains?: string;
}

export function healthMonitorMethodTcpPortRespAToTerraform(struct?: HealthMonitorMethodTcpPortRespAOutputReference | HealthMonitorMethodTcpPortRespA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_contains: cdktf.stringToTerraform(struct!.portContains),
  }
}


export function healthMonitorMethodTcpPortRespAToHclTerraform(struct?: HealthMonitorMethodTcpPortRespAOutputReference | HealthMonitorMethodTcpPortRespA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_contains: {
      value: cdktf.stringToHclTerraform(struct!.portContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodTcpPortRespAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodTcpPortRespA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.portContains = this._portContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodTcpPortRespA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portContains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portContains = value.portContains;
    }
  }

  // port_contains - computed: false, optional: true, required: false
  private _portContains?: string; 
  public get portContains() {
    return this.getStringAttribute('port_contains');
  }
  public set portContains(value: string) {
    this._portContains = value;
  }
  public resetPortContains() {
    this._portContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portContainsInput() {
    return this._portContains;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp thunder_health_monitor_method_tcp}
*/
export class HealthMonitorMethodTcpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodTcpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodTcpA to import
  * @param importFromId The id of the existing HealthMonitorMethodTcpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodTcpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_tcp thunder_health_monitor_method_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodTcpAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodTcpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_tcp',
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
    this._maintenance = config.maintenance;
    this._maintenanceText = config.maintenanceText;
    this._methodTcp = config.methodTcp;
    this._monitorName = config.monitorName;
    this._portHalfopen = config.portHalfopen;
    this._portSend = config.portSend;
    this._tcpPort = config.tcpPort;
    this._uuid = config.uuid;
    this._portResp.internalValue = config.portResp;
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

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: number; 
  public get maintenance() {
    return this.getNumberAttribute('maintenance');
  }
  public set maintenance(value: number) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // maintenance_text - computed: false, optional: true, required: false
  private _maintenanceText?: string; 
  public get maintenanceText() {
    return this.getStringAttribute('maintenance_text');
  }
  public set maintenanceText(value: string) {
    this._maintenanceText = value;
  }
  public resetMaintenanceText() {
    this._maintenanceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextInput() {
    return this._maintenanceText;
  }

  // method_tcp - computed: false, optional: true, required: false
  private _methodTcp?: number; 
  public get methodTcp() {
    return this.getNumberAttribute('method_tcp');
  }
  public set methodTcp(value: number) {
    this._methodTcp = value;
  }
  public resetMethodTcp() {
    this._methodTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTcpInput() {
    return this._methodTcp;
  }

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // port_halfopen - computed: false, optional: true, required: false
  private _portHalfopen?: number; 
  public get portHalfopen() {
    return this.getNumberAttribute('port_halfopen');
  }
  public set portHalfopen(value: number) {
    this._portHalfopen = value;
  }
  public resetPortHalfopen() {
    this._portHalfopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHalfopenInput() {
    return this._portHalfopen;
  }

  // port_send - computed: false, optional: true, required: false
  private _portSend?: string; 
  public get portSend() {
    return this.getStringAttribute('port_send');
  }
  public set portSend(value: string) {
    this._portSend = value;
  }
  public resetPortSend() {
    this._portSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSendInput() {
    return this._portSend;
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

  // port_resp - computed: false, optional: true, required: false
  private _portResp = new HealthMonitorMethodTcpPortRespAOutputReference(this, "port_resp");
  public get portResp() {
    return this._portResp;
  }
  public putPortResp(value: HealthMonitorMethodTcpPortRespA) {
    this._portResp.internalValue = value;
  }
  public resetPortResp() {
    this._portResp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRespInput() {
    return this._portResp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      maintenance: cdktf.numberToTerraform(this._maintenance),
      maintenance_text: cdktf.stringToTerraform(this._maintenanceText),
      method_tcp: cdktf.numberToTerraform(this._methodTcp),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      port_halfopen: cdktf.numberToTerraform(this._portHalfopen),
      port_send: cdktf.stringToTerraform(this._portSend),
      tcp_port: cdktf.numberToTerraform(this._tcpPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      port_resp: healthMonitorMethodTcpPortRespAToTerraform(this._portResp.internalValue),
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
      maintenance: {
        value: cdktf.numberToHclTerraform(this._maintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_text: {
        value: cdktf.stringToHclTerraform(this._maintenanceText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method_tcp: {
        value: cdktf.numberToHclTerraform(this._methodTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_halfopen: {
        value: cdktf.numberToHclTerraform(this._portHalfopen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_send: {
        value: cdktf.stringToHclTerraform(this._portSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port: {
        value: cdktf.numberToHclTerraform(this._tcpPort),
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
      port_resp: {
        value: healthMonitorMethodTcpPortRespAToHclTerraform(this._portResp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodTcpPortRespAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
