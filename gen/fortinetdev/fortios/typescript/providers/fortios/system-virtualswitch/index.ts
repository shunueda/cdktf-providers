// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVirtualswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#dynamic_sort_subtable SystemVirtualswitch#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#get_all_tables SystemVirtualswitch#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#id SystemVirtualswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#name SystemVirtualswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#physical_switch SystemVirtualswitch#physical_switch}
  */
  readonly physicalSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#span SystemVirtualswitch#span}
  */
  readonly span?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#span_dest_port SystemVirtualswitch#span_dest_port}
  */
  readonly spanDestPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#span_direction SystemVirtualswitch#span_direction}
  */
  readonly spanDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#span_source_port SystemVirtualswitch#span_source_port}
  */
  readonly spanSourcePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#vdomparam SystemVirtualswitch#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#vlan SystemVirtualswitch#vlan}
  */
  readonly vlan?: number;
  /**
  * port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#port SystemVirtualswitch#port}
  */
  readonly port?: SystemVirtualswitchPort[] | cdktf.IResolvable;
}
export interface SystemVirtualswitchPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#alias SystemVirtualswitch#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#name SystemVirtualswitch#name}
  */
  readonly name?: string;
}

export function systemVirtualswitchPortToTerraform(struct?: SystemVirtualswitchPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function systemVirtualswitchPortToHclTerraform(struct?: SystemVirtualswitchPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class SystemVirtualswitchPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemVirtualswitchPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemVirtualswitchPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._name = value.name;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

export class SystemVirtualswitchPortList extends cdktf.ComplexList {
  public internalValue? : SystemVirtualswitchPort[] | cdktf.IResolvable

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
  public get(index: number): SystemVirtualswitchPortOutputReference {
    return new SystemVirtualswitchPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch fortios_system_virtualswitch}
*/
export class SystemVirtualswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_virtualswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVirtualswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVirtualswitch to import
  * @param importFromId The id of the existing SystemVirtualswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVirtualswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_virtualswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_virtualswitch fortios_system_virtualswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVirtualswitchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVirtualswitchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_virtualswitch',
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
    this._name = config.name;
    this._physicalSwitch = config.physicalSwitch;
    this._span = config.span;
    this._spanDestPort = config.spanDestPort;
    this._spanDirection = config.spanDirection;
    this._spanSourcePort = config.spanSourcePort;
    this._vdomparam = config.vdomparam;
    this._vlan = config.vlan;
    this._port.internalValue = config.port;
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

  // name - computed: true, optional: true, required: false
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

  // physical_switch - computed: false, optional: true, required: false
  private _physicalSwitch?: string; 
  public get physicalSwitch() {
    return this.getStringAttribute('physical_switch');
  }
  public set physicalSwitch(value: string) {
    this._physicalSwitch = value;
  }
  public resetPhysicalSwitch() {
    this._physicalSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalSwitchInput() {
    return this._physicalSwitch;
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

  // span_source_port - computed: false, optional: true, required: false
  private _spanSourcePort?: string; 
  public get spanSourcePort() {
    return this.getStringAttribute('span_source_port');
  }
  public set spanSourcePort(value: string) {
    this._spanSourcePort = value;
  }
  public resetSpanSourcePort() {
    this._spanSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanSourcePortInput() {
    return this._spanSourcePort;
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

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // port - computed: false, optional: true, required: false
  private _port = new SystemVirtualswitchPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: SystemVirtualswitchPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      physical_switch: cdktf.stringToTerraform(this._physicalSwitch),
      span: cdktf.stringToTerraform(this._span),
      span_dest_port: cdktf.stringToTerraform(this._spanDestPort),
      span_direction: cdktf.stringToTerraform(this._spanDirection),
      span_source_port: cdktf.stringToTerraform(this._spanSourcePort),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan: cdktf.numberToTerraform(this._vlan),
      port: cdktf.listMapper(systemVirtualswitchPortToTerraform, true)(this._port.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_switch: {
        value: cdktf.stringToHclTerraform(this._physicalSwitch),
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
      span_source_port: {
        value: cdktf.stringToHclTerraform(this._spanSourcePort),
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
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.listMapperHcl(systemVirtualswitchPortToHclTerraform, true)(this._port.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemVirtualswitchPortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
