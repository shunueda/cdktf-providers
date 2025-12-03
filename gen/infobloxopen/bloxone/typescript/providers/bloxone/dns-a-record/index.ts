// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsARecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Synthetic field, used to determine _zone_ and/or _name_in_zone_ field for records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#absolute_name_spec DnsARecord#absolute_name_spec}
  */
  readonly absoluteNameSpec?: string;
  /**
  * The description for the DNS resource record. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#comment DnsARecord#comment}
  */
  readonly comment?: string;
  /**
  * Indicates if the DNS resource record is disabled. A disabled object is effectively non-existent when generating configuration.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#disabled DnsARecord#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#inheritance_sources DnsARecord#inheritance_sources}
  */
  readonly inheritanceSources?: DnsARecordInheritanceSources;
  /**
  * The relative owner name to the zone origin. Must be specified for creating the DNS resource record and is read only for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#name_in_zone DnsARecord#name_in_zone}
  */
  readonly nameInZone?: string;
  /**
  * The DNS resource record type-specific non-protocol options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#options DnsARecord#options}
  */
  readonly options?: DnsARecordOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#rdata DnsARecord#rdata}
  */
  readonly rdata: DnsARecordRdata;
  /**
  * The tags for the DNS resource record in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#tags DnsARecord#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The record time to live value in seconds. The range of this value is 0 to 2147483647.  Defaults to TTL value from the SOA record of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#ttl DnsARecord#ttl}
  */
  readonly ttl?: number;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#view DnsARecord#view}
  */
  readonly view?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#zone DnsARecord#zone}
  */
  readonly zone?: string;
}
export interface DnsARecordInheritanceSourcesTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#action DnsARecord#action}
  */
  readonly action?: string;
}

export function dnsARecordInheritanceSourcesTtlToTerraform(struct?: DnsARecordInheritanceSourcesTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dnsARecordInheritanceSourcesTtlToHclTerraform(struct?: DnsARecordInheritanceSourcesTtl | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsARecordInheritanceSourcesTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsARecordInheritanceSourcesTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsARecordInheritanceSourcesTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DnsARecordInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#ttl DnsARecord#ttl}
  */
  readonly ttl?: DnsARecordInheritanceSourcesTtl;
}

export function dnsARecordInheritanceSourcesToTerraform(struct?: DnsARecordInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: dnsARecordInheritanceSourcesTtlToTerraform(struct!.ttl),
  }
}


export function dnsARecordInheritanceSourcesToHclTerraform(struct?: DnsARecordInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: dnsARecordInheritanceSourcesTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsARecordInheritanceSourcesTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsARecordInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsARecordInheritanceSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsARecordInheritanceSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ttl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ttl.internalValue = value.ttl;
    }
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl = new DnsARecordInheritanceSourcesTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: DnsARecordInheritanceSourcesTtl) {
    this._ttl.internalValue = value;
  }
  public resetTtl() {
    this._ttl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl.internalValue;
  }
}
export interface DnsARecordOptions {
  /**
  * A boolean flag which can be set to _true_ for POST operation to check the existence of reverse zone for creating the corresponding PTR record. Only applicable if the _create_ptr_ option is set to _true_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#check_rmz DnsARecord#check_rmz}
  */
  readonly checkRmz?: boolean | cdktf.IResolvable;
  /**
  * A boolean flag which can be set to _true_ for POST operation to automatically create the corresponding PTR record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#create_ptr DnsARecord#create_ptr}
  */
  readonly createPtr?: boolean | cdktf.IResolvable;
}

export function dnsARecordOptionsToTerraform(struct?: DnsARecordOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_rmz: cdktf.booleanToTerraform(struct!.checkRmz),
    create_ptr: cdktf.booleanToTerraform(struct!.createPtr),
  }
}


