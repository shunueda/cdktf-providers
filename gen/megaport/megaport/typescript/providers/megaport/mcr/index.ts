// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface McrConfig extends cdktf.TerraformMetaArguments {
  /**
  * Autonomous System Number (ASN) of the MCR in the MCR order configuration. Defaults to 133937 if not specified. For most configurations, the default ASN is appropriate. The ASN is used for BGP peering sessions on any VXCs connected to this MCR. See the documentation for your cloud providers before overriding the default value. For example, some public cloud services require the use of a public ASN and Microsoft blocks an ASN value of 65515 for Azure connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#asn Mcr#asn}
  */
  readonly asn?: number;
  /**
  * The term of the contract in months: valid values are 1, 12, 24, 36, 48, and 60. To set the product to a month-to-month contract with no minimum term, set the value to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#contract_term_months Mcr#contract_term_months}
  */
  readonly contractTermMonths: number;
  /**
  * A customer reference number to be included in billing information and invoices. Also known as the service level reference (SLR) number. Specify a unique identifying number for the product to be used for billing purposes, such as a cost center number or a unique customer ID. The service level reference number appears for each service under the Product section of the invoice. You can also edit this field for an existing service. Please note that a VXC associated with the MCR is not automatically updated with the MCR service level reference number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#cost_centre Mcr#cost_centre}
  */
  readonly costCentre?: string;
  /**
  * Diversity zone of the product. If the parameter is not provided, a diversity zone will be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#diversity_zone Mcr#diversity_zone}
  */
  readonly diversityZone?: string;
  /**
  * The numeric location ID of the product. This value can be retrieved from the data source megaport_location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#location_id Mcr#location_id}
  */
  readonly locationId: number;
  /**
  * Bandwidth speed of the product. The MCR can scale from 1 Gbps to 100 Gbps. The rate limit is an aggregate capacity that determines the speed for all connections through the MCR. MCR bandwidth is shared between all the Cloud Service Provider (CSP) connections added to it. The rate limit is fixed for the life of the service. MCR2 supports seven speeds: 1000, 2500, 5000, 10000, 25000, 50000, and 100000 MBPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#port_speed Mcr#port_speed}
  */
  readonly portSpeed: number;
  /**
  * **DEPRECATED**: Prefix filter list associated with the product. Use the `megaport_mcr_prefix_filter_list` resource instead for better resource management. This attribute will be removed in a future version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#prefix_filter_lists Mcr#prefix_filter_lists}
  */
  readonly prefixFilterLists?: McrPrefixFilterLists[] | cdktf.IResolvable;
  /**
  * Name of the product. Specify a name for the MCR that is easily identifiable as yours, particularly if you plan on provisioning more than one MCR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#product_name Mcr#product_name}
  */
  readonly productName: string;
  /**
  * Promo code is an optional string that can be used to enter a promotional code for the service order. The code is not validated, so if the code doesn't exist or doesn't work for the service, the request will still be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#promo_code Mcr#promo_code}
  */
  readonly promoCode?: string;
  /**
  * The resource tags associated with the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#resource_tags Mcr#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
}
export interface McrPrefixFilterListsEntries {
  /**
  * The action to take for the network address in the filter list. Accepted values are permit and deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#action Mcr#action}
  */
  readonly action: string;
  /**
  * The minimum starting prefix length to be matched. Valid values are from 0 to 32 (IPv4), or 0 to 128 (IPv6). The minimum (ge) must be no greater than or equal to the maximum value (le).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#ge Mcr#ge}
  */
  readonly ge?: number;
  /**
  * The maximum ending prefix length to be matched. The prefix length is greater than or equal to the minimum value (ge). Valid values are from 0 to 32 (IPv4), or 0 to 128 (IPv6), but the maximum must be no less than the minimum value (ge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#le Mcr#le}
  */
  readonly le?: number;
  /**
  * The network address of the prefix filter list entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#prefix Mcr#prefix}
  */
  readonly prefix: string;
}

