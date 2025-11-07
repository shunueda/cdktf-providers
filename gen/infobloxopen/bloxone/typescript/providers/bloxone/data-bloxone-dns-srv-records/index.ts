// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDnsSrvRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#filters DataBloxoneDnsSrvRecords#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#tag_filters DataBloxoneDnsSrvRecords#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl {
  /**
  * The inheritance setting for a field. Valid values are:
  *   * _inherit_: Use the inherited value.
  *   * _override_: Use the value set in the object.
  * 
  *   Defaults to _inherit_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#action DataBloxoneDnsSrvRecords#action}
  */
  readonly action?: string;
}

export function dataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlToTerraform(struct?: DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function dataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlToHclTerraform(struct?: DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable): any {
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

export class DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl | cdktf.IResolvable | undefined) {
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
export interface DataBloxoneDnsSrvRecordsResultsInheritanceSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#ttl DataBloxoneDnsSrvRecords#ttl}
  */
  readonly ttl?: DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl;
}

export function dataBloxoneDnsSrvRecordsResultsInheritanceSourcesToTerraform(struct?: DataBloxoneDnsSrvRecordsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: dataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlToTerraform(struct!.ttl),
  }
}


export function dataBloxoneDnsSrvRecordsResultsInheritanceSourcesToHclTerraform(struct?: DataBloxoneDnsSrvRecordsResultsInheritanceSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: dataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlToHclTerraform(struct!.ttl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsSrvRecordsResultsInheritanceSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsSrvRecordsResultsInheritanceSources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataBloxoneDnsSrvRecordsResultsInheritanceSources | cdktf.IResolvable | undefined) {
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
  private _ttl = new DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtlOutputReference(this, "ttl");
  public get ttl() {
    return this._ttl;
  }
  public putTtl(value: DataBloxoneDnsSrvRecordsResultsInheritanceSourcesTtl) {
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
export interface DataBloxoneDnsSrvRecordsResultsOptions {
}

export function dataBloxoneDnsSrvRecordsResultsOptionsToTerraform(struct?: DataBloxoneDnsSrvRecordsResultsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDnsSrvRecordsResultsOptionsToHclTerraform(struct?: DataBloxoneDnsSrvRecordsResultsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDnsSrvRecordsResultsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsSrvRecordsResultsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsSrvRecordsResultsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataBloxoneDnsSrvRecordsResultsRdata {
  /**
  * An unsigned 16-bit integer which specifies the port on this target host of this service. The range of the value is 0 to 65535. This is often as specified in Assigned Numbers but need not be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#port DataBloxoneDnsSrvRecords#port}
  */
  readonly port: number;
  /**
  * An unsigned 16-bit integer which specifies the priority of this target host. The range of the value is 0 to 65535. A client must attempt to contact the target host with the lowest-numbered priority it can reach. Target hosts with the same priority should be tried in an order defined by the weight field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#priority DataBloxoneDnsSrvRecords#priority}
  */
  readonly priority: number;
  /**
  * The domain name of the target host. There must be one or more address records for this name, the name must not be an alias (in the sense of RFC 1034 or RFC 2181).
  * 
  * A target of “.” means that the service is decidedly not available at this domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#target DataBloxoneDnsSrvRecords#target}
  */
  readonly target: string;
  /**
  * An unsigned 16-bit integer which specifies a relative weight for entries with the same priority. The range of the value is 0 to 65535. Larger weights should be given a proportionately higher probability of being selected. Domain administrators should use weight 0 when there isn’t any server selection to do, to make the RR easier to read for humans (less noisy). In the presence of records containing weights greater than 0, records with weight 0 should have a very small chance of being selected.
  * 
  * In the absence of a protocol whose specification calls for the use of other weighting information, a client arranges the SRV RRs of the same priority in the order in which target hosts, specified by the SRV RRs, will be contacted.
  * 
  * Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#weight DataBloxoneDnsSrvRecords#weight}
  */
  readonly weight?: number;
}

export function dataBloxoneDnsSrvRecordsResultsRdataToTerraform(struct?: DataBloxoneDnsSrvRecordsResultsRdata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    target: cdktf.stringToTerraform(struct!.target),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataBloxoneDnsSrvRecordsResultsRdataToHclTerraform(struct?: DataBloxoneDnsSrvRecordsResultsRdata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDnsSrvRecordsResultsRdataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneDnsSrvRecordsResultsRdata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDnsSrvRecordsResultsRdata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._priority = undefined;
      this._target = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._priority = value.priority;
      this._target = value.target;
      this._weight = value.weight;
    }
  }

  // port - computed: true, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority - computed: true, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataBloxoneDnsSrvRecordsResults {
  /**
  * Synthetic field, used to determine _zone_ and/or _name_in_zone_ field for records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#absolute_name_spec DataBloxoneDnsSrvRecords#absolute_name_spec}
  */
  readonly absoluteNameSpec?: string;
  /**
  * The description for the DNS resource record. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#comment DataBloxoneDnsSrvRecords#comment}
  */
  readonly comment?: string;
  /**
  * Indicates if the DNS resource record is disabled. A disabled object is effectively non-existent when generating configuration.  Defaults to _false_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#disabled DataBloxoneDnsSrvRecords#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#inheritance_sources DataBloxoneDnsSrvRecords#inheritance_sources}
  */
  readonly inheritanceSources?: DataBloxoneDnsSrvRecordsResultsInheritanceSources;
  /**
  * The relative owner name to the zone origin. Must be specified for creating the DNS resource record and is read only for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#name_in_zone DataBloxoneDnsSrvRecords#name_in_zone}
  */
  readonly nameInZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#rdata DataBloxoneDnsSrvRecords#rdata}
  */
  readonly rdata: DataBloxoneDnsSrvRecordsResultsRdata;
  /**
  * The tags for the DNS resource record in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#tags DataBloxoneDnsSrvRecords#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The record time to live value in seconds. The range of this value is 0 to 2147483647.  Defaults to TTL value from the SOA record of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#ttl DataBloxoneDnsSrvRecords#ttl}
  */
  readonly ttl?: number;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#view DataBloxoneDnsSrvRecords#view}
  */
  readonly view?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#zone DataBloxoneDnsSrvRecords#zone}
  */
  readonly zone?: string;
}

export function dataBloxoneDnsSrvRecordsResultsToTerraform(struct?: DataBloxoneDnsSrvRecordsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_name_spec: cdktf.stringToTerraform(struct!.absoluteNameSpec),
    comment: cdktf.stringToTerraform(struct!.comment),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    inheritance_sources: dataBloxoneDnsSrvRecordsResultsInheritanceSourcesToTerraform(struct!.inheritanceSources),
    name_in_zone: cdktf.stringToTerraform(struct!.nameInZone),
    rdata: dataBloxoneDnsSrvRecordsResultsRdataToTerraform(struct!.rdata),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    view: cdktf.stringToTerraform(struct!.view),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataBloxoneDnsSrvRecordsResultsToHclTerraform(struct?: DataBloxoneDnsSrvRecordsResults): any {
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
      value: dataBloxoneDnsSrvRecordsResultsInheritanceSourcesToHclTerraform(struct!.inheritanceSources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsSrvRecordsResultsInheritanceSources",
    },
    name_in_zone: {
      value: cdktf.stringToHclTerraform(struct!.nameInZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: dataBloxoneDnsSrvRecordsResultsRdataToHclTerraform(struct!.rdata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataBloxoneDnsSrvRecordsResultsRdata",
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

export class DataBloxoneDnsSrvRecordsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDnsSrvRecordsResults | undefined {
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

  public set internalValue(value: DataBloxoneDnsSrvRecordsResults | undefined) {
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
  private _inheritanceSources = new DataBloxoneDnsSrvRecordsResultsInheritanceSourcesOutputReference(this, "inheritance_sources");
  public get inheritanceSources() {
    return this._inheritanceSources;
  }
  public putInheritanceSources(value: DataBloxoneDnsSrvRecordsResultsInheritanceSources) {
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
  private _options = new DataBloxoneDnsSrvRecordsResultsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }

  // provider_metadata - computed: true, optional: false, required: false
  private _providerMetadata = new cdktf.StringMap(this, "provider_metadata");
  public get providerMetadata() {
    return this._providerMetadata;
  }

  // rdata - computed: true, optional: false, required: true
  private _rdata = new DataBloxoneDnsSrvRecordsResultsRdataOutputReference(this, "rdata");
  public get rdata() {
    return this._rdata;
  }
  public putRdata(value: DataBloxoneDnsSrvRecordsResultsRdata) {
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

export class DataBloxoneDnsSrvRecordsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDnsSrvRecordsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDnsSrvRecordsResultsOutputReference {
    return new DataBloxoneDnsSrvRecordsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records bloxone_dns_srv_records}
*/
export class DataBloxoneDnsSrvRecords extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dns_srv_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDnsSrvRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDnsSrvRecords to import
  * @param importFromId The id of the existing DataBloxoneDnsSrvRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDnsSrvRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dns_srv_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/dns_srv_records bloxone_dns_srv_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDnsSrvRecordsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDnsSrvRecordsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dns_srv_records',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
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
  private _results = new DataBloxoneDnsSrvRecordsResultsList(this, "results", false);
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
