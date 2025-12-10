// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsZoneRpConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#extattrfilters DataNiosDnsZoneRp#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#filters DataNiosDnsZoneRp#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#max_results DataNiosDnsZoneRp#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#paging DataNiosDnsZoneRp#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsZoneRpResultExternalPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#address DataNiosDnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#name DataNiosDnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#stealth DataNiosDnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key DataNiosDnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_alg DataNiosDnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_name DataNiosDnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_tsig_key_name DataNiosDnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneRpResultExternalPrimariesToTerraform(struct?: DataNiosDnsZoneRpResultExternalPrimaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneRpResultExternalPrimariesToHclTerraform(struct?: DataNiosDnsZoneRpResultExternalPrimaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneRpResultExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneRpResultExternalPrimaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneRpResultExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultExternalPrimariesOutputReference {
    return new DataNiosDnsZoneRpResultExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultExternalSecondaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#address DataNiosDnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#name DataNiosDnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#stealth DataNiosDnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key DataNiosDnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_alg DataNiosDnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_name DataNiosDnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_tsig_key_name DataNiosDnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneRpResultExternalSecondariesToTerraform(struct?: DataNiosDnsZoneRpResultExternalSecondaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneRpResultExternalSecondariesToHclTerraform(struct?: DataNiosDnsZoneRpResultExternalSecondaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneRpResultExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneRpResultExternalSecondaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneRpResultExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultExternalSecondariesOutputReference {
    return new DataNiosDnsZoneRpResultExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping {
  /**
  * The type of Fireeye Alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#alert_type DataNiosDnsZoneRp#alert_type}
  */
  readonly alertType?: string;
  /**
  * The expiration Lifetime of alert type. The 32-bit unsigned integer represents the amount of seconds this alert type will live for. 0 means the alert will never expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#lifetime DataNiosDnsZoneRp#lifetime}
  */
  readonly lifetime?: number;
  /**
  * The RPZ rule for the alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_rule DataNiosDnsZoneRp#rpz_rule}
  */
  readonly rpzRule?: string;
}

export function dataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingToTerraform(struct?: DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    rpz_rule: cdktf.stringToTerraform(struct!.rpzRule),
  }
}


