// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemsnmpUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#auth_proto SystemsnmpUser#auth_proto}
  */
  readonly authProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#auth_pwd SystemsnmpUser#auth_pwd}
  */
  readonly authPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#dynamic_sort_subtable SystemsnmpUser#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#events SystemsnmpUser#events}
  */
  readonly events?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#get_all_tables SystemsnmpUser#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#ha_direct SystemsnmpUser#ha_direct}
  */
  readonly haDirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#id SystemsnmpUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#interface SystemsnmpUser#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#interface_select_method SystemsnmpUser#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#mib_view SystemsnmpUser#mib_view}
  */
  readonly mibView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#name SystemsnmpUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#notify_hosts SystemsnmpUser#notify_hosts}
  */
  readonly notifyHosts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#notify_hosts6 SystemsnmpUser#notify_hosts6}
  */
  readonly notifyHosts6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#priv_proto SystemsnmpUser#priv_proto}
  */
  readonly privProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#priv_pwd SystemsnmpUser#priv_pwd}
  */
  readonly privPwd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#queries SystemsnmpUser#queries}
  */
  readonly queries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#query_port SystemsnmpUser#query_port}
  */
  readonly queryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#security_level SystemsnmpUser#security_level}
  */
  readonly securityLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#source_ip SystemsnmpUser#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#source_ipv6 SystemsnmpUser#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#status SystemsnmpUser#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#trap_lport SystemsnmpUser#trap_lport}
  */
  readonly trapLport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#trap_rport SystemsnmpUser#trap_rport}
  */
  readonly trapRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#trap_status SystemsnmpUser#trap_status}
  */
  readonly trapStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#vdomparam SystemsnmpUser#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#vrf_select SystemsnmpUser#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * vdoms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#vdoms SystemsnmpUser#vdoms}
  */
  readonly vdoms?: SystemsnmpUserVdoms[] | cdktf.IResolvable;
}
export interface SystemsnmpUserVdoms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#name SystemsnmpUser#name}
  */
  readonly name?: string;
}

