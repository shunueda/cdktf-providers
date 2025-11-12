// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemWccpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#assignment_bucket_format SystemWccp#assignment_bucket_format}
  */
  readonly assignmentBucketFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#assignment_dstaddr_mask SystemWccp#assignment_dstaddr_mask}
  */
  readonly assignmentDstaddrMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#assignment_method SystemWccp#assignment_method}
  */
  readonly assignmentMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#assignment_srcaddr_mask SystemWccp#assignment_srcaddr_mask}
  */
  readonly assignmentSrcaddrMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#assignment_weight SystemWccp#assignment_weight}
  */
  readonly assignmentWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#authentication SystemWccp#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#cache_engine_method SystemWccp#cache_engine_method}
  */
  readonly cacheEngineMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#cache_id SystemWccp#cache_id}
  */
  readonly cacheId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#device_name SystemWccp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#device_vdom SystemWccp#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#forward_method SystemWccp#forward_method}
  */
  readonly forwardMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#group_address SystemWccp#group_address}
  */
  readonly groupAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#id SystemWccp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#password SystemWccp#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#ports SystemWccp#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#ports_defined SystemWccp#ports_defined}
  */
  readonly portsDefined?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#primary_hash SystemWccp#primary_hash}
  */
  readonly primaryHash?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#priority SystemWccp#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#protocol SystemWccp#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#return_method SystemWccp#return_method}
  */
  readonly returnMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#router_id SystemWccp#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#router_list SystemWccp#router_list}
  */
  readonly routerList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#server_list SystemWccp#server_list}
  */
  readonly serverList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#server_type SystemWccp#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#service_id SystemWccp#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#service_type SystemWccp#service_type}
  */
  readonly serviceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp fmgdevice_system_wccp}
