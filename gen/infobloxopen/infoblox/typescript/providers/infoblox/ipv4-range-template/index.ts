// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4RangeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * This flag controls whether this template can be used to create network objects in a cloud-computing deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#cloud_api_compatible Ipv4RangeTemplate#cloud_api_compatible}
  */
  readonly cloudApiCompatible?: boolean | cdktf.IResolvable;
  /**
  * Comment for the Range Template record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#comment Ipv4RangeTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes of the  Range Template Record to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#ext_attrs Ipv4RangeTemplate#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * The name of the failover association: the server in this failover association will serve the IPv4 range in case the main server is out of service. `server_association_type` must be set to ‘FAILOVER’ or ‘FAILOVER_MS’ if you want the failover association specified here to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#failover_association Ipv4RangeTemplate#failover_association}
  */
  readonly failoverAssociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#id Ipv4RangeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The member that will provide service for this range. server_association_type needs to be set to ‘MEMBER’ if you wantthe server specified here to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#member Ipv4RangeTemplate#member}
  */
  readonly member?: { [key: string]: string };
  /**
  * The Microsoft server that will provide service for this range. `server_association_type` needs to be set to `MS_SERVER` +if you want the server specified here to serve the range. For searching by this field you should use a HTTP method that contains abody (POST or PUT) with MS DHCP server structure and the request should have option _method=GET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#ms_server Ipv4RangeTemplate#ms_server}
  */
  readonly msServer?: string;
  /**
  * Name of the Range Template record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#name Ipv4RangeTemplate#name}
  */
  readonly name: string;
  /**
  * The number of addresses for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#number_of_addresses Ipv4RangeTemplate#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * The start address offset for the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#offset Ipv4RangeTemplate#offset}
  */
  readonly offset: number;
  /**
  * The type of server that is going to serve the range. Valid values are: `FAILOVER`, `MEMBER`, `MS_FAILOVER`, `MS_SERVER`, `NONE`. Default value is `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#server_association_type Ipv4RangeTemplate#server_association_type}
  */
  readonly serverAssociationType?: string;
  /**
  * Use flag for options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#use_options Ipv4RangeTemplate#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#options Ipv4RangeTemplate#options}
  */
  readonly options?: Ipv4RangeTemplateOptions[] | cdktf.IResolvable;
}
export interface Ipv4RangeTemplateOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#name Ipv4RangeTemplate#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#num Ipv4RangeTemplate#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: `routers`, `router-templates`, `domain-name-servers`, `domain-name`, `broadcast-address`, `broadcast-address-offset`, `dhcp-lease-time`, `dhcp6.name-servers`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#use_option Ipv4RangeTemplate#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#value Ipv4RangeTemplate#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#vendor_class Ipv4RangeTemplate#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipv4RangeTemplateOptionsToTerraform(struct?: Ipv4RangeTemplateOptions | cdktf.IResolvable): any {
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


export function ipv4RangeTemplateOptionsToHclTerraform(struct?: Ipv4RangeTemplateOptions | cdktf.IResolvable): any {
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

export class Ipv4RangeTemplateOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4RangeTemplateOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Ipv4RangeTemplateOptions | cdktf.IResolvable | undefined) {
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

export class Ipv4RangeTemplateOptionsList extends cdktf.ComplexList {
  public internalValue? : Ipv4RangeTemplateOptions[] | cdktf.IResolvable

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
  public get(index: number): Ipv4RangeTemplateOptionsOutputReference {
    return new Ipv4RangeTemplateOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template infoblox_ipv4_range_template}
*/
export class Ipv4RangeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ipv4_range_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4RangeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4RangeTemplate to import
  * @param importFromId The id of the existing Ipv4RangeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4RangeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ipv4_range_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_range_template infoblox_ipv4_range_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4RangeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4RangeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ipv4_range_template',
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
    this._cloudApiCompatible = config.cloudApiCompatible;
    this._comment = config.comment;
    this._extAttrs = config.extAttrs;
    this._failoverAssociation = config.failoverAssociation;
    this._id = config.id;
    this._member = config.member;
    this._msServer = config.msServer;
    this._name = config.name;
    this._numberOfAddresses = config.numberOfAddresses;
    this._offset = config.offset;
    this._serverAssociationType = config.serverAssociationType;
    this._useOptions = config.useOptions;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_api_compatible - computed: false, optional: true, required: false
  private _cloudApiCompatible?: boolean | cdktf.IResolvable; 
  public get cloudApiCompatible() {
    return this.getBooleanAttribute('cloud_api_compatible');
  }
  public set cloudApiCompatible(value: boolean | cdktf.IResolvable) {
    this._cloudApiCompatible = value;
  }
  public resetCloudApiCompatible() {
    this._cloudApiCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudApiCompatibleInput() {
    return this._cloudApiCompatible;
  }

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

  // failover_association - computed: false, optional: true, required: false
  private _failoverAssociation?: string; 
  public get failoverAssociation() {
    return this.getStringAttribute('failover_association');
  }
  public set failoverAssociation(value: string) {
    this._failoverAssociation = value;
  }
  public resetFailoverAssociation() {
    this._failoverAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAssociationInput() {
    return this._failoverAssociation;
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

  // member - computed: false, optional: true, required: false
  private _member?: { [key: string]: string }; 
  public get member() {
    return this.getStringMapAttribute('member');
  }
  public set member(value: { [key: string]: string }) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // ms_server - computed: false, optional: true, required: false
  private _msServer?: string; 
  public get msServer() {
    return this.getStringAttribute('ms_server');
  }
  public set msServer(value: string) {
    this._msServer = value;
  }
  public resetMsServer() {
    this._msServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerInput() {
    return this._msServer;
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

  // number_of_addresses - computed: false, optional: false, required: true
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // offset - computed: false, optional: false, required: true
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // server_association_type - computed: false, optional: true, required: false
  private _serverAssociationType?: string; 
  public get serverAssociationType() {
    return this.getStringAttribute('server_association_type');
  }
  public set serverAssociationType(value: string) {
    this._serverAssociationType = value;
  }
  public resetServerAssociationType() {
    this._serverAssociationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAssociationTypeInput() {
    return this._serverAssociationType;
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
  private _options = new Ipv4RangeTemplateOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: Ipv4RangeTemplateOptions[] | cdktf.IResolvable) {
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
      cloud_api_compatible: cdktf.booleanToTerraform(this._cloudApiCompatible),
      comment: cdktf.stringToTerraform(this._comment),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      failover_association: cdktf.stringToTerraform(this._failoverAssociation),
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.hashMapper(cdktf.stringToTerraform)(this._member),
      ms_server: cdktf.stringToTerraform(this._msServer),
      name: cdktf.stringToTerraform(this._name),
      number_of_addresses: cdktf.numberToTerraform(this._numberOfAddresses),
      offset: cdktf.numberToTerraform(this._offset),
      server_association_type: cdktf.stringToTerraform(this._serverAssociationType),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      options: cdktf.listMapper(ipv4RangeTemplateOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_api_compatible: {
        value: cdktf.booleanToHclTerraform(this._cloudApiCompatible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_association: {
        value: cdktf.stringToHclTerraform(this._failoverAssociation),
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
      member: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._member),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ms_server: {
        value: cdktf.stringToHclTerraform(this._msServer),
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
      number_of_addresses: {
        value: cdktf.numberToHclTerraform(this._numberOfAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_association_type: {
        value: cdktf.stringToHclTerraform(this._serverAssociationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdktf.listMapperHcl(ipv4RangeTemplateOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4RangeTemplateOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
