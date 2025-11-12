// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6PrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#device Ipv6PrefixList#device}
  */
  readonly device?: string;
  /**
  * Name of a prefix list - maximum 128 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#prefix_list_name Ipv6PrefixList#prefix_list_name}
  */
  readonly prefixListName: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#sequences Ipv6PrefixList#sequences}
  */
  readonly sequences?: Ipv6PrefixListSequences[] | cdktf.IResolvable;
}
export interface Ipv6PrefixListSequences {
  /**
  * Mask length of IPv6 address
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#mask Ipv6PrefixList#mask}
  */
  readonly mask?: number;
  /**
  * Exact prefix length to be matched
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#match_prefix_length_eq Ipv6PrefixList#match_prefix_length_eq}
  */
  readonly matchPrefixLengthEq?: number;
  /**
  * Minimum prefix length to be matched
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#match_prefix_length_ge Ipv6PrefixList#match_prefix_length_ge}
  */
  readonly matchPrefixLengthGe?: number;
  /**
  * Maximum prefix length to be matched
  *   - Range: `0`-`128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#match_prefix_length_le Ipv6PrefixList#match_prefix_length_le}
  */
  readonly matchPrefixLengthLe?: number;
  /**
  * specify the type to be either deny (or) permit
  *   - Choices: `deny`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#permission Ipv6PrefixList#permission}
  */
  readonly permission?: string;
  /**
  * IPv6 address prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#prefix Ipv6PrefixList#prefix}
  */
  readonly prefix?: string;
  /**
  * Comments for prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#remark Ipv6PrefixList#remark}
  */
  readonly remark?: string;
  /**
  * Sequence number
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#sequence_number Ipv6PrefixList#sequence_number}
  */
  readonly sequenceNumber: number;
}

export function ipv6PrefixListSequencesToTerraform(struct?: Ipv6PrefixListSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.numberToTerraform(struct!.mask),
    match_prefix_length_eq: cdktf.numberToTerraform(struct!.matchPrefixLengthEq),
    match_prefix_length_ge: cdktf.numberToTerraform(struct!.matchPrefixLengthGe),
    match_prefix_length_le: cdktf.numberToTerraform(struct!.matchPrefixLengthLe),
    permission: cdktf.stringToTerraform(struct!.permission),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    remark: cdktf.stringToTerraform(struct!.remark),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
  }
}


export function ipv6PrefixListSequencesToHclTerraform(struct?: Ipv6PrefixListSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.numberToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_prefix_length_eq: {
      value: cdktf.numberToHclTerraform(struct!.matchPrefixLengthEq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_prefix_length_ge: {
      value: cdktf.numberToHclTerraform(struct!.matchPrefixLengthGe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_prefix_length_le: {
      value: cdktf.numberToHclTerraform(struct!.matchPrefixLengthLe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv6PrefixListSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv6PrefixListSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._matchPrefixLengthEq !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrefixLengthEq = this._matchPrefixLengthEq;
    }
    if (this._matchPrefixLengthGe !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrefixLengthGe = this._matchPrefixLengthGe;
    }
    if (this._matchPrefixLengthLe !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPrefixLengthLe = this._matchPrefixLengthLe;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6PrefixListSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._matchPrefixLengthEq = undefined;
      this._matchPrefixLengthGe = undefined;
      this._matchPrefixLengthLe = undefined;
      this._permission = undefined;
      this._prefix = undefined;
      this._remark = undefined;
      this._sequenceNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._matchPrefixLengthEq = value.matchPrefixLengthEq;
      this._matchPrefixLengthGe = value.matchPrefixLengthGe;
      this._matchPrefixLengthLe = value.matchPrefixLengthLe;
      this._permission = value.permission;
      this._prefix = value.prefix;
      this._remark = value.remark;
      this._sequenceNumber = value.sequenceNumber;
    }
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: number; 
  public get mask() {
    return this.getNumberAttribute('mask');
  }
  public set mask(value: number) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // match_prefix_length_eq - computed: false, optional: true, required: false
  private _matchPrefixLengthEq?: number; 
  public get matchPrefixLengthEq() {
    return this.getNumberAttribute('match_prefix_length_eq');
  }
  public set matchPrefixLengthEq(value: number) {
    this._matchPrefixLengthEq = value;
  }
  public resetMatchPrefixLengthEq() {
    this._matchPrefixLengthEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrefixLengthEqInput() {
    return this._matchPrefixLengthEq;
  }

  // match_prefix_length_ge - computed: false, optional: true, required: false
  private _matchPrefixLengthGe?: number; 
  public get matchPrefixLengthGe() {
    return this.getNumberAttribute('match_prefix_length_ge');
  }
  public set matchPrefixLengthGe(value: number) {
    this._matchPrefixLengthGe = value;
  }
  public resetMatchPrefixLengthGe() {
    this._matchPrefixLengthGe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrefixLengthGeInput() {
    return this._matchPrefixLengthGe;
  }

  // match_prefix_length_le - computed: false, optional: true, required: false
  private _matchPrefixLengthLe?: number; 
  public get matchPrefixLengthLe() {
    return this.getNumberAttribute('match_prefix_length_le');
  }
  public set matchPrefixLengthLe(value: number) {
    this._matchPrefixLengthLe = value;
  }
  public resetMatchPrefixLengthLe() {
    this._matchPrefixLengthLe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPrefixLengthLeInput() {
    return this._matchPrefixLengthLe;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }
}

export class Ipv6PrefixListSequencesList extends cdktf.ComplexList {
  public internalValue? : Ipv6PrefixListSequences[] | cdktf.IResolvable

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
  public get(index: number): Ipv6PrefixListSequencesOutputReference {
    return new Ipv6PrefixListSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list iosxr_ipv6_prefix_list}
*/
export class Ipv6PrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ipv6_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6PrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6PrefixList to import
  * @param importFromId The id of the existing Ipv6PrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6PrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ipv6_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/ipv6_prefix_list iosxr_ipv6_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6PrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6PrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ipv6_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._prefixListName = config.prefixListName;
    this._sequences.internalValue = config.sequences;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix_list_name - computed: false, optional: false, required: true
  private _prefixListName?: string; 
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName;
  }

  // sequences - computed: false, optional: true, required: false
  private _sequences = new Ipv6PrefixListSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: Ipv6PrefixListSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  public resetSequences() {
    this._sequences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      prefix_list_name: cdktf.stringToTerraform(this._prefixListName),
      sequences: cdktf.listMapper(ipv6PrefixListSequencesToTerraform, false)(this._sequences.internalValue),
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
      prefix_list_name: {
        value: cdktf.stringToHclTerraform(this._prefixListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sequences: {
        value: cdktf.listMapperHcl(ipv6PrefixListSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6PrefixListSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