export function systemsnmpUserVdomsToTerraform(struct?: SystemsnmpUserVdoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemsnmpUserVdomsToHclTerraform(struct?: SystemsnmpUserVdoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemsnmpUserVdomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemsnmpUserVdoms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemsnmpUserVdoms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class SystemsnmpUserVdomsList extends cdktf.ComplexList {
  public internalValue? : SystemsnmpUserVdoms[] | cdktf.IResolvable

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
  public get(index: number): SystemsnmpUserVdomsOutputReference {
    return new SystemsnmpUserVdomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user fortios_systemsnmp_user}
*/
export class SystemsnmpUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_systemsnmp_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemsnmpUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemsnmpUser to import
  * @param importFromId The id of the existing SystemsnmpUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemsnmpUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_systemsnmp_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/systemsnmp_user fortios_systemsnmp_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemsnmpUserConfig
  */
  public constructor(scope: Construct, id: string, config: SystemsnmpUserConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_systemsnmp_user',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authProto = config.authProto;
    this._authPwd = config.authPwd;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._events = config.events;
    this._getAllTables = config.fetchAllTables;
    this._haDirect = config.haDirect;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._mibView = config.mibView;
    this._name = config.name;
    this._notifyHosts = config.notifyHosts;
    this._notifyHosts6 = config.notifyHosts6;
    this._privProto = config.privProto;
    this._privPwd = config.privPwd;
    this._queries = config.queries;
    this._queryPort = config.queryPort;
    this._securityLevel = config.securityLevel;
    this._sourceIp = config.sourceIp;
    this._sourceIpv6 = config.sourceIpv6;
    this._status = config.status;
    this._trapLport = config.trapLport;
    this._trapRport = config.trapRport;
    this._trapStatus = config.trapStatus;
    this._vdomparam = config.vdomparam;
    this._vrfSelect = config.vrfSelect;
    this._vdoms.internalValue = config.vdoms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_proto - computed: true, optional: true, required: false
  private _authProto?: string; 
  public get authProto() {
    return this.getStringAttribute('auth_proto');
  }
  public set authProto(value: string) {
    this._authProto = value;
  }
  public resetAuthProto() {
    this._authProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtoInput() {
    return this._authProto;
  }

  // auth_pwd - computed: false, optional: true, required: false
  private _authPwd?: string; 
  public get authPwd() {
    return this.getStringAttribute('auth_pwd');
  }
  public set authPwd(value: string) {
    this._authPwd = value;
  }
  public resetAuthPwd() {
    this._authPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPwdInput() {
    return this._authPwd;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string; 
  public get events() {
    return this.getStringAttribute('events');
  }
  public set events(value: string) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // ha_direct - computed: true, optional: true, required: false
  private _haDirect?: string; 
  public get haDirect() {
    return this.getStringAttribute('ha_direct');
  }
  public set haDirect(value: string) {
    this._haDirect = value;
  }
  public resetHaDirect() {
    this._haDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haDirectInput() {
    return this._haDirect;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // mib_view - computed: false, optional: true, required: false
  private _mibView?: string; 
  public get mibView() {
    return this.getStringAttribute('mib_view');
  }
  public set mibView(value: string) {
    this._mibView = value;
  }
  public resetMibView() {
    this._mibView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mibViewInput() {
    return this._mibView;
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

  // notify_hosts - computed: false, optional: true, required: false
  private _notifyHosts?: string; 
  public get notifyHosts() {
    return this.getStringAttribute('notify_hosts');
  }
  public set notifyHosts(value: string) {
    this._notifyHosts = value;
  }
  public resetNotifyHosts() {
    this._notifyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyHostsInput() {
    return this._notifyHosts;
  }

  // notify_hosts6 - computed: false, optional: true, required: false
  private _notifyHosts6?: string; 
  public get notifyHosts6() {
    return this.getStringAttribute('notify_hosts6');
  }
  public set notifyHosts6(value: string) {
    this._notifyHosts6 = value;
  }
  public resetNotifyHosts6() {
    this._notifyHosts6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyHosts6Input() {
    return this._notifyHosts6;
  }

  // priv_proto - computed: true, optional: true, required: false
  private _privProto?: string; 
  public get privProto() {
    return this.getStringAttribute('priv_proto');
  }
  public set privProto(value: string) {
    this._privProto = value;
  }
  public resetPrivProto() {
    this._privProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privProtoInput() {
    return this._privProto;
  }

  // priv_pwd - computed: false, optional: true, required: false
  private _privPwd?: string; 
  public get privPwd() {
    return this.getStringAttribute('priv_pwd');
  }
  public set privPwd(value: string) {
    this._privPwd = value;
  }
  public resetPrivPwd() {
    this._privPwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privPwdInput() {
    return this._privPwd;
  }

  // queries - computed: true, optional: true, required: false
  private _queries?: string; 
  public get queries() {
    return this.getStringAttribute('queries');
  }
  public set queries(value: string) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // query_port - computed: true, optional: true, required: false
  private _queryPort?: number; 
  public get queryPort() {
    return this.getNumberAttribute('query_port');
  }
  public set queryPort(value: number) {
    this._queryPort = value;
  }
  public resetQueryPort() {
    this._queryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPortInput() {
    return this._queryPort;
  }

  // security_level - computed: true, optional: true, required: false
  private _securityLevel?: string; 
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }
  public set securityLevel(value: string) {
    this._securityLevel = value;
  }
  public resetSecurityLevel() {
    this._securityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLevelInput() {
    return this._securityLevel;
  }

  // source_ip - computed: true, optional: true, required: false
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

  // source_ipv6 - computed: true, optional: true, required: false
  private _sourceIpv6?: string; 
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }
  public set sourceIpv6(value: string) {
    this._sourceIpv6 = value;
  }
  public resetSourceIpv6() {
    this._sourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6Input() {
    return this._sourceIpv6;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trap_lport - computed: true, optional: true, required: false
  private _trapLport?: number; 
  public get trapLport() {
    return this.getNumberAttribute('trap_lport');
  }
  public set trapLport(value: number) {
    this._trapLport = value;
  }
  public resetTrapLport() {
    this._trapLport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapLportInput() {
    return this._trapLport;
  }

  // trap_rport - computed: true, optional: true, required: false
  private _trapRport?: number; 
  public get trapRport() {
    return this.getNumberAttribute('trap_rport');
  }
  public set trapRport(value: number) {
    this._trapRport = value;
  }
  public resetTrapRport() {
    this._trapRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapRportInput() {
    return this._trapRport;
  }

  // trap_status - computed: true, optional: true, required: false
  private _trapStatus?: string; 
  public get trapStatus() {
    return this.getStringAttribute('trap_status');
  }
  public set trapStatus(value: string) {
    this._trapStatus = value;
  }
  public resetTrapStatus() {
    this._trapStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapStatusInput() {
    return this._trapStatus;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // vdoms - computed: false, optional: true, required: false
  private _vdoms = new SystemsnmpUserVdomsList(this, "vdoms", true);
  public get vdoms() {
    return this._vdoms;
  }
  public putVdoms(value: SystemsnmpUserVdoms[] | cdktf.IResolvable) {
    this._vdoms.internalValue = value;
  }
  public resetVdoms() {
    this._vdoms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomsInput() {
    return this._vdoms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_proto: cdktf.stringToTerraform(this._authProto),
      auth_pwd: cdktf.stringToTerraform(this._authPwd),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      events: cdktf.stringToTerraform(this._events),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      ha_direct: cdktf.stringToTerraform(this._haDirect),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      mib_view: cdktf.stringToTerraform(this._mibView),
      name: cdktf.stringToTerraform(this._name),
      notify_hosts: cdktf.stringToTerraform(this._notifyHosts),
      notify_hosts6: cdktf.stringToTerraform(this._notifyHosts6),
      priv_proto: cdktf.stringToTerraform(this._privProto),
      priv_pwd: cdktf.stringToTerraform(this._privPwd),
      queries: cdktf.stringToTerraform(this._queries),
      query_port: cdktf.numberToTerraform(this._queryPort),
      security_level: cdktf.stringToTerraform(this._securityLevel),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ipv6: cdktf.stringToTerraform(this._sourceIpv6),
      status: cdktf.stringToTerraform(this._status),
      trap_lport: cdktf.numberToTerraform(this._trapLport),
      trap_rport: cdktf.numberToTerraform(this._trapRport),
      trap_status: cdktf.stringToTerraform(this._trapStatus),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      vdoms: cdktf.listMapper(systemsnmpUserVdomsToTerraform, true)(this._vdoms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_proto: {
        value: cdktf.stringToHclTerraform(this._authProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_pwd: {
        value: cdktf.stringToHclTerraform(this._authPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.stringToHclTerraform(this._events),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_direct: {
        value: cdktf.stringToHclTerraform(this._haDirect),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mib_view: {
        value: cdktf.stringToHclTerraform(this._mibView),
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
      notify_hosts: {
        value: cdktf.stringToHclTerraform(this._notifyHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_hosts6: {
        value: cdktf.stringToHclTerraform(this._notifyHosts6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv_proto: {
        value: cdktf.stringToHclTerraform(this._privProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priv_pwd: {
        value: cdktf.stringToHclTerraform(this._privPwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queries: {
        value: cdktf.stringToHclTerraform(this._queries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_port: {
        value: cdktf.numberToHclTerraform(this._queryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_level: {
        value: cdktf.stringToHclTerraform(this._securityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ipv6: {
        value: cdktf.stringToHclTerraform(this._sourceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_lport: {
        value: cdktf.numberToHclTerraform(this._trapLport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_rport: {
        value: cdktf.numberToHclTerraform(this._trapRport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_status: {
        value: cdktf.stringToHclTerraform(this._trapStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdoms: {
        value: cdktf.listMapperHcl(systemsnmpUserVdomsToHclTerraform, true)(this._vdoms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemsnmpUserVdomsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
