// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDnsZoneAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#extattrfilters DataNiosDnsZoneAuth#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#filters DataNiosDnsZoneAuth#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#max_results DataNiosDnsZoneAuth#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#paging DataNiosDnsZoneAuth#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDnsZoneAuthResultAllowActiveDir {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
}

export function dataNiosDnsZoneAuthResultAllowActiveDirToTerraform(struct?: DataNiosDnsZoneAuthResultAllowActiveDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDnsZoneAuthResultAllowActiveDirToHclTerraform(struct?: DataNiosDnsZoneAuthResultAllowActiveDir | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultAllowActiveDirOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultAllowActiveDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultAllowActiveDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDnsZoneAuthResultAllowActiveDirList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultAllowActiveDir[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultAllowActiveDirOutputReference {
    return new DataNiosDnsZoneAuthResultAllowActiveDirOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultAllowQuery {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ref DataNiosDnsZoneAuth#ref}
  */
  readonly ref?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#struct DataNiosDnsZoneAuth#struct}
  */
  readonly struct?: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. If 2.x TSIG compatibility is used, this is set to 'tsig_xfer' on retrieval, and ignored on insert or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultAllowQueryToTerraform(struct?: DataNiosDnsZoneAuthResultAllowQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneAuthResultAllowQueryToHclTerraform(struct?: DataNiosDnsZoneAuthResultAllowQuery | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataNiosDnsZoneAuthResultAllowQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultAllowQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
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

  public set internalValue(value: DataNiosDnsZoneAuthResultAllowQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
      this._struct = undefined;
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
      this._permission = value.permission;
      this._ref = value.ref;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
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

export class DataNiosDnsZoneAuthResultAllowQueryList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultAllowQuery[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultAllowQueryOutputReference {
    return new DataNiosDnsZoneAuthResultAllowQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultAllowTransfer {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ref DataNiosDnsZoneAuth#ref}
  */
  readonly ref?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#struct DataNiosDnsZoneAuth#struct}
  */
  readonly struct?: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultAllowTransferToTerraform(struct?: DataNiosDnsZoneAuthResultAllowTransfer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneAuthResultAllowTransferToHclTerraform(struct?: DataNiosDnsZoneAuthResultAllowTransfer | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataNiosDnsZoneAuthResultAllowTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultAllowTransfer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
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

  public set internalValue(value: DataNiosDnsZoneAuthResultAllowTransfer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
      this._struct = undefined;
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
      this._permission = value.permission;
      this._ref = value.ref;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
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

export class DataNiosDnsZoneAuthResultAllowTransferList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultAllowTransfer[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultAllowTransferOutputReference {
    return new DataNiosDnsZoneAuthResultAllowTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultAllowUpdate {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
  /**
  * The reference to the Named ACL object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ref DataNiosDnsZoneAuth#ref}
  */
  readonly ref?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#struct DataNiosDnsZoneAuth#struct}
  */
  readonly struct?: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. If 2.x TSIG compatibility is used, this is set to 'tsig_xfer' on retrieval, and ignored on insert or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultAllowUpdateToTerraform(struct?: DataNiosDnsZoneAuthResultAllowUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    ref: cdktf.stringToTerraform(struct!.ref),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneAuthResultAllowUpdateToHclTerraform(struct?: DataNiosDnsZoneAuthResultAllowUpdate | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataNiosDnsZoneAuthResultAllowUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultAllowUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
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

  public set internalValue(value: DataNiosDnsZoneAuthResultAllowUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._ref = undefined;
      this._struct = undefined;
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
      this._permission = value.permission;
      this._ref = value.ref;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // ref - computed: true, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // struct - computed: true, optional: true, required: false
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  public resetStruct() {
    this._struct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
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

export class DataNiosDnsZoneAuthResultAllowUpdateList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultAllowUpdate[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultAllowUpdateOutputReference {
    return new DataNiosDnsZoneAuthResultAllowUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultAwsRte53ZoneInfo {
}

export function dataNiosDnsZoneAuthResultAwsRte53ZoneInfoToTerraform(struct?: DataNiosDnsZoneAuthResultAwsRte53ZoneInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneAuthResultAwsRte53ZoneInfoToHclTerraform(struct?: DataNiosDnsZoneAuthResultAwsRte53ZoneInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneAuthResultAwsRte53ZoneInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultAwsRte53ZoneInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultAwsRte53ZoneInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_vpcs - computed: true, optional: false, required: false
  public get associatedVpcs() {
    return this.getListAttribute('associated_vpcs');
  }

  // callerreference - computed: true, optional: false, required: false
  public get callerreference() {
    return this.getStringAttribute('callerreference');
  }

  // delegation_set_id - computed: true, optional: false, required: false
  public get delegationSetId() {
    return this.getStringAttribute('delegation_set_id');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // record_set_count - computed: true, optional: false, required: false
  public get recordSetCount() {
    return this.getNumberAttribute('record_set_count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataNiosDnsZoneAuthResultCloudInfoDelegatedMember {
}

export function dataNiosDnsZoneAuthResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosDnsZoneAuthResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneAuthResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosDnsZoneAuthResultCloudInfoDelegatedMember): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneAuthResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultCloudInfoDelegatedMember | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultCloudInfoDelegatedMember | undefined) {
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
export interface DataNiosDnsZoneAuthResultCloudInfo {
}

export function dataNiosDnsZoneAuthResultCloudInfoToTerraform(struct?: DataNiosDnsZoneAuthResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneAuthResultCloudInfoToHclTerraform(struct?: DataNiosDnsZoneAuthResultCloudInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneAuthResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultCloudInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultCloudInfo | undefined) {
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
  private _delegatedMember = new DataNiosDnsZoneAuthResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
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
export interface DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms {
  /**
  * The signing key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#algorithm DataNiosDnsZoneAuth#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The signing key size, in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#size DataNiosDnsZoneAuth#size}
  */
  readonly size?: number;
}

export function dataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsToTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsToHclTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._size = value.size;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsOutputReference {
    return new DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms {
  /**
  * The signing key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#algorithm DataNiosDnsZoneAuth#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The signing key size, in bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#size DataNiosDnsZoneAuth#size}
  */
  readonly size?: number;
}

export function dataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsToTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsToHclTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._size = value.size;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsOutputReference {
    return new DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultDnssecKeyParams {
  /**
  * If set to True, automatic rollovers for the signing key is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_ksk_auto_rollover DataNiosDnsZoneAuth#enable_ksk_auto_rollover}
  */
  readonly enableKskAutoRollover?: boolean | cdktf.IResolvable;
  /**
  * A list of Key Signing Key Algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ksk_algorithms DataNiosDnsZoneAuth#ksk_algorithms}
  */
  readonly kskAlgorithms?: DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms[] | cdktf.IResolvable;
  /**
  * Enable email notifications for KSK related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ksk_email_notification_enabled DataNiosDnsZoneAuth#ksk_email_notification_enabled}
  */
  readonly kskEmailNotificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Key Signing Key rollover interval, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ksk_rollover DataNiosDnsZoneAuth#ksk_rollover}
  */
  readonly kskRollover?: number;
  /**
  * This field controls events for which users will be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ksk_rollover_notification_config DataNiosDnsZoneAuth#ksk_rollover_notification_config}
  */
  readonly kskRolloverNotificationConfig?: string;
  /**
  * Enable SNMP notifications for KSK related events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ksk_snmp_notification_enabled DataNiosDnsZoneAuth#ksk_snmp_notification_enabled}
  */
  readonly kskSnmpNotificationEnabled?: boolean | cdktf.IResolvable;
  /**
  * NSEC (next secure) types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#next_secure_type DataNiosDnsZoneAuth#next_secure_type}
  */
  readonly nextSecureType?: string;
  /**
  * The number of iterations used for hashing NSEC3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#nsec3_iterations DataNiosDnsZoneAuth#nsec3_iterations}
  */
  readonly nsec3Iterations?: number;
  /**
  * The maximum length for NSEC3 salts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#nsec3_salt_max_length DataNiosDnsZoneAuth#nsec3_salt_max_length}
  */
  readonly nsec3SaltMaxLength?: number;
  /**
  * The minimum length for NSEC3 salts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#nsec3_salt_min_length DataNiosDnsZoneAuth#nsec3_salt_min_length}
  */
  readonly nsec3SaltMinLength?: number;
  /**
  * Signature expiration time, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#signature_expiration DataNiosDnsZoneAuth#signature_expiration}
  */
  readonly signatureExpiration?: number;
  /**
  * A list of Zone Signing Key Algorithms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#zsk_algorithms DataNiosDnsZoneAuth#zsk_algorithms}
  */
  readonly zskAlgorithms?: DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms[] | cdktf.IResolvable;
  /**
  * Zone Signing Key rollover interval, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#zsk_rollover DataNiosDnsZoneAuth#zsk_rollover}
  */
  readonly zskRollover?: number;
  /**
  * Zone Signing Key rollover mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#zsk_rollover_mechanism DataNiosDnsZoneAuth#zsk_rollover_mechanism}
  */
  readonly zskRolloverMechanism?: string;
}

export function dataNiosDnsZoneAuthResultDnssecKeyParamsToTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ksk_auto_rollover: cdktf.booleanToTerraform(struct!.enableKskAutoRollover),
    ksk_algorithms: cdktf.listMapper(dataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsToTerraform, false)(struct!.kskAlgorithms),
    ksk_email_notification_enabled: cdktf.booleanToTerraform(struct!.kskEmailNotificationEnabled),
    ksk_rollover: cdktf.numberToTerraform(struct!.kskRollover),
    ksk_rollover_notification_config: cdktf.stringToTerraform(struct!.kskRolloverNotificationConfig),
    ksk_snmp_notification_enabled: cdktf.booleanToTerraform(struct!.kskSnmpNotificationEnabled),
    next_secure_type: cdktf.stringToTerraform(struct!.nextSecureType),
    nsec3_iterations: cdktf.numberToTerraform(struct!.nsec3Iterations),
    nsec3_salt_max_length: cdktf.numberToTerraform(struct!.nsec3SaltMaxLength),
    nsec3_salt_min_length: cdktf.numberToTerraform(struct!.nsec3SaltMinLength),
    signature_expiration: cdktf.numberToTerraform(struct!.signatureExpiration),
    zsk_algorithms: cdktf.listMapper(dataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsToTerraform, false)(struct!.zskAlgorithms),
    zsk_rollover: cdktf.numberToTerraform(struct!.zskRollover),
    zsk_rollover_mechanism: cdktf.stringToTerraform(struct!.zskRolloverMechanism),
  }
}


export function dataNiosDnsZoneAuthResultDnssecKeyParamsToHclTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_ksk_auto_rollover: {
      value: cdktf.booleanToHclTerraform(struct!.enableKskAutoRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ksk_algorithms: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsToHclTerraform, false)(struct!.kskAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsList",
    },
    ksk_email_notification_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kskEmailNotificationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ksk_rollover: {
      value: cdktf.numberToHclTerraform(struct!.kskRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_rollover_notification_config: {
      value: cdktf.stringToHclTerraform(struct!.kskRolloverNotificationConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ksk_snmp_notification_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kskSnmpNotificationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    next_secure_type: {
      value: cdktf.stringToHclTerraform(struct!.nextSecureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsec3_iterations: {
      value: cdktf.numberToHclTerraform(struct!.nsec3Iterations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3_salt_max_length: {
      value: cdktf.numberToHclTerraform(struct!.nsec3SaltMaxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3_salt_min_length: {
      value: cdktf.numberToHclTerraform(struct!.nsec3SaltMinLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature_expiration: {
      value: cdktf.numberToHclTerraform(struct!.signatureExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_algorithms: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsToHclTerraform, false)(struct!.zskAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsList",
    },
    zsk_rollover: {
      value: cdktf.numberToHclTerraform(struct!.zskRollover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_rollover_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.zskRolloverMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultDnssecKeyParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultDnssecKeyParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableKskAutoRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableKskAutoRollover = this._enableKskAutoRollover;
    }
    if (this._kskAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskAlgorithms = this._kskAlgorithms?.internalValue;
    }
    if (this._kskEmailNotificationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskEmailNotificationEnabled = this._kskEmailNotificationEnabled;
    }
    if (this._kskRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskRollover = this._kskRollover;
    }
    if (this._kskRolloverNotificationConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskRolloverNotificationConfig = this._kskRolloverNotificationConfig;
    }
    if (this._kskSnmpNotificationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskSnmpNotificationEnabled = this._kskSnmpNotificationEnabled;
    }
    if (this._nextSecureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextSecureType = this._nextSecureType;
    }
    if (this._nsec3Iterations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3Iterations = this._nsec3Iterations;
    }
    if (this._nsec3SaltMaxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3SaltMaxLength = this._nsec3SaltMaxLength;
    }
    if (this._nsec3SaltMinLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3SaltMinLength = this._nsec3SaltMinLength;
    }
    if (this._signatureExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureExpiration = this._signatureExpiration;
    }
    if (this._zskAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskAlgorithms = this._zskAlgorithms?.internalValue;
    }
    if (this._zskRollover !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskRollover = this._zskRollover;
    }
    if (this._zskRolloverMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskRolloverMechanism = this._zskRolloverMechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultDnssecKeyParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableKskAutoRollover = undefined;
      this._kskAlgorithms.internalValue = undefined;
      this._kskEmailNotificationEnabled = undefined;
      this._kskRollover = undefined;
      this._kskRolloverNotificationConfig = undefined;
      this._kskSnmpNotificationEnabled = undefined;
      this._nextSecureType = undefined;
      this._nsec3Iterations = undefined;
      this._nsec3SaltMaxLength = undefined;
      this._nsec3SaltMinLength = undefined;
      this._signatureExpiration = undefined;
      this._zskAlgorithms.internalValue = undefined;
      this._zskRollover = undefined;
      this._zskRolloverMechanism = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableKskAutoRollover = value.enableKskAutoRollover;
      this._kskAlgorithms.internalValue = value.kskAlgorithms;
      this._kskEmailNotificationEnabled = value.kskEmailNotificationEnabled;
      this._kskRollover = value.kskRollover;
      this._kskRolloverNotificationConfig = value.kskRolloverNotificationConfig;
      this._kskSnmpNotificationEnabled = value.kskSnmpNotificationEnabled;
      this._nextSecureType = value.nextSecureType;
      this._nsec3Iterations = value.nsec3Iterations;
      this._nsec3SaltMaxLength = value.nsec3SaltMaxLength;
      this._nsec3SaltMinLength = value.nsec3SaltMinLength;
      this._signatureExpiration = value.signatureExpiration;
      this._zskAlgorithms.internalValue = value.zskAlgorithms;
      this._zskRollover = value.zskRollover;
      this._zskRolloverMechanism = value.zskRolloverMechanism;
    }
  }

  // enable_ksk_auto_rollover - computed: true, optional: true, required: false
  private _enableKskAutoRollover?: boolean | cdktf.IResolvable; 
  public get enableKskAutoRollover() {
    return this.getBooleanAttribute('enable_ksk_auto_rollover');
  }
  public set enableKskAutoRollover(value: boolean | cdktf.IResolvable) {
    this._enableKskAutoRollover = value;
  }
  public resetEnableKskAutoRollover() {
    this._enableKskAutoRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKskAutoRolloverInput() {
    return this._enableKskAutoRollover;
  }

  // ksk_algorithm - computed: true, optional: false, required: false
  public get kskAlgorithm() {
    return this.getStringAttribute('ksk_algorithm');
  }

  // ksk_algorithms - computed: true, optional: true, required: false
  private _kskAlgorithms = new DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithmsList(this, "ksk_algorithms", false);
  public get kskAlgorithms() {
    return this._kskAlgorithms;
  }
  public putKskAlgorithms(value: DataNiosDnsZoneAuthResultDnssecKeyParamsKskAlgorithms[] | cdktf.IResolvable) {
    this._kskAlgorithms.internalValue = value;
  }
  public resetKskAlgorithms() {
    this._kskAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskAlgorithmsInput() {
    return this._kskAlgorithms.internalValue;
  }

  // ksk_email_notification_enabled - computed: true, optional: true, required: false
  private _kskEmailNotificationEnabled?: boolean | cdktf.IResolvable; 
  public get kskEmailNotificationEnabled() {
    return this.getBooleanAttribute('ksk_email_notification_enabled');
  }
  public set kskEmailNotificationEnabled(value: boolean | cdktf.IResolvable) {
    this._kskEmailNotificationEnabled = value;
  }
  public resetKskEmailNotificationEnabled() {
    this._kskEmailNotificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskEmailNotificationEnabledInput() {
    return this._kskEmailNotificationEnabled;
  }

  // ksk_rollover - computed: true, optional: true, required: false
  private _kskRollover?: number; 
  public get kskRollover() {
    return this.getNumberAttribute('ksk_rollover');
  }
  public set kskRollover(value: number) {
    this._kskRollover = value;
  }
  public resetKskRollover() {
    this._kskRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskRolloverInput() {
    return this._kskRollover;
  }

  // ksk_rollover_notification_config - computed: true, optional: true, required: false
  private _kskRolloverNotificationConfig?: string; 
  public get kskRolloverNotificationConfig() {
    return this.getStringAttribute('ksk_rollover_notification_config');
  }
  public set kskRolloverNotificationConfig(value: string) {
    this._kskRolloverNotificationConfig = value;
  }
  public resetKskRolloverNotificationConfig() {
    this._kskRolloverNotificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskRolloverNotificationConfigInput() {
    return this._kskRolloverNotificationConfig;
  }

  // ksk_size - computed: true, optional: false, required: false
  public get kskSize() {
    return this.getNumberAttribute('ksk_size');
  }

  // ksk_snmp_notification_enabled - computed: true, optional: true, required: false
  private _kskSnmpNotificationEnabled?: boolean | cdktf.IResolvable; 
  public get kskSnmpNotificationEnabled() {
    return this.getBooleanAttribute('ksk_snmp_notification_enabled');
  }
  public set kskSnmpNotificationEnabled(value: boolean | cdktf.IResolvable) {
    this._kskSnmpNotificationEnabled = value;
  }
  public resetKskSnmpNotificationEnabled() {
    this._kskSnmpNotificationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskSnmpNotificationEnabledInput() {
    return this._kskSnmpNotificationEnabled;
  }

  // next_secure_type - computed: true, optional: true, required: false
  private _nextSecureType?: string; 
  public get nextSecureType() {
    return this.getStringAttribute('next_secure_type');
  }
  public set nextSecureType(value: string) {
    this._nextSecureType = value;
  }
  public resetNextSecureType() {
    this._nextSecureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextSecureTypeInput() {
    return this._nextSecureType;
  }

  // nsec3_iterations - computed: true, optional: true, required: false
  private _nsec3Iterations?: number; 
  public get nsec3Iterations() {
    return this.getNumberAttribute('nsec3_iterations');
  }
  public set nsec3Iterations(value: number) {
    this._nsec3Iterations = value;
  }
  public resetNsec3Iterations() {
    this._nsec3Iterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3IterationsInput() {
    return this._nsec3Iterations;
  }

  // nsec3_salt_max_length - computed: true, optional: true, required: false
  private _nsec3SaltMaxLength?: number; 
  public get nsec3SaltMaxLength() {
    return this.getNumberAttribute('nsec3_salt_max_length');
  }
  public set nsec3SaltMaxLength(value: number) {
    this._nsec3SaltMaxLength = value;
  }
  public resetNsec3SaltMaxLength() {
    this._nsec3SaltMaxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3SaltMaxLengthInput() {
    return this._nsec3SaltMaxLength;
  }

  // nsec3_salt_min_length - computed: true, optional: true, required: false
  private _nsec3SaltMinLength?: number; 
  public get nsec3SaltMinLength() {
    return this.getNumberAttribute('nsec3_salt_min_length');
  }
  public set nsec3SaltMinLength(value: number) {
    this._nsec3SaltMinLength = value;
  }
  public resetNsec3SaltMinLength() {
    this._nsec3SaltMinLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3SaltMinLengthInput() {
    return this._nsec3SaltMinLength;
  }

  // signature_expiration - computed: true, optional: true, required: false
  private _signatureExpiration?: number; 
  public get signatureExpiration() {
    return this.getNumberAttribute('signature_expiration');
  }
  public set signatureExpiration(value: number) {
    this._signatureExpiration = value;
  }
  public resetSignatureExpiration() {
    this._signatureExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureExpirationInput() {
    return this._signatureExpiration;
  }

  // zsk_algorithm - computed: true, optional: false, required: false
  public get zskAlgorithm() {
    return this.getStringAttribute('zsk_algorithm');
  }

  // zsk_algorithms - computed: true, optional: true, required: false
  private _zskAlgorithms = new DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithmsList(this, "zsk_algorithms", false);
  public get zskAlgorithms() {
    return this._zskAlgorithms;
  }
  public putZskAlgorithms(value: DataNiosDnsZoneAuthResultDnssecKeyParamsZskAlgorithms[] | cdktf.IResolvable) {
    this._zskAlgorithms.internalValue = value;
  }
  public resetZskAlgorithms() {
    this._zskAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskAlgorithmsInput() {
    return this._zskAlgorithms.internalValue;
  }

  // zsk_rollover - computed: true, optional: true, required: false
  private _zskRollover?: number; 
  public get zskRollover() {
    return this.getNumberAttribute('zsk_rollover');
  }
  public set zskRollover(value: number) {
    this._zskRollover = value;
  }
  public resetZskRollover() {
    this._zskRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskRolloverInput() {
    return this._zskRollover;
  }

  // zsk_rollover_mechanism - computed: true, optional: true, required: false
  private _zskRolloverMechanism?: string; 
  public get zskRolloverMechanism() {
    return this.getStringAttribute('zsk_rollover_mechanism');
  }
  public set zskRolloverMechanism(value: string) {
    this._zskRolloverMechanism = value;
  }
  public resetZskRolloverMechanism() {
    this._zskRolloverMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskRolloverMechanismInput() {
    return this._zskRolloverMechanism;
  }

  // zsk_size - computed: true, optional: false, required: false
  public get zskSize() {
    return this.getNumberAttribute('zsk_size');
  }
}
export interface DataNiosDnsZoneAuthResultDnssecKeys {
  /**
  * The tag of the key for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tag DataNiosDnsZoneAuth#tag}
  */
  readonly tag: number;
}

export function dataNiosDnsZoneAuthResultDnssecKeysToTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function dataNiosDnsZoneAuthResultDnssecKeysToHclTerraform(struct?: DataNiosDnsZoneAuthResultDnssecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultDnssecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultDnssecKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultDnssecKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // next_event_date - computed: true, optional: false, required: false
  public get nextEventDate() {
    return this.getNumberAttribute('next_event_date');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: false, required: true
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataNiosDnsZoneAuthResultDnssecKeysList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultDnssecKeys[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultDnssecKeysOutputReference {
    return new DataNiosDnsZoneAuthResultDnssecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultExternalPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultExternalPrimariesToTerraform(struct?: DataNiosDnsZoneAuthResultExternalPrimaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneAuthResultExternalPrimariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultExternalPrimaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneAuthResultExternalPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultExternalPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultExternalPrimaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneAuthResultExternalPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultExternalPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultExternalPrimariesOutputReference {
    return new DataNiosDnsZoneAuthResultExternalPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultExternalSecondaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultExternalSecondariesToTerraform(struct?: DataNiosDnsZoneAuthResultExternalSecondaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneAuthResultExternalSecondariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultExternalSecondaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneAuthResultExternalSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultExternalSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultExternalSecondaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneAuthResultExternalSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultExternalSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultExternalSecondariesOutputReference {
    return new DataNiosDnsZoneAuthResultExternalSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesToTerraform(struct?: DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries): any {
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


export function dataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries): any {
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

export class DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._name = undefined;
      this._stealth = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
      this._useTsigKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

export class DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesOutputReference {
    return new DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultGridPrimary {
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultGridPrimaryToTerraform(struct?: DataNiosDnsZoneAuthResultGridPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneAuthResultGridPrimaryToHclTerraform(struct?: DataNiosDnsZoneAuthResultGridPrimary | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneAuthResultGridPrimaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultGridPrimary | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultGridPrimary | cdktf.IResolvable | undefined) {
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
  private _preferredPrimaries = new DataNiosDnsZoneAuthResultGridPrimaryPreferredPrimariesList(this, "preferred_primaries", false);
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

export class DataNiosDnsZoneAuthResultGridPrimaryList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultGridPrimary[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultGridPrimaryOutputReference {
    return new DataNiosDnsZoneAuthResultGridPrimaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
  /**
  * A generated TSIG key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The TSIG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesToTerraform(struct?: DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesOutputReference {
    return new DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultGridSecondaries {
  /**
  * This flag represents whether the preferred_primaries field values of this member are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_preferred_primaries DataNiosDnsZoneAuth#enable_preferred_primaries}
  */
  readonly enablePreferredPrimaries?: boolean | cdktf.IResolvable;
  /**
  * The flag represents DNS zone transfers if set to False, and ID Grid Replication if set to True. This flag is ignored if the struct is specified as part of a stub zone or if it is set as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#grid_replicate DataNiosDnsZoneAuth#grid_replicate}
  */
  readonly gridReplicate?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether the Grid lead secondary server performs zone transfers to non lead secondaries. This flag is ignored if the struct is specified as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#lead DataNiosDnsZoneAuth#lead}
  */
  readonly lead?: boolean | cdktf.IResolvable;
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#name DataNiosDnsZoneAuth#name}
  */
  readonly name: string;
  /**
  * The primary preference list with Grid member names and\or External Server extserver structs for this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#preferred_primaries DataNiosDnsZoneAuth#preferred_primaries}
  */
  readonly preferredPrimaries?: DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable;
  /**
  * This flag governs whether the specified Grid member is in stealth mode or not. If set to True, the member is in stealth mode. This flag is ignored if the struct is specified as part of a stub zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultGridSecondariesToTerraform(struct?: DataNiosDnsZoneAuthResultGridSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_preferred_primaries: cdktf.booleanToTerraform(struct!.enablePreferredPrimaries),
    grid_replicate: cdktf.booleanToTerraform(struct!.gridReplicate),
    lead: cdktf.booleanToTerraform(struct!.lead),
    name: cdktf.stringToTerraform(struct!.name),
    preferred_primaries: cdktf.listMapper(dataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesToTerraform, false)(struct!.preferredPrimaries),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneAuthResultGridSecondariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultGridSecondaries | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesToHclTerraform, false)(struct!.preferredPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesList",
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

export class DataNiosDnsZoneAuthResultGridSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultGridSecondaries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultGridSecondaries | cdktf.IResolvable | undefined) {
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
  private _preferredPrimaries = new DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
  }
  public putPreferredPrimaries(value: DataNiosDnsZoneAuthResultGridSecondariesPreferredPrimaries[] | cdktf.IResolvable) {
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

export class DataNiosDnsZoneAuthResultGridSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultGridSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultGridSecondariesOutputReference {
    return new DataNiosDnsZoneAuthResultGridSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultLastQueriedAcl {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
}

export function dataNiosDnsZoneAuthResultLastQueriedAclToTerraform(struct?: DataNiosDnsZoneAuthResultLastQueriedAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDnsZoneAuthResultLastQueriedAclToHclTerraform(struct?: DataNiosDnsZoneAuthResultLastQueriedAcl | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultLastQueriedAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultLastQueriedAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultLastQueriedAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDnsZoneAuthResultLastQueriedAclList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultLastQueriedAcl[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultLastQueriedAclOutputReference {
    return new DataNiosDnsZoneAuthResultLastQueriedAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMemberSoaMnames {
  /**
  * The grid primary server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#grid_primary DataNiosDnsZoneAuth#grid_primary}
  */
  readonly gridPrimary?: string;
  /**
  * Master's SOA MNAME. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#mname DataNiosDnsZoneAuth#mname}
  */
  readonly mname?: string;
  /**
  * The primary MS server for the zone. Only one of "grid_primary" or "ms_server_primary" should be set when modifying or creating the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_server_primary DataNiosDnsZoneAuth#ms_server_primary}
  */
  readonly msServerPrimary?: string;
}

export function dataNiosDnsZoneAuthResultMemberSoaMnamesToTerraform(struct?: DataNiosDnsZoneAuthResultMemberSoaMnames | cdktf.IResolvable): any {
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


export function dataNiosDnsZoneAuthResultMemberSoaMnamesToHclTerraform(struct?: DataNiosDnsZoneAuthResultMemberSoaMnames | cdktf.IResolvable): any {
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

export class DataNiosDnsZoneAuthResultMemberSoaMnamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMemberSoaMnames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDnsZoneAuthResultMemberSoaMnames | cdktf.IResolvable | undefined) {
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

export class DataNiosDnsZoneAuthResultMemberSoaMnamesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultMemberSoaMnames[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultMemberSoaMnamesOutputReference {
    return new DataNiosDnsZoneAuthResultMemberSoaMnamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMemberSoaSerials {
}

export function dataNiosDnsZoneAuthResultMemberSoaSerialsToTerraform(struct?: DataNiosDnsZoneAuthResultMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDnsZoneAuthResultMemberSoaSerialsToHclTerraform(struct?: DataNiosDnsZoneAuthResultMemberSoaSerials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDnsZoneAuthResultMemberSoaSerialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMemberSoaSerials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultMemberSoaSerials | undefined) {
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

export class DataNiosDnsZoneAuthResultMemberSoaSerialsList extends cdktf.ComplexList {

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
  public get(index: number): DataNiosDnsZoneAuthResultMemberSoaSerialsOutputReference {
    return new DataNiosDnsZoneAuthResultMemberSoaSerialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMsAllowTransfer {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
}

export function dataNiosDnsZoneAuthResultMsAllowTransferToTerraform(struct?: DataNiosDnsZoneAuthResultMsAllowTransfer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDnsZoneAuthResultMsAllowTransferToHclTerraform(struct?: DataNiosDnsZoneAuthResultMsAllowTransfer | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultMsAllowTransferOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMsAllowTransfer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultMsAllowTransfer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._permission = value.permission;
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDnsZoneAuthResultMsAllowTransferList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultMsAllowTransfer[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultMsAllowTransferOutputReference {
    return new DataNiosDnsZoneAuthResultMsAllowTransferOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMsDcNsRecordCreation {
  /**
  * The IPv4 address of the domain controller that is allowed to create NS records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * Optional user comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#comment DataNiosDnsZoneAuth#comment}
  */
  readonly comment?: string;
}

export function dataNiosDnsZoneAuthResultMsDcNsRecordCreationToTerraform(struct?: DataNiosDnsZoneAuthResultMsDcNsRecordCreation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function dataNiosDnsZoneAuthResultMsDcNsRecordCreationToHclTerraform(struct?: DataNiosDnsZoneAuthResultMsDcNsRecordCreation | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultMsDcNsRecordCreationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMsDcNsRecordCreation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultMsDcNsRecordCreation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._comment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._comment = value.comment;
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
}

export class DataNiosDnsZoneAuthResultMsDcNsRecordCreationList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultMsDcNsRecordCreation[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultMsDcNsRecordCreationOutputReference {
    return new DataNiosDnsZoneAuthResultMsDcNsRecordCreationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMsPrimaries {
  /**
  * The address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * This flag indicates if this server is a synchronization master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#is_master DataNiosDnsZoneAuth#is_master}
  */
  readonly isMaster?: boolean | cdktf.IResolvable;
  /**
  * This address is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ns_ip DataNiosDnsZoneAuth#ns_ip}
  */
  readonly nsIp: string;
  /**
  * This name is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ns_name DataNiosDnsZoneAuth#ns_name}
  */
  readonly nsName: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultMsPrimariesToTerraform(struct?: DataNiosDnsZoneAuthResultMsPrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    is_master: cdktf.booleanToTerraform(struct!.isMaster),
    ns_ip: cdktf.stringToTerraform(struct!.nsIp),
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneAuthResultMsPrimariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultMsPrimaries | cdktf.IResolvable): any {
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
    is_master: {
      value: cdktf.booleanToHclTerraform(struct!.isMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ns_ip: {
      value: cdktf.stringToHclTerraform(struct!.nsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
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

export class DataNiosDnsZoneAuthResultMsPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMsPrimaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._nsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsIp = this._nsIp;
    }
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultMsPrimaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._isMaster = undefined;
      this._nsIp = undefined;
      this._nsName = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._isMaster = value.isMaster;
      this._nsIp = value.nsIp;
      this._nsName = value.nsName;
      this._stealth = value.stealth;
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

  // is_master - computed: true, optional: true, required: false
  private _isMaster?: boolean | cdktf.IResolvable; 
  public get isMaster() {
    return this.getBooleanAttribute('is_master');
  }
  public set isMaster(value: boolean | cdktf.IResolvable) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
  }

  // ns_ip - computed: true, optional: false, required: true
  private _nsIp?: string; 
  public get nsIp() {
    return this.getStringAttribute('ns_ip');
  }
  public set nsIp(value: string) {
    this._nsIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIpInput() {
    return this._nsIp;
  }

  // ns_name - computed: true, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
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
}

export class DataNiosDnsZoneAuthResultMsPrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultMsPrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultMsPrimariesOutputReference {
    return new DataNiosDnsZoneAuthResultMsPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultMsSecondaries {
  /**
  * The address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address: string;
  /**
  * This flag indicates if this server is a synchronization master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#is_master DataNiosDnsZoneAuth#is_master}
  */
  readonly isMaster?: boolean | cdktf.IResolvable;
  /**
  * This address is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ns_ip DataNiosDnsZoneAuth#ns_ip}
  */
  readonly nsIp: string;
  /**
  * This name is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ns_name DataNiosDnsZoneAuth#ns_name}
  */
  readonly nsName: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#stealth DataNiosDnsZoneAuth#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultMsSecondariesToTerraform(struct?: DataNiosDnsZoneAuthResultMsSecondaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    is_master: cdktf.booleanToTerraform(struct!.isMaster),
    ns_ip: cdktf.stringToTerraform(struct!.nsIp),
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dataNiosDnsZoneAuthResultMsSecondariesToHclTerraform(struct?: DataNiosDnsZoneAuthResultMsSecondaries | cdktf.IResolvable): any {
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
    is_master: {
      value: cdktf.booleanToHclTerraform(struct!.isMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ns_ip: {
      value: cdktf.stringToHclTerraform(struct!.nsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
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

export class DataNiosDnsZoneAuthResultMsSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultMsSecondaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._nsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsIp = this._nsIp;
    }
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultMsSecondaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._isMaster = undefined;
      this._nsIp = undefined;
      this._nsName = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._isMaster = value.isMaster;
      this._nsIp = value.nsIp;
      this._nsName = value.nsName;
      this._stealth = value.stealth;
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

  // is_master - computed: true, optional: true, required: false
  private _isMaster?: boolean | cdktf.IResolvable; 
  public get isMaster() {
    return this.getBooleanAttribute('is_master');
  }
  public set isMaster(value: boolean | cdktf.IResolvable) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
  }

  // ns_ip - computed: true, optional: false, required: true
  private _nsIp?: string; 
  public get nsIp() {
    return this.getStringAttribute('ns_ip');
  }
  public set nsIp(value: string) {
    this._nsIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIpInput() {
    return this._nsIp;
  }

  // ns_name - computed: true, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
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
}

export class DataNiosDnsZoneAuthResultMsSecondariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultMsSecondaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultMsSecondariesOutputReference {
    return new DataNiosDnsZoneAuthResultMsSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct {
  /**
  * The operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op DataNiosDnsZoneAuth#op}
  */
  readonly op: string;
  /**
  * The name of the Extensible Attribute Definition object which is used as the first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op1 DataNiosDnsZoneAuth#op1}
  */
  readonly op1?: string;
  /**
  * The first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op1_type DataNiosDnsZoneAuth#op1_type}
  */
  readonly op1Type?: string;
  /**
  * The second operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op2 DataNiosDnsZoneAuth#op2}
  */
  readonly op2?: string;
  /**
  * The second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op2_type DataNiosDnsZoneAuth#op2_type}
  */
  readonly op2Type?: string;
}

export function dataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructToTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    op1: cdktf.stringToTerraform(struct!.op1),
    op1_type: cdktf.stringToTerraform(struct!.op1Type),
    op2: cdktf.stringToTerraform(struct!.op2),
    op2_type: cdktf.stringToTerraform(struct!.op2Type),
  }
}


export function dataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructToHclTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1: {
      value: cdktf.stringToHclTerraform(struct!.op1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1_type: {
      value: cdktf.stringToHclTerraform(struct!.op1Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2: {
      value: cdktf.stringToHclTerraform(struct!.op2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2_type: {
      value: cdktf.stringToHclTerraform(struct!.op2Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._op1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1 = this._op1;
    }
    if (this._op1Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1Type = this._op1Type;
    }
    if (this._op2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2 = this._op2;
    }
    if (this._op2Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2Type = this._op2Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._op1 = undefined;
      this._op1Type = undefined;
      this._op2 = undefined;
      this._op2Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._op1 = value.op1;
      this._op1Type = value.op1Type;
      this._op2 = value.op2;
      this._op2Type = value.op2Type;
    }
  }

  // op - computed: true, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // op1 - computed: true, optional: true, required: false
  private _op1?: string; 
  public get op1() {
    return this.getStringAttribute('op1');
  }
  public set op1(value: string) {
    this._op1 = value;
  }
  public resetOp1() {
    this._op1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1Input() {
    return this._op1;
  }

  // op1_type - computed: true, optional: true, required: false
  private _op1Type?: string; 
  public get op1Type() {
    return this.getStringAttribute('op1_type');
  }
  public set op1Type(value: string) {
    this._op1Type = value;
  }
  public resetOp1Type() {
    this._op1Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1TypeInput() {
    return this._op1Type;
  }

  // op2 - computed: true, optional: true, required: false
  private _op2?: string; 
  public get op2() {
    return this.getStringAttribute('op2');
  }
  public set op2(value: string) {
    this._op2 = value;
  }
  public resetOp2() {
    this._op2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2Input() {
    return this._op2;
  }

  // op2_type - computed: true, optional: true, required: false
  private _op2Type?: string; 
  public get op2Type() {
    return this.getStringAttribute('op2_type');
  }
  public set op2Type(value: string) {
    this._op2Type = value;
  }
  public resetOp2Type() {
    this._op2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2TypeInput() {
    return this._op2Type;
  }
}

export class DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructOutputReference {
    return new DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct {
  /**
  * The operation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op DataNiosDnsZoneAuth#op}
  */
  readonly op: string;
  /**
  * The first operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op1 DataNiosDnsZoneAuth#op1}
  */
  readonly op1?: string;
  /**
  * The first operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op1_type DataNiosDnsZoneAuth#op1_type}
  */
  readonly op1Type?: string;
  /**
  * The second operand value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op2 DataNiosDnsZoneAuth#op2}
  */
  readonly op2?: string;
  /**
  * The second operand type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#op2_type DataNiosDnsZoneAuth#op2_type}
  */
  readonly op2Type?: string;
}

export function dataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructToTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    op1: cdktf.stringToTerraform(struct!.op1),
    op1_type: cdktf.stringToTerraform(struct!.op1Type),
    op2: cdktf.stringToTerraform(struct!.op2),
    op2_type: cdktf.stringToTerraform(struct!.op2Type),
  }
}


export function dataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructToHclTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1: {
      value: cdktf.stringToHclTerraform(struct!.op1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op1_type: {
      value: cdktf.stringToHclTerraform(struct!.op1Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2: {
      value: cdktf.stringToHclTerraform(struct!.op2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op2_type: {
      value: cdktf.stringToHclTerraform(struct!.op2Type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._op1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1 = this._op1;
    }
    if (this._op1Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op1Type = this._op1Type;
    }
    if (this._op2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2 = this._op2;
    }
    if (this._op2Type !== undefined) {
      hasAnyValues = true;
      internalValueResult.op2Type = this._op2Type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._op1 = undefined;
      this._op1Type = undefined;
      this._op2 = undefined;
      this._op2Type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._op1 = value.op1;
      this._op1Type = value.op1Type;
      this._op2 = value.op2;
      this._op2Type = value.op2Type;
    }
  }

  // op - computed: true, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // op1 - computed: true, optional: true, required: false
  private _op1?: string; 
  public get op1() {
    return this.getStringAttribute('op1');
  }
  public set op1(value: string) {
    this._op1 = value;
  }
  public resetOp1() {
    this._op1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1Input() {
    return this._op1;
  }

  // op1_type - computed: true, optional: true, required: false
  private _op1Type?: string; 
  public get op1Type() {
    return this.getStringAttribute('op1_type');
  }
  public set op1Type(value: string) {
    this._op1Type = value;
  }
  public resetOp1Type() {
    this._op1Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op1TypeInput() {
    return this._op1Type;
  }

  // op2 - computed: true, optional: true, required: false
  private _op2?: string; 
  public get op2() {
    return this.getStringAttribute('op2');
  }
  public set op2(value: string) {
    this._op2 = value;
  }
  public resetOp2() {
    this._op2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2Input() {
    return this._op2;
  }

  // op2_type - computed: true, optional: true, required: false
  private _op2Type?: string; 
  public get op2Type() {
    return this.getStringAttribute('op2_type');
  }
  public set op2Type(value: string) {
    this._op2Type = value;
  }
  public resetOp2Type() {
    this._op2Type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get op2TypeInput() {
    return this._op2Type;
  }
}

export class DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructOutputReference {
    return new DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#day_of_month DataNiosDnsZoneAuth#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#disable DataNiosDnsZoneAuth#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#every DataNiosDnsZoneAuth#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#frequency DataNiosDnsZoneAuth#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#hour_of_day DataNiosDnsZoneAuth#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#minutes_past_hour DataNiosDnsZoneAuth#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#month DataNiosDnsZoneAuth#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#recurring_time DataNiosDnsZoneAuth#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#repeat DataNiosDnsZoneAuth#repeat}
  */
  readonly repeat?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#weekdays DataNiosDnsZoneAuth#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#year DataNiosDnsZoneAuth#year}
  */
  readonly year?: number;
}

export function dataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleToTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function dataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleToHclTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
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

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface DataNiosDnsZoneAuthResultScavengingSettings {
  /**
  * The extensible attributes expression list. The particular record is treated as reclaimable if extensible attributes expression condition evaluates to 'true' for given record if scavenging hasn't been manually disabled on a given resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ea_expression_list DataNiosDnsZoneAuth#ea_expression_list}
  */
  readonly eaExpressionList?: DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable;
  /**
  * This flag indicates if the automatic resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_auto_reclamation DataNiosDnsZoneAuth#enable_auto_reclamation}
  */
  readonly enableAutoReclamation?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the recurrent resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_recurrent_scavenging DataNiosDnsZoneAuth#enable_recurrent_scavenging}
  */
  readonly enableRecurrentScavenging?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the resource record last queried monitoring in affected zones is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_rr_last_queried DataNiosDnsZoneAuth#enable_rr_last_queried}
  */
  readonly enableRrLastQueried?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_scavenging DataNiosDnsZoneAuth#enable_scavenging}
  */
  readonly enableScavenging?: boolean | cdktf.IResolvable;
  /**
  * This flag indicates if the last queried monitoring for affected zones is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#enable_zone_last_queried DataNiosDnsZoneAuth#enable_zone_last_queried}
  */
  readonly enableZoneLastQueried?: boolean | cdktf.IResolvable;
  /**
  * The expression list. The particular record is treated as reclaimable if expression condition evaluates to 'true' for given record if scavenging hasn't been manually disabled on a given resource record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#expression_list DataNiosDnsZoneAuth#expression_list}
  */
  readonly expressionList?: DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable;
  /**
  * This flag indicates if the associated resource record scavenging is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#reclaim_associated_records DataNiosDnsZoneAuth#reclaim_associated_records}
  */
  readonly reclaimAssociatedRecords?: boolean | cdktf.IResolvable;
  /**
  * The schedule setting for cloud discovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#scavenging_schedule DataNiosDnsZoneAuth#scavenging_schedule}
  */
  readonly scavengingSchedule?: DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule;
}

export function dataNiosDnsZoneAuthResultScavengingSettingsToTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ea_expression_list: cdktf.listMapper(dataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructToTerraform, false)(struct!.eaExpressionList),
    enable_auto_reclamation: cdktf.booleanToTerraform(struct!.enableAutoReclamation),
    enable_recurrent_scavenging: cdktf.booleanToTerraform(struct!.enableRecurrentScavenging),
    enable_rr_last_queried: cdktf.booleanToTerraform(struct!.enableRrLastQueried),
    enable_scavenging: cdktf.booleanToTerraform(struct!.enableScavenging),
    enable_zone_last_queried: cdktf.booleanToTerraform(struct!.enableZoneLastQueried),
    expression_list: cdktf.listMapper(dataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructToTerraform, false)(struct!.expressionList),
    reclaim_associated_records: cdktf.booleanToTerraform(struct!.reclaimAssociatedRecords),
    scavenging_schedule: dataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleToTerraform(struct!.scavengingSchedule),
  }
}


export function dataNiosDnsZoneAuthResultScavengingSettingsToHclTerraform(struct?: DataNiosDnsZoneAuthResultScavengingSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ea_expression_list: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructToHclTerraform, false)(struct!.eaExpressionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructList",
    },
    enable_auto_reclamation: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoReclamation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_recurrent_scavenging: {
      value: cdktf.booleanToHclTerraform(struct!.enableRecurrentScavenging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_rr_last_queried: {
      value: cdktf.booleanToHclTerraform(struct!.enableRrLastQueried),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_scavenging: {
      value: cdktf.booleanToHclTerraform(struct!.enableScavenging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_zone_last_queried: {
      value: cdktf.booleanToHclTerraform(struct!.enableZoneLastQueried),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression_list: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructToHclTerraform, false)(struct!.expressionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructList",
    },
    reclaim_associated_records: {
      value: cdktf.booleanToHclTerraform(struct!.reclaimAssociatedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scavenging_schedule: {
      value: dataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleToHclTerraform(struct!.scavengingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDnsZoneAuthResultScavengingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDnsZoneAuthResultScavengingSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eaExpressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eaExpressionList = this._eaExpressionList?.internalValue;
    }
    if (this._enableAutoReclamation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoReclamation = this._enableAutoReclamation;
    }
    if (this._enableRecurrentScavenging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRecurrentScavenging = this._enableRecurrentScavenging;
    }
    if (this._enableRrLastQueried !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRrLastQueried = this._enableRrLastQueried;
    }
    if (this._enableScavenging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableScavenging = this._enableScavenging;
    }
    if (this._enableZoneLastQueried !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableZoneLastQueried = this._enableZoneLastQueried;
    }
    if (this._expressionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionList = this._expressionList?.internalValue;
    }
    if (this._reclaimAssociatedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimAssociatedRecords = this._reclaimAssociatedRecords;
    }
    if (this._scavengingSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scavengingSchedule = this._scavengingSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDnsZoneAuthResultScavengingSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eaExpressionList.internalValue = undefined;
      this._enableAutoReclamation = undefined;
      this._enableRecurrentScavenging = undefined;
      this._enableRrLastQueried = undefined;
      this._enableScavenging = undefined;
      this._enableZoneLastQueried = undefined;
      this._expressionList.internalValue = undefined;
      this._reclaimAssociatedRecords = undefined;
      this._scavengingSchedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eaExpressionList.internalValue = value.eaExpressionList;
      this._enableAutoReclamation = value.enableAutoReclamation;
      this._enableRecurrentScavenging = value.enableRecurrentScavenging;
      this._enableRrLastQueried = value.enableRrLastQueried;
      this._enableScavenging = value.enableScavenging;
      this._enableZoneLastQueried = value.enableZoneLastQueried;
      this._expressionList.internalValue = value.expressionList;
      this._reclaimAssociatedRecords = value.reclaimAssociatedRecords;
      this._scavengingSchedule.internalValue = value.scavengingSchedule;
    }
  }

  // ea_expression_list - computed: true, optional: true, required: false
  private _eaExpressionList = new DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStructList(this, "ea_expression_list", false);
  public get eaExpressionList() {
    return this._eaExpressionList;
  }
  public putEaExpressionList(value: DataNiosDnsZoneAuthResultScavengingSettingsEaExpressionListStruct[] | cdktf.IResolvable) {
    this._eaExpressionList.internalValue = value;
  }
  public resetEaExpressionList() {
    this._eaExpressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaExpressionListInput() {
    return this._eaExpressionList.internalValue;
  }

  // enable_auto_reclamation - computed: true, optional: true, required: false
  private _enableAutoReclamation?: boolean | cdktf.IResolvable; 
  public get enableAutoReclamation() {
    return this.getBooleanAttribute('enable_auto_reclamation');
  }
  public set enableAutoReclamation(value: boolean | cdktf.IResolvable) {
    this._enableAutoReclamation = value;
  }
  public resetEnableAutoReclamation() {
    this._enableAutoReclamation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoReclamationInput() {
    return this._enableAutoReclamation;
  }

  // enable_recurrent_scavenging - computed: true, optional: true, required: false
  private _enableRecurrentScavenging?: boolean | cdktf.IResolvable; 
  public get enableRecurrentScavenging() {
    return this.getBooleanAttribute('enable_recurrent_scavenging');
  }
  public set enableRecurrentScavenging(value: boolean | cdktf.IResolvable) {
    this._enableRecurrentScavenging = value;
  }
  public resetEnableRecurrentScavenging() {
    this._enableRecurrentScavenging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecurrentScavengingInput() {
    return this._enableRecurrentScavenging;
  }

  // enable_rr_last_queried - computed: true, optional: true, required: false
  private _enableRrLastQueried?: boolean | cdktf.IResolvable; 
  public get enableRrLastQueried() {
    return this.getBooleanAttribute('enable_rr_last_queried');
  }
  public set enableRrLastQueried(value: boolean | cdktf.IResolvable) {
    this._enableRrLastQueried = value;
  }
  public resetEnableRrLastQueried() {
    this._enableRrLastQueried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRrLastQueriedInput() {
    return this._enableRrLastQueried;
  }

  // enable_scavenging - computed: true, optional: true, required: false
  private _enableScavenging?: boolean | cdktf.IResolvable; 
  public get enableScavenging() {
    return this.getBooleanAttribute('enable_scavenging');
  }
  public set enableScavenging(value: boolean | cdktf.IResolvable) {
    this._enableScavenging = value;
  }
  public resetEnableScavenging() {
    this._enableScavenging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScavengingInput() {
    return this._enableScavenging;
  }

  // enable_zone_last_queried - computed: true, optional: true, required: false
  private _enableZoneLastQueried?: boolean | cdktf.IResolvable; 
  public get enableZoneLastQueried() {
    return this.getBooleanAttribute('enable_zone_last_queried');
  }
  public set enableZoneLastQueried(value: boolean | cdktf.IResolvable) {
    this._enableZoneLastQueried = value;
  }
  public resetEnableZoneLastQueried() {
    this._enableZoneLastQueried = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableZoneLastQueriedInput() {
    return this._enableZoneLastQueried;
  }

  // expression_list - computed: true, optional: true, required: false
  private _expressionList = new DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStructList(this, "expression_list", false);
  public get expressionList() {
    return this._expressionList;
  }
  public putExpressionList(value: DataNiosDnsZoneAuthResultScavengingSettingsExpressionListStruct[] | cdktf.IResolvable) {
    this._expressionList.internalValue = value;
  }
  public resetExpressionList() {
    this._expressionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionListInput() {
    return this._expressionList.internalValue;
  }

  // reclaim_associated_records - computed: true, optional: true, required: false
  private _reclaimAssociatedRecords?: boolean | cdktf.IResolvable; 
  public get reclaimAssociatedRecords() {
    return this.getBooleanAttribute('reclaim_associated_records');
  }
  public set reclaimAssociatedRecords(value: boolean | cdktf.IResolvable) {
    this._reclaimAssociatedRecords = value;
  }
  public resetReclaimAssociatedRecords() {
    this._reclaimAssociatedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimAssociatedRecordsInput() {
    return this._reclaimAssociatedRecords;
  }

  // scavenging_schedule - computed: true, optional: true, required: false
  private _scavengingSchedule = new DataNiosDnsZoneAuthResultScavengingSettingsScavengingScheduleOutputReference(this, "scavenging_schedule");
  public get scavengingSchedule() {
    return this._scavengingSchedule;
  }
  public putScavengingSchedule(value: DataNiosDnsZoneAuthResultScavengingSettingsScavengingSchedule) {
    this._scavengingSchedule.internalValue = value;
  }
  public resetScavengingSchedule() {
    this._scavengingSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scavengingScheduleInput() {
    return this._scavengingSchedule.internalValue;
  }
}
export interface DataNiosDnsZoneAuthResultUpdateForwarding {
  /**
  * The address this rule applies to or "Any".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#address DataNiosDnsZoneAuth#address}
  */
  readonly address?: string;
  /**
  * The permission to use for this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#permission DataNiosDnsZoneAuth#permission}
  */
  readonly permission?: string;
  /**
  * The struct type of the object. The value must be one of 'addressac' and 'tsigac'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#struct DataNiosDnsZoneAuth#struct}
  */
  readonly struct: string;
  /**
  * A generated TSIG key. If the external primary server is a NIOS appliance running DNS One 2.x code, this can be set to :2xCOMPAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key DataNiosDnsZoneAuth#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_alg DataNiosDnsZoneAuth#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. If 2.x TSIG compatibility is used, this is set to 'tsig_xfer' on retrieval, and ignored on insert or update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#tsig_key_name DataNiosDnsZoneAuth#tsig_key_name}
  */
  readonly tsigKeyName?: string;
  /**
  * Use flag for: tsig_key_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_tsig_key_name DataNiosDnsZoneAuth#use_tsig_key_name}
  */
  readonly useTsigKeyName?: boolean | cdktf.IResolvable;
}

export function dataNiosDnsZoneAuthResultUpdateForwardingToTerraform(struct?: DataNiosDnsZoneAuthResultUpdateForwarding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    permission: cdktf.stringToTerraform(struct!.permission),
    struct: cdktf.stringToTerraform(struct!.struct),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    use_tsig_key_name: cdktf.booleanToTerraform(struct!.useTsigKeyName),
  }
}


export function dataNiosDnsZoneAuthResultUpdateForwardingToHclTerraform(struct?: DataNiosDnsZoneAuthResultUpdateForwarding | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    struct: {
      value: cdktf.stringToHclTerraform(struct!.struct),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataNiosDnsZoneAuthResultUpdateForwardingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResultUpdateForwarding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    if (this._struct !== undefined) {
      hasAnyValues = true;
      internalValueResult.struct = this._struct;
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

  public set internalValue(value: DataNiosDnsZoneAuthResultUpdateForwarding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._permission = undefined;
      this._struct = undefined;
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
      this._permission = value.permission;
      this._struct = value.struct;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
      this._useTsigKeyName = value.useTsigKeyName;
    }
  }

  // address - computed: true, optional: true, required: false
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

  // permission - computed: true, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }

  // struct - computed: true, optional: false, required: true
  private _struct?: string; 
  public get struct() {
    return this.getStringAttribute('struct');
  }
  public set struct(value: string) {
    this._struct = value;
  }
  // Temporarily expose input value. Use with caution.
  public get structInput() {
    return this._struct;
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

export class DataNiosDnsZoneAuthResultUpdateForwardingList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResultUpdateForwarding[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultUpdateForwardingOutputReference {
    return new DataNiosDnsZoneAuthResultUpdateForwardingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDnsZoneAuthResult {
  /**
  * This field allows the zone to receive GSS-TSIG authenticated DDNS updates from DHCP clients and servers in an AD domain. Note that addresses specified in this field ignore the permission set in the struct which will be set to 'ALLOW'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_active_dir DataNiosDnsZoneAuth#allow_active_dir}
  */
  readonly allowActiveDir?: DataNiosDnsZoneAuthResultAllowActiveDir[] | cdktf.IResolvable;
  /**
  * The flag that allows to enable or disable fixed RRset ordering for authoritative forward-mapping zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_fixed_rrset_order DataNiosDnsZoneAuth#allow_fixed_rrset_order}
  */
  readonly allowFixedRrsetOrder?: boolean | cdktf.IResolvable;
  /**
  * The flag that allows DHCP clients to perform GSS-TSIG signed updates for underscore zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_gss_tsig_for_underscore_zone DataNiosDnsZoneAuth#allow_gss_tsig_for_underscore_zone}
  */
  readonly allowGssTsigForUnderscoreZone?: boolean | cdktf.IResolvable;
  /**
  * The flag that enables or disables the zone for GSS-TSIG updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_gss_tsig_zone_updates DataNiosDnsZoneAuth#allow_gss_tsig_zone_updates}
  */
  readonly allowGssTsigZoneUpdates?: boolean | cdktf.IResolvable;
  /**
  * Determines whether DNS queries are allowed from a named ACL, or from a list of IPv4/IPv6 addresses, networks, and TSIG keys for the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_query DataNiosDnsZoneAuth#allow_query}
  */
  readonly allowQuery?: DataNiosDnsZoneAuthResultAllowQuery[] | cdktf.IResolvable;
  /**
  * Determines whether zone transfers are allowed from a named ACL, or from a list of IPv4/IPv6 addresses, networks, and TSIG keys for the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_transfer DataNiosDnsZoneAuth#allow_transfer}
  */
  readonly allowTransfer?: DataNiosDnsZoneAuthResultAllowTransfer[] | cdktf.IResolvable;
  /**
  * Determines whether dynamic DNS updates are allowed from a named ACL, or from a list of IPv4/IPv6 addresses, networks, and TSIG keys for the hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_update DataNiosDnsZoneAuth#allow_update}
  */
  readonly allowUpdate?: DataNiosDnsZoneAuthResultAllowUpdate[] | cdktf.IResolvable;
  /**
  * The list with IP addresses, networks or TSIG keys for clients, from which forwarded dynamic updates are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#allow_update_forwarding DataNiosDnsZoneAuth#allow_update_forwarding}
  */
  readonly allowUpdateForwarding?: boolean | cdktf.IResolvable;
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#comment DataNiosDnsZoneAuth#comment}
  */
  readonly comment?: string;
  /**
  * If this flag is set to True then copy allowed IPs from Allow Transfer to Also Notify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#copy_xfer_to_notify DataNiosDnsZoneAuth#copy_xfer_to_notify}
  */
  readonly copyXferToNotify?: boolean | cdktf.IResolvable;
  /**
  * Determines whether automatic creation of subzones is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#create_underscore_zones DataNiosDnsZoneAuth#create_underscore_zones}
  */
  readonly createUnderscoreZones?: boolean | cdktf.IResolvable;
  /**
  * Defines whether creation timestamp of RR should be updated ' when DDNS update happens even if there is no change to ' the RR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_force_creation_timestamp_update DataNiosDnsZoneAuth#ddns_force_creation_timestamp_update}
  */
  readonly ddnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable;
  /**
  * The DDNS Principal cluster group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_principal_group DataNiosDnsZoneAuth#ddns_principal_group}
  */
  readonly ddnsPrincipalGroup?: string;
  /**
  * The flag that indicates whether the DDNS principal track is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_principal_tracking DataNiosDnsZoneAuth#ddns_principal_tracking}
  */
  readonly ddnsPrincipalTracking?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether an option to restrict DDNS update request based on FQDN patterns is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_restrict_patterns DataNiosDnsZoneAuth#ddns_restrict_patterns}
  */
  readonly ddnsRestrictPatterns?: boolean | cdktf.IResolvable;
  /**
  * The unordered list of restriction patterns for an option of to restrict DDNS updates based on FQDN patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_restrict_patterns_list DataNiosDnsZoneAuth#ddns_restrict_patterns_list}
  */
  readonly ddnsRestrictPatternsList?: string[];
  /**
  * The flag that indicates whether an option to restrict DDNS update request to protected resource records is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_restrict_protected DataNiosDnsZoneAuth#ddns_restrict_protected}
  */
  readonly ddnsRestrictProtected?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether DDNS update request for principal other than target resource record's principal is restricted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_restrict_secure DataNiosDnsZoneAuth#ddns_restrict_secure}
  */
  readonly ddnsRestrictSecure?: boolean | cdktf.IResolvable;
  /**
  * The flag that indicates whether an option to restrict DDNS update request to resource records which are marked as 'STATIC' is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ddns_restrict_static DataNiosDnsZoneAuth#ddns_restrict_static}
  */
  readonly ddnsRestrictStatic?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#disable DataNiosDnsZoneAuth#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the name servers that host the zone should forward queries (ended with the domain name of the zone) to any configured forwarders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#disable_forwarding DataNiosDnsZoneAuth#disable_forwarding}
  */
  readonly disableForwarding?: boolean | cdktf.IResolvable;
  /**
  * If this is set to True, DNS integrity check is enabled for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#dns_integrity_enable DataNiosDnsZoneAuth#dns_integrity_enable}
  */
  readonly dnsIntegrityEnable?: boolean | cdktf.IResolvable;
  /**
  * The frequency, in seconds, of DNS integrity checks for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#dns_integrity_frequency DataNiosDnsZoneAuth#dns_integrity_frequency}
  */
  readonly dnsIntegrityFrequency?: number;
  /**
  * The Grid member that performs DNS integrity checks for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#dns_integrity_member DataNiosDnsZoneAuth#dns_integrity_member}
  */
  readonly dnsIntegrityMember?: string;
  /**
  * If this is set to True, more information is logged for DNS integrity checks for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#dns_integrity_verbose_logging DataNiosDnsZoneAuth#dns_integrity_verbose_logging}
  */
  readonly dnsIntegrityVerboseLogging?: boolean | cdktf.IResolvable;
  /**
  * The DNSSEC key parameters for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#dnssec_key_params DataNiosDnsZoneAuth#dnssec_key_params}
  */
  readonly dnssecKeyParams?: DataNiosDnsZoneAuthResultDnssecKeyParams;
  /**
  * The value of the check names policy, which indicates the action the appliance takes when it encounters host names that do not comply with the Strict Hostname Checking policy. This value applies only if the host name restriction policy is set to "Strict Hostname Checking".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#effective_check_names_policy DataNiosDnsZoneAuth#effective_check_names_policy}
  */
  readonly effectiveCheckNamesPolicy?: string;
  /**
  * Extensible attributes associated with the object. For valid values for extensible attributes, see {extattrs:values}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#extattrs DataNiosDnsZoneAuth#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The list of external primary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#external_primaries DataNiosDnsZoneAuth#external_primaries}
  */
  readonly externalPrimaries?: DataNiosDnsZoneAuthResultExternalPrimaries[] | cdktf.IResolvable;
  /**
  * The list of external secondary servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#external_secondaries DataNiosDnsZoneAuth#external_secondaries}
  */
  readonly externalSecondaries?: DataNiosDnsZoneAuthResultExternalSecondaries[] | cdktf.IResolvable;
  /**
  * The name of this DNS zone. For a reverse zone, this is in "address/cidr" format. For other zones, this is in FQDN format. This value can be in unicode format. Note that for a reverse zone, the corresponding zone_format value should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#fqdn DataNiosDnsZoneAuth#fqdn}
  */
  readonly fqdn: string;
  /**
  * The grid primary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#grid_primary DataNiosDnsZoneAuth#grid_primary}
  */
  readonly gridPrimary?: DataNiosDnsZoneAuthResultGridPrimary[] | cdktf.IResolvable;
  /**
  * The list with Grid members that are secondary servers for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#grid_secondaries DataNiosDnsZoneAuth#grid_secondaries}
  */
  readonly gridSecondaries?: DataNiosDnsZoneAuthResultGridSecondaries[] | cdktf.IResolvable;
  /**
  * Determines last queried ACL for the specified IPv4 or IPv6 addresses and networks in scavenging settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#last_queried_acl DataNiosDnsZoneAuth#last_queried_acl}
  */
  readonly lastQueriedAcl?: DataNiosDnsZoneAuthResultLastQueriedAcl[] | cdktf.IResolvable;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#locked DataNiosDnsZoneAuth#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The list of per-member SOA MNAME information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#member_soa_mnames DataNiosDnsZoneAuth#member_soa_mnames}
  */
  readonly memberSoaMnames?: DataNiosDnsZoneAuthResultMemberSoaMnames[] | cdktf.IResolvable;
  /**
  * The flag that determines whether Active Directory is integrated or not. This field is valid only when ms_managed is "STUB", "AUTH_PRIMARY", or "AUTH_BOTH".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_ad_integrated DataNiosDnsZoneAuth#ms_ad_integrated}
  */
  readonly msAdIntegrated?: boolean | cdktf.IResolvable;
  /**
  * The list of DNS clients that are allowed to perform zone transfers from a Microsoft DNS server. This setting applies only to zones with Microsoft DNS servers that are either primary or secondary servers. This setting does not inherit any value from the Grid or from any member that defines an allow_transfer value. This setting does not apply to any grid member. Use the allow_transfer field to control which DNS clients are allowed to perform zone transfers on Grid members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_allow_transfer DataNiosDnsZoneAuth#ms_allow_transfer}
  */
  readonly msAllowTransfer?: DataNiosDnsZoneAuthResultMsAllowTransfer[] | cdktf.IResolvable;
  /**
  * Determines which DNS clients are allowed to perform zone transfers from a Microsoft DNS server. Valid values are: "ADDRESS_AC", to use ms_allow_transfer field for specifying IP addresses, networks and Transaction Signature (TSIG) keys for clients that are allowed to do zone transfers. "ANY", to allow any client. "ANY_NS", to allow only the nameservers listed in this zone. "NONE", to deny all zone transfer requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_allow_transfer_mode DataNiosDnsZoneAuth#ms_allow_transfer_mode}
  */
  readonly msAllowTransferMode?: string;
  /**
  * The list of domain controllers that are allowed to create NS records for authoritative zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_dc_ns_record_creation DataNiosDnsZoneAuth#ms_dc_ns_record_creation}
  */
  readonly msDcNsRecordCreation?: DataNiosDnsZoneAuthResultMsDcNsRecordCreation[] | cdktf.IResolvable;
  /**
  * Determines whether an Active Directory-integrated zone with a Microsoft DNS server as primary allows dynamic updates. Valid values are: "SECURE" if the zone allows secure updates only. "NONE" if the zone forbids dynamic updates. "ANY" if the zone accepts both secure and nonsecure updates. This field is valid only if ms_managed is either "AUTH_PRIMARY" or "AUTH_BOTH". If the flag ms_ad_integrated is false, the value "SECURE" is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_ddns_mode DataNiosDnsZoneAuth#ms_ddns_mode}
  */
  readonly msDdnsMode?: string;
  /**
  * The list with the Microsoft DNS servers that are primary servers for the zone. Although a zone typically has just one primary name server, you can specify up to ten independent servers for a single zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_primaries DataNiosDnsZoneAuth#ms_primaries}
  */
  readonly msPrimaries?: DataNiosDnsZoneAuthResultMsPrimaries[] | cdktf.IResolvable;
  /**
  * The list with the Microsoft DNS servers that are secondary servers for the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_secondaries DataNiosDnsZoneAuth#ms_secondaries}
  */
  readonly msSecondaries?: DataNiosDnsZoneAuthResultMsSecondaries[] | cdktf.IResolvable;
  /**
  * This flag controls whether this zone is synchronized with Microsoft DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ms_sync_disabled DataNiosDnsZoneAuth#ms_sync_disabled}
  */
  readonly msSyncDisabled?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds in delay with which notify messages are sent to secondaries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#notify_delay DataNiosDnsZoneAuth#notify_delay}
  */
  readonly notifyDelay?: number;
  /**
  * The name server group that serves DNS for this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#ns_group DataNiosDnsZoneAuth#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#prefix DataNiosDnsZoneAuth#prefix}
  */
  readonly prefix?: string;
  /**
  * The hostname policy for records under this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#record_name_policy DataNiosDnsZoneAuth#record_name_policy}
  */
  readonly recordNamePolicy?: string;
  /**
  * Remove subzones delete option. Determines whether all child objects should be removed alongside with the parent zone or child objects should be assigned to another parental zone. By default child objects are deleted with the parent zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#remove_subzones DataNiosDnsZoneAuth#remove_subzones}
  */
  readonly removeSubzones?: boolean | cdktf.IResolvable;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#restart_if_needed DataNiosDnsZoneAuth#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#scavenging_settings DataNiosDnsZoneAuth#scavenging_settings}
  */
  readonly scavengingSettings?: DataNiosDnsZoneAuthResultScavengingSettings;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#set_soa_serial_number DataNiosDnsZoneAuth#set_soa_serial_number}
  */
  readonly setSoaSerialNumber?: boolean | cdktf.IResolvable;
  /**
  * The Time to Live (TTL) value of the SOA record of this zone. This value is the number of seconds that data is cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_default_ttl DataNiosDnsZoneAuth#soa_default_ttl}
  */
  readonly soaDefaultTtl?: number;
  /**
  * The SOA email value for this zone. This value can be in unicode format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_email DataNiosDnsZoneAuth#soa_email}
  */
  readonly soaEmail?: string;
  /**
  * This setting defines the amount of time, in seconds, after which the secondary server stops giving out answers about the zone because the zone data is too old to be useful. The default is one week.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_expire DataNiosDnsZoneAuth#soa_expire}
  */
  readonly soaExpire?: number;
  /**
  * The negative Time to Live (TTL) value of the SOA of the zone indicates how long a secondary server can cache data for "Does Not Respond" responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_negative_ttl DataNiosDnsZoneAuth#soa_negative_ttl}
  */
  readonly soaNegativeTtl?: number;
  /**
  * This indicates the interval at which a secondary server sends a message to the primary server for a zone to check that its data is current, and retrieve fresh data if it is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_refresh DataNiosDnsZoneAuth#soa_refresh}
  */
  readonly soaRefresh?: number;
  /**
  * This indicates how long a secondary server must wait before attempting to recontact the primary server after a connection failure between the two servers occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_retry DataNiosDnsZoneAuth#soa_retry}
  */
  readonly soaRetry?: number;
  /**
  * The serial number in the SOA record incrementally changes every time the record is modified. The Infoblox appliance allows you to change the serial number (in the SOA record) for the primary server so it is higher than the secondary server, thereby ensuring zone transfers come from the primary server (as they should). To change the serial number you need to set a new value at "soa_serial_number" and pass "set_soa_serial_number" as True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#soa_serial_number DataNiosDnsZoneAuth#soa_serial_number}
  */
  readonly soaSerialNumber?: number;
  /**
  * The associated shared record groups of a DNS zone. If a shared record group is associated with a zone, then all shared records in a shared record group will be shared in the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#srgs DataNiosDnsZoneAuth#srgs}
  */
  readonly srgs?: string[];
  /**
  * Use this field to allow or deny dynamic DNS updates that are forwarded from specific IPv4/IPv6 addresses, networks, or a named ACL. You can also provide TSIG keys for clients that are allowed or denied to perform zone updates. This setting overrides the member-level setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#update_forwarding DataNiosDnsZoneAuth#update_forwarding}
  */
  readonly updateForwarding?: DataNiosDnsZoneAuthResultUpdateForwarding[] | cdktf.IResolvable;
  /**
  * Use flag for: allow_active_dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_allow_active_dir DataNiosDnsZoneAuth#use_allow_active_dir}
  */
  readonly useAllowActiveDir?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: allow_query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_allow_query DataNiosDnsZoneAuth#use_allow_query}
  */
  readonly useAllowQuery?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: allow_transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_allow_transfer DataNiosDnsZoneAuth#use_allow_transfer}
  */
  readonly useAllowTransfer?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: allow_update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_allow_update DataNiosDnsZoneAuth#use_allow_update}
  */
  readonly useAllowUpdate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: allow_update_forwarding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_allow_update_forwarding DataNiosDnsZoneAuth#use_allow_update_forwarding}
  */
  readonly useAllowUpdateForwarding?: boolean | cdktf.IResolvable;
  /**
  * Apply policy to dynamic updates and inbound zone transfers (This value applies only if the host name restriction policy is set to "Strict Hostname Checking".)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_check_names_policy DataNiosDnsZoneAuth#use_check_names_policy}
  */
  readonly useCheckNamesPolicy?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: copy_xfer_to_notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_copy_xfer_to_notify DataNiosDnsZoneAuth#use_copy_xfer_to_notify}
  */
  readonly useCopyXferToNotify?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_force_creation_timestamp_update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_ddns_force_creation_timestamp_update DataNiosDnsZoneAuth#use_ddns_force_creation_timestamp_update}
  */
  readonly useDdnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_patterns_list , ddns_restrict_patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_ddns_patterns_restriction DataNiosDnsZoneAuth#use_ddns_patterns_restriction}
  */
  readonly useDdnsPatternsRestriction?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_secure , ddns_principal_tracking, ddns_principal_group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_ddns_principal_security DataNiosDnsZoneAuth#use_ddns_principal_security}
  */
  readonly useDdnsPrincipalSecurity?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_protected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_ddns_restrict_protected DataNiosDnsZoneAuth#use_ddns_restrict_protected}
  */
  readonly useDdnsRestrictProtected?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_restrict_static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_ddns_restrict_static DataNiosDnsZoneAuth#use_ddns_restrict_static}
  */
  readonly useDdnsRestrictStatic?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: dnssec_key_params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_dnssec_key_params DataNiosDnsZoneAuth#use_dnssec_key_params}
  */
  readonly useDnssecKeyParams?: boolean | cdktf.IResolvable;
  /**
  * This flag controls whether the zone is using an external primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_external_primary DataNiosDnsZoneAuth#use_external_primary}
  */
  readonly useExternalPrimary?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_default_ttl , soa_expire, soa_negative_ttl, soa_refresh, soa_retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_grid_zone_timer DataNiosDnsZoneAuth#use_grid_zone_timer}
  */
  readonly useGridZoneTimer?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: notify_delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_notify_delay DataNiosDnsZoneAuth#use_notify_delay}
  */
  readonly useNotifyDelay?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: record_name_policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_record_name_policy DataNiosDnsZoneAuth#use_record_name_policy}
  */
  readonly useRecordNamePolicy?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: scavenging_settings , last_queried_acl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_scavenging_settings DataNiosDnsZoneAuth#use_scavenging_settings}
  */
  readonly useScavengingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: soa_email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#use_soa_email DataNiosDnsZoneAuth#use_soa_email}
  */
  readonly useSoaEmail?: boolean | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#view DataNiosDnsZoneAuth#view}
  */
  readonly view?: string;
  /**
  * Determines the format of this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#zone_format DataNiosDnsZoneAuth#zone_format}
  */
  readonly zoneFormat?: string;
}

export function dataNiosDnsZoneAuthResultToTerraform(struct?: DataNiosDnsZoneAuthResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_active_dir: cdktf.listMapper(dataNiosDnsZoneAuthResultAllowActiveDirToTerraform, false)(struct!.allowActiveDir),
    allow_fixed_rrset_order: cdktf.booleanToTerraform(struct!.allowFixedRrsetOrder),
    allow_gss_tsig_for_underscore_zone: cdktf.booleanToTerraform(struct!.allowGssTsigForUnderscoreZone),
    allow_gss_tsig_zone_updates: cdktf.booleanToTerraform(struct!.allowGssTsigZoneUpdates),
    allow_query: cdktf.listMapper(dataNiosDnsZoneAuthResultAllowQueryToTerraform, false)(struct!.allowQuery),
    allow_transfer: cdktf.listMapper(dataNiosDnsZoneAuthResultAllowTransferToTerraform, false)(struct!.allowTransfer),
    allow_update: cdktf.listMapper(dataNiosDnsZoneAuthResultAllowUpdateToTerraform, false)(struct!.allowUpdate),
    allow_update_forwarding: cdktf.booleanToTerraform(struct!.allowUpdateForwarding),
    comment: cdktf.stringToTerraform(struct!.comment),
    copy_xfer_to_notify: cdktf.booleanToTerraform(struct!.copyXferToNotify),
    create_underscore_zones: cdktf.booleanToTerraform(struct!.createUnderscoreZones),
    ddns_force_creation_timestamp_update: cdktf.booleanToTerraform(struct!.ddnsForceCreationTimestampUpdate),
    ddns_principal_group: cdktf.stringToTerraform(struct!.ddnsPrincipalGroup),
    ddns_principal_tracking: cdktf.booleanToTerraform(struct!.ddnsPrincipalTracking),
    ddns_restrict_patterns: cdktf.booleanToTerraform(struct!.ddnsRestrictPatterns),
    ddns_restrict_patterns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsRestrictPatternsList),
    ddns_restrict_protected: cdktf.booleanToTerraform(struct!.ddnsRestrictProtected),
    ddns_restrict_secure: cdktf.booleanToTerraform(struct!.ddnsRestrictSecure),
    ddns_restrict_static: cdktf.booleanToTerraform(struct!.ddnsRestrictStatic),
    disable: cdktf.booleanToTerraform(struct!.disable),
    disable_forwarding: cdktf.booleanToTerraform(struct!.disableForwarding),
    dns_integrity_enable: cdktf.booleanToTerraform(struct!.dnsIntegrityEnable),
    dns_integrity_frequency: cdktf.numberToTerraform(struct!.dnsIntegrityFrequency),
    dns_integrity_member: cdktf.stringToTerraform(struct!.dnsIntegrityMember),
    dns_integrity_verbose_logging: cdktf.booleanToTerraform(struct!.dnsIntegrityVerboseLogging),
    dnssec_key_params: dataNiosDnsZoneAuthResultDnssecKeyParamsToTerraform(struct!.dnssecKeyParams),
    effective_check_names_policy: cdktf.stringToTerraform(struct!.effectiveCheckNamesPolicy),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    external_primaries: cdktf.listMapper(dataNiosDnsZoneAuthResultExternalPrimariesToTerraform, false)(struct!.externalPrimaries),
    external_secondaries: cdktf.listMapper(dataNiosDnsZoneAuthResultExternalSecondariesToTerraform, false)(struct!.externalSecondaries),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    grid_primary: cdktf.listMapper(dataNiosDnsZoneAuthResultGridPrimaryToTerraform, false)(struct!.gridPrimary),
    grid_secondaries: cdktf.listMapper(dataNiosDnsZoneAuthResultGridSecondariesToTerraform, false)(struct!.gridSecondaries),
    last_queried_acl: cdktf.listMapper(dataNiosDnsZoneAuthResultLastQueriedAclToTerraform, false)(struct!.lastQueriedAcl),
    locked: cdktf.booleanToTerraform(struct!.locked),
    member_soa_mnames: cdktf.listMapper(dataNiosDnsZoneAuthResultMemberSoaMnamesToTerraform, false)(struct!.memberSoaMnames),
    ms_ad_integrated: cdktf.booleanToTerraform(struct!.msAdIntegrated),
    ms_allow_transfer: cdktf.listMapper(dataNiosDnsZoneAuthResultMsAllowTransferToTerraform, false)(struct!.msAllowTransfer),
    ms_allow_transfer_mode: cdktf.stringToTerraform(struct!.msAllowTransferMode),
    ms_dc_ns_record_creation: cdktf.listMapper(dataNiosDnsZoneAuthResultMsDcNsRecordCreationToTerraform, false)(struct!.msDcNsRecordCreation),
    ms_ddns_mode: cdktf.stringToTerraform(struct!.msDdnsMode),
    ms_primaries: cdktf.listMapper(dataNiosDnsZoneAuthResultMsPrimariesToTerraform, false)(struct!.msPrimaries),
    ms_secondaries: cdktf.listMapper(dataNiosDnsZoneAuthResultMsSecondariesToTerraform, false)(struct!.msSecondaries),
    ms_sync_disabled: cdktf.booleanToTerraform(struct!.msSyncDisabled),
    notify_delay: cdktf.numberToTerraform(struct!.notifyDelay),
    ns_group: cdktf.stringToTerraform(struct!.nsGroup),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    record_name_policy: cdktf.stringToTerraform(struct!.recordNamePolicy),
    remove_subzones: cdktf.booleanToTerraform(struct!.removeSubzones),
    restart_if_needed: cdktf.booleanToTerraform(struct!.restartIfNeeded),
    scavenging_settings: dataNiosDnsZoneAuthResultScavengingSettingsToTerraform(struct!.scavengingSettings),
    set_soa_serial_number: cdktf.booleanToTerraform(struct!.setSoaSerialNumber),
    soa_default_ttl: cdktf.numberToTerraform(struct!.soaDefaultTtl),
    soa_email: cdktf.stringToTerraform(struct!.soaEmail),
    soa_expire: cdktf.numberToTerraform(struct!.soaExpire),
    soa_negative_ttl: cdktf.numberToTerraform(struct!.soaNegativeTtl),
    soa_refresh: cdktf.numberToTerraform(struct!.soaRefresh),
    soa_retry: cdktf.numberToTerraform(struct!.soaRetry),
    soa_serial_number: cdktf.numberToTerraform(struct!.soaSerialNumber),
    srgs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srgs),
    update_forwarding: cdktf.listMapper(dataNiosDnsZoneAuthResultUpdateForwardingToTerraform, false)(struct!.updateForwarding),
    use_allow_active_dir: cdktf.booleanToTerraform(struct!.useAllowActiveDir),
    use_allow_query: cdktf.booleanToTerraform(struct!.useAllowQuery),
    use_allow_transfer: cdktf.booleanToTerraform(struct!.useAllowTransfer),
    use_allow_update: cdktf.booleanToTerraform(struct!.useAllowUpdate),
    use_allow_update_forwarding: cdktf.booleanToTerraform(struct!.useAllowUpdateForwarding),
    use_check_names_policy: cdktf.booleanToTerraform(struct!.useCheckNamesPolicy),
    use_copy_xfer_to_notify: cdktf.booleanToTerraform(struct!.useCopyXferToNotify),
    use_ddns_force_creation_timestamp_update: cdktf.booleanToTerraform(struct!.useDdnsForceCreationTimestampUpdate),
    use_ddns_patterns_restriction: cdktf.booleanToTerraform(struct!.useDdnsPatternsRestriction),
    use_ddns_principal_security: cdktf.booleanToTerraform(struct!.useDdnsPrincipalSecurity),
    use_ddns_restrict_protected: cdktf.booleanToTerraform(struct!.useDdnsRestrictProtected),
    use_ddns_restrict_static: cdktf.booleanToTerraform(struct!.useDdnsRestrictStatic),
    use_dnssec_key_params: cdktf.booleanToTerraform(struct!.useDnssecKeyParams),
    use_external_primary: cdktf.booleanToTerraform(struct!.useExternalPrimary),
    use_grid_zone_timer: cdktf.booleanToTerraform(struct!.useGridZoneTimer),
    use_notify_delay: cdktf.booleanToTerraform(struct!.useNotifyDelay),
    use_record_name_policy: cdktf.booleanToTerraform(struct!.useRecordNamePolicy),
    use_scavenging_settings: cdktf.booleanToTerraform(struct!.useScavengingSettings),
    use_soa_email: cdktf.booleanToTerraform(struct!.useSoaEmail),
    view: cdktf.stringToTerraform(struct!.view),
    zone_format: cdktf.stringToTerraform(struct!.zoneFormat),
  }
}


export function dataNiosDnsZoneAuthResultToHclTerraform(struct?: DataNiosDnsZoneAuthResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_active_dir: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultAllowActiveDirToHclTerraform, false)(struct!.allowActiveDir),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultAllowActiveDirList",
    },
    allow_fixed_rrset_order: {
      value: cdktf.booleanToHclTerraform(struct!.allowFixedRrsetOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_gss_tsig_for_underscore_zone: {
      value: cdktf.booleanToHclTerraform(struct!.allowGssTsigForUnderscoreZone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_gss_tsig_zone_updates: {
      value: cdktf.booleanToHclTerraform(struct!.allowGssTsigZoneUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_query: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultAllowQueryToHclTerraform, false)(struct!.allowQuery),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultAllowQueryList",
    },
    allow_transfer: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultAllowTransferToHclTerraform, false)(struct!.allowTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultAllowTransferList",
    },
    allow_update: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultAllowUpdateToHclTerraform, false)(struct!.allowUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultAllowUpdateList",
    },
    allow_update_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.allowUpdateForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_xfer_to_notify: {
      value: cdktf.booleanToHclTerraform(struct!.copyXferToNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_underscore_zones: {
      value: cdktf.booleanToHclTerraform(struct!.createUnderscoreZones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_force_creation_timestamp_update: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsForceCreationTimestampUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_principal_group: {
      value: cdktf.stringToHclTerraform(struct!.ddnsPrincipalGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_principal_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsPrincipalTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_patterns: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictPatterns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_patterns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsRestrictPatternsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ddns_restrict_protected: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_restrict_static: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsRestrictStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.disableForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_integrity_enable: {
      value: cdktf.booleanToHclTerraform(struct!.dnsIntegrityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_integrity_frequency: {
      value: cdktf.numberToHclTerraform(struct!.dnsIntegrityFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_integrity_member: {
      value: cdktf.stringToHclTerraform(struct!.dnsIntegrityMember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_integrity_verbose_logging: {
      value: cdktf.booleanToHclTerraform(struct!.dnsIntegrityVerboseLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dnssec_key_params: {
      value: dataNiosDnsZoneAuthResultDnssecKeyParamsToHclTerraform(struct!.dnssecKeyParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsZoneAuthResultDnssecKeyParams",
    },
    effective_check_names_policy: {
      value: cdktf.stringToHclTerraform(struct!.effectiveCheckNamesPolicy),
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
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultExternalPrimariesToHclTerraform, false)(struct!.externalPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultExternalPrimariesList",
    },
    external_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultExternalSecondariesToHclTerraform, false)(struct!.externalSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultExternalSecondariesList",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grid_primary: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultGridPrimaryToHclTerraform, false)(struct!.gridPrimary),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultGridPrimaryList",
    },
    grid_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultGridSecondariesToHclTerraform, false)(struct!.gridSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultGridSecondariesList",
    },
    last_queried_acl: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultLastQueriedAclToHclTerraform, false)(struct!.lastQueriedAcl),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultLastQueriedAclList",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    member_soa_mnames: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultMemberSoaMnamesToHclTerraform, false)(struct!.memberSoaMnames),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultMemberSoaMnamesList",
    },
    ms_ad_integrated: {
      value: cdktf.booleanToHclTerraform(struct!.msAdIntegrated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ms_allow_transfer: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultMsAllowTransferToHclTerraform, false)(struct!.msAllowTransfer),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultMsAllowTransferList",
    },
    ms_allow_transfer_mode: {
      value: cdktf.stringToHclTerraform(struct!.msAllowTransferMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_dc_ns_record_creation: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultMsDcNsRecordCreationToHclTerraform, false)(struct!.msDcNsRecordCreation),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultMsDcNsRecordCreationList",
    },
    ms_ddns_mode: {
      value: cdktf.stringToHclTerraform(struct!.msDdnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ms_primaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultMsPrimariesToHclTerraform, false)(struct!.msPrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultMsPrimariesList",
    },
    ms_secondaries: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultMsSecondariesToHclTerraform, false)(struct!.msSecondaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultMsSecondariesList",
    },
    ms_sync_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.msSyncDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_delay: {
      value: cdktf.numberToHclTerraform(struct!.notifyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    remove_subzones: {
      value: cdktf.booleanToHclTerraform(struct!.removeSubzones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_if_needed: {
      value: cdktf.booleanToHclTerraform(struct!.restartIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scavenging_settings: {
      value: dataNiosDnsZoneAuthResultScavengingSettingsToHclTerraform(struct!.scavengingSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDnsZoneAuthResultScavengingSettings",
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
    srgs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    update_forwarding: {
      value: cdktf.listMapperHcl(dataNiosDnsZoneAuthResultUpdateForwardingToHclTerraform, false)(struct!.updateForwarding),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDnsZoneAuthResultUpdateForwardingList",
    },
    use_allow_active_dir: {
      value: cdktf.booleanToHclTerraform(struct!.useAllowActiveDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_allow_query: {
      value: cdktf.booleanToHclTerraform(struct!.useAllowQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_allow_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.useAllowTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_allow_update: {
      value: cdktf.booleanToHclTerraform(struct!.useAllowUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_allow_update_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.useAllowUpdateForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_check_names_policy: {
      value: cdktf.booleanToHclTerraform(struct!.useCheckNamesPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_copy_xfer_to_notify: {
      value: cdktf.booleanToHclTerraform(struct!.useCopyXferToNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_force_creation_timestamp_update: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsForceCreationTimestampUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_patterns_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsPatternsRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_principal_security: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsPrincipalSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_restrict_protected: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsRestrictProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_restrict_static: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsRestrictStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_dnssec_key_params: {
      value: cdktf.booleanToHclTerraform(struct!.useDnssecKeyParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    use_notify_delay: {
      value: cdktf.booleanToHclTerraform(struct!.useNotifyDelay),
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
    use_scavenging_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useScavengingSettings),
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

export class DataNiosDnsZoneAuthResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDnsZoneAuthResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowActiveDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowActiveDir = this._allowActiveDir?.internalValue;
    }
    if (this._allowFixedRrsetOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFixedRrsetOrder = this._allowFixedRrsetOrder;
    }
    if (this._allowGssTsigForUnderscoreZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGssTsigForUnderscoreZone = this._allowGssTsigForUnderscoreZone;
    }
    if (this._allowGssTsigZoneUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGssTsigZoneUpdates = this._allowGssTsigZoneUpdates;
    }
    if (this._allowQuery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQuery = this._allowQuery?.internalValue;
    }
    if (this._allowTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTransfer = this._allowTransfer?.internalValue;
    }
    if (this._allowUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUpdate = this._allowUpdate?.internalValue;
    }
    if (this._allowUpdateForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUpdateForwarding = this._allowUpdateForwarding;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._copyXferToNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyXferToNotify = this._copyXferToNotify;
    }
    if (this._createUnderscoreZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.createUnderscoreZones = this._createUnderscoreZones;
    }
    if (this._ddnsForceCreationTimestampUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsForceCreationTimestampUpdate = this._ddnsForceCreationTimestampUpdate;
    }
    if (this._ddnsPrincipalGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPrincipalGroup = this._ddnsPrincipalGroup;
    }
    if (this._ddnsPrincipalTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPrincipalTracking = this._ddnsPrincipalTracking;
    }
    if (this._ddnsRestrictPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictPatterns = this._ddnsRestrictPatterns;
    }
    if (this._ddnsRestrictPatternsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictPatternsList = this._ddnsRestrictPatternsList;
    }
    if (this._ddnsRestrictProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictProtected = this._ddnsRestrictProtected;
    }
    if (this._ddnsRestrictSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictSecure = this._ddnsRestrictSecure;
    }
    if (this._ddnsRestrictStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsRestrictStatic = this._ddnsRestrictStatic;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._disableForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableForwarding = this._disableForwarding;
    }
    if (this._dnsIntegrityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIntegrityEnable = this._dnsIntegrityEnable;
    }
    if (this._dnsIntegrityFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIntegrityFrequency = this._dnsIntegrityFrequency;
    }
    if (this._dnsIntegrityMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIntegrityMember = this._dnsIntegrityMember;
    }
    if (this._dnsIntegrityVerboseLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIntegrityVerboseLogging = this._dnsIntegrityVerboseLogging;
    }
    if (this._dnssecKeyParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecKeyParams = this._dnssecKeyParams?.internalValue;
    }
    if (this._effectiveCheckNamesPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveCheckNamesPolicy = this._effectiveCheckNamesPolicy;
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
    if (this._lastQueriedAcl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastQueriedAcl = this._lastQueriedAcl?.internalValue;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._memberSoaMnames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberSoaMnames = this._memberSoaMnames?.internalValue;
    }
    if (this._msAdIntegrated !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAdIntegrated = this._msAdIntegrated;
    }
    if (this._msAllowTransfer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAllowTransfer = this._msAllowTransfer?.internalValue;
    }
    if (this._msAllowTransferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.msAllowTransferMode = this._msAllowTransferMode;
    }
    if (this._msDcNsRecordCreation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msDcNsRecordCreation = this._msDcNsRecordCreation?.internalValue;
    }
    if (this._msDdnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.msDdnsMode = this._msDdnsMode;
    }
    if (this._msPrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msPrimaries = this._msPrimaries?.internalValue;
    }
    if (this._msSecondaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msSecondaries = this._msSecondaries?.internalValue;
    }
    if (this._msSyncDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.msSyncDisabled = this._msSyncDisabled;
    }
    if (this._notifyDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDelay = this._notifyDelay;
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
    if (this._removeSubzones !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeSubzones = this._removeSubzones;
    }
    if (this._restartIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIfNeeded = this._restartIfNeeded;
    }
    if (this._scavengingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scavengingSettings = this._scavengingSettings?.internalValue;
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
    if (this._srgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.srgs = this._srgs;
    }
    if (this._updateForwarding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateForwarding = this._updateForwarding?.internalValue;
    }
    if (this._useAllowActiveDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllowActiveDir = this._useAllowActiveDir;
    }
    if (this._useAllowQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllowQuery = this._useAllowQuery;
    }
    if (this._useAllowTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllowTransfer = this._useAllowTransfer;
    }
    if (this._useAllowUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllowUpdate = this._useAllowUpdate;
    }
    if (this._useAllowUpdateForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAllowUpdateForwarding = this._useAllowUpdateForwarding;
    }
    if (this._useCheckNamesPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCheckNamesPolicy = this._useCheckNamesPolicy;
    }
    if (this._useCopyXferToNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCopyXferToNotify = this._useCopyXferToNotify;
    }
    if (this._useDdnsForceCreationTimestampUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsForceCreationTimestampUpdate = this._useDdnsForceCreationTimestampUpdate;
    }
    if (this._useDdnsPatternsRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsPatternsRestriction = this._useDdnsPatternsRestriction;
    }
    if (this._useDdnsPrincipalSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsPrincipalSecurity = this._useDdnsPrincipalSecurity;
    }
    if (this._useDdnsRestrictProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsRestrictProtected = this._useDdnsRestrictProtected;
    }
    if (this._useDdnsRestrictStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsRestrictStatic = this._useDdnsRestrictStatic;
    }
    if (this._useDnssecKeyParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDnssecKeyParams = this._useDnssecKeyParams;
    }
    if (this._useExternalPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.useExternalPrimary = this._useExternalPrimary;
    }
    if (this._useGridZoneTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGridZoneTimer = this._useGridZoneTimer;
    }
    if (this._useNotifyDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNotifyDelay = this._useNotifyDelay;
    }
    if (this._useRecordNamePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecordNamePolicy = this._useRecordNamePolicy;
    }
    if (this._useScavengingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScavengingSettings = this._useScavengingSettings;
    }
    if (this._useSoaEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSoaEmail = this._useSoaEmail;
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

  public set internalValue(value: DataNiosDnsZoneAuthResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowActiveDir.internalValue = undefined;
      this._allowFixedRrsetOrder = undefined;
      this._allowGssTsigForUnderscoreZone = undefined;
      this._allowGssTsigZoneUpdates = undefined;
      this._allowQuery.internalValue = undefined;
      this._allowTransfer.internalValue = undefined;
      this._allowUpdate.internalValue = undefined;
      this._allowUpdateForwarding = undefined;
      this._comment = undefined;
      this._copyXferToNotify = undefined;
      this._createUnderscoreZones = undefined;
      this._ddnsForceCreationTimestampUpdate = undefined;
      this._ddnsPrincipalGroup = undefined;
      this._ddnsPrincipalTracking = undefined;
      this._ddnsRestrictPatterns = undefined;
      this._ddnsRestrictPatternsList = undefined;
      this._ddnsRestrictProtected = undefined;
      this._ddnsRestrictSecure = undefined;
      this._ddnsRestrictStatic = undefined;
      this._disable = undefined;
      this._disableForwarding = undefined;
      this._dnsIntegrityEnable = undefined;
      this._dnsIntegrityFrequency = undefined;
      this._dnsIntegrityMember = undefined;
      this._dnsIntegrityVerboseLogging = undefined;
      this._dnssecKeyParams.internalValue = undefined;
      this._effectiveCheckNamesPolicy = undefined;
      this._extattrs = undefined;
      this._externalPrimaries.internalValue = undefined;
      this._externalSecondaries.internalValue = undefined;
      this._fqdn = undefined;
      this._gridPrimary.internalValue = undefined;
      this._gridSecondaries.internalValue = undefined;
      this._lastQueriedAcl.internalValue = undefined;
      this._locked = undefined;
      this._memberSoaMnames.internalValue = undefined;
      this._msAdIntegrated = undefined;
      this._msAllowTransfer.internalValue = undefined;
      this._msAllowTransferMode = undefined;
      this._msDcNsRecordCreation.internalValue = undefined;
      this._msDdnsMode = undefined;
      this._msPrimaries.internalValue = undefined;
      this._msSecondaries.internalValue = undefined;
      this._msSyncDisabled = undefined;
      this._notifyDelay = undefined;
      this._nsGroup = undefined;
      this._prefix = undefined;
      this._recordNamePolicy = undefined;
      this._removeSubzones = undefined;
      this._restartIfNeeded = undefined;
      this._scavengingSettings.internalValue = undefined;
      this._setSoaSerialNumber = undefined;
      this._soaDefaultTtl = undefined;
      this._soaEmail = undefined;
      this._soaExpire = undefined;
      this._soaNegativeTtl = undefined;
      this._soaRefresh = undefined;
      this._soaRetry = undefined;
      this._soaSerialNumber = undefined;
      this._srgs = undefined;
      this._updateForwarding.internalValue = undefined;
      this._useAllowActiveDir = undefined;
      this._useAllowQuery = undefined;
      this._useAllowTransfer = undefined;
      this._useAllowUpdate = undefined;
      this._useAllowUpdateForwarding = undefined;
      this._useCheckNamesPolicy = undefined;
      this._useCopyXferToNotify = undefined;
      this._useDdnsForceCreationTimestampUpdate = undefined;
      this._useDdnsPatternsRestriction = undefined;
      this._useDdnsPrincipalSecurity = undefined;
      this._useDdnsRestrictProtected = undefined;
      this._useDdnsRestrictStatic = undefined;
      this._useDnssecKeyParams = undefined;
      this._useExternalPrimary = undefined;
      this._useGridZoneTimer = undefined;
      this._useNotifyDelay = undefined;
      this._useRecordNamePolicy = undefined;
      this._useScavengingSettings = undefined;
      this._useSoaEmail = undefined;
      this._view = undefined;
      this._zoneFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowActiveDir.internalValue = value.allowActiveDir;
      this._allowFixedRrsetOrder = value.allowFixedRrsetOrder;
      this._allowGssTsigForUnderscoreZone = value.allowGssTsigForUnderscoreZone;
      this._allowGssTsigZoneUpdates = value.allowGssTsigZoneUpdates;
      this._allowQuery.internalValue = value.allowQuery;
      this._allowTransfer.internalValue = value.allowTransfer;
      this._allowUpdate.internalValue = value.allowUpdate;
      this._allowUpdateForwarding = value.allowUpdateForwarding;
      this._comment = value.comment;
      this._copyXferToNotify = value.copyXferToNotify;
      this._createUnderscoreZones = value.createUnderscoreZones;
      this._ddnsForceCreationTimestampUpdate = value.ddnsForceCreationTimestampUpdate;
      this._ddnsPrincipalGroup = value.ddnsPrincipalGroup;
      this._ddnsPrincipalTracking = value.ddnsPrincipalTracking;
      this._ddnsRestrictPatterns = value.ddnsRestrictPatterns;
      this._ddnsRestrictPatternsList = value.ddnsRestrictPatternsList;
      this._ddnsRestrictProtected = value.ddnsRestrictProtected;
      this._ddnsRestrictSecure = value.ddnsRestrictSecure;
      this._ddnsRestrictStatic = value.ddnsRestrictStatic;
      this._disable = value.disable;
      this._disableForwarding = value.disableForwarding;
      this._dnsIntegrityEnable = value.dnsIntegrityEnable;
      this._dnsIntegrityFrequency = value.dnsIntegrityFrequency;
      this._dnsIntegrityMember = value.dnsIntegrityMember;
      this._dnsIntegrityVerboseLogging = value.dnsIntegrityVerboseLogging;
      this._dnssecKeyParams.internalValue = value.dnssecKeyParams;
      this._effectiveCheckNamesPolicy = value.effectiveCheckNamesPolicy;
      this._extattrs = value.extattrs;
      this._externalPrimaries.internalValue = value.externalPrimaries;
      this._externalSecondaries.internalValue = value.externalSecondaries;
      this._fqdn = value.fqdn;
      this._gridPrimary.internalValue = value.gridPrimary;
      this._gridSecondaries.internalValue = value.gridSecondaries;
      this._lastQueriedAcl.internalValue = value.lastQueriedAcl;
      this._locked = value.locked;
      this._memberSoaMnames.internalValue = value.memberSoaMnames;
      this._msAdIntegrated = value.msAdIntegrated;
      this._msAllowTransfer.internalValue = value.msAllowTransfer;
      this._msAllowTransferMode = value.msAllowTransferMode;
      this._msDcNsRecordCreation.internalValue = value.msDcNsRecordCreation;
      this._msDdnsMode = value.msDdnsMode;
      this._msPrimaries.internalValue = value.msPrimaries;
      this._msSecondaries.internalValue = value.msSecondaries;
      this._msSyncDisabled = value.msSyncDisabled;
      this._notifyDelay = value.notifyDelay;
      this._nsGroup = value.nsGroup;
      this._prefix = value.prefix;
      this._recordNamePolicy = value.recordNamePolicy;
      this._removeSubzones = value.removeSubzones;
      this._restartIfNeeded = value.restartIfNeeded;
      this._scavengingSettings.internalValue = value.scavengingSettings;
      this._setSoaSerialNumber = value.setSoaSerialNumber;
      this._soaDefaultTtl = value.soaDefaultTtl;
      this._soaEmail = value.soaEmail;
      this._soaExpire = value.soaExpire;
      this._soaNegativeTtl = value.soaNegativeTtl;
      this._soaRefresh = value.soaRefresh;
      this._soaRetry = value.soaRetry;
      this._soaSerialNumber = value.soaSerialNumber;
      this._srgs = value.srgs;
      this._updateForwarding.internalValue = value.updateForwarding;
      this._useAllowActiveDir = value.useAllowActiveDir;
      this._useAllowQuery = value.useAllowQuery;
      this._useAllowTransfer = value.useAllowTransfer;
      this._useAllowUpdate = value.useAllowUpdate;
      this._useAllowUpdateForwarding = value.useAllowUpdateForwarding;
      this._useCheckNamesPolicy = value.useCheckNamesPolicy;
      this._useCopyXferToNotify = value.useCopyXferToNotify;
      this._useDdnsForceCreationTimestampUpdate = value.useDdnsForceCreationTimestampUpdate;
      this._useDdnsPatternsRestriction = value.useDdnsPatternsRestriction;
      this._useDdnsPrincipalSecurity = value.useDdnsPrincipalSecurity;
      this._useDdnsRestrictProtected = value.useDdnsRestrictProtected;
      this._useDdnsRestrictStatic = value.useDdnsRestrictStatic;
      this._useDnssecKeyParams = value.useDnssecKeyParams;
      this._useExternalPrimary = value.useExternalPrimary;
      this._useGridZoneTimer = value.useGridZoneTimer;
      this._useNotifyDelay = value.useNotifyDelay;
      this._useRecordNamePolicy = value.useRecordNamePolicy;
      this._useScavengingSettings = value.useScavengingSettings;
      this._useSoaEmail = value.useSoaEmail;
      this._view = value.view;
      this._zoneFormat = value.zoneFormat;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // allow_active_dir - computed: true, optional: true, required: false
  private _allowActiveDir = new DataNiosDnsZoneAuthResultAllowActiveDirList(this, "allow_active_dir", false);
  public get allowActiveDir() {
    return this._allowActiveDir;
  }
  public putAllowActiveDir(value: DataNiosDnsZoneAuthResultAllowActiveDir[] | cdktf.IResolvable) {
    this._allowActiveDir.internalValue = value;
  }
  public resetAllowActiveDir() {
    this._allowActiveDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowActiveDirInput() {
    return this._allowActiveDir.internalValue;
  }

  // allow_fixed_rrset_order - computed: true, optional: true, required: false
  private _allowFixedRrsetOrder?: boolean | cdktf.IResolvable; 
  public get allowFixedRrsetOrder() {
    return this.getBooleanAttribute('allow_fixed_rrset_order');
  }
  public set allowFixedRrsetOrder(value: boolean | cdktf.IResolvable) {
    this._allowFixedRrsetOrder = value;
  }
  public resetAllowFixedRrsetOrder() {
    this._allowFixedRrsetOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFixedRrsetOrderInput() {
    return this._allowFixedRrsetOrder;
  }

  // allow_gss_tsig_for_underscore_zone - computed: true, optional: true, required: false
  private _allowGssTsigForUnderscoreZone?: boolean | cdktf.IResolvable; 
  public get allowGssTsigForUnderscoreZone() {
    return this.getBooleanAttribute('allow_gss_tsig_for_underscore_zone');
  }
  public set allowGssTsigForUnderscoreZone(value: boolean | cdktf.IResolvable) {
    this._allowGssTsigForUnderscoreZone = value;
  }
  public resetAllowGssTsigForUnderscoreZone() {
    this._allowGssTsigForUnderscoreZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGssTsigForUnderscoreZoneInput() {
    return this._allowGssTsigForUnderscoreZone;
  }

  // allow_gss_tsig_zone_updates - computed: true, optional: true, required: false
  private _allowGssTsigZoneUpdates?: boolean | cdktf.IResolvable; 
  public get allowGssTsigZoneUpdates() {
    return this.getBooleanAttribute('allow_gss_tsig_zone_updates');
  }
  public set allowGssTsigZoneUpdates(value: boolean | cdktf.IResolvable) {
    this._allowGssTsigZoneUpdates = value;
  }
  public resetAllowGssTsigZoneUpdates() {
    this._allowGssTsigZoneUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGssTsigZoneUpdatesInput() {
    return this._allowGssTsigZoneUpdates;
  }

  // allow_query - computed: true, optional: true, required: false
  private _allowQuery = new DataNiosDnsZoneAuthResultAllowQueryList(this, "allow_query", false);
  public get allowQuery() {
    return this._allowQuery;
  }
  public putAllowQuery(value: DataNiosDnsZoneAuthResultAllowQuery[] | cdktf.IResolvable) {
    this._allowQuery.internalValue = value;
  }
  public resetAllowQuery() {
    this._allowQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryInput() {
    return this._allowQuery.internalValue;
  }

  // allow_transfer - computed: true, optional: true, required: false
  private _allowTransfer = new DataNiosDnsZoneAuthResultAllowTransferList(this, "allow_transfer", false);
  public get allowTransfer() {
    return this._allowTransfer;
  }
  public putAllowTransfer(value: DataNiosDnsZoneAuthResultAllowTransfer[] | cdktf.IResolvable) {
    this._allowTransfer.internalValue = value;
  }
  public resetAllowTransfer() {
    this._allowTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransferInput() {
    return this._allowTransfer.internalValue;
  }

  // allow_update - computed: true, optional: true, required: false
  private _allowUpdate = new DataNiosDnsZoneAuthResultAllowUpdateList(this, "allow_update", false);
  public get allowUpdate() {
    return this._allowUpdate;
  }
  public putAllowUpdate(value: DataNiosDnsZoneAuthResultAllowUpdate[] | cdktf.IResolvable) {
    this._allowUpdate.internalValue = value;
  }
  public resetAllowUpdate() {
    this._allowUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdateInput() {
    return this._allowUpdate.internalValue;
  }

  // allow_update_forwarding - computed: true, optional: true, required: false
  private _allowUpdateForwarding?: boolean | cdktf.IResolvable; 
  public get allowUpdateForwarding() {
    return this.getBooleanAttribute('allow_update_forwarding');
  }
  public set allowUpdateForwarding(value: boolean | cdktf.IResolvable) {
    this._allowUpdateForwarding = value;
  }
  public resetAllowUpdateForwarding() {
    this._allowUpdateForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUpdateForwardingInput() {
    return this._allowUpdateForwarding;
  }

  // aws_rte53_zone_info - computed: true, optional: false, required: false
  private _awsRte53ZoneInfo = new DataNiosDnsZoneAuthResultAwsRte53ZoneInfoOutputReference(this, "aws_rte53_zone_info");
  public get awsRte53ZoneInfo() {
    return this._awsRte53ZoneInfo;
  }

  // cloud_info - computed: true, optional: false, required: false
  private _cloudInfo = new DataNiosDnsZoneAuthResultCloudInfoOutputReference(this, "cloud_info");
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

  // copy_xfer_to_notify - computed: true, optional: true, required: false
  private _copyXferToNotify?: boolean | cdktf.IResolvable; 
  public get copyXferToNotify() {
    return this.getBooleanAttribute('copy_xfer_to_notify');
  }
  public set copyXferToNotify(value: boolean | cdktf.IResolvable) {
    this._copyXferToNotify = value;
  }
  public resetCopyXferToNotify() {
    this._copyXferToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyXferToNotifyInput() {
    return this._copyXferToNotify;
  }

  // create_ptr_for_bulk_hosts - computed: true, optional: false, required: false
  public get createPtrForBulkHosts() {
    return this.getBooleanAttribute('create_ptr_for_bulk_hosts');
  }

  // create_ptr_for_hosts - computed: true, optional: false, required: false
  public get createPtrForHosts() {
    return this.getBooleanAttribute('create_ptr_for_hosts');
  }

  // create_underscore_zones - computed: true, optional: true, required: false
  private _createUnderscoreZones?: boolean | cdktf.IResolvable; 
  public get createUnderscoreZones() {
    return this.getBooleanAttribute('create_underscore_zones');
  }
  public set createUnderscoreZones(value: boolean | cdktf.IResolvable) {
    this._createUnderscoreZones = value;
  }
  public resetCreateUnderscoreZones() {
    this._createUnderscoreZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createUnderscoreZonesInput() {
    return this._createUnderscoreZones;
  }

  // ddns_force_creation_timestamp_update - computed: true, optional: true, required: false
  private _ddnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable; 
  public get ddnsForceCreationTimestampUpdate() {
    return this.getBooleanAttribute('ddns_force_creation_timestamp_update');
  }
  public set ddnsForceCreationTimestampUpdate(value: boolean | cdktf.IResolvable) {
    this._ddnsForceCreationTimestampUpdate = value;
  }
  public resetDdnsForceCreationTimestampUpdate() {
    this._ddnsForceCreationTimestampUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsForceCreationTimestampUpdateInput() {
    return this._ddnsForceCreationTimestampUpdate;
  }

  // ddns_principal_group - computed: true, optional: true, required: false
  private _ddnsPrincipalGroup?: string; 
  public get ddnsPrincipalGroup() {
    return this.getStringAttribute('ddns_principal_group');
  }
  public set ddnsPrincipalGroup(value: string) {
    this._ddnsPrincipalGroup = value;
  }
  public resetDdnsPrincipalGroup() {
    this._ddnsPrincipalGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalGroupInput() {
    return this._ddnsPrincipalGroup;
  }

  // ddns_principal_tracking - computed: true, optional: true, required: false
  private _ddnsPrincipalTracking?: boolean | cdktf.IResolvable; 
  public get ddnsPrincipalTracking() {
    return this.getBooleanAttribute('ddns_principal_tracking');
  }
  public set ddnsPrincipalTracking(value: boolean | cdktf.IResolvable) {
    this._ddnsPrincipalTracking = value;
  }
  public resetDdnsPrincipalTracking() {
    this._ddnsPrincipalTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPrincipalTrackingInput() {
    return this._ddnsPrincipalTracking;
  }

  // ddns_restrict_patterns - computed: true, optional: true, required: false
  private _ddnsRestrictPatterns?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictPatterns() {
    return this.getBooleanAttribute('ddns_restrict_patterns');
  }
  public set ddnsRestrictPatterns(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictPatterns = value;
  }
  public resetDdnsRestrictPatterns() {
    this._ddnsRestrictPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictPatternsInput() {
    return this._ddnsRestrictPatterns;
  }

  // ddns_restrict_patterns_list - computed: true, optional: true, required: false
  private _ddnsRestrictPatternsList?: string[]; 
  public get ddnsRestrictPatternsList() {
    return this.getListAttribute('ddns_restrict_patterns_list');
  }
  public set ddnsRestrictPatternsList(value: string[]) {
    this._ddnsRestrictPatternsList = value;
  }
  public resetDdnsRestrictPatternsList() {
    this._ddnsRestrictPatternsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictPatternsListInput() {
    return this._ddnsRestrictPatternsList;
  }

  // ddns_restrict_protected - computed: true, optional: true, required: false
  private _ddnsRestrictProtected?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictProtected() {
    return this.getBooleanAttribute('ddns_restrict_protected');
  }
  public set ddnsRestrictProtected(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictProtected = value;
  }
  public resetDdnsRestrictProtected() {
    this._ddnsRestrictProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictProtectedInput() {
    return this._ddnsRestrictProtected;
  }

  // ddns_restrict_secure - computed: true, optional: true, required: false
  private _ddnsRestrictSecure?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictSecure() {
    return this.getBooleanAttribute('ddns_restrict_secure');
  }
  public set ddnsRestrictSecure(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictSecure = value;
  }
  public resetDdnsRestrictSecure() {
    this._ddnsRestrictSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictSecureInput() {
    return this._ddnsRestrictSecure;
  }

  // ddns_restrict_static - computed: true, optional: true, required: false
  private _ddnsRestrictStatic?: boolean | cdktf.IResolvable; 
  public get ddnsRestrictStatic() {
    return this.getBooleanAttribute('ddns_restrict_static');
  }
  public set ddnsRestrictStatic(value: boolean | cdktf.IResolvable) {
    this._ddnsRestrictStatic = value;
  }
  public resetDdnsRestrictStatic() {
    this._ddnsRestrictStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsRestrictStaticInput() {
    return this._ddnsRestrictStatic;
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

  // disable_forwarding - computed: true, optional: true, required: false
  private _disableForwarding?: boolean | cdktf.IResolvable; 
  public get disableForwarding() {
    return this.getBooleanAttribute('disable_forwarding');
  }
  public set disableForwarding(value: boolean | cdktf.IResolvable) {
    this._disableForwarding = value;
  }
  public resetDisableForwarding() {
    this._disableForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForwardingInput() {
    return this._disableForwarding;
  }

  // display_domain - computed: true, optional: false, required: false
  public get displayDomain() {
    return this.getStringAttribute('display_domain');
  }

  // dns_fqdn - computed: true, optional: false, required: false
  public get dnsFqdn() {
    return this.getStringAttribute('dns_fqdn');
  }

  // dns_integrity_enable - computed: true, optional: true, required: false
  private _dnsIntegrityEnable?: boolean | cdktf.IResolvable; 
  public get dnsIntegrityEnable() {
    return this.getBooleanAttribute('dns_integrity_enable');
  }
  public set dnsIntegrityEnable(value: boolean | cdktf.IResolvable) {
    this._dnsIntegrityEnable = value;
  }
  public resetDnsIntegrityEnable() {
    this._dnsIntegrityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIntegrityEnableInput() {
    return this._dnsIntegrityEnable;
  }

  // dns_integrity_frequency - computed: true, optional: true, required: false
  private _dnsIntegrityFrequency?: number; 
  public get dnsIntegrityFrequency() {
    return this.getNumberAttribute('dns_integrity_frequency');
  }
  public set dnsIntegrityFrequency(value: number) {
    this._dnsIntegrityFrequency = value;
  }
  public resetDnsIntegrityFrequency() {
    this._dnsIntegrityFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIntegrityFrequencyInput() {
    return this._dnsIntegrityFrequency;
  }

  // dns_integrity_member - computed: true, optional: true, required: false
  private _dnsIntegrityMember?: string; 
  public get dnsIntegrityMember() {
    return this.getStringAttribute('dns_integrity_member');
  }
  public set dnsIntegrityMember(value: string) {
    this._dnsIntegrityMember = value;
  }
  public resetDnsIntegrityMember() {
    this._dnsIntegrityMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIntegrityMemberInput() {
    return this._dnsIntegrityMember;
  }

  // dns_integrity_verbose_logging - computed: true, optional: true, required: false
  private _dnsIntegrityVerboseLogging?: boolean | cdktf.IResolvable; 
  public get dnsIntegrityVerboseLogging() {
    return this.getBooleanAttribute('dns_integrity_verbose_logging');
  }
  public set dnsIntegrityVerboseLogging(value: boolean | cdktf.IResolvable) {
    this._dnsIntegrityVerboseLogging = value;
  }
  public resetDnsIntegrityVerboseLogging() {
    this._dnsIntegrityVerboseLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIntegrityVerboseLoggingInput() {
    return this._dnsIntegrityVerboseLogging;
  }

  // dns_soa_email - computed: true, optional: false, required: false
  public get dnsSoaEmail() {
    return this.getStringAttribute('dns_soa_email');
  }

  // dnssec_key_params - computed: true, optional: true, required: false
  private _dnssecKeyParams = new DataNiosDnsZoneAuthResultDnssecKeyParamsOutputReference(this, "dnssec_key_params");
  public get dnssecKeyParams() {
    return this._dnssecKeyParams;
  }
  public putDnssecKeyParams(value: DataNiosDnsZoneAuthResultDnssecKeyParams) {
    this._dnssecKeyParams.internalValue = value;
  }
  public resetDnssecKeyParams() {
    this._dnssecKeyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecKeyParamsInput() {
    return this._dnssecKeyParams.internalValue;
  }

  // dnssec_keys - computed: true, optional: false, required: false
  private _dnssecKeys = new DataNiosDnsZoneAuthResultDnssecKeysList(this, "dnssec_keys", false);
  public get dnssecKeys() {
    return this._dnssecKeys;
  }

  // dnssec_ksk_rollover_date - computed: true, optional: false, required: false
  public get dnssecKskRolloverDate() {
    return this.getNumberAttribute('dnssec_ksk_rollover_date');
  }

  // dnssec_zsk_rollover_date - computed: true, optional: false, required: false
  public get dnssecZskRolloverDate() {
    return this.getNumberAttribute('dnssec_zsk_rollover_date');
  }

  // do_host_abstraction - computed: true, optional: false, required: false
  public get doHostAbstraction() {
    return this.getBooleanAttribute('do_host_abstraction');
  }

  // effective_check_names_policy - computed: true, optional: true, required: false
  private _effectiveCheckNamesPolicy?: string; 
  public get effectiveCheckNamesPolicy() {
    return this.getStringAttribute('effective_check_names_policy');
  }
  public set effectiveCheckNamesPolicy(value: string) {
    this._effectiveCheckNamesPolicy = value;
  }
  public resetEffectiveCheckNamesPolicy() {
    this._effectiveCheckNamesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveCheckNamesPolicyInput() {
    return this._effectiveCheckNamesPolicy;
  }

  // effective_record_name_policy - computed: true, optional: false, required: false
  public get effectiveRecordNamePolicy() {
    return this.getStringAttribute('effective_record_name_policy');
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
  private _externalPrimaries = new DataNiosDnsZoneAuthResultExternalPrimariesList(this, "external_primaries", false);
  public get externalPrimaries() {
    return this._externalPrimaries;
  }
  public putExternalPrimaries(value: DataNiosDnsZoneAuthResultExternalPrimaries[] | cdktf.IResolvable) {
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
  private _externalSecondaries = new DataNiosDnsZoneAuthResultExternalSecondariesList(this, "external_secondaries", false);
  public get externalSecondaries() {
    return this._externalSecondaries;
  }
  public putExternalSecondaries(value: DataNiosDnsZoneAuthResultExternalSecondaries[] | cdktf.IResolvable) {
    this._externalSecondaries.internalValue = value;
  }
  public resetExternalSecondaries() {
    this._externalSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSecondariesInput() {
    return this._externalSecondaries.internalValue;
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
  private _gridPrimary = new DataNiosDnsZoneAuthResultGridPrimaryList(this, "grid_primary", false);
  public get gridPrimary() {
    return this._gridPrimary;
  }
  public putGridPrimary(value: DataNiosDnsZoneAuthResultGridPrimary[] | cdktf.IResolvable) {
    this._gridPrimary.internalValue = value;
  }
  public resetGridPrimary() {
    this._gridPrimary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridPrimaryInput() {
    return this._gridPrimary.internalValue;
  }

  // grid_primary_shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get gridPrimarySharedWithMsParentDelegation() {
    return this.getBooleanAttribute('grid_primary_shared_with_ms_parent_delegation');
  }

  // grid_secondaries - computed: true, optional: true, required: false
  private _gridSecondaries = new DataNiosDnsZoneAuthResultGridSecondariesList(this, "grid_secondaries", false);
  public get gridSecondaries() {
    return this._gridSecondaries;
  }
  public putGridSecondaries(value: DataNiosDnsZoneAuthResultGridSecondaries[] | cdktf.IResolvable) {
    this._gridSecondaries.internalValue = value;
  }
  public resetGridSecondaries() {
    this._gridSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridSecondariesInput() {
    return this._gridSecondaries.internalValue;
  }

  // import_from - computed: true, optional: false, required: false
  public get importFromAttribute() {
    return this.getStringAttribute('import_from');
  }

  // is_dnssec_enabled - computed: true, optional: false, required: false
  public get isDnssecEnabled() {
    return this.getBooleanAttribute('is_dnssec_enabled');
  }

  // is_dnssec_signed - computed: true, optional: false, required: false
  public get isDnssecSigned() {
    return this.getBooleanAttribute('is_dnssec_signed');
  }

  // is_multimaster - computed: true, optional: false, required: false
  public get isMultimaster() {
    return this.getBooleanAttribute('is_multimaster');
  }

  // last_queried - computed: true, optional: false, required: false
  public get lastQueried() {
    return this.getNumberAttribute('last_queried');
  }

  // last_queried_acl - computed: true, optional: true, required: false
  private _lastQueriedAcl = new DataNiosDnsZoneAuthResultLastQueriedAclList(this, "last_queried_acl", false);
  public get lastQueriedAcl() {
    return this._lastQueriedAcl;
  }
  public putLastQueriedAcl(value: DataNiosDnsZoneAuthResultLastQueriedAcl[] | cdktf.IResolvable) {
    this._lastQueriedAcl.internalValue = value;
  }
  public resetLastQueriedAcl() {
    this._lastQueriedAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastQueriedAclInput() {
    return this._lastQueriedAcl.internalValue;
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

  // member_soa_mnames - computed: true, optional: true, required: false
  private _memberSoaMnames = new DataNiosDnsZoneAuthResultMemberSoaMnamesList(this, "member_soa_mnames", false);
  public get memberSoaMnames() {
    return this._memberSoaMnames;
  }
  public putMemberSoaMnames(value: DataNiosDnsZoneAuthResultMemberSoaMnames[] | cdktf.IResolvable) {
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
  private _memberSoaSerials = new DataNiosDnsZoneAuthResultMemberSoaSerialsList(this, "member_soa_serials", false);
  public get memberSoaSerials() {
    return this._memberSoaSerials;
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

  // ms_allow_transfer - computed: true, optional: true, required: false
  private _msAllowTransfer = new DataNiosDnsZoneAuthResultMsAllowTransferList(this, "ms_allow_transfer", false);
  public get msAllowTransfer() {
    return this._msAllowTransfer;
  }
  public putMsAllowTransfer(value: DataNiosDnsZoneAuthResultMsAllowTransfer[] | cdktf.IResolvable) {
    this._msAllowTransfer.internalValue = value;
  }
  public resetMsAllowTransfer() {
    this._msAllowTransfer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAllowTransferInput() {
    return this._msAllowTransfer.internalValue;
  }

  // ms_allow_transfer_mode - computed: true, optional: true, required: false
  private _msAllowTransferMode?: string; 
  public get msAllowTransferMode() {
    return this.getStringAttribute('ms_allow_transfer_mode');
  }
  public set msAllowTransferMode(value: string) {
    this._msAllowTransferMode = value;
  }
  public resetMsAllowTransferMode() {
    this._msAllowTransferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAllowTransferModeInput() {
    return this._msAllowTransferMode;
  }

  // ms_dc_ns_record_creation - computed: true, optional: true, required: false
  private _msDcNsRecordCreation = new DataNiosDnsZoneAuthResultMsDcNsRecordCreationList(this, "ms_dc_ns_record_creation", false);
  public get msDcNsRecordCreation() {
    return this._msDcNsRecordCreation;
  }
  public putMsDcNsRecordCreation(value: DataNiosDnsZoneAuthResultMsDcNsRecordCreation[] | cdktf.IResolvable) {
    this._msDcNsRecordCreation.internalValue = value;
  }
  public resetMsDcNsRecordCreation() {
    this._msDcNsRecordCreation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msDcNsRecordCreationInput() {
    return this._msDcNsRecordCreation.internalValue;
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

  // ms_primaries - computed: true, optional: true, required: false
  private _msPrimaries = new DataNiosDnsZoneAuthResultMsPrimariesList(this, "ms_primaries", false);
  public get msPrimaries() {
    return this._msPrimaries;
  }
  public putMsPrimaries(value: DataNiosDnsZoneAuthResultMsPrimaries[] | cdktf.IResolvable) {
    this._msPrimaries.internalValue = value;
  }
  public resetMsPrimaries() {
    this._msPrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msPrimariesInput() {
    return this._msPrimaries.internalValue;
  }

  // ms_read_only - computed: true, optional: false, required: false
  public get msReadOnly() {
    return this.getBooleanAttribute('ms_read_only');
  }

  // ms_secondaries - computed: true, optional: true, required: false
  private _msSecondaries = new DataNiosDnsZoneAuthResultMsSecondariesList(this, "ms_secondaries", false);
  public get msSecondaries() {
    return this._msSecondaries;
  }
  public putMsSecondaries(value: DataNiosDnsZoneAuthResultMsSecondaries[] | cdktf.IResolvable) {
    this._msSecondaries.internalValue = value;
  }
  public resetMsSecondaries() {
    this._msSecondaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msSecondariesInput() {
    return this._msSecondaries.internalValue;
  }

  // ms_sync_disabled - computed: true, optional: true, required: false
  private _msSyncDisabled?: boolean | cdktf.IResolvable; 
  public get msSyncDisabled() {
    return this.getBooleanAttribute('ms_sync_disabled');
  }
  public set msSyncDisabled(value: boolean | cdktf.IResolvable) {
    this._msSyncDisabled = value;
  }
  public resetMsSyncDisabled() {
    this._msSyncDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msSyncDisabledInput() {
    return this._msSyncDisabled;
  }

  // ms_sync_master_name - computed: true, optional: false, required: false
  public get msSyncMasterName() {
    return this.getStringAttribute('ms_sync_master_name');
  }

  // network_associations - computed: true, optional: false, required: false
  public get networkAssociations() {
    return this.getListAttribute('network_associations');
  }

  // network_view - computed: true, optional: false, required: false
  public get networkView() {
    return this.getStringAttribute('network_view');
  }

  // notify_delay - computed: true, optional: true, required: false
  private _notifyDelay?: number; 
  public get notifyDelay() {
    return this.getNumberAttribute('notify_delay');
  }
  public set notifyDelay(value: number) {
    this._notifyDelay = value;
  }
  public resetNotifyDelay() {
    this._notifyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDelayInput() {
    return this._notifyDelay;
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

  // records_monitored - computed: true, optional: false, required: false
  public get recordsMonitored() {
    return this.getBooleanAttribute('records_monitored');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // remove_subzones - computed: true, optional: true, required: false
  private _removeSubzones?: boolean | cdktf.IResolvable; 
  public get removeSubzones() {
    return this.getBooleanAttribute('remove_subzones');
  }
  public set removeSubzones(value: boolean | cdktf.IResolvable) {
    this._removeSubzones = value;
  }
  public resetRemoveSubzones() {
    this._removeSubzones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSubzonesInput() {
    return this._removeSubzones;
  }

  // restart_if_needed - computed: true, optional: true, required: false
  private _restartIfNeeded?: boolean | cdktf.IResolvable; 
  public get restartIfNeeded() {
    return this.getBooleanAttribute('restart_if_needed');
  }
  public set restartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._restartIfNeeded = value;
  }
  public resetRestartIfNeeded() {
    this._restartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIfNeededInput() {
    return this._restartIfNeeded;
  }

  // rr_not_queried_enabled_time - computed: true, optional: false, required: false
  public get rrNotQueriedEnabledTime() {
    return this.getNumberAttribute('rr_not_queried_enabled_time');
  }

  // scavenging_settings - computed: true, optional: true, required: false
  private _scavengingSettings = new DataNiosDnsZoneAuthResultScavengingSettingsOutputReference(this, "scavenging_settings");
  public get scavengingSettings() {
    return this._scavengingSettings;
  }
  public putScavengingSettings(value: DataNiosDnsZoneAuthResultScavengingSettings) {
    this._scavengingSettings.internalValue = value;
  }
  public resetScavengingSettings() {
    this._scavengingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scavengingSettingsInput() {
    return this._scavengingSettings.internalValue;
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

  // srgs - computed: true, optional: true, required: false
  private _srgs?: string[]; 
  public get srgs() {
    return this.getListAttribute('srgs');
  }
  public set srgs(value: string[]) {
    this._srgs = value;
  }
  public resetSrgs() {
    this._srgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srgsInput() {
    return this._srgs;
  }

  // update_forwarding - computed: true, optional: true, required: false
  private _updateForwarding = new DataNiosDnsZoneAuthResultUpdateForwardingList(this, "update_forwarding", false);
  public get updateForwarding() {
    return this._updateForwarding;
  }
  public putUpdateForwarding(value: DataNiosDnsZoneAuthResultUpdateForwarding[] | cdktf.IResolvable) {
    this._updateForwarding.internalValue = value;
  }
  public resetUpdateForwarding() {
    this._updateForwarding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateForwardingInput() {
    return this._updateForwarding.internalValue;
  }

  // use_allow_active_dir - computed: true, optional: true, required: false
  private _useAllowActiveDir?: boolean | cdktf.IResolvable; 
  public get useAllowActiveDir() {
    return this.getBooleanAttribute('use_allow_active_dir');
  }
  public set useAllowActiveDir(value: boolean | cdktf.IResolvable) {
    this._useAllowActiveDir = value;
  }
  public resetUseAllowActiveDir() {
    this._useAllowActiveDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllowActiveDirInput() {
    return this._useAllowActiveDir;
  }

  // use_allow_query - computed: true, optional: true, required: false
  private _useAllowQuery?: boolean | cdktf.IResolvable; 
  public get useAllowQuery() {
    return this.getBooleanAttribute('use_allow_query');
  }
  public set useAllowQuery(value: boolean | cdktf.IResolvable) {
    this._useAllowQuery = value;
  }
  public resetUseAllowQuery() {
    this._useAllowQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllowQueryInput() {
    return this._useAllowQuery;
  }

  // use_allow_transfer - computed: true, optional: true, required: false
  private _useAllowTransfer?: boolean | cdktf.IResolvable; 
  public get useAllowTransfer() {
    return this.getBooleanAttribute('use_allow_transfer');
  }
  public set useAllowTransfer(value: boolean | cdktf.IResolvable) {
    this._useAllowTransfer = value;
  }
  public resetUseAllowTransfer() {
    this._useAllowTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllowTransferInput() {
    return this._useAllowTransfer;
  }

  // use_allow_update - computed: true, optional: true, required: false
  private _useAllowUpdate?: boolean | cdktf.IResolvable; 
  public get useAllowUpdate() {
    return this.getBooleanAttribute('use_allow_update');
  }
  public set useAllowUpdate(value: boolean | cdktf.IResolvable) {
    this._useAllowUpdate = value;
  }
  public resetUseAllowUpdate() {
    this._useAllowUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllowUpdateInput() {
    return this._useAllowUpdate;
  }

  // use_allow_update_forwarding - computed: true, optional: true, required: false
  private _useAllowUpdateForwarding?: boolean | cdktf.IResolvable; 
  public get useAllowUpdateForwarding() {
    return this.getBooleanAttribute('use_allow_update_forwarding');
  }
  public set useAllowUpdateForwarding(value: boolean | cdktf.IResolvable) {
    this._useAllowUpdateForwarding = value;
  }
  public resetUseAllowUpdateForwarding() {
    this._useAllowUpdateForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAllowUpdateForwardingInput() {
    return this._useAllowUpdateForwarding;
  }

  // use_check_names_policy - computed: true, optional: true, required: false
  private _useCheckNamesPolicy?: boolean | cdktf.IResolvable; 
  public get useCheckNamesPolicy() {
    return this.getBooleanAttribute('use_check_names_policy');
  }
  public set useCheckNamesPolicy(value: boolean | cdktf.IResolvable) {
    this._useCheckNamesPolicy = value;
  }
  public resetUseCheckNamesPolicy() {
    this._useCheckNamesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCheckNamesPolicyInput() {
    return this._useCheckNamesPolicy;
  }

  // use_copy_xfer_to_notify - computed: true, optional: true, required: false
  private _useCopyXferToNotify?: boolean | cdktf.IResolvable; 
  public get useCopyXferToNotify() {
    return this.getBooleanAttribute('use_copy_xfer_to_notify');
  }
  public set useCopyXferToNotify(value: boolean | cdktf.IResolvable) {
    this._useCopyXferToNotify = value;
  }
  public resetUseCopyXferToNotify() {
    this._useCopyXferToNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCopyXferToNotifyInput() {
    return this._useCopyXferToNotify;
  }

  // use_ddns_force_creation_timestamp_update - computed: true, optional: true, required: false
  private _useDdnsForceCreationTimestampUpdate?: boolean | cdktf.IResolvable; 
  public get useDdnsForceCreationTimestampUpdate() {
    return this.getBooleanAttribute('use_ddns_force_creation_timestamp_update');
  }
  public set useDdnsForceCreationTimestampUpdate(value: boolean | cdktf.IResolvable) {
    this._useDdnsForceCreationTimestampUpdate = value;
  }
  public resetUseDdnsForceCreationTimestampUpdate() {
    this._useDdnsForceCreationTimestampUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsForceCreationTimestampUpdateInput() {
    return this._useDdnsForceCreationTimestampUpdate;
  }

  // use_ddns_patterns_restriction - computed: true, optional: true, required: false
  private _useDdnsPatternsRestriction?: boolean | cdktf.IResolvable; 
  public get useDdnsPatternsRestriction() {
    return this.getBooleanAttribute('use_ddns_patterns_restriction');
  }
  public set useDdnsPatternsRestriction(value: boolean | cdktf.IResolvable) {
    this._useDdnsPatternsRestriction = value;
  }
  public resetUseDdnsPatternsRestriction() {
    this._useDdnsPatternsRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsPatternsRestrictionInput() {
    return this._useDdnsPatternsRestriction;
  }

  // use_ddns_principal_security - computed: true, optional: true, required: false
  private _useDdnsPrincipalSecurity?: boolean | cdktf.IResolvable; 
  public get useDdnsPrincipalSecurity() {
    return this.getBooleanAttribute('use_ddns_principal_security');
  }
  public set useDdnsPrincipalSecurity(value: boolean | cdktf.IResolvable) {
    this._useDdnsPrincipalSecurity = value;
  }
  public resetUseDdnsPrincipalSecurity() {
    this._useDdnsPrincipalSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsPrincipalSecurityInput() {
    return this._useDdnsPrincipalSecurity;
  }

  // use_ddns_restrict_protected - computed: true, optional: true, required: false
  private _useDdnsRestrictProtected?: boolean | cdktf.IResolvable; 
  public get useDdnsRestrictProtected() {
    return this.getBooleanAttribute('use_ddns_restrict_protected');
  }
  public set useDdnsRestrictProtected(value: boolean | cdktf.IResolvable) {
    this._useDdnsRestrictProtected = value;
  }
  public resetUseDdnsRestrictProtected() {
    this._useDdnsRestrictProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsRestrictProtectedInput() {
    return this._useDdnsRestrictProtected;
  }

  // use_ddns_restrict_static - computed: true, optional: true, required: false
  private _useDdnsRestrictStatic?: boolean | cdktf.IResolvable; 
  public get useDdnsRestrictStatic() {
    return this.getBooleanAttribute('use_ddns_restrict_static');
  }
  public set useDdnsRestrictStatic(value: boolean | cdktf.IResolvable) {
    this._useDdnsRestrictStatic = value;
  }
  public resetUseDdnsRestrictStatic() {
    this._useDdnsRestrictStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsRestrictStaticInput() {
    return this._useDdnsRestrictStatic;
  }

  // use_dnssec_key_params - computed: true, optional: true, required: false
  private _useDnssecKeyParams?: boolean | cdktf.IResolvable; 
  public get useDnssecKeyParams() {
    return this.getBooleanAttribute('use_dnssec_key_params');
  }
  public set useDnssecKeyParams(value: boolean | cdktf.IResolvable) {
    this._useDnssecKeyParams = value;
  }
  public resetUseDnssecKeyParams() {
    this._useDnssecKeyParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnssecKeyParamsInput() {
    return this._useDnssecKeyParams;
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

  // use_import_from - computed: true, optional: false, required: false
  public get useImportFrom() {
    return this.getBooleanAttribute('use_import_from');
  }

  // use_notify_delay - computed: true, optional: true, required: false
  private _useNotifyDelay?: boolean | cdktf.IResolvable; 
  public get useNotifyDelay() {
    return this.getBooleanAttribute('use_notify_delay');
  }
  public set useNotifyDelay(value: boolean | cdktf.IResolvable) {
    this._useNotifyDelay = value;
  }
  public resetUseNotifyDelay() {
    this._useNotifyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNotifyDelayInput() {
    return this._useNotifyDelay;
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

  // use_scavenging_settings - computed: true, optional: true, required: false
  private _useScavengingSettings?: boolean | cdktf.IResolvable; 
  public get useScavengingSettings() {
    return this.getBooleanAttribute('use_scavenging_settings');
  }
  public set useScavengingSettings(value: boolean | cdktf.IResolvable) {
    this._useScavengingSettings = value;
  }
  public resetUseScavengingSettings() {
    this._useScavengingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScavengingSettingsInput() {
    return this._useScavengingSettings;
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

  // zone_not_queried_enabled_time - computed: true, optional: false, required: false
  public get zoneNotQueriedEnabledTime() {
    return this.getNumberAttribute('zone_not_queried_enabled_time');
  }
}

export class DataNiosDnsZoneAuthResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDnsZoneAuthResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDnsZoneAuthResultOutputReference {
    return new DataNiosDnsZoneAuthResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth nios_dns_zone_auth}
*/
export class DataNiosDnsZoneAuth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDnsZoneAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDnsZoneAuth to import
  * @param importFromId The id of the existing DataNiosDnsZoneAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDnsZoneAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dns_zone_auth nios_dns_zone_auth} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDnsZoneAuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDnsZoneAuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_auth',
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
  private _result = new DataNiosDnsZoneAuthResultList(this, "result", false);
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
