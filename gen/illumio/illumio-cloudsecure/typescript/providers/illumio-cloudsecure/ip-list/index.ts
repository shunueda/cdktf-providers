// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#description IpList#description}
  */
  readonly description?: string;
  /**
  * List of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#ip_addresses IpList#ip_addresses}
  */
  readonly ipAddresses?: IpListIpAddresses[] | cdktf.IResolvable;
  /**
  * List of IP address ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#ip_ranges IpList#ip_ranges}
  */
  readonly ipRanges?: IpListIpRanges[] | cdktf.IResolvable;
  /**
  * Name of the IP list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#name IpList#name}
  */
  readonly name: string;
}
export interface IpListIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#exclusion IpList#exclusion}
  */
  readonly exclusion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#ip_address IpList#ip_address}
  */
  readonly ipAddress?: string;
}

export function ipListIpAddressesToTerraform(struct?: IpListIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.booleanToTerraform(struct!.exclusion),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function ipListIpAddressesToHclTerraform(struct?: IpListIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.exclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpListIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpListIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpListIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusion = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusion = value.exclusion;
      this._ipAddress = value.ipAddress;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: boolean | cdktf.IResolvable; 
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }
  public set exclusion(value: boolean | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class IpListIpAddressesList extends cdktf.ComplexList {
  public internalValue? : IpListIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): IpListIpAddressesOutputReference {
    return new IpListIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpListIpRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#exclusion IpList#exclusion}
  */
  readonly exclusion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#from_ip_address IpList#from_ip_address}
  */
  readonly fromIpAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#to_ip_address IpList#to_ip_address}
  */
  readonly toIpAddress?: string;
}

export function ipListIpRangesToTerraform(struct?: IpListIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion: cdktf.booleanToTerraform(struct!.exclusion),
    from_ip_address: cdktf.stringToTerraform(struct!.fromIpAddress),
    to_ip_address: cdktf.stringToTerraform(struct!.toIpAddress),
  }
}


export function ipListIpRangesToHclTerraform(struct?: IpListIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.exclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.fromIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.toIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpListIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpListIpRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusion = this._exclusion;
    }
    if (this._fromIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromIpAddress = this._fromIpAddress;
    }
    if (this._toIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.toIpAddress = this._toIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpListIpRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusion = undefined;
      this._fromIpAddress = undefined;
      this._toIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusion = value.exclusion;
      this._fromIpAddress = value.fromIpAddress;
      this._toIpAddress = value.toIpAddress;
    }
  }

  // exclusion - computed: false, optional: true, required: false
  private _exclusion?: boolean | cdktf.IResolvable; 
  public get exclusion() {
    return this.getBooleanAttribute('exclusion');
  }
  public set exclusion(value: boolean | cdktf.IResolvable) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // from_ip_address - computed: false, optional: true, required: false
  private _fromIpAddress?: string; 
  public get fromIpAddress() {
    return this.getStringAttribute('from_ip_address');
  }
  public set fromIpAddress(value: string) {
    this._fromIpAddress = value;
  }
  public resetFromIpAddress() {
    this._fromIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromIpAddressInput() {
    return this._fromIpAddress;
  }

  // to_ip_address - computed: false, optional: true, required: false
  private _toIpAddress?: string; 
  public get toIpAddress() {
    return this.getStringAttribute('to_ip_address');
  }
  public set toIpAddress(value: string) {
    this._toIpAddress = value;
  }
  public resetToIpAddress() {
    this._toIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toIpAddressInput() {
    return this._toIpAddress;
  }
}

export class IpListIpRangesList extends cdktf.ComplexList {
  public internalValue? : IpListIpRanges[] | cdktf.IResolvable

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
  public get(index: number): IpListIpRangesOutputReference {
    return new IpListIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list illumio-cloudsecure_ip_list}
*/
export class IpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpList to import
  * @param importFromId The id of the existing IpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.6.0/docs/resources/ip_list illumio-cloudsecure_ip_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpListConfig
  */
  public constructor(scope: Construct, id: string, config: IpListConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
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
    this._ipAddresses.internalValue = config.ipAddresses;
    this._ipRanges.internalValue = config.ipRanges;
    this._name = config.name;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses = new IpListIpAddressesList(this, "ip_addresses", false);
  public get ipAddresses() {
    return this._ipAddresses;
  }
  public putIpAddresses(value: IpListIpAddresses[] | cdktf.IResolvable) {
    this._ipAddresses.internalValue = value;
  }
  public resetIpAddresses() {
    this._ipAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses.internalValue;
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges = new IpListIpRangesList(this, "ip_ranges", false);
  public get ipRanges() {
    return this._ipRanges;
  }
  public putIpRanges(value: IpListIpRanges[] | cdktf.IResolvable) {
    this._ipRanges.internalValue = value;
  }
  public resetIpRanges() {
    this._ipRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      ip_addresses: cdktf.listMapper(ipListIpAddressesToTerraform, false)(this._ipAddresses.internalValue),
      ip_ranges: cdktf.listMapper(ipListIpRangesToTerraform, false)(this._ipRanges.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      ip_addresses: {
        value: cdktf.listMapperHcl(ipListIpAddressesToHclTerraform, false)(this._ipAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpListIpAddressesList",
      },
      ip_ranges: {
        value: cdktf.listMapperHcl(ipListIpRangesToHclTerraform, false)(this._ipRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpListIpRangesList",
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