export function mcrPrefixFilterListsEntriesToTerraform(struct?: McrPrefixFilterListsEntries | cdktf.IResolvable): any {
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


export function mcrPrefixFilterListsEntriesToHclTerraform(struct?: McrPrefixFilterListsEntries | cdktf.IResolvable): any {
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

export class McrPrefixFilterListsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): McrPrefixFilterListsEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: McrPrefixFilterListsEntries | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: false, required: true
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

  // ge - computed: true, optional: true, required: false
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

  // le - computed: true, optional: true, required: false
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

  // prefix - computed: true, optional: false, required: true
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

export class McrPrefixFilterListsEntriesList extends cdktf.ComplexList {
  public internalValue? : McrPrefixFilterListsEntries[] | cdktf.IResolvable

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
  public get(index: number): McrPrefixFilterListsEntriesOutputReference {
    return new McrPrefixFilterListsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface McrPrefixFilterLists {
  /**
  * The IP address standard of the IP network addresses in the prefix filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#address_family Mcr#address_family}
  */
  readonly addressFamily: string;
  /**
  * Description of the prefix filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#description Mcr#description}
  */
  readonly description: string;
  /**
  * Entries in the prefix filter list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#entries Mcr#entries}
  */
  readonly entries?: McrPrefixFilterListsEntries[] | cdktf.IResolvable;
}

export function mcrPrefixFilterListsToTerraform(struct?: McrPrefixFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    description: cdktf.stringToTerraform(struct!.description),
    entries: cdktf.listMapper(mcrPrefixFilterListsEntriesToTerraform, false)(struct!.entries),
  }
}


export function mcrPrefixFilterListsToHclTerraform(struct?: McrPrefixFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
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
    entries: {
      value: cdktf.listMapperHcl(mcrPrefixFilterListsEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "McrPrefixFilterListsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class McrPrefixFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): McrPrefixFilterLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: McrPrefixFilterLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._description = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._description = value.description;
      this._entries.internalValue = value.entries;
    }
  }

  // address_family - computed: true, optional: false, required: true
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

  // description - computed: true, optional: false, required: true
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

  // entries - computed: true, optional: true, required: false
  private _entries = new McrPrefixFilterListsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: McrPrefixFilterListsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }
}

export class McrPrefixFilterListsList extends cdktf.ComplexList {
  public internalValue? : McrPrefixFilterLists[] | cdktf.IResolvable

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
  public get(index: number): McrPrefixFilterListsOutputReference {
    return new McrPrefixFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr megaport_mcr}
*/
export class Mcr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_mcr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mcr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mcr to import
  * @param importFromId The id of the existing Mcr that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mcr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_mcr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/mcr megaport_mcr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options McrConfig
  */
  public constructor(scope: Construct, id: string, config: McrConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_mcr',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._contractTermMonths = config.contractTermMonths;
    this._costCentre = config.costCentre;
    this._diversityZone = config.diversityZone;
    this._locationId = config.locationId;
    this._portSpeed = config.portSpeed;
    this._prefixFilterLists.internalValue = config.prefixFilterLists;
    this._productName = config.productName;
    this._promoCode = config.promoCode;
    this._resourceTags = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_locked - computed: true, optional: false, required: false
  public get adminLocked() {
    return this.getBooleanAttribute('admin_locked');
  }

  // aggregation_id - computed: true, optional: false, required: false
  public get aggregationId() {
    return this.getNumberAttribute('aggregation_id');
  }

  // asn - computed: true, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // attribute_tags - computed: true, optional: false, required: false
  private _attributeTags = new cdktf.StringMap(this, "attribute_tags");
  public get attributeTags() {
    return this._attributeTags;
  }

  // buyout_port - computed: true, optional: false, required: false
  public get buyoutPort() {
    return this.getBooleanAttribute('buyout_port');
  }

  // cancelable - computed: true, optional: false, required: false
  public get cancelable() {
    return this.getBooleanAttribute('cancelable');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // company_uid - computed: true, optional: false, required: false
  public get companyUid() {
    return this.getStringAttribute('company_uid');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // contract_term_months - computed: false, optional: false, required: true
  private _contractTermMonths?: number; 
  public get contractTermMonths() {
    return this.getNumberAttribute('contract_term_months');
  }
  public set contractTermMonths(value: number) {
    this._contractTermMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTermMonthsInput() {
    return this._contractTermMonths;
  }

  // cost_centre - computed: true, optional: true, required: false
  private _costCentre?: string; 
  public get costCentre() {
    return this.getStringAttribute('cost_centre');
  }
  public set costCentre(value: string) {
    this._costCentre = value;
  }
  public resetCostCentre() {
    this._costCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCentreInput() {
    return this._costCentre;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // diversity_zone - computed: true, optional: true, required: false
  private _diversityZone?: string; 
  public get diversityZone() {
    return this.getStringAttribute('diversity_zone');
  }
  public set diversityZone(value: string) {
    this._diversityZone = value;
  }
  public resetDiversityZone() {
    this._diversityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diversityZoneInput() {
    return this._diversityZone;
  }

  // lag_id - computed: true, optional: false, required: false
  public get lagId() {
    return this.getNumberAttribute('lag_id');
  }

  // lag_primary - computed: true, optional: false, required: false
  public get lagPrimary() {
    return this.getBooleanAttribute('lag_primary');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // live_date - computed: true, optional: false, required: false
  public get liveDate() {
    return this.getStringAttribute('live_date');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // marketplace_visibility - computed: true, optional: false, required: false
  public get marketplaceVisibility() {
    return this.getBooleanAttribute('marketplace_visibility');
  }

  // port_speed - computed: false, optional: false, required: true
  private _portSpeed?: number; 
  public get portSpeed() {
    return this.getNumberAttribute('port_speed');
  }
  public set portSpeed(value: number) {
    this._portSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpeedInput() {
    return this._portSpeed;
  }

  // prefix_filter_lists - computed: true, optional: true, required: false
  private _prefixFilterLists = new McrPrefixFilterListsList(this, "prefix_filter_lists", false);
  public get prefixFilterLists() {
    return this._prefixFilterLists;
  }
  public putPrefixFilterLists(value: McrPrefixFilterLists[] | cdktf.IResolvable) {
    this._prefixFilterLists.internalValue = value;
  }
  public resetPrefixFilterLists() {
    this._prefixFilterLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFilterListsInput() {
    return this._prefixFilterLists.internalValue;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // product_uid - computed: true, optional: false, required: false
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }

  // promo_code - computed: false, optional: true, required: false
  private _promoCode?: string; 
  public get promoCode() {
    return this.getStringAttribute('promo_code');
  }
  public set promoCode(value: string) {
    this._promoCode = value;
  }
  public resetPromoCode() {
    this._promoCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoCodeInput() {
    return this._promoCode;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // secondary_name - computed: true, optional: false, required: false
  public get secondaryName() {
    return this.getStringAttribute('secondary_name');
  }

  // terminate_date - computed: true, optional: false, required: false
  public get terminateDate() {
    return this.getStringAttribute('terminate_date');
  }

  // usage_algorithm - computed: true, optional: false, required: false
  public get usageAlgorithm() {
    return this.getStringAttribute('usage_algorithm');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // vxc_auto_approval - computed: true, optional: false, required: false
  public get vxcAutoApproval() {
    return this.getBooleanAttribute('vxc_auto_approval');
  }

  // vxc_permitted - computed: true, optional: false, required: false
  public get vxcPermitted() {
    return this.getBooleanAttribute('vxc_permitted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.numberToTerraform(this._asn),
      contract_term_months: cdktf.numberToTerraform(this._contractTermMonths),
      cost_centre: cdktf.stringToTerraform(this._costCentre),
      diversity_zone: cdktf.stringToTerraform(this._diversityZone),
      location_id: cdktf.numberToTerraform(this._locationId),
      port_speed: cdktf.numberToTerraform(this._portSpeed),
      prefix_filter_lists: cdktf.listMapper(mcrPrefixFilterListsToTerraform, false)(this._prefixFilterLists.internalValue),
      product_name: cdktf.stringToTerraform(this._productName),
      promo_code: cdktf.stringToTerraform(this._promoCode),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.numberToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contract_term_months: {
        value: cdktf.numberToHclTerraform(this._contractTermMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cost_centre: {
        value: cdktf.stringToHclTerraform(this._costCentre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diversity_zone: {
        value: cdktf.stringToHclTerraform(this._diversityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_speed: {
        value: cdktf.numberToHclTerraform(this._portSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_filter_lists: {
        value: cdktf.listMapperHcl(mcrPrefixFilterListsToHclTerraform, false)(this._prefixFilterLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "McrPrefixFilterListsList",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promo_code: {
        value: cdktf.stringToHclTerraform(this._promoCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
