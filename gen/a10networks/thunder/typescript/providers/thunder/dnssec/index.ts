// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#id Dnssec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Run DNSSEC in standalone mode, in GSLB group mode by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#standalone Dnssec#standalone}
  */
  readonly standalone?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#uuid Dnssec#uuid}
  */
  readonly uuid?: string;
  /**
  * dnskey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnskey Dnssec#dnskey}
  */
  readonly dnskey?: DnssecDnskey;
  /**
  * ds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ds Dnssec#ds}
  */
  readonly ds?: DnssecDs;
  /**
  * key_rollover block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#key_rollover Dnssec#key_rollover}
  */
  readonly keyRollover?: DnssecKeyRollover;
  /**
  * sign_zone_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#sign_zone_now Dnssec#sign_zone_now}
  */
  readonly signZoneNow?: DnssecSignZoneNow;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#template_list Dnssec#template_list}
  */
  readonly templateList?: DnssecTemplateListStruct[] | cdktf.IResolvable;
}
export interface DnssecDnskey {
  /**
  * Delete the DNSKEY file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#key_delete Dnssec#key_delete}
  */
  readonly keyDelete?: number;
  /**
  * DNS zone name of the child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zone_name Dnssec#zone_name}
  */
  readonly zoneName?: string;
}

export function dnssecDnskeyToTerraform(struct?: DnssecDnskeyOutputReference | DnssecDnskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_delete: cdktf.numberToTerraform(struct!.keyDelete),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dnssecDnskeyToHclTerraform(struct?: DnssecDnskeyOutputReference | DnssecDnskey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_delete: {
      value: cdktf.numberToHclTerraform(struct!.keyDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DnssecDnskeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecDnskey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyDelete = this._keyDelete;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecDnskey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyDelete = undefined;
      this._zoneName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyDelete = value.keyDelete;
      this._zoneName = value.zoneName;
    }
  }

  // key_delete - computed: false, optional: true, required: false
  private _keyDelete?: number; 
  public get keyDelete() {
    return this.getNumberAttribute('key_delete');
  }
  public set keyDelete(value: number) {
    this._keyDelete = value;
  }
  public resetKeyDelete() {
    this._keyDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDeleteInput() {
    return this._keyDelete;
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
export interface DnssecDs {
  /**
  * Delete the DS file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ds_delete Dnssec#ds_delete}
  */
  readonly dsDelete?: number;
  /**
  * DNS zone name of the child zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zone_name Dnssec#zone_name}
  */
  readonly zoneName?: string;
}

export function dnssecDsToTerraform(struct?: DnssecDsOutputReference | DnssecDs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_delete: cdktf.numberToTerraform(struct!.dsDelete),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dnssecDsToHclTerraform(struct?: DnssecDsOutputReference | DnssecDs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_delete: {
      value: cdktf.numberToHclTerraform(struct!.dsDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DnssecDsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecDs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsDelete = this._dsDelete;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecDs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dsDelete = undefined;
      this._zoneName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dsDelete = value.dsDelete;
      this._zoneName = value.zoneName;
    }
  }

  // ds_delete - computed: false, optional: true, required: false
  private _dsDelete?: number; 
  public get dsDelete() {
    return this.getNumberAttribute('ds_delete');
  }
  public set dsDelete(value: number) {
    this._dsDelete = value;
  }
  public resetDsDelete() {
    this._dsDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsDeleteInput() {
    return this._dsDelete;
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
export interface DnssecKeyRollover {
  /**
  * 'ZSK': Zone Signing Key; 'KSK': Key Signing Key;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnssec_key_type Dnssec#dnssec_key_type}
  */
  readonly dnssecKeyType?: string;
  /**
  * DS RR is already ready in the parent zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ds_ready_in_parent_zone Dnssec#ds_ready_in_parent_zone}
  */
  readonly dsReadyInParentZone?: number;
  /**
  * start KSK rollover in emergency mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_start Dnssec#ksk_start}
  */
  readonly kskStart?: number;
  /**
  * Specify the name for the DNS zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zone_name Dnssec#zone_name}
  */
  readonly zoneName?: string;
  /**
  * start ZSK rollover in emergency mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_start Dnssec#zsk_start}
  */
  readonly zskStart?: number;
}

export function dnssecKeyRolloverToTerraform(struct?: DnssecKeyRolloverOutputReference | DnssecKeyRollover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnssec_key_type: cdktf.stringToTerraform(struct!.dnssecKeyType),
    ds_ready_in_parent_zone: cdktf.numberToTerraform(struct!.dsReadyInParentZone),
    ksk_start: cdktf.numberToTerraform(struct!.kskStart),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
    zsk_start: cdktf.numberToTerraform(struct!.zskStart),
  }
}


export function dnssecKeyRolloverToHclTerraform(struct?: DnssecKeyRolloverOutputReference | DnssecKeyRollover): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnssec_key_type: {
      value: cdktf.stringToHclTerraform(struct!.dnssecKeyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ds_ready_in_parent_zone: {
      value: cdktf.numberToHclTerraform(struct!.dsReadyInParentZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ksk_start: {
      value: cdktf.numberToHclTerraform(struct!.kskStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zsk_start: {
      value: cdktf.numberToHclTerraform(struct!.zskStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnssecKeyRolloverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecKeyRollover | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnssecKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecKeyType = this._dnssecKeyType;
    }
    if (this._dsReadyInParentZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsReadyInParentZone = this._dsReadyInParentZone;
    }
    if (this._kskStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.kskStart = this._kskStart;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    if (this._zskStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.zskStart = this._zskStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecKeyRollover | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnssecKeyType = undefined;
      this._dsReadyInParentZone = undefined;
      this._kskStart = undefined;
      this._zoneName = undefined;
      this._zskStart = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnssecKeyType = value.dnssecKeyType;
      this._dsReadyInParentZone = value.dsReadyInParentZone;
      this._kskStart = value.kskStart;
      this._zoneName = value.zoneName;
      this._zskStart = value.zskStart;
    }
  }

  // dnssec_key_type - computed: false, optional: true, required: false
  private _dnssecKeyType?: string; 
  public get dnssecKeyType() {
    return this.getStringAttribute('dnssec_key_type');
  }
  public set dnssecKeyType(value: string) {
    this._dnssecKeyType = value;
  }
  public resetDnssecKeyType() {
    this._dnssecKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecKeyTypeInput() {
    return this._dnssecKeyType;
  }

  // ds_ready_in_parent_zone - computed: false, optional: true, required: false
  private _dsReadyInParentZone?: number; 
  public get dsReadyInParentZone() {
    return this.getNumberAttribute('ds_ready_in_parent_zone');
  }
  public set dsReadyInParentZone(value: number) {
    this._dsReadyInParentZone = value;
  }
  public resetDsReadyInParentZone() {
    this._dsReadyInParentZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsReadyInParentZoneInput() {
    return this._dsReadyInParentZone;
  }

  // ksk_start - computed: false, optional: true, required: false
  private _kskStart?: number; 
  public get kskStart() {
    return this.getNumberAttribute('ksk_start');
  }
  public set kskStart(value: number) {
    this._kskStart = value;
  }
  public resetKskStart() {
    this._kskStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kskStartInput() {
    return this._kskStart;
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

  // zsk_start - computed: false, optional: true, required: false
  private _zskStart?: number; 
  public get zskStart() {
    return this.getNumberAttribute('zsk_start');
  }
  public set zskStart(value: number) {
    this._zskStart = value;
  }
  public resetZskStart() {
    this._zskStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zskStartInput() {
    return this._zskStart;
  }
}
export interface DnssecSignZoneNow {
  /**
  * Specify the name for the DNS zone, empty means sign all zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zone_name Dnssec#zone_name}
  */
  readonly zoneName?: string;
}

export function dnssecSignZoneNowToTerraform(struct?: DnssecSignZoneNowOutputReference | DnssecSignZoneNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dnssecSignZoneNowToHclTerraform(struct?: DnssecSignZoneNowOutputReference | DnssecSignZoneNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DnssecSignZoneNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecSignZoneNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecSignZoneNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zoneName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zoneName = value.zoneName;
    }
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
export interface DnssecTemplateListDnssecTemplateKsk {
  /**
  * Specify the number of bits in the DNSSEC KSK keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_keysize_k Dnssec#ksk_keysize_k}
  */
  readonly kskKeysizeK?: number;
  /**
  * Default size is 2048 and must be an exact multiple of 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_keysize_v Dnssec#ksk_keysize_v}
  */
  readonly kskKeysizeV?: number;
  /**
  * Set the lifetime for DNSSEC KSK keys in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_lifetime_k Dnssec#ksk_lifetime_k}
  */
  readonly kskLifetimeK?: number;
  /**
  * Default value is 365 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_lifetime_v Dnssec#ksk_lifetime_v}
  */
  readonly kskLifetimeV?: number;
  /**
  * Set the rollover time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#ksk_rollover_time_k Dnssec#ksk_rollover_time_k}
  */
  readonly kskRolloverTimeK?: number;
  /**
  * 7 days less than the lifetime by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_rollover_time_v Dnssec#zsk_rollover_time_v}
  */
  readonly zskRolloverTimeV?: number;
}

export function dnssecTemplateListDnssecTemplateKskToTerraform(struct?: DnssecTemplateListDnssecTemplateKskOutputReference | DnssecTemplateListDnssecTemplateKsk): any {
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


export function dnssecTemplateListDnssecTemplateKskToHclTerraform(struct?: DnssecTemplateListDnssecTemplateKskOutputReference | DnssecTemplateListDnssecTemplateKsk): any {
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

export class DnssecTemplateListDnssecTemplateKskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecTemplateListDnssecTemplateKsk | undefined {
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

  public set internalValue(value: DnssecTemplateListDnssecTemplateKsk | undefined) {
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
export interface DnssecTemplateListDnssecTemplateZsk {
  /**
  * Specify the number of bits in the DNSSEC ZSK keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_keysize_k Dnssec#zsk_keysize_k}
  */
  readonly zskKeysizeK?: number;
  /**
  * Default size is 2048 and must be an exact multiple of 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_keysize_v Dnssec#zsk_keysize_v}
  */
  readonly zskKeysizeV?: number;
  /**
  * Set the lifetime for DNSSEC ZSK keys in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_lifetime_k Dnssec#zsk_lifetime_k}
  */
  readonly zskLifetimeK?: number;
  /**
  * Default value is 90 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_lifetime_v Dnssec#zsk_lifetime_v}
  */
  readonly zskLifetimeV?: number;
  /**
  * Set the rollover time in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_rollover_time_k Dnssec#zsk_rollover_time_k}
  */
  readonly zskRolloverTimeK?: number;
  /**
  * 7 days less than the lifetime by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#zsk_rollover_time_v Dnssec#zsk_rollover_time_v}
  */
  readonly zskRolloverTimeV?: number;
}

export function dnssecTemplateListDnssecTemplateZskToTerraform(struct?: DnssecTemplateListDnssecTemplateZskOutputReference | DnssecTemplateListDnssecTemplateZsk): any {
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


export function dnssecTemplateListDnssecTemplateZskToHclTerraform(struct?: DnssecTemplateListDnssecTemplateZskOutputReference | DnssecTemplateListDnssecTemplateZsk): any {
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

export class DnssecTemplateListDnssecTemplateZskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnssecTemplateListDnssecTemplateZsk | undefined {
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

  public set internalValue(value: DnssecTemplateListDnssecTemplateZsk | undefined) {
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
export interface DnssecTemplateListStruct {
  /**
  * 'RSASHA1': RSASHA1 algorithm; 'RSASHA256': RSASHA256 algorithm; 'RSASHA512': RSASHA512 algorithm;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#algorithm Dnssec#algorithm}
  */
  readonly algorithm?: string;
  /**
  * the max number of combinations per RRset (Default value is 31)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#combinations_limit Dnssec#combinations_limit}
  */
  readonly combinationsLimit?: number;
  /**
  * The TTL value of DNSKEY RR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnskey_ttl_k Dnssec#dnskey_ttl_k}
  */
  readonly dnskeyTtlK?: number;
  /**
  * in seconds, 14400 seconds by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnskey_ttl_v Dnssec#dnskey_ttl_v}
  */
  readonly dnskeyTtlV?: number;
  /**
  * DNSSEC Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnssec_temp_name Dnssec#dnssec_temp_name}
  */
  readonly dnssecTempName: string;
  /**
  * enable NSEC3 support. disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#enable_nsec3 Dnssec#enable_nsec3}
  */
  readonly enableNsec3?: number;
  /**
  * specify the HSM template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#hsm Dnssec#hsm}
  */
  readonly hsm?: string;
  /**
  * return NSEC/NSEC3 or not on failure case. return by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#return_nsec_on_failure Dnssec#return_nsec_on_failure}
  */
  readonly returnNsecOnFailure?: number;
  /**
  * The period that a signature is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#signature_validity_period_k Dnssec#signature_validity_period_k}
  */
  readonly signatureValidityPeriodK?: number;
  /**
  * in days, 10 days by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#signature_validity_period_v Dnssec#signature_validity_period_v}
  */
  readonly signatureValidityPeriodV?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#user_tag Dnssec#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#uuid Dnssec#uuid}
  */
  readonly uuid?: string;
  /**
  * dnssec_template_ksk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnssec_template_ksk Dnssec#dnssec_template_ksk}
  */
  readonly dnssecTemplateKsk?: DnssecTemplateListDnssecTemplateKsk;
  /**
  * dnssec_template_zsk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#dnssec_template_zsk Dnssec#dnssec_template_zsk}
  */
  readonly dnssecTemplateZsk?: DnssecTemplateListDnssecTemplateZsk;
}

export function dnssecTemplateListStructToTerraform(struct?: DnssecTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    combinations_limit: cdktf.numberToTerraform(struct!.combinationsLimit),
    dnskey_ttl_k: cdktf.numberToTerraform(struct!.dnskeyTtlK),
    dnskey_ttl_v: cdktf.numberToTerraform(struct!.dnskeyTtlV),
    dnssec_temp_name: cdktf.stringToTerraform(struct!.dnssecTempName),
    enable_nsec3: cdktf.numberToTerraform(struct!.enableNsec3),
    hsm: cdktf.stringToTerraform(struct!.hsm),
    return_nsec_on_failure: cdktf.numberToTerraform(struct!.returnNsecOnFailure),
    signature_validity_period_k: cdktf.numberToTerraform(struct!.signatureValidityPeriodK),
    signature_validity_period_v: cdktf.numberToTerraform(struct!.signatureValidityPeriodV),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dnssec_template_ksk: dnssecTemplateListDnssecTemplateKskToTerraform(struct!.dnssecTemplateKsk),
    dnssec_template_zsk: dnssecTemplateListDnssecTemplateZskToTerraform(struct!.dnssecTemplateZsk),
  }
}


export function dnssecTemplateListStructToHclTerraform(struct?: DnssecTemplateListStruct | cdktf.IResolvable): any {
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
    combinations_limit: {
      value: cdktf.numberToHclTerraform(struct!.combinationsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_ttl_k: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyTtlK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_ttl_v: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyTtlV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnssec_temp_name: {
      value: cdktf.stringToHclTerraform(struct!.dnssecTempName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_nsec3: {
      value: cdktf.numberToHclTerraform(struct!.enableNsec3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hsm: {
      value: cdktf.stringToHclTerraform(struct!.hsm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_nsec_on_failure: {
      value: cdktf.numberToHclTerraform(struct!.returnNsecOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature_validity_period_k: {
      value: cdktf.numberToHclTerraform(struct!.signatureValidityPeriodK),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signature_validity_period_v: {
      value: cdktf.numberToHclTerraform(struct!.signatureValidityPeriodV),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssec_template_ksk: {
      value: dnssecTemplateListDnssecTemplateKskToHclTerraform(struct!.dnssecTemplateKsk),
      isBlock: true,
      type: "list",
      storageClassType: "DnssecTemplateListDnssecTemplateKskList",
    },
    dnssec_template_zsk: {
      value: dnssecTemplateListDnssecTemplateZskToHclTerraform(struct!.dnssecTemplateZsk),
      isBlock: true,
      type: "list",
      storageClassType: "DnssecTemplateListDnssecTemplateZskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnssecTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnssecTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._combinationsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.combinationsLimit = this._combinationsLimit;
    }
    if (this._dnskeyTtlK !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyTtlK = this._dnskeyTtlK;
    }
    if (this._dnskeyTtlV !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyTtlV = this._dnskeyTtlV;
    }
    if (this._dnssecTempName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecTempName = this._dnssecTempName;
    }
    if (this._enableNsec3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNsec3 = this._enableNsec3;
    }
    if (this._hsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsm = this._hsm;
    }
    if (this._returnNsecOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnNsecOnFailure = this._returnNsecOnFailure;
    }
    if (this._signatureValidityPeriodK !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureValidityPeriodK = this._signatureValidityPeriodK;
    }
    if (this._signatureValidityPeriodV !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureValidityPeriodV = this._signatureValidityPeriodV;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dnssecTemplateKsk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecTemplateKsk = this._dnssecTemplateKsk?.internalValue;
    }
    if (this._dnssecTemplateZsk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecTemplateZsk = this._dnssecTemplateZsk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnssecTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._combinationsLimit = undefined;
      this._dnskeyTtlK = undefined;
      this._dnskeyTtlV = undefined;
      this._dnssecTempName = undefined;
      this._enableNsec3 = undefined;
      this._hsm = undefined;
      this._returnNsecOnFailure = undefined;
      this._signatureValidityPeriodK = undefined;
      this._signatureValidityPeriodV = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._dnssecTemplateKsk.internalValue = undefined;
      this._dnssecTemplateZsk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._combinationsLimit = value.combinationsLimit;
      this._dnskeyTtlK = value.dnskeyTtlK;
      this._dnskeyTtlV = value.dnskeyTtlV;
      this._dnssecTempName = value.dnssecTempName;
      this._enableNsec3 = value.enableNsec3;
      this._hsm = value.hsm;
      this._returnNsecOnFailure = value.returnNsecOnFailure;
      this._signatureValidityPeriodK = value.signatureValidityPeriodK;
      this._signatureValidityPeriodV = value.signatureValidityPeriodV;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._dnssecTemplateKsk.internalValue = value.dnssecTemplateKsk;
      this._dnssecTemplateZsk.internalValue = value.dnssecTemplateZsk;
    }
  }

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
  private _dnssecTemplateKsk = new DnssecTemplateListDnssecTemplateKskOutputReference(this, "dnssec_template_ksk");
  public get dnssecTemplateKsk() {
    return this._dnssecTemplateKsk;
  }
  public putDnssecTemplateKsk(value: DnssecTemplateListDnssecTemplateKsk) {
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
  private _dnssecTemplateZsk = new DnssecTemplateListDnssecTemplateZskOutputReference(this, "dnssec_template_zsk");
  public get dnssecTemplateZsk() {
    return this._dnssecTemplateZsk;
  }
  public putDnssecTemplateZsk(value: DnssecTemplateListDnssecTemplateZsk) {
    this._dnssecTemplateZsk.internalValue = value;
  }
  public resetDnssecTemplateZsk() {
    this._dnssecTemplateZsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecTemplateZskInput() {
    return this._dnssecTemplateZsk.internalValue;
  }
}

export class DnssecTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : DnssecTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): DnssecTemplateListStructOutputReference {
    return new DnssecTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec thunder_dnssec}
*/
export class Dnssec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_dnssec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnssec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnssec to import
  * @param importFromId The id of the existing Dnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnssec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_dnssec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/dnssec thunder_dnssec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssecConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnssecConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_dnssec',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._standalone = config.standalone;
    this._uuid = config.uuid;
    this._dnskey.internalValue = config.dnskey;
    this._ds.internalValue = config.ds;
    this._keyRollover.internalValue = config.keyRollover;
    this._signZoneNow.internalValue = config.signZoneNow;
    this._templateList.internalValue = config.templateList;
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

  // standalone - computed: false, optional: true, required: false
  private _standalone?: number; 
  public get standalone() {
    return this.getNumberAttribute('standalone');
  }
  public set standalone(value: number) {
    this._standalone = value;
  }
  public resetStandalone() {
    this._standalone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneInput() {
    return this._standalone;
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

  // dnskey - computed: false, optional: true, required: false
  private _dnskey = new DnssecDnskeyOutputReference(this, "dnskey");
  public get dnskey() {
    return this._dnskey;
  }
  public putDnskey(value: DnssecDnskey) {
    this._dnskey.internalValue = value;
  }
  public resetDnskey() {
    this._dnskey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyInput() {
    return this._dnskey.internalValue;
  }

  // ds - computed: false, optional: true, required: false
  private _ds = new DnssecDsOutputReference(this, "ds");
  public get ds() {
    return this._ds;
  }
  public putDs(value: DnssecDs) {
    this._ds.internalValue = value;
  }
  public resetDs() {
    this._ds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsInput() {
    return this._ds.internalValue;
  }

  // key_rollover - computed: false, optional: true, required: false
  private _keyRollover = new DnssecKeyRolloverOutputReference(this, "key_rollover");
  public get keyRollover() {
    return this._keyRollover;
  }
  public putKeyRollover(value: DnssecKeyRollover) {
    this._keyRollover.internalValue = value;
  }
  public resetKeyRollover() {
    this._keyRollover.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRolloverInput() {
    return this._keyRollover.internalValue;
  }

  // sign_zone_now - computed: false, optional: true, required: false
  private _signZoneNow = new DnssecSignZoneNowOutputReference(this, "sign_zone_now");
  public get signZoneNow() {
    return this._signZoneNow;
  }
  public putSignZoneNow(value: DnssecSignZoneNow) {
    this._signZoneNow.internalValue = value;
  }
  public resetSignZoneNow() {
    this._signZoneNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signZoneNowInput() {
    return this._signZoneNow.internalValue;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new DnssecTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: DnssecTemplateListStruct[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      standalone: cdktf.numberToTerraform(this._standalone),
      uuid: cdktf.stringToTerraform(this._uuid),
      dnskey: dnssecDnskeyToTerraform(this._dnskey.internalValue),
      ds: dnssecDsToTerraform(this._ds.internalValue),
      key_rollover: dnssecKeyRolloverToTerraform(this._keyRollover.internalValue),
      sign_zone_now: dnssecSignZoneNowToTerraform(this._signZoneNow.internalValue),
      template_list: cdktf.listMapper(dnssecTemplateListStructToTerraform, true)(this._templateList.internalValue),
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
      standalone: {
        value: cdktf.numberToHclTerraform(this._standalone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnskey: {
        value: dnssecDnskeyToHclTerraform(this._dnskey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecDnskeyList",
      },
      ds: {
        value: dnssecDsToHclTerraform(this._ds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecDsList",
      },
      key_rollover: {
        value: dnssecKeyRolloverToHclTerraform(this._keyRollover.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecKeyRolloverList",
      },
      sign_zone_now: {
        value: dnssecSignZoneNowToHclTerraform(this._signZoneNow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecSignZoneNowList",
      },
      template_list: {
        value: cdktf.listMapperHcl(dnssecTemplateListStructToHclTerraform, true)(this._templateList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnssecTemplateListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
