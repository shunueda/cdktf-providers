// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecCryptoProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ah
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#ah IpsecCryptoProfile#ah}
  */
  readonly ah?: IpsecCryptoProfileAh;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#device IpsecCryptoProfile#device}
  */
  readonly device?: string;
  /**
  * phase-2 DH group (PFS DH group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#dh_group IpsecCryptoProfile#dh_group}
  */
  readonly dhGroup?: string;
  /**
  * Esp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#esp IpsecCryptoProfile#esp}
  */
  readonly esp?: IpsecCryptoProfileEsp;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#folder IpsecCryptoProfile#folder}
  */
  readonly folder?: string;
  /**
  * Lifesize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#lifesize IpsecCryptoProfile#lifesize}
  */
  readonly lifesize?: IpsecCryptoProfileLifesize;
  /**
  * Ipsec crypto profile lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#lifetime IpsecCryptoProfile#lifetime}
  */
  readonly lifetime: IpsecCryptoProfileLifetime;
  /**
  * Alphanumeric string begin with letter: [0-9a-zA-Z._-]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#name IpsecCryptoProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#snippet IpsecCryptoProfile#snippet}
  */
  readonly snippet?: string;
}
export interface IpsecCryptoProfileAh {
  /**
  * Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#authentication IpsecCryptoProfile#authentication}
  */
  readonly authentication: string[];
}

export function ipsecCryptoProfileAhToTerraform(struct?: IpsecCryptoProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authentication),
  }
}


export function ipsecCryptoProfileAhToHclTerraform(struct?: IpsecCryptoProfileAh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authentication),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecCryptoProfileAhOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecCryptoProfileAh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecCryptoProfileAh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string[]; 
  public get authentication() {
    return this.getListAttribute('authentication');
  }
  public set authentication(value: string[]) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }
}
export interface IpsecCryptoProfileEsp {
  /**
  * Authentication algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#authentication IpsecCryptoProfile#authentication}
  */
  readonly authentication: string[];
  /**
  * Encryption algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#encryption IpsecCryptoProfile#encryption}
  */
  readonly encryption: string[];
}

export function ipsecCryptoProfileEspToTerraform(struct?: IpsecCryptoProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authentication),
    encryption: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.encryption),
  }
}


export function ipsecCryptoProfileEspToHclTerraform(struct?: IpsecCryptoProfileEsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authentication),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    encryption: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.encryption),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecCryptoProfileEspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecCryptoProfileEsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecCryptoProfileEsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._encryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._encryption = value.encryption;
    }
  }

  // authentication - computed: false, optional: false, required: true
  private _authentication?: string[]; 
  public get authentication() {
    return this.getListAttribute('authentication');
  }
  public set authentication(value: string[]) {
    this._authentication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string[]; 
  public get encryption() {
    return this.getListAttribute('encryption');
  }
  public set encryption(value: string[]) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }
}
export interface IpsecCryptoProfileLifesize {
  /**
  * specify lifesize in gigabytes(GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#gb IpsecCryptoProfile#gb}
  */
  readonly gb?: number;
  /**
  * specify lifesize in kilobytes(KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#kb IpsecCryptoProfile#kb}
  */
  readonly kb?: number;
  /**
  * specify lifesize in megabytes(MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#mb IpsecCryptoProfile#mb}
  */
  readonly mb?: number;
  /**
  * specify lifesize in terabytes(TB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#tb IpsecCryptoProfile#tb}
  */
  readonly tb?: number;
}

export function ipsecCryptoProfileLifesizeToTerraform(struct?: IpsecCryptoProfileLifesize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gb: cdktf.numberToTerraform(struct!.gb),
    kb: cdktf.numberToTerraform(struct!.kb),
    mb: cdktf.numberToTerraform(struct!.mb),
    tb: cdktf.numberToTerraform(struct!.tb),
  }
}


