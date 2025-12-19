// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssecTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'RSASHA1': RSASHA1 algorithm; 'RSASHA256': RSASHA256 algorithm; 'RSASHA512': RSASHA512 algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#algorithm DnssecTemplate#algorithm}
  */
  readonly algorithm?: string;
  /**
  * the max number of combinations per RRset (Default value is 31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#combinations_limit DnssecTemplate#combinations_limit}
  */
  readonly combinationsLimit?: number;
  /**
  * The TTL value of DNSKEY RR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#dnskey_ttl_k DnssecTemplate#dnskey_ttl_k}
  */
  readonly dnskeyTtlK?: number;
  /**
  * in seconds, 14400 seconds by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#dnskey_ttl_v DnssecTemplate#dnskey_ttl_v}
  */
  readonly dnskeyTtlV?: number;
  /**
  * DNSSEC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#dnssec_temp_name DnssecTemplate#dnssec_temp_name}
  */
  readonly dnssecTempName: string;
  /**
  * enable NSEC3 support. disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#enable_nsec3 DnssecTemplate#enable_nsec3}
  */
  readonly enableNsec3?: number;
  /**
  * specify the HSM template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#hsm DnssecTemplate#hsm}
  */
  readonly hsm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#id DnssecTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * return NSEC/NSEC3 or not on failure case. return by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#return_nsec_on_failure DnssecTemplate#return_nsec_on_failure}
  */
  readonly returnNsecOnFailure?: number;
  /**
  * The period that a signature is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#signature_validity_period_k DnssecTemplate#signature_validity_period_k}
  */
  readonly signatureValidityPeriodK?: number;
  /**
  * in days, 10 days by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#signature_validity_period_v DnssecTemplate#signature_validity_period_v}
  */
  readonly signatureValidityPeriodV?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#user_tag DnssecTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#uuid DnssecTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * dnssec_template_ksk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#dnssec_template_ksk DnssecTemplate#dnssec_template_ksk}
  */
  readonly dnssecTemplateKsk?: DnssecTemplateDnssecTemplateKsk;
  /**
  * dnssec_template_zsk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#dnssec_template_zsk DnssecTemplate#dnssec_template_zsk}
  */
  readonly dnssecTemplateZsk?: DnssecTemplateDnssecTemplateZsk;
}
export interface DnssecTemplateDnssecTemplateKsk {
  /**
  * Specify the number of bits in the DNSSEC KSK keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#ksk_keysize_k DnssecTemplate#ksk_keysize_k}
  */
  readonly kskKeysizeK?: number;
  /**
  * Default size is 2048 and must be an exact multiple of 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#ksk_keysize_v DnssecTemplate#ksk_keysize_v}
  */
  readonly kskKeysizeV?: number;
  /**
  * Set the lifetime for DNSSEC KSK keys in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#ksk_lifetime_k DnssecTemplate#ksk_lifetime_k}
  */
  readonly kskLifetimeK?: number;
  /**
  * Default value is 365 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#ksk_lifetime_v DnssecTemplate#ksk_lifetime_v}
  */
  readonly kskLifetimeV?: number;
  /**
  * Set the rollover time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#ksk_rollover_time_k DnssecTemplate#ksk_rollover_time_k}
  */
  readonly kskRolloverTimeK?: number;
  /**
  * 7 days less than the lifetime by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_rollover_time_v DnssecTemplate#zsk_rollover_time_v}
  */
  readonly zskRolloverTimeV?: number;
}

export function dnssecTemplateDnssecTemplateKskToTerraform(struct?: DnssecTemplateDnssecTemplateKskOutputReference | DnssecTemplateDnssecTemplateKsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ksk_keysize_k: cdktf.numberToTerraform(struct!.kskKeysizeK),
    ksk_keysize_v: cdktf.numberToTerraform(struct!.kskKeysizeV),
    ksk_lifetime_k: cdktf.numberToTerraform(struct!.kskLifetimeK),
    ksk_lifetime_v: cdktf.numberToTerraform(struct!.kskLifetimeV),
    ksk_rollover_time_k: cdktf.numberToTerraform(struct!.kskRolloverTimeK),
    zsk_rollover_time_v: cdktf.numberToTerraform(struct!.zskRolloverTimeV),
  }
}


