// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstEntrySrcDstPairSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Idle age for ip entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#age DdosDstEntrySrcDstPairSettings#age}
  */
  readonly age?: number;
  /**
  * 'all-types': Settings for all types (default or class-list);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#all_types DdosDstEntrySrcDstPairSettings#all_types}
  */
  readonly allTypes: string;
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#apply_policy_on_overflow DdosDstEntrySrcDstPairSettings#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#dst_entry_name DdosDstEntrySrcDstPairSettings#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Apply class-list overflow policy upon exceeding dynamic entry count specified for DST entry or each class-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#enable_class_list_overflow DdosDstEntrySrcDstPairSettings#enable_class_list_overflow}
  */
  readonly enableClassListOverflow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#id DdosDstEntrySrcDstPairSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum count for dynamic src-dst entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#max_dynamic_entry_count DdosDstEntrySrcDstPairSettings#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * Specify src prefix length for IPv6 (default: not set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#src_prefix_len DdosDstEntrySrcDstPairSettings#src_prefix_len}
  */
  readonly srcPrefixLen?: number;
  /**
  * No limit for maximum dynamic src entry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#unlimited_dynamic_entry_count DdosDstEntrySrcDstPairSettings#unlimited_dynamic_entry_count}
  */
  readonly unlimitedDynamicEntryCount?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#user_tag DdosDstEntrySrcDstPairSettings#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#uuid DdosDstEntrySrcDstPairSettings#uuid}
  */
  readonly uuid?: string;
  /**
  * l4_type_src_dst_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#l4_type_src_dst_list DdosDstEntrySrcDstPairSettings#l4_type_src_dst_list}
  */
  readonly l4TypeSrcDstList?: DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct[] | cdktf.IResolvable;
}
export interface DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct {
  /**
  * Enable this flag to apply overflow policy when dynamic entry count overflows
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#apply_policy_on_overflow DdosDstEntrySrcDstPairSettings#apply_policy_on_overflow}
  */
  readonly applyPolicyOnOverflow?: number;
  /**
  * Maximum count for dynamic src-dst entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#max_dynamic_entry_count DdosDstEntrySrcDstPairSettings#max_dynamic_entry_count}
  */
  readonly maxDynamicEntryCount?: number;
  /**
  * 'tcp': tcp; 'udp': udp; 'icmp': icmp; 'other': other;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#protocol DdosDstEntrySrcDstPairSettings#protocol}
  */
  readonly protocol: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#user_tag DdosDstEntrySrcDstPairSettings#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#uuid DdosDstEntrySrcDstPairSettings#uuid}
  */
  readonly uuid?: string;
}

