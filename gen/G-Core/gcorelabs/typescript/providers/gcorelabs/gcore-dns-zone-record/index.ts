// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreDnsZoneRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * A domain of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#domain GcoreDnsZoneRecord#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#id GcoreDnsZoneRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A ttl of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#ttl GcoreDnsZoneRecord#ttl}
  */
  readonly ttl?: number;
  /**
  * A type of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#type GcoreDnsZoneRecord#type}
  */
  readonly type: string;
  /**
  * A zone of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#zone GcoreDnsZoneRecord#zone}
  */
  readonly zone: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#filter GcoreDnsZoneRecord#filter}
  */
  readonly filter?: GcoreDnsZoneRecordFilter[] | cdktf.IResolvable;
  /**
  * resource_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#resource_record GcoreDnsZoneRecord#resource_record}
  */
  readonly resourceRecord: GcoreDnsZoneRecordResourceRecord[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#timeouts GcoreDnsZoneRecord#timeouts}
  */
  readonly timeouts?: GcoreDnsZoneRecordTimeouts;
}
export interface GcoreDnsZoneRecordFilter {
  /**
  * A DNS Zone Record filter option that describe how many records will be percolated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#limit GcoreDnsZoneRecord#limit}
  */
  readonly limit?: number;
  /**
  * A DNS Zone Record filter option that describe possibility to return answers if no records were percolated through filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#strict GcoreDnsZoneRecord#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
  /**
  * A DNS Zone Record filter option that describe a name of filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#type GcoreDnsZoneRecord#type}
  */
  readonly type: string;
}

export function gcoreDnsZoneRecordFilterToTerraform(struct?: GcoreDnsZoneRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    strict: cdktf.booleanToTerraform(struct!.strict),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function gcoreDnsZoneRecordFilterToHclTerraform(struct?: GcoreDnsZoneRecordFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreDnsZoneRecordFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreDnsZoneRecordFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreDnsZoneRecordFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._strict = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._strict = value.strict;
      this._type = value.type;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
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
}

export class GcoreDnsZoneRecordFilterList extends cdktf.ComplexList {
  public internalValue? : GcoreDnsZoneRecordFilter[] | cdktf.IResolvable

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
  public get(index: number): GcoreDnsZoneRecordFilterOutputReference {
    return new GcoreDnsZoneRecordFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreDnsZoneRecordResourceRecordMeta {
  /**
  * An asn meta (e.g. 12345) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#asn GcoreDnsZoneRecord#asn}
  */
  readonly asn?: number[];
  /**
  * Continents meta (e.g. Asia) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#continents GcoreDnsZoneRecord#continents}
  */
  readonly continents?: string[];
  /**
  * Countries meta (e.g. USA) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#countries GcoreDnsZoneRecord#countries}
  */
  readonly countries?: string[];
  /**
  * Fallback meta equals true marks records which are used as a default answer (when nothing was selected by specified meta fields).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#default GcoreDnsZoneRecord#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * An ip meta (e.g. 127.0.0.0) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#ip GcoreDnsZoneRecord#ip}
  */
  readonly ip?: string[];
  /**
  * A latlong meta (e.g. 27.988056, 86.925278) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#latlong GcoreDnsZoneRecord#latlong}
  */
  readonly latlong?: number[];
  /**
  * A notes meta (e.g. Miami DC) of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#notes GcoreDnsZoneRecord#notes}
  */
  readonly notes?: string[];
}

export function gcoreDnsZoneRecordResourceRecordMetaToTerraform(struct?: GcoreDnsZoneRecordResourceRecordMetaOutputReference | GcoreDnsZoneRecordResourceRecordMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asn),
    continents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.continents),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    default: cdktf.booleanToTerraform(struct!.default),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    latlong: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.latlong),
    notes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notes),
  }
}


