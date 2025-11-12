// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSnmpCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#dynamic_sort_subtable SystemSnmpCommunity#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#events SystemSnmpCommunity#events}
  */
  readonly events?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#fosid SystemSnmpCommunity#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#id SystemSnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#name SystemSnmpCommunity#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#query_v1_port SystemSnmpCommunity#query_v1_port}
  */
  readonly queryV1Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#query_v1_status SystemSnmpCommunity#query_v1_status}
  */
  readonly queryV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#query_v2c_port SystemSnmpCommunity#query_v2c_port}
  */
  readonly queryV2CPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#query_v2c_status SystemSnmpCommunity#query_v2c_status}
  */
  readonly queryV2CStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#status SystemSnmpCommunity#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#trap_v1_rport SystemSnmpCommunity#trap_v1_rport}
  */
  readonly trapV1Rport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#trap_v1_status SystemSnmpCommunity#trap_v1_status}
  */
  readonly trapV1Status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#trap_v2c_rport SystemSnmpCommunity#trap_v2c_rport}
  */
  readonly trapV2CRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#trap_v2c_status SystemSnmpCommunity#trap_v2c_status}
  */
  readonly trapV2CStatus?: string;
  /**
  * hosts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#hosts SystemSnmpCommunity#hosts}
  */
  readonly hosts?: SystemSnmpCommunityHosts[] | cdktf.IResolvable;
  /**
  * hosts6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#hosts6 SystemSnmpCommunity#hosts6}
  */
  readonly hosts6?: SystemSnmpCommunityHosts6[] | cdktf.IResolvable;
}
export interface SystemSnmpCommunityHosts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#id SystemSnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#interface SystemSnmpCommunity#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#ip SystemSnmpCommunity#ip}
  */
  readonly ip?: string[];
}

export function systemSnmpCommunityHostsToTerraform(struct?: SystemSnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
  }
}


