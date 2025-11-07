// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNat64Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#always_synthesize_aaaa_record SystemNat64#always_synthesize_aaaa_record}
  */
  readonly alwaysSynthesizeAaaaRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#dynamic_sort_subtable SystemNat64#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#generate_ipv6_fragment_header SystemNat64#generate_ipv6_fragment_header}
  */
  readonly generateIpv6FragmentHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#get_all_tables SystemNat64#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#id SystemNat64#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#nat46_force_ipv4_packet_forwarding SystemNat64#nat46_force_ipv4_packet_forwarding}
  */
  readonly nat46ForceIpv4PacketForwarding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#nat64_prefix SystemNat64#nat64_prefix}
  */
  readonly nat64Prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#secondary_prefix_status SystemNat64#secondary_prefix_status}
  */
  readonly secondaryPrefixStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#status SystemNat64#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#vdomparam SystemNat64#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * secondary_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#secondary_prefix SystemNat64#secondary_prefix}
  */
  readonly secondaryPrefix?: SystemNat64SecondaryPrefix[] | cdktf.IResolvable;
}
export interface SystemNat64SecondaryPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#name SystemNat64#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#nat64_prefix SystemNat64#nat64_prefix}
  */
  readonly nat64Prefix?: string;
}

export function systemNat64SecondaryPrefixToTerraform(struct?: SystemNat64SecondaryPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    nat64_prefix: cdktf.stringToTerraform(struct!.nat64Prefix),
  }
}


