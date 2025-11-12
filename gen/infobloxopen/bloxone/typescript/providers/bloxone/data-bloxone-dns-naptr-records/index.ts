// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsNaptrRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#filters DataBloxoneDnsNaptrRecords#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#tag_filters DataBloxoneDnsNaptrRecords#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#action DataBloxoneDnsNaptrRecords#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlToTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlToHclTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsNaptrRecordsResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#ttl DataBloxoneDnsNaptrRecords#ttl}
  */
  readonly ttl?: DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl;
}

export function dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlToTerraform(struct!.ttl),
  }
}


export function dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsNaptrRecordsResultsInheritanceSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsNaptrRecordsResultsInheritanceSources | cdktf.IResolvable | undefined) {
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
  private _ttl = new DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesTtl) {
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
export interface DataBloxoneDnsNaptrRecordsResultsOptions {
}

export function dataBloxoneDnsNaptrRecordsResultsOptionsToTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsNaptrRecordsResultsOptionsToHclTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsNaptrRecordsResultsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsNaptrRecordsResultsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsNaptrRecordsResultsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataBloxoneDnsNaptrRecordsResultsRdata {
  /**
  * A character string containing flags to control aspects of the rewriting and interpretation of the fields in the DNS resource record. The flags that are currently used are:
  * U: Indicates that the output maps to a URI (Uniform Record Identifier).
  * S: Indicates that the output is a domain name that has at least one SRV record. The DNS client must then send a query for the SRV record of the resulting domain name.
  * A: Indicates that the output is a domain name that has at least one A or AAAA record. The DNS client must then send a query for the A or AAAA record of the resulting domain name.
  * P: Indicates that the protocol specified in the services field defines the next step or phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#flags DataBloxoneDnsNaptrRecords#flags}
  */
  readonly flags?: string;
  /**
  * A 16-bit unsigned integer specifying the order in which the NAPTR records must be processed. Low numbers are processed before high numbers, and once a NAPTR is found whose rule “matches” the target, the client must not consider any NAPTRs with a higher value for order (except as noted below for the “flags” field. The range of the value is 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#order DataBloxoneDnsNaptrRecords#order}
  */
  readonly order: number;
  /**
  * A 16-bit unsigned integer that specifies the order in which NAPTR records with equal “order” values should be processed, low numbers being processed before high numbers. This is similar to the preference field in an MX record, and is used so domain administrators can direct clients towards more capable hosts or lighter weight protocols. A client may look at records with higher preference values if it has a good reason to do so such as not understanding the preferred protocol or service. The range of the value is 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#preference DataBloxoneDnsNaptrRecords#preference}
  */
  readonly preference: number;
  /**
  * A string containing a substitution expression that is applied to the original string held by the client in order to construct the next domain name to lookup.
  * 
  * Defaults to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#regexp DataBloxoneDnsNaptrRecords#regexp}
  */
  readonly regexp?: string;
  /**
  * The next name to query for NAPTR, SRV, or address records depending on the value of the flags field. This can be an absolute or relative domain name. Can be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#replacement DataBloxoneDnsNaptrRecords#replacement}
  */
  readonly replacement: string;
  /**
  * Specifies the service(s) available down this rewrite path. It may also specify the particular protocol that is used to talk with a service. A protocol must be specified if the flags field states that the NAPTR is terminal. If a protocol is specified, but the flags field does not state that the NAPTR is terminal, the next lookup must be for a NAPTR. The client may choose not to perform the next lookup if the protocol is unknown, but that behavior must not be relied upon.
  * 
  * The service field may take any of the values below (using the Augmented BNF of RFC 2234):
  * 
  * service_field = [ [protocol] *(“+” rs)]
  * protocol = ALPHA * 31 ALPHANUM
  * rs = ALPHA * 31 ALPHANUM
  * 
  * The protocol and rs fields are limited to 32 characters and must start with an alphabetic character.
  * 
  * For example, an optional protocol specification followed by 0 or more resolution services. Each resolution service is indicated by an initial ‘+’ character.
  * 
  * Note that the empty string is also a valid service field. This will typically be seen at the beginning of a series of rules, when it is impossible to know what services and protocols will be offered by a particular service.
  * 
  * The actual format of the service request and response will be determined by the resolution protocol. Protocols need not offer all services. The labels for service requests shall be formed from the set of characters [A-Z0-9]. The case of the alphabetic characters is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#services DataBloxoneDnsNaptrRecords#services}
  */
  readonly services: string;
}

export function dataBloxoneDnsNaptrRecordsResultsRdataToTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsRdata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flags: cdktf.stringToTerraform(struct!.flags),
    order: cdktf.numberToTerraform(struct!.order),
    preference: cdktf.numberToTerraform(struct!.preference),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    services: cdktf.stringToTerraform(struct!.services),
  }
}