export function ddosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructToTerraform(struct?: DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_policy_on_overflow: cdktf.numberToTerraform(struct!.applyPolicyOnOverflow),
    max_dynamic_entry_count: cdktf.numberToTerraform(struct!.maxDynamicEntryCount),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructToHclTerraform(struct?: DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_policy_on_overflow: {
      value: cdktf.numberToHclTerraform(struct!.applyPolicyOnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_dynamic_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxDynamicEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyPolicyOnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyPolicyOnOverflow = this._applyPolicyOnOverflow;
    }
    if (this._maxDynamicEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDynamicEntryCount = this._maxDynamicEntryCount;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applyPolicyOnOverflow = undefined;
      this._maxDynamicEntryCount = undefined;
      this._protocol = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applyPolicyOnOverflow = value.applyPolicyOnOverflow;
      this._maxDynamicEntryCount = value.maxDynamicEntryCount;
      this._protocol = value.protocol;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
}

export class DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructOutputReference {
    return new DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings thunder_ddos_dst_entry_src_dst_pair_settings}
*/
export class DdosDstEntrySrcDstPairSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_src_dst_pair_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstEntrySrcDstPairSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstEntrySrcDstPairSettings to import
  * @param importFromId The id of the existing DdosDstEntrySrcDstPairSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstEntrySrcDstPairSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_src_dst_pair_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_entry_src_dst_pair_settings thunder_ddos_dst_entry_src_dst_pair_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstEntrySrcDstPairSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstEntrySrcDstPairSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_src_dst_pair_settings',
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
    this._age = config.age;
    this._allTypes = config.allTypes;
    this._applyPolicyOnOverflow = config.applyPolicyOnOverflow;
    this._dstEntryName = config.dstEntryName;
    this._enableClassListOverflow = config.enableClassListOverflow;
    this._id = config.id;
    this._maxDynamicEntryCount = config.maxDynamicEntryCount;
    this._srcPrefixLen = config.srcPrefixLen;
    this._unlimitedDynamicEntryCount = config.unlimitedDynamicEntryCount;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._l4TypeSrcDstList.internalValue = config.l4TypeSrcDstList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // all_types - computed: false, optional: false, required: true
  private _allTypes?: string; 
  public get allTypes() {
    return this.getStringAttribute('all_types');
  }
  public set allTypes(value: string) {
    this._allTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allTypesInput() {
    return this._allTypes;
  }

  // apply_policy_on_overflow - computed: false, optional: true, required: false
  private _applyPolicyOnOverflow?: number; 
  public get applyPolicyOnOverflow() {
    return this.getNumberAttribute('apply_policy_on_overflow');
  }
  public set applyPolicyOnOverflow(value: number) {
    this._applyPolicyOnOverflow = value;
  }
  public resetApplyPolicyOnOverflow() {
    this._applyPolicyOnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyPolicyOnOverflowInput() {
    return this._applyPolicyOnOverflow;
  }

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
  }

  // enable_class_list_overflow - computed: false, optional: true, required: false
  private _enableClassListOverflow?: number; 
  public get enableClassListOverflow() {
    return this.getNumberAttribute('enable_class_list_overflow');
  }
  public set enableClassListOverflow(value: number) {
    this._enableClassListOverflow = value;
  }
  public resetEnableClassListOverflow() {
    this._enableClassListOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClassListOverflowInput() {
    return this._enableClassListOverflow;
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

  // max_dynamic_entry_count - computed: false, optional: true, required: false
  private _maxDynamicEntryCount?: number; 
  public get maxDynamicEntryCount() {
    return this.getNumberAttribute('max_dynamic_entry_count');
  }
  public set maxDynamicEntryCount(value: number) {
    this._maxDynamicEntryCount = value;
  }
  public resetMaxDynamicEntryCount() {
    this._maxDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDynamicEntryCountInput() {
    return this._maxDynamicEntryCount;
  }

  // src_prefix_len - computed: false, optional: true, required: false
  private _srcPrefixLen?: number; 
  public get srcPrefixLen() {
    return this.getNumberAttribute('src_prefix_len');
  }
  public set srcPrefixLen(value: number) {
    this._srcPrefixLen = value;
  }
  public resetSrcPrefixLen() {
    this._srcPrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixLenInput() {
    return this._srcPrefixLen;
  }

  // unlimited_dynamic_entry_count - computed: false, optional: true, required: false
  private _unlimitedDynamicEntryCount?: number; 
  public get unlimitedDynamicEntryCount() {
    return this.getNumberAttribute('unlimited_dynamic_entry_count');
  }
  public set unlimitedDynamicEntryCount(value: number) {
    this._unlimitedDynamicEntryCount = value;
  }
  public resetUnlimitedDynamicEntryCount() {
    this._unlimitedDynamicEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlimitedDynamicEntryCountInput() {
    return this._unlimitedDynamicEntryCount;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // l4_type_src_dst_list - computed: false, optional: true, required: false
  private _l4TypeSrcDstList = new DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructList(this, "l4_type_src_dst_list", false);
  public get l4TypeSrcDstList() {
    return this._l4TypeSrcDstList;
  }
  public putL4TypeSrcDstList(value: DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStruct[] | cdktf.IResolvable) {
    this._l4TypeSrcDstList.internalValue = value;
  }
  public resetL4TypeSrcDstList() {
    this._l4TypeSrcDstList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4TypeSrcDstListInput() {
    return this._l4TypeSrcDstList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      age: cdktf.numberToTerraform(this._age),
      all_types: cdktf.stringToTerraform(this._allTypes),
      apply_policy_on_overflow: cdktf.numberToTerraform(this._applyPolicyOnOverflow),
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      enable_class_list_overflow: cdktf.numberToTerraform(this._enableClassListOverflow),
      id: cdktf.stringToTerraform(this._id),
      max_dynamic_entry_count: cdktf.numberToTerraform(this._maxDynamicEntryCount),
      src_prefix_len: cdktf.numberToTerraform(this._srcPrefixLen),
      unlimited_dynamic_entry_count: cdktf.numberToTerraform(this._unlimitedDynamicEntryCount),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      l4_type_src_dst_list: cdktf.listMapper(ddosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructToTerraform, true)(this._l4TypeSrcDstList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      all_types: {
        value: cdktf.stringToHclTerraform(this._allTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_policy_on_overflow: {
        value: cdktf.numberToHclTerraform(this._applyPolicyOnOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_class_list_overflow: {
        value: cdktf.numberToHclTerraform(this._enableClassListOverflow),
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
      max_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._maxDynamicEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_prefix_len: {
        value: cdktf.numberToHclTerraform(this._srcPrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unlimited_dynamic_entry_count: {
        value: cdktf.numberToHclTerraform(this._unlimitedDynamicEntryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      l4_type_src_dst_list: {
        value: cdktf.listMapperHcl(ddosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructToHclTerraform, true)(this._l4TypeSrcDstList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstEntrySrcDstPairSettingsL4TypeSrcDstListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
