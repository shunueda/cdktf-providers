// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#availability_domain CoreSubnet#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#cidr_block CoreSubnet#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#compartment_id CoreSubnet#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#defined_tags CoreSubnet#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#dhcp_options_id CoreSubnet#dhcp_options_id}
  */
  readonly dhcpOptionsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#display_name CoreSubnet#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#dns_label CoreSubnet#dns_label}
  */
  readonly dnsLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#freeform_tags CoreSubnet#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#id CoreSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#ipv4cidr_blocks CoreSubnet#ipv4cidr_blocks}
  */
  readonly ipv4CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#ipv6cidr_block CoreSubnet#ipv6cidr_block}
  */
  readonly ipv6CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#ipv6cidr_blocks CoreSubnet#ipv6cidr_blocks}
  */
  readonly ipv6CidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#prohibit_internet_ingress CoreSubnet#prohibit_internet_ingress}
  */
  readonly prohibitInternetIngress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#prohibit_public_ip_on_vnic CoreSubnet#prohibit_public_ip_on_vnic}
  */
  readonly prohibitPublicIpOnVnic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#route_table_id CoreSubnet#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#security_list_ids CoreSubnet#security_list_ids}
  */
  readonly securityListIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#vcn_id CoreSubnet#vcn_id}
  */
  readonly vcnId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#timeouts CoreSubnet#timeouts}
  */
  readonly timeouts?: CoreSubnetTimeouts;
}
export interface CoreSubnetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#create CoreSubnet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#delete CoreSubnet#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#update CoreSubnet#update}
  */
  readonly update?: string;
}

