// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowMonitorDestinationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#id NetflowMonitorDestinationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#name NetflowMonitorDestinationA#name}
  */
  readonly name: string;
  /**
  * Service-group for load balancing between multiple collector servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#service_group NetflowMonitorDestinationA#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#uuid NetflowMonitorDestinationA#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#ip_cfg NetflowMonitorDestinationA#ip_cfg}
  */
  readonly ipCfg?: NetflowMonitorDestinationIpCfgA;
  /**
  * ipv6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#ipv6_cfg NetflowMonitorDestinationA#ipv6_cfg}
  */
  readonly ipv6Cfg?: NetflowMonitorDestinationIpv6CfgA;
}
export interface NetflowMonitorDestinationIpCfgA {
  /**
  * IP address of netflow collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#ip NetflowMonitorDestinationA#ip}
  */
  readonly ip?: string;
  /**
  * Port number, default is 9996
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#port4 NetflowMonitorDestinationA#port4}
  */
  readonly port4?: number;
}

export function netflowMonitorDestinationIpCfgAToTerraform(struct?: NetflowMonitorDestinationIpCfgAOutputReference | NetflowMonitorDestinationIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port4: cdktf.numberToTerraform(struct!.port4),
  }
}


export function netflowMonitorDestinationIpCfgAToHclTerraform(struct?: NetflowMonitorDestinationIpCfgAOutputReference | NetflowMonitorDestinationIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port4: {
      value: cdktf.numberToHclTerraform(struct!.port4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDestinationIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDestinationIpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port4 = this._port4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDestinationIpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port4 = value.port4;
    }
  }

  // ip - computed: false, optional: true, required: false
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

  // port4 - computed: false, optional: true, required: false
  private _port4?: number; 
  public get port4() {
    return this.getNumberAttribute('port4');
  }
  public set port4(value: number) {
    this._port4 = value;
  }
  public resetPort4() {
    this._port4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4Input() {
    return this._port4;
  }
}
export interface NetflowMonitorDestinationIpv6CfgA {
  /**
  * IPv6 address of netflow collector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#ipv6 NetflowMonitorDestinationA#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Port number, default is 9996
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#port6 NetflowMonitorDestinationA#port6}
  */
  readonly port6?: number;
}

export function netflowMonitorDestinationIpv6CfgAToTerraform(struct?: NetflowMonitorDestinationIpv6CfgAOutputReference | NetflowMonitorDestinationIpv6CfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    port6: cdktf.numberToTerraform(struct!.port6),
  }
}


export function netflowMonitorDestinationIpv6CfgAToHclTerraform(struct?: NetflowMonitorDestinationIpv6CfgAOutputReference | NetflowMonitorDestinationIpv6CfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port6: {
      value: cdktf.numberToHclTerraform(struct!.port6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowMonitorDestinationIpv6CfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetflowMonitorDestinationIpv6CfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._port6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.port6 = this._port6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetflowMonitorDestinationIpv6CfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6 = undefined;
      this._port6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6 = value.ipv6;
      this._port6 = value.port6;
    }
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // port6 - computed: false, optional: true, required: false
  private _port6?: number; 
  public get port6() {
    return this.getNumberAttribute('port6');
  }
  public set port6(value: number) {
    this._port6 = value;
  }
  public resetPort6() {
    this._port6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port6Input() {
    return this._port6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination thunder_netflow_monitor_destination}
*/
export class NetflowMonitorDestinationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowMonitorDestinationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowMonitorDestinationA to import
  * @param importFromId The id of the existing NetflowMonitorDestinationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowMonitorDestinationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_monitor_destination thunder_netflow_monitor_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowMonitorDestinationAConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowMonitorDestinationAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor_destination',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._serviceGroup = config.serviceGroup;
    this._uuid = config.uuid;
    this._ipCfg.internalValue = config.ipCfg;
    this._ipv6Cfg.internalValue = config.ipv6Cfg;
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

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
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

  // ip_cfg - computed: false, optional: true, required: false
  private _ipCfg = new NetflowMonitorDestinationIpCfgAOutputReference(this, "ip_cfg");
  public get ipCfg() {
    return this._ipCfg;
  }
  public putIpCfg(value: NetflowMonitorDestinationIpCfgA) {
    this._ipCfg.internalValue = value;
  }
  public resetIpCfg() {
    this._ipCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCfgInput() {
    return this._ipCfg.internalValue;
  }

  // ipv6_cfg - computed: false, optional: true, required: false
  private _ipv6Cfg = new NetflowMonitorDestinationIpv6CfgAOutputReference(this, "ipv6_cfg");
  public get ipv6Cfg() {
    return this._ipv6Cfg;
  }
  public putIpv6Cfg(value: NetflowMonitorDestinationIpv6CfgA) {
    this._ipv6Cfg.internalValue = value;
  }
  public resetIpv6Cfg() {
    this._ipv6Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CfgInput() {
    return this._ipv6Cfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_cfg: netflowMonitorDestinationIpCfgAToTerraform(this._ipCfg.internalValue),
      ipv6_cfg: netflowMonitorDestinationIpv6CfgAToTerraform(this._ipv6Cfg.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
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
      ip_cfg: {
        value: netflowMonitorDestinationIpCfgAToHclTerraform(this._ipCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorDestinationIpCfgAList",
      },
      ipv6_cfg: {
        value: netflowMonitorDestinationIpv6CfgAToHclTerraform(this._ipv6Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowMonitorDestinationIpv6CfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
