// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsRecordUnknownConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the record; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#comment DnsRecordUnknown#comment}
  */
  readonly comment?: string;
  /**
  * The record creator. Note that changing creator from or to 'SYSTEM' value is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#creator DnsRecordUnknown#creator}
  */
  readonly creator?: string;
  /**
  * Determines if the record is disabled or not. False means that the record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#disable DnsRecordUnknown#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if host name policy is applicable for the record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#enable_host_name_policy DnsRecordUnknown#enable_host_name_policy}
  */
  readonly enableHostNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#extattrs DnsRecordUnknown#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The Unknown record name in FQDN format. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#name DnsRecordUnknown#name}
  */
  readonly name: string;
  /**
  * Specifies type of unknown resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#record_type DnsRecordUnknown#record_type}
  */
  readonly recordType: string;
  /**
  * The list of rdata subfield values of unknown resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#subfield_values DnsRecordUnknown#subfield_values}
  */
  readonly subfieldValues: DnsRecordUnknownSubfieldValues[] | cdktf.IResolvable;
  /**
  * The Time to Live (TTL) value for the record. A 32-bit unsigned integer that represents the duration, in seconds, for which the record is valid (cached). Zero indicates that the record should not be cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#ttl DnsRecordUnknown#ttl}
  */
  readonly ttl?: number;
  /**
  * Use flag for: ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#use_ttl DnsRecordUnknown#use_ttl}
  */
  readonly useTtl?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the record resides. Example: "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#view DnsRecordUnknown#view}
  */
  readonly view?: string;
}
export interface DnsRecordUnknownCloudInfoDelegatedMember {
}

