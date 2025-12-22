// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeAccessListRoleBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based#device DataIosxeAccessListRoleBased#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based#name DataIosxeAccessListRoleBased#name}
  */
  readonly name: string;
}
export interface DataIosxeAccessListRoleBasedEntries {
}

export function dataIosxeAccessListRoleBasedEntriesToTerraform(struct?: DataIosxeAccessListRoleBasedEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeAccessListRoleBasedEntriesToHclTerraform(struct?: DataIosxeAccessListRoleBasedEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeAccessListRoleBasedEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeAccessListRoleBasedEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeAccessListRoleBasedEntries | undefined) {
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

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // log_input - computed: true, optional: false, required: false
  public get logInput() {
    return this.getBooleanAttribute('log_input');
  }

  // match_all_minusack - computed: true, optional: false, required: false
  public get matchAllMinusack() {
    return this.getBooleanAttribute('match_all_minusack');
  }

  // match_all_minusfin - computed: true, optional: false, required: false
  public get matchAllMinusfin() {
    return this.getBooleanAttribute('match_all_minusfin');
  }

  // match_all_minuspsh - computed: true, optional: false, required: false
  public get matchAllMinuspsh() {
    return this.getBooleanAttribute('match_all_minuspsh');
  }

  // match_all_minusrst - computed: true, optional: false, required: false
  public get matchAllMinusrst() {
    return this.getBooleanAttribute('match_all_minusrst');
  }

  // match_all_minussyn - computed: true, optional: false, required: false
  public get matchAllMinussyn() {
    return this.getBooleanAttribute('match_all_minussyn');
  }

  // match_all_minusurg - computed: true, optional: false, required: false
  public get matchAllMinusurg() {
    return this.getBooleanAttribute('match_all_minusurg');
  }

  // match_all_plusack - computed: true, optional: false, required: false
  public get matchAllPlusack() {
    return this.getBooleanAttribute('match_all_plusack');
  }

  // match_all_plusfin - computed: true, optional: false, required: false
  public get matchAllPlusfin() {
    return this.getBooleanAttribute('match_all_plusfin');
  }

  // match_all_pluspsh - computed: true, optional: false, required: false
  public get matchAllPluspsh() {
    return this.getBooleanAttribute('match_all_pluspsh');
  }

  // match_all_plusrst - computed: true, optional: false, required: false
  public get matchAllPlusrst() {
    return this.getBooleanAttribute('match_all_plusrst');
  }

  // match_all_plussyn - computed: true, optional: false, required: false
  public get matchAllPlussyn() {
    return this.getBooleanAttribute('match_all_plussyn');
  }

  // match_all_plusurg - computed: true, optional: false, required: false
  public get matchAllPlusurg() {
    return this.getBooleanAttribute('match_all_plusurg');
  }

  // match_any_minusack - computed: true, optional: false, required: false
  public get matchAnyMinusack() {
    return this.getBooleanAttribute('match_any_minusack');
  }

  // match_any_minusfin - computed: true, optional: false, required: false
  public get matchAnyMinusfin() {
    return this.getBooleanAttribute('match_any_minusfin');
  }

  // match_any_minuspsh - computed: true, optional: false, required: false
  public get matchAnyMinuspsh() {
    return this.getBooleanAttribute('match_any_minuspsh');
  }

  // match_any_minusrst - computed: true, optional: false, required: false
  public get matchAnyMinusrst() {
    return this.getBooleanAttribute('match_any_minusrst');
  }

  // match_any_minussyn - computed: true, optional: false, required: false
  public get matchAnyMinussyn() {
    return this.getBooleanAttribute('match_any_minussyn');
  }

  // match_any_minusurg - computed: true, optional: false, required: false
  public get matchAnyMinusurg() {
    return this.getBooleanAttribute('match_any_minusurg');
  }

  // match_any_plusack - computed: true, optional: false, required: false
  public get matchAnyPlusack() {
    return this.getBooleanAttribute('match_any_plusack');
  }

  // match_any_plusfin - computed: true, optional: false, required: false
  public get matchAnyPlusfin() {
    return this.getBooleanAttribute('match_any_plusfin');
  }

  // match_any_pluspsh - computed: true, optional: false, required: false
  public get matchAnyPluspsh() {
    return this.getBooleanAttribute('match_any_pluspsh');
  }

  // match_any_plusrst - computed: true, optional: false, required: false
  public get matchAnyPlusrst() {
    return this.getBooleanAttribute('match_any_plusrst');
  }

  // match_any_plussyn - computed: true, optional: false, required: false
  public get matchAnyPlussyn() {
    return this.getBooleanAttribute('match_any_plussyn');
  }

  // match_any_plusurg - computed: true, optional: false, required: false
  public get matchAnyPlusurg() {
    return this.getBooleanAttribute('match_any_plusurg');
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    return this.getStringAttribute('option');
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

  // syn - computed: true, optional: false, required: false
  public get syn() {
    return this.getBooleanAttribute('syn');
  }

  // time_range - computed: true, optional: false, required: false
  public get timeRange() {
    return this.getStringAttribute('time_range');
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

export class DataIosxeAccessListRoleBasedEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeAccessListRoleBasedEntriesOutputReference {
    return new DataIosxeAccessListRoleBasedEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based iosxe_access_list_role_based}
*/
export class DataIosxeAccessListRoleBased extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_access_list_role_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeAccessListRoleBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeAccessListRoleBased to import
  * @param importFromId The id of the existing DataIosxeAccessListRoleBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeAccessListRoleBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_access_list_role_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/access_list_role_based iosxe_access_list_role_based} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeAccessListRoleBasedConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeAccessListRoleBasedConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_access_list_role_based',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
  private _entries = new DataIosxeAccessListRoleBasedEntriesList(this, "entries", false);
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
