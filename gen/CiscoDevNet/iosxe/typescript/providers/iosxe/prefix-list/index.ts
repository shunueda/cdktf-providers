// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#device PrefixList#device}
  */
  readonly device?: string;
  /**
  * Describe about prefix-list entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#prefix_list_description PrefixList#prefix_list_description}
  */
  readonly prefixListDescription?: PrefixListPrefixListDescription[] | cdktf.IResolvable;
  /**
  * Build prefix-lists with name ans seq.no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#prefixes PrefixList#prefixes}
  */
  readonly prefixes?: PrefixListPrefixes[] | cdktf.IResolvable;
}
export interface PrefixListPrefixListDescription {
  /**
  * Prefix-list specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#description PrefixList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#name PrefixList#name}
  */
  readonly name: string;
}

export function prefixListPrefixListDescriptionToTerraform(struct?: PrefixListPrefixListDescription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function prefixListPrefixListDescriptionToHclTerraform(struct?: PrefixListPrefixListDescription | cdktf.IResolvable): any {
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

export class PrefixListPrefixListDescriptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrefixListPrefixListDescription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrefixListPrefixListDescription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
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
}

export class PrefixListPrefixListDescriptionList extends cdktf.ComplexList {
  public internalValue? : PrefixListPrefixListDescription[] | cdktf.IResolvable

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
  public get(index: number): PrefixListPrefixListDescriptionOutputReference {
    return new PrefixListPrefixListDescriptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrefixListPrefixes {
  /**
  * Specify deny or permit action
  *   - Choices: `deny`, `permit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#action PrefixList#action}
  */
  readonly action?: string;
  /**
  * Minimum prefix length to be matched
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#ge PrefixList#ge}
  */
  readonly ge?: number;
  /**
  * IPv4 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#ip PrefixList#ip}
  */
  readonly ip?: string;
  /**
  * Maximum prefix length to be matched
  *   - Range: `1`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#le PrefixList#le}
  */
  readonly le?: number;
  /**
  * Name of the prefix-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#name PrefixList#name}
  */
  readonly name: string;
  /**
  * Seq Number of the prefix-list
  *   - Range: `1`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#seq PrefixList#seq}
  */
  readonly seq: number;
}

export function prefixListPrefixesToTerraform(struct?: PrefixListPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ge: cdktf.numberToTerraform(struct!.ge),
    ip: cdktf.stringToTerraform(struct!.ip),
    le: cdktf.numberToTerraform(struct!.le),
    name: cdktf.stringToTerraform(struct!.name),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function prefixListPrefixesToHclTerraform(struct?: PrefixListPrefixes | cdktf.IResolvable): any {
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    le: {
      value: cdktf.numberToHclTerraform(struct!.le),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrefixListPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrefixListPrefixes | cdktf.IResolvable | undefined {
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
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._le !== undefined) {
      hasAnyValues = true;
      internalValueResult.le = this._le;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrefixListPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ge = undefined;
      this._ip = undefined;
      this._le = undefined;
      this._name = undefined;
      this._seq = undefined;
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
      this._ip = value.ip;
      this._le = value.le;
      this._name = value.name;
      this._seq = value.seq;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // seq - computed: false, optional: false, required: true
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class PrefixListPrefixesList extends cdktf.ComplexList {
  public internalValue? : PrefixListPrefixes[] | cdktf.IResolvable

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
  public get(index: number): PrefixListPrefixesOutputReference {
    return new PrefixListPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list iosxe_prefix_list}
*/
export class PrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrefixList to import
  * @param importFromId The id of the existing PrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/prefix_list iosxe_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrefixListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrefixListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_prefix_list',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._prefixListDescription.internalValue = config.prefixListDescription;
    this._prefixes.internalValue = config.prefixes;
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

  // prefix_list_description - computed: false, optional: true, required: false
  private _prefixListDescription = new PrefixListPrefixListDescriptionList(this, "prefix_list_description", false);
  public get prefixListDescription() {
    return this._prefixListDescription;
  }
  public putPrefixListDescription(value: PrefixListPrefixListDescription[] | cdktf.IResolvable) {
    this._prefixListDescription.internalValue = value;
  }
  public resetPrefixListDescription() {
    this._prefixListDescription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDescriptionInput() {
    return this._prefixListDescription.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new PrefixListPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: PrefixListPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      prefix_list_description: cdktf.listMapper(prefixListPrefixListDescriptionToTerraform, false)(this._prefixListDescription.internalValue),
      prefixes: cdktf.listMapper(prefixListPrefixesToTerraform, false)(this._prefixes.internalValue),
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
      prefix_list_description: {
        value: cdktf.listMapperHcl(prefixListPrefixListDescriptionToHclTerraform, false)(this._prefixListDescription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrefixListPrefixListDescriptionList",
      },
      prefixes: {
        value: cdktf.listMapperHcl(prefixListPrefixesToHclTerraform, false)(this._prefixes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrefixListPrefixesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