*/
export class SystemWccp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_wccp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemWccp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemWccp to import
  * @param importFromId The id of the existing SystemWccp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemWccp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_wccp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_wccp fmgdevice_system_wccp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemWccpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemWccpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_wccp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignmentBucketFormat = config.assignmentBucketFormat;
    this._assignmentDstaddrMask = config.assignmentDstaddrMask;
    this._assignmentMethod = config.assignmentMethod;
    this._assignmentSrcaddrMask = config.assignmentSrcaddrMask;
    this._assignmentWeight = config.assignmentWeight;
    this._authentication = config.authentication;
    this._cacheEngineMethod = config.cacheEngineMethod;
    this._cacheId = config.cacheId;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._forwardMethod = config.forwardMethod;
    this._groupAddress = config.groupAddress;
    this._id = config.id;
    this._password = config.password;
    this._ports = config.ports;
    this._portsDefined = config.portsDefined;
    this._primaryHash = config.primaryHash;
    this._priority = config.priority;
    this._protocol = config.protocol;
    this._returnMethod = config.returnMethod;
    this._routerId = config.routerId;
    this._routerList = config.routerList;
    this._serverList = config.serverList;
    this._serverType = config.serverType;
    this._serviceId = config.serviceId;
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignment_bucket_format - computed: true, optional: true, required: false
  private _assignmentBucketFormat?: string; 
  public get assignmentBucketFormat() {
    return this.getStringAttribute('assignment_bucket_format');
  }
  public set assignmentBucketFormat(value: string) {
    this._assignmentBucketFormat = value;
  }
  public resetAssignmentBucketFormat() {
    this._assignmentBucketFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentBucketFormatInput() {
    return this._assignmentBucketFormat;
  }

  // assignment_dstaddr_mask - computed: true, optional: true, required: false
  private _assignmentDstaddrMask?: string; 
  public get assignmentDstaddrMask() {
    return this.getStringAttribute('assignment_dstaddr_mask');
  }
  public set assignmentDstaddrMask(value: string) {
    this._assignmentDstaddrMask = value;
  }
  public resetAssignmentDstaddrMask() {
    this._assignmentDstaddrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentDstaddrMaskInput() {
    return this._assignmentDstaddrMask;
  }

  // assignment_method - computed: true, optional: true, required: false
  private _assignmentMethod?: string; 
  public get assignmentMethod() {
    return this.getStringAttribute('assignment_method');
  }
  public set assignmentMethod(value: string) {
    this._assignmentMethod = value;
  }
  public resetAssignmentMethod() {
    this._assignmentMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentMethodInput() {
    return this._assignmentMethod;
  }

  // assignment_srcaddr_mask - computed: true, optional: true, required: false
  private _assignmentSrcaddrMask?: string; 
  public get assignmentSrcaddrMask() {
    return this.getStringAttribute('assignment_srcaddr_mask');
  }
  public set assignmentSrcaddrMask(value: string) {
    this._assignmentSrcaddrMask = value;
  }
  public resetAssignmentSrcaddrMask() {
    this._assignmentSrcaddrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentSrcaddrMaskInput() {
    return this._assignmentSrcaddrMask;
  }

  // assignment_weight - computed: false, optional: true, required: false
  private _assignmentWeight?: number; 
  public get assignmentWeight() {
    return this.getNumberAttribute('assignment_weight');
  }
  public set assignmentWeight(value: number) {
    this._assignmentWeight = value;
  }
  public resetAssignmentWeight() {
    this._assignmentWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentWeightInput() {
    return this._assignmentWeight;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // cache_engine_method - computed: true, optional: true, required: false
  private _cacheEngineMethod?: string; 
  public get cacheEngineMethod() {
    return this.getStringAttribute('cache_engine_method');
  }
  public set cacheEngineMethod(value: string) {
    this._cacheEngineMethod = value;
  }
  public resetCacheEngineMethod() {
    this._cacheEngineMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEngineMethodInput() {
    return this._cacheEngineMethod;
  }

  // cache_id - computed: true, optional: true, required: false
  private _cacheId?: string; 
  public get cacheId() {
    return this.getStringAttribute('cache_id');
  }
  public set cacheId(value: string) {
    this._cacheId = value;
  }
  public resetCacheId() {
    this._cacheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheIdInput() {
    return this._cacheId;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // forward_method - computed: true, optional: true, required: false
  private _forwardMethod?: string; 
  public get forwardMethod() {
    return this.getStringAttribute('forward_method');
  }
  public set forwardMethod(value: string) {
    this._forwardMethod = value;
  }
  public resetForwardMethod() {
    this._forwardMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardMethodInput() {
    return this._forwardMethod;
  }

  // group_address - computed: true, optional: true, required: false
  private _groupAddress?: string; 
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }
  public set groupAddress(value: string) {
    this._groupAddress = value;
  }
  public resetGroupAddress() {
    this._groupAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressInput() {
    return this._groupAddress;
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

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // ports_defined - computed: false, optional: true, required: false
  private _portsDefined?: string; 
  public get portsDefined() {
    return this.getStringAttribute('ports_defined');
  }
  public set portsDefined(value: string) {
    this._portsDefined = value;
  }
  public resetPortsDefined() {
    this._portsDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsDefinedInput() {
    return this._portsDefined;
  }

  // primary_hash - computed: true, optional: true, required: false
  private _primaryHash?: string[]; 
  public get primaryHash() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_hash'));
  }
  public set primaryHash(value: string[]) {
    this._primaryHash = value;
  }
  public resetPrimaryHash() {
    this._primaryHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryHashInput() {
    return this._primaryHash;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // return_method - computed: true, optional: true, required: false
  private _returnMethod?: string; 
  public get returnMethod() {
    return this.getStringAttribute('return_method');
  }
  public set returnMethod(value: string) {
    this._returnMethod = value;
  }
  public resetReturnMethod() {
    this._returnMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnMethodInput() {
    return this._returnMethod;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // router_list - computed: true, optional: true, required: false
  private _routerList?: string[]; 
  public get routerList() {
    return cdktf.Fn.tolist(this.getListAttribute('router_list'));
  }
  public set routerList(value: string[]) {
    this._routerList = value;
  }
  public resetRouterList() {
    this._routerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerListInput() {
    return this._routerList;
  }

  // server_list - computed: true, optional: true, required: false
  private _serverList?: string[]; 
  public get serverList() {
    return cdktf.Fn.tolist(this.getListAttribute('server_list'));
  }
  public set serverList(value: string[]) {
    this._serverList = value;
  }
  public resetServerList() {
    this._serverList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList;
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

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignment_bucket_format: cdktf.stringToTerraform(this._assignmentBucketFormat),
      assignment_dstaddr_mask: cdktf.stringToTerraform(this._assignmentDstaddrMask),
      assignment_method: cdktf.stringToTerraform(this._assignmentMethod),
      assignment_srcaddr_mask: cdktf.stringToTerraform(this._assignmentSrcaddrMask),
      assignment_weight: cdktf.numberToTerraform(this._assignmentWeight),
      authentication: cdktf.stringToTerraform(this._authentication),
      cache_engine_method: cdktf.stringToTerraform(this._cacheEngineMethod),
      cache_id: cdktf.stringToTerraform(this._cacheId),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      forward_method: cdktf.stringToTerraform(this._forwardMethod),
      group_address: cdktf.stringToTerraform(this._groupAddress),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      ports_defined: cdktf.stringToTerraform(this._portsDefined),
      primary_hash: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryHash),
      priority: cdktf.numberToTerraform(this._priority),
      protocol: cdktf.numberToTerraform(this._protocol),
      return_method: cdktf.stringToTerraform(this._returnMethod),
      router_id: cdktf.stringToTerraform(this._routerId),
      router_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routerList),
      server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverList),
      server_type: cdktf.stringToTerraform(this._serverType),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_type: cdktf.stringToTerraform(this._serviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignment_bucket_format: {
        value: cdktf.stringToHclTerraform(this._assignmentBucketFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_dstaddr_mask: {
        value: cdktf.stringToHclTerraform(this._assignmentDstaddrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_method: {
        value: cdktf.stringToHclTerraform(this._assignmentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_srcaddr_mask: {
        value: cdktf.stringToHclTerraform(this._assignmentSrcaddrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_weight: {
        value: cdktf.numberToHclTerraform(this._assignmentWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication: {
        value: cdktf.stringToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_engine_method: {
        value: cdktf.stringToHclTerraform(this._cacheEngineMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_id: {
        value: cdktf.stringToHclTerraform(this._cacheId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_method: {
        value: cdktf.stringToHclTerraform(this._forwardMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_address: {
        value: cdktf.stringToHclTerraform(this._groupAddress),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ports_defined: {
        value: cdktf.stringToHclTerraform(this._portsDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_hash: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryHash),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      return_method: {
        value: cdktf.stringToHclTerraform(this._returnMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routerList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
