// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DirpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#conflict_resolve Dirpool#conflict_resolve}
  */
  readonly conflictResolve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#id Dirpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ignore_ecs Dirpool#ignore_ecs}
  */
  readonly ignoreEcs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#owner_name Dirpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#pool_description Dirpool#pool_description}
  */
  readonly poolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#record_type Dirpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#zone_name Dirpool#zone_name}
  */
  readonly zoneName: string;
  /**
  * no_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#no_response Dirpool#no_response}
  */
  readonly noResponse?: DirpoolNoResponse;
  /**
  * rdata_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#rdata_info Dirpool#rdata_info}
  */
  readonly rdataInfo: DirpoolRdataInfo[] | cdktf.IResolvable;
}
export interface DirpoolNoResponseIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#address Dirpool#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#cidr Dirpool#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#end Dirpool#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#start Dirpool#start}
  */
  readonly start?: string;
}

export function dirpoolNoResponseIpToTerraform(struct?: DirpoolNoResponseIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dirpoolNoResponseIpToHclTerraform(struct?: DirpoolNoResponseIp | cdktf.IResolvable): any {
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
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirpoolNoResponseIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirpoolNoResponseIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirpoolNoResponseIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidr = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidr = value.cidr;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DirpoolNoResponseIpList extends cdktf.ComplexList {
  public internalValue? : DirpoolNoResponseIp[] | cdktf.IResolvable

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
  public get(index: number): DirpoolNoResponseIpOutputReference {
    return new DirpoolNoResponseIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirpoolNoResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#all_non_configured Dirpool#all_non_configured}
  */
  readonly allNonConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_account_level Dirpool#geo_account_level}
  */
  readonly geoAccountLevel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_codes Dirpool#geo_codes}
  */
  readonly geoCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_group_name Dirpool#geo_group_name}
  */
  readonly geoGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip_account_level Dirpool#ip_account_level}
  */
  readonly ipAccountLevel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip_group_name Dirpool#ip_group_name}
  */
  readonly ipGroupName?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip Dirpool#ip}
  */
  readonly ip?: DirpoolNoResponseIp[] | cdktf.IResolvable;
}

export function dirpoolNoResponseToTerraform(struct?: DirpoolNoResponseOutputReference | DirpoolNoResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_non_configured: cdktf.booleanToTerraform(struct!.allNonConfigured),
    geo_account_level: cdktf.booleanToTerraform(struct!.geoAccountLevel),
    geo_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoCodes),
    geo_group_name: cdktf.stringToTerraform(struct!.geoGroupName),
    ip_account_level: cdktf.booleanToTerraform(struct!.ipAccountLevel),
    ip_group_name: cdktf.stringToTerraform(struct!.ipGroupName),
    ip: cdktf.listMapper(dirpoolNoResponseIpToTerraform, true)(struct!.ip),
  }
}


export function dirpoolNoResponseToHclTerraform(struct?: DirpoolNoResponseOutputReference | DirpoolNoResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_non_configured: {
      value: cdktf.booleanToHclTerraform(struct!.allNonConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo_account_level: {
      value: cdktf.booleanToHclTerraform(struct!.geoAccountLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    geo_group_name: {
      value: cdktf.stringToHclTerraform(struct!.geoGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_account_level: {
      value: cdktf.booleanToHclTerraform(struct!.ipAccountLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ipGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(dirpoolNoResponseIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "DirpoolNoResponseIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirpoolNoResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DirpoolNoResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNonConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNonConfigured = this._allNonConfigured;
    }
    if (this._geoAccountLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoAccountLevel = this._geoAccountLevel;
    }
    if (this._geoCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoCodes = this._geoCodes;
    }
    if (this._geoGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoGroupName = this._geoGroupName;
    }
    if (this._ipAccountLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccountLevel = this._ipAccountLevel;
    }
    if (this._ipGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGroupName = this._ipGroupName;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirpoolNoResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allNonConfigured = undefined;
      this._geoAccountLevel = undefined;
      this._geoCodes = undefined;
      this._geoGroupName = undefined;
      this._ipAccountLevel = undefined;
      this._ipGroupName = undefined;
      this._ip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allNonConfigured = value.allNonConfigured;
      this._geoAccountLevel = value.geoAccountLevel;
      this._geoCodes = value.geoCodes;
      this._geoGroupName = value.geoGroupName;
      this._ipAccountLevel = value.ipAccountLevel;
      this._ipGroupName = value.ipGroupName;
      this._ip.internalValue = value.ip;
    }
  }

  // all_non_configured - computed: false, optional: true, required: false
  private _allNonConfigured?: boolean | cdktf.IResolvable; 
  public get allNonConfigured() {
    return this.getBooleanAttribute('all_non_configured');
  }
  public set allNonConfigured(value: boolean | cdktf.IResolvable) {
    this._allNonConfigured = value;
  }
  public resetAllNonConfigured() {
    this._allNonConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNonConfiguredInput() {
    return this._allNonConfigured;
  }

  // geo_account_level - computed: false, optional: true, required: false
  private _geoAccountLevel?: boolean | cdktf.IResolvable; 
  public get geoAccountLevel() {
    return this.getBooleanAttribute('geo_account_level');
  }
  public set geoAccountLevel(value: boolean | cdktf.IResolvable) {
    this._geoAccountLevel = value;
  }
  public resetGeoAccountLevel() {
    this._geoAccountLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoAccountLevelInput() {
    return this._geoAccountLevel;
  }

  // geo_codes - computed: false, optional: true, required: false
  private _geoCodes?: string[]; 
  public get geoCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('geo_codes'));
  }
  public set geoCodes(value: string[]) {
    this._geoCodes = value;
  }
  public resetGeoCodes() {
    this._geoCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoCodesInput() {
    return this._geoCodes;
  }

  // geo_group_name - computed: false, optional: true, required: false
  private _geoGroupName?: string; 
  public get geoGroupName() {
    return this.getStringAttribute('geo_group_name');
  }
  public set geoGroupName(value: string) {
    this._geoGroupName = value;
  }
  public resetGeoGroupName() {
    this._geoGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoGroupNameInput() {
    return this._geoGroupName;
  }

  // ip_account_level - computed: false, optional: true, required: false
  private _ipAccountLevel?: boolean | cdktf.IResolvable; 
  public get ipAccountLevel() {
    return this.getBooleanAttribute('ip_account_level');
  }
  public set ipAccountLevel(value: boolean | cdktf.IResolvable) {
    this._ipAccountLevel = value;
  }
  public resetIpAccountLevel() {
    this._ipAccountLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccountLevelInput() {
    return this._ipAccountLevel;
  }

  // ip_group_name - computed: false, optional: true, required: false
  private _ipGroupName?: string; 
  public get ipGroupName() {
    return this.getStringAttribute('ip_group_name');
  }
  public set ipGroupName(value: string) {
    this._ipGroupName = value;
  }
  public resetIpGroupName() {
    this._ipGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupNameInput() {
    return this._ipGroupName;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DirpoolNoResponseIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DirpoolNoResponseIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface DirpoolRdataInfoIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#address Dirpool#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#cidr Dirpool#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#end Dirpool#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#start Dirpool#start}
  */
  readonly start?: string;
}

export function dirpoolRdataInfoIpToTerraform(struct?: DirpoolRdataInfoIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    cidr: cdktf.stringToTerraform(struct!.cidr),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dirpoolRdataInfoIpToHclTerraform(struct?: DirpoolRdataInfoIp | cdktf.IResolvable): any {
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
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirpoolRdataInfoIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirpoolRdataInfoIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirpoolRdataInfoIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._cidr = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._cidr = value.cidr;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DirpoolRdataInfoIpList extends cdktf.ComplexList {
  public internalValue? : DirpoolRdataInfoIp[] | cdktf.IResolvable

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
  public get(index: number): DirpoolRdataInfoIpOutputReference {
    return new DirpoolRdataInfoIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DirpoolRdataInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#all_non_configured Dirpool#all_non_configured}
  */
  readonly allNonConfigured?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_account_level Dirpool#geo_account_level}
  */
  readonly geoAccountLevel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_codes Dirpool#geo_codes}
  */
  readonly geoCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#geo_group_name Dirpool#geo_group_name}
  */
  readonly geoGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip_account_level Dirpool#ip_account_level}
  */
  readonly ipAccountLevel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip_group_name Dirpool#ip_group_name}
  */
  readonly ipGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#rdata Dirpool#rdata}
  */
  readonly rdata: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ttl Dirpool#ttl}
  */
  readonly ttl?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#ip Dirpool#ip}
  */
  readonly ip?: DirpoolRdataInfoIp[] | cdktf.IResolvable;
}

export function dirpoolRdataInfoToTerraform(struct?: DirpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_non_configured: cdktf.booleanToTerraform(struct!.allNonConfigured),
    geo_account_level: cdktf.booleanToTerraform(struct!.geoAccountLevel),
    geo_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoCodes),
    geo_group_name: cdktf.stringToTerraform(struct!.geoGroupName),
    ip_account_level: cdktf.booleanToTerraform(struct!.ipAccountLevel),
    ip_group_name: cdktf.stringToTerraform(struct!.ipGroupName),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    ip: cdktf.listMapper(dirpoolRdataInfoIpToTerraform, true)(struct!.ip),
  }
}


export function dirpoolRdataInfoToHclTerraform(struct?: DirpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_non_configured: {
      value: cdktf.booleanToHclTerraform(struct!.allNonConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo_account_level: {
      value: cdktf.booleanToHclTerraform(struct!.geoAccountLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geo_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoCodes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    geo_group_name: {
      value: cdktf.stringToHclTerraform(struct!.geoGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_account_level: {
      value: cdktf.booleanToHclTerraform(struct!.ipAccountLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_group_name: {
      value: cdktf.stringToHclTerraform(struct!.ipGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(dirpoolRdataInfoIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "DirpoolRdataInfoIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DirpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DirpoolRdataInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNonConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNonConfigured = this._allNonConfigured;
    }
    if (this._geoAccountLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoAccountLevel = this._geoAccountLevel;
    }
    if (this._geoCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoCodes = this._geoCodes;
    }
    if (this._geoGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoGroupName = this._geoGroupName;
    }
    if (this._ipAccountLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAccountLevel = this._ipAccountLevel;
    }
    if (this._ipGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGroupName = this._ipGroupName;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DirpoolRdataInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allNonConfigured = undefined;
      this._geoAccountLevel = undefined;
      this._geoCodes = undefined;
      this._geoGroupName = undefined;
      this._ipAccountLevel = undefined;
      this._ipGroupName = undefined;
      this._rdata = undefined;
      this._ttl = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allNonConfigured = value.allNonConfigured;
      this._geoAccountLevel = value.geoAccountLevel;
      this._geoCodes = value.geoCodes;
      this._geoGroupName = value.geoGroupName;
      this._ipAccountLevel = value.ipAccountLevel;
      this._ipGroupName = value.ipGroupName;
      this._rdata = value.rdata;
      this._ttl = value.ttl;
      this._ip.internalValue = value.ip;
    }
  }

  // all_non_configured - computed: false, optional: true, required: false
  private _allNonConfigured?: boolean | cdktf.IResolvable; 
  public get allNonConfigured() {
    return this.getBooleanAttribute('all_non_configured');
  }
  public set allNonConfigured(value: boolean | cdktf.IResolvable) {
    this._allNonConfigured = value;
  }
  public resetAllNonConfigured() {
    this._allNonConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNonConfiguredInput() {
    return this._allNonConfigured;
  }

  // geo_account_level - computed: false, optional: true, required: false
  private _geoAccountLevel?: boolean | cdktf.IResolvable; 
  public get geoAccountLevel() {
    return this.getBooleanAttribute('geo_account_level');
  }
  public set geoAccountLevel(value: boolean | cdktf.IResolvable) {
    this._geoAccountLevel = value;
  }
  public resetGeoAccountLevel() {
    this._geoAccountLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoAccountLevelInput() {
    return this._geoAccountLevel;
  }

  // geo_codes - computed: false, optional: true, required: false
  private _geoCodes?: string[]; 
  public get geoCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('geo_codes'));
  }
  public set geoCodes(value: string[]) {
    this._geoCodes = value;
  }
  public resetGeoCodes() {
    this._geoCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoCodesInput() {
    return this._geoCodes;
  }

  // geo_group_name - computed: false, optional: true, required: false
  private _geoGroupName?: string; 
  public get geoGroupName() {
    return this.getStringAttribute('geo_group_name');
  }
  public set geoGroupName(value: string) {
    this._geoGroupName = value;
  }
  public resetGeoGroupName() {
    this._geoGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoGroupNameInput() {
    return this._geoGroupName;
  }

  // ip_account_level - computed: false, optional: true, required: false
  private _ipAccountLevel?: boolean | cdktf.IResolvable; 
  public get ipAccountLevel() {
    return this.getBooleanAttribute('ip_account_level');
  }
  public set ipAccountLevel(value: boolean | cdktf.IResolvable) {
    this._ipAccountLevel = value;
  }
  public resetIpAccountLevel() {
    this._ipAccountLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccountLevelInput() {
    return this._ipAccountLevel;
  }

  // ip_group_name - computed: false, optional: true, required: false
  private _ipGroupName?: string; 
  public get ipGroupName() {
    return this.getStringAttribute('ip_group_name');
  }
  public set ipGroupName(value: string) {
    this._ipGroupName = value;
  }
  public resetIpGroupName() {
    this._ipGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupNameInput() {
    return this._ipGroupName;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new DirpoolRdataInfoIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: DirpoolRdataInfoIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class DirpoolRdataInfoList extends cdktf.ComplexList {
  public internalValue? : DirpoolRdataInfo[] | cdktf.IResolvable

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
  public get(index: number): DirpoolRdataInfoOutputReference {
    return new DirpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool ultradns_dirpool}
*/
export class Dirpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_dirpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dirpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dirpool to import
  * @param importFromId The id of the existing Dirpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dirpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_dirpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/dirpool ultradns_dirpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DirpoolConfig
  */
  public constructor(scope: Construct, id: string, config: DirpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_dirpool',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conflictResolve = config.conflictResolve;
    this._id = config.id;
    this._ignoreEcs = config.ignoreEcs;
    this._ownerName = config.ownerName;
    this._poolDescription = config.poolDescription;
    this._recordType = config.recordType;
    this._zoneName = config.zoneName;
    this._noResponse.internalValue = config.noResponse;
    this._rdataInfo.internalValue = config.rdataInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conflict_resolve - computed: false, optional: true, required: false
  private _conflictResolve?: string; 
  public get conflictResolve() {
    return this.getStringAttribute('conflict_resolve');
  }
  public set conflictResolve(value: string) {
    this._conflictResolve = value;
  }
  public resetConflictResolve() {
    this._conflictResolve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictResolveInput() {
    return this._conflictResolve;
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

  // ignore_ecs - computed: false, optional: true, required: false
  private _ignoreEcs?: boolean | cdktf.IResolvable; 
  public get ignoreEcs() {
    return this.getBooleanAttribute('ignore_ecs');
  }
  public set ignoreEcs(value: boolean | cdktf.IResolvable) {
    this._ignoreEcs = value;
  }
  public resetIgnoreEcs() {
    this._ignoreEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreEcsInput() {
    return this._ignoreEcs;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // pool_description - computed: false, optional: true, required: false
  private _poolDescription?: string; 
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }
  public set poolDescription(value: string) {
    this._poolDescription = value;
  }
  public resetPoolDescription() {
    this._poolDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDescriptionInput() {
    return this._poolDescription;
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

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // no_response - computed: false, optional: true, required: false
  private _noResponse = new DirpoolNoResponseOutputReference(this, "no_response");
  public get noResponse() {
    return this._noResponse;
  }
  public putNoResponse(value: DirpoolNoResponse) {
    this._noResponse.internalValue = value;
  }
  public resetNoResponse() {
    this._noResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResponseInput() {
    return this._noResponse.internalValue;
  }

  // rdata_info - computed: false, optional: false, required: true
  private _rdataInfo = new DirpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }
  public putRdataInfo(value: DirpoolRdataInfo[] | cdktf.IResolvable) {
    this._rdataInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInfoInput() {
    return this._rdataInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conflict_resolve: cdktf.stringToTerraform(this._conflictResolve),
      id: cdktf.stringToTerraform(this._id),
      ignore_ecs: cdktf.booleanToTerraform(this._ignoreEcs),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_description: cdktf.stringToTerraform(this._poolDescription),
      record_type: cdktf.stringToTerraform(this._recordType),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      no_response: dirpoolNoResponseToTerraform(this._noResponse.internalValue),
      rdata_info: cdktf.listMapper(dirpoolRdataInfoToTerraform, true)(this._rdataInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conflict_resolve: {
        value: cdktf.stringToHclTerraform(this._conflictResolve),
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
      ignore_ecs: {
        value: cdktf.booleanToHclTerraform(this._ignoreEcs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_description: {
        value: cdktf.stringToHclTerraform(this._poolDescription),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_response: {
        value: dirpoolNoResponseToHclTerraform(this._noResponse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DirpoolNoResponseList",
      },
      rdata_info: {
        value: cdktf.listMapperHcl(dirpoolRdataInfoToHclTerraform, true)(this._rdataInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DirpoolRdataInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