export function systemSnmpCommunityHostsToHclTerraform(struct?: SystemSnmpCommunityHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpCommunityHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpCommunityHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpCommunityHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class SystemSnmpCommunityHostsList extends cdktf.ComplexList {
  public internalValue? : SystemSnmpCommunityHosts[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpCommunityHostsOutputReference {
    return new SystemSnmpCommunityHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSnmpCommunityHosts6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#id SystemSnmpCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#interface SystemSnmpCommunity#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#ip SystemSnmpCommunity#ip}
  */
  readonly ip?: string;
}

export function systemSnmpCommunityHosts6ToTerraform(struct?: SystemSnmpCommunityHosts6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function systemSnmpCommunityHosts6ToHclTerraform(struct?: SystemSnmpCommunityHosts6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSnmpCommunityHosts6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSnmpCommunityHosts6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSnmpCommunityHosts6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
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

  // ip - computed: true, optional: true, required: false
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
}

export class SystemSnmpCommunityHosts6List extends cdktf.ComplexList {
  public internalValue? : SystemSnmpCommunityHosts6[] | cdktf.IResolvable

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
  public get(index: number): SystemSnmpCommunityHosts6OutputReference {
    return new SystemSnmpCommunityHosts6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community fortianalyzer_system_snmp_community}
*/
export class SystemSnmpCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_snmp_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSnmpCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSnmpCommunity to import
  * @param importFromId The id of the existing SystemSnmpCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSnmpCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_snmp_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_snmp_community fortianalyzer_system_snmp_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSnmpCommunityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSnmpCommunityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_snmp_community',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._events = config.events;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._queryV1Port = config.queryV1Port;
    this._queryV1Status = config.queryV1Status;
    this._queryV2CPort = config.queryV2CPort;
    this._queryV2CStatus = config.queryV2CStatus;
    this._status = config.status;
    this._trapV1Rport = config.trapV1Rport;
    this._trapV1Status = config.trapV1Status;
    this._trapV2CRport = config.trapV2CRport;
    this._trapV2CStatus = config.trapV2CStatus;
    this._hosts.internalValue = config.hosts;
    this._hosts6.internalValue = config.hosts6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // query_v1_port - computed: true, optional: true, required: false
  private _queryV1Port?: number; 
  public get queryV1Port() {
    return this.getNumberAttribute('query_v1_port');
  }
  public set queryV1Port(value: number) {
    this._queryV1Port = value;
  }
  public resetQueryV1Port() {
    this._queryV1Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1PortInput() {
    return this._queryV1Port;
  }

  // query_v1_status - computed: true, optional: true, required: false
  private _queryV1Status?: string; 
  public get queryV1Status() {
    return this.getStringAttribute('query_v1_status');
  }
  public set queryV1Status(value: string) {
    this._queryV1Status = value;
  }
  public resetQueryV1Status() {
    this._queryV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV1StatusInput() {
    return this._queryV1Status;
  }

  // query_v2c_port - computed: true, optional: true, required: false
  private _queryV2CPort?: number; 
  public get queryV2CPort() {
    return this.getNumberAttribute('query_v2c_port');
  }
  public set queryV2CPort(value: number) {
    this._queryV2CPort = value;
  }
  public resetQueryV2CPort() {
    this._queryV2CPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CPortInput() {
    return this._queryV2CPort;
  }

  // query_v2c_status - computed: true, optional: true, required: false
  private _queryV2CStatus?: string; 
  public get queryV2CStatus() {
    return this.getStringAttribute('query_v2c_status');
  }
  public set queryV2CStatus(value: string) {
    this._queryV2CStatus = value;
  }
  public resetQueryV2CStatus() {
    this._queryV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryV2CStatusInput() {
    return this._queryV2CStatus;
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

  // trap_v1_rport - computed: true, optional: true, required: false
  private _trapV1Rport?: number; 
  public get trapV1Rport() {
    return this.getNumberAttribute('trap_v1_rport');
  }
  public set trapV1Rport(value: number) {
    this._trapV1Rport = value;
  }
  public resetTrapV1Rport() {
    this._trapV1Rport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1RportInput() {
    return this._trapV1Rport;
  }

  // trap_v1_status - computed: true, optional: true, required: false
  private _trapV1Status?: string; 
  public get trapV1Status() {
    return this.getStringAttribute('trap_v1_status');
  }
  public set trapV1Status(value: string) {
    this._trapV1Status = value;
  }
  public resetTrapV1Status() {
    this._trapV1Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV1StatusInput() {
    return this._trapV1Status;
  }

  // trap_v2c_rport - computed: true, optional: true, required: false
  private _trapV2CRport?: number; 
  public get trapV2CRport() {
    return this.getNumberAttribute('trap_v2c_rport');
  }
  public set trapV2CRport(value: number) {
    this._trapV2CRport = value;
  }
  public resetTrapV2CRport() {
    this._trapV2CRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CRportInput() {
    return this._trapV2CRport;
  }

  // trap_v2c_status - computed: true, optional: true, required: false
  private _trapV2CStatus?: string; 
  public get trapV2CStatus() {
    return this.getStringAttribute('trap_v2c_status');
  }
  public set trapV2CStatus(value: string) {
    this._trapV2CStatus = value;
  }
  public resetTrapV2CStatus() {
    this._trapV2CStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapV2CStatusInput() {
    return this._trapV2CStatus;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts = new SystemSnmpCommunityHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: SystemSnmpCommunityHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // hosts6 - computed: false, optional: true, required: false
  private _hosts6 = new SystemSnmpCommunityHosts6List(this, "hosts6", false);
  public get hosts6() {
    return this._hosts6;
  }
  public putHosts6(value: SystemSnmpCommunityHosts6[] | cdktf.IResolvable) {
    this._hosts6.internalValue = value;
  }
  public resetHosts6() {
    this._hosts6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hosts6Input() {
    return this._hosts6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      query_v1_port: cdktf.numberToTerraform(this._queryV1Port),
      query_v1_status: cdktf.stringToTerraform(this._queryV1Status),
      query_v2c_port: cdktf.numberToTerraform(this._queryV2CPort),
      query_v2c_status: cdktf.stringToTerraform(this._queryV2CStatus),
      status: cdktf.stringToTerraform(this._status),
      trap_v1_rport: cdktf.numberToTerraform(this._trapV1Rport),
      trap_v1_status: cdktf.stringToTerraform(this._trapV1Status),
      trap_v2c_rport: cdktf.numberToTerraform(this._trapV2CRport),
      trap_v2c_status: cdktf.stringToTerraform(this._trapV2CStatus),
      hosts: cdktf.listMapper(systemSnmpCommunityHostsToTerraform, true)(this._hosts.internalValue),
      hosts6: cdktf.listMapper(systemSnmpCommunityHosts6ToTerraform, true)(this._hosts6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_v1_port: {
        value: cdktf.numberToHclTerraform(this._queryV1Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v1_status: {
        value: cdktf.stringToHclTerraform(this._queryV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_v2c_port: {
        value: cdktf.numberToHclTerraform(this._queryV2CPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_v2c_status: {
        value: cdktf.stringToHclTerraform(this._queryV2CStatus),
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
      trap_v1_rport: {
        value: cdktf.numberToHclTerraform(this._trapV1Rport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v1_status: {
        value: cdktf.stringToHclTerraform(this._trapV1Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trap_v2c_rport: {
        value: cdktf.numberToHclTerraform(this._trapV2CRport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trap_v2c_status: {
        value: cdktf.stringToHclTerraform(this._trapV2CStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(systemSnmpCommunityHostsToHclTerraform, true)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpCommunityHostsList",
      },
      hosts6: {
        value: cdktf.listMapperHcl(systemSnmpCommunityHosts6ToHclTerraform, true)(this._hosts6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSnmpCommunityHosts6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
