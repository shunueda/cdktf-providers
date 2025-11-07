// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpamIpAddressesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address (with mask) used for this IP address. Required if both prefix and ip_range are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#address IpamIpAddresses#address}
  */
  readonly address?: string;
  /**
  * The description of this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#description IpamIpAddresses#description}
  */
  readonly description?: string;
  /**
  * The DNS name of this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#dns_name IpamIpAddresses#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#id IpamIpAddresses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ip-range id for automatic IP assignment. Required if both prefix and address are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#ip_range IpamIpAddresses#ip_range}
  */
  readonly ipRange?: number;
  /**
  * The ID of the NAT inside of this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#nat_inside_id IpamIpAddresses#nat_inside_id}
  */
  readonly natInsideId?: number;
  /**
  * The ID of the object where this resource is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#object_id IpamIpAddresses#object_id}
  */
  readonly objectId?: number;
  /**
  * The object type among virtualization.vminterface, dcim.interface or ipam.fhrpgroup (empty by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#object_type IpamIpAddresses#object_type}
  */
  readonly objectType?: string;
  /**
  * The prefix id for automatic IP assignment. Required if both address and ip_range are not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#prefix IpamIpAddresses#prefix}
  */
  readonly prefix?: number;
  /**
  * The role among loopback, secondary, anycast, vip, vrrp, hsrp, glbp, carp of this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#role IpamIpAddresses#role}
  */
  readonly role?: string;
  /**
  * The status among of this IP address active, reserved, deprecated, dhcp, slaac (active by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#status IpamIpAddresses#status}
  */
  readonly status?: string;
  /**
  * ID of the tenant where this object is attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#tenant_id IpamIpAddresses#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * ID of the vrf attached to this IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#vrf_id IpamIpAddresses#vrf_id}
  */
  readonly vrfId?: number;
  /**
  * custom_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#custom_field IpamIpAddresses#custom_field}
  */
  readonly customField?: IpamIpAddressesCustomField[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#tag IpamIpAddresses#tag}
  */
  readonly tag?: IpamIpAddressesTag[] | cdktf.IResolvable;
}
export interface IpamIpAddressesCustomField {
  /**
  * Name of the existing custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#name IpamIpAddresses#name}
  */
  readonly name: string;
  /**
  * Type of the existing custom field (text,longtext, integer, boolean, date, url, json, select, multiselect, object, multiobject, selection (deprecated), multiple(deprecated)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#type IpamIpAddresses#type}
  */
  readonly type: string;
  /**
  * Value of the existing custom field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#value IpamIpAddresses#value}
  */
  readonly value: string;
}

export function ipamIpAddressesCustomFieldToTerraform(struct?: IpamIpAddressesCustomField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function ipamIpAddressesCustomFieldToHclTerraform(struct?: IpamIpAddressesCustomField | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpAddressesCustomFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpAddressesCustomField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpAddressesCustomField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class IpamIpAddressesCustomFieldList extends cdktf.ComplexList {
  public internalValue? : IpamIpAddressesCustomField[] | cdktf.IResolvable

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
  public get(index: number): IpamIpAddressesCustomFieldOutputReference {
    return new IpamIpAddressesCustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IpamIpAddressesTag {
  /**
  * Name of the existing tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#name IpamIpAddresses#name}
  */
  readonly name: string;
  /**
  * Slug of the existing tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#slug IpamIpAddresses#slug}
  */
  readonly slug: string;
}

export function ipamIpAddressesTagToTerraform(struct?: IpamIpAddressesTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slug: cdktf.stringToTerraform(struct!.slug),
  }
}


export function ipamIpAddressesTagToHclTerraform(struct?: IpamIpAddressesTag | cdktf.IResolvable): any {
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
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpamIpAddressesTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpamIpAddressesTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpamIpAddressesTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slug = value.slug;
    }
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

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }
}

export class IpamIpAddressesTagList extends cdktf.ComplexList {
  public internalValue? : IpamIpAddressesTag[] | cdktf.IResolvable

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
  public get(index: number): IpamIpAddressesTagOutputReference {
    return new IpamIpAddressesTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses netbox_ipam_ip_addresses}
*/
export class IpamIpAddresses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_ipam_ip_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpamIpAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpamIpAddresses to import
  * @param importFromId The id of the existing IpamIpAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpamIpAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_ipam_ip_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/ipam_ip_addresses netbox_ipam_ip_addresses} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpamIpAddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpamIpAddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netbox_ipam_ip_addresses',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._description = config.description;
    this._dnsName = config.dnsName;
    this._id = config.id;
    this._ipRange = config.ipRange;
    this._natInsideId = config.natInsideId;
    this._objectId = config.objectId;
    this._objectType = config.objectType;
    this._prefix = config.prefix;
    this._role = config.role;
    this._status = config.status;
    this._tenantId = config.tenantId;
    this._vrfId = config.vrfId;
    this._customField.internalValue = config.customField;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
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

  // ip_range - computed: false, optional: true, required: false
  private _ipRange?: number; 
  public get ipRange() {
    return this.getNumberAttribute('ip_range');
  }
  public set ipRange(value: number) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // nat_inside_id - computed: false, optional: true, required: false
  private _natInsideId?: number; 
  public get natInsideId() {
    return this.getNumberAttribute('nat_inside_id');
  }
  public set natInsideId(value: number) {
    this._natInsideId = value;
  }
  public resetNatInsideId() {
    this._natInsideId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInsideIdInput() {
    return this._natInsideId;
  }

  // object_id - computed: false, optional: true, required: false
  private _objectId?: number; 
  public get objectId() {
    return this.getNumberAttribute('object_id');
  }
  public set objectId(value: number) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: number; 
  public get prefix() {
    return this.getNumberAttribute('prefix');
  }
  public set prefix(value: number) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // custom_field - computed: false, optional: true, required: false
  private _customField = new IpamIpAddressesCustomFieldList(this, "custom_field", true);
  public get customField() {
    return this._customField;
  }
  public putCustomField(value: IpamIpAddressesCustomField[] | cdktf.IResolvable) {
    this._customField.internalValue = value;
  }
  public resetCustomField() {
    this._customField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldInput() {
    return this._customField.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new IpamIpAddressesTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: IpamIpAddressesTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      description: cdktf.stringToTerraform(this._description),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      id: cdktf.stringToTerraform(this._id),
      ip_range: cdktf.numberToTerraform(this._ipRange),
      nat_inside_id: cdktf.numberToTerraform(this._natInsideId),
      object_id: cdktf.numberToTerraform(this._objectId),
      object_type: cdktf.stringToTerraform(this._objectType),
      prefix: cdktf.numberToTerraform(this._prefix),
      role: cdktf.stringToTerraform(this._role),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
      custom_field: cdktf.listMapper(ipamIpAddressesCustomFieldToTerraform, true)(this._customField.internalValue),
      tag: cdktf.listMapper(ipamIpAddressesTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
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
      ip_range: {
        value: cdktf.numberToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_inside_id: {
        value: cdktf.numberToHclTerraform(this._natInsideId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_id: {
        value: cdktf.numberToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.numberToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_id: {
        value: cdktf.numberToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_field: {
        value: cdktf.listMapperHcl(ipamIpAddressesCustomFieldToHclTerraform, true)(this._customField.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamIpAddressesCustomFieldList",
      },
      tag: {
        value: cdktf.listMapperHcl(ipamIpAddressesTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpamIpAddressesTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
