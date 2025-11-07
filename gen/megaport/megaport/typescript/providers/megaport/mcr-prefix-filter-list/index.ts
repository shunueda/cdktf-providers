// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface McrPrefixFilterListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address standard of the IP network addresses in the prefix filter list. Valid values are 'IPv4' and 'IPv6' (case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#address_family McrPrefixFilterList#address_family}
  */
  readonly addressFamily: string;
  /**
  * Description of the prefix filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#description McrPrefixFilterList#description}
  */
  readonly description: string;
  /**
  * Entries in the prefix filter list. Must contain between 1 and 200 entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#entries McrPrefixFilterList#entries}
  */
  readonly entries: McrPrefixFilterListEntries[] | cdktf.IResolvable;
  /**
  * The UID of the MCR instance this prefix filter list belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#mcr_id McrPrefixFilterList#mcr_id}
  */
  readonly mcrId: string;
}
export interface McrPrefixFilterListEntries {
  /**
  * The action to take for the network address in the filter list. Valid values are 'permit' and 'deny'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#action McrPrefixFilterList#action}
  */
  readonly action: string;
  /**
  * The minimum starting prefix length to be matched. Valid values are from 0 to 32 (IPv4), or 0 to 128 (IPv6). If not specified, defaults to the prefix length of the network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#ge McrPrefixFilterList#ge}
  */
  readonly ge?: number;
  /**
  * The maximum ending prefix length to be matched. Valid values are from 0 to 32 (IPv4), or 0 to 128 (IPv6). Must be greater than or equal to 'ge'. If not specified, defaults to 32 (IPv4) or 128 (IPv6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#le McrPrefixFilterList#le}
  */
  readonly le?: number;
  /**
  * The network address of the prefix filter list entry in CIDR notation (e.g., '10.0.1.0/24').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#prefix McrPrefixFilterList#prefix}
  */
  readonly prefix: string;
}

export function mcrPrefixFilterListEntriesToTerraform(struct?: McrPrefixFilterListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ge: cdktf.numberToTerraform(struct!.ge),
    le: cdktf.numberToTerraform(struct!.le),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function mcrPrefixFilterListEntriesToHclTerraform(struct?: McrPrefixFilterListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ge: {
      value: cdktf.numberToHclTerraform(struct!.ge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    le: {
      value: cdktf.numberToHclTerraform(struct!.le),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class McrPrefixFilterListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): McrPrefixFilterListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ge = this._ge;
    }
    if (this._le !== undefined) {
      hasAnyValues = true;
      internalValueResult.le = this._le;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: McrPrefixFilterListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ge = undefined;
      this._le = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ge = value.ge;
      this._le = value.le;
      this._prefix = value.prefix;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ge - computed: false, optional: true, required: false
  private _ge?: number; 
  public get ge() {
    return this.getNumberAttribute('ge');
  }
  public set ge(value: number) {
    this._ge = value;
  }
  public resetGe() {
    this._ge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geInput() {
    return this._ge;
  }

  // le - computed: false, optional: true, required: false
  private _le?: number; 
  public get le() {
    return this.getNumberAttribute('le');
  }
  public set le(value: number) {
    this._le = value;
  }
  public resetLe() {
    this._le = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leInput() {
    return this._le;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class McrPrefixFilterListEntriesList extends cdktf.ComplexList {
  public internalValue? : McrPrefixFilterListEntries[] | cdktf.IResolvable

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
  public get(index: number): McrPrefixFilterListEntriesOutputReference {
    return new McrPrefixFilterListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list megaport_mcr_prefix_filter_list}
*/
export class McrPrefixFilterList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_mcr_prefix_filter_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a McrPrefixFilterList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the McrPrefixFilterList to import
  * @param importFromId The id of the existing McrPrefixFilterList that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the McrPrefixFilterList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_mcr_prefix_filter_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr_prefix_filter_list megaport_mcr_prefix_filter_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options McrPrefixFilterListConfig
  */
  public constructor(scope: Construct, id: string, config: McrPrefixFilterListConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_mcr_prefix_filter_list',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._mcrId = config.mcrId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // entries - computed: false, optional: false, required: true
  private _entries = new McrPrefixFilterListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: McrPrefixFilterListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // mcr_id - computed: false, optional: false, required: true
  private _mcrId?: string; 
  public get mcrId() {
    return this.getStringAttribute('mcr_id');
  }
  public set mcrId(value: string) {
    this._mcrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcrIdInput() {
    return this._mcrId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(mcrPrefixFilterListEntriesToTerraform, false)(this._entries.internalValue),
      mcr_id: cdktf.stringToTerraform(this._mcrId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(mcrPrefixFilterListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "McrPrefixFilterListEntriesList",
      },
      mcr_id: {
        value: cdktf.stringToHclTerraform(this._mcrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