export function dataBloxoneDnsNaptrRecordsResultsRdataToHclTerraform(struct?: DataBloxoneDnsNaptrRecordsResultsRdata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flags: {
      value: cdktf.stringToHclTerraform(struct!.flags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.stringToHclTerraform(struct!.services),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsNaptrRecordsResultsRdataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsNaptrRecordsResultsRdata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsNaptrRecordsResultsRdata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flags = undefined;
      this._order = undefined;
      this._preference = undefined;
      this._regexp = undefined;
      this._replacement = undefined;
      this._services = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flags = value.flags;
      this._order = value.order;
      this._preference = value.preference;
      this._regexp = value.regexp;
      this._replacement = value.replacement;
      this._services = value.services;
    }
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string; 
  public get flags() {
    return this.getStringAttribute('flags');
  }
  public set flags(value: string) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // order - computed: true, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // preference - computed: true, optional: false, required: true
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // regexp - computed: true, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // replacement - computed: true, optional: false, required: true
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // services - computed: true, optional: false, required: true
  private _services?: string; 
  public get services() {
    return this.getStringAttribute('services');
  }
  public set services(value: string) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataBloxoneDnsNaptrRecordsResults {
  /**
  * Synthetic field, used to determine _zone_ and/or _name_in_zone_ field for records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#absolute_name_spec DataBloxoneDnsNaptrRecords#absolute_name_spec}
  */
  readonly absoluteNameSpec?: string;
  /**
  * The description for the DNS resource record. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#comment DataBloxoneDnsNaptrRecords#comment}
  */
  readonly comment?: string;
  /**
  * Indicates if the DNS resource record is disabled. A disabled object is effectively non-existent when generating configuration.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#disabled DataBloxoneDnsNaptrRecords#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#inheritance_sources DataBloxoneDnsNaptrRecords#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDnsNaptrRecordsResultsInheritanceSources;
  /**
  * The relative owner name to the zone origin. Must be specified for creating the DNS resource record and is read only for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#name_in_zone DataBloxoneDnsNaptrRecords#name_in_zone}
  */
  readonly nameInZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#rdata DataBloxoneDnsNaptrRecords#rdata}
  */
  readonly rdata: DataBloxoneDnsNaptrRecordsResultsRdata;
  /**
  * The tags for the DNS resource record in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#tags DataBloxoneDnsNaptrRecords#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The record time to live value in seconds. The range of this value is 0 to 2147483647.  Defaults to TTL value from the SOA record of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#ttl DataBloxoneDnsNaptrRecords#ttl}
  */
  readonly ttl?: number;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#view DataBloxoneDnsNaptrRecords#view}
  */
  readonly view?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#zone DataBloxoneDnsNaptrRecords#zone}
  */
  readonly zone?: string;
}

export function dataBloxoneDnsNaptrRecordsResultsToTerraform(struct?: DataBloxoneDnsNaptrRecordsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_name_spec: cdktf.stringToTerraform(struct!.absoluteNameSpec),
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    inheritance_sources: dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    name_in_zone: cdktf.stringToTerraform(struct!.nameInZone),
    rdata: dataBloxoneDnsNaptrRecordsResultsRdataToTerraform(struct!.rdata),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    view: cdktf.stringToTerraform(struct!.view),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataBloxoneDnsNaptrRecordsResultsToHclTerraform(struct?: DataBloxoneDnsNaptrRecordsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_name_spec: {
      value: cdktf.stringToHclTerraform(struct!.absoluteNameSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inheritance_sources: {
      value: dataBloxoneDnsNaptrRecordsResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsNaptrRecordsResultsInheritanceSources",
    },
    name_in_zone: {
      value: cdktf.stringToHclTerraform(struct!.nameInZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: dataBloxoneDnsNaptrRecordsResultsRdataToHclTerraform(struct!.rdata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsNaptrRecordsResultsRdata",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataBloxoneDnsNaptrRecordsResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDnsNaptrRecordsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteNameSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteNameSpec = this._absoluteNameSpec;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._inheritanceSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritanceSources = this._inheritanceSources?.internalValue;
    }
    if (this._nameInZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameInZone = this._nameInZone;
    }
    if (this._rdata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsNaptrRecordsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._absoluteNameSpec = undefined;
      this._comment = undefined;
      this._disabled = undefined;
      this._inheritanceSources.internalValue = undefined;
      this._nameInZone = undefined;
      this._rdata.internalValue = undefined;
      this._tags = undefined;
      this._ttl = undefined;
      this._view = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._absoluteNameSpec = value.absoluteNameSpec;
      this._comment = value.comment;
      this._disabled = value.disabled;
      this._inheritanceSources.internalValue = value.inheritanceSources;
      this._nameInZone = value.nameInZone;
      this._rdata.internalValue = value.rdata;
      this._tags = value.tags;
      this._ttl = value.ttl;
      this._view = value.view;
      this._zone = value.zone;
    }
  }

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
  private _inheritanceSources = new DataBloxoneDnsNaptrRecordsResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDnsNaptrRecordsResultsInheritanceSources) {
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

  // options - computed: true, optional: false, required: false
  private _options = new DataBloxoneDnsNaptrRecordsResultsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // provider_metadata - computed: true, optional: false, required: false
  private _providerMetadata = new cdktf.StringMap(this, "provider_metadata");
  public get providerMetadata() {
    return this._providerMetadata;
  }

  // rdata - computed: true, optional: false, required: true
  private _rdata = new DataBloxoneDnsNaptrRecordsResultsRdataOutputReference(this, "rdata");
  public get rdata() {
    return this._rdata;
  }
  public putRdata(value: DataBloxoneDnsNaptrRecordsResultsRdata) {
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
}

export class DataBloxoneDnsNaptrRecordsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsNaptrRecordsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsNaptrRecordsResultsOutputReference {
    return new DataBloxoneDnsNaptrRecordsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records bloxone_dns_naptr_records}
*/
export class DataBloxoneDnsNaptrRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_naptr_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsNaptrRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsNaptrRecords to import
  * @param importFromId The id of the existing DataBloxoneDnsNaptrRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsNaptrRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_naptr_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_naptr_records bloxone_dns_naptr_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsNaptrRecordsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsNaptrRecordsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_naptr_records',
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
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneDnsNaptrRecordsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
