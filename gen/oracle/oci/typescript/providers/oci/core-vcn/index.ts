// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVcnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#cidr_block CoreVcn#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#cidr_blocks CoreVcn#cidr_blocks}
  */
  readonly cidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#compartment_id CoreVcn#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#defined_tags CoreVcn#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#display_name CoreVcn#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#dns_label CoreVcn#dns_label}
  */
  readonly dnsLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#freeform_tags CoreVcn#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#id CoreVcn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#ipv6private_cidr_blocks CoreVcn#ipv6private_cidr_blocks}
  */
  readonly ipv6PrivateCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#is_ipv6enabled CoreVcn#is_ipv6enabled}
  */
  readonly isIpv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#is_oracle_gua_allocation_enabled CoreVcn#is_oracle_gua_allocation_enabled}
  */
  readonly isOracleGuaAllocationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#security_attributes CoreVcn#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * byoipv6cidr_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#byoipv6cidr_details CoreVcn#byoipv6cidr_details}
  */
  readonly byoipv6CidrDetails?: CoreVcnByoipv6CidrDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#timeouts CoreVcn#timeouts}
  */
  readonly timeouts?: CoreVcnTimeouts;
}
export interface CoreVcnByoipv6CidrDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#byoipv6range_id CoreVcn#byoipv6range_id}
  */
  readonly byoipv6RangeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#ipv6cidr_block CoreVcn#ipv6cidr_block}
  */
  readonly ipv6CidrBlock: string;
}

export function coreVcnByoipv6CidrDetailsToTerraform(struct?: CoreVcnByoipv6CidrDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byoipv6range_id: cdktf.stringToTerraform(struct!.byoipv6RangeId),
    ipv6cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
  }
}


export function coreVcnByoipv6CidrDetailsToHclTerraform(struct?: CoreVcnByoipv6CidrDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byoipv6range_id: {
      value: cdktf.stringToHclTerraform(struct!.byoipv6RangeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVcnByoipv6CidrDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVcnByoipv6CidrDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byoipv6RangeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.byoipv6RangeId = this._byoipv6RangeId;
    }
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVcnByoipv6CidrDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byoipv6RangeId = undefined;
      this._ipv6CidrBlock = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byoipv6RangeId = value.byoipv6RangeId;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
    }
  }

  // byoipv6range_id - computed: false, optional: false, required: true
  private _byoipv6RangeId?: string; 
  public get byoipv6RangeId() {
    return this.getStringAttribute('byoipv6range_id');
  }
  public set byoipv6RangeId(value: string) {
    this._byoipv6RangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipv6RangeIdInput() {
    return this._byoipv6RangeId;
  }

  // ipv6cidr_block - computed: false, optional: false, required: true
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }
}