export function dnsRecordUnknownCloudInfoDelegatedMemberToTerraform(struct?: DnsRecordUnknownCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordUnknownCloudInfoDelegatedMemberToHclTerraform(struct?: DnsRecordUnknownCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordUnknownCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordUnknownCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordUnknownCloudInfoDelegatedMember | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4addr - computed: true, optional: false, required: false
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }

  // ipv6addr - computed: true, optional: false, required: false
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DnsRecordUnknownCloudInfo {
}

export function dnsRecordUnknownCloudInfoToTerraform(struct?: DnsRecordUnknownCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsRecordUnknownCloudInfoToHclTerraform(struct?: DnsRecordUnknownCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsRecordUnknownCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsRecordUnknownCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordUnknownCloudInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: false, required: false
  private _delegatedMember = new DnsRecordUnknownCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface DnsRecordUnknownSubfieldValues {
  /**
  * Type of field. "B": unsigned 8-bit integer, "S": unsigned 16-bit integer, "I": unsigned 32-bit integer. "H": BASE64, "6": an IPv6 address, "4": an IPv4 address, "N": a domain name, "T": text string, "X": opaque binary data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#field_type DnsRecordUnknown#field_type}
  */
  readonly fieldType: string;
  /**
  * String representation of subfield value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#field_value DnsRecordUnknown#field_value}
  */
  readonly fieldValue: string;
  /**
  * The 'size of 'length' sub-sub field to be included in RDATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#include_length DnsRecordUnknown#include_length}
  */
  readonly includeLength: string;
}

export function dnsRecordUnknownSubfieldValuesToTerraform(struct?: DnsRecordUnknownSubfieldValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    field_value: cdktf.stringToTerraform(struct!.fieldValue),
    include_length: cdktf.stringToTerraform(struct!.includeLength),
  }
}


export function dnsRecordUnknownSubfieldValuesToHclTerraform(struct?: DnsRecordUnknownSubfieldValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_value: {
      value: cdktf.stringToHclTerraform(struct!.fieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_length: {
      value: cdktf.stringToHclTerraform(struct!.includeLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsRecordUnknownSubfieldValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsRecordUnknownSubfieldValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._fieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValue = this._fieldValue;
    }
    if (this._includeLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLength = this._includeLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsRecordUnknownSubfieldValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldType = undefined;
      this._fieldValue = undefined;
      this._includeLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldType = value.fieldType;
      this._fieldValue = value.fieldValue;
      this._includeLength = value.includeLength;
    }
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // field_value - computed: false, optional: false, required: true
  private _fieldValue?: string; 
  public get fieldValue() {
    return this.getStringAttribute('field_value');
  }
  public set fieldValue(value: string) {
    this._fieldValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueInput() {
    return this._fieldValue;
  }

  // include_length - computed: false, optional: false, required: true
  private _includeLength?: string; 
  public get includeLength() {
    return this.getStringAttribute('include_length');
  }
  public set includeLength(value: string) {
    this._includeLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLengthInput() {
    return this._includeLength;
  }
}

export class DnsRecordUnknownSubfieldValuesList extends cdktf.ComplexList {
  public internalValue? : DnsRecordUnknownSubfieldValues[] | cdktf.IResolvable

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
  public get(index: number): DnsRecordUnknownSubfieldValuesOutputReference {
    return new DnsRecordUnknownSubfieldValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown nios_dns_record_unknown}
*/
export class DnsRecordUnknown extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_record_unknown";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsRecordUnknown resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsRecordUnknown to import
  * @param importFromId The id of the existing DnsRecordUnknown that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsRecordUnknown to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_record_unknown", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/dns_record_unknown nios_dns_record_unknown} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsRecordUnknownConfig
  */
  public constructor(scope: Construct, id: string, config: DnsRecordUnknownConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_record_unknown',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
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
    this._creator = config.creator;
    this._disable = config.disable;
    this._enableHostNamePolicy = config.enableHostNamePolicy;
    this._extattrs = config.extattrs;
    this._name = config.name;
    this._recordType = config.recordType;
    this._subfieldValues.internalValue = config.subfieldValues;
    this._ttl = config.ttl;
    this._useTtl = config.useTtl;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DnsRecordUnknownCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
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

  // creator - computed: true, optional: true, required: false
  private _creator?: string; 
  public get creator() {
    return this.getStringAttribute('creator');
  }
  public set creator(value: string) {
    this._creator = value;
  }
  public resetCreator() {
    this._creator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorInput() {
    return this._creator;
  }

  // disable - computed: true, optional: true, required: false
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

  // display_rdata - computed: true, optional: false, required: false
  public get displayRdata() {
    return this.getStringAttribute('display_rdata');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enable_host_name_policy - computed: true, optional: true, required: false
  private _enableHostNamePolicy?: boolean | cdktf.IResolvable; 
  public get enableHostNamePolicy() {
    return this.getBooleanAttribute('enable_host_name_policy');
  }
  public set enableHostNamePolicy(value: boolean | cdktf.IResolvable) {
    this._enableHostNamePolicy = value;
  }
  public resetEnableHostNamePolicy() {
    this._enableHostNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHostNamePolicyInput() {
    return this._enableHostNamePolicy;
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // subfield_values - computed: false, optional: false, required: true
  private _subfieldValues = new DnsRecordUnknownSubfieldValuesList(this, "subfield_values", false);
  public get subfieldValues() {
    return this._subfieldValues;
  }
  public putSubfieldValues(value: DnsRecordUnknownSubfieldValues[] | cdktf.IResolvable) {
    this._subfieldValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subfieldValuesInput() {
    return this._subfieldValues.internalValue;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_ttl - computed: true, optional: true, required: false
  private _useTtl?: boolean | cdktf.IResolvable; 
  public get useTtl() {
    return this.getBooleanAttribute('use_ttl');
  }
  public set useTtl(value: boolean | cdktf.IResolvable) {
    this._useTtl = value;
  }
  public resetUseTtl() {
    this._useTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTtlInput() {
    return this._useTtl;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      creator: cdktf.stringToTerraform(this._creator),
      disable: cdktf.booleanToTerraform(this._disable),
      enable_host_name_policy: cdktf.booleanToTerraform(this._enableHostNamePolicy),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      name: cdktf.stringToTerraform(this._name),
      record_type: cdktf.stringToTerraform(this._recordType),
      subfield_values: cdktf.listMapper(dnsRecordUnknownSubfieldValuesToTerraform, false)(this._subfieldValues.internalValue),
      ttl: cdktf.numberToTerraform(this._ttl),
      use_ttl: cdktf.booleanToTerraform(this._useTtl),
      view: cdktf.stringToTerraform(this._view),
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
      creator: {
        value: cdktf.stringToHclTerraform(this._creator),
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
      enable_host_name_policy: {
        value: cdktf.booleanToHclTerraform(this._enableHostNamePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subfield_values: {
        value: cdktf.listMapperHcl(dnsRecordUnknownSubfieldValuesToHclTerraform, false)(this._subfieldValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsRecordUnknownSubfieldValuesList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_ttl: {
        value: cdktf.booleanToHclTerraform(this._useTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
