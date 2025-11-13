// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4SharedNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The comment for the IPv4 shared network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#comment Ipv4SharedNetwork#comment}
  */
  readonly comment?: string;
  /**
  * The disable flag for the IPv4 shared network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#disable Ipv4SharedNetwork#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the IPv4 Shared Network record to be added/updated, as a map in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#ext_attrs Ipv4SharedNetwork#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#id Ipv4SharedNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IPv4 shared network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#name Ipv4SharedNetwork#name}
  */
  readonly name: string;
  /**
  * The name of the network view in which this shared network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#network_view Ipv4SharedNetwork#network_view}
  */
  readonly networkView?: string;
  /**
  * A list of networks belonging to the shared network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#networks Ipv4SharedNetwork#networks}
  */
  readonly networks: string[];
  /**
  * Use flag for options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#use_options Ipv4SharedNetwork#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#options Ipv4SharedNetwork#options}
  */
  readonly options?: Ipv4SharedNetworkOptions[] | cdktf.IResolvable;
}
export interface Ipv4SharedNetworkOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#name Ipv4SharedNetwork#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#num Ipv4SharedNetwork#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: `routers`, `router-templates`, `domain-name-servers`, `domain-name`, `broadcast-address`, `broadcast-address-offset`, `dhcp-lease-time`, `dhcp6.name-servers`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#use_option Ipv4SharedNetwork#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#value Ipv4SharedNetwork#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#vendor_class Ipv4SharedNetwork#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipv4SharedNetworkOptionsToTerraform(struct?: Ipv4SharedNetworkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function ipv4SharedNetworkOptionsToHclTerraform(struct?: Ipv4SharedNetworkOptions | cdktf.IResolvable): any {
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
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4SharedNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4SharedNetworkOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4SharedNetworkOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
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

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: false, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: false, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class Ipv4SharedNetworkOptionsList extends cdktf.ComplexList {
  public internalValue? : Ipv4SharedNetworkOptions[] | cdktf.IResolvable

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
  public get(index: number): Ipv4SharedNetworkOptionsOutputReference {
    return new Ipv4SharedNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network infoblox_ipv4_shared_network}
*/
export class Ipv4SharedNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ipv4_shared_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4SharedNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4SharedNetwork to import
  * @param importFromId The id of the existing Ipv4SharedNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4SharedNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ipv4_shared_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_shared_network infoblox_ipv4_shared_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4SharedNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4SharedNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ipv4_shared_network',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0',
        providerVersionConstraint: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._id = config.id;
    this._name = config.name;
    this._networkView = config.networkView;
    this._networks = config.networks;
    this._useOptions = config.useOptions;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
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

  // network_view - computed: false, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_options - computed: false, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // options - computed: false, optional: true, required: false
  private _options = new Ipv4SharedNetworkOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: Ipv4SharedNetworkOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_view: cdktf.stringToTerraform(this._networkView),
      networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networks),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      options: cdktf.listMapper(ipv4SharedNetworkOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
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
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdktf.listMapperHcl(ipv4SharedNetworkOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4SharedNetworkOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
