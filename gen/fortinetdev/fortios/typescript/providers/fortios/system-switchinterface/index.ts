// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSwitchinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#dynamic_sort_subtable SystemSwitchinterface#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#get_all_tables SystemSwitchinterface#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#id SystemSwitchinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#intra_switch_policy SystemSwitchinterface#intra_switch_policy}
  */
  readonly intraSwitchPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#mac_ttl SystemSwitchinterface#mac_ttl}
  */
  readonly macTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#name SystemSwitchinterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#span SystemSwitchinterface#span}
  */
  readonly span?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#span_dest_port SystemSwitchinterface#span_dest_port}
  */
  readonly spanDestPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#span_direction SystemSwitchinterface#span_direction}
  */
  readonly spanDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#type SystemSwitchinterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#vdom SystemSwitchinterface#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#vdomparam SystemSwitchinterface#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#member SystemSwitchinterface#member}
  */
  readonly member?: SystemSwitchinterfaceMember[] | cdktf.IResolvable;
  /**
  * span_source_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#span_source_port SystemSwitchinterface#span_source_port}
  */
  readonly spanSourcePort?: SystemSwitchinterfaceSpanSourcePort[] | cdktf.IResolvable;
}
export interface SystemSwitchinterfaceMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#interface_name SystemSwitchinterface#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemSwitchinterfaceMemberToTerraform(struct?: SystemSwitchinterfaceMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemSwitchinterfaceMemberToHclTerraform(struct?: SystemSwitchinterfaceMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSwitchinterfaceMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSwitchinterfaceMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSwitchinterfaceMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemSwitchinterfaceMemberList extends cdktf.ComplexList {
  public internalValue? : SystemSwitchinterfaceMember[] | cdktf.IResolvable

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
  public get(index: number): SystemSwitchinterfaceMemberOutputReference {
    return new SystemSwitchinterfaceMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSwitchinterfaceSpanSourcePort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#interface_name SystemSwitchinterface#interface_name}
  */
  readonly interfaceName?: string;
}

export function systemSwitchinterfaceSpanSourcePortToTerraform(struct?: SystemSwitchinterfaceSpanSourcePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function systemSwitchinterfaceSpanSourcePortToHclTerraform(struct?: SystemSwitchinterfaceSpanSourcePort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSwitchinterfaceSpanSourcePortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSwitchinterfaceSpanSourcePort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSwitchinterfaceSpanSourcePort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class SystemSwitchinterfaceSpanSourcePortList extends cdktf.ComplexList {
  public internalValue? : SystemSwitchinterfaceSpanSourcePort[] | cdktf.IResolvable

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
  public get(index: number): SystemSwitchinterfaceSpanSourcePortOutputReference {
    return new SystemSwitchinterfaceSpanSourcePortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface fortios_system_switchinterface}
*/
export class SystemSwitchinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_switchinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSwitchinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSwitchinterface to import
  * @param importFromId The id of the existing SystemSwitchinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSwitchinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_switchinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_switchinterface fortios_system_switchinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSwitchinterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSwitchinterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_switchinterface',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._intraSwitchPolicy = config.intraSwitchPolicy;
    this._macTtl = config.macTtl;
    this._name = config.name;
    this._span = config.span;
    this._spanDestPort = config.spanDestPort;
    this._spanDirection = config.spanDirection;
    this._type = config.type;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._member.internalValue = config.member;
    this._spanSourcePort.internalValue = config.spanSourcePort;
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

  // intra_switch_policy - computed: true, optional: true, required: false
  private _intraSwitchPolicy?: string; 
  public get intraSwitchPolicy() {
    return this.getStringAttribute('intra_switch_policy');
  }
  public set intraSwitchPolicy(value: string) {
    this._intraSwitchPolicy = value;
  }
  public resetIntraSwitchPolicy() {
    this._intraSwitchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraSwitchPolicyInput() {
    return this._intraSwitchPolicy;
  }

  // mac_ttl - computed: true, optional: true, required: false
  private _macTtl?: number; 
  public get macTtl() {
    return this.getNumberAttribute('mac_ttl');
  }
  public set macTtl(value: number) {
    this._macTtl = value;
  }
  public resetMacTtl() {
    this._macTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTtlInput() {
    return this._macTtl;
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

  // span - computed: true, optional: true, required: false
  private _span?: string; 
  public get span() {
    return this.getStringAttribute('span');
  }
  public set span(value: string) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // span_dest_port - computed: false, optional: true, required: false
  private _spanDestPort?: string; 
  public get spanDestPort() {
    return this.getStringAttribute('span_dest_port');
  }
  public set spanDestPort(value: string) {
    this._spanDestPort = value;
  }
  public resetSpanDestPort() {
    this._spanDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDestPortInput() {
    return this._spanDestPort;
  }

  // span_direction - computed: true, optional: true, required: false
  private _spanDirection?: string; 
  public get spanDirection() {
    return this.getStringAttribute('span_direction');
  }
  public set spanDirection(value: string) {
    this._spanDirection = value;
  }
  public resetSpanDirection() {
    this._spanDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDirectionInput() {
    return this._spanDirection;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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

  // member - computed: false, optional: true, required: false
  private _member = new SystemSwitchinterfaceMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: SystemSwitchinterfaceMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // span_source_port - computed: false, optional: true, required: false
  private _spanSourcePort = new SystemSwitchinterfaceSpanSourcePortList(this, "span_source_port", true);
  public get spanSourcePort() {
    return this._spanSourcePort;
  }
  public putSpanSourcePort(value: SystemSwitchinterfaceSpanSourcePort[] | cdktf.IResolvable) {
    this._spanSourcePort.internalValue = value;
  }
  public resetSpanSourcePort() {
    this._spanSourcePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanSourcePortInput() {
    return this._spanSourcePort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      intra_switch_policy: cdktf.stringToTerraform(this._intraSwitchPolicy),
      mac_ttl: cdktf.numberToTerraform(this._macTtl),
      name: cdktf.stringToTerraform(this._name),
      span: cdktf.stringToTerraform(this._span),
      span_dest_port: cdktf.stringToTerraform(this._spanDestPort),
      span_direction: cdktf.stringToTerraform(this._spanDirection),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      member: cdktf.listMapper(systemSwitchinterfaceMemberToTerraform, true)(this._member.internalValue),
      span_source_port: cdktf.listMapper(systemSwitchinterfaceSpanSourcePortToTerraform, true)(this._spanSourcePort.internalValue),
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
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      intra_switch_policy: {
        value: cdktf.stringToHclTerraform(this._intraSwitchPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_ttl: {
        value: cdktf.numberToHclTerraform(this._macTtl),
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
      span: {
        value: cdktf.stringToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_dest_port: {
        value: cdktf.stringToHclTerraform(this._spanDestPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_direction: {
        value: cdktf.stringToHclTerraform(this._spanDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
      member: {
        value: cdktf.listMapperHcl(systemSwitchinterfaceMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemSwitchinterfaceMemberList",
      },
      span_source_port: {
        value: cdktf.listMapperHcl(systemSwitchinterfaceSpanSourcePortToHclTerraform, true)(this._spanSourcePort.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SystemSwitchinterfaceSpanSourcePortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
