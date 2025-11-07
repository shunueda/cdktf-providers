// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInternetservicedefinitionEntryAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#category_id FirewallInternetservicedefinitionEntryA#category_id}
  */
  readonly categoryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#device_name FirewallInternetservicedefinitionEntryA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#dynamic_sort_subtable FirewallInternetservicedefinitionEntryA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#id FirewallInternetservicedefinitionEntryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#internet_service_definition FirewallInternetservicedefinitionEntryA#internet_service_definition}
  */
  readonly internetServiceDefinition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#name FirewallInternetservicedefinitionEntryA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#protocol FirewallInternetservicedefinitionEntryA#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#seq_num FirewallInternetservicedefinitionEntryA#seq_num}
  */
  readonly seqNum?: number;
  /**
  * port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#port_range FirewallInternetservicedefinitionEntryA#port_range}
  */
  readonly portRange?: FirewallInternetservicedefinitionEntryPortRangeA[] | cdktf.IResolvable;
}
export interface FirewallInternetservicedefinitionEntryPortRangeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#end_port FirewallInternetservicedefinitionEntryA#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#id FirewallInternetservicedefinitionEntryA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#start_port FirewallInternetservicedefinitionEntryA#start_port}
  */
  readonly startPort?: number;
}

export function firewallInternetservicedefinitionEntryPortRangeAToTerraform(struct?: FirewallInternetservicedefinitionEntryPortRangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_port: cdktf.numberToTerraform(struct!.endPort),
    id: cdktf.numberToTerraform(struct!.id),
    start_port: cdktf.numberToTerraform(struct!.startPort),
  }
}


export function firewallInternetservicedefinitionEntryPortRangeAToHclTerraform(struct?: FirewallInternetservicedefinitionEntryPortRangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallInternetservicedefinitionEntryPortRangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallInternetservicedefinitionEntryPortRangeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallInternetservicedefinitionEntryPortRangeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endPort = undefined;
      this._id = undefined;
      this._startPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endPort = value.endPort;
      this._id = value.id;
      this._startPort = value.startPort;
    }
  }

  // end_port - computed: true, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
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

  // start_port - computed: true, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }
}

export class FirewallInternetservicedefinitionEntryPortRangeAList extends cdktf.ComplexList {
  public internalValue? : FirewallInternetservicedefinitionEntryPortRangeA[] | cdktf.IResolvable

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
  public get(index: number): FirewallInternetservicedefinitionEntryPortRangeAOutputReference {
    return new FirewallInternetservicedefinitionEntryPortRangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry fmgdevice_firewall_internetservicedefinition_entry}
*/
export class FirewallInternetservicedefinitionEntryA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_internetservicedefinition_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInternetservicedefinitionEntryA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInternetservicedefinitionEntryA to import
  * @param importFromId The id of the existing FirewallInternetservicedefinitionEntryA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInternetservicedefinitionEntryA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_internetservicedefinition_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_internetservicedefinition_entry fmgdevice_firewall_internetservicedefinition_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInternetservicedefinitionEntryAConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallInternetservicedefinitionEntryAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_internetservicedefinition_entry',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._categoryId = config.categoryId;
    this._deviceName = config.deviceName;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._internetServiceDefinition = config.internetServiceDefinition;
    this._name = config.name;
    this._protocol = config.protocol;
    this._seqNum = config.seqNum;
    this._portRange.internalValue = config.portRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_id - computed: false, optional: true, required: false
  private _categoryId?: number; 
  public get categoryId() {
    return this.getNumberAttribute('category_id');
  }
  public set categoryId(value: number) {
    this._categoryId = value;
  }
  public resetCategoryId() {
    this._categoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryIdInput() {
    return this._categoryId;
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

  // internet_service_definition - computed: false, optional: false, required: true
  private _internetServiceDefinition?: string; 
  public get internetServiceDefinition() {
    return this.getStringAttribute('internet_service_definition');
  }
  public set internetServiceDefinition(value: string) {
    this._internetServiceDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceDefinitionInput() {
    return this._internetServiceDefinition;
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

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // port_range - computed: false, optional: true, required: false
  private _portRange = new FirewallInternetservicedefinitionEntryPortRangeAList(this, "port_range", false);
  public get portRange() {
    return this._portRange;
  }
  public putPortRange(value: FirewallInternetservicedefinitionEntryPortRangeA[] | cdktf.IResolvable) {
    this._portRange.internalValue = value;
  }
  public resetPortRange() {
    this._portRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeInput() {
    return this._portRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category_id: cdktf.numberToTerraform(this._categoryId),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      internet_service_definition: cdktf.stringToTerraform(this._internetServiceDefinition),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.numberToTerraform(this._protocol),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      port_range: cdktf.listMapper(firewallInternetservicedefinitionEntryPortRangeAToTerraform, true)(this._portRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category_id: {
        value: cdktf.numberToHclTerraform(this._categoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_definition: {
        value: cdktf.stringToHclTerraform(this._internetServiceDefinition),
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
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range: {
        value: cdktf.listMapperHcl(firewallInternetservicedefinitionEntryPortRangeAToHclTerraform, true)(this._portRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallInternetservicedefinitionEntryPortRangeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
