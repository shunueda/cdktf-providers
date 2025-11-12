// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of all addresses associated with the IPAM host, which may be in different IP spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#addresses IpamHost#addresses}
  */
  readonly addresses?: IpamHostAddresses[] | cdktf.IResolvable;
  /**
  * This flag specifies if resource records have to be auto generated for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#auto_generate_records IpamHost#auto_generate_records}
  */
  readonly autoGenerateRecords?: boolean | cdktf.IResolvable;
  /**
  * The description for the IPAM host. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#comment IpamHost#comment}
  */
  readonly comment?: string;
  /**
  * The name records to be generated for the host.  This field is required if _auto_generate_records_ is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#host_names IpamHost#host_names}
  */
  readonly hostNames?: IpamHostHostNames[] | cdktf.IResolvable;
  /**
  * The name of the IPAM host. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#name IpamHost#name}
  */
  readonly name: string;
  /**
  * The tags for the IPAM host in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#tags IpamHost#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface IpamHostAddresses {
  /**
  * Field usage depends on the operation:
  *   * For read operation, _address_ of the _Address_ corresponding to the _ref_ resource.
  *   * For write operation, _address_ to be created if the _Address_ does not exist. Required if _ref_ is not set on write:
  *     * If the _Address_ already exists and is already pointing to the right _Host_, the operation proceeds.
  *     * If the _Address_ already exists and is pointing to a different _Host, the operation must abort.
  *     * If the _Address_ already exists and is not pointing to any _Host_, it is linked to the _Host_.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#address IpamHost#address}
  */
  readonly address?: string;
  /**
  * The resource identifier for the network container where the next available address should be generated for the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#next_available_id IpamHost#next_available_id}
  */
  readonly nextAvailableId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#ref IpamHost#ref}
  */
  readonly ref?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#space IpamHost#space}
  */
  readonly space?: string;
}

export function ipamHostAddressesToTerraform(struct?: IpamHostAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    next_available_id: cdktf.stringToTerraform(struct!.nextAvailableId),
    ref: cdktf.stringToTerraform(struct!.ref),
    space: cdktf.stringToTerraform(struct!.space),
  }
}