export function dnssecTemplateDnssecTemplateKskToHclTerraform(struct?: DnssecTemplateDnssecTemplateKskOutputReference | DnssecTemplateDnssecTemplateKsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ksk_keysize_k: {
      value: cdktf.numberToHclTerraform(struct!.kskKeysizeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_keysize_v: {
      value: cdktf.numberToHclTerraform(struct!.kskKeysizeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_lifetime_k: {
      value: cdktf.numberToHclTerraform(struct!.kskLifetimeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_lifetime_v: {
      value: cdktf.numberToHclTerraform(struct!.kskLifetimeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_rollover_time_k: {
      value: cdktf.numberToHclTerraform(struct!.kskRolloverTimeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_rollover_time_v: {
      value: cdktf.numberToHclTerraform(struct!.zskRolloverTimeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnssecTemplateDnssecTemplateKskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecTemplateDnssecTemplateKsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kskKeysizeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskKeysizeK = this._kskKeysizeK;
    }
    if (this._kskKeysizeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskKeysizeV = this._kskKeysizeV;
    }
    if (this._kskLifetimeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskLifetimeK = this._kskLifetimeK;
    }
    if (this._kskLifetimeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskLifetimeV = this._kskLifetimeV;
    }
    if (this._kskRolloverTimeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskRolloverTimeK = this._kskRolloverTimeK;
    }
    if (this._zskRolloverTimeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskRolloverTimeV = this._zskRolloverTimeV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecTemplateDnssecTemplateKsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kskKeysizeK = undefined;
      this._kskKeysizeV = undefined;
      this._kskLifetimeK = undefined;
      this._kskLifetimeV = undefined;
      this._kskRolloverTimeK = undefined;
      this._zskRolloverTimeV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kskKeysizeK = value.kskKeysizeK;
      this._kskKeysizeV = value.kskKeysizeV;
      this._kskLifetimeK = value.kskLifetimeK;
      this._kskLifetimeV = value.kskLifetimeV;
      this._kskRolloverTimeK = value.kskRolloverTimeK;
      this._zskRolloverTimeV = value.zskRolloverTimeV;
    }
  }

  // ksk_keysize_k - computed: false, optional: true, required: false
  private _kskKeysizeK?: number; 
  public get kskKeysizeK() {
    return this.getNumberAttribute('ksk_keysize_k');
  }
  public set kskKeysizeK(value: number) {
    this._kskKeysizeK = value;
  }
  public resetKskKeysizeK() {
    this._kskKeysizeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskKeysizeKInput() {
    return this._kskKeysizeK;
  }

  // ksk_keysize_v - computed: false, optional: true, required: false
  private _kskKeysizeV?: number; 
  public get kskKeysizeV() {
    return this.getNumberAttribute('ksk_keysize_v');
  }
  public set kskKeysizeV(value: number) {
    this._kskKeysizeV = value;
  }
  public resetKskKeysizeV() {
    this._kskKeysizeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskKeysizeVInput() {
    return this._kskKeysizeV;
  }

  // ksk_lifetime_k - computed: false, optional: true, required: false
  private _kskLifetimeK?: number; 
  public get kskLifetimeK() {
    return this.getNumberAttribute('ksk_lifetime_k');
  }
  public set kskLifetimeK(value: number) {
    this._kskLifetimeK = value;
  }
  public resetKskLifetimeK() {
    this._kskLifetimeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskLifetimeKInput() {
    return this._kskLifetimeK;
  }

  // ksk_lifetime_v - computed: false, optional: true, required: false
  private _kskLifetimeV?: number; 
  public get kskLifetimeV() {
    return this.getNumberAttribute('ksk_lifetime_v');
  }
  public set kskLifetimeV(value: number) {
    this._kskLifetimeV = value;
  }
  public resetKskLifetimeV() {
    this._kskLifetimeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskLifetimeVInput() {
    return this._kskLifetimeV;
  }

  // ksk_rollover_time_k - computed: false, optional: true, required: false
  private _kskRolloverTimeK?: number; 
  public get kskRolloverTimeK() {
    return this.getNumberAttribute('ksk_rollover_time_k');
  }
  public set kskRolloverTimeK(value: number) {
    this._kskRolloverTimeK = value;
  }
  public resetKskRolloverTimeK() {
    this._kskRolloverTimeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskRolloverTimeKInput() {
    return this._kskRolloverTimeK;
  }

  // zsk_rollover_time_v - computed: false, optional: true, required: false
  private _zskRolloverTimeV?: number; 
  public get zskRolloverTimeV() {
    return this.getNumberAttribute('zsk_rollover_time_v');
  }
  public set zskRolloverTimeV(value: number) {
    this._zskRolloverTimeV = value;
  }
  public resetZskRolloverTimeV() {
    this._zskRolloverTimeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskRolloverTimeVInput() {
    return this._zskRolloverTimeV;
  }
}
export interface DnssecTemplateDnssecTemplateZsk {
  /**
  * Specify the number of bits in the DNSSEC ZSK keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_keysize_k DnssecTemplate#zsk_keysize_k}
  */
  readonly zskKeysizeK?: number;
  /**
  * Default size is 2048 and must be an exact multiple of 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_keysize_v DnssecTemplate#zsk_keysize_v}
  */
  readonly zskKeysizeV?: number;
  /**
  * Set the lifetime for DNSSEC ZSK keys in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_lifetime_k DnssecTemplate#zsk_lifetime_k}
  */
  readonly zskLifetimeK?: number;
  /**
  * Default value is 90 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_lifetime_v DnssecTemplate#zsk_lifetime_v}
  */
  readonly zskLifetimeV?: number;
  /**
  * Set the rollover time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_rollover_time_k DnssecTemplate#zsk_rollover_time_k}
  */
  readonly zskRolloverTimeK?: number;
  /**
  * 7 days less than the lifetime by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#zsk_rollover_time_v DnssecTemplate#zsk_rollover_time_v}
  */
  readonly zskRolloverTimeV?: number;
}

export function dnssecTemplateDnssecTemplateZskToTerraform(struct?: DnssecTemplateDnssecTemplateZskOutputReference | DnssecTemplateDnssecTemplateZsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zsk_keysize_k: cdktf.numberToTerraform(struct!.zskKeysizeK),
    zsk_keysize_v: cdktf.numberToTerraform(struct!.zskKeysizeV),
    zsk_lifetime_k: cdktf.numberToTerraform(struct!.zskLifetimeK),
    zsk_lifetime_v: cdktf.numberToTerraform(struct!.zskLifetimeV),
    zsk_rollover_time_k: cdktf.numberToTerraform(struct!.zskRolloverTimeK),
    zsk_rollover_time_v: cdktf.numberToTerraform(struct!.zskRolloverTimeV),
  }
}


export function dnssecTemplateDnssecTemplateZskToHclTerraform(struct?: DnssecTemplateDnssecTemplateZskOutputReference | DnssecTemplateDnssecTemplateZsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zsk_keysize_k: {
      value: cdktf.numberToHclTerraform(struct!.zskKeysizeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_keysize_v: {
      value: cdktf.numberToHclTerraform(struct!.zskKeysizeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_lifetime_k: {
      value: cdktf.numberToHclTerraform(struct!.zskLifetimeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_lifetime_v: {
      value: cdktf.numberToHclTerraform(struct!.zskLifetimeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_rollover_time_k: {
      value: cdktf.numberToHclTerraform(struct!.zskRolloverTimeK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zsk_rollover_time_v: {
      value: cdktf.numberToHclTerraform(struct!.zskRolloverTimeV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnssecTemplateDnssecTemplateZskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecTemplateDnssecTemplateZsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zskKeysizeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskKeysizeK = this._zskKeysizeK;
    }
    if (this._zskKeysizeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskKeysizeV = this._zskKeysizeV;
    }
    if (this._zskLifetimeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskLifetimeK = this._zskLifetimeK;
    }
    if (this._zskLifetimeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskLifetimeV = this._zskLifetimeV;
    }
    if (this._zskRolloverTimeK !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskRolloverTimeK = this._zskRolloverTimeK;
    }
    if (this._zskRolloverTimeV !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskRolloverTimeV = this._zskRolloverTimeV;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecTemplateDnssecTemplateZsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zskKeysizeK = undefined;
      this._zskKeysizeV = undefined;
      this._zskLifetimeK = undefined;
      this._zskLifetimeV = undefined;
      this._zskRolloverTimeK = undefined;
      this._zskRolloverTimeV = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zskKeysizeK = value.zskKeysizeK;
      this._zskKeysizeV = value.zskKeysizeV;
      this._zskLifetimeK = value.zskLifetimeK;
      this._zskLifetimeV = value.zskLifetimeV;
      this._zskRolloverTimeK = value.zskRolloverTimeK;
      this._zskRolloverTimeV = value.zskRolloverTimeV;
    }
  }

  // zsk_keysize_k - computed: false, optional: true, required: false
  private _zskKeysizeK?: number; 
  public get zskKeysizeK() {
    return this.getNumberAttribute('zsk_keysize_k');
  }
  public set zskKeysizeK(value: number) {
    this._zskKeysizeK = value;
  }
  public resetZskKeysizeK() {
    this._zskKeysizeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskKeysizeKInput() {
    return this._zskKeysizeK;
  }

  // zsk_keysize_v - computed: false, optional: true, required: false
  private _zskKeysizeV?: number; 
  public get zskKeysizeV() {
    return this.getNumberAttribute('zsk_keysize_v');
  }
  public set zskKeysizeV(value: number) {
    this._zskKeysizeV = value;
  }
  public resetZskKeysizeV() {
    this._zskKeysizeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskKeysizeVInput() {
    return this._zskKeysizeV;
  }

  // zsk_lifetime_k - computed: false, optional: true, required: false
  private _zskLifetimeK?: number; 
  public get zskLifetimeK() {
    return this.getNumberAttribute('zsk_lifetime_k');
  }
  public set zskLifetimeK(value: number) {
    this._zskLifetimeK = value;
  }
  public resetZskLifetimeK() {
    this._zskLifetimeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskLifetimeKInput() {
    return this._zskLifetimeK;
  }

  // zsk_lifetime_v - computed: false, optional: true, required: false
  private _zskLifetimeV?: number; 
  public get zskLifetimeV() {
    return this.getNumberAttribute('zsk_lifetime_v');
  }
  public set zskLifetimeV(value: number) {
    this._zskLifetimeV = value;
  }
  public resetZskLifetimeV() {
    this._zskLifetimeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskLifetimeVInput() {
    return this._zskLifetimeV;
  }

  // zsk_rollover_time_k - computed: false, optional: true, required: false
  private _zskRolloverTimeK?: number; 
  public get zskRolloverTimeK() {
    return this.getNumberAttribute('zsk_rollover_time_k');
  }
  public set zskRolloverTimeK(value: number) {
    this._zskRolloverTimeK = value;
  }
  public resetZskRolloverTimeK() {
    this._zskRolloverTimeK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskRolloverTimeKInput() {
    return this._zskRolloverTimeK;
  }

  // zsk_rollover_time_v - computed: false, optional: true, required: false
  private _zskRolloverTimeV?: number; 
  public get zskRolloverTimeV() {
    return this.getNumberAttribute('zsk_rollover_time_v');
  }
  public set zskRolloverTimeV(value: number) {
    this._zskRolloverTimeV = value;
  }
  public resetZskRolloverTimeV() {
    this._zskRolloverTimeV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskRolloverTimeVInput() {
    return this._zskRolloverTimeV;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template thunder_dnssec_template}
*/
export class DnssecTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_dnssec_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnssecTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnssecTemplate to import
  * @param importFromId The id of the existing DnssecTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnssecTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_dnssec_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/dnssec_template thunder_dnssec_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssecTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DnssecTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_dnssec_template',
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
    this._algorithm = config.algorithm;
    this._combinationsLimit = config.combinationsLimit;
    this._dnskeyTtlK = config.dnskeyTtlK;
    this._dnskeyTtlV = config.dnskeyTtlV;
    this._dnssecTempName = config.dnssecTempName;
    this._enableNsec3 = config.enableNsec3;
    this._hsm = config.hsm;
    this._id = config.id;
    this._returnNsecOnFailure = config.returnNsecOnFailure;
    this._signatureValidityPeriodK = config.signatureValidityPeriodK;
    this._signatureValidityPeriodV = config.signatureValidityPeriodV;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dnssecTemplateKsk.internalValue = config.dnssecTemplateKsk;
    this._dnssecTemplateZsk.internalValue = config.dnssecTemplateZsk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
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

  // combinations_limit - computed: false, optional: true, required: false
  private _combinationsLimit?: number; 
  public get combinationsLimit() {
    return this.getNumberAttribute('combinations_limit');
  }
  public set combinationsLimit(value: number) {
    this._combinationsLimit = value;
  }
  public resetCombinationsLimit() {
    this._combinationsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combinationsLimitInput() {
    return this._combinationsLimit;
  }

  // dnskey_ttl_k - computed: false, optional: true, required: false
  private _dnskeyTtlK?: number; 
  public get dnskeyTtlK() {
    return this.getNumberAttribute('dnskey_ttl_k');
  }
  public set dnskeyTtlK(value: number) {
    this._dnskeyTtlK = value;
  }
  public resetDnskeyTtlK() {
    this._dnskeyTtlK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyTtlKInput() {
    return this._dnskeyTtlK;
  }

  // dnskey_ttl_v - computed: false, optional: true, required: false
  private _dnskeyTtlV?: number; 
  public get dnskeyTtlV() {
    return this.getNumberAttribute('dnskey_ttl_v');
  }
  public set dnskeyTtlV(value: number) {
    this._dnskeyTtlV = value;
  }
  public resetDnskeyTtlV() {
    this._dnskeyTtlV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyTtlVInput() {
    return this._dnskeyTtlV;
  }

  // dnssec_temp_name - computed: false, optional: false, required: true
  private _dnssecTempName?: string; 
  public get dnssecTempName() {
    return this.getStringAttribute('dnssec_temp_name');
  }
  public set dnssecTempName(value: string) {
    this._dnssecTempName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTempNameInput() {
    return this._dnssecTempName;
  }

  // enable_nsec3 - computed: false, optional: true, required: false
  private _enableNsec3?: number; 
  public get enableNsec3() {
    return this.getNumberAttribute('enable_nsec3');
  }
  public set enableNsec3(value: number) {
    this._enableNsec3 = value;
  }
  public resetEnableNsec3() {
    this._enableNsec3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsec3Input() {
    return this._enableNsec3;
  }

  // hsm - computed: false, optional: true, required: false
  private _hsm?: string; 
  public get hsm() {
    return this.getStringAttribute('hsm');
  }
  public set hsm(value: string) {
    this._hsm = value;
  }
  public resetHsm() {
    this._hsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm;
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

  // return_nsec_on_failure - computed: false, optional: true, required: false
  private _returnNsecOnFailure?: number; 
  public get returnNsecOnFailure() {
    return this.getNumberAttribute('return_nsec_on_failure');
  }
  public set returnNsecOnFailure(value: number) {
    this._returnNsecOnFailure = value;
  }
  public resetReturnNsecOnFailure() {
    this._returnNsecOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnNsecOnFailureInput() {
    return this._returnNsecOnFailure;
  }

  // signature_validity_period_k - computed: false, optional: true, required: false
  private _signatureValidityPeriodK?: number; 
  public get signatureValidityPeriodK() {
    return this.getNumberAttribute('signature_validity_period_k');
  }
  public set signatureValidityPeriodK(value: number) {
    this._signatureValidityPeriodK = value;
  }
  public resetSignatureValidityPeriodK() {
    this._signatureValidityPeriodK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidityPeriodKInput() {
    return this._signatureValidityPeriodK;
  }

  // signature_validity_period_v - computed: false, optional: true, required: false
  private _signatureValidityPeriodV?: number; 
  public get signatureValidityPeriodV() {
    return this.getNumberAttribute('signature_validity_period_v');
  }
  public set signatureValidityPeriodV(value: number) {
    this._signatureValidityPeriodV = value;
  }
  public resetSignatureValidityPeriodV() {
    this._signatureValidityPeriodV = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidityPeriodVInput() {
    return this._signatureValidityPeriodV;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dnssec_template_ksk - computed: false, optional: true, required: false
  private _dnssecTemplateKsk = new DnssecTemplateDnssecTemplateKskOutputReference(this, "dnssec_template_ksk");
  public get dnssecTemplateKsk() {
    return this._dnssecTemplateKsk;
  }
  public putDnssecTemplateKsk(value: DnssecTemplateDnssecTemplateKsk) {
    this._dnssecTemplateKsk.internalValue = value;
  }
  public resetDnssecTemplateKsk() {
    this._dnssecTemplateKsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTemplateKskInput() {
    return this._dnssecTemplateKsk.internalValue;
  }

  // dnssec_template_zsk - computed: false, optional: true, required: false
  private _dnssecTemplateZsk = new DnssecTemplateDnssecTemplateZskOutputReference(this, "dnssec_template_zsk");
  public get dnssecTemplateZsk() {
    return this._dnssecTemplateZsk;
  }
  public putDnssecTemplateZsk(value: DnssecTemplateDnssecTemplateZsk) {
    this._dnssecTemplateZsk.internalValue = value;
  }
  public resetDnssecTemplateZsk() {
    this._dnssecTemplateZsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTemplateZskInput() {
    return this._dnssecTemplateZsk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      combinations_limit: cdktf.numberToTerraform(this._combinationsLimit),
      dnskey_ttl_k: cdktf.numberToTerraform(this._dnskeyTtlK),
      dnskey_ttl_v: cdktf.numberToTerraform(this._dnskeyTtlV),
      dnssec_temp_name: cdktf.stringToTerraform(this._dnssecTempName),
      enable_nsec3: cdktf.numberToTerraform(this._enableNsec3),
      hsm: cdktf.stringToTerraform(this._hsm),
      id: cdktf.stringToTerraform(this._id),
      return_nsec_on_failure: cdktf.numberToTerraform(this._returnNsecOnFailure),
      signature_validity_period_k: cdktf.numberToTerraform(this._signatureValidityPeriodK),
      signature_validity_period_v: cdktf.numberToTerraform(this._signatureValidityPeriodV),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dnssec_template_ksk: dnssecTemplateDnssecTemplateKskToTerraform(this._dnssecTemplateKsk.internalValue),
      dnssec_template_zsk: dnssecTemplateDnssecTemplateZskToTerraform(this._dnssecTemplateZsk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      combinations_limit: {
        value: cdktf.numberToHclTerraform(this._combinationsLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnskey_ttl_k: {
        value: cdktf.numberToHclTerraform(this._dnskeyTtlK),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnskey_ttl_v: {
        value: cdktf.numberToHclTerraform(this._dnskeyTtlV),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dnssec_temp_name: {
        value: cdktf.stringToHclTerraform(this._dnssecTempName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_nsec3: {
        value: cdktf.numberToHclTerraform(this._enableNsec3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsm: {
        value: cdktf.stringToHclTerraform(this._hsm),
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
      return_nsec_on_failure: {
        value: cdktf.numberToHclTerraform(this._returnNsecOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_validity_period_k: {
        value: cdktf.numberToHclTerraform(this._signatureValidityPeriodK),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signature_validity_period_v: {
        value: cdktf.numberToHclTerraform(this._signatureValidityPeriodV),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_template_ksk: {
        value: dnssecTemplateDnssecTemplateKskToHclTerraform(this._dnssecTemplateKsk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecTemplateDnssecTemplateKskList",
      },
      dnssec_template_zsk: {
        value: dnssecTemplateDnssecTemplateZskToHclTerraform(this._dnssecTemplateZsk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecTemplateDnssecTemplateZskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
