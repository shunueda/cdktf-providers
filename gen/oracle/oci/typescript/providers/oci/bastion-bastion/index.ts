// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionBastionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#bastion_type BastionBastion#bastion_type}
  */
  readonly bastionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#client_cidr_block_allow_list BastionBastion#client_cidr_block_allow_list}
  */
  readonly clientCidrBlockAllowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#compartment_id BastionBastion#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#defined_tags BastionBastion#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#dns_proxy_status BastionBastion#dns_proxy_status}
  */
  readonly dnsProxyStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#freeform_tags BastionBastion#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#id BastionBastion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#max_session_ttl_in_seconds BastionBastion#max_session_ttl_in_seconds}
  */
  readonly maxSessionTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#name BastionBastion#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#phone_book_entry BastionBastion#phone_book_entry}
  */
  readonly phoneBookEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#security_attributes BastionBastion#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#static_jump_host_ip_addresses BastionBastion#static_jump_host_ip_addresses}
  */
  readonly staticJumpHostIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#target_subnet_id BastionBastion#target_subnet_id}
  */
  readonly targetSubnetId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#timeouts BastionBastion#timeouts}
  */
  readonly timeouts?: BastionBastionTimeouts;
}
export interface BastionBastionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#create BastionBastion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#delete BastionBastion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#update BastionBastion#update}
  */
  readonly update?: string;
}

export function bastionBastionTimeoutsToTerraform(struct?: BastionBastionTimeouts | cdktf.IResolvable): any {
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


export function bastionBastionTimeoutsToHclTerraform(struct?: BastionBastionTimeouts | cdktf.IResolvable): any {
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

export class BastionBastionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BastionBastionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BastionBastionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion oci_bastion_bastion}
*/
export class BastionBastion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bastion_bastion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionBastion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionBastion to import
  * @param importFromId The id of the existing BastionBastion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionBastion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bastion_bastion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/bastion_bastion oci_bastion_bastion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionBastionConfig
  */
  public constructor(scope: Construct, id: string, config: BastionBastionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bastion_bastion',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bastionType = config.bastionType;
    this._clientCidrBlockAllowList = config.clientCidrBlockAllowList;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._dnsProxyStatus = config.dnsProxyStatus;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._maxSessionTtlInSeconds = config.maxSessionTtlInSeconds;
    this._name = config.name;
    this._phoneBookEntry = config.phoneBookEntry;
    this._securityAttributes = config.securityAttributes;
    this._staticJumpHostIpAddresses = config.staticJumpHostIpAddresses;
    this._targetSubnetId = config.targetSubnetId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bastion_type - computed: false, optional: false, required: true
  private _bastionType?: string; 
  public get bastionType() {
    return this.getStringAttribute('bastion_type');
  }
  public set bastionType(value: string) {
    this._bastionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bastionTypeInput() {
    return this._bastionType;
  }

  // client_cidr_block_allow_list - computed: true, optional: true, required: false
  private _clientCidrBlockAllowList?: string[]; 
  public get clientCidrBlockAllowList() {
    return this.getListAttribute('client_cidr_block_allow_list');
  }
  public set clientCidrBlockAllowList(value: string[]) {
    this._clientCidrBlockAllowList = value;
  }
  public resetClientCidrBlockAllowList() {
    this._clientCidrBlockAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCidrBlockAllowListInput() {
    return this._clientCidrBlockAllowList;
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

  // dns_proxy_status - computed: true, optional: true, required: false
  private _dnsProxyStatus?: string; 
  public get dnsProxyStatus() {
    return this.getStringAttribute('dns_proxy_status');
  }
  public set dnsProxyStatus(value: string) {
    this._dnsProxyStatus = value;
  }
  public resetDnsProxyStatus() {
    this._dnsProxyStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyStatusInput() {
    return this._dnsProxyStatus;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_session_ttl_in_seconds - computed: true, optional: true, required: false
  private _maxSessionTtlInSeconds?: number; 
  public get maxSessionTtlInSeconds() {
    return this.getNumberAttribute('max_session_ttl_in_seconds');
  }
  public set maxSessionTtlInSeconds(value: number) {
    this._maxSessionTtlInSeconds = value;
  }
  public resetMaxSessionTtlInSeconds() {
    this._maxSessionTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionTtlInSecondsInput() {
    return this._maxSessionTtlInSeconds;
  }

  // max_sessions_allowed - computed: true, optional: false, required: false
  public get maxSessionsAllowed() {
    return this.getNumberAttribute('max_sessions_allowed');
  }

  // name - computed: true, optional: true, required: false
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

  // phone_book_entry - computed: true, optional: true, required: false
  private _phoneBookEntry?: string; 
  public get phoneBookEntry() {
    return this.getStringAttribute('phone_book_entry');
  }
  public set phoneBookEntry(value: string) {
    this._phoneBookEntry = value;
  }
  public resetPhoneBookEntry() {
    this._phoneBookEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneBookEntryInput() {
    return this._phoneBookEntry;
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
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

  // static_jump_host_ip_addresses - computed: true, optional: true, required: false
  private _staticJumpHostIpAddresses?: string[]; 
  public get staticJumpHostIpAddresses() {
    return this.getListAttribute('static_jump_host_ip_addresses');
  }
  public set staticJumpHostIpAddresses(value: string[]) {
    this._staticJumpHostIpAddresses = value;
  }
  public resetStaticJumpHostIpAddresses() {
    this._staticJumpHostIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticJumpHostIpAddressesInput() {
    return this._staticJumpHostIpAddresses;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_subnet_id - computed: false, optional: false, required: true
  private _targetSubnetId?: string; 
  public get targetSubnetId() {
    return this.getStringAttribute('target_subnet_id');
  }
  public set targetSubnetId(value: string) {
    this._targetSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSubnetIdInput() {
    return this._targetSubnetId;
  }

  // target_vcn_id - computed: true, optional: false, required: false
  public get targetVcnId() {
    return this.getStringAttribute('target_vcn_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BastionBastionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BastionBastionTimeouts) {
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
      bastion_type: cdktf.stringToTerraform(this._bastionType),
      client_cidr_block_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCidrBlockAllowList),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      dns_proxy_status: cdktf.stringToTerraform(this._dnsProxyStatus),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      max_session_ttl_in_seconds: cdktf.numberToTerraform(this._maxSessionTtlInSeconds),
      name: cdktf.stringToTerraform(this._name),
      phone_book_entry: cdktf.stringToTerraform(this._phoneBookEntry),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      static_jump_host_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticJumpHostIpAddresses),
      target_subnet_id: cdktf.stringToTerraform(this._targetSubnetId),
      timeouts: bastionBastionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bastion_type: {
        value: cdktf.stringToHclTerraform(this._bastionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cidr_block_allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientCidrBlockAllowList),
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
      dns_proxy_status: {
        value: cdktf.stringToHclTerraform(this._dnsProxyStatus),
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
      max_session_ttl_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maxSessionTtlInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_book_entry: {
        value: cdktf.stringToHclTerraform(this._phoneBookEntry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      static_jump_host_ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticJumpHostIpAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_subnet_id: {
        value: cdktf.stringToHclTerraform(this._targetSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: bastionBastionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BastionBastionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