export function ipsecCryptoProfileLifesizeToHclTerraform(struct?: IpsecCryptoProfileLifesize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gb: {
      value: cdktf.numberToHclTerraform(struct!.gb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kb: {
      value: cdktf.numberToHclTerraform(struct!.kb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mb: {
      value: cdktf.numberToHclTerraform(struct!.mb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tb: {
      value: cdktf.numberToHclTerraform(struct!.tb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecCryptoProfileLifesizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecCryptoProfileLifesize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gb !== undefined) {
      hasAnyValues = true;
      internalValueResult.gb = this._gb;
    }
    if (this._kb !== undefined) {
      hasAnyValues = true;
      internalValueResult.kb = this._kb;
    }
    if (this._mb !== undefined) {
      hasAnyValues = true;
      internalValueResult.mb = this._mb;
    }
    if (this._tb !== undefined) {
      hasAnyValues = true;
      internalValueResult.tb = this._tb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecCryptoProfileLifesize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gb = undefined;
      this._kb = undefined;
      this._mb = undefined;
      this._tb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gb = value.gb;
      this._kb = value.kb;
      this._mb = value.mb;
      this._tb = value.tb;
    }
  }

  // gb - computed: false, optional: true, required: false
  private _gb?: number; 
  public get gb() {
    return this.getNumberAttribute('gb');
  }
  public set gb(value: number) {
    this._gb = value;
  }
  public resetGb() {
    this._gb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbInput() {
    return this._gb;
  }

  // kb - computed: false, optional: true, required: false
  private _kb?: number; 
  public get kb() {
    return this.getNumberAttribute('kb');
  }
  public set kb(value: number) {
    this._kb = value;
  }
  public resetKb() {
    this._kb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kbInput() {
    return this._kb;
  }

  // mb - computed: false, optional: true, required: false
  private _mb?: number; 
  public get mb() {
    return this.getNumberAttribute('mb');
  }
  public set mb(value: number) {
    this._mb = value;
  }
  public resetMb() {
    this._mb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mbInput() {
    return this._mb;
  }

  // tb - computed: false, optional: true, required: false
  private _tb?: number; 
  public get tb() {
    return this.getNumberAttribute('tb');
  }
  public set tb(value: number) {
    this._tb = value;
  }
  public resetTb() {
    this._tb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tbInput() {
    return this._tb;
  }
}
export interface IpsecCryptoProfileLifetime {
  /**
  * specify lifetime in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#days IpsecCryptoProfile#days}
  */
  readonly days?: number;
  /**
  * specify lifetime in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#hours IpsecCryptoProfile#hours}
  */
  readonly hours?: number;
  /**
  * specify lifetime in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#minutes IpsecCryptoProfile#minutes}
  */
  readonly minutes?: number;
  /**
  * specify lifetime in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#seconds IpsecCryptoProfile#seconds}
  */
  readonly seconds?: number;
}

export function ipsecCryptoProfileLifetimeToTerraform(struct?: IpsecCryptoProfileLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function ipsecCryptoProfileLifetimeToHclTerraform(struct?: IpsecCryptoProfileLifetime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpsecCryptoProfileLifetimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IpsecCryptoProfileLifetime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpsecCryptoProfileLifetime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
      this._hours = undefined;
      this._minutes = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._seconds = value.seconds;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile scm_ipsec_crypto_profile}
*/
export class IpsecCryptoProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_ipsec_crypto_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecCryptoProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecCryptoProfile to import
  * @param importFromId The id of the existing IpsecCryptoProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecCryptoProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_ipsec_crypto_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/resources/ipsec_crypto_profile scm_ipsec_crypto_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecCryptoProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecCryptoProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_ipsec_crypto_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ah.internalValue = config.ah;
    this._device = config.device;
    this._dhGroup = config.dhGroup;
    this._esp.internalValue = config.esp;
    this._folder = config.folder;
    this._lifesize.internalValue = config.lifesize;
    this._lifetime.internalValue = config.lifetime;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ah - computed: false, optional: true, required: false
  private _ah = new IpsecCryptoProfileAhOutputReference(this, "ah");
  public get ah() {
    return this._ah;
  }
  public putAh(value: IpsecCryptoProfileAh) {
    this._ah.internalValue = value;
  }
  public resetAh() {
    this._ah.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahInput() {
    return this._ah.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dh_group - computed: true, optional: true, required: false
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  public resetDhGroup() {
    this._dhGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // esp - computed: false, optional: true, required: false
  private _esp = new IpsecCryptoProfileEspOutputReference(this, "esp");
  public get esp() {
    return this._esp;
  }
  public putEsp(value: IpsecCryptoProfileEsp) {
    this._esp.internalValue = value;
  }
  public resetEsp() {
    this._esp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espInput() {
    return this._esp.internalValue;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifesize - computed: false, optional: true, required: false
  private _lifesize = new IpsecCryptoProfileLifesizeOutputReference(this, "lifesize");
  public get lifesize() {
    return this._lifesize;
  }
  public putLifesize(value: IpsecCryptoProfileLifesize) {
    this._lifesize.internalValue = value;
  }
  public resetLifesize() {
    this._lifesize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifesizeInput() {
    return this._lifesize.internalValue;
  }

  // lifetime - computed: false, optional: false, required: true
  private _lifetime = new IpsecCryptoProfileLifetimeOutputReference(this, "lifetime");
  public get lifetime() {
    return this._lifetime;
  }
  public putLifetime(value: IpsecCryptoProfileLifetime) {
    this._lifetime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ah: ipsecCryptoProfileAhToTerraform(this._ah.internalValue),
      device: cdktf.stringToTerraform(this._device),
      dh_group: cdktf.stringToTerraform(this._dhGroup),
      esp: ipsecCryptoProfileEspToTerraform(this._esp.internalValue),
      folder: cdktf.stringToTerraform(this._folder),
      lifesize: ipsecCryptoProfileLifesizeToTerraform(this._lifesize.internalValue),
      lifetime: ipsecCryptoProfileLifetimeToTerraform(this._lifetime.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ah: {
        value: ipsecCryptoProfileAhToHclTerraform(this._ah.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecCryptoProfileAh",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_group: {
        value: cdktf.stringToHclTerraform(this._dhGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esp: {
        value: ipsecCryptoProfileEspToHclTerraform(this._esp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecCryptoProfileEsp",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifesize: {
        value: ipsecCryptoProfileLifesizeToHclTerraform(this._lifesize.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecCryptoProfileLifesize",
      },
      lifetime: {
        value: ipsecCryptoProfileLifetimeToHclTerraform(this._lifetime.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IpsecCryptoProfileLifetime",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
