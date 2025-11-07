// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyPrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#description PolicyPrefixList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#id PolicyPrefixList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#name PolicyPrefixList#name}
  */
  readonly name: string;
  /**
  * A list of prefixes. (**DEPRECATED**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#prefixes PolicyPrefixList#prefixes}
  */
  readonly prefixes?: string[];
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#prefix PolicyPrefixList#prefix}
  */
  readonly prefix?: PolicyPrefixListPrefix[] | cdktf.IResolvable;
  /**
  * prefix_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#prefix_range PolicyPrefixList#prefix_range}
  */
  readonly prefixRange?: PolicyPrefixListPrefixRange[] | cdktf.IResolvable;
}
export interface PolicyPrefixListPrefix {
  /**
  * The network prefix in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#cidr PolicyPrefixList#cidr}
  */
  readonly cidr: string;
  /**
  * Description for the prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#description PolicyPrefixList#description}
  */
  readonly description?: string;
}

export function policyPrefixListPrefixToTerraform(struct?: PolicyPrefixListPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    description: cdktf.stringToTerraform(struct!.description),
  }
}


export function policyPrefixListPrefixToHclTerraform(struct?: PolicyPrefixListPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyPrefixListPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyPrefixListPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyPrefixListPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._description = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._description = value.description;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }
}

export class PolicyPrefixListPrefixList extends cdktf.ComplexList {
  public internalValue? : PolicyPrefixListPrefix[] | cdktf.IResolvable

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
  public get(index: number): PolicyPrefixListPrefixOutputReference {
    return new PolicyPrefixListPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyPrefixListPrefixRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#description PolicyPrefixList#description}
  */
  readonly description?: string;
  /**
  * Integer less than `32` but greater than mask `m` in prefix and less than `le`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#ge PolicyPrefixList#ge}
  */
  readonly ge?: number;
  /**
  * Integer less than `32` but greater than mask `m` in prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#le PolicyPrefixList#le}
  */
  readonly le?: number;
  /**
  * A valid CIDR as prefix in `x.x.x.x/m` format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#prefix PolicyPrefixList#prefix}
  */
  readonly prefix: string;
}

export function policyPrefixListPrefixRangeToTerraform(struct?: PolicyPrefixListPrefixRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ge: cdktf.numberToTerraform(struct!.ge),
    le: cdktf.numberToTerraform(struct!.le),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function policyPrefixListPrefixRangeToHclTerraform(struct?: PolicyPrefixListPrefixRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class PolicyPrefixListPrefixRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyPrefixListPrefixRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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

  public set internalValue(value: PolicyPrefixListPrefixRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
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
      this._description = value.description;
      this._ge = value.ge;
      this._le = value.le;
      this._prefix = value.prefix;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

export class PolicyPrefixListPrefixRangeList extends cdktf.ComplexList {
  public internalValue? : PolicyPrefixListPrefixRange[] | cdktf.IResolvable

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
  public get(index: number): PolicyPrefixListPrefixRangeOutputReference {
    return new PolicyPrefixListPrefixRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list alkira_policy_prefix_list}
*/
export class PolicyPrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_policy_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyPrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyPrefixList to import
  * @param importFromId The id of the existing PolicyPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyPrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_policy_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/policy_prefix_list alkira_policy_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyPrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyPrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_policy_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._prefixes = config.prefixes;
    this._prefix.internalValue = config.prefix;
    this._prefixRange.internalValue = config.prefixRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('prefixes'));
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new PolicyPrefixListPrefixList(this, "prefix", false);
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: PolicyPrefixListPrefix[] | cdktf.IResolvable) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }

  // prefix_range - computed: false, optional: true, required: false
  private _prefixRange = new PolicyPrefixListPrefixRangeList(this, "prefix_range", false);
  public get prefixRange() {
    return this._prefixRange;
  }
  public putPrefixRange(value: PolicyPrefixListPrefixRange[] | cdktf.IResolvable) {
    this._prefixRange.internalValue = value;
  }
  public resetPrefixRange() {
    this._prefixRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRangeInput() {
    return this._prefixRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      prefix: cdktf.listMapper(policyPrefixListPrefixToTerraform, true)(this._prefix.internalValue),
      prefix_range: cdktf.listMapper(policyPrefixListPrefixRangeToTerraform, true)(this._prefixRange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prefix: {
        value: cdktf.listMapperHcl(policyPrefixListPrefixToHclTerraform, true)(this._prefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyPrefixListPrefixList",
      },
      prefix_range: {
        value: cdktf.listMapperHcl(policyPrefixListPrefixRangeToHclTerraform, true)(this._prefixRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyPrefixListPrefixRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