export function dnsARecordOptionsToHclTerraform(struct?: DnsARecordOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_rmz: {
      value: cdktf.booleanToHclTerraform(struct!.checkRmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_ptr: {
      value: cdktf.booleanToHclTerraform(struct!.createPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsARecordOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsARecordOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkRmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkRmz = this._checkRmz;
    }
    if (this._createPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPtr = this._createPtr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsARecordOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkRmz = undefined;
      this._createPtr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkRmz = value.checkRmz;
      this._createPtr = value.createPtr;
    }
  }

  // check_rmz - computed: false, optional: true, required: false
  private _checkRmz?: boolean | cdktf.IResolvable; 
  public get checkRmz() {
    return this.getBooleanAttribute('check_rmz');
  }
  public set checkRmz(value: boolean | cdktf.IResolvable) {
    this._checkRmz = value;
  }
  public resetCheckRmz() {
    this._checkRmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRmzInput() {
    return this._checkRmz;
  }

  // create_ptr - computed: false, optional: true, required: false
  private _createPtr?: boolean | cdktf.IResolvable; 
  public get createPtr() {
    return this.getBooleanAttribute('create_ptr');
  }
  public set createPtr(value: boolean | cdktf.IResolvable) {
    this._createPtr = value;
  }
  public resetCreatePtr() {
    this._createPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPtrInput() {
    return this._createPtr;
  }
}
export interface DnsARecordRdata {
  /**
  * The IPv4 address of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#address DnsARecord#address}
  */
  readonly address: string;
}

export function dnsARecordRdataToTerraform(struct?: DnsARecordRdata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dnsARecordRdataToHclTerraform(struct?: DnsARecordRdata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsARecordRdataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsARecordRdata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsARecordRdata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record bloxone_dns_a_record}
*/
export class DnsARecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_a_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsARecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsARecord to import
  * @param importFromId The id of the existing DnsARecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsARecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_a_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dns_a_record bloxone_dns_a_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsARecordConfig
  */
  public constructor(scope: Construct, id: string, config: DnsARecordConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_a_record',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._absoluteNameSpec = config.absoluteNameSpec;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._inheritanceSources.internalValue = config.inheritanceSources;
    this._nameInZone = config.nameInZone;
    this._options.internalValue = config.options;
    this._rdata.internalValue = config.rdata;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._view = config.view;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // absolute_name_spec - computed: true, optional: true, required: false
  private _absoluteNameSpec?: string; 
  public get absoluteNameSpec() {
    return this.getStringAttribute('absolute_name_spec');
  }
  public set absoluteNameSpec(value: string) {
    this._absoluteNameSpec = value;
  }
  public resetAbsoluteNameSpec() {
    this._absoluteNameSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteNameSpecInput() {
    return this._absoluteNameSpec;
  }

  // absolute_zone_name - computed: true, optional: false, required: false
  public get absoluteZoneName() {
    return this.getStringAttribute('absolute_zone_name');
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

  // delegation - computed: true, optional: false, required: false
  public get delegation() {
    return this.getStringAttribute('delegation');
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dns_absolute_name_spec - computed: true, optional: false, required: false
  public get dnsAbsoluteNameSpec() {
    return this.getStringAttribute('dns_absolute_name_spec');
  }

  // dns_absolute_zone_name - computed: true, optional: false, required: false
  public get dnsAbsoluteZoneName() {
    return this.getStringAttribute('dns_absolute_zone_name');
  }

  // dns_name_in_zone - computed: true, optional: false, required: false
  public get dnsNameInZone() {
    return this.getStringAttribute('dns_name_in_zone');
  }

  // dns_rdata - computed: true, optional: false, required: false
  public get dnsRdata() {
    return this.getStringAttribute('dns_rdata');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inheritance_sources - computed: true, optional: true, required: false
  private _inheritanceSources = new DnsARecordInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DnsARecordInheritanceSources) {
    this._inheritanceSources.internalValue = value;
  }
  public resetInheritanceSources() {
    this._inheritanceSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceSourcesInput() {
    return this._inheritanceSources.internalValue;
  }

  // ipam_host - computed: true, optional: false, required: false
  public get ipamHost() {
    return this.getStringAttribute('ipam_host');
  }

  // name_in_zone - computed: true, optional: true, required: false
  private _nameInZone?: string; 
  public get nameInZone() {
    return this.getStringAttribute('name_in_zone');
  }
  public set nameInZone(value: string) {
    this._nameInZone = value;
  }
  public resetNameInZone() {
    this._nameInZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInZoneInput() {
    return this._nameInZone;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DnsARecordOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DnsARecordOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // provider_metadata - computed: true, optional: false, required: false
  private _providerMetadata = new cdktf.StringMap(this, "provider_metadata");
  public get providerMetadata() {
    return this._providerMetadata;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata = new DnsARecordRdataOutputReference(this, "rdata");
  public get rdata() {
    return this._rdata;
  }
  public putRdata(value: DnsARecordRdata) {
    this._rdata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata.internalValue;
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // view_name - computed: true, optional: false, required: false
  public get viewName() {
    return this.getStringAttribute('view_name');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      absolute_name_spec: cdktf.stringToTerraform(this._absoluteNameSpec),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      inheritance_sources: dnsARecordInheritanceSourcesToTerraform(this._inheritanceSources.internalValue),
      name_in_zone: cdktf.stringToTerraform(this._nameInZone),
      options: dnsARecordOptionsToTerraform(this._options.internalValue),
      rdata: dnsARecordRdataToTerraform(this._rdata.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
      view: cdktf.stringToTerraform(this._view),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      absolute_name_spec: {
        value: cdktf.stringToHclTerraform(this._absoluteNameSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      inheritance_sources: {
        value: dnsARecordInheritanceSourcesToHclTerraform(this._inheritanceSources.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsARecordInheritanceSources",
      },
      name_in_zone: {
        value: cdktf.stringToHclTerraform(this._nameInZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: dnsARecordOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsARecordOptions",
      },
      rdata: {
        value: dnsARecordRdataToHclTerraform(this._rdata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsARecordRdata",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