export function gcoreDnsZoneRecordResourceRecordMetaToHclTerraform(struct?: GcoreDnsZoneRecordResourceRecordMetaOutputReference | GcoreDnsZoneRecordResourceRecordMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asn),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    continents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.continents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    latlong: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.latlong),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    notes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreDnsZoneRecordResourceRecordMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcoreDnsZoneRecordResourceRecordMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._continents !== undefined) {
      hasAnyValues = true;
      internalValueResult.continents = this._continents;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._latlong !== undefined) {
      hasAnyValues = true;
      internalValueResult.latlong = this._latlong;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreDnsZoneRecordResourceRecordMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._continents = undefined;
      this._countries = undefined;
      this._default = undefined;
      this._ip = undefined;
      this._latlong = undefined;
      this._notes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._continents = value.continents;
      this._countries = value.countries;
      this._default = value.default;
      this._ip = value.ip;
      this._latlong = value.latlong;
      this._notes = value.notes;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number[]; 
  public get asn() {
    return this.getNumberListAttribute('asn');
  }
  public set asn(value: number[]) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // continents - computed: false, optional: true, required: false
  private _continents?: string[]; 
  public get continents() {
    return this.getListAttribute('continents');
  }
  public set continents(value: string[]) {
    this._continents = value;
  }
  public resetContinents() {
    this._continents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentsInput() {
    return this._continents;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return this.getListAttribute('ip');
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // latlong - computed: false, optional: true, required: false
  private _latlong?: number[]; 
  public get latlong() {
    return this.getNumberListAttribute('latlong');
  }
  public set latlong(value: number[]) {
    this._latlong = value;
  }
  public resetLatlong() {
    this._latlong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlongInput() {
    return this._latlong;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string[]; 
  public get notes() {
    return this.getListAttribute('notes');
  }
  public set notes(value: string[]) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }
}
export interface GcoreDnsZoneRecordResourceRecord {
  /**
  * A content of DNS Zone Record resource. (TXT: 'anyString', MX: '50 mail.company.io.', CAA: '0 issue "company.org; account=12345"')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#content GcoreDnsZoneRecord#content}
  */
  readonly content: string;
  /**
  * Manage of public appearing of DNS Zone Record resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#enabled GcoreDnsZoneRecord#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#meta GcoreDnsZoneRecord#meta}
  */
  readonly meta?: GcoreDnsZoneRecordResourceRecordMeta;
}

export function gcoreDnsZoneRecordResourceRecordToTerraform(struct?: GcoreDnsZoneRecordResourceRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    meta: gcoreDnsZoneRecordResourceRecordMetaToTerraform(struct!.meta),
  }
}


export function gcoreDnsZoneRecordResourceRecordToHclTerraform(struct?: GcoreDnsZoneRecordResourceRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    meta: {
      value: gcoreDnsZoneRecordResourceRecordMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "set",
      storageClassType: "GcoreDnsZoneRecordResourceRecordMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreDnsZoneRecordResourceRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcoreDnsZoneRecordResourceRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreDnsZoneRecordResourceRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._enabled = undefined;
      this._meta.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._enabled = value.enabled;
      this._meta.internalValue = value.meta;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new GcoreDnsZoneRecordResourceRecordMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: GcoreDnsZoneRecordResourceRecordMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }
}

export class GcoreDnsZoneRecordResourceRecordList extends cdktf.ComplexList {
  public internalValue? : GcoreDnsZoneRecordResourceRecord[] | cdktf.IResolvable

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
  public get(index: number): GcoreDnsZoneRecordResourceRecordOutputReference {
    return new GcoreDnsZoneRecordResourceRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcoreDnsZoneRecordTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#create GcoreDnsZoneRecord#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#delete GcoreDnsZoneRecord#delete}
  */
  readonly delete?: string;
}

export function gcoreDnsZoneRecordTimeoutsToTerraform(struct?: GcoreDnsZoneRecordTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function gcoreDnsZoneRecordTimeoutsToHclTerraform(struct?: GcoreDnsZoneRecordTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcoreDnsZoneRecordTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GcoreDnsZoneRecordTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcoreDnsZoneRecordTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record gcore_dns_zone_record}
*/
export class GcoreDnsZoneRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_dns_zone_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreDnsZoneRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreDnsZoneRecord to import
  * @param importFromId The id of the existing GcoreDnsZoneRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreDnsZoneRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_dns_zone_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_dns_zone_record gcore_dns_zone_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreDnsZoneRecordConfig
  */
  public constructor(scope: Construct, id: string, config: GcoreDnsZoneRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_dns_zone_record',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._ttl = config.ttl;
    this._type = config.type;
    this._zone = config.zone;
    this._filter.internalValue = config.filter;
    this._resourceRecord.internalValue = config.resourceRecord;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ttl - computed: false, optional: true, required: false
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

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new GcoreDnsZoneRecordFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: GcoreDnsZoneRecordFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // resource_record - computed: false, optional: false, required: true
  private _resourceRecord = new GcoreDnsZoneRecordResourceRecordList(this, "resource_record", true);
  public get resourceRecord() {
    return this._resourceRecord;
  }
  public putResourceRecord(value: GcoreDnsZoneRecordResourceRecord[] | cdktf.IResolvable) {
    this._resourceRecord.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRecordInput() {
    return this._resourceRecord.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GcoreDnsZoneRecordTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GcoreDnsZoneRecordTimeouts) {
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      zone: cdktf.stringToTerraform(this._zone),
      filter: cdktf.listMapper(gcoreDnsZoneRecordFilterToTerraform, true)(this._filter.internalValue),
      resource_record: cdktf.listMapper(gcoreDnsZoneRecordResourceRecordToTerraform, true)(this._resourceRecord.internalValue),
      timeouts: gcoreDnsZoneRecordTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      filter: {
        value: cdktf.listMapperHcl(gcoreDnsZoneRecordFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcoreDnsZoneRecordFilterList",
      },
      resource_record: {
        value: cdktf.listMapperHcl(gcoreDnsZoneRecordResourceRecordToHclTerraform, true)(this._resourceRecord.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcoreDnsZoneRecordResourceRecordList",
      },
      timeouts: {
        value: gcoreDnsZoneRecordTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GcoreDnsZoneRecordTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