export function dataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingToHclTerraform(struct?: DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_type: {
      value: cdktf.stringToHclTerraform(struct!.alertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_rule: {
      value: cdktf.stringToHclTerraform(struct!.rpzRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertType = this._alertType;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._rpzRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzRule = this._rpzRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertType = undefined;
      this._lifetime = undefined;
      this._rpzRule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertType = value.alertType;
      this._lifetime = value.lifetime;
      this._rpzRule = value.rpzRule;
    }
  }

  // alert_type - computed: true, optional: true, required: false
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  public resetAlertType() {
    this._alertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // rpz_rule - computed: true, optional: true, required: false
  private _rpzRule?: string; 
  public get rpzRule() {
    return this.getStringAttribute('rpz_rule');
  }
  public set rpzRule(value: string) {
    this._rpzRule = value;
  }
  public resetRpzRule() {
    this._rpzRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzRuleInput() {
    return this._rpzRule;
  }
}

export class DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingOutputReference {
    return new DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultFireeyeRuleMapping {
  /**
  * The override setting for APT alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#apt_override DataNiosDnsZoneRp#apt_override}
  */
  readonly aptOverride?: string;
  /**
  * The FireEye alert mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#fireeye_alert_mapping DataNiosDnsZoneRp#fireeye_alert_mapping}
  */
  readonly fireeyeAlertMapping?: DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable;
  /**
  * The domain name to be substituted, this is applicable only when apt_override is set to "SUBSTITUTE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#substituted_domain_name DataNiosDnsZoneRp#substituted_domain_name}
  */
  readonly substitutedDomainName?: string;
}

export function dataNiosDnsZoneRpResultFireeyeRuleMappingToTerraform(struct?: DataNiosDnsZoneRpResultFireeyeRuleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt_override: cdktf.stringToTerraform(struct!.aptOverride),
    fireeye_alert_mapping: cdktf.listMapper(dataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingToTerraform, false)(struct!.fireeyeAlertMapping),
    substituted_domain_name: cdktf.stringToTerraform(struct!.substitutedDomainName),
  }
}


export function dataNiosDnsZoneRpResultFireeyeRuleMappingToHclTerraform(struct?: DataNiosDnsZoneRpResultFireeyeRuleMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apt_override: {
      value: cdktf.stringToHclTerraform(struct!.aptOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fireeye_alert_mapping: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingToHclTerraform, false)(struct!.fireeyeAlertMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingList",
    },
    substituted_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.substitutedDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultFireeyeRuleMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneRpResultFireeyeRuleMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aptOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.aptOverride = this._aptOverride;
    }
    if (this._fireeyeAlertMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fireeyeAlertMapping = this._fireeyeAlertMapping?.internalValue;
    }
    if (this._substitutedDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutedDomainName = this._substitutedDomainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultFireeyeRuleMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aptOverride = undefined;
      this._fireeyeAlertMapping.internalValue = undefined;
      this._substitutedDomainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aptOverride = value.aptOverride;
      this._fireeyeAlertMapping.internalValue = value.fireeyeAlertMapping;
      this._substitutedDomainName = value.substitutedDomainName;
    }
  }

  // apt_override - computed: true, optional: true, required: false
  private _aptOverride?: string; 
  public get aptOverride() {
    return this.getStringAttribute('apt_override');
  }
  public set aptOverride(value: string) {
    this._aptOverride = value;
  }
  public resetAptOverride() {
    this._aptOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptOverrideInput() {
    return this._aptOverride;
  }

  // fireeye_alert_mapping - computed: true, optional: true, required: false
  private _fireeyeAlertMapping = new DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMappingList(this, "fireeye_alert_mapping", false);
  public get fireeyeAlertMapping() {
    return this._fireeyeAlertMapping;
  }
  public putFireeyeAlertMapping(value: DataNiosDnsZoneRpResultFireeyeRuleMappingFireeyeAlertMapping[] | cdktf.IResolvable) {
    this._fireeyeAlertMapping.internalValue = value;
  }
  public resetFireeyeAlertMapping() {
    this._fireeyeAlertMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireeyeAlertMappingInput() {
    return this._fireeyeAlertMapping.internalValue;
  }

  // substituted_domain_name - computed: true, optional: true, required: false
  private _substitutedDomainName?: string; 
  public get substitutedDomainName() {
    return this.getStringAttribute('substituted_domain_name');
  }
  public set substitutedDomainName(value: string) {
    this._substitutedDomainName = value;
  }
  public resetSubstitutedDomainName() {
    this._substitutedDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutedDomainNameInput() {
    return this._substitutedDomainName;
  }
}
export interface DataNiosDnsZoneRpResultGridPrimaryPreferredPrimaries {
}

export function dataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesToTerraform(struct?: DataNiosDnsZoneRpResultGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesToHclTerraform(struct?: DataNiosDnsZoneRpResultGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultGridPrimaryPreferredPrimaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultGridPrimaryPreferredPrimaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesList extends cdktf.ComplexList {

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
  public get(index: number): DataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesOutputReference {
    return new DataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultGridPrimary {
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#name DataNiosDnsZoneRp#name}
  */
  readonly name: string;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#stealth DataNiosDnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneRpResultGridPrimaryToTerraform(struct?: DataNiosDnsZoneRpResultGridPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneRpResultGridPrimaryToHclTerraform(struct?: DataNiosDnsZoneRpResultGridPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultGridPrimaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultGridPrimary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultGridPrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stealth = value.stealth;
    }
  }

  // enable_preferred_primaries - computed: true, optional: false, required: false
  public get enablePreferredPrimaries() {
    return this.getBooleanAttribute('enable_preferred_primaries');
  }

  // grid_replicate - computed: true, optional: false, required: false
  public get gridReplicate() {
    return this.getBooleanAttribute('grid_replicate');
  }

  // lead - computed: true, optional: false, required: false
  public get lead() {
    return this.getBooleanAttribute('lead');
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

  // preferred_primaries - computed: true, optional: false, required: false
  private _preferredPrimaries = new DataNiosDnsZoneRpResultGridPrimaryPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
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
}

export class DataNiosDnsZoneRpResultGridPrimaryList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultGridPrimary[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultGridPrimaryOutputReference {
    return new DataNiosDnsZoneRpResultGridPrimaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#address DataNiosDnsZoneRp#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#name DataNiosDnsZoneRp#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#stealth DataNiosDnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key DataNiosDnsZoneRp#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_alg DataNiosDnsZoneRp#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#tsig_key_name DataNiosDnsZoneRp#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_tsig_key_name DataNiosDnsZoneRp#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesToTerraform(struct?: DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesToHclTerraform(struct?: DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesOutputReference {
    return new DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultGridSecondaries {
  /**
  * This flag represents whether the preferred_primaries field values of this member are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#enable_preferred_primaries DataNiosDnsZoneRp#enable_preferred_primaries}
  */
  readonly enablePreferredPrimaries?: boolean | cdktf.IResolvable;
  /**
  * The flag represents DNS zone transfers if set to False, and ID Grid Replication if set to True. This flag is ignored if the struct is specified as part of a stub zone or if it is set as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#grid_replicate DataNiosDnsZoneRp#grid_replicate}
  */
  readonly gridReplicate?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether the Grid lead secondary server performs zone transfers to non lead secondaries. This flag is ignored if the struct is specified as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#lead DataNiosDnsZoneRp#lead}
  */
  readonly lead?: boolean | cdktf.IResolvable;
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#name DataNiosDnsZoneRp#name}
  */
  readonly name: string;
  /**
  * The primary preference list with Grid member names and\or External Server extserver structs for this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#preferred_primaries DataNiosDnsZoneRp#preferred_primaries}
  */
  readonly preferredPrimaries?: DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#stealth DataNiosDnsZoneRp#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneRpResultGridSecondariesToTerraform(struct?: DataNiosDnsZoneRpResultGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_preferred_primaries: cdktf.booleanToTerraform(struct!.enablePreferredPrimaries),
    grid_replicate: cdktf.booleanToTerraform(struct!.gridReplicate),
    lead: cdktf.booleanToTerraform(struct!.lead),
    name: cdktf.stringToTerraform(struct!.name),
    preferred_primaries: cdktf.listMapper(dataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesToTerraform, false)(struct!.preferredPrimaries),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneRpResultGridSecondariesToHclTerraform(struct?: DataNiosDnsZoneRpResultGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_preferred_primaries: {
      value: cdktf.booleanToHclTerraform(struct!.enablePreferredPrimaries),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grid_replicate: {
      value: cdktf.booleanToHclTerraform(struct!.gridReplicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lead: {
      value: cdktf.booleanToHclTerraform(struct!.lead),
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
    preferred_primaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesToHclTerraform, false)(struct!.preferredPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesList",
    },
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultGridSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultGridSecondaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePreferredPrimaries !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePreferredPrimaries = this._enablePreferredPrimaries;
    }
    if (this._gridReplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridReplicate = this._gridReplicate;
    }
    if (this._lead !== undefined) {
      hasAnyValues = true;
      internalValueResult.lead = this._lead;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredPrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredPrimaries = this._preferredPrimaries?.internalValue;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultGridSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePreferredPrimaries = undefined;
      this._gridReplicate = undefined;
      this._lead = undefined;
      this._name = undefined;
      this._preferredPrimaries.internalValue = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePreferredPrimaries = value.enablePreferredPrimaries;
      this._gridReplicate = value.gridReplicate;
      this._lead = value.lead;
      this._name = value.name;
      this._preferredPrimaries.internalValue = value.preferredPrimaries;
      this._stealth = value.stealth;
    }
  }

  // enable_preferred_primaries - computed: true, optional: true, required: false
  private _enablePreferredPrimaries?: boolean | cdktf.IResolvable; 
  public get enablePreferredPrimaries() {
    return this.getBooleanAttribute('enable_preferred_primaries');
  }
  public set enablePreferredPrimaries(value: boolean | cdktf.IResolvable) {
    this._enablePreferredPrimaries = value;
  }
  public resetEnablePreferredPrimaries() {
    this._enablePreferredPrimaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreferredPrimariesInput() {
    return this._enablePreferredPrimaries;
  }

  // grid_replicate - computed: true, optional: true, required: false
  private _gridReplicate?: boolean | cdktf.IResolvable; 
  public get gridReplicate() {
    return this.getBooleanAttribute('grid_replicate');
  }
  public set gridReplicate(value: boolean | cdktf.IResolvable) {
    this._gridReplicate = value;
  }
  public resetGridReplicate() {
    this._gridReplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridReplicateInput() {
    return this._gridReplicate;
  }

  // lead - computed: true, optional: true, required: false
  private _lead?: boolean | cdktf.IResolvable; 
  public get lead() {
    return this.getBooleanAttribute('lead');
  }
  public set lead(value: boolean | cdktf.IResolvable) {
    this._lead = value;
  }
  public resetLead() {
    this._lead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leadInput() {
    return this._lead;
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

  // preferred_primaries - computed: true, optional: true, required: false
  private _preferredPrimaries = new DataNiosDnsZoneRpResultGridSecondariesPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
  }
  public putPreferredPrimaries(value: DataNiosDnsZoneRpResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable) {
    this._preferredPrimaries.internalValue = value;
  }
  public resetPreferredPrimaries() {
    this._preferredPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredPrimariesInput() {
    return this._preferredPrimaries.internalValue;
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
}

export class DataNiosDnsZoneRpResultGridSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultGridSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultGridSecondariesOutputReference {
    return new DataNiosDnsZoneRpResultGridSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultMemberSoaMnames {
  /**
  * The grid primary server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#grid_primary DataNiosDnsZoneRp#grid_primary}
  */
  readonly gridPrimary?: string;
  /**
  * Master's SOA MNAME. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#mname DataNiosDnsZoneRp#mname}
  */
  readonly mname?: string;
  /**
  * The primary MS server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#ms_server_primary DataNiosDnsZoneRp#ms_server_primary}
  */
  readonly msServerPrimary?: string;
}

export function dataNiosDnsZoneRpResultMemberSoaMnamesToTerraform(struct?: DataNiosDnsZoneRpResultMemberSoaMnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_primary: cdktf.stringToTerraform(struct!.gridPrimary),
    mname: cdktf.stringToTerraform(struct!.mname),
    ms_server_primary: cdktf.stringToTerraform(struct!.msServerPrimary),
  }
}


export function dataNiosDnsZoneRpResultMemberSoaMnamesToHclTerraform(struct?: DataNiosDnsZoneRpResultMemberSoaMnames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grid_primary: {
      value: cdktf.stringToHclTerraform(struct!.gridPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mname: {
      value: cdktf.stringToHclTerraform(struct!.mname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_server_primary: {
      value: cdktf.stringToHclTerraform(struct!.msServerPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultMemberSoaMnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultMemberSoaMnames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridPrimary = this._gridPrimary;
    }
    if (this._mname !== undefined) {
      hasAnyValues = true;
      internalValueResult.mname = this._mname;
    }
    if (this._msServerPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServerPrimary = this._msServerPrimary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultMemberSoaMnames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gridPrimary = undefined;
      this._mname = undefined;
      this._msServerPrimary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gridPrimary = value.gridPrimary;
      this._mname = value.mname;
      this._msServerPrimary = value.msServerPrimary;
    }
  }

  // dns_mname - computed: true, optional: false, required: false
  public get dnsMname() {
    return this.getStringAttribute('dns_mname');
  }

  // grid_primary - computed: true, optional: true, required: false
  private _gridPrimary?: string; 
  public get gridPrimary() {
    return this.getStringAttribute('grid_primary');
  }
  public set gridPrimary(value: string) {
    this._gridPrimary = value;
  }
  public resetGridPrimary() {
    this._gridPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPrimaryInput() {
    return this._gridPrimary;
  }

  // mname - computed: true, optional: true, required: false
  private _mname?: string; 
  public get mname() {
    return this.getStringAttribute('mname');
  }
  public set mname(value: string) {
    this._mname = value;
  }
  public resetMname() {
    this._mname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnameInput() {
    return this._mname;
  }

  // ms_server_primary - computed: true, optional: true, required: false
  private _msServerPrimary?: string; 
  public get msServerPrimary() {
    return this.getStringAttribute('ms_server_primary');
  }
  public set msServerPrimary(value: string) {
    this._msServerPrimary = value;
  }
  public resetMsServerPrimary() {
    this._msServerPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerPrimaryInput() {
    return this._msServerPrimary;
  }
}

export class DataNiosDnsZoneRpResultMemberSoaMnamesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResultMemberSoaMnames[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultMemberSoaMnamesOutputReference {
    return new DataNiosDnsZoneRpResultMemberSoaMnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResultMemberSoaSerials {
}

export function dataNiosDnsZoneRpResultMemberSoaSerialsToTerraform(struct?: DataNiosDnsZoneRpResultMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneRpResultMemberSoaSerialsToHclTerraform(struct?: DataNiosDnsZoneRpResultMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneRpResultMemberSoaSerialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResultMemberSoaSerials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResultMemberSoaSerials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grid_primary - computed: true, optional: false, required: false
  public get gridPrimary() {
    return this.getStringAttribute('grid_primary');
  }

  // ms_server_primary - computed: true, optional: false, required: false
  public get msServerPrimary() {
    return this.getStringAttribute('ms_server_primary');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getNumberAttribute('serial');
  }
}

export class DataNiosDnsZoneRpResultMemberSoaSerialsList extends cdktf.ComplexList {

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
  public get(index: number): DataNiosDnsZoneRpResultMemberSoaSerialsOutputReference {
    return new DataNiosDnsZoneRpResultMemberSoaSerialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneRpResult {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#comment DataNiosDnsZoneRp#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#disable DataNiosDnsZoneRp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#extattrs DataNiosDnsZoneRp#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external primary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#external_primaries DataNiosDnsZoneRp#external_primaries}
  */
  readonly externalPrimaries?: DataNiosDnsZoneRpResultExternalPrimaries[] | cdktf.IResolvable;
  /**
  * The list of external secondary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#external_secondaries DataNiosDnsZoneRp#external_secondaries}
  */
  readonly externalSecondaries?: DataNiosDnsZoneRpResultExternalSecondaries[] | cdktf.IResolvable;
  /**
  * Rules to map fireeye alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#fireeye_rule_mapping DataNiosDnsZoneRp#fireeye_rule_mapping}
  */
  readonly fireeyeRuleMapping?: DataNiosDnsZoneRpResultFireeyeRuleMapping;
  /**
  * The name of this DNS zone in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#fqdn DataNiosDnsZoneRp#fqdn}
  */
  readonly fqdn: string;
  /**
  * The grid primary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#grid_primary DataNiosDnsZoneRp#grid_primary}
  */
  readonly gridPrimary?: DataNiosDnsZoneRpResultGridPrimary[] | cdktf.IResolvable;
  /**
  * The list with Grid members that are secondary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#grid_secondaries DataNiosDnsZoneRp#grid_secondaries}
  */
  readonly gridSecondaries?: DataNiosDnsZoneRpResultGridSecondaries[] | cdktf.IResolvable;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#locked DataNiosDnsZoneRp#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Determines whether RPZ logging enabled or not at zone level. When this is set to False, the logging is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#log_rpz DataNiosDnsZoneRp#log_rpz}
  */
  readonly logRpz?: boolean | cdktf.IResolvable;
  /**
  * The list of per-member SOA MNAME information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#member_soa_mnames DataNiosDnsZoneRp#member_soa_mnames}
  */
  readonly memberSoaMnames?: DataNiosDnsZoneRpResultMemberSoaMnames[] | cdktf.IResolvable;
  /**
  * The name server group that serves DNS for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#ns_group DataNiosDnsZoneRp#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#prefix DataNiosDnsZoneRp#prefix}
  */
  readonly prefix?: string;
  /**
  * The hostname policy for records under this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#record_name_policy DataNiosDnsZoneRp#record_name_policy}
  */
  readonly recordNamePolicy?: string;
  /**
  * Enables the appliance to ignore RPZ-IP triggers with prefix lengths less than the specified minimum prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_drop_ip_rule_enabled DataNiosDnsZoneRp#rpz_drop_ip_rule_enabled}
  */
  readonly rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable;
  /**
  * The minimum prefix length for IPv4 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv4 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_drop_ip_rule_min_prefix_length_ipv4 DataNiosDnsZoneRp#rpz_drop_ip_rule_min_prefix_length_ipv4}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv4?: number;
  /**
  * The minimum prefix length for IPv6 RPZ-IP triggers. The appliance ignores RPZ-IP triggers with prefix lengths less than the specified minimum IPv6 prefix length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_drop_ip_rule_min_prefix_length_ipv6 DataNiosDnsZoneRp#rpz_drop_ip_rule_min_prefix_length_ipv6}
  */
  readonly rpzDropIpRuleMinPrefixLengthIpv6?: number;
  /**
  * The response policy zone override policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_policy DataNiosDnsZoneRp#rpz_policy}
  */
  readonly rpzPolicy?: string;
  /**
  * The severity of this response policy zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_severity DataNiosDnsZoneRp#rpz_severity}
  */
  readonly rpzSeverity?: string;
  /**
  * The type of rpz zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#rpz_type DataNiosDnsZoneRp#rpz_type}
  */
  readonly rpzType?: string;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#set_soa_serial_number DataNiosDnsZoneRp#set_soa_serial_number}
  */
  readonly setSoaSerialNumber?: boolean | cdktf.IResolvable;
  /**
  * The Time to Live (TTL) value of the SOA record of this zone. This value is the number of seconds that data is cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_default_ttl DataNiosDnsZoneRp#soa_default_ttl}
  */
  readonly soaDefaultTtl?: number;
  /**
  * The SOA email value for this zone. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_email DataNiosDnsZoneRp#soa_email}
  */
  readonly soaEmail?: string;
  /**
  * This setting defines the amount of time, in seconds, after which the secondary server stops giving out answers about the zone because the zone data is too old to be useful. The default is one week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_expire DataNiosDnsZoneRp#soa_expire}
  */
  readonly soaExpire?: number;
  /**
  * The negative Time to Live (TTL) value of the SOA of the zone indicates how long a secondary server can cache data for "Does Not Respond" responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_negative_ttl DataNiosDnsZoneRp#soa_negative_ttl}
  */
  readonly soaNegativeTtl?: number;
  /**
  * This indicates the interval at which a secondary server sends a message to the primary server for a zone to check that its data is current, and retrieve fresh data if it is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_refresh DataNiosDnsZoneRp#soa_refresh}
  */
  readonly soaRefresh?: number;
  /**
  * This indicates how long a secondary server must wait before attempting to recontact the primary server after a connection failure between the two servers occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_retry DataNiosDnsZoneRp#soa_retry}
  */
  readonly soaRetry?: number;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#soa_serial_number DataNiosDnsZoneRp#soa_serial_number}
  */
  readonly soaSerialNumber?: number;
  /**
  * The canonical name of redirect target in substitute policy of response policy zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#substitute_name DataNiosDnsZoneRp#substitute_name}
  */
  readonly substituteName?: string;
  /**
  * This flag controls whether the zone is using an external primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_external_primary DataNiosDnsZoneRp#use_external_primary}
  */
  readonly useExternalPrimary?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_default_ttl , soa_expire, soa_negative_ttl, soa_refresh, soa_retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_grid_zone_timer DataNiosDnsZoneRp#use_grid_zone_timer}
  */
  readonly useGridZoneTimer?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: log_rpz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_log_rpz DataNiosDnsZoneRp#use_log_rpz}
  */
  readonly useLogRpz?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: record_name_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_record_name_policy DataNiosDnsZoneRp#use_record_name_policy}
  */
  readonly useRecordNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: rpz_drop_ip_rule_enabled , rpz_drop_ip_rule_min_prefix_length_ipv4, rpz_drop_ip_rule_min_prefix_length_ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_rpz_drop_ip_rule DataNiosDnsZoneRp#use_rpz_drop_ip_rule}
  */
  readonly useRpzDropIpRule?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#use_soa_email DataNiosDnsZoneRp#use_soa_email}
  */
  readonly useSoaEmail?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#view DataNiosDnsZoneRp#view}
  */
  readonly view?: string;
}

export function dataNiosDnsZoneRpResultToTerraform(struct?: DataNiosDnsZoneRpResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    disable: cdktf.booleanToTerraform(struct!.disable),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    external_primaries: cdktf.listMapper(dataNiosDnsZoneRpResultExternalPrimariesToTerraform, false)(struct!.externalPrimaries),
    external_secondaries: cdktf.listMapper(dataNiosDnsZoneRpResultExternalSecondariesToTerraform, false)(struct!.externalSecondaries),
    fireeye_rule_mapping: dataNiosDnsZoneRpResultFireeyeRuleMappingToTerraform(struct!.fireeyeRuleMapping),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    grid_primary: cdktf.listMapper(dataNiosDnsZoneRpResultGridPrimaryToTerraform, false)(struct!.gridPrimary),
    grid_secondaries: cdktf.listMapper(dataNiosDnsZoneRpResultGridSecondariesToTerraform, false)(struct!.gridSecondaries),
    locked: cdktf.booleanToTerraform(struct!.locked),
    log_rpz: cdktf.booleanToTerraform(struct!.logRpz),
    member_soa_mnames: cdktf.listMapper(dataNiosDnsZoneRpResultMemberSoaMnamesToTerraform, false)(struct!.memberSoaMnames),
    ns_group: cdktf.stringToTerraform(struct!.nsGroup),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    record_name_policy: cdktf.stringToTerraform(struct!.recordNamePolicy),
    rpz_drop_ip_rule_enabled: cdktf.booleanToTerraform(struct!.rpzDropIpRuleEnabled),
    rpz_drop_ip_rule_min_prefix_length_ipv4: cdktf.numberToTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv4),
    rpz_drop_ip_rule_min_prefix_length_ipv6: cdktf.numberToTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv6),
    rpz_policy: cdktf.stringToTerraform(struct!.rpzPolicy),
    rpz_severity: cdktf.stringToTerraform(struct!.rpzSeverity),
    rpz_type: cdktf.stringToTerraform(struct!.rpzType),
    set_soa_serial_number: cdktf.booleanToTerraform(struct!.setSoaSerialNumber),
    soa_default_ttl: cdktf.numberToTerraform(struct!.soaDefaultTtl),
    soa_email: cdktf.stringToTerraform(struct!.soaEmail),
    soa_expire: cdktf.numberToTerraform(struct!.soaExpire),
    soa_negative_ttl: cdktf.numberToTerraform(struct!.soaNegativeTtl),
    soa_refresh: cdktf.numberToTerraform(struct!.soaRefresh),
    soa_retry: cdktf.numberToTerraform(struct!.soaRetry),
    soa_serial_number: cdktf.numberToTerraform(struct!.soaSerialNumber),
    substitute_name: cdktf.stringToTerraform(struct!.substituteName),
    use_external_primary: cdktf.booleanToTerraform(struct!.useExternalPrimary),
    use_grid_zone_timer: cdktf.booleanToTerraform(struct!.useGridZoneTimer),
    use_log_rpz: cdktf.booleanToTerraform(struct!.useLogRpz),
    use_record_name_policy: cdktf.booleanToTerraform(struct!.useRecordNamePolicy),
    use_rpz_drop_ip_rule: cdktf.booleanToTerraform(struct!.useRpzDropIpRule),
    use_soa_email: cdktf.booleanToTerraform(struct!.useSoaEmail),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataNiosDnsZoneRpResultToHclTerraform(struct?: DataNiosDnsZoneRpResult): any {
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
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_primaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultExternalPrimariesToHclTerraform, false)(struct!.externalPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultExternalPrimariesList",
    },
    external_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultExternalSecondariesToHclTerraform, false)(struct!.externalSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultExternalSecondariesList",
    },
    fireeye_rule_mapping: {
      value: dataNiosDnsZoneRpResultFireeyeRuleMappingToHclTerraform(struct!.fireeyeRuleMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsZoneRpResultFireeyeRuleMapping",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grid_primary: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultGridPrimaryToHclTerraform, false)(struct!.gridPrimary),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultGridPrimaryList",
    },
    grid_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultGridSecondariesToHclTerraform, false)(struct!.gridSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultGridSecondariesList",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_rpz: {
      value: cdktf.booleanToHclTerraform(struct!.logRpz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    member_soa_mnames: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneRpResultMemberSoaMnamesToHclTerraform, false)(struct!.memberSoaMnames),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneRpResultMemberSoaMnamesList",
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
    record_name_policy: {
      value: cdktf.stringToHclTerraform(struct!.recordNamePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpz_drop_ip_rule_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rpzDropIpRuleEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rpz_drop_ip_rule_min_prefix_length_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_drop_ip_rule_min_prefix_length_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.rpzDropIpRuleMinPrefixLengthIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpz_policy: {
      value: cdktf.stringToHclTerraform(struct!.rpzPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpz_severity: {
      value: cdktf.stringToHclTerraform(struct!.rpzSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rpz_type: {
      value: cdktf.stringToHclTerraform(struct!.rpzType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_soa_serial_number: {
      value: cdktf.booleanToHclTerraform(struct!.setSoaSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soa_default_ttl: {
      value: cdktf.numberToHclTerraform(struct!.soaDefaultTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_email: {
      value: cdktf.stringToHclTerraform(struct!.soaEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soa_expire: {
      value: cdktf.numberToHclTerraform(struct!.soaExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_negative_ttl: {
      value: cdktf.numberToHclTerraform(struct!.soaNegativeTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_refresh: {
      value: cdktf.numberToHclTerraform(struct!.soaRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_retry: {
      value: cdktf.numberToHclTerraform(struct!.soaRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_serial_number: {
      value: cdktf.numberToHclTerraform(struct!.soaSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    substitute_name: {
      value: cdktf.stringToHclTerraform(struct!.substituteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_external_primary: {
      value: cdktf.booleanToHclTerraform(struct!.useExternalPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_grid_zone_timer: {
      value: cdktf.booleanToHclTerraform(struct!.useGridZoneTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_log_rpz: {
      value: cdktf.booleanToHclTerraform(struct!.useLogRpz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_record_name_policy: {
      value: cdktf.booleanToHclTerraform(struct!.useRecordNamePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_rpz_drop_ip_rule: {
      value: cdktf.booleanToHclTerraform(struct!.useRpzDropIpRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_soa_email: {
      value: cdktf.booleanToHclTerraform(struct!.useSoaEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneRpResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneRpResult | undefined {
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
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._externalPrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPrimaries = this._externalPrimaries?.internalValue;
    }
    if (this._externalSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSecondaries = this._externalSecondaries?.internalValue;
    }
    if (this._fireeyeRuleMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fireeyeRuleMapping = this._fireeyeRuleMapping?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gridPrimary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridPrimary = this._gridPrimary?.internalValue;
    }
    if (this._gridSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridSecondaries = this._gridSecondaries?.internalValue;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._logRpz !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRpz = this._logRpz;
    }
    if (this._memberSoaMnames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberSoaMnames = this._memberSoaMnames?.internalValue;
    }
    if (this._nsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsGroup = this._nsGroup;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._recordNamePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordNamePolicy = this._recordNamePolicy;
    }
    if (this._rpzDropIpRuleEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleEnabled = this._rpzDropIpRuleEnabled;
    }
    if (this._rpzDropIpRuleMinPrefixLengthIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleMinPrefixLengthIpv4 = this._rpzDropIpRuleMinPrefixLengthIpv4;
    }
    if (this._rpzDropIpRuleMinPrefixLengthIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzDropIpRuleMinPrefixLengthIpv6 = this._rpzDropIpRuleMinPrefixLengthIpv6;
    }
    if (this._rpzPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzPolicy = this._rpzPolicy;
    }
    if (this._rpzSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzSeverity = this._rpzSeverity;
    }
    if (this._rpzType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpzType = this._rpzType;
    }
    if (this._setSoaSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.setSoaSerialNumber = this._setSoaSerialNumber;
    }
    if (this._soaDefaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaDefaultTtl = this._soaDefaultTtl;
    }
    if (this._soaEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaEmail = this._soaEmail;
    }
    if (this._soaExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaExpire = this._soaExpire;
    }
    if (this._soaNegativeTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaNegativeTtl = this._soaNegativeTtl;
    }
    if (this._soaRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaRefresh = this._soaRefresh;
    }
    if (this._soaRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaRetry = this._soaRetry;
    }
    if (this._soaSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaSerialNumber = this._soaSerialNumber;
    }
    if (this._substituteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteName = this._substituteName;
    }
    if (this._useExternalPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExternalPrimary = this._useExternalPrimary;
    }
    if (this._useGridZoneTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGridZoneTimer = this._useGridZoneTimer;
    }
    if (this._useLogRpz !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogRpz = this._useLogRpz;
    }
    if (this._useRecordNamePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecordNamePolicy = this._useRecordNamePolicy;
    }
    if (this._useRpzDropIpRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRpzDropIpRule = this._useRpzDropIpRule;
    }
    if (this._useSoaEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSoaEmail = this._useSoaEmail;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneRpResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._disable = undefined;
      this._extattrs = undefined;
      this._externalPrimaries.internalValue = undefined;
      this._externalSecondaries.internalValue = undefined;
      this._fireeyeRuleMapping.internalValue = undefined;
      this._fqdn = undefined;
      this._gridPrimary.internalValue = undefined;
      this._gridSecondaries.internalValue = undefined;
      this._locked = undefined;
      this._logRpz = undefined;
      this._memberSoaMnames.internalValue = undefined;
      this._nsGroup = undefined;
      this._prefix = undefined;
      this._recordNamePolicy = undefined;
      this._rpzDropIpRuleEnabled = undefined;
      this._rpzDropIpRuleMinPrefixLengthIpv4 = undefined;
      this._rpzDropIpRuleMinPrefixLengthIpv6 = undefined;
      this._rpzPolicy = undefined;
      this._rpzSeverity = undefined;
      this._rpzType = undefined;
      this._setSoaSerialNumber = undefined;
      this._soaDefaultTtl = undefined;
      this._soaEmail = undefined;
      this._soaExpire = undefined;
      this._soaNegativeTtl = undefined;
      this._soaRefresh = undefined;
      this._soaRetry = undefined;
      this._soaSerialNumber = undefined;
      this._substituteName = undefined;
      this._useExternalPrimary = undefined;
      this._useGridZoneTimer = undefined;
      this._useLogRpz = undefined;
      this._useRecordNamePolicy = undefined;
      this._useRpzDropIpRule = undefined;
      this._useSoaEmail = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._disable = value.disable;
      this._extattrs = value.extattrs;
      this._externalPrimaries.internalValue = value.externalPrimaries;
      this._externalSecondaries.internalValue = value.externalSecondaries;
      this._fireeyeRuleMapping.internalValue = value.fireeyeRuleMapping;
      this._fqdn = value.fqdn;
      this._gridPrimary.internalValue = value.gridPrimary;
      this._gridSecondaries.internalValue = value.gridSecondaries;
      this._locked = value.locked;
      this._logRpz = value.logRpz;
      this._memberSoaMnames.internalValue = value.memberSoaMnames;
      this._nsGroup = value.nsGroup;
      this._prefix = value.prefix;
      this._recordNamePolicy = value.recordNamePolicy;
      this._rpzDropIpRuleEnabled = value.rpzDropIpRuleEnabled;
      this._rpzDropIpRuleMinPrefixLengthIpv4 = value.rpzDropIpRuleMinPrefixLengthIpv4;
      this._rpzDropIpRuleMinPrefixLengthIpv6 = value.rpzDropIpRuleMinPrefixLengthIpv6;
      this._rpzPolicy = value.rpzPolicy;
      this._rpzSeverity = value.rpzSeverity;
      this._rpzType = value.rpzType;
      this._setSoaSerialNumber = value.setSoaSerialNumber;
      this._soaDefaultTtl = value.soaDefaultTtl;
      this._soaEmail = value.soaEmail;
      this._soaExpire = value.soaExpire;
      this._soaNegativeTtl = value.soaNegativeTtl;
      this._soaRefresh = value.soaRefresh;
      this._soaRetry = value.soaRetry;
      this._soaSerialNumber = value.soaSerialNumber;
      this._substituteName = value.substituteName;
      this._useExternalPrimary = value.useExternalPrimary;
      this._useGridZoneTimer = value.useGridZoneTimer;
      this._useLogRpz = value.useLogRpz;
      this._useRecordNamePolicy = value.useRecordNamePolicy;
      this._useRpzDropIpRule = value.useRpzDropIpRule;
      this._useSoaEmail = value.useSoaEmail;
      this._view = value.view;
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

  // display_domain - computed: true, optional: false, required: false
  public get displayDomain() {
    return this.getStringAttribute('display_domain');
  }

  // dns_soa_email - computed: true, optional: false, required: false
  public get dnsSoaEmail() {
    return this.getStringAttribute('dns_soa_email');
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

  // external_primaries - computed: true, optional: true, required: false
  private _externalPrimaries = new DataNiosDnsZoneRpResultExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DataNiosDnsZoneRpResultExternalPrimaries[] | cdktf.IResolvable) {
    this._externalPrimaries.internalValue = value;
  }
  public resetExternalPrimaries() {
    this._externalPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPrimariesInput() {
    return this._externalPrimaries.internalValue;
  }

  // external_secondaries - computed: true, optional: true, required: false
  private _externalSecondaries = new DataNiosDnsZoneRpResultExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DataNiosDnsZoneRpResultExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
  }

  // fireeye_rule_mapping - computed: true, optional: true, required: false
  private _fireeyeRuleMapping = new DataNiosDnsZoneRpResultFireeyeRuleMappingOutputReference(this, "fireeye_rule_mapping");
  public get fireeyeRuleMapping() {
    return this._fireeyeRuleMapping;
  }
  public putFireeyeRuleMapping(value: DataNiosDnsZoneRpResultFireeyeRuleMapping) {
    this._fireeyeRuleMapping.internalValue = value;
  }
  public resetFireeyeRuleMapping() {
    this._fireeyeRuleMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireeyeRuleMappingInput() {
    return this._fireeyeRuleMapping.internalValue;
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

  // grid_primary - computed: true, optional: true, required: false
  private _gridPrimary = new DataNiosDnsZoneRpResultGridPrimaryList(this, "grid_primary", false);
  public get gridPrimary() {
    return this._gridPrimary;
  }
  public putGridPrimary(value: DataNiosDnsZoneRpResultGridPrimary[] | cdktf.IResolvable) {
    this._gridPrimary.internalValue = value;
  }
  public resetGridPrimary() {
    this._gridPrimary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPrimaryInput() {
    return this._gridPrimary.internalValue;
  }

  // grid_secondaries - computed: true, optional: true, required: false
  private _gridSecondaries = new DataNiosDnsZoneRpResultGridSecondariesList(this, "grid_secondaries", false);
  public get gridSecondaries() {
    return this._gridSecondaries;
  }
  public putGridSecondaries(value: DataNiosDnsZoneRpResultGridSecondaries[] | cdktf.IResolvable) {
    this._gridSecondaries.internalValue = value;
  }
  public resetGridSecondaries() {
    this._gridSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridSecondariesInput() {
    return this._gridSecondaries.internalValue;
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

  // log_rpz - computed: true, optional: true, required: false
  private _logRpz?: boolean | cdktf.IResolvable; 
  public get logRpz() {
    return this.getBooleanAttribute('log_rpz');
  }
  public set logRpz(value: boolean | cdktf.IResolvable) {
    this._logRpz = value;
  }
  public resetLogRpz() {
    this._logRpz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRpzInput() {
    return this._logRpz;
  }

  // mask_prefix - computed: true, optional: false, required: false
  public get maskPrefix() {
    return this.getStringAttribute('mask_prefix');
  }

  // member_soa_mnames - computed: true, optional: true, required: false
  private _memberSoaMnames = new DataNiosDnsZoneRpResultMemberSoaMnamesList(this, "member_soa_mnames", false);
  public get memberSoaMnames() {
    return this._memberSoaMnames;
  }
  public putMemberSoaMnames(value: DataNiosDnsZoneRpResultMemberSoaMnames[] | cdktf.IResolvable) {
    this._memberSoaMnames.internalValue = value;
  }
  public resetMemberSoaMnames() {
    this._memberSoaMnames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberSoaMnamesInput() {
    return this._memberSoaMnames.internalValue;
  }

  // member_soa_serials - computed: true, optional: false, required: false
  private _memberSoaSerials = new DataNiosDnsZoneRpResultMemberSoaSerialsList(this, "member_soa_serials", false);
  public get memberSoaSerials() {
    return this._memberSoaSerials;
  }

  // network_view - computed: true, optional: false, required: false
  public get networkView() {
    return this.getStringAttribute('network_view');
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

  // primary_type - computed: true, optional: false, required: false
  public get primaryType() {
    return this.getStringAttribute('primary_type');
  }

  // record_name_policy - computed: true, optional: true, required: false
  private _recordNamePolicy?: string; 
  public get recordNamePolicy() {
    return this.getStringAttribute('record_name_policy');
  }
  public set recordNamePolicy(value: string) {
    this._recordNamePolicy = value;
  }
  public resetRecordNamePolicy() {
    this._recordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordNamePolicyInput() {
    return this._recordNamePolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // rpz_drop_ip_rule_enabled - computed: true, optional: true, required: false
  private _rpzDropIpRuleEnabled?: boolean | cdktf.IResolvable; 
  public get rpzDropIpRuleEnabled() {
    return this.getBooleanAttribute('rpz_drop_ip_rule_enabled');
  }
  public set rpzDropIpRuleEnabled(value: boolean | cdktf.IResolvable) {
    this._rpzDropIpRuleEnabled = value;
  }
  public resetRpzDropIpRuleEnabled() {
    this._rpzDropIpRuleEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleEnabledInput() {
    return this._rpzDropIpRuleEnabled;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv4 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv4?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv4() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv4');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv4(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv4() {
    this._rpzDropIpRuleMinPrefixLengthIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv4Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv4;
  }

  // rpz_drop_ip_rule_min_prefix_length_ipv6 - computed: true, optional: true, required: false
  private _rpzDropIpRuleMinPrefixLengthIpv6?: number; 
  public get rpzDropIpRuleMinPrefixLengthIpv6() {
    return this.getNumberAttribute('rpz_drop_ip_rule_min_prefix_length_ipv6');
  }
  public set rpzDropIpRuleMinPrefixLengthIpv6(value: number) {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = value;
  }
  public resetRpzDropIpRuleMinPrefixLengthIpv6() {
    this._rpzDropIpRuleMinPrefixLengthIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzDropIpRuleMinPrefixLengthIpv6Input() {
    return this._rpzDropIpRuleMinPrefixLengthIpv6;
  }

  // rpz_last_updated_time - computed: true, optional: false, required: false
  public get rpzLastUpdatedTime() {
    return this.getNumberAttribute('rpz_last_updated_time');
  }

  // rpz_policy - computed: true, optional: true, required: false
  private _rpzPolicy?: string; 
  public get rpzPolicy() {
    return this.getStringAttribute('rpz_policy');
  }
  public set rpzPolicy(value: string) {
    this._rpzPolicy = value;
  }
  public resetRpzPolicy() {
    this._rpzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzPolicyInput() {
    return this._rpzPolicy;
  }

  // rpz_priority - computed: true, optional: false, required: false
  public get rpzPriority() {
    return this.getNumberAttribute('rpz_priority');
  }

  // rpz_priority_end - computed: true, optional: false, required: false
  public get rpzPriorityEnd() {
    return this.getNumberAttribute('rpz_priority_end');
  }

  // rpz_severity - computed: true, optional: true, required: false
  private _rpzSeverity?: string; 
  public get rpzSeverity() {
    return this.getStringAttribute('rpz_severity');
  }
  public set rpzSeverity(value: string) {
    this._rpzSeverity = value;
  }
  public resetRpzSeverity() {
    this._rpzSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzSeverityInput() {
    return this._rpzSeverity;
  }

  // rpz_type - computed: true, optional: true, required: false
  private _rpzType?: string; 
  public get rpzType() {
    return this.getStringAttribute('rpz_type');
  }
  public set rpzType(value: string) {
    this._rpzType = value;
  }
  public resetRpzType() {
    this._rpzType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpzTypeInput() {
    return this._rpzType;
  }

  // set_soa_serial_number - computed: true, optional: true, required: false
  private _setSoaSerialNumber?: boolean | cdktf.IResolvable; 
  public get setSoaSerialNumber() {
    return this.getBooleanAttribute('set_soa_serial_number');
  }
  public set setSoaSerialNumber(value: boolean | cdktf.IResolvable) {
    this._setSoaSerialNumber = value;
  }
  public resetSetSoaSerialNumber() {
    this._setSoaSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSoaSerialNumberInput() {
    return this._setSoaSerialNumber;
  }

  // soa_default_ttl - computed: true, optional: true, required: false
  private _soaDefaultTtl?: number; 
  public get soaDefaultTtl() {
    return this.getNumberAttribute('soa_default_ttl');
  }
  public set soaDefaultTtl(value: number) {
    this._soaDefaultTtl = value;
  }
  public resetSoaDefaultTtl() {
    this._soaDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaDefaultTtlInput() {
    return this._soaDefaultTtl;
  }

  // soa_email - computed: true, optional: true, required: false
  private _soaEmail?: string; 
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }
  public set soaEmail(value: string) {
    this._soaEmail = value;
  }
  public resetSoaEmail() {
    this._soaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaEmailInput() {
    return this._soaEmail;
  }

  // soa_expire - computed: true, optional: true, required: false
  private _soaExpire?: number; 
  public get soaExpire() {
    return this.getNumberAttribute('soa_expire');
  }
  public set soaExpire(value: number) {
    this._soaExpire = value;
  }
  public resetSoaExpire() {
    this._soaExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaExpireInput() {
    return this._soaExpire;
  }

  // soa_negative_ttl - computed: true, optional: true, required: false
  private _soaNegativeTtl?: number; 
  public get soaNegativeTtl() {
    return this.getNumberAttribute('soa_negative_ttl');
  }
  public set soaNegativeTtl(value: number) {
    this._soaNegativeTtl = value;
  }
  public resetSoaNegativeTtl() {
    this._soaNegativeTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaNegativeTtlInput() {
    return this._soaNegativeTtl;
  }

  // soa_refresh - computed: true, optional: true, required: false
  private _soaRefresh?: number; 
  public get soaRefresh() {
    return this.getNumberAttribute('soa_refresh');
  }
  public set soaRefresh(value: number) {
    this._soaRefresh = value;
  }
  public resetSoaRefresh() {
    this._soaRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRefreshInput() {
    return this._soaRefresh;
  }

  // soa_retry - computed: true, optional: true, required: false
  private _soaRetry?: number; 
  public get soaRetry() {
    return this.getNumberAttribute('soa_retry');
  }
  public set soaRetry(value: number) {
    this._soaRetry = value;
  }
  public resetSoaRetry() {
    this._soaRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaRetryInput() {
    return this._soaRetry;
  }

  // soa_serial_number - computed: true, optional: true, required: false
  private _soaSerialNumber?: number; 
  public get soaSerialNumber() {
    return this.getNumberAttribute('soa_serial_number');
  }
  public set soaSerialNumber(value: number) {
    this._soaSerialNumber = value;
  }
  public resetSoaSerialNumber() {
    this._soaSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaSerialNumberInput() {
    return this._soaSerialNumber;
  }

  // substitute_name - computed: true, optional: true, required: false
  private _substituteName?: string; 
  public get substituteName() {
    return this.getStringAttribute('substitute_name');
  }
  public set substituteName(value: string) {
    this._substituteName = value;
  }
  public resetSubstituteName() {
    this._substituteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteNameInput() {
    return this._substituteName;
  }

  // use_external_primary - computed: true, optional: true, required: false
  private _useExternalPrimary?: boolean | cdktf.IResolvable; 
  public get useExternalPrimary() {
    return this.getBooleanAttribute('use_external_primary');
  }
  public set useExternalPrimary(value: boolean | cdktf.IResolvable) {
    this._useExternalPrimary = value;
  }
  public resetUseExternalPrimary() {
    this._useExternalPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExternalPrimaryInput() {
    return this._useExternalPrimary;
  }

  // use_grid_zone_timer - computed: true, optional: true, required: false
  private _useGridZoneTimer?: boolean | cdktf.IResolvable; 
  public get useGridZoneTimer() {
    return this.getBooleanAttribute('use_grid_zone_timer');
  }
  public set useGridZoneTimer(value: boolean | cdktf.IResolvable) {
    this._useGridZoneTimer = value;
  }
  public resetUseGridZoneTimer() {
    this._useGridZoneTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGridZoneTimerInput() {
    return this._useGridZoneTimer;
  }

  // use_log_rpz - computed: true, optional: true, required: false
  private _useLogRpz?: boolean | cdktf.IResolvable; 
  public get useLogRpz() {
    return this.getBooleanAttribute('use_log_rpz');
  }
  public set useLogRpz(value: boolean | cdktf.IResolvable) {
    this._useLogRpz = value;
  }
  public resetUseLogRpz() {
    this._useLogRpz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogRpzInput() {
    return this._useLogRpz;
  }

  // use_record_name_policy - computed: true, optional: true, required: false
  private _useRecordNamePolicy?: boolean | cdktf.IResolvable; 
  public get useRecordNamePolicy() {
    return this.getBooleanAttribute('use_record_name_policy');
  }
  public set useRecordNamePolicy(value: boolean | cdktf.IResolvable) {
    this._useRecordNamePolicy = value;
  }
  public resetUseRecordNamePolicy() {
    this._useRecordNamePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecordNamePolicyInput() {
    return this._useRecordNamePolicy;
  }

  // use_rpz_drop_ip_rule - computed: true, optional: true, required: false
  private _useRpzDropIpRule?: boolean | cdktf.IResolvable; 
  public get useRpzDropIpRule() {
    return this.getBooleanAttribute('use_rpz_drop_ip_rule');
  }
  public set useRpzDropIpRule(value: boolean | cdktf.IResolvable) {
    this._useRpzDropIpRule = value;
  }
  public resetUseRpzDropIpRule() {
    this._useRpzDropIpRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRpzDropIpRuleInput() {
    return this._useRpzDropIpRule;
  }

  // use_soa_email - computed: true, optional: true, required: false
  private _useSoaEmail?: boolean | cdktf.IResolvable; 
  public get useSoaEmail() {
    return this.getBooleanAttribute('use_soa_email');
  }
  public set useSoaEmail(value: boolean | cdktf.IResolvable) {
    this._useSoaEmail = value;
  }
  public resetUseSoaEmail() {
    this._useSoaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSoaEmailInput() {
    return this._useSoaEmail;
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
}

export class DataNiosDnsZoneRpResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneRpResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneRpResultOutputReference {
    return new DataNiosDnsZoneRpResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp nios_dns_zone_rp}
*/
export class DataNiosDnsZoneRp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_rp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsZoneRp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsZoneRp to import
  * @param importFromId The id of the existing DataNiosDnsZoneRp that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsZoneRp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_rp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_rp nios_dns_zone_rp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsZoneRpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsZoneRpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_rp',
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
  private _result = new DataNiosDnsZoneRpResultList(this, "result", false);
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
