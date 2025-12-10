// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsZoneForwardConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#extattrfilters DataNiosDnsZoneForward#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#filters DataNiosDnsZoneForward#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#max_results DataNiosDnsZoneForward#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#paging DataNiosDnsZoneForward#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsZoneForwardResultForwardTo {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#address DataNiosDnsZoneForward#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#name DataNiosDnsZoneForward#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#stealth DataNiosDnsZoneForward#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key DataNiosDnsZoneForward#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key_alg DataNiosDnsZoneForward#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key_name DataNiosDnsZoneForward#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#use_tsig_key_name DataNiosDnsZoneForward#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneForwardResultForwardToToTerraform(struct?: DataNiosDnsZoneForwardResultForwardTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneForwardResultForwardToToHclTerraform(struct?: DataNiosDnsZoneForwardResultForwardTo | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tsig_key_name: {
      value: cdktf.booleanToHclTerraform(struct!.useTsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneForwardResultForwardToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneForwardResultForwardTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._useTsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTsigKeyName = this._useTsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneForwardResultForwardTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._stealth = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._stealth = value.stealth;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: true, required: false
  private _stealth?: boolean | cdktf.IResolvable; 
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }
  public set stealth(value: boolean | cdktf.IResolvable) {
    this._stealth = value;
  }
  public resetStealth() {
    this._stealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stealthInput() {
    return this._stealth;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // use_tsig_key_name - computed: true, optional: true, required: false
  private _useTsigKeyName?: boolean | cdktf.IResolvable; 
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
  public set useTsigKeyName(value: boolean | cdktf.IResolvable) {
    this._useTsigKeyName = value;
  }
  public resetUseTsigKeyName() {
    this._useTsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTsigKeyNameInput() {
    return this._useTsigKeyName;
  }
}

export class DataNiosDnsZoneForwardResultForwardToList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneForwardResultForwardTo[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneForwardResultForwardToOutputReference {
    return new DataNiosDnsZoneForwardResultForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneForwardResultForwardingServersForwardTo {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#address DataNiosDnsZoneForward#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#name DataNiosDnsZoneForward#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#stealth DataNiosDnsZoneForward#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key DataNiosDnsZoneForward#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key_alg DataNiosDnsZoneForward#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#tsig_key_name DataNiosDnsZoneForward#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#use_tsig_key_name DataNiosDnsZoneForward#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneForwardResultForwardingServersForwardToToTerraform(struct?: DataNiosDnsZoneForwardResultForwardingServersForwardTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneForwardResultForwardingServersForwardToToHclTerraform(struct?: DataNiosDnsZoneForwardResultForwardingServersForwardTo | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_tsig_key_name: {
      value: cdktf.booleanToHclTerraform(struct!.useTsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneForwardResultForwardingServersForwardToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneForwardResultForwardingServersForwardTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._useTsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTsigKeyName = this._useTsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneForwardResultForwardingServersForwardTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
      this._stealth = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
      this._stealth = value.stealth;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: true
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: true, required: false
  private _stealth?: boolean | cdktf.IResolvable; 
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }
  public set stealth(value: boolean | cdktf.IResolvable) {
    this._stealth = value;
  }
  public resetStealth() {
    this._stealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stealthInput() {
    return this._stealth;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // use_tsig_key_name - computed: true, optional: true, required: false
  private _useTsigKeyName?: boolean | cdktf.IResolvable; 
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
  public set useTsigKeyName(value: boolean | cdktf.IResolvable) {
    this._useTsigKeyName = value;
  }
  public resetUseTsigKeyName() {
    this._useTsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTsigKeyNameInput() {
    return this._useTsigKeyName;
  }
}

export class DataNiosDnsZoneForwardResultForwardingServersForwardToList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneForwardResultForwardingServersForwardTo[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneForwardResultForwardingServersForwardToOutputReference {
    return new DataNiosDnsZoneForwardResultForwardingServersForwardToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneForwardResultForwardingServers {
  /**
  * The information for the remote name server to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#forward_to DataNiosDnsZoneForward#forward_to}
  */
  readonly forwardTo?: DataNiosDnsZoneForwardResultForwardingServersForwardTo[] | cdktf.IResolvable;
  /**
  * Determines if the appliance sends queries to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#forwarders_only DataNiosDnsZoneForward#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The name of this Grid member in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#name DataNiosDnsZoneForward#name}
  */
  readonly name: string;
  /**
  * Use flag for: forward_to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#use_override_forwarders DataNiosDnsZoneForward#use_override_forwarders}
  */
  readonly useOverrideForwarders?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneForwardResultForwardingServersToTerraform(struct?: DataNiosDnsZoneForwardResultForwardingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_to: cdktf.listMapper(dataNiosDnsZoneForwardResultForwardingServersForwardToToTerraform, false)(struct!.forwardTo),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    name: cdktf.stringToTerraform(struct!.name),
    use_override_forwarders: cdktf.booleanToTerraform(struct!.useOverrideForwarders),
  }
}


export function dataNiosDnsZoneForwardResultForwardingServersToHclTerraform(struct?: DataNiosDnsZoneForwardResultForwardingServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_to: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneForwardResultForwardingServersForwardToToHclTerraform, false)(struct!.forwardTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneForwardResultForwardingServersForwardToList",
    },
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_override_forwarders: {
      value: cdktf.booleanToHclTerraform(struct!.useOverrideForwarders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneForwardResultForwardingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneForwardResultForwardingServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardTo = this._forwardTo?.internalValue;
    }
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useOverrideForwarders !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOverrideForwarders = this._useOverrideForwarders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneForwardResultForwardingServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardTo.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._name = undefined;
      this._useOverrideForwarders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardTo.internalValue = value.forwardTo;
      this._forwardersOnly = value.forwardersOnly;
      this._name = value.name;
      this._useOverrideForwarders = value.useOverrideForwarders;
    }
  }

  // forward_to - computed: true, optional: true, required: false
  private _forwardTo = new DataNiosDnsZoneForwardResultForwardingServersForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }
  public putForwardTo(value: DataNiosDnsZoneForwardResultForwardingServersForwardTo[] | cdktf.IResolvable) {
    this._forwardTo.internalValue = value;
  }
  public resetForwardTo() {
    this._forwardTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // name - computed: true, optional: false, required: true
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

  // use_override_forwarders - computed: true, optional: true, required: false
  private _useOverrideForwarders?: boolean | cdktf.IResolvable; 
  public get useOverrideForwarders() {
    return this.getBooleanAttribute('use_override_forwarders');
  }
  public set useOverrideForwarders(value: boolean | cdktf.IResolvable) {
    this._useOverrideForwarders = value;
  }
  public resetUseOverrideForwarders() {
    this._useOverrideForwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOverrideForwardersInput() {
    return this._useOverrideForwarders;
  }
}

export class DataNiosDnsZoneForwardResultForwardingServersList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneForwardResultForwardingServers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneForwardResultForwardingServersOutputReference {
    return new DataNiosDnsZoneForwardResultForwardingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneForwardResult {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#comment DataNiosDnsZoneForward#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#disable DataNiosDnsZoneForward#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a auto-generation of NS records in parent zone is disabled or not. When this is set to False, the auto-generation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#disable_ns_generation DataNiosDnsZoneForward#disable_ns_generation}
  */
  readonly disableNsGeneration?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#extattrs DataNiosDnsZoneForward#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * A forward stub server name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#external_ns_group DataNiosDnsZoneForward#external_ns_group}
  */
  readonly externalNsGroup?: string;
  /**
  * The information for the remote name servers to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#forward_to DataNiosDnsZoneForward#forward_to}
  */
  readonly forwardTo?: DataNiosDnsZoneForwardResultForwardTo[] | cdktf.IResolvable;
  /**
  * Determines if the appliance sends queries to forwarders only, and not to other internal or Internet root servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#forwarders_only DataNiosDnsZoneForward#forwarders_only}
  */
  readonly forwardersOnly?: boolean | cdktf.IResolvable;
  /**
  * The information for the Grid members to which you want the Infoblox appliance to forward queries for a specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#forwarding_servers DataNiosDnsZoneForward#forwarding_servers}
  */
  readonly forwardingServers?: DataNiosDnsZoneForwardResultForwardingServers[] | cdktf.IResolvable;
  /**
  * The name of this DNS zone. For a reverse zone, this is in "address/cidr" format. For other zones, this is in FQDN format. This value can be in unicode format. Note that for a reverse zone, the corresponding zone_format value should be set. apra notation is not allowed for IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#fqdn DataNiosDnsZoneForward#fqdn}
  */
  readonly fqdn: string;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#locked DataNiosDnsZoneForward#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The flag that determines whether Active Directory is integrated or not. This field is valid only when ms_managed is "STUB", "AUTH_PRIMARY", or "AUTH_BOTH".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#ms_ad_integrated DataNiosDnsZoneForward#ms_ad_integrated}
  */
  readonly msAdIntegrated?: boolean | cdktf.IResolvable;
  /**
  * Determines whether an Active Directory-integrated zone with a Microsoft DNS server as primary allows dynamic updates. Valid values are: "SECURE" if the zone allows secure updates only. "NONE" if the zone forbids dynamic updates. "ANY" if the zone accepts both secure and nonsecure updates. This field is valid only if ms_managed is either "AUTH_PRIMARY" or "AUTH_BOTH". If the flag ms_ad_integrated is false, the value "SECURE" is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#ms_ddns_mode DataNiosDnsZoneForward#ms_ddns_mode}
  */
  readonly msDdnsMode?: string;
  /**
  * A forwarding member name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#ns_group DataNiosDnsZoneForward#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#prefix DataNiosDnsZoneForward#prefix}
  */
  readonly prefix?: string;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#view DataNiosDnsZoneForward#view}
  */
  readonly view?: string;
  /**
  * Determines the format of this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#zone_format DataNiosDnsZoneForward#zone_format}
  */
  readonly zoneFormat?: string;
}

export function dataNiosDnsZoneForwardResultToTerraform(struct?: DataNiosDnsZoneForwardResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_ns_generation: cdktf.booleanToTerraform(struct!.disableNsGeneration),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    external_ns_group: cdktf.stringToTerraform(struct!.externalNsGroup),
    forward_to: cdktf.listMapper(dataNiosDnsZoneForwardResultForwardToToTerraform, false)(struct!.forwardTo),
    forwarders_only: cdktf.booleanToTerraform(struct!.forwardersOnly),
    forwarding_servers: cdktf.listMapper(dataNiosDnsZoneForwardResultForwardingServersToTerraform, false)(struct!.forwardingServers),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    locked: cdktf.booleanToTerraform(struct!.locked),
    ms_ad_integrated: cdktf.booleanToTerraform(struct!.msAdIntegrated),
    ms_ddns_mode: cdktf.stringToTerraform(struct!.msDdnsMode),
    ns_group: cdktf.stringToTerraform(struct!.nsGroup),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    view: cdktf.stringToTerraform(struct!.view),
    zone_format: cdktf.stringToTerraform(struct!.zoneFormat),
  }
}


export function dataNiosDnsZoneForwardResultToHclTerraform(struct?: DataNiosDnsZoneForwardResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_ns_generation: {
      value: cdktf.booleanToHclTerraform(struct!.disableNsGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_ns_group: {
      value: cdktf.stringToHclTerraform(struct!.externalNsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_to: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneForwardResultForwardToToHclTerraform, false)(struct!.forwardTo),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneForwardResultForwardToList",
    },
    forwarders_only: {
      value: cdktf.booleanToHclTerraform(struct!.forwardersOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarding_servers: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneForwardResultForwardingServersToHclTerraform, false)(struct!.forwardingServers),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneForwardResultForwardingServersList",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ms_ad_integrated: {
      value: cdktf.booleanToHclTerraform(struct!.msAdIntegrated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ms_ddns_mode: {
      value: cdktf.stringToHclTerraform(struct!.msDdnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_group: {
      value: cdktf.stringToHclTerraform(struct!.nsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_format: {
      value: cdktf.stringToHclTerraform(struct!.zoneFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneForwardResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneForwardResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableNsGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNsGeneration = this._disableNsGeneration;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._externalNsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNsGroup = this._externalNsGroup;
    }
    if (this._forwardTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardTo = this._forwardTo?.internalValue;
    }
    if (this._forwardersOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardersOnly = this._forwardersOnly;
    }
    if (this._forwardingServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingServers = this._forwardingServers?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._msAdIntegrated !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAdIntegrated = this._msAdIntegrated;
    }
    if (this._msDdnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.msDdnsMode = this._msDdnsMode;
    }
    if (this._nsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsGroup = this._nsGroup;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    if (this._zoneFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneFormat = this._zoneFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneForwardResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._disable = undefined;
      this._disableNsGeneration = undefined;
      this._extattrs = undefined;
      this._externalNsGroup = undefined;
      this._forwardTo.internalValue = undefined;
      this._forwardersOnly = undefined;
      this._forwardingServers.internalValue = undefined;
      this._fqdn = undefined;
      this._locked = undefined;
      this._msAdIntegrated = undefined;
      this._msDdnsMode = undefined;
      this._nsGroup = undefined;
      this._prefix = undefined;
      this._view = undefined;
      this._zoneFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._disable = value.disable;
      this._disableNsGeneration = value.disableNsGeneration;
      this._extattrs = value.extattrs;
      this._externalNsGroup = value.externalNsGroup;
      this._forwardTo.internalValue = value.forwardTo;
      this._forwardersOnly = value.forwardersOnly;
      this._forwardingServers.internalValue = value.forwardingServers;
      this._fqdn = value.fqdn;
      this._locked = value.locked;
      this._msAdIntegrated = value.msAdIntegrated;
      this._msDdnsMode = value.msDdnsMode;
      this._nsGroup = value.nsGroup;
      this._prefix = value.prefix;
      this._view = value.view;
      this._zoneFormat = value.zoneFormat;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
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

  // disable_ns_generation - computed: true, optional: true, required: false
  private _disableNsGeneration?: boolean | cdktf.IResolvable; 
  public get disableNsGeneration() {
    return this.getBooleanAttribute('disable_ns_generation');
  }
  public set disableNsGeneration(value: boolean | cdktf.IResolvable) {
    this._disableNsGeneration = value;
  }
  public resetDisableNsGeneration() {
    this._disableNsGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNsGenerationInput() {
    return this._disableNsGeneration;
  }

  // display_domain - computed: true, optional: false, required: false
  public get displayDomain() {
    return this.getStringAttribute('display_domain');
  }

  // dns_fqdn - computed: true, optional: false, required: false
  public get dnsFqdn() {
    return this.getStringAttribute('dns_fqdn');
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

  // external_ns_group - computed: true, optional: true, required: false
  private _externalNsGroup?: string; 
  public get externalNsGroup() {
    return this.getStringAttribute('external_ns_group');
  }
  public set externalNsGroup(value: string) {
    this._externalNsGroup = value;
  }
  public resetExternalNsGroup() {
    this._externalNsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNsGroupInput() {
    return this._externalNsGroup;
  }

  // forward_to - computed: true, optional: true, required: false
  private _forwardTo = new DataNiosDnsZoneForwardResultForwardToList(this, "forward_to", false);
  public get forwardTo() {
    return this._forwardTo;
  }
  public putForwardTo(value: DataNiosDnsZoneForwardResultForwardTo[] | cdktf.IResolvable) {
    this._forwardTo.internalValue = value;
  }
  public resetForwardTo() {
    this._forwardTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToInput() {
    return this._forwardTo.internalValue;
  }

  // forwarders_only - computed: true, optional: true, required: false
  private _forwardersOnly?: boolean | cdktf.IResolvable; 
  public get forwardersOnly() {
    return this.getBooleanAttribute('forwarders_only');
  }
  public set forwardersOnly(value: boolean | cdktf.IResolvable) {
    this._forwardersOnly = value;
  }
  public resetForwardersOnly() {
    this._forwardersOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersOnlyInput() {
    return this._forwardersOnly;
  }

  // forwarding_servers - computed: true, optional: true, required: false
  private _forwardingServers = new DataNiosDnsZoneForwardResultForwardingServersList(this, "forwarding_servers", false);
  public get forwardingServers() {
    return this._forwardingServers;
  }
  public putForwardingServers(value: DataNiosDnsZoneForwardResultForwardingServers[] | cdktf.IResolvable) {
    this._forwardingServers.internalValue = value;
  }
  public resetForwardingServers() {
    this._forwardingServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingServersInput() {
    return this._forwardingServers.internalValue;
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // locked_by - computed: true, optional: false, required: false
  public get lockedBy() {
    return this.getStringAttribute('locked_by');
  }

  // mask_prefix - computed: true, optional: false, required: false
  public get maskPrefix() {
    return this.getStringAttribute('mask_prefix');
  }

  // ms_ad_integrated - computed: true, optional: true, required: false
  private _msAdIntegrated?: boolean | cdktf.IResolvable; 
  public get msAdIntegrated() {
    return this.getBooleanAttribute('ms_ad_integrated');
  }
  public set msAdIntegrated(value: boolean | cdktf.IResolvable) {
    this._msAdIntegrated = value;
  }
  public resetMsAdIntegrated() {
    this._msAdIntegrated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAdIntegratedInput() {
    return this._msAdIntegrated;
  }

  // ms_ddns_mode - computed: true, optional: true, required: false
  private _msDdnsMode?: string; 
  public get msDdnsMode() {
    return this.getStringAttribute('ms_ddns_mode');
  }
  public set msDdnsMode(value: string) {
    this._msDdnsMode = value;
  }
  public resetMsDdnsMode() {
    this._msDdnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msDdnsModeInput() {
    return this._msDdnsMode;
  }

  // ms_managed - computed: true, optional: false, required: false
  public get msManaged() {
    return this.getStringAttribute('ms_managed');
  }

  // ms_read_only - computed: true, optional: false, required: false
  public get msReadOnly() {
    return this.getBooleanAttribute('ms_read_only');
  }

  // ms_sync_master_name - computed: true, optional: false, required: false
  public get msSyncMasterName() {
    return this.getStringAttribute('ms_sync_master_name');
  }

  // ns_group - computed: true, optional: true, required: false
  private _nsGroup?: string; 
  public get nsGroup() {
    return this.getStringAttribute('ns_group');
  }
  public set nsGroup(value: string) {
    this._nsGroup = value;
  }
  public resetNsGroup() {
    this._nsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsGroupInput() {
    return this._nsGroup;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // using_srg_associations - computed: true, optional: false, required: false
  public get usingSrgAssociations() {
    return this.getBooleanAttribute('using_srg_associations');
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

  // zone_format - computed: true, optional: true, required: false
  private _zoneFormat?: string; 
  public get zoneFormat() {
    return this.getStringAttribute('zone_format');
  }
  public set zoneFormat(value: string) {
    this._zoneFormat = value;
  }
  public resetZoneFormat() {
    this._zoneFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFormatInput() {
    return this._zoneFormat;
  }
}

export class DataNiosDnsZoneForwardResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneForwardResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneForwardResultOutputReference {
    return new DataNiosDnsZoneForwardResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward nios_dns_zone_forward}
*/
export class DataNiosDnsZoneForward extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_forward";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsZoneForward resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsZoneForward to import
  * @param importFromId The id of the existing DataNiosDnsZoneForward that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsZoneForward to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_forward", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_forward nios_dns_zone_forward} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsZoneForwardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsZoneForwardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_forward',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

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

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosDnsZoneForwardResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
