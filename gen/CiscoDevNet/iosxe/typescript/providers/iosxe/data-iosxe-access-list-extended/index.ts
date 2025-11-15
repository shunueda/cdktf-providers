// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAccessListExtendedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended#device DataIosxeAccessListExtended#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended#name DataIosxeAccessListExtended#name}
  */
  readonly name: string;
}
export interface DataIosxeAccessListExtendedEntries {
}

export function dataIosxeAccessListExtendedEntriesToTerraform(struct?: DataIosxeAccessListExtendedEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAccessListExtendedEntriesToHclTerraform(struct?: DataIosxeAccessListExtendedEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAccessListExtendedEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeAccessListExtendedEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAccessListExtendedEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ace_rule_action - computed: true, optional: false, required: false
  public get aceRuleAction() {
    return this.getStringAttribute('ace_rule_action');
  }

  // ace_rule_protocol - computed: true, optional: false, required: false
  public get aceRuleProtocol() {
    return this.getStringAttribute('ace_rule_protocol');
  }

  // ack - computed: true, optional: false, required: false
  public get ack() {
    return this.getBooleanAttribute('ack');
  }

  // destination_any - computed: true, optional: false, required: false
  public get destinationAny() {
    return this.getBooleanAttribute('destination_any');
  }

  // destination_host - computed: true, optional: false, required: false
  public get destinationHost() {
    return this.getStringAttribute('destination_host');
  }

  // destination_object_group - computed: true, optional: false, required: false
  public get destinationObjectGroup() {
    return this.getStringAttribute('destination_object_group');
  }

  // destination_port_equal - computed: true, optional: false, required: false
  public get destinationPortEqual() {
    return this.getStringAttribute('destination_port_equal');
  }

  // destination_port_equal_10 - computed: true, optional: false, required: false
  public get destinationPortEqual10() {
    return this.getStringAttribute('destination_port_equal_10');
  }

  // destination_port_equal_2 - computed: true, optional: false, required: false
  public get destinationPortEqual2() {
    return this.getStringAttribute('destination_port_equal_2');
  }

  // destination_port_equal_3 - computed: true, optional: false, required: false
  public get destinationPortEqual3() {
    return this.getStringAttribute('destination_port_equal_3');
  }

  // destination_port_equal_4 - computed: true, optional: false, required: false
  public get destinationPortEqual4() {
    return this.getStringAttribute('destination_port_equal_4');
  }

  // destination_port_equal_5 - computed: true, optional: false, required: false
  public get destinationPortEqual5() {
    return this.getStringAttribute('destination_port_equal_5');
  }

  // destination_port_equal_6 - computed: true, optional: false, required: false
  public get destinationPortEqual6() {
    return this.getStringAttribute('destination_port_equal_6');
  }

  // destination_port_equal_7 - computed: true, optional: false, required: false
  public get destinationPortEqual7() {
    return this.getStringAttribute('destination_port_equal_7');
  }

  // destination_port_equal_8 - computed: true, optional: false, required: false
  public get destinationPortEqual8() {
    return this.getStringAttribute('destination_port_equal_8');
  }

  // destination_port_equal_9 - computed: true, optional: false, required: false
  public get destinationPortEqual9() {
    return this.getStringAttribute('destination_port_equal_9');
  }

  // destination_port_greater_than - computed: true, optional: false, required: false
  public get destinationPortGreaterThan() {
    return this.getStringAttribute('destination_port_greater_than');
  }

  // destination_port_lesser_than - computed: true, optional: false, required: false
  public get destinationPortLesserThan() {
    return this.getStringAttribute('destination_port_lesser_than');
  }

  // destination_port_range_from - computed: true, optional: false, required: false
  public get destinationPortRangeFrom() {
    return this.getStringAttribute('destination_port_range_from');
  }

  // destination_port_range_to - computed: true, optional: false, required: false
  public get destinationPortRangeTo() {
    return this.getStringAttribute('destination_port_range_to');
  }

  // destination_prefix - computed: true, optional: false, required: false
  public get destinationPrefix() {
    return this.getStringAttribute('destination_prefix');
  }

  // destination_prefix_mask - computed: true, optional: false, required: false
  public get destinationPrefixMask() {
    return this.getStringAttribute('destination_prefix_mask');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // established - computed: true, optional: false, required: false
  public get established() {
    return this.getBooleanAttribute('established');
  }

  // fin - computed: true, optional: false, required: false
  public get fin() {
    return this.getBooleanAttribute('fin');
  }

  // fragments - computed: true, optional: false, required: false
  public get fragments() {
    return this.getBooleanAttribute('fragments');
  }

  // icmp_msg_code - computed: true, optional: false, required: false
  public get icmpMsgCode() {
    return this.getNumberAttribute('icmp_msg_code');
  }

  // icmp_msg_type - computed: true, optional: false, required: false
  public get icmpMsgType() {
    return this.getNumberAttribute('icmp_msg_type');
  }

  // icmp_named_msg_type - computed: true, optional: false, required: false
  public get icmpNamedMsgType() {
    return this.getStringAttribute('icmp_named_msg_type');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // log_input - computed: true, optional: false, required: false
  public get logInput() {
    return this.getBooleanAttribute('log_input');
  }

  // precedence - computed: true, optional: false, required: false
  public get precedence() {
    return this.getStringAttribute('precedence');
  }

  // psh - computed: true, optional: false, required: false
  public get psh() {
    return this.getBooleanAttribute('psh');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // rst - computed: true, optional: false, required: false
  public get rst() {
    return this.getBooleanAttribute('rst');
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }

  // service_object_group - computed: true, optional: false, required: false
  public get serviceObjectGroup() {
    return this.getStringAttribute('service_object_group');
  }

  // source_any - computed: true, optional: false, required: false
  public get sourceAny() {
    return this.getBooleanAttribute('source_any');
  }

  // source_host - computed: true, optional: false, required: false
  public get sourceHost() {
    return this.getStringAttribute('source_host');
  }

  // source_object_group - computed: true, optional: false, required: false
  public get sourceObjectGroup() {
    return this.getStringAttribute('source_object_group');
  }

  // source_port_equal - computed: true, optional: false, required: false
  public get sourcePortEqual() {
    return this.getStringAttribute('source_port_equal');
  }

  // source_port_greater_than - computed: true, optional: false, required: false
  public get sourcePortGreaterThan() {
    return this.getStringAttribute('source_port_greater_than');
  }

  // source_port_lesser_than - computed: true, optional: false, required: false
  public get sourcePortLesserThan() {
    return this.getStringAttribute('source_port_lesser_than');
  }

  // source_port_range_from - computed: true, optional: false, required: false
  public get sourcePortRangeFrom() {
    return this.getStringAttribute('source_port_range_from');
  }

  // source_port_range_to - computed: true, optional: false, required: false
  public get sourcePortRangeTo() {
    return this.getStringAttribute('source_port_range_to');
  }

  // source_prefix - computed: true, optional: false, required: false
  public get sourcePrefix() {
    return this.getStringAttribute('source_prefix');
  }

  // source_prefix_mask - computed: true, optional: false, required: false
  public get sourcePrefixMask() {
    return this.getStringAttribute('source_prefix_mask');
  }

  // syn - computed: true, optional: false, required: false
  public get syn() {
    return this.getBooleanAttribute('syn');
  }

  // tos - computed: true, optional: false, required: false
  public get tos() {
    return this.getStringAttribute('tos');
  }

  // urg - computed: true, optional: false, required: false
  public get urg() {
    return this.getBooleanAttribute('urg');
  }
}

export class DataIosxeAccessListExtendedEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAccessListExtendedEntriesOutputReference {
    return new DataIosxeAccessListExtendedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended iosxe_access_list_extended}
*/
export class DataIosxeAccessListExtended extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_extended";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAccessListExtended resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAccessListExtended to import
  * @param importFromId The id of the existing DataIosxeAccessListExtended that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAccessListExtended to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_extended", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/access_list_extended iosxe_access_list_extended} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAccessListExtendedConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAccessListExtendedConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_extended',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new DataIosxeAccessListExtendedEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
