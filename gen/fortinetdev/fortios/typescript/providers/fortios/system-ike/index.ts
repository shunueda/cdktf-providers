// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_keypair_cache SystemIke#dh_keypair_cache}
  */
  readonly dhKeypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_keypair_count SystemIke#dh_keypair_count}
  */
  readonly dhKeypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_keypair_throttle SystemIke#dh_keypair_throttle}
  */
  readonly dhKeypairThrottle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_mode SystemIke#dh_mode}
  */
  readonly dhMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_multiprocess SystemIke#dh_multiprocess}
  */
  readonly dhMultiprocess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_worker_count SystemIke#dh_worker_count}
  */
  readonly dhWorkerCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#embryonic_limit SystemIke#embryonic_limit}
  */
  readonly embryonicLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#get_all_tables SystemIke#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#id SystemIke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#vdomparam SystemIke#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * dh_group_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_1 SystemIke#dh_group_1}
  */
  readonly dhGroup1?: SystemIkeDhGroup1;
  /**
  * dh_group_14 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_14 SystemIke#dh_group_14}
  */
  readonly dhGroup14?: SystemIkeDhGroup14;
  /**
  * dh_group_15 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_15 SystemIke#dh_group_15}
  */
  readonly dhGroup15?: SystemIkeDhGroup15;
  /**
  * dh_group_16 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_16 SystemIke#dh_group_16}
  */
  readonly dhGroup16?: SystemIkeDhGroup16;
  /**
  * dh_group_17 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_17 SystemIke#dh_group_17}
  */
  readonly dhGroup17?: SystemIkeDhGroup17;
  /**
  * dh_group_18 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_18 SystemIke#dh_group_18}
  */
  readonly dhGroup18?: SystemIkeDhGroup18;
  /**
  * dh_group_19 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_19 SystemIke#dh_group_19}
  */
  readonly dhGroup19?: SystemIkeDhGroup19;
  /**
  * dh_group_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_2 SystemIke#dh_group_2}
  */
  readonly dhGroup2?: SystemIkeDhGroup2;
  /**
  * dh_group_20 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_20 SystemIke#dh_group_20}
  */
  readonly dhGroup20?: SystemIkeDhGroup20;
  /**
  * dh_group_21 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_21 SystemIke#dh_group_21}
  */
  readonly dhGroup21?: SystemIkeDhGroup21;
  /**
  * dh_group_27 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_27 SystemIke#dh_group_27}
  */
  readonly dhGroup27?: SystemIkeDhGroup27;
  /**
  * dh_group_28 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_28 SystemIke#dh_group_28}
  */
  readonly dhGroup28?: SystemIkeDhGroup28;
  /**
  * dh_group_29 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_29 SystemIke#dh_group_29}
  */
  readonly dhGroup29?: SystemIkeDhGroup29;
  /**
  * dh_group_30 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_30 SystemIke#dh_group_30}
  */
  readonly dhGroup30?: SystemIkeDhGroup30;
  /**
  * dh_group_31 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_31 SystemIke#dh_group_31}
  */
  readonly dhGroup31?: SystemIkeDhGroup31;
  /**
  * dh_group_32 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_32 SystemIke#dh_group_32}
  */
  readonly dhGroup32?: SystemIkeDhGroup32;
  /**
  * dh_group_5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#dh_group_5 SystemIke#dh_group_5}
  */
  readonly dhGroup5?: SystemIkeDhGroup5;
}
export interface SystemIkeDhGroup1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup1ToTerraform(struct?: SystemIkeDhGroup1OutputReference | SystemIkeDhGroup1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup1ToHclTerraform(struct?: SystemIkeDhGroup1OutputReference | SystemIkeDhGroup1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup14 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup14ToTerraform(struct?: SystemIkeDhGroup14OutputReference | SystemIkeDhGroup14): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup14ToHclTerraform(struct?: SystemIkeDhGroup14OutputReference | SystemIkeDhGroup14): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup14OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup14 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup14 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup15 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup15ToTerraform(struct?: SystemIkeDhGroup15OutputReference | SystemIkeDhGroup15): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup15ToHclTerraform(struct?: SystemIkeDhGroup15OutputReference | SystemIkeDhGroup15): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup15OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup15 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup15 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup16 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup16ToTerraform(struct?: SystemIkeDhGroup16OutputReference | SystemIkeDhGroup16): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup16ToHclTerraform(struct?: SystemIkeDhGroup16OutputReference | SystemIkeDhGroup16): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup16OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup16 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup16 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup17 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup17ToTerraform(struct?: SystemIkeDhGroup17OutputReference | SystemIkeDhGroup17): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup17ToHclTerraform(struct?: SystemIkeDhGroup17OutputReference | SystemIkeDhGroup17): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup17OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup17 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup17 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup18 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup18ToTerraform(struct?: SystemIkeDhGroup18OutputReference | SystemIkeDhGroup18): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup18ToHclTerraform(struct?: SystemIkeDhGroup18OutputReference | SystemIkeDhGroup18): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup18OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup18 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup18 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup19 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup19ToTerraform(struct?: SystemIkeDhGroup19OutputReference | SystemIkeDhGroup19): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup19ToHclTerraform(struct?: SystemIkeDhGroup19OutputReference | SystemIkeDhGroup19): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup19OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup19 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup19 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup2ToTerraform(struct?: SystemIkeDhGroup2OutputReference | SystemIkeDhGroup2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup2ToHclTerraform(struct?: SystemIkeDhGroup2OutputReference | SystemIkeDhGroup2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup20 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup20ToTerraform(struct?: SystemIkeDhGroup20OutputReference | SystemIkeDhGroup20): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup20ToHclTerraform(struct?: SystemIkeDhGroup20OutputReference | SystemIkeDhGroup20): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup20OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup20 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup20 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup21 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup21ToTerraform(struct?: SystemIkeDhGroup21OutputReference | SystemIkeDhGroup21): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup21ToHclTerraform(struct?: SystemIkeDhGroup21OutputReference | SystemIkeDhGroup21): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup21OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup21 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup21 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup27 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup27ToTerraform(struct?: SystemIkeDhGroup27OutputReference | SystemIkeDhGroup27): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup27ToHclTerraform(struct?: SystemIkeDhGroup27OutputReference | SystemIkeDhGroup27): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup27OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup27 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup27 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup28 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup28ToTerraform(struct?: SystemIkeDhGroup28OutputReference | SystemIkeDhGroup28): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup28ToHclTerraform(struct?: SystemIkeDhGroup28OutputReference | SystemIkeDhGroup28): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup28OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup28 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup28 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup29 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup29ToTerraform(struct?: SystemIkeDhGroup29OutputReference | SystemIkeDhGroup29): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup29ToHclTerraform(struct?: SystemIkeDhGroup29OutputReference | SystemIkeDhGroup29): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup29OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup29 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup29 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup30 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup30ToTerraform(struct?: SystemIkeDhGroup30OutputReference | SystemIkeDhGroup30): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup30ToHclTerraform(struct?: SystemIkeDhGroup30OutputReference | SystemIkeDhGroup30): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup30OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup30 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup30 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup31 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup31ToTerraform(struct?: SystemIkeDhGroup31OutputReference | SystemIkeDhGroup31): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup31ToHclTerraform(struct?: SystemIkeDhGroup31OutputReference | SystemIkeDhGroup31): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup31OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup31 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup31 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup32 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup32ToTerraform(struct?: SystemIkeDhGroup32OutputReference | SystemIkeDhGroup32): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup32ToHclTerraform(struct?: SystemIkeDhGroup32OutputReference | SystemIkeDhGroup32): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup32OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup32 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup32 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SystemIkeDhGroup5 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_cache SystemIke#keypair_cache}
  */
  readonly keypairCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#keypair_count SystemIke#keypair_count}
  */
  readonly keypairCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#mode SystemIke#mode}
  */
  readonly mode?: string;
}

export function systemIkeDhGroup5ToTerraform(struct?: SystemIkeDhGroup5OutputReference | SystemIkeDhGroup5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keypair_cache: cdktf.stringToTerraform(struct!.keypairCache),
    keypair_count: cdktf.numberToTerraform(struct!.keypairCount),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function systemIkeDhGroup5ToHclTerraform(struct?: SystemIkeDhGroup5OutputReference | SystemIkeDhGroup5): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keypair_cache: {
      value: cdktf.stringToHclTerraform(struct!.keypairCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_count: {
      value: cdktf.numberToHclTerraform(struct!.keypairCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIkeDhGroup5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIkeDhGroup5 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keypairCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCache = this._keypairCache;
    }
    if (this._keypairCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairCount = this._keypairCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIkeDhGroup5 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keypairCache = undefined;
      this._keypairCount = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keypairCache = value.keypairCache;
      this._keypairCount = value.keypairCount;
      this._mode = value.mode;
    }
  }

  // keypair_cache - computed: true, optional: true, required: false
  private _keypairCache?: string; 
  public get keypairCache() {
    return this.getStringAttribute('keypair_cache');
  }
  public set keypairCache(value: string) {
    this._keypairCache = value;
  }
  public resetKeypairCache() {
    this._keypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCacheInput() {
    return this._keypairCache;
  }

  // keypair_count - computed: false, optional: true, required: false
  private _keypairCount?: number; 
  public get keypairCount() {
    return this.getNumberAttribute('keypair_count');
  }
  public set keypairCount(value: number) {
    this._keypairCount = value;
  }
  public resetKeypairCount() {
    this._keypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairCountInput() {
    return this._keypairCount;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike fortios_system_ike}
*/
export class SystemIke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_ike";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIke to import
  * @param importFromId The id of the existing SystemIke that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_ike", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_ike fortios_system_ike} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIkeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIkeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_ike',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhKeypairCache = config.dhKeypairCache;
    this._dhKeypairCount = config.dhKeypairCount;
    this._dhKeypairThrottle = config.dhKeypairThrottle;
    this._dhMode = config.dhMode;
    this._dhMultiprocess = config.dhMultiprocess;
    this._dhWorkerCount = config.dhWorkerCount;
    this._embryonicLimit = config.embryonicLimit;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
    this._dhGroup1.internalValue = config.dhGroup1;
    this._dhGroup14.internalValue = config.dhGroup14;
    this._dhGroup15.internalValue = config.dhGroup15;
    this._dhGroup16.internalValue = config.dhGroup16;
    this._dhGroup17.internalValue = config.dhGroup17;
    this._dhGroup18.internalValue = config.dhGroup18;
    this._dhGroup19.internalValue = config.dhGroup19;
    this._dhGroup2.internalValue = config.dhGroup2;
    this._dhGroup20.internalValue = config.dhGroup20;
    this._dhGroup21.internalValue = config.dhGroup21;
    this._dhGroup27.internalValue = config.dhGroup27;
    this._dhGroup28.internalValue = config.dhGroup28;
    this._dhGroup29.internalValue = config.dhGroup29;
    this._dhGroup30.internalValue = config.dhGroup30;
    this._dhGroup31.internalValue = config.dhGroup31;
    this._dhGroup32.internalValue = config.dhGroup32;
    this._dhGroup5.internalValue = config.dhGroup5;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dh_keypair_cache - computed: true, optional: true, required: false
  private _dhKeypairCache?: string; 
  public get dhKeypairCache() {
    return this.getStringAttribute('dh_keypair_cache');
  }
  public set dhKeypairCache(value: string) {
    this._dhKeypairCache = value;
  }
  public resetDhKeypairCache() {
    this._dhKeypairCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhKeypairCacheInput() {
    return this._dhKeypairCache;
  }

  // dh_keypair_count - computed: true, optional: true, required: false
  private _dhKeypairCount?: number; 
  public get dhKeypairCount() {
    return this.getNumberAttribute('dh_keypair_count');
  }
  public set dhKeypairCount(value: number) {
    this._dhKeypairCount = value;
  }
  public resetDhKeypairCount() {
    this._dhKeypairCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhKeypairCountInput() {
    return this._dhKeypairCount;
  }

  // dh_keypair_throttle - computed: true, optional: true, required: false
  private _dhKeypairThrottle?: string; 
  public get dhKeypairThrottle() {
    return this.getStringAttribute('dh_keypair_throttle');
  }
  public set dhKeypairThrottle(value: string) {
    this._dhKeypairThrottle = value;
  }
  public resetDhKeypairThrottle() {
    this._dhKeypairThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhKeypairThrottleInput() {
    return this._dhKeypairThrottle;
  }

  // dh_mode - computed: true, optional: true, required: false
  private _dhMode?: string; 
  public get dhMode() {
    return this.getStringAttribute('dh_mode');
  }
  public set dhMode(value: string) {
    this._dhMode = value;
  }
  public resetDhMode() {
    this._dhMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhModeInput() {
    return this._dhMode;
  }

  // dh_multiprocess - computed: true, optional: true, required: false
  private _dhMultiprocess?: string; 
  public get dhMultiprocess() {
    return this.getStringAttribute('dh_multiprocess');
  }
  public set dhMultiprocess(value: string) {
    this._dhMultiprocess = value;
  }
  public resetDhMultiprocess() {
    this._dhMultiprocess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhMultiprocessInput() {
    return this._dhMultiprocess;
  }

  // dh_worker_count - computed: false, optional: true, required: false
  private _dhWorkerCount?: number; 
  public get dhWorkerCount() {
    return this.getNumberAttribute('dh_worker_count');
  }
  public set dhWorkerCount(value: number) {
    this._dhWorkerCount = value;
  }
  public resetDhWorkerCount() {
    this._dhWorkerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhWorkerCountInput() {
    return this._dhWorkerCount;
  }

  // embryonic_limit - computed: true, optional: true, required: false
  private _embryonicLimit?: number; 
  public get embryonicLimit() {
    return this.getNumberAttribute('embryonic_limit');
  }
  public set embryonicLimit(value: number) {
    this._embryonicLimit = value;
  }
  public resetEmbryonicLimit() {
    this._embryonicLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embryonicLimitInput() {
    return this._embryonicLimit;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // dh_group_1 - computed: false, optional: true, required: false
  private _dhGroup1 = new SystemIkeDhGroup1OutputReference(this, "dh_group_1");
  public get dhGroup1() {
    return this._dhGroup1;
  }
  public putDhGroup1(value: SystemIkeDhGroup1) {
    this._dhGroup1.internalValue = value;
  }
  public resetDhGroup1() {
    this._dhGroup1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup1Input() {
    return this._dhGroup1.internalValue;
  }

  // dh_group_14 - computed: false, optional: true, required: false
  private _dhGroup14 = new SystemIkeDhGroup14OutputReference(this, "dh_group_14");
  public get dhGroup14() {
    return this._dhGroup14;
  }
  public putDhGroup14(value: SystemIkeDhGroup14) {
    this._dhGroup14.internalValue = value;
  }
  public resetDhGroup14() {
    this._dhGroup14.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup14Input() {
    return this._dhGroup14.internalValue;
  }

  // dh_group_15 - computed: false, optional: true, required: false
  private _dhGroup15 = new SystemIkeDhGroup15OutputReference(this, "dh_group_15");
  public get dhGroup15() {
    return this._dhGroup15;
  }
  public putDhGroup15(value: SystemIkeDhGroup15) {
    this._dhGroup15.internalValue = value;
  }
  public resetDhGroup15() {
    this._dhGroup15.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup15Input() {
    return this._dhGroup15.internalValue;
  }

  // dh_group_16 - computed: false, optional: true, required: false
  private _dhGroup16 = new SystemIkeDhGroup16OutputReference(this, "dh_group_16");
  public get dhGroup16() {
    return this._dhGroup16;
  }
  public putDhGroup16(value: SystemIkeDhGroup16) {
    this._dhGroup16.internalValue = value;
  }
  public resetDhGroup16() {
    this._dhGroup16.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup16Input() {
    return this._dhGroup16.internalValue;
  }

  // dh_group_17 - computed: false, optional: true, required: false
  private _dhGroup17 = new SystemIkeDhGroup17OutputReference(this, "dh_group_17");
  public get dhGroup17() {
    return this._dhGroup17;
  }
  public putDhGroup17(value: SystemIkeDhGroup17) {
    this._dhGroup17.internalValue = value;
  }
  public resetDhGroup17() {
    this._dhGroup17.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup17Input() {
    return this._dhGroup17.internalValue;
  }

  // dh_group_18 - computed: false, optional: true, required: false
  private _dhGroup18 = new SystemIkeDhGroup18OutputReference(this, "dh_group_18");
  public get dhGroup18() {
    return this._dhGroup18;
  }
  public putDhGroup18(value: SystemIkeDhGroup18) {
    this._dhGroup18.internalValue = value;
  }
  public resetDhGroup18() {
    this._dhGroup18.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup18Input() {
    return this._dhGroup18.internalValue;
  }

  // dh_group_19 - computed: false, optional: true, required: false
  private _dhGroup19 = new SystemIkeDhGroup19OutputReference(this, "dh_group_19");
  public get dhGroup19() {
    return this._dhGroup19;
  }
  public putDhGroup19(value: SystemIkeDhGroup19) {
    this._dhGroup19.internalValue = value;
  }
  public resetDhGroup19() {
    this._dhGroup19.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup19Input() {
    return this._dhGroup19.internalValue;
  }

  // dh_group_2 - computed: false, optional: true, required: false
  private _dhGroup2 = new SystemIkeDhGroup2OutputReference(this, "dh_group_2");
  public get dhGroup2() {
    return this._dhGroup2;
  }
  public putDhGroup2(value: SystemIkeDhGroup2) {
    this._dhGroup2.internalValue = value;
  }
  public resetDhGroup2() {
    this._dhGroup2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup2Input() {
    return this._dhGroup2.internalValue;
  }

  // dh_group_20 - computed: false, optional: true, required: false
  private _dhGroup20 = new SystemIkeDhGroup20OutputReference(this, "dh_group_20");
  public get dhGroup20() {
    return this._dhGroup20;
  }
  public putDhGroup20(value: SystemIkeDhGroup20) {
    this._dhGroup20.internalValue = value;
  }
  public resetDhGroup20() {
    this._dhGroup20.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup20Input() {
    return this._dhGroup20.internalValue;
  }

  // dh_group_21 - computed: false, optional: true, required: false
  private _dhGroup21 = new SystemIkeDhGroup21OutputReference(this, "dh_group_21");
  public get dhGroup21() {
    return this._dhGroup21;
  }
  public putDhGroup21(value: SystemIkeDhGroup21) {
    this._dhGroup21.internalValue = value;
  }
  public resetDhGroup21() {
    this._dhGroup21.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup21Input() {
    return this._dhGroup21.internalValue;
  }

  // dh_group_27 - computed: false, optional: true, required: false
  private _dhGroup27 = new SystemIkeDhGroup27OutputReference(this, "dh_group_27");
  public get dhGroup27() {
    return this._dhGroup27;
  }
  public putDhGroup27(value: SystemIkeDhGroup27) {
    this._dhGroup27.internalValue = value;
  }
  public resetDhGroup27() {
    this._dhGroup27.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup27Input() {
    return this._dhGroup27.internalValue;
  }

  // dh_group_28 - computed: false, optional: true, required: false
  private _dhGroup28 = new SystemIkeDhGroup28OutputReference(this, "dh_group_28");
  public get dhGroup28() {
    return this._dhGroup28;
  }
  public putDhGroup28(value: SystemIkeDhGroup28) {
    this._dhGroup28.internalValue = value;
  }
  public resetDhGroup28() {
    this._dhGroup28.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup28Input() {
    return this._dhGroup28.internalValue;
  }

  // dh_group_29 - computed: false, optional: true, required: false
  private _dhGroup29 = new SystemIkeDhGroup29OutputReference(this, "dh_group_29");
  public get dhGroup29() {
    return this._dhGroup29;
  }
  public putDhGroup29(value: SystemIkeDhGroup29) {
    this._dhGroup29.internalValue = value;
  }
  public resetDhGroup29() {
    this._dhGroup29.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup29Input() {
    return this._dhGroup29.internalValue;
  }

  // dh_group_30 - computed: false, optional: true, required: false
  private _dhGroup30 = new SystemIkeDhGroup30OutputReference(this, "dh_group_30");
  public get dhGroup30() {
    return this._dhGroup30;
  }
  public putDhGroup30(value: SystemIkeDhGroup30) {
    this._dhGroup30.internalValue = value;
  }
  public resetDhGroup30() {
    this._dhGroup30.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup30Input() {
    return this._dhGroup30.internalValue;
  }

  // dh_group_31 - computed: false, optional: true, required: false
  private _dhGroup31 = new SystemIkeDhGroup31OutputReference(this, "dh_group_31");
  public get dhGroup31() {
    return this._dhGroup31;
  }
  public putDhGroup31(value: SystemIkeDhGroup31) {
    this._dhGroup31.internalValue = value;
  }
  public resetDhGroup31() {
    this._dhGroup31.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup31Input() {
    return this._dhGroup31.internalValue;
  }

  // dh_group_32 - computed: false, optional: true, required: false
  private _dhGroup32 = new SystemIkeDhGroup32OutputReference(this, "dh_group_32");
  public get dhGroup32() {
    return this._dhGroup32;
  }
  public putDhGroup32(value: SystemIkeDhGroup32) {
    this._dhGroup32.internalValue = value;
  }
  public resetDhGroup32() {
    this._dhGroup32.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup32Input() {
    return this._dhGroup32.internalValue;
  }

  // dh_group_5 - computed: false, optional: true, required: false
  private _dhGroup5 = new SystemIkeDhGroup5OutputReference(this, "dh_group_5");
  public get dhGroup5() {
    return this._dhGroup5;
  }
  public putDhGroup5(value: SystemIkeDhGroup5) {
    this._dhGroup5.internalValue = value;
  }
  public resetDhGroup5() {
    this._dhGroup5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroup5Input() {
    return this._dhGroup5.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dh_keypair_cache: cdktf.stringToTerraform(this._dhKeypairCache),
      dh_keypair_count: cdktf.numberToTerraform(this._dhKeypairCount),
      dh_keypair_throttle: cdktf.stringToTerraform(this._dhKeypairThrottle),
      dh_mode: cdktf.stringToTerraform(this._dhMode),
      dh_multiprocess: cdktf.stringToTerraform(this._dhMultiprocess),
      dh_worker_count: cdktf.numberToTerraform(this._dhWorkerCount),
      embryonic_limit: cdktf.numberToTerraform(this._embryonicLimit),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      dh_group_1: systemIkeDhGroup1ToTerraform(this._dhGroup1.internalValue),
      dh_group_14: systemIkeDhGroup14ToTerraform(this._dhGroup14.internalValue),
      dh_group_15: systemIkeDhGroup15ToTerraform(this._dhGroup15.internalValue),
      dh_group_16: systemIkeDhGroup16ToTerraform(this._dhGroup16.internalValue),
      dh_group_17: systemIkeDhGroup17ToTerraform(this._dhGroup17.internalValue),
      dh_group_18: systemIkeDhGroup18ToTerraform(this._dhGroup18.internalValue),
      dh_group_19: systemIkeDhGroup19ToTerraform(this._dhGroup19.internalValue),
      dh_group_2: systemIkeDhGroup2ToTerraform(this._dhGroup2.internalValue),
      dh_group_20: systemIkeDhGroup20ToTerraform(this._dhGroup20.internalValue),
      dh_group_21: systemIkeDhGroup21ToTerraform(this._dhGroup21.internalValue),
      dh_group_27: systemIkeDhGroup27ToTerraform(this._dhGroup27.internalValue),
      dh_group_28: systemIkeDhGroup28ToTerraform(this._dhGroup28.internalValue),
      dh_group_29: systemIkeDhGroup29ToTerraform(this._dhGroup29.internalValue),
      dh_group_30: systemIkeDhGroup30ToTerraform(this._dhGroup30.internalValue),
      dh_group_31: systemIkeDhGroup31ToTerraform(this._dhGroup31.internalValue),
      dh_group_32: systemIkeDhGroup32ToTerraform(this._dhGroup32.internalValue),
      dh_group_5: systemIkeDhGroup5ToTerraform(this._dhGroup5.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dh_keypair_cache: {
        value: cdktf.stringToHclTerraform(this._dhKeypairCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_keypair_count: {
        value: cdktf.numberToHclTerraform(this._dhKeypairCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dh_keypair_throttle: {
        value: cdktf.stringToHclTerraform(this._dhKeypairThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_mode: {
        value: cdktf.stringToHclTerraform(this._dhMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_multiprocess: {
        value: cdktf.stringToHclTerraform(this._dhMultiprocess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_worker_count: {
        value: cdktf.numberToHclTerraform(this._dhWorkerCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      embryonic_limit: {
        value: cdktf.numberToHclTerraform(this._embryonicLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group_1: {
        value: systemIkeDhGroup1ToHclTerraform(this._dhGroup1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup1List",
      },
      dh_group_14: {
        value: systemIkeDhGroup14ToHclTerraform(this._dhGroup14.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup14List",
      },
      dh_group_15: {
        value: systemIkeDhGroup15ToHclTerraform(this._dhGroup15.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup15List",
      },
      dh_group_16: {
        value: systemIkeDhGroup16ToHclTerraform(this._dhGroup16.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup16List",
      },
      dh_group_17: {
        value: systemIkeDhGroup17ToHclTerraform(this._dhGroup17.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup17List",
      },
      dh_group_18: {
        value: systemIkeDhGroup18ToHclTerraform(this._dhGroup18.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup18List",
      },
      dh_group_19: {
        value: systemIkeDhGroup19ToHclTerraform(this._dhGroup19.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup19List",
      },
      dh_group_2: {
        value: systemIkeDhGroup2ToHclTerraform(this._dhGroup2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup2List",
      },
      dh_group_20: {
        value: systemIkeDhGroup20ToHclTerraform(this._dhGroup20.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup20List",
      },
      dh_group_21: {
        value: systemIkeDhGroup21ToHclTerraform(this._dhGroup21.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup21List",
      },
      dh_group_27: {
        value: systemIkeDhGroup27ToHclTerraform(this._dhGroup27.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup27List",
      },
      dh_group_28: {
        value: systemIkeDhGroup28ToHclTerraform(this._dhGroup28.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup28List",
      },
      dh_group_29: {
        value: systemIkeDhGroup29ToHclTerraform(this._dhGroup29.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup29List",
      },
      dh_group_30: {
        value: systemIkeDhGroup30ToHclTerraform(this._dhGroup30.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup30List",
      },
      dh_group_31: {
        value: systemIkeDhGroup31ToHclTerraform(this._dhGroup31.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup31List",
      },
      dh_group_32: {
        value: systemIkeDhGroup32ToHclTerraform(this._dhGroup32.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup32List",
      },
      dh_group_5: {
        value: systemIkeDhGroup5ToHclTerraform(this._dhGroup5.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIkeDhGroup5List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
