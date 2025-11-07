// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsNsgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#extattrfilters DataNiosDnsNsgroup#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#filters DataNiosDnsNsgroup#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#max_results DataNiosDnsNsgroup#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#paging DataNiosDnsNsgroup#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsNsgroupResultExternalPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#address DataNiosDnsNsgroup#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#stealth DataNiosDnsNsgroup#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key DataNiosDnsNsgroup#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key_alg DataNiosDnsNsgroup#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key_name DataNiosDnsNsgroup#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#use_tsig_key_name DataNiosDnsNsgroup#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupResultExternalPrimariesToTerraform(struct?: DataNiosDnsNsgroupResultExternalPrimaries | cdktf.IResolvable): any {
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


export function dataNiosDnsNsgroupResultExternalPrimariesToHclTerraform(struct?: DataNiosDnsNsgroupResultExternalPrimaries | cdktf.IResolvable): any {
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

export class DataNiosDnsNsgroupResultExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsNsgroupResultExternalPrimaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsNsgroupResultExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResultExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultExternalPrimariesOutputReference {
    return new DataNiosDnsNsgroupResultExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResultExternalSecondaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#address DataNiosDnsNsgroup#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#stealth DataNiosDnsNsgroup#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key DataNiosDnsNsgroup#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key_alg DataNiosDnsNsgroup#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#tsig_key_name DataNiosDnsNsgroup#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#use_tsig_key_name DataNiosDnsNsgroup#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupResultExternalSecondariesToTerraform(struct?: DataNiosDnsNsgroupResultExternalSecondaries | cdktf.IResolvable): any {
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


export function dataNiosDnsNsgroupResultExternalSecondariesToHclTerraform(struct?: DataNiosDnsNsgroupResultExternalSecondaries | cdktf.IResolvable): any {
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

export class DataNiosDnsNsgroupResultExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsNsgroupResultExternalSecondaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsNsgroupResultExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResultExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultExternalSecondariesOutputReference {
    return new DataNiosDnsNsgroupResultExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResultGridPrimaryPreferredPrimaries {
}

export function dataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesToTerraform(struct?: DataNiosDnsNsgroupResultGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesToHclTerraform(struct?: DataNiosDnsNsgroupResultGridPrimaryPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultGridPrimaryPreferredPrimaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupResultGridPrimaryPreferredPrimaries | undefined) {
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

export class DataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesList extends cdktf.ComplexList {

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
  public get(index: number): DataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesOutputReference {
    return new DataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResultGridPrimary {
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#stealth DataNiosDnsNsgroup#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupResultGridPrimaryToTerraform(struct?: DataNiosDnsNsgroupResultGridPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsNsgroupResultGridPrimaryToHclTerraform(struct?: DataNiosDnsNsgroupResultGridPrimary | cdktf.IResolvable): any {
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

export class DataNiosDnsNsgroupResultGridPrimaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultGridPrimary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsNsgroupResultGridPrimary | cdktf.IResolvable | undefined) {
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
  private _preferredPrimaries = new DataNiosDnsNsgroupResultGridPrimaryPreferredPrimariesList(this, "preferred_primaries", false);
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

export class DataNiosDnsNsgroupResultGridPrimaryList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResultGridPrimary[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultGridPrimaryOutputReference {
    return new DataNiosDnsNsgroupResultGridPrimaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#address DataNiosDnsNsgroup#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
}

export function dataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesToTerraform(struct?: DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesToHclTerraform(struct?: DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
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

export class DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesOutputReference {
    return new DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResultGridSecondaries {
  /**
  * This flag represents whether the preferred_primaries field values of this member are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#enable_preferred_primaries DataNiosDnsNsgroup#enable_preferred_primaries}
  */
  readonly enablePreferredPrimaries?: boolean | cdktf.IResolvable;
  /**
  * The flag represents DNS zone transfers if set to False, and ID Grid Replication if set to True. This flag is ignored if the struct is specified as part of a stub zone or if it is set as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#grid_replicate DataNiosDnsNsgroup#grid_replicate}
  */
  readonly gridReplicate?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether the Grid lead secondary server performs zone transfers to non lead secondaries. This flag is ignored if the struct is specified as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#lead DataNiosDnsNsgroup#lead}
  */
  readonly lead?: boolean | cdktf.IResolvable;
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
  /**
  * The primary preference list with Grid member names and\or External Server extserver structs for this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#preferred_primaries DataNiosDnsNsgroup#preferred_primaries}
  */
  readonly preferredPrimaries?: DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#stealth DataNiosDnsNsgroup#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupResultGridSecondariesToTerraform(struct?: DataNiosDnsNsgroupResultGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_preferred_primaries: cdktf.booleanToTerraform(struct!.enablePreferredPrimaries),
    grid_replicate: cdktf.booleanToTerraform(struct!.gridReplicate),
    lead: cdktf.booleanToTerraform(struct!.lead),
    name: cdktf.stringToTerraform(struct!.name),
    preferred_primaries: cdktf.listMapper(dataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesToTerraform, false)(struct!.preferredPrimaries),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsNsgroupResultGridSecondariesToHclTerraform(struct?: DataNiosDnsNsgroupResultGridSecondaries | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesToHclTerraform, false)(struct!.preferredPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesList",
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

export class DataNiosDnsNsgroupResultGridSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResultGridSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsNsgroupResultGridSecondaries | cdktf.IResolvable | undefined) {
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
  private _preferredPrimaries = new DataNiosDnsNsgroupResultGridSecondariesPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
  }
  public putPreferredPrimaries(value: DataNiosDnsNsgroupResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable) {
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

export class DataNiosDnsNsgroupResultGridSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResultGridSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultGridSecondariesOutputReference {
    return new DataNiosDnsNsgroupResultGridSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsNsgroupResult {
  /**
  * Comment for the name server group; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#comment DataNiosDnsNsgroup#comment}
  */
  readonly comment?: string;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#extattrs DataNiosDnsNsgroup#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external primary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#external_primaries DataNiosDnsNsgroup#external_primaries}
  */
  readonly externalPrimaries?: DataNiosDnsNsgroupResultExternalPrimaries[] | cdktf.IResolvable;
  /**
  * The list of external secondary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#external_secondaries DataNiosDnsNsgroup#external_secondaries}
  */
  readonly externalSecondaries?: DataNiosDnsNsgroupResultExternalSecondaries[] | cdktf.IResolvable;
  /**
  * The grid primary servers for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#grid_primary DataNiosDnsNsgroup#grid_primary}
  */
  readonly gridPrimary?: DataNiosDnsNsgroupResultGridPrimary[] | cdktf.IResolvable;
  /**
  * The list with Grid members that are secondary servers for this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#grid_secondaries DataNiosDnsNsgroup#grid_secondaries}
  */
  readonly gridSecondaries?: DataNiosDnsNsgroupResultGridSecondaries[] | cdktf.IResolvable;
  /**
  * Determines if this name server group is the Grid default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#is_grid_default DataNiosDnsNsgroup#is_grid_default}
  */
  readonly isGridDefault?: boolean | cdktf.IResolvable;
  /**
  * Determines if the "multiple DNS primaries" feature is enabled for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#is_multimaster DataNiosDnsNsgroup#is_multimaster}
  */
  readonly isMultimaster?: boolean | cdktf.IResolvable;
  /**
  * The name of this name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#name DataNiosDnsNsgroup#name}
  */
  readonly name: string;
  /**
  * This flag controls whether the group is using an external primary. Note that modification of this field requires passing values for "grid_secondaries" and "external_primaries".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#use_external_primary DataNiosDnsNsgroup#use_external_primary}
  */
  readonly useExternalPrimary?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsNsgroupResultToTerraform(struct?: DataNiosDnsNsgroupResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    external_primaries: cdktf.listMapper(dataNiosDnsNsgroupResultExternalPrimariesToTerraform, false)(struct!.externalPrimaries),
    external_secondaries: cdktf.listMapper(dataNiosDnsNsgroupResultExternalSecondariesToTerraform, false)(struct!.externalSecondaries),
    grid_primary: cdktf.listMapper(dataNiosDnsNsgroupResultGridPrimaryToTerraform, false)(struct!.gridPrimary),
    grid_secondaries: cdktf.listMapper(dataNiosDnsNsgroupResultGridSecondariesToTerraform, false)(struct!.gridSecondaries),
    is_grid_default: cdktf.booleanToTerraform(struct!.isGridDefault),
    is_multimaster: cdktf.booleanToTerraform(struct!.isMultimaster),
    name: cdktf.stringToTerraform(struct!.name),
    use_external_primary: cdktf.booleanToTerraform(struct!.useExternalPrimary),
  }
}


export function dataNiosDnsNsgroupResultToHclTerraform(struct?: DataNiosDnsNsgroupResult): any {
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
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    external_primaries: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupResultExternalPrimariesToHclTerraform, false)(struct!.externalPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupResultExternalPrimariesList",
    },
    external_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupResultExternalSecondariesToHclTerraform, false)(struct!.externalSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupResultExternalSecondariesList",
    },
    grid_primary: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupResultGridPrimaryToHclTerraform, false)(struct!.gridPrimary),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupResultGridPrimaryList",
    },
    grid_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsNsgroupResultGridSecondariesToHclTerraform, false)(struct!.gridSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsNsgroupResultGridSecondariesList",
    },
    is_grid_default: {
      value: cdktf.booleanToHclTerraform(struct!.isGridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_multimaster: {
      value: cdktf.booleanToHclTerraform(struct!.isMultimaster),
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
    use_external_primary: {
      value: cdktf.booleanToHclTerraform(struct!.useExternalPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsNsgroupResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsNsgroupResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
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
    if (this._gridPrimary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridPrimary = this._gridPrimary?.internalValue;
    }
    if (this._gridSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridSecondaries = this._gridSecondaries?.internalValue;
    }
    if (this._isGridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGridDefault = this._isGridDefault;
    }
    if (this._isMultimaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMultimaster = this._isMultimaster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useExternalPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExternalPrimary = this._useExternalPrimary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsNsgroupResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._extattrs = undefined;
      this._externalPrimaries.internalValue = undefined;
      this._externalSecondaries.internalValue = undefined;
      this._gridPrimary.internalValue = undefined;
      this._gridSecondaries.internalValue = undefined;
      this._isGridDefault = undefined;
      this._isMultimaster = undefined;
      this._name = undefined;
      this._useExternalPrimary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._extattrs = value.extattrs;
      this._externalPrimaries.internalValue = value.externalPrimaries;
      this._externalSecondaries.internalValue = value.externalSecondaries;
      this._gridPrimary.internalValue = value.gridPrimary;
      this._gridSecondaries.internalValue = value.gridSecondaries;
      this._isGridDefault = value.isGridDefault;
      this._isMultimaster = value.isMultimaster;
      this._name = value.name;
      this._useExternalPrimary = value.useExternalPrimary;
    }
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
  private _externalPrimaries = new DataNiosDnsNsgroupResultExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DataNiosDnsNsgroupResultExternalPrimaries[] | cdktf.IResolvable) {
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
  private _externalSecondaries = new DataNiosDnsNsgroupResultExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DataNiosDnsNsgroupResultExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
  }

  // grid_primary - computed: true, optional: true, required: false
  private _gridPrimary = new DataNiosDnsNsgroupResultGridPrimaryList(this, "grid_primary", false);
  public get gridPrimary() {
    return this._gridPrimary;
  }
  public putGridPrimary(value: DataNiosDnsNsgroupResultGridPrimary[] | cdktf.IResolvable) {
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
  private _gridSecondaries = new DataNiosDnsNsgroupResultGridSecondariesList(this, "grid_secondaries", false);
  public get gridSecondaries() {
    return this._gridSecondaries;
  }
  public putGridSecondaries(value: DataNiosDnsNsgroupResultGridSecondaries[] | cdktf.IResolvable) {
    this._gridSecondaries.internalValue = value;
  }
  public resetGridSecondaries() {
    this._gridSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridSecondariesInput() {
    return this._gridSecondaries.internalValue;
  }

  // is_grid_default - computed: true, optional: true, required: false
  private _isGridDefault?: boolean | cdktf.IResolvable; 
  public get isGridDefault() {
    return this.getBooleanAttribute('is_grid_default');
  }
  public set isGridDefault(value: boolean | cdktf.IResolvable) {
    this._isGridDefault = value;
  }
  public resetIsGridDefault() {
    this._isGridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGridDefaultInput() {
    return this._isGridDefault;
  }

  // is_multimaster - computed: true, optional: true, required: false
  private _isMultimaster?: boolean | cdktf.IResolvable; 
  public get isMultimaster() {
    return this.getBooleanAttribute('is_multimaster');
  }
  public set isMultimaster(value: boolean | cdktf.IResolvable) {
    this._isMultimaster = value;
  }
  public resetIsMultimaster() {
    this._isMultimaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMultimasterInput() {
    return this._isMultimaster;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
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
}

export class DataNiosDnsNsgroupResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsNsgroupResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsNsgroupResultOutputReference {
    return new DataNiosDnsNsgroupResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup nios_dns_nsgroup}
*/
export class DataNiosDnsNsgroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_nsgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsNsgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsNsgroup to import
  * @param importFromId The id of the existing DataNiosDnsNsgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsNsgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_nsgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/dns_nsgroup nios_dns_nsgroup} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsNsgroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsNsgroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_nsgroup',
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
  private _result = new DataNiosDnsNsgroupResultList(this, "result", false);
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
