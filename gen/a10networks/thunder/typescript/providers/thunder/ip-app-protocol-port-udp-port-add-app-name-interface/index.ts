// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAppProtocolPortUdpPortAddAppNameInterfaceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * App_name_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#app_name_name IpAppProtocolPortUdpPortAddAppNameInterfaceA#app_name_name}
  */
  readonly appNameName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#id IpAppProtocolPortUdpPortAddAppNameInterfaceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Management Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#management IpAppProtocolPortUdpPortAddAppNameInterfaceA#management}
  */
  readonly management?: number;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#port IpAppProtocolPortUdpPortAddAppNameInterfaceA#port}
  */
  readonly port: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#uuid IpAppProtocolPortUdpPortAddAppNameInterfaceA#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#eth_cfg IpAppProtocolPortUdpPortAddAppNameInterfaceA#eth_cfg}
  */
  readonly ethCfg?: IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#ve_cfg IpAppProtocolPortUdpPortAddAppNameInterfaceA#ve_cfg}
  */
  readonly veCfg?: IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA[] | cdktf.IResolvable;
}
export interface IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA {
  /**
  * Ethernet port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#ethernet_end IpAppProtocolPortUdpPortAddAppNameInterfaceA#ethernet_end}
  */
  readonly ethernetEnd?: number;
  /**
  * Ethernet port (Ethernet Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#ethernet_start IpAppProtocolPortUdpPortAddAppNameInterfaceA#ethernet_start}
  */
  readonly ethernetStart?: number;
}

export function ipAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAToTerraform(struct?: IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_end: cdktf.numberToTerraform(struct!.ethernetEnd),
    ethernet_start: cdktf.numberToTerraform(struct!.ethernetStart),
  }
}


export function ipAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAToHclTerraform(struct?: IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_end: {
      value: cdktf.numberToHclTerraform(struct!.ethernetEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet_start: {
      value: cdktf.numberToHclTerraform(struct!.ethernetStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetEnd = this._ethernetEnd;
    }
    if (this._ethernetStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetStart = this._ethernetStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernetEnd = undefined;
      this._ethernetStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernetEnd = value.ethernetEnd;
      this._ethernetStart = value.ethernetStart;
    }
  }

  // ethernet_end - computed: false, optional: true, required: false
  private _ethernetEnd?: number; 
  public get ethernetEnd() {
    return this.getNumberAttribute('ethernet_end');
  }
  public set ethernetEnd(value: number) {
    this._ethernetEnd = value;
  }
  public resetEthernetEnd() {
    this._ethernetEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetEndInput() {
    return this._ethernetEnd;
  }

  // ethernet_start - computed: false, optional: true, required: false
  private _ethernetStart?: number; 
  public get ethernetStart() {
    return this.getNumberAttribute('ethernet_start');
  }
  public set ethernetStart(value: number) {
    this._ethernetStart = value;
  }
  public resetEthernetStart() {
    this._ethernetStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetStartInput() {
    return this._ethernetStart;
  }
}

export class IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAList extends cdktf.ComplexList {
  public internalValue? : IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA[] | cdktf.IResolvable

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
  public get(index: number): IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAOutputReference {
    return new IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA {
  /**
  * VE port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#ve_end IpAppProtocolPortUdpPortAddAppNameInterfaceA#ve_end}
  */
  readonly veEnd?: number;
  /**
  * VE port (VE Interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#ve_start IpAppProtocolPortUdpPortAddAppNameInterfaceA#ve_start}
  */
  readonly veStart?: number;
}

export function ipAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAToTerraform(struct?: IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve_end: cdktf.numberToTerraform(struct!.veEnd),
    ve_start: cdktf.numberToTerraform(struct!.veStart),
  }
}


export function ipAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAToHclTerraform(struct?: IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve_end: {
      value: cdktf.numberToHclTerraform(struct!.veEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ve_start: {
      value: cdktf.numberToHclTerraform(struct!.veStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._veEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.veEnd = this._veEnd;
    }
    if (this._veStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.veStart = this._veStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._veEnd = undefined;
      this._veStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._veEnd = value.veEnd;
      this._veStart = value.veStart;
    }
  }

  // ve_end - computed: false, optional: true, required: false
  private _veEnd?: number; 
  public get veEnd() {
    return this.getNumberAttribute('ve_end');
  }
  public set veEnd(value: number) {
    this._veEnd = value;
  }
  public resetVeEnd() {
    this._veEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veEndInput() {
    return this._veEnd;
  }

  // ve_start - computed: false, optional: true, required: false
  private _veStart?: number; 
  public get veStart() {
    return this.getNumberAttribute('ve_start');
  }
  public set veStart(value: number) {
    this._veStart = value;
  }
  public resetVeStart() {
    this._veStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veStartInput() {
    return this._veStart;
  }
}

export class IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAList extends cdktf.ComplexList {
  public internalValue? : IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA[] | cdktf.IResolvable

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
  public get(index: number): IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAOutputReference {
    return new IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface thunder_ip_app_protocol_port_udp_port_add_app_name_interface}
*/
export class IpAppProtocolPortUdpPortAddAppNameInterfaceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_app_protocol_port_udp_port_add_app_name_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAppProtocolPortUdpPortAddAppNameInterfaceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAppProtocolPortUdpPortAddAppNameInterfaceA to import
  * @param importFromId The id of the existing IpAppProtocolPortUdpPortAddAppNameInterfaceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAppProtocolPortUdpPortAddAppNameInterfaceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_app_protocol_port_udp_port_add_app_name_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_app_protocol_port_udp_port_add_app_name_interface thunder_ip_app_protocol_port_udp_port_add_app_name_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAppProtocolPortUdpPortAddAppNameInterfaceAConfig
  */
  public constructor(scope: Construct, id: string, config: IpAppProtocolPortUdpPortAddAppNameInterfaceAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_app_protocol_port_udp_port_add_app_name_interface',
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
    this._appNameName = config.appNameName;
    this._id = config.id;
    this._management = config.management;
    this._port = config.port;
    this._uuid = config.uuid;
    this._ethCfg.internalValue = config.ethCfg;
    this._veCfg.internalValue = config.veCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name_name - computed: false, optional: false, required: true
  private _appNameName?: string; 
  public get appNameName() {
    return this.getStringAttribute('app_name_name');
  }
  public set appNameName(value: string) {
    this._appNameName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameNameInput() {
    return this._appNameName;
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

  // management - computed: false, optional: true, required: false
  private _management?: number; 
  public get management() {
    return this.getNumberAttribute('management');
  }
  public set management(value: number) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgA[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgA[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name_name: cdktf.stringToTerraform(this._appNameName),
      id: cdktf.stringToTerraform(this._id),
      management: cdktf.numberToTerraform(this._management),
      port: cdktf.stringToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
      eth_cfg: cdktf.listMapper(ipAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAToTerraform, true)(this._ethCfg.internalValue),
      ve_cfg: cdktf.listMapper(ipAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAToTerraform, true)(this._veCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name_name: {
        value: cdktf.stringToHclTerraform(this._appNameName),
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
      management: {
        value: cdktf.numberToHclTerraform(this._management),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
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
      eth_cfg: {
        value: cdktf.listMapperHcl(ipAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAToHclTerraform, true)(this._ethCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAppProtocolPortUdpPortAddAppNameInterfaceEthCfgAList",
      },
      ve_cfg: {
        value: cdktf.listMapperHcl(ipAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAToHclTerraform, true)(this._veCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpAppProtocolPortUdpPortAddAppNameInterfaceVeCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
