// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDnsCacheOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#id DataThunderDdosDnsCacheOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS Cache Instance Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#name DataThunderDdosDnsCacheOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#oper DataThunderDdosDnsCacheOper#oper}
  */
  readonly oper?: DataThunderDdosDnsCacheOperOper;
  /**
  * zone_transfer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer DataThunderDdosDnsCacheOper#zone_transfer}
  */
  readonly zoneTransfer?: DataThunderDdosDnsCacheOperZoneTransfer;
}
export interface DataThunderDdosDnsCacheOperOperAdditionalSection {
  /**
  * Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_class DataThunderDdosDnsCacheOper#record_class}
  */
  readonly recordClass?: string;
  /**
  * Record Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_data DataThunderDdosDnsCacheOper#record_data}
  */
  readonly recordData?: string;
  /**
  * Name of the Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_domain_name DataThunderDdosDnsCacheOper#record_domain_name}
  */
  readonly recordDomainName?: string;
  /**
  * TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_ttl DataThunderDdosDnsCacheOper#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * Type of the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_type DataThunderDdosDnsCacheOper#record_type}
  */
  readonly recordType?: string;
}

export function dataThunderDdosDnsCacheOperOperAdditionalSectionToTerraform(struct?: DataThunderDdosDnsCacheOperOperAdditionalSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_class: cdktf.stringToTerraform(struct!.recordClass),
    record_data: cdktf.stringToTerraform(struct!.recordData),
    record_domain_name: cdktf.stringToTerraform(struct!.recordDomainName),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function dataThunderDdosDnsCacheOperOperAdditionalSectionToHclTerraform(struct?: DataThunderDdosDnsCacheOperOperAdditionalSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_class: {
      value: cdktf.stringToHclTerraform(struct!.recordClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_data: {
      value: cdktf.stringToHclTerraform(struct!.recordData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.recordDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperOperAdditionalSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperOperAdditionalSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClass = this._recordClass;
    }
    if (this._recordData !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordData = this._recordData;
    }
    if (this._recordDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDomainName = this._recordDomainName;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperOperAdditionalSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordClass = undefined;
      this._recordData = undefined;
      this._recordDomainName = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordClass = value.recordClass;
      this._recordData = value.recordData;
      this._recordDomainName = value.recordDomainName;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
    }
  }

  // record_class - computed: false, optional: true, required: false
  private _recordClass?: string; 
  public get recordClass() {
    return this.getStringAttribute('record_class');
  }
  public set recordClass(value: string) {
    this._recordClass = value;
  }
  public resetRecordClass() {
    this._recordClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClassInput() {
    return this._recordClass;
  }

  // record_data - computed: false, optional: true, required: false
  private _recordData?: string; 
  public get recordData() {
    return this.getStringAttribute('record_data');
  }
  public set recordData(value: string) {
    this._recordData = value;
  }
  public resetRecordData() {
    this._recordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDataInput() {
    return this._recordData;
  }

  // record_domain_name - computed: false, optional: true, required: false
  private _recordDomainName?: string; 
  public get recordDomainName() {
    return this.getStringAttribute('record_domain_name');
  }
  public set recordDomainName(value: string) {
    this._recordDomainName = value;
  }
  public resetRecordDomainName() {
    this._recordDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDomainNameInput() {
    return this._recordDomainName;
  }

  // record_ttl - computed: false, optional: true, required: false
  private _recordTtl?: number; 
  public get recordTtl() {
    return this.getNumberAttribute('record_ttl');
  }
  public set recordTtl(value: number) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}

export class DataThunderDdosDnsCacheOperOperAdditionalSectionList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperOperAdditionalSection[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperOperAdditionalSectionOutputReference {
    return new DataThunderDdosDnsCacheOperOperAdditionalSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperOperAnswerSection {
  /**
  * Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_class DataThunderDdosDnsCacheOper#record_class}
  */
  readonly recordClass?: string;
  /**
  * Record Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_data DataThunderDdosDnsCacheOper#record_data}
  */
  readonly recordData?: string;
  /**
  * Name of the Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_domain_name DataThunderDdosDnsCacheOper#record_domain_name}
  */
  readonly recordDomainName?: string;
  /**
  * TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_ttl DataThunderDdosDnsCacheOper#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * Type of the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_type DataThunderDdosDnsCacheOper#record_type}
  */
  readonly recordType?: string;
}

export function dataThunderDdosDnsCacheOperOperAnswerSectionToTerraform(struct?: DataThunderDdosDnsCacheOperOperAnswerSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_class: cdktf.stringToTerraform(struct!.recordClass),
    record_data: cdktf.stringToTerraform(struct!.recordData),
    record_domain_name: cdktf.stringToTerraform(struct!.recordDomainName),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function dataThunderDdosDnsCacheOperOperAnswerSectionToHclTerraform(struct?: DataThunderDdosDnsCacheOperOperAnswerSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_class: {
      value: cdktf.stringToHclTerraform(struct!.recordClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_data: {
      value: cdktf.stringToHclTerraform(struct!.recordData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.recordDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperOperAnswerSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperOperAnswerSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClass = this._recordClass;
    }
    if (this._recordData !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordData = this._recordData;
    }
    if (this._recordDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDomainName = this._recordDomainName;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperOperAnswerSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordClass = undefined;
      this._recordData = undefined;
      this._recordDomainName = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordClass = value.recordClass;
      this._recordData = value.recordData;
      this._recordDomainName = value.recordDomainName;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
    }
  }

  // record_class - computed: false, optional: true, required: false
  private _recordClass?: string; 
  public get recordClass() {
    return this.getStringAttribute('record_class');
  }
  public set recordClass(value: string) {
    this._recordClass = value;
  }
  public resetRecordClass() {
    this._recordClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClassInput() {
    return this._recordClass;
  }

  // record_data - computed: false, optional: true, required: false
  private _recordData?: string; 
  public get recordData() {
    return this.getStringAttribute('record_data');
  }
  public set recordData(value: string) {
    this._recordData = value;
  }
  public resetRecordData() {
    this._recordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDataInput() {
    return this._recordData;
  }

  // record_domain_name - computed: false, optional: true, required: false
  private _recordDomainName?: string; 
  public get recordDomainName() {
    return this.getStringAttribute('record_domain_name');
  }
  public set recordDomainName(value: string) {
    this._recordDomainName = value;
  }
  public resetRecordDomainName() {
    this._recordDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDomainNameInput() {
    return this._recordDomainName;
  }

  // record_ttl - computed: false, optional: true, required: false
  private _recordTtl?: number; 
  public get recordTtl() {
    return this.getNumberAttribute('record_ttl');
  }
  public set recordTtl(value: number) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}

export class DataThunderDdosDnsCacheOperOperAnswerSectionList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperOperAnswerSection[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperOperAnswerSectionOutputReference {
    return new DataThunderDdosDnsCacheOperOperAnswerSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperOperAuthoritativeSection {
  /**
  * Class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_class DataThunderDdosDnsCacheOper#record_class}
  */
  readonly recordClass?: string;
  /**
  * Record Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_data DataThunderDdosDnsCacheOper#record_data}
  */
  readonly recordData?: string;
  /**
  * Name of the Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_domain_name DataThunderDdosDnsCacheOper#record_domain_name}
  */
  readonly recordDomainName?: string;
  /**
  * TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_ttl DataThunderDdosDnsCacheOper#record_ttl}
  */
  readonly recordTtl?: number;
  /**
  * Type of the record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_type DataThunderDdosDnsCacheOper#record_type}
  */
  readonly recordType?: string;
}

export function dataThunderDdosDnsCacheOperOperAuthoritativeSectionToTerraform(struct?: DataThunderDdosDnsCacheOperOperAuthoritativeSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_class: cdktf.stringToTerraform(struct!.recordClass),
    record_data: cdktf.stringToTerraform(struct!.recordData),
    record_domain_name: cdktf.stringToTerraform(struct!.recordDomainName),
    record_ttl: cdktf.numberToTerraform(struct!.recordTtl),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function dataThunderDdosDnsCacheOperOperAuthoritativeSectionToHclTerraform(struct?: DataThunderDdosDnsCacheOperOperAuthoritativeSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_class: {
      value: cdktf.stringToHclTerraform(struct!.recordClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_data: {
      value: cdktf.stringToHclTerraform(struct!.recordData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.recordDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_ttl: {
      value: cdktf.numberToHclTerraform(struct!.recordTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperOperAuthoritativeSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperOperAuthoritativeSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClass = this._recordClass;
    }
    if (this._recordData !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordData = this._recordData;
    }
    if (this._recordDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordDomainName = this._recordDomainName;
    }
    if (this._recordTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTtl = this._recordTtl;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperOperAuthoritativeSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordClass = undefined;
      this._recordData = undefined;
      this._recordDomainName = undefined;
      this._recordTtl = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordClass = value.recordClass;
      this._recordData = value.recordData;
      this._recordDomainName = value.recordDomainName;
      this._recordTtl = value.recordTtl;
      this._recordType = value.recordType;
    }
  }

  // record_class - computed: false, optional: true, required: false
  private _recordClass?: string; 
  public get recordClass() {
    return this.getStringAttribute('record_class');
  }
  public set recordClass(value: string) {
    this._recordClass = value;
  }
  public resetRecordClass() {
    this._recordClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClassInput() {
    return this._recordClass;
  }

  // record_data - computed: false, optional: true, required: false
  private _recordData?: string; 
  public get recordData() {
    return this.getStringAttribute('record_data');
  }
  public set recordData(value: string) {
    this._recordData = value;
  }
  public resetRecordData() {
    this._recordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDataInput() {
    return this._recordData;
  }

  // record_domain_name - computed: false, optional: true, required: false
  private _recordDomainName?: string; 
  public get recordDomainName() {
    return this.getStringAttribute('record_domain_name');
  }
  public set recordDomainName(value: string) {
    this._recordDomainName = value;
  }
  public resetRecordDomainName() {
    this._recordDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordDomainNameInput() {
    return this._recordDomainName;
  }

  // record_ttl - computed: false, optional: true, required: false
  private _recordTtl?: number; 
  public get recordTtl() {
    return this.getNumberAttribute('record_ttl');
  }
  public set recordTtl(value: number) {
    this._recordTtl = value;
  }
  public resetRecordTtl() {
    this._recordTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTtlInput() {
    return this._recordTtl;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}

export class DataThunderDdosDnsCacheOperOperAuthoritativeSectionList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperOperAuthoritativeSection[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperOperAuthoritativeSectionOutputReference {
    return new DataThunderDdosDnsCacheOperOperAuthoritativeSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperOperDomainEntries {
  /**
  * Delegation Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#delegation_node DataThunderDdosDnsCacheOper#delegation_node}
  */
  readonly delegationNode?: string;
  /**
  * Empty Non-Terminal Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#empty_non_terminal_node DataThunderDdosDnsCacheOper#empty_non_terminal_node}
  */
  readonly emptyNonTerminalNode?: string;
  /**
  * FQDN Manual Override Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#fqdn_manual_override_action DataThunderDdosDnsCacheOper#fqdn_manual_override_action}
  */
  readonly fqdnManualOverrideAction?: string;
  /**
  * FQDN Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#fqdn_name DataThunderDdosDnsCacheOper#fqdn_name}
  */
  readonly fqdnName?: string;
  /**
  * Type of the records supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_types DataThunderDdosDnsCacheOper#record_types}
  */
  readonly recordTypes?: string;
  /**
  * Wild Card Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#wild_card_node DataThunderDdosDnsCacheOper#wild_card_node}
  */
  readonly wildCardNode?: string;
}

export function dataThunderDdosDnsCacheOperOperDomainEntriesToTerraform(struct?: DataThunderDdosDnsCacheOperOperDomainEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegation_node: cdktf.stringToTerraform(struct!.delegationNode),
    empty_non_terminal_node: cdktf.stringToTerraform(struct!.emptyNonTerminalNode),
    fqdn_manual_override_action: cdktf.stringToTerraform(struct!.fqdnManualOverrideAction),
    fqdn_name: cdktf.stringToTerraform(struct!.fqdnName),
    record_types: cdktf.stringToTerraform(struct!.recordTypes),
    wild_card_node: cdktf.stringToTerraform(struct!.wildCardNode),
  }
}


export function dataThunderDdosDnsCacheOperOperDomainEntriesToHclTerraform(struct?: DataThunderDdosDnsCacheOperOperDomainEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegation_node: {
      value: cdktf.stringToHclTerraform(struct!.delegationNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    empty_non_terminal_node: {
      value: cdktf.stringToHclTerraform(struct!.emptyNonTerminalNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_manual_override_action: {
      value: cdktf.stringToHclTerraform(struct!.fqdnManualOverrideAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.fqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_types: {
      value: cdktf.stringToHclTerraform(struct!.recordTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wild_card_node: {
      value: cdktf.stringToHclTerraform(struct!.wildCardNode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperOperDomainEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperOperDomainEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegationNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegationNode = this._delegationNode;
    }
    if (this._emptyNonTerminalNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyNonTerminalNode = this._emptyNonTerminalNode;
    }
    if (this._fqdnManualOverrideAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnManualOverrideAction = this._fqdnManualOverrideAction;
    }
    if (this._fqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnName = this._fqdnName;
    }
    if (this._recordTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordTypes = this._recordTypes;
    }
    if (this._wildCardNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildCardNode = this._wildCardNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperOperDomainEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegationNode = undefined;
      this._emptyNonTerminalNode = undefined;
      this._fqdnManualOverrideAction = undefined;
      this._fqdnName = undefined;
      this._recordTypes = undefined;
      this._wildCardNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegationNode = value.delegationNode;
      this._emptyNonTerminalNode = value.emptyNonTerminalNode;
      this._fqdnManualOverrideAction = value.fqdnManualOverrideAction;
      this._fqdnName = value.fqdnName;
      this._recordTypes = value.recordTypes;
      this._wildCardNode = value.wildCardNode;
    }
  }

  // delegation_node - computed: false, optional: true, required: false
  private _delegationNode?: string; 
  public get delegationNode() {
    return this.getStringAttribute('delegation_node');
  }
  public set delegationNode(value: string) {
    this._delegationNode = value;
  }
  public resetDelegationNode() {
    this._delegationNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationNodeInput() {
    return this._delegationNode;
  }

  // empty_non_terminal_node - computed: false, optional: true, required: false
  private _emptyNonTerminalNode?: string; 
  public get emptyNonTerminalNode() {
    return this.getStringAttribute('empty_non_terminal_node');
  }
  public set emptyNonTerminalNode(value: string) {
    this._emptyNonTerminalNode = value;
  }
  public resetEmptyNonTerminalNode() {
    this._emptyNonTerminalNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyNonTerminalNodeInput() {
    return this._emptyNonTerminalNode;
  }

  // fqdn_manual_override_action - computed: false, optional: true, required: false
  private _fqdnManualOverrideAction?: string; 
  public get fqdnManualOverrideAction() {
    return this.getStringAttribute('fqdn_manual_override_action');
  }
  public set fqdnManualOverrideAction(value: string) {
    this._fqdnManualOverrideAction = value;
  }
  public resetFqdnManualOverrideAction() {
    this._fqdnManualOverrideAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnManualOverrideActionInput() {
    return this._fqdnManualOverrideAction;
  }

  // fqdn_name - computed: false, optional: true, required: false
  private _fqdnName?: string; 
  public get fqdnName() {
    return this.getStringAttribute('fqdn_name');
  }
  public set fqdnName(value: string) {
    this._fqdnName = value;
  }
  public resetFqdnName() {
    this._fqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnNameInput() {
    return this._fqdnName;
  }

  // record_types - computed: false, optional: true, required: false
  private _recordTypes?: string; 
  public get recordTypes() {
    return this.getStringAttribute('record_types');
  }
  public set recordTypes(value: string) {
    this._recordTypes = value;
  }
  public resetRecordTypes() {
    this._recordTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypesInput() {
    return this._recordTypes;
  }

  // wild_card_node - computed: false, optional: true, required: false
  private _wildCardNode?: string; 
  public get wildCardNode() {
    return this.getStringAttribute('wild_card_node');
  }
  public set wildCardNode(value: string) {
    this._wildCardNode = value;
  }
  public resetWildCardNode() {
    this._wildCardNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildCardNodeInput() {
    return this._wildCardNode;
  }
}

export class DataThunderDdosDnsCacheOperOperDomainEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperOperDomainEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperOperDomainEntriesOutputReference {
    return new DataThunderDdosDnsCacheOperOperDomainEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperOper {
  /**
  * Additional section record Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#additional_section_record_count DataThunderDdosDnsCacheOper#additional_section_record_count}
  */
  readonly additionalSectionRecordCount?: number;
  /**
  * Additional section size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#additional_section_size DataThunderDdosDnsCacheOper#additional_section_size}
  */
  readonly additionalSectionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#all_cached_fqdn DataThunderDdosDnsCacheOper#all_cached_fqdn}
  */
  readonly allCachedFqdn?: number;
  /**
  * Answer section record Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#answer_section_record_count DataThunderDdosDnsCacheOper#answer_section_record_count}
  */
  readonly answerSectionRecordCount?: number;
  /**
  * Answer section size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#answer_section_size DataThunderDdosDnsCacheOper#answer_section_size}
  */
  readonly answerSectionSize?: number;
  /**
  * Authority section record Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#authority_section_record_count DataThunderDdosDnsCacheOper#authority_section_record_count}
  */
  readonly authoritySectionRecordCount?: number;
  /**
  * Autority section size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#authority_section_size DataThunderDdosDnsCacheOper#authority_section_size}
  */
  readonly authoritySectionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#cached_fqdn_name DataThunderDdosDnsCacheOper#cached_fqdn_name}
  */
  readonly cachedFqdnName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#debug_mode DataThunderDdosDnsCacheOper#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#record_type DataThunderDdosDnsCacheOper#record_type}
  */
  readonly recordType?: string;
  /**
  * response flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#response_flag DataThunderDdosDnsCacheOper#response_flag}
  */
  readonly responseFlag?: string;
  /**
  * response status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#response_status DataThunderDdosDnsCacheOper#response_status}
  */
  readonly responseStatus?: string;
  /**
  * additional_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#additional_section DataThunderDdosDnsCacheOper#additional_section}
  */
  readonly additionalSection?: DataThunderDdosDnsCacheOperOperAdditionalSection[] | cdktf.IResolvable;
  /**
  * answer_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#answer_section DataThunderDdosDnsCacheOper#answer_section}
  */
  readonly answerSection?: DataThunderDdosDnsCacheOperOperAnswerSection[] | cdktf.IResolvable;
  /**
  * authoritative_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#authoritative_section DataThunderDdosDnsCacheOper#authoritative_section}
  */
  readonly authoritativeSection?: DataThunderDdosDnsCacheOperOperAuthoritativeSection[] | cdktf.IResolvable;
  /**
  * domain_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#domain_entries DataThunderDdosDnsCacheOper#domain_entries}
  */
  readonly domainEntries?: DataThunderDdosDnsCacheOperOperDomainEntries[] | cdktf.IResolvable;
}

export function dataThunderDdosDnsCacheOperOperToTerraform(struct?: DataThunderDdosDnsCacheOperOperOutputReference | DataThunderDdosDnsCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_section_record_count: cdktf.numberToTerraform(struct!.additionalSectionRecordCount),
    additional_section_size: cdktf.numberToTerraform(struct!.additionalSectionSize),
    all_cached_fqdn: cdktf.numberToTerraform(struct!.allCachedFqdn),
    answer_section_record_count: cdktf.numberToTerraform(struct!.answerSectionRecordCount),
    answer_section_size: cdktf.numberToTerraform(struct!.answerSectionSize),
    authority_section_record_count: cdktf.numberToTerraform(struct!.authoritySectionRecordCount),
    authority_section_size: cdktf.numberToTerraform(struct!.authoritySectionSize),
    cached_fqdn_name: cdktf.stringToTerraform(struct!.cachedFqdnName),
    debug_mode: cdktf.numberToTerraform(struct!.debugMode),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    response_flag: cdktf.stringToTerraform(struct!.responseFlag),
    response_status: cdktf.stringToTerraform(struct!.responseStatus),
    additional_section: cdktf.listMapper(dataThunderDdosDnsCacheOperOperAdditionalSectionToTerraform, true)(struct!.additionalSection),
    answer_section: cdktf.listMapper(dataThunderDdosDnsCacheOperOperAnswerSectionToTerraform, true)(struct!.answerSection),
    authoritative_section: cdktf.listMapper(dataThunderDdosDnsCacheOperOperAuthoritativeSectionToTerraform, true)(struct!.authoritativeSection),
    domain_entries: cdktf.listMapper(dataThunderDdosDnsCacheOperOperDomainEntriesToTerraform, true)(struct!.domainEntries),
  }
}


export function dataThunderDdosDnsCacheOperOperToHclTerraform(struct?: DataThunderDdosDnsCacheOperOperOutputReference | DataThunderDdosDnsCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_section_record_count: {
      value: cdktf.numberToHclTerraform(struct!.additionalSectionRecordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    additional_section_size: {
      value: cdktf.numberToHclTerraform(struct!.additionalSectionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_cached_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.allCachedFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    answer_section_record_count: {
      value: cdktf.numberToHclTerraform(struct!.answerSectionRecordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    answer_section_size: {
      value: cdktf.numberToHclTerraform(struct!.answerSectionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authority_section_record_count: {
      value: cdktf.numberToHclTerraform(struct!.authoritySectionRecordCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authority_section_size: {
      value: cdktf.numberToHclTerraform(struct!.authoritySectionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cached_fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.cachedFqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_mode: {
      value: cdktf.numberToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_flag: {
      value: cdktf.stringToHclTerraform(struct!.responseFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_status: {
      value: cdktf.stringToHclTerraform(struct!.responseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_section: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperOperAdditionalSectionToHclTerraform, true)(struct!.additionalSection),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperOperAdditionalSectionList",
    },
    answer_section: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperOperAnswerSectionToHclTerraform, true)(struct!.answerSection),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperOperAnswerSectionList",
    },
    authoritative_section: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperOperAuthoritativeSectionToHclTerraform, true)(struct!.authoritativeSection),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperOperAuthoritativeSectionList",
    },
    domain_entries: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperOperDomainEntriesToHclTerraform, true)(struct!.domainEntries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperOperDomainEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSectionRecordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSectionRecordCount = this._additionalSectionRecordCount;
    }
    if (this._additionalSectionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSectionSize = this._additionalSectionSize;
    }
    if (this._allCachedFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allCachedFqdn = this._allCachedFqdn;
    }
    if (this._answerSectionRecordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerSectionRecordCount = this._answerSectionRecordCount;
    }
    if (this._answerSectionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerSectionSize = this._answerSectionSize;
    }
    if (this._authoritySectionRecordCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritySectionRecordCount = this._authoritySectionRecordCount;
    }
    if (this._authoritySectionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritySectionSize = this._authoritySectionSize;
    }
    if (this._cachedFqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedFqdnName = this._cachedFqdnName;
    }
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._responseFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFlag = this._responseFlag;
    }
    if (this._responseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseStatus = this._responseStatus;
    }
    if (this._additionalSection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSection = this._additionalSection?.internalValue;
    }
    if (this._answerSection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.answerSection = this._answerSection?.internalValue;
    }
    if (this._authoritativeSection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authoritativeSection = this._authoritativeSection?.internalValue;
    }
    if (this._domainEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEntries = this._domainEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalSectionRecordCount = undefined;
      this._additionalSectionSize = undefined;
      this._allCachedFqdn = undefined;
      this._answerSectionRecordCount = undefined;
      this._answerSectionSize = undefined;
      this._authoritySectionRecordCount = undefined;
      this._authoritySectionSize = undefined;
      this._cachedFqdnName = undefined;
      this._debugMode = undefined;
      this._recordType = undefined;
      this._responseFlag = undefined;
      this._responseStatus = undefined;
      this._additionalSection.internalValue = undefined;
      this._answerSection.internalValue = undefined;
      this._authoritativeSection.internalValue = undefined;
      this._domainEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalSectionRecordCount = value.additionalSectionRecordCount;
      this._additionalSectionSize = value.additionalSectionSize;
      this._allCachedFqdn = value.allCachedFqdn;
      this._answerSectionRecordCount = value.answerSectionRecordCount;
      this._answerSectionSize = value.answerSectionSize;
      this._authoritySectionRecordCount = value.authoritySectionRecordCount;
      this._authoritySectionSize = value.authoritySectionSize;
      this._cachedFqdnName = value.cachedFqdnName;
      this._debugMode = value.debugMode;
      this._recordType = value.recordType;
      this._responseFlag = value.responseFlag;
      this._responseStatus = value.responseStatus;
      this._additionalSection.internalValue = value.additionalSection;
      this._answerSection.internalValue = value.answerSection;
      this._authoritativeSection.internalValue = value.authoritativeSection;
      this._domainEntries.internalValue = value.domainEntries;
    }
  }

  // additional_section_record_count - computed: false, optional: true, required: false
  private _additionalSectionRecordCount?: number; 
  public get additionalSectionRecordCount() {
    return this.getNumberAttribute('additional_section_record_count');
  }
  public set additionalSectionRecordCount(value: number) {
    this._additionalSectionRecordCount = value;
  }
  public resetAdditionalSectionRecordCount() {
    this._additionalSectionRecordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSectionRecordCountInput() {
    return this._additionalSectionRecordCount;
  }

  // additional_section_size - computed: false, optional: true, required: false
  private _additionalSectionSize?: number; 
  public get additionalSectionSize() {
    return this.getNumberAttribute('additional_section_size');
  }
  public set additionalSectionSize(value: number) {
    this._additionalSectionSize = value;
  }
  public resetAdditionalSectionSize() {
    this._additionalSectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSectionSizeInput() {
    return this._additionalSectionSize;
  }

  // all_cached_fqdn - computed: false, optional: true, required: false
  private _allCachedFqdn?: number; 
  public get allCachedFqdn() {
    return this.getNumberAttribute('all_cached_fqdn');
  }
  public set allCachedFqdn(value: number) {
    this._allCachedFqdn = value;
  }
  public resetAllCachedFqdn() {
    this._allCachedFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allCachedFqdnInput() {
    return this._allCachedFqdn;
  }

  // answer_section_record_count - computed: false, optional: true, required: false
  private _answerSectionRecordCount?: number; 
  public get answerSectionRecordCount() {
    return this.getNumberAttribute('answer_section_record_count');
  }
  public set answerSectionRecordCount(value: number) {
    this._answerSectionRecordCount = value;
  }
  public resetAnswerSectionRecordCount() {
    this._answerSectionRecordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerSectionRecordCountInput() {
    return this._answerSectionRecordCount;
  }

  // answer_section_size - computed: false, optional: true, required: false
  private _answerSectionSize?: number; 
  public get answerSectionSize() {
    return this.getNumberAttribute('answer_section_size');
  }
  public set answerSectionSize(value: number) {
    this._answerSectionSize = value;
  }
  public resetAnswerSectionSize() {
    this._answerSectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerSectionSizeInput() {
    return this._answerSectionSize;
  }

  // authority_section_record_count - computed: false, optional: true, required: false
  private _authoritySectionRecordCount?: number; 
  public get authoritySectionRecordCount() {
    return this.getNumberAttribute('authority_section_record_count');
  }
  public set authoritySectionRecordCount(value: number) {
    this._authoritySectionRecordCount = value;
  }
  public resetAuthoritySectionRecordCount() {
    this._authoritySectionRecordCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritySectionRecordCountInput() {
    return this._authoritySectionRecordCount;
  }

  // authority_section_size - computed: false, optional: true, required: false
  private _authoritySectionSize?: number; 
  public get authoritySectionSize() {
    return this.getNumberAttribute('authority_section_size');
  }
  public set authoritySectionSize(value: number) {
    this._authoritySectionSize = value;
  }
  public resetAuthoritySectionSize() {
    this._authoritySectionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritySectionSizeInput() {
    return this._authoritySectionSize;
  }

  // cached_fqdn_name - computed: false, optional: true, required: false
  private _cachedFqdnName?: string; 
  public get cachedFqdnName() {
    return this.getStringAttribute('cached_fqdn_name');
  }
  public set cachedFqdnName(value: string) {
    this._cachedFqdnName = value;
  }
  public resetCachedFqdnName() {
    this._cachedFqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedFqdnNameInput() {
    return this._cachedFqdnName;
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: number; 
  public get debugMode() {
    return this.getNumberAttribute('debug_mode');
  }
  public set debugMode(value: number) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // response_flag - computed: false, optional: true, required: false
  private _responseFlag?: string; 
  public get responseFlag() {
    return this.getStringAttribute('response_flag');
  }
  public set responseFlag(value: string) {
    this._responseFlag = value;
  }
  public resetResponseFlag() {
    this._responseFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFlagInput() {
    return this._responseFlag;
  }

  // response_status - computed: false, optional: true, required: false
  private _responseStatus?: string; 
  public get responseStatus() {
    return this.getStringAttribute('response_status');
  }
  public set responseStatus(value: string) {
    this._responseStatus = value;
  }
  public resetResponseStatus() {
    this._responseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusInput() {
    return this._responseStatus;
  }

  // additional_section - computed: false, optional: true, required: false
  private _additionalSection = new DataThunderDdosDnsCacheOperOperAdditionalSectionList(this, "additional_section", false);
  public get additionalSection() {
    return this._additionalSection;
  }
  public putAdditionalSection(value: DataThunderDdosDnsCacheOperOperAdditionalSection[] | cdktf.IResolvable) {
    this._additionalSection.internalValue = value;
  }
  public resetAdditionalSection() {
    this._additionalSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSectionInput() {
    return this._additionalSection.internalValue;
  }

  // answer_section - computed: false, optional: true, required: false
  private _answerSection = new DataThunderDdosDnsCacheOperOperAnswerSectionList(this, "answer_section", false);
  public get answerSection() {
    return this._answerSection;
  }
  public putAnswerSection(value: DataThunderDdosDnsCacheOperOperAnswerSection[] | cdktf.IResolvable) {
    this._answerSection.internalValue = value;
  }
  public resetAnswerSection() {
    this._answerSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerSectionInput() {
    return this._answerSection.internalValue;
  }

  // authoritative_section - computed: false, optional: true, required: false
  private _authoritativeSection = new DataThunderDdosDnsCacheOperOperAuthoritativeSectionList(this, "authoritative_section", false);
  public get authoritativeSection() {
    return this._authoritativeSection;
  }
  public putAuthoritativeSection(value: DataThunderDdosDnsCacheOperOperAuthoritativeSection[] | cdktf.IResolvable) {
    this._authoritativeSection.internalValue = value;
  }
  public resetAuthoritativeSection() {
    this._authoritativeSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authoritativeSectionInput() {
    return this._authoritativeSection.internalValue;
  }

  // domain_entries - computed: false, optional: true, required: false
  private _domainEntries = new DataThunderDdosDnsCacheOperOperDomainEntriesList(this, "domain_entries", false);
  public get domainEntries() {
    return this._domainEntries;
  }
  public putDomainEntries(value: DataThunderDdosDnsCacheOperOperDomainEntries[] | cdktf.IResolvable) {
    this._domainEntries.internalValue = value;
  }
  public resetDomainEntries() {
    this._domainEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEntriesInput() {
    return this._domainEntries.internalValue;
  }
}
export interface DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct {
  /**
  * Total Cached FQDN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#cached_fqdn DataThunderDdosDnsCacheOper#cached_fqdn}
  */
  readonly cachedFqdn?: number;
  /**
  * Total Cached FQDN in the Second Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#cached_fqdn_second_pass DataThunderDdosDnsCacheOper#cached_fqdn_second_pass}
  */
  readonly cachedFqdnSecondPass?: number;
  /**
  * DNS message pending Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#dns_message_pending_processed DataThunderDdosDnsCacheOper#dns_message_pending_processed}
  */
  readonly dnsMessagePendingProcessed?: number;
  /**
  * DNS Message Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#dns_message_processed DataThunderDdosDnsCacheOper#dns_message_processed}
  */
  readonly dnsMessageProcessed?: number;
  /**
  * Records Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#records_processed DataThunderDdosDnsCacheOper#records_processed}
  */
  readonly recordsProcessed?: number;
  /**
  * Serial Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#serial_number DataThunderDdosDnsCacheOper#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * TCP connection Begin Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#tcp_connection_begin_time DataThunderDdosDnsCacheOper#tcp_connection_begin_time}
  */
  readonly tcpConnectionBeginTime?: string;
  /**
  * TCP Connection End Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#tcp_connection_end_time DataThunderDdosDnsCacheOper#tcp_connection_end_time}
  */
  readonly tcpConnectionEndTime?: string;
  /**
  * Total Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#total_failure DataThunderDdosDnsCacheOper#total_failure}
  */
  readonly totalFailure?: string;
  /**
  * Total FQDN Node in Cache Instance Table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#total_node_in_table DataThunderDdosDnsCacheOper#total_node_in_table}
  */
  readonly totalNodeInTable?: number;
  /**
  * Update Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#update_status DataThunderDdosDnsCacheOper#update_status}
  */
  readonly updateStatus?: string;
  /**
  * Zone Transfer Begin Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_begin_time DataThunderDdosDnsCacheOper#zone_transfer_begin_time}
  */
  readonly zoneTransferBeginTime?: string;
  /**
  * Zone Transfer End Time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_end_time DataThunderDdosDnsCacheOper#zone_transfer_end_time}
  */
  readonly zoneTransferEndTime?: string;
  /**
  * Zone Transfer Result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_result DataThunderDdosDnsCacheOper#zone_transfer_result}
  */
  readonly zoneTransferResult?: string;
}

export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructToTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cached_fqdn: cdktf.numberToTerraform(struct!.cachedFqdn),
    cached_fqdn_second_pass: cdktf.numberToTerraform(struct!.cachedFqdnSecondPass),
    dns_message_pending_processed: cdktf.numberToTerraform(struct!.dnsMessagePendingProcessed),
    dns_message_processed: cdktf.numberToTerraform(struct!.dnsMessageProcessed),
    records_processed: cdktf.numberToTerraform(struct!.recordsProcessed),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    tcp_connection_begin_time: cdktf.stringToTerraform(struct!.tcpConnectionBeginTime),
    tcp_connection_end_time: cdktf.stringToTerraform(struct!.tcpConnectionEndTime),
    total_failure: cdktf.stringToTerraform(struct!.totalFailure),
    total_node_in_table: cdktf.numberToTerraform(struct!.totalNodeInTable),
    update_status: cdktf.stringToTerraform(struct!.updateStatus),
    zone_transfer_begin_time: cdktf.stringToTerraform(struct!.zoneTransferBeginTime),
    zone_transfer_end_time: cdktf.stringToTerraform(struct!.zoneTransferEndTime),
    zone_transfer_result: cdktf.stringToTerraform(struct!.zoneTransferResult),
  }
}


export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructToHclTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cached_fqdn: {
      value: cdktf.numberToHclTerraform(struct!.cachedFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cached_fqdn_second_pass: {
      value: cdktf.numberToHclTerraform(struct!.cachedFqdnSecondPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_message_pending_processed: {
      value: cdktf.numberToHclTerraform(struct!.dnsMessagePendingProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_message_processed: {
      value: cdktf.numberToHclTerraform(struct!.dnsMessageProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    records_processed: {
      value: cdktf.numberToHclTerraform(struct!.recordsProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connection_begin_time: {
      value: cdktf.stringToHclTerraform(struct!.tcpConnectionBeginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_connection_end_time: {
      value: cdktf.stringToHclTerraform(struct!.tcpConnectionEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_failure: {
      value: cdktf.stringToHclTerraform(struct!.totalFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_node_in_table: {
      value: cdktf.numberToHclTerraform(struct!.totalNodeInTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_status: {
      value: cdktf.stringToHclTerraform(struct!.updateStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_begin_time: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferBeginTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_end_time: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_result: {
      value: cdktf.stringToHclTerraform(struct!.zoneTransferResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachedFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedFqdn = this._cachedFqdn;
    }
    if (this._cachedFqdnSecondPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedFqdnSecondPass = this._cachedFqdnSecondPass;
    }
    if (this._dnsMessagePendingProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMessagePendingProcessed = this._dnsMessagePendingProcessed;
    }
    if (this._dnsMessageProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMessageProcessed = this._dnsMessageProcessed;
    }
    if (this._recordsProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordsProcessed = this._recordsProcessed;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._tcpConnectionBeginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionBeginTime = this._tcpConnectionBeginTime;
    }
    if (this._tcpConnectionEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionEndTime = this._tcpConnectionEndTime;
    }
    if (this._totalFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFailure = this._totalFailure;
    }
    if (this._totalNodeInTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodeInTable = this._totalNodeInTable;
    }
    if (this._updateStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStatus = this._updateStatus;
    }
    if (this._zoneTransferBeginTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferBeginTime = this._zoneTransferBeginTime;
    }
    if (this._zoneTransferEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferEndTime = this._zoneTransferEndTime;
    }
    if (this._zoneTransferResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferResult = this._zoneTransferResult;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachedFqdn = undefined;
      this._cachedFqdnSecondPass = undefined;
      this._dnsMessagePendingProcessed = undefined;
      this._dnsMessageProcessed = undefined;
      this._recordsProcessed = undefined;
      this._serialNumber = undefined;
      this._tcpConnectionBeginTime = undefined;
      this._tcpConnectionEndTime = undefined;
      this._totalFailure = undefined;
      this._totalNodeInTable = undefined;
      this._updateStatus = undefined;
      this._zoneTransferBeginTime = undefined;
      this._zoneTransferEndTime = undefined;
      this._zoneTransferResult = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachedFqdn = value.cachedFqdn;
      this._cachedFqdnSecondPass = value.cachedFqdnSecondPass;
      this._dnsMessagePendingProcessed = value.dnsMessagePendingProcessed;
      this._dnsMessageProcessed = value.dnsMessageProcessed;
      this._recordsProcessed = value.recordsProcessed;
      this._serialNumber = value.serialNumber;
      this._tcpConnectionBeginTime = value.tcpConnectionBeginTime;
      this._tcpConnectionEndTime = value.tcpConnectionEndTime;
      this._totalFailure = value.totalFailure;
      this._totalNodeInTable = value.totalNodeInTable;
      this._updateStatus = value.updateStatus;
      this._zoneTransferBeginTime = value.zoneTransferBeginTime;
      this._zoneTransferEndTime = value.zoneTransferEndTime;
      this._zoneTransferResult = value.zoneTransferResult;
    }
  }

  // cached_fqdn - computed: false, optional: true, required: false
  private _cachedFqdn?: number; 
  public get cachedFqdn() {
    return this.getNumberAttribute('cached_fqdn');
  }
  public set cachedFqdn(value: number) {
    this._cachedFqdn = value;
  }
  public resetCachedFqdn() {
    this._cachedFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedFqdnInput() {
    return this._cachedFqdn;
  }

  // cached_fqdn_second_pass - computed: false, optional: true, required: false
  private _cachedFqdnSecondPass?: number; 
  public get cachedFqdnSecondPass() {
    return this.getNumberAttribute('cached_fqdn_second_pass');
  }
  public set cachedFqdnSecondPass(value: number) {
    this._cachedFqdnSecondPass = value;
  }
  public resetCachedFqdnSecondPass() {
    this._cachedFqdnSecondPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedFqdnSecondPassInput() {
    return this._cachedFqdnSecondPass;
  }

  // dns_message_pending_processed - computed: false, optional: true, required: false
  private _dnsMessagePendingProcessed?: number; 
  public get dnsMessagePendingProcessed() {
    return this.getNumberAttribute('dns_message_pending_processed');
  }
  public set dnsMessagePendingProcessed(value: number) {
    this._dnsMessagePendingProcessed = value;
  }
  public resetDnsMessagePendingProcessed() {
    this._dnsMessagePendingProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMessagePendingProcessedInput() {
    return this._dnsMessagePendingProcessed;
  }

  // dns_message_processed - computed: false, optional: true, required: false
  private _dnsMessageProcessed?: number; 
  public get dnsMessageProcessed() {
    return this.getNumberAttribute('dns_message_processed');
  }
  public set dnsMessageProcessed(value: number) {
    this._dnsMessageProcessed = value;
  }
  public resetDnsMessageProcessed() {
    this._dnsMessageProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMessageProcessedInput() {
    return this._dnsMessageProcessed;
  }

  // records_processed - computed: false, optional: true, required: false
  private _recordsProcessed?: number; 
  public get recordsProcessed() {
    return this.getNumberAttribute('records_processed');
  }
  public set recordsProcessed(value: number) {
    this._recordsProcessed = value;
  }
  public resetRecordsProcessed() {
    this._recordsProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsProcessedInput() {
    return this._recordsProcessed;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // tcp_connection_begin_time - computed: false, optional: true, required: false
  private _tcpConnectionBeginTime?: string; 
  public get tcpConnectionBeginTime() {
    return this.getStringAttribute('tcp_connection_begin_time');
  }
  public set tcpConnectionBeginTime(value: string) {
    this._tcpConnectionBeginTime = value;
  }
  public resetTcpConnectionBeginTime() {
    this._tcpConnectionBeginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionBeginTimeInput() {
    return this._tcpConnectionBeginTime;
  }

  // tcp_connection_end_time - computed: false, optional: true, required: false
  private _tcpConnectionEndTime?: string; 
  public get tcpConnectionEndTime() {
    return this.getStringAttribute('tcp_connection_end_time');
  }
  public set tcpConnectionEndTime(value: string) {
    this._tcpConnectionEndTime = value;
  }
  public resetTcpConnectionEndTime() {
    this._tcpConnectionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionEndTimeInput() {
    return this._tcpConnectionEndTime;
  }

  // total_failure - computed: false, optional: true, required: false
  private _totalFailure?: string; 
  public get totalFailure() {
    return this.getStringAttribute('total_failure');
  }
  public set totalFailure(value: string) {
    this._totalFailure = value;
  }
  public resetTotalFailure() {
    this._totalFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFailureInput() {
    return this._totalFailure;
  }

  // total_node_in_table - computed: false, optional: true, required: false
  private _totalNodeInTable?: number; 
  public get totalNodeInTable() {
    return this.getNumberAttribute('total_node_in_table');
  }
  public set totalNodeInTable(value: number) {
    this._totalNodeInTable = value;
  }
  public resetTotalNodeInTable() {
    this._totalNodeInTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodeInTableInput() {
    return this._totalNodeInTable;
  }

  // update_status - computed: false, optional: true, required: false
  private _updateStatus?: string; 
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
  public set updateStatus(value: string) {
    this._updateStatus = value;
  }
  public resetUpdateStatus() {
    this._updateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStatusInput() {
    return this._updateStatus;
  }

  // zone_transfer_begin_time - computed: false, optional: true, required: false
  private _zoneTransferBeginTime?: string; 
  public get zoneTransferBeginTime() {
    return this.getStringAttribute('zone_transfer_begin_time');
  }
  public set zoneTransferBeginTime(value: string) {
    this._zoneTransferBeginTime = value;
  }
  public resetZoneTransferBeginTime() {
    this._zoneTransferBeginTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferBeginTimeInput() {
    return this._zoneTransferBeginTime;
  }

  // zone_transfer_end_time - computed: false, optional: true, required: false
  private _zoneTransferEndTime?: string; 
  public get zoneTransferEndTime() {
    return this.getStringAttribute('zone_transfer_end_time');
  }
  public set zoneTransferEndTime(value: string) {
    this._zoneTransferEndTime = value;
  }
  public resetZoneTransferEndTime() {
    this._zoneTransferEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferEndTimeInput() {
    return this._zoneTransferEndTime;
  }

  // zone_transfer_result - computed: false, optional: true, required: false
  private _zoneTransferResult?: string; 
  public get zoneTransferResult() {
    return this.getStringAttribute('zone_transfer_result');
  }
  public set zoneTransferResult(value: string) {
    this._zoneTransferResult = value;
  }
  public resetZoneTransferResult() {
    this._zoneTransferResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferResultInput() {
    return this._zoneTransferResult;
  }
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructOutputReference {
    return new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#stats_count DataThunderDdosDnsCacheOper#stats_count}
  */
  readonly statsCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#stats_name DataThunderDdosDnsCacheOper#stats_name}
  */
  readonly statsName?: string;
}

export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsToTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats_count: cdktf.numberToTerraform(struct!.statsCount),
    stats_name: cdktf.stringToTerraform(struct!.statsName),
  }
}


export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsToHclTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats_count: {
      value: cdktf.numberToHclTerraform(struct!.statsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats_name: {
      value: cdktf.stringToHclTerraform(struct!.statsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsCount = this._statsCount;
    }
    if (this._statsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statsName = this._statsName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statsCount = undefined;
      this._statsName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statsCount = value.statsCount;
      this._statsName = value.statsName;
    }
  }

  // stats_count - computed: false, optional: true, required: false
  private _statsCount?: number; 
  public get statsCount() {
    return this.getNumberAttribute('stats_count');
  }
  public set statsCount(value: number) {
    this._statsCount = value;
  }
  public resetStatsCount() {
    this._statsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsCountInput() {
    return this._statsCount;
  }

  // stats_name - computed: false, optional: true, required: false
  private _statsName?: string; 
  public get statsName() {
    return this.getStringAttribute('stats_name');
  }
  public set statsName(value: string) {
    this._statsName = value;
  }
  public resetStatsName() {
    this._statsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsNameInput() {
    return this._statsName;
  }
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsOutputReference {
    return new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct {
  /**
  * Estimated Next Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#estimated_next_update DataThunderDdosDnsCacheOper#estimated_next_update}
  */
  readonly estimatedNextUpdate?: string;
  /**
  * Last Complete Serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#last_complete_serial DataThunderDdosDnsCacheOper#last_complete_serial}
  */
  readonly lastCompleteSerial?: string;
  /**
  * Last Complete Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#last_complete_update DataThunderDdosDnsCacheOper#last_complete_update}
  */
  readonly lastCompleteUpdate?: string;
  /**
  * Last Update Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#last_update DataThunderDdosDnsCacheOper#last_update}
  */
  readonly lastUpdate?: string;
  /**
  * Remaining Seconds Before Expiring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#remain_expiration_time DataThunderDdosDnsCacheOper#remain_expiration_time}
  */
  readonly remainExpirationTime?: string;
  /**
  * Sflow Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#sflow_source_id DataThunderDdosDnsCacheOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_name DataThunderDdosDnsCacheOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructToTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    estimated_next_update: cdktf.stringToTerraform(struct!.estimatedNextUpdate),
    last_complete_serial: cdktf.stringToTerraform(struct!.lastCompleteSerial),
    last_complete_update: cdktf.stringToTerraform(struct!.lastCompleteUpdate),
    last_update: cdktf.stringToTerraform(struct!.lastUpdate),
    remain_expiration_time: cdktf.stringToTerraform(struct!.remainExpirationTime),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructToHclTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    estimated_next_update: {
      value: cdktf.stringToHclTerraform(struct!.estimatedNextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_complete_serial: {
      value: cdktf.stringToHclTerraform(struct!.lastCompleteSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_complete_update: {
      value: cdktf.stringToHclTerraform(struct!.lastCompleteUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remain_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.remainExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._estimatedNextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedNextUpdate = this._estimatedNextUpdate;
    }
    if (this._lastCompleteSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCompleteSerial = this._lastCompleteSerial;
    }
    if (this._lastCompleteUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastCompleteUpdate = this._lastCompleteUpdate;
    }
    if (this._lastUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdate = this._lastUpdate;
    }
    if (this._remainExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainExpirationTime = this._remainExpirationTime;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._estimatedNextUpdate = undefined;
      this._lastCompleteSerial = undefined;
      this._lastCompleteUpdate = undefined;
      this._lastUpdate = undefined;
      this._remainExpirationTime = undefined;
      this._sflowSourceId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._estimatedNextUpdate = value.estimatedNextUpdate;
      this._lastCompleteSerial = value.lastCompleteSerial;
      this._lastCompleteUpdate = value.lastCompleteUpdate;
      this._lastUpdate = value.lastUpdate;
      this._remainExpirationTime = value.remainExpirationTime;
      this._sflowSourceId = value.sflowSourceId;
      this._zoneName = value.zoneName;
    }
  }

  // estimated_next_update - computed: false, optional: true, required: false
  private _estimatedNextUpdate?: string; 
  public get estimatedNextUpdate() {
    return this.getStringAttribute('estimated_next_update');
  }
  public set estimatedNextUpdate(value: string) {
    this._estimatedNextUpdate = value;
  }
  public resetEstimatedNextUpdate() {
    this._estimatedNextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedNextUpdateInput() {
    return this._estimatedNextUpdate;
  }

  // last_complete_serial - computed: false, optional: true, required: false
  private _lastCompleteSerial?: string; 
  public get lastCompleteSerial() {
    return this.getStringAttribute('last_complete_serial');
  }
  public set lastCompleteSerial(value: string) {
    this._lastCompleteSerial = value;
  }
  public resetLastCompleteSerial() {
    this._lastCompleteSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCompleteSerialInput() {
    return this._lastCompleteSerial;
  }

  // last_complete_update - computed: false, optional: true, required: false
  private _lastCompleteUpdate?: string; 
  public get lastCompleteUpdate() {
    return this.getStringAttribute('last_complete_update');
  }
  public set lastCompleteUpdate(value: string) {
    this._lastCompleteUpdate = value;
  }
  public resetLastCompleteUpdate() {
    this._lastCompleteUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastCompleteUpdateInput() {
    return this._lastCompleteUpdate;
  }

  // last_update - computed: false, optional: true, required: false
  private _lastUpdate?: string; 
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
  public set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
  public resetLastUpdate() {
    this._lastUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateInput() {
    return this._lastUpdate;
  }

  // remain_expiration_time - computed: false, optional: true, required: false
  private _remainExpirationTime?: string; 
  public get remainExpirationTime() {
    return this.getStringAttribute('remain_expiration_time');
  }
  public set remainExpirationTime(value: string) {
    this._remainExpirationTime = value;
  }
  public resetRemainExpirationTime() {
    this._remainExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainExpirationTimeInput() {
    return this._remainExpirationTime;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructOutputReference {
    return new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosDnsCacheOperZoneTransferOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#debug_mode DataThunderDdosDnsCacheOper#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Estimated Next Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#estimated_next_update DataThunderDdosDnsCacheOper#estimated_next_update}
  */
  readonly estimatedNextUpdate?: string;
  /**
  * Local IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#local_ip DataThunderDdosDnsCacheOper#local_ip}
  */
  readonly localIp?: string;
  /**
  * Remaining Seconds Before Expiring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#remain_expiration_time DataThunderDdosDnsCacheOper#remain_expiration_time}
  */
  readonly remainExpirationTime?: string;
  /**
  * Remote IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#remote_ip DataThunderDdosDnsCacheOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Sflow Source ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#sflow_source_id DataThunderDdosDnsCacheOper#sflow_source_id}
  */
  readonly sflowSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#statistics DataThunderDdosDnsCacheOper#statistics}
  */
  readonly statistics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#status DataThunderDdosDnsCacheOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#total_fqdn_in_table DataThunderDdosDnsCacheOper#total_fqdn_in_table}
  */
  readonly totalFqdnInTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone DataThunderDdosDnsCacheOper#zone}
  */
  readonly zone?: string;
  /**
  * Zone Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_name DataThunderDdosDnsCacheOper#zone_name}
  */
  readonly zoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zt_statistics DataThunderDdosDnsCacheOper#zt_statistics}
  */
  readonly ztStatistics?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zts_sflow_source_id DataThunderDdosDnsCacheOper#zts_sflow_source_id}
  */
  readonly ztsSflowSourceId?: string;
  /**
  * zone_transfer_history_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_history_list DataThunderDdosDnsCacheOper#zone_transfer_history_list}
  */
  readonly zoneTransferHistoryList?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct[] | cdktf.IResolvable;
  /**
  * zone_transfer_statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_statistics DataThunderDdosDnsCacheOper#zone_transfer_statistics}
  */
  readonly zoneTransferStatistics?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics[] | cdktf.IResolvable;
  /**
  * zone_transfer_status_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#zone_transfer_status_list DataThunderDdosDnsCacheOper#zone_transfer_status_list}
  */
  readonly zoneTransferStatusList?: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosDnsCacheOperZoneTransferOperToTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperOutputReference | DataThunderDdosDnsCacheOperZoneTransferOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_mode: cdktf.numberToTerraform(struct!.debugMode),
    estimated_next_update: cdktf.stringToTerraform(struct!.estimatedNextUpdate),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    remain_expiration_time: cdktf.stringToTerraform(struct!.remainExpirationTime),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    sflow_source_id: cdktf.stringToTerraform(struct!.sflowSourceId),
    statistics: cdktf.numberToTerraform(struct!.statistics),
    status: cdktf.stringToTerraform(struct!.status),
    total_fqdn_in_table: cdktf.stringToTerraform(struct!.totalFqdnInTable),
    zone: cdktf.stringToTerraform(struct!.zone),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    zt_statistics: cdktf.numberToTerraform(struct!.ztStatistics),
    zts_sflow_source_id: cdktf.stringToTerraform(struct!.ztsSflowSourceId),
    zone_transfer_history_list: cdktf.listMapper(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructToTerraform, true)(struct!.zoneTransferHistoryList),
    zone_transfer_statistics: cdktf.listMapper(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsToTerraform, true)(struct!.zoneTransferStatistics),
    zone_transfer_status_list: cdktf.listMapper(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructToTerraform, true)(struct!.zoneTransferStatusList),
  }
}


export function dataThunderDdosDnsCacheOperZoneTransferOperToHclTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOperOutputReference | DataThunderDdosDnsCacheOperZoneTransferOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_mode: {
      value: cdktf.numberToHclTerraform(struct!.debugMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    estimated_next_update: {
      value: cdktf.stringToHclTerraform(struct!.estimatedNextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remain_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.remainExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.sflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.numberToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_fqdn_in_table: {
      value: cdktf.stringToHclTerraform(struct!.totalFqdnInTable),
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
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zt_statistics: {
      value: cdktf.numberToHclTerraform(struct!.ztStatistics),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zts_sflow_source_id: {
      value: cdktf.stringToHclTerraform(struct!.ztsSflowSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_transfer_history_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructToHclTerraform, true)(struct!.zoneTransferHistoryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructList",
    },
    zone_transfer_statistics: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsToHclTerraform, true)(struct!.zoneTransferStatistics),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsList",
    },
    zone_transfer_status_list: {
      value: cdktf.listMapperHcl(dataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructToHclTerraform, true)(struct!.zoneTransferStatusList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperZoneTransferOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheOperZoneTransferOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMode = this._debugMode;
    }
    if (this._estimatedNextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedNextUpdate = this._estimatedNextUpdate;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._remainExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainExpirationTime = this._remainExpirationTime;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._sflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSourceId = this._sflowSourceId;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._totalFqdnInTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFqdnInTable = this._totalFqdnInTable;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._ztStatistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztStatistics = this._ztStatistics;
    }
    if (this._ztsSflowSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztsSflowSourceId = this._ztsSflowSourceId;
    }
    if (this._zoneTransferHistoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferHistoryList = this._zoneTransferHistoryList?.internalValue;
    }
    if (this._zoneTransferStatistics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferStatistics = this._zoneTransferStatistics?.internalValue;
    }
    if (this._zoneTransferStatusList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTransferStatusList = this._zoneTransferStatusList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperZoneTransferOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugMode = undefined;
      this._estimatedNextUpdate = undefined;
      this._localIp = undefined;
      this._remainExpirationTime = undefined;
      this._remoteIp = undefined;
      this._sflowSourceId = undefined;
      this._statistics = undefined;
      this._status = undefined;
      this._totalFqdnInTable = undefined;
      this._zone = undefined;
      this._zoneName = undefined;
      this._ztStatistics = undefined;
      this._ztsSflowSourceId = undefined;
      this._zoneTransferHistoryList.internalValue = undefined;
      this._zoneTransferStatistics.internalValue = undefined;
      this._zoneTransferStatusList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugMode = value.debugMode;
      this._estimatedNextUpdate = value.estimatedNextUpdate;
      this._localIp = value.localIp;
      this._remainExpirationTime = value.remainExpirationTime;
      this._remoteIp = value.remoteIp;
      this._sflowSourceId = value.sflowSourceId;
      this._statistics = value.statistics;
      this._status = value.status;
      this._totalFqdnInTable = value.totalFqdnInTable;
      this._zone = value.zone;
      this._zoneName = value.zoneName;
      this._ztStatistics = value.ztStatistics;
      this._ztsSflowSourceId = value.ztsSflowSourceId;
      this._zoneTransferHistoryList.internalValue = value.zoneTransferHistoryList;
      this._zoneTransferStatistics.internalValue = value.zoneTransferStatistics;
      this._zoneTransferStatusList.internalValue = value.zoneTransferStatusList;
    }
  }

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: number; 
  public get debugMode() {
    return this.getNumberAttribute('debug_mode');
  }
  public set debugMode(value: number) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // estimated_next_update - computed: false, optional: true, required: false
  private _estimatedNextUpdate?: string; 
  public get estimatedNextUpdate() {
    return this.getStringAttribute('estimated_next_update');
  }
  public set estimatedNextUpdate(value: string) {
    this._estimatedNextUpdate = value;
  }
  public resetEstimatedNextUpdate() {
    this._estimatedNextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedNextUpdateInput() {
    return this._estimatedNextUpdate;
  }

  // local_ip - computed: false, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // remain_expiration_time - computed: false, optional: true, required: false
  private _remainExpirationTime?: string; 
  public get remainExpirationTime() {
    return this.getStringAttribute('remain_expiration_time');
  }
  public set remainExpirationTime(value: string) {
    this._remainExpirationTime = value;
  }
  public resetRemainExpirationTime() {
    this._remainExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainExpirationTimeInput() {
    return this._remainExpirationTime;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // sflow_source_id - computed: false, optional: true, required: false
  private _sflowSourceId?: string; 
  public get sflowSourceId() {
    return this.getStringAttribute('sflow_source_id');
  }
  public set sflowSourceId(value: string) {
    this._sflowSourceId = value;
  }
  public resetSflowSourceId() {
    this._sflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSourceIdInput() {
    return this._sflowSourceId;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: number; 
  public get statistics() {
    return this.getNumberAttribute('statistics');
  }
  public set statistics(value: number) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
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

  // total_fqdn_in_table - computed: false, optional: true, required: false
  private _totalFqdnInTable?: string; 
  public get totalFqdnInTable() {
    return this.getStringAttribute('total_fqdn_in_table');
  }
  public set totalFqdnInTable(value: string) {
    this._totalFqdnInTable = value;
  }
  public resetTotalFqdnInTable() {
    this._totalFqdnInTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFqdnInTableInput() {
    return this._totalFqdnInTable;
  }

  // zone - computed: false, optional: true, required: false
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

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // zt_statistics - computed: false, optional: true, required: false
  private _ztStatistics?: number; 
  public get ztStatistics() {
    return this.getNumberAttribute('zt_statistics');
  }
  public set ztStatistics(value: number) {
    this._ztStatistics = value;
  }
  public resetZtStatistics() {
    this._ztStatistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztStatisticsInput() {
    return this._ztStatistics;
  }

  // zts_sflow_source_id - computed: false, optional: true, required: false
  private _ztsSflowSourceId?: string; 
  public get ztsSflowSourceId() {
    return this.getStringAttribute('zts_sflow_source_id');
  }
  public set ztsSflowSourceId(value: string) {
    this._ztsSflowSourceId = value;
  }
  public resetZtsSflowSourceId() {
    this._ztsSflowSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztsSflowSourceIdInput() {
    return this._ztsSflowSourceId;
  }

  // zone_transfer_history_list - computed: false, optional: true, required: false
  private _zoneTransferHistoryList = new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStructList(this, "zone_transfer_history_list", false);
  public get zoneTransferHistoryList() {
    return this._zoneTransferHistoryList;
  }
  public putZoneTransferHistoryList(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferHistoryListStruct[] | cdktf.IResolvable) {
    this._zoneTransferHistoryList.internalValue = value;
  }
  public resetZoneTransferHistoryList() {
    this._zoneTransferHistoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferHistoryListInput() {
    return this._zoneTransferHistoryList.internalValue;
  }

  // zone_transfer_statistics - computed: false, optional: true, required: false
  private _zoneTransferStatistics = new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatisticsList(this, "zone_transfer_statistics", false);
  public get zoneTransferStatistics() {
    return this._zoneTransferStatistics;
  }
  public putZoneTransferStatistics(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatistics[] | cdktf.IResolvable) {
    this._zoneTransferStatistics.internalValue = value;
  }
  public resetZoneTransferStatistics() {
    this._zoneTransferStatistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferStatisticsInput() {
    return this._zoneTransferStatistics.internalValue;
  }

  // zone_transfer_status_list - computed: false, optional: true, required: false
  private _zoneTransferStatusList = new DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStructList(this, "zone_transfer_status_list", false);
  public get zoneTransferStatusList() {
    return this._zoneTransferStatusList;
  }
  public putZoneTransferStatusList(value: DataThunderDdosDnsCacheOperZoneTransferOperZoneTransferStatusListStruct[] | cdktf.IResolvable) {
    this._zoneTransferStatusList.internalValue = value;
  }
  public resetZoneTransferStatusList() {
    this._zoneTransferStatusList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferStatusListInput() {
    return this._zoneTransferStatusList.internalValue;
  }
}
export interface DataThunderDdosDnsCacheOperZoneTransfer {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#oper DataThunderDdosDnsCacheOper#oper}
  */
  readonly oper?: DataThunderDdosDnsCacheOperZoneTransferOper;
}

export function dataThunderDdosDnsCacheOperZoneTransferToTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOutputReference | DataThunderDdosDnsCacheOperZoneTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderDdosDnsCacheOperZoneTransferOperToTerraform(struct!.oper),
  }
}


export function dataThunderDdosDnsCacheOperZoneTransferToHclTerraform(struct?: DataThunderDdosDnsCacheOperZoneTransferOutputReference | DataThunderDdosDnsCacheOperZoneTransfer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderDdosDnsCacheOperZoneTransferOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosDnsCacheOperZoneTransferOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheOperZoneTransferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheOperZoneTransfer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheOperZoneTransfer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDnsCacheOperZoneTransferOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDnsCacheOperZoneTransferOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper thunder_ddos_dns_cache_oper}
*/
export class DataThunderDdosDnsCacheOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDnsCacheOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDnsCacheOper to import
  * @param importFromId The id of the existing DataThunderDdosDnsCacheOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDnsCacheOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dns_cache_oper thunder_ddos_dns_cache_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDnsCacheOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDnsCacheOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._oper.internalValue = config.oper;
    this._zoneTransfer.internalValue = config.zoneTransfer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosDnsCacheOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDnsCacheOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // zone_transfer - computed: false, optional: true, required: false
  private _zoneTransfer = new DataThunderDdosDnsCacheOperZoneTransferOutputReference(this, "zone_transfer");
  public get zoneTransfer() {
    return this._zoneTransfer;
  }
  public putZoneTransfer(value: DataThunderDdosDnsCacheOperZoneTransfer) {
    this._zoneTransfer.internalValue = value;
  }
  public resetZoneTransfer() {
    this._zoneTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTransferInput() {
    return this._zoneTransfer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderDdosDnsCacheOperOperToTerraform(this._oper.internalValue),
      zone_transfer: dataThunderDdosDnsCacheOperZoneTransferToTerraform(this._zoneTransfer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosDnsCacheOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsCacheOperOperList",
      },
      zone_transfer: {
        value: dataThunderDdosDnsCacheOperZoneTransferToHclTerraform(this._zoneTransfer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsCacheOperZoneTransferList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