export function systemNat64SecondaryPrefixToHclTerraform(struct?: SystemNat64SecondaryPrefix | cdktf.IResolvable): any {
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
    nat64_prefix: {
      value: cdktf.stringToHclTerraform(struct!.nat64Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNat64SecondaryPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemNat64SecondaryPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nat64Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64Prefix = this._nat64Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNat64SecondaryPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nat64Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nat64Prefix = value.nat64Prefix;
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

  // nat64_prefix - computed: true, optional: true, required: false
  private _nat64Prefix?: string; 
  public get nat64Prefix() {
    return this.getStringAttribute('nat64_prefix');
  }
  public set nat64Prefix(value: string) {
    this._nat64Prefix = value;
  }
  public resetNat64Prefix() {
    this._nat64Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64PrefixInput() {
    return this._nat64Prefix;
  }
}

export class SystemNat64SecondaryPrefixList extends cdktf.ComplexList {
  public internalValue? : SystemNat64SecondaryPrefix[] | cdktf.IResolvable

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
  public get(index: number): SystemNat64SecondaryPrefixOutputReference {
    return new SystemNat64SecondaryPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64 fortios_system_nat64}
*/
export class SystemNat64 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_nat64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNat64 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNat64 to import
  * @param importFromId The id of the existing SystemNat64 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNat64 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_nat64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_nat64 fortios_system_nat64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNat64Config
  */
  public constructor(scope: Construct, id: string, config: SystemNat64Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_nat64',
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
    this._alwaysSynthesizeAaaaRecord = config.alwaysSynthesizeAaaaRecord;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._generateIpv6FragmentHeader = config.generateIpv6FragmentHeader;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._nat46ForceIpv4PacketForwarding = config.nat46ForceIpv4PacketForwarding;
    this._nat64Prefix = config.nat64Prefix;
    this._secondaryPrefixStatus = config.secondaryPrefixStatus;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._secondaryPrefix.internalValue = config.secondaryPrefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_synthesize_aaaa_record - computed: true, optional: true, required: false
  private _alwaysSynthesizeAaaaRecord?: string; 
  public get alwaysSynthesizeAaaaRecord() {
    return this.getStringAttribute('always_synthesize_aaaa_record');
  }
  public set alwaysSynthesizeAaaaRecord(value: string) {
    this._alwaysSynthesizeAaaaRecord = value;
  }
  public resetAlwaysSynthesizeAaaaRecord() {
    this._alwaysSynthesizeAaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSynthesizeAaaaRecordInput() {
    return this._alwaysSynthesizeAaaaRecord;
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

  // generate_ipv6_fragment_header - computed: true, optional: true, required: false
  private _generateIpv6FragmentHeader?: string; 
  public get generateIpv6FragmentHeader() {
    return this.getStringAttribute('generate_ipv6_fragment_header');
  }
  public set generateIpv6FragmentHeader(value: string) {
    this._generateIpv6FragmentHeader = value;
  }
  public resetGenerateIpv6FragmentHeader() {
    this._generateIpv6FragmentHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateIpv6FragmentHeaderInput() {
    return this._generateIpv6FragmentHeader;
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

  // nat46_force_ipv4_packet_forwarding - computed: true, optional: true, required: false
  private _nat46ForceIpv4PacketForwarding?: string; 
  public get nat46ForceIpv4PacketForwarding() {
    return this.getStringAttribute('nat46_force_ipv4_packet_forwarding');
  }
  public set nat46ForceIpv4PacketForwarding(value: string) {
    this._nat46ForceIpv4PacketForwarding = value;
  }
  public resetNat46ForceIpv4PacketForwarding() {
    this._nat46ForceIpv4PacketForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46ForceIpv4PacketForwardingInput() {
    return this._nat46ForceIpv4PacketForwarding;
  }

  // nat64_prefix - computed: false, optional: false, required: true
  private _nat64Prefix?: string; 
  public get nat64Prefix() {
    return this.getStringAttribute('nat64_prefix');
  }
  public set nat64Prefix(value: string) {
    this._nat64Prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64PrefixInput() {
    return this._nat64Prefix;
  }

  // secondary_prefix_status - computed: true, optional: true, required: false
  private _secondaryPrefixStatus?: string; 
  public get secondaryPrefixStatus() {
    return this.getStringAttribute('secondary_prefix_status');
  }
  public set secondaryPrefixStatus(value: string) {
    this._secondaryPrefixStatus = value;
  }
  public resetSecondaryPrefixStatus() {
    this._secondaryPrefixStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrefixStatusInput() {
    return this._secondaryPrefixStatus;
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

  // secondary_prefix - computed: false, optional: true, required: false
  private _secondaryPrefix = new SystemNat64SecondaryPrefixList(this, "secondary_prefix", false);
  public get secondaryPrefix() {
    return this._secondaryPrefix;
  }
  public putSecondaryPrefix(value: SystemNat64SecondaryPrefix[] | cdktf.IResolvable) {
    this._secondaryPrefix.internalValue = value;
  }
  public resetSecondaryPrefix() {
    this._secondaryPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrefixInput() {
    return this._secondaryPrefix.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_synthesize_aaaa_record: cdktf.stringToTerraform(this._alwaysSynthesizeAaaaRecord),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      generate_ipv6_fragment_header: cdktf.stringToTerraform(this._generateIpv6FragmentHeader),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      nat46_force_ipv4_packet_forwarding: cdktf.stringToTerraform(this._nat46ForceIpv4PacketForwarding),
      nat64_prefix: cdktf.stringToTerraform(this._nat64Prefix),
      secondary_prefix_status: cdktf.stringToTerraform(this._secondaryPrefixStatus),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      secondary_prefix: cdktf.listMapper(systemNat64SecondaryPrefixToTerraform, true)(this._secondaryPrefix.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_synthesize_aaaa_record: {
        value: cdktf.stringToHclTerraform(this._alwaysSynthesizeAaaaRecord),
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
      generate_ipv6_fragment_header: {
        value: cdktf.stringToHclTerraform(this._generateIpv6FragmentHeader),
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
      nat46_force_ipv4_packet_forwarding: {
        value: cdktf.stringToHclTerraform(this._nat46ForceIpv4PacketForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64_prefix: {
        value: cdktf.stringToHclTerraform(this._nat64Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_prefix_status: {
        value: cdktf.stringToHclTerraform(this._secondaryPrefixStatus),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_prefix: {
        value: cdktf.listMapperHcl(systemNat64SecondaryPrefixToHclTerraform, true)(this._secondaryPrefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemNat64SecondaryPrefixList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