export class CoreVcnByoipv6CidrDetailsList extends cdktf.ComplexList {
  public internalValue? : CoreVcnByoipv6CidrDetails[] | cdktf.IResolvable

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
  public get(index: number): CoreVcnByoipv6CidrDetailsOutputReference {
    return new CoreVcnByoipv6CidrDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVcnTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#create CoreVcn#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#delete CoreVcn#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#update CoreVcn#update}
  */
  readonly update?: string;
}

export function coreVcnTimeoutsToTerraform(struct?: CoreVcnTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreVcnTimeoutsToHclTerraform(struct?: CoreVcnTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVcnTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVcnTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVcnTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn oci_core_vcn}
*/
export class CoreVcn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_vcn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVcn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVcn to import
  * @param importFromId The id of the existing CoreVcn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVcn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_vcn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_vcn oci_core_vcn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVcnConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVcnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_vcn',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._cidrBlocks = config.cidrBlocks;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._dnsLabel = config.dnsLabel;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ipv6PrivateCidrBlocks = config.ipv6PrivateCidrBlocks;
    this._isIpv6Enabled = config.isIpv6Enabled;
    this._isOracleGuaAllocationEnabled = config.isOracleGuaAllocationEnabled;
    this._securityAttributes = config.securityAttributes;
    this._byoipv6CidrDetails.internalValue = config.byoipv6CidrDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byoipv6cidr_blocks - computed: true, optional: false, required: false
  public get byoipv6CidrBlocks() {
    return this.getListAttribute('byoipv6cidr_blocks');
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cidr_blocks - computed: true, optional: true, required: false
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // default_dhcp_options_id - computed: true, optional: false, required: false
  public get defaultDhcpOptionsId() {
    return this.getStringAttribute('default_dhcp_options_id');
  }

  // default_route_table_id - computed: true, optional: false, required: false
  public get defaultRouteTableId() {
    return this.getStringAttribute('default_route_table_id');
  }

  // default_security_list_id - computed: true, optional: false, required: false
  public get defaultSecurityListId() {
    return this.getStringAttribute('default_security_list_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dns_label - computed: true, optional: true, required: false
  private _dnsLabel?: string; 
  public get dnsLabel() {
    return this.getStringAttribute('dns_label');
  }
  public set dnsLabel(value: string) {
    this._dnsLabel = value;
  }
  public resetDnsLabel() {
    this._dnsLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLabelInput() {
    return this._dnsLabel;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // ipv6cidr_blocks - computed: true, optional: false, required: false
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6cidr_blocks');
  }

  // ipv6private_cidr_blocks - computed: true, optional: true, required: false
  private _ipv6PrivateCidrBlocks?: string[]; 
  public get ipv6PrivateCidrBlocks() {
    return this.getListAttribute('ipv6private_cidr_blocks');
  }
  public set ipv6PrivateCidrBlocks(value: string[]) {
    this._ipv6PrivateCidrBlocks = value;
  }
  public resetIpv6PrivateCidrBlocks() {
    this._ipv6PrivateCidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrivateCidrBlocksInput() {
    return this._ipv6PrivateCidrBlocks;
  }

  // is_ipv6enabled - computed: true, optional: true, required: false
  private _isIpv6Enabled?: boolean | cdktf.IResolvable; 
  public get isIpv6Enabled() {
    return this.getBooleanAttribute('is_ipv6enabled');
  }
  public set isIpv6Enabled(value: boolean | cdktf.IResolvable) {
    this._isIpv6Enabled = value;
  }
  public resetIsIpv6Enabled() {
    this._isIpv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpv6EnabledInput() {
    return this._isIpv6Enabled;
  }

  // is_oracle_gua_allocation_enabled - computed: true, optional: true, required: false
  private _isOracleGuaAllocationEnabled?: boolean | cdktf.IResolvable; 
  public get isOracleGuaAllocationEnabled() {
    return this.getBooleanAttribute('is_oracle_gua_allocation_enabled');
  }
  public set isOracleGuaAllocationEnabled(value: boolean | cdktf.IResolvable) {
    this._isOracleGuaAllocationEnabled = value;
  }
  public resetIsOracleGuaAllocationEnabled() {
    this._isOracleGuaAllocationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOracleGuaAllocationEnabledInput() {
    return this._isOracleGuaAllocationEnabled;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_domain_name - computed: true, optional: false, required: false
  public get vcnDomainName() {
    return this.getStringAttribute('vcn_domain_name');
  }

  // byoipv6cidr_details - computed: false, optional: true, required: false
  private _byoipv6CidrDetails = new CoreVcnByoipv6CidrDetailsList(this, "byoipv6cidr_details", false);
  public get byoipv6CidrDetails() {
    return this._byoipv6CidrDetails;
  }
  public putByoipv6CidrDetails(value: CoreVcnByoipv6CidrDetails[] | cdktf.IResolvable) {
    this._byoipv6CidrDetails.internalValue = value;
  }
  public resetByoipv6CidrDetails() {
    this._byoipv6CidrDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipv6CidrDetailsInput() {
    return this._byoipv6CidrDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVcnTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVcnTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrBlocks),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_label: cdktf.stringToTerraform(this._dnsLabel),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ipv6private_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6PrivateCidrBlocks),
      is_ipv6enabled: cdktf.booleanToTerraform(this._isIpv6Enabled),
      is_oracle_gua_allocation_enabled: cdktf.booleanToTerraform(this._isOracleGuaAllocationEnabled),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      byoipv6cidr_details: cdktf.listMapper(coreVcnByoipv6CidrDetailsToTerraform, true)(this._byoipv6CidrDetails.internalValue),
      timeouts: coreVcnTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_label: {
        value: cdktf.stringToHclTerraform(this._dnsLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6private_cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6PrivateCidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_ipv6enabled: {
        value: cdktf.booleanToHclTerraform(this._isIpv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_oracle_gua_allocation_enabled: {
        value: cdktf.booleanToHclTerraform(this._isOracleGuaAllocationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      byoipv6cidr_details: {
        value: cdktf.listMapperHcl(coreVcnByoipv6CidrDetailsToHclTerraform, true)(this._byoipv6CidrDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVcnByoipv6CidrDetailsList",
      },
      timeouts: {
        value: coreVcnTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVcnTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