export function ipamHostAddressesToHclTerraform(struct?: IpamHostAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_available_id: {
      value: cdktf.stringToHclTerraform(struct!.nextAvailableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space: {
      value: cdktf.stringToHclTerraform(struct!.space),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamHostAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamHostAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._nextAvailableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextAvailableId = this._nextAvailableId;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._space !== undefined) {
      hasAnyValues = true;
      internalValueResult.space = this._space;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamHostAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._nextAvailableId = undefined;
      this._ref = undefined;
      this._space = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._nextAvailableId = value.nextAvailableId;
      this._ref = value.ref;
      this._space = value.space;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // next_available_id - computed: false, optional: true, required: false
  private _nextAvailableId?: string; 
  public get nextAvailableId() {
    return this.getStringAttribute('next_available_id');
  }
  public set nextAvailableId(value: string) {
    this._nextAvailableId = value;
  }
  public resetNextAvailableId() {
    this._nextAvailableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAvailableIdInput() {
    return this._nextAvailableId;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // space - computed: true, optional: true, required: false
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  public resetSpace() {
    this._space = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }
}

export class IpamHostAddressesList extends cdktf.ComplexList {
  public internalValue? : IpamHostAddresses[] | cdktf.IResolvable

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
  public get(index: number): IpamHostAddressesOutputReference {
    return new IpamHostAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamHostHostNames {
  /**
  * When _true_, the name is treated as an alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#alias IpamHost#alias}
  */
  readonly alias?: boolean | cdktf.IResolvable;
  /**
  * A name for the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#name IpamHost#name}
  */
  readonly name: string;
  /**
  * When _true_, the name field is treated as primary name. There must be one and only one primary name in the list of host names. The primary name will be treated as the canonical name for all the aliases. PTR record will be generated only for the primary name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#primary_name IpamHost#primary_name}
  */
  readonly primaryName?: boolean | cdktf.IResolvable;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#zone IpamHost#zone}
  */
  readonly zone: string;
}

export function ipamHostHostNamesToTerraform(struct?: IpamHostHostNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.booleanToTerraform(struct!.alias),
    name: cdktf.stringToTerraform(struct!.name),
    primary_name: cdktf.booleanToTerraform(struct!.primaryName),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function ipamHostHostNamesToHclTerraform(struct?: IpamHostHostNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.booleanToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_name: {
      value: cdktf.booleanToHclTerraform(struct!.primaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamHostHostNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamHostHostNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryName = this._primaryName;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamHostHostNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._name = undefined;
      this._primaryName = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._name = value.name;
      this._primaryName = value.primaryName;
      this._zone = value.zone;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: boolean | cdktf.IResolvable; 
  public get alias() {
    return this.getBooleanAttribute('alias');
  }
  public set alias(value: boolean | cdktf.IResolvable) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // primary_name - computed: false, optional: true, required: false
  private _primaryName?: boolean | cdktf.IResolvable; 
  public get primaryName() {
    return this.getBooleanAttribute('primary_name');
  }
  public set primaryName(value: boolean | cdktf.IResolvable) {
    this._primaryName = value;
  }
  public resetPrimaryName() {
    this._primaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class IpamHostHostNamesList extends cdktf.ComplexList {
  public internalValue? : IpamHostHostNames[] | cdktf.IResolvable

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
  public get(index: number): IpamHostHostNamesOutputReference {
    return new IpamHostHostNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host bloxone_ipam_host}
*/
export class IpamHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_ipam_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamHost to import
  * @param importFromId The id of the existing IpamHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_ipam_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/resources/ipam_host bloxone_ipam_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamHostConfig
  */
  public constructor(scope: Construct, id: string, config: IpamHostConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_ipam_host',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3',
        providerVersionConstraint: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addresses.internalValue = config.addresses;
    this._autoGenerateRecords = config.autoGenerateRecords;
    this._comment = config.comment;
    this._hostNames.internalValue = config.hostNames;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: false, optional: true, required: false
  private _addresses = new IpamHostAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: IpamHostAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // auto_generate_records - computed: true, optional: true, required: false
  private _autoGenerateRecords?: boolean | cdktf.IResolvable; 
  public get autoGenerateRecords() {
    return this.getBooleanAttribute('auto_generate_records');
  }
  public set autoGenerateRecords(value: boolean | cdktf.IResolvable) {
    this._autoGenerateRecords = value;
  }
  public resetAutoGenerateRecords() {
    this._autoGenerateRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGenerateRecordsInput() {
    return this._autoGenerateRecords;
  }

  // comment - computed: true, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // host_names - computed: false, optional: true, required: false
  private _hostNames = new IpamHostHostNamesList(this, "host_names", false);
  public get hostNames() {
    return this._hostNames;
  }
  public putHostNames(value: IpamHostHostNames[] | cdktf.IResolvable) {
    this._hostNames.internalValue = value;
  }
  public resetHostNames() {
    this._hostNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNamesInput() {
    return this._hostNames.internalValue;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addresses: cdktf.listMapper(ipamHostAddressesToTerraform, false)(this._addresses.internalValue),
      auto_generate_records: cdktf.booleanToTerraform(this._autoGenerateRecords),
      comment: cdktf.stringToTerraform(this._comment),
      host_names: cdktf.listMapper(ipamHostHostNamesToTerraform, false)(this._hostNames.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(ipamHostAddressesToHclTerraform, false)(this._addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamHostAddressesList",
      },
      auto_generate_records: {
        value: cdktf.booleanToHclTerraform(this._autoGenerateRecords),
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
      host_names: {
        value: cdktf.listMapperHcl(ipamHostHostNamesToHclTerraform, false)(this._hostNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpamHostHostNamesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