export function coreSubnetTimeoutsToTerraform(struct?: CoreSubnetTimeouts | cdktf.IResolvable): any {
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


export function coreSubnetTimeoutsToHclTerraform(struct?: CoreSubnetTimeouts | cdktf.IResolvable): any {
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

export class CoreSubnetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreSubnetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreSubnetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet oci_core_subnet}
*/
export class CoreSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreSubnet to import
  * @param importFromId The id of the existing CoreSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_subnet oci_core_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: CoreSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_subnet',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._cidrBlock = config.cidrBlock;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._dhcpOptionsId = config.dhcpOptionsId;
    this._displayName = config.displayName;
    this._dnsLabel = config.dnsLabel;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._ipv4CidrBlocks = config.ipv4CidrBlocks;
    this._ipv6CidrBlock = config.ipv6CidrBlock;
    this._ipv6CidrBlocks = config.ipv6CidrBlocks;
    this._prohibitInternetIngress = config.prohibitInternetIngress;
    this._prohibitPublicIpOnVnic = config.prohibitPublicIpOnVnic;
    this._routeTableId = config.routeTableId;
    this._securityListIds = config.securityListIds;
    this._vcnId = config.vcnId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
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

  // dhcp_options_id - computed: true, optional: true, required: false
  private _dhcpOptionsId?: string; 
  public get dhcpOptionsId() {
    return this.getStringAttribute('dhcp_options_id');
  }
  public set dhcpOptionsId(value: string) {
    this._dhcpOptionsId = value;
  }
  public resetDhcpOptionsId() {
    this._dhcpOptionsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionsIdInput() {
    return this._dhcpOptionsId;
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

  // ipv4cidr_blocks - computed: true, optional: true, required: false
  private _ipv4CidrBlocks?: string[]; 
  public get ipv4CidrBlocks() {
    return this.getListAttribute('ipv4cidr_blocks');
  }
  public set ipv4CidrBlocks(value: string[]) {
    this._ipv4CidrBlocks = value;
  }
  public resetIpv4CidrBlocks() {
    this._ipv4CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrBlocksInput() {
    return this._ipv4CidrBlocks;
  }

  // ipv6cidr_block - computed: true, optional: true, required: false
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  public resetIpv6CidrBlock() {
    this._ipv6CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
  }

  // ipv6cidr_blocks - computed: true, optional: true, required: false
  private _ipv6CidrBlocks?: string[]; 
  public get ipv6CidrBlocks() {
    return this.getListAttribute('ipv6cidr_blocks');
  }
  public set ipv6CidrBlocks(value: string[]) {
    this._ipv6CidrBlocks = value;
  }
  public resetIpv6CidrBlocks() {
    this._ipv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlocksInput() {
    return this._ipv6CidrBlocks;
  }

  // ipv6virtual_router_ip - computed: true, optional: false, required: false
  public get ipv6VirtualRouterIp() {
    return this.getStringAttribute('ipv6virtual_router_ip');
  }

  // prohibit_internet_ingress - computed: true, optional: true, required: false
  private _prohibitInternetIngress?: boolean | cdktf.IResolvable; 
  public get prohibitInternetIngress() {
    return this.getBooleanAttribute('prohibit_internet_ingress');
  }
  public set prohibitInternetIngress(value: boolean | cdktf.IResolvable) {
    this._prohibitInternetIngress = value;
  }
  public resetProhibitInternetIngress() {
    this._prohibitInternetIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitInternetIngressInput() {
    return this._prohibitInternetIngress;
  }

  // prohibit_public_ip_on_vnic - computed: true, optional: true, required: false
  private _prohibitPublicIpOnVnic?: boolean | cdktf.IResolvable; 
  public get prohibitPublicIpOnVnic() {
    return this.getBooleanAttribute('prohibit_public_ip_on_vnic');
  }
  public set prohibitPublicIpOnVnic(value: boolean | cdktf.IResolvable) {
    this._prohibitPublicIpOnVnic = value;
  }
  public resetProhibitPublicIpOnVnic() {
    this._prohibitPublicIpOnVnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitPublicIpOnVnicInput() {
    return this._prohibitPublicIpOnVnic;
  }

  // route_table_id - computed: true, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // security_list_ids - computed: true, optional: true, required: false
  private _securityListIds?: string[]; 
  public get securityListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_list_ids'));
  }
  public set securityListIds(value: string[]) {
    this._securityListIds = value;
  }
  public resetSecurityListIds() {
    this._securityListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityListIdsInput() {
    return this._securityListIds;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_domain_name - computed: true, optional: false, required: false
  public get subnetDomainName() {
    return this.getStringAttribute('subnet_domain_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }

  // virtual_router_ip - computed: true, optional: false, required: false
  public get virtualRouterIp() {
    return this.getStringAttribute('virtual_router_ip');
  }

  // virtual_router_mac - computed: true, optional: false, required: false
  public get virtualRouterMac() {
    return this.getStringAttribute('virtual_router_mac');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreSubnetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreSubnetTimeouts) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_label: cdktf.stringToTerraform(this._dnsLabel),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      ipv4cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4CidrBlocks),
      ipv6cidr_block: cdktf.stringToTerraform(this._ipv6CidrBlock),
      ipv6cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6CidrBlocks),
      prohibit_internet_ingress: cdktf.booleanToTerraform(this._prohibitInternetIngress),
      prohibit_public_ip_on_vnic: cdktf.booleanToTerraform(this._prohibitPublicIpOnVnic),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      security_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityListIds),
      vcn_id: cdktf.stringToTerraform(this._vcnId),
      timeouts: coreSubnetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      dhcp_options_id: {
        value: cdktf.stringToHclTerraform(this._dhcpOptionsId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ipv4cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6cidr_block: {
        value: cdktf.stringToHclTerraform(this._ipv6CidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6CidrBlocks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prohibit_internet_ingress: {
        value: cdktf.booleanToHclTerraform(this._prohibitInternetIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prohibit_public_ip_on_vnic: {
        value: cdktf.booleanToHclTerraform(this._prohibitPublicIpOnVnic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_list_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityListIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vcn_id: {
        value: cdktf.stringToHclTerraform(this._vcnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: coreSubnetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreSubnetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
