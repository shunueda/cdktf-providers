// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#account_name Zone#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#change_comment Zone#change_comment}
  */
  readonly changeComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#id Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#name Zone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#type Zone#type}
  */
  readonly type: string;
  /**
  * alias_create_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#alias_create_info Zone#alias_create_info}
  */
  readonly aliasCreateInfo?: ZoneAliasCreateInfo;
  /**
  * primary_create_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#primary_create_info Zone#primary_create_info}
  */
  readonly primaryCreateInfo?: ZonePrimaryCreateInfo;
  /**
  * registrar_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#registrar_info Zone#registrar_info}
  */
  readonly registrarInfo?: ZoneRegistrarInfo;
  /**
  * secondary_create_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#secondary_create_info Zone#secondary_create_info}
  */
  readonly secondaryCreateInfo?: ZoneSecondaryCreateInfo;
  /**
  * transfer_status_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#transfer_status_details Zone#transfer_status_details}
  */
  readonly transferStatusDetails?: ZoneTransferStatusDetails;
}
export interface ZoneAliasCreateInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#original_zone_name Zone#original_zone_name}
  */
  readonly originalZoneName: string;
}

export function zoneAliasCreateInfoToTerraform(struct?: ZoneAliasCreateInfoOutputReference | ZoneAliasCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    original_zone_name: cdktf.stringToTerraform(struct!.originalZoneName),
  }
}


export function zoneAliasCreateInfoToHclTerraform(struct?: ZoneAliasCreateInfoOutputReference | ZoneAliasCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    original_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.originalZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneAliasCreateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneAliasCreateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originalZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalZoneName = this._originalZoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneAliasCreateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originalZoneName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originalZoneName = value.originalZoneName;
    }
  }

  // original_zone_name - computed: false, optional: false, required: true
  private _originalZoneName?: string; 
  public get originalZoneName() {
    return this.getStringAttribute('original_zone_name');
  }
  public set originalZoneName(value: string) {
    this._originalZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalZoneNameInput() {
    return this._originalZoneName;
  }
}
export interface ZonePrimaryCreateInfoNameServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#ip Zone#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_algorithm Zone#tsig_algorithm}
  */
  readonly tsigAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key Zone#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_value Zone#tsig_key_value}
  */
  readonly tsigKeyValue?: string;
}

export function zonePrimaryCreateInfoNameServerToTerraform(struct?: ZonePrimaryCreateInfoNameServerOutputReference | ZonePrimaryCreateInfoNameServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    tsig_algorithm: cdktf.stringToTerraform(struct!.tsigAlgorithm),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_value: cdktf.stringToTerraform(struct!.tsigKeyValue),
  }
}


export function zonePrimaryCreateInfoNameServerToHclTerraform(struct?: ZonePrimaryCreateInfoNameServerOutputReference | ZonePrimaryCreateInfoNameServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigAlgorithm),
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
    tsig_key_value: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZonePrimaryCreateInfoNameServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZonePrimaryCreateInfoNameServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._tsigAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigAlgorithm = this._tsigAlgorithm;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonePrimaryCreateInfoNameServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._tsigAlgorithm = undefined;
      this._tsigKey = undefined;
      this._tsigKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._tsigAlgorithm = value.tsigAlgorithm;
      this._tsigKey = value.tsigKey;
      this._tsigKeyValue = value.tsigKeyValue;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // tsig_algorithm - computed: false, optional: true, required: false
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  public resetTsigAlgorithm() {
    this._tsigAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key - computed: false, optional: true, required: false
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

  // tsig_key_value - computed: false, optional: true, required: false
  private _tsigKeyValue?: string; 
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
  public set tsigKeyValue(value: string) {
    this._tsigKeyValue = value;
  }
  public resetTsigKeyValue() {
    this._tsigKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue;
  }
}
export interface ZonePrimaryCreateInfoNotifyAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#description Zone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#notify_address Zone#notify_address}
  */
  readonly notifyAddress: string;
}

export function zonePrimaryCreateInfoNotifyAddressesToTerraform(struct?: ZonePrimaryCreateInfoNotifyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    notify_address: cdktf.stringToTerraform(struct!.notifyAddress),
  }
}


export function zonePrimaryCreateInfoNotifyAddressesToHclTerraform(struct?: ZonePrimaryCreateInfoNotifyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_address: {
      value: cdktf.stringToHclTerraform(struct!.notifyAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZonePrimaryCreateInfoNotifyAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZonePrimaryCreateInfoNotifyAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._notifyAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyAddress = this._notifyAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonePrimaryCreateInfoNotifyAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._notifyAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._notifyAddress = value.notifyAddress;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // notify_address - computed: false, optional: false, required: true
  private _notifyAddress?: string; 
  public get notifyAddress() {
    return this.getStringAttribute('notify_address');
  }
  public set notifyAddress(value: string) {
    this._notifyAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAddressInput() {
    return this._notifyAddress;
  }
}

export class ZonePrimaryCreateInfoNotifyAddressesList extends cdktf.ComplexList {
  public internalValue? : ZonePrimaryCreateInfoNotifyAddresses[] | cdktf.IResolvable

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
  public get(index: number): ZonePrimaryCreateInfoNotifyAddressesOutputReference {
    return new ZonePrimaryCreateInfoNotifyAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZonePrimaryCreateInfoRestrictIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#cidr Zone#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#comment Zone#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#end_ip Zone#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#single_ip Zone#single_ip}
  */
  readonly singleIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#start_ip Zone#start_ip}
  */
  readonly startIp?: string;
}

export function zonePrimaryCreateInfoRestrictIpToTerraform(struct?: ZonePrimaryCreateInfoRestrictIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    comment: cdktf.stringToTerraform(struct!.comment),
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    single_ip: cdktf.stringToTerraform(struct!.singleIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function zonePrimaryCreateInfoRestrictIpToHclTerraform(struct?: ZonePrimaryCreateInfoRestrictIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
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
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_ip: {
      value: cdktf.stringToHclTerraform(struct!.singleIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZonePrimaryCreateInfoRestrictIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZonePrimaryCreateInfoRestrictIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._singleIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleIp = this._singleIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonePrimaryCreateInfoRestrictIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._comment = undefined;
      this._endIp = undefined;
      this._singleIp = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._comment = value.comment;
      this._endIp = value.endIp;
      this._singleIp = value.singleIp;
      this._startIp = value.startIp;
    }
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

  // comment - computed: false, optional: true, required: false
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

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // single_ip - computed: false, optional: true, required: false
  private _singleIp?: string; 
  public get singleIp() {
    return this.getStringAttribute('single_ip');
  }
  public set singleIp(value: string) {
    this._singleIp = value;
  }
  public resetSingleIp() {
    this._singleIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleIpInput() {
    return this._singleIp;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class ZonePrimaryCreateInfoRestrictIpList extends cdktf.ComplexList {
  public internalValue? : ZonePrimaryCreateInfoRestrictIp[] | cdktf.IResolvable

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
  public get(index: number): ZonePrimaryCreateInfoRestrictIpOutputReference {
    return new ZonePrimaryCreateInfoRestrictIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZonePrimaryCreateInfoTsig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#description Zone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_algorithm Zone#tsig_algorithm}
  */
  readonly tsigAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_name Zone#tsig_key_name}
  */
  readonly tsigKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_value Zone#tsig_key_value}
  */
  readonly tsigKeyValue: string;
}

export function zonePrimaryCreateInfoTsigToTerraform(struct?: ZonePrimaryCreateInfoTsigOutputReference | ZonePrimaryCreateInfoTsig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    tsig_algorithm: cdktf.stringToTerraform(struct!.tsigAlgorithm),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
    tsig_key_value: cdktf.stringToTerraform(struct!.tsigKeyValue),
  }
}


export function zonePrimaryCreateInfoTsigToHclTerraform(struct?: ZonePrimaryCreateInfoTsigOutputReference | ZonePrimaryCreateInfoTsig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigAlgorithm),
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
    tsig_key_value: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZonePrimaryCreateInfoTsigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZonePrimaryCreateInfoTsig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._tsigAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigAlgorithm = this._tsigAlgorithm;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    if (this._tsigKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonePrimaryCreateInfoTsig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._tsigAlgorithm = undefined;
      this._tsigKeyName = undefined;
      this._tsigKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._tsigAlgorithm = value.tsigAlgorithm;
      this._tsigKeyName = value.tsigKeyName;
      this._tsigKeyValue = value.tsigKeyValue;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // tsig_algorithm - computed: false, optional: false, required: true
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key_name - computed: false, optional: false, required: true
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }

  // tsig_key_value - computed: false, optional: false, required: true
  private _tsigKeyValue?: string; 
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
  public set tsigKeyValue(value: string) {
    this._tsigKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue;
  }
}
export interface ZonePrimaryCreateInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#create_type Zone#create_type}
  */
  readonly createType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#force_import Zone#force_import}
  */
  readonly forceImport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#inherit Zone#inherit}
  */
  readonly inherit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#original_zone_name Zone#original_zone_name}
  */
  readonly originalZoneName?: string;
  /**
  * name_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#name_server Zone#name_server}
  */
  readonly nameServer?: ZonePrimaryCreateInfoNameServer;
  /**
  * notify_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#notify_addresses Zone#notify_addresses}
  */
  readonly notifyAddresses?: ZonePrimaryCreateInfoNotifyAddresses[] | cdktf.IResolvable;
  /**
  * restrict_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#restrict_ip Zone#restrict_ip}
  */
  readonly restrictIp?: ZonePrimaryCreateInfoRestrictIp[] | cdktf.IResolvable;
  /**
  * tsig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig Zone#tsig}
  */
  readonly tsig?: ZonePrimaryCreateInfoTsig;
}

export function zonePrimaryCreateInfoToTerraform(struct?: ZonePrimaryCreateInfoOutputReference | ZonePrimaryCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_type: cdktf.stringToTerraform(struct!.createType),
    force_import: cdktf.booleanToTerraform(struct!.forceImport),
    inherit: cdktf.stringToTerraform(struct!.inherit),
    original_zone_name: cdktf.stringToTerraform(struct!.originalZoneName),
    name_server: zonePrimaryCreateInfoNameServerToTerraform(struct!.nameServer),
    notify_addresses: cdktf.listMapper(zonePrimaryCreateInfoNotifyAddressesToTerraform, true)(struct!.notifyAddresses),
    restrict_ip: cdktf.listMapper(zonePrimaryCreateInfoRestrictIpToTerraform, true)(struct!.restrictIp),
    tsig: zonePrimaryCreateInfoTsigToTerraform(struct!.tsig),
  }
}


export function zonePrimaryCreateInfoToHclTerraform(struct?: ZonePrimaryCreateInfoOutputReference | ZonePrimaryCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_type: {
      value: cdktf.stringToHclTerraform(struct!.createType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_import: {
      value: cdktf.booleanToHclTerraform(struct!.forceImport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherit: {
      value: cdktf.stringToHclTerraform(struct!.inherit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_zone_name: {
      value: cdktf.stringToHclTerraform(struct!.originalZoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server: {
      value: zonePrimaryCreateInfoNameServerToHclTerraform(struct!.nameServer),
      isBlock: true,
      type: "list",
      storageClassType: "ZonePrimaryCreateInfoNameServerList",
    },
    notify_addresses: {
      value: cdktf.listMapperHcl(zonePrimaryCreateInfoNotifyAddressesToHclTerraform, true)(struct!.notifyAddresses),
      isBlock: true,
      type: "set",
      storageClassType: "ZonePrimaryCreateInfoNotifyAddressesList",
    },
    restrict_ip: {
      value: cdktf.listMapperHcl(zonePrimaryCreateInfoRestrictIpToHclTerraform, true)(struct!.restrictIp),
      isBlock: true,
      type: "set",
      storageClassType: "ZonePrimaryCreateInfoRestrictIpList",
    },
    tsig: {
      value: zonePrimaryCreateInfoTsigToHclTerraform(struct!.tsig),
      isBlock: true,
      type: "list",
      storageClassType: "ZonePrimaryCreateInfoTsigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZonePrimaryCreateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZonePrimaryCreateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createType !== undefined) {
      hasAnyValues = true;
      internalValueResult.createType = this._createType;
    }
    if (this._forceImport !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceImport = this._forceImport;
    }
    if (this._inherit !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherit = this._inherit;
    }
    if (this._originalZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalZoneName = this._originalZoneName;
    }
    if (this._nameServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer?.internalValue;
    }
    if (this._notifyAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyAddresses = this._notifyAddresses?.internalValue;
    }
    if (this._restrictIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictIp = this._restrictIp?.internalValue;
    }
    if (this._tsig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsig = this._tsig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZonePrimaryCreateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createType = undefined;
      this._forceImport = undefined;
      this._inherit = undefined;
      this._originalZoneName = undefined;
      this._nameServer.internalValue = undefined;
      this._notifyAddresses.internalValue = undefined;
      this._restrictIp.internalValue = undefined;
      this._tsig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createType = value.createType;
      this._forceImport = value.forceImport;
      this._inherit = value.inherit;
      this._originalZoneName = value.originalZoneName;
      this._nameServer.internalValue = value.nameServer;
      this._notifyAddresses.internalValue = value.notifyAddresses;
      this._restrictIp.internalValue = value.restrictIp;
      this._tsig.internalValue = value.tsig;
    }
  }

  // create_type - computed: false, optional: false, required: true
  private _createType?: string; 
  public get createType() {
    return this.getStringAttribute('create_type');
  }
  public set createType(value: string) {
    this._createType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get createTypeInput() {
    return this._createType;
  }

  // force_import - computed: false, optional: true, required: false
  private _forceImport?: boolean | cdktf.IResolvable; 
  public get forceImport() {
    return this.getBooleanAttribute('force_import');
  }
  public set forceImport(value: boolean | cdktf.IResolvable) {
    this._forceImport = value;
  }
  public resetForceImport() {
    this._forceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceImportInput() {
    return this._forceImport;
  }

  // inherit - computed: true, optional: true, required: false
  private _inherit?: string; 
  public get inherit() {
    return this.getStringAttribute('inherit');
  }
  public set inherit(value: string) {
    this._inherit = value;
  }
  public resetInherit() {
    this._inherit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit;
  }

  // original_zone_name - computed: false, optional: true, required: false
  private _originalZoneName?: string; 
  public get originalZoneName() {
    return this.getStringAttribute('original_zone_name');
  }
  public set originalZoneName(value: string) {
    this._originalZoneName = value;
  }
  public resetOriginalZoneName() {
    this._originalZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalZoneNameInput() {
    return this._originalZoneName;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer = new ZonePrimaryCreateInfoNameServerOutputReference(this, "name_server");
  public get nameServer() {
    return this._nameServer;
  }
  public putNameServer(value: ZonePrimaryCreateInfoNameServer) {
    this._nameServer.internalValue = value;
  }
  public resetNameServer() {
    this._nameServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer.internalValue;
  }

  // notify_addresses - computed: false, optional: true, required: false
  private _notifyAddresses = new ZonePrimaryCreateInfoNotifyAddressesList(this, "notify_addresses", true);
  public get notifyAddresses() {
    return this._notifyAddresses;
  }
  public putNotifyAddresses(value: ZonePrimaryCreateInfoNotifyAddresses[] | cdktf.IResolvable) {
    this._notifyAddresses.internalValue = value;
  }
  public resetNotifyAddresses() {
    this._notifyAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAddressesInput() {
    return this._notifyAddresses.internalValue;
  }

  // restrict_ip - computed: false, optional: true, required: false
  private _restrictIp = new ZonePrimaryCreateInfoRestrictIpList(this, "restrict_ip", true);
  public get restrictIp() {
    return this._restrictIp;
  }
  public putRestrictIp(value: ZonePrimaryCreateInfoRestrictIp[] | cdktf.IResolvable) {
    this._restrictIp.internalValue = value;
  }
  public resetRestrictIp() {
    this._restrictIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictIpInput() {
    return this._restrictIp.internalValue;
  }

  // tsig - computed: false, optional: true, required: false
  private _tsig = new ZonePrimaryCreateInfoTsigOutputReference(this, "tsig");
  public get tsig() {
    return this._tsig;
  }
  public putTsig(value: ZonePrimaryCreateInfoTsig) {
    this._tsig.internalValue = value;
  }
  public resetTsig() {
    this._tsig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigInput() {
    return this._tsig.internalValue;
  }
}
export interface ZoneRegistrarInfoNameServers {
}

export function zoneRegistrarInfoNameServersToTerraform(struct?: ZoneRegistrarInfoNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneRegistrarInfoNameServersToHclTerraform(struct?: ZoneRegistrarInfoNameServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneRegistrarInfoNameServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZoneRegistrarInfoNameServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneRegistrarInfoNameServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // incorrect - computed: true, optional: false, required: false
  public get incorrect() {
    return this.getListAttribute('incorrect');
  }

  // missing - computed: true, optional: false, required: false
  public get missing() {
    return this.getListAttribute('missing');
  }

  // ok - computed: true, optional: false, required: false
  public get ok() {
    return this.getListAttribute('ok');
  }

  // unknown - computed: true, optional: false, required: false
  public get unknown() {
    return this.getListAttribute('unknown');
  }
}

export class ZoneRegistrarInfoNameServersList extends cdktf.ComplexList {

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
  public get(index: number): ZoneRegistrarInfoNameServersOutputReference {
    return new ZoneRegistrarInfoNameServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZoneRegistrarInfo {
}

export function zoneRegistrarInfoToTerraform(struct?: ZoneRegistrarInfoOutputReference | ZoneRegistrarInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneRegistrarInfoToHclTerraform(struct?: ZoneRegistrarInfoOutputReference | ZoneRegistrarInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneRegistrarInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneRegistrarInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneRegistrarInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name_servers - computed: true, optional: false, required: false
  private _nameServers = new ZoneRegistrarInfoNameServersList(this, "name_servers", false);
  public get nameServers() {
    return this._nameServers;
  }

  // registrar - computed: true, optional: false, required: false
  public get registrar() {
    return this.getStringAttribute('registrar');
  }

  // who_is_expiration - computed: true, optional: false, required: false
  public get whoIsExpiration() {
    return this.getStringAttribute('who_is_expiration');
  }
}
export interface ZoneSecondaryCreateInfoPrimaryNameServer1 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#ip Zone#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_algorithm Zone#tsig_algorithm}
  */
  readonly tsigAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key Zone#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_value Zone#tsig_key_value}
  */
  readonly tsigKeyValue?: string;
}

export function zoneSecondaryCreateInfoPrimaryNameServer1ToTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer1OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    tsig_algorithm: cdktf.stringToTerraform(struct!.tsigAlgorithm),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_value: cdktf.stringToTerraform(struct!.tsigKeyValue),
  }
}


export function zoneSecondaryCreateInfoPrimaryNameServer1ToHclTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer1OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigAlgorithm),
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
    tsig_key_value: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSecondaryCreateInfoPrimaryNameServer1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSecondaryCreateInfoPrimaryNameServer1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._tsigAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigAlgorithm = this._tsigAlgorithm;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSecondaryCreateInfoPrimaryNameServer1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._tsigAlgorithm = undefined;
      this._tsigKey = undefined;
      this._tsigKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._tsigAlgorithm = value.tsigAlgorithm;
      this._tsigKey = value.tsigKey;
      this._tsigKeyValue = value.tsigKeyValue;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // tsig_algorithm - computed: false, optional: true, required: false
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  public resetTsigAlgorithm() {
    this._tsigAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key - computed: false, optional: true, required: false
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

  // tsig_key_value - computed: false, optional: true, required: false
  private _tsigKeyValue?: string; 
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
  public set tsigKeyValue(value: string) {
    this._tsigKeyValue = value;
  }
  public resetTsigKeyValue() {
    this._tsigKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue;
  }
}
export interface ZoneSecondaryCreateInfoPrimaryNameServer2 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#ip Zone#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_algorithm Zone#tsig_algorithm}
  */
  readonly tsigAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key Zone#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_value Zone#tsig_key_value}
  */
  readonly tsigKeyValue?: string;
}

export function zoneSecondaryCreateInfoPrimaryNameServer2ToTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer2OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    tsig_algorithm: cdktf.stringToTerraform(struct!.tsigAlgorithm),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_value: cdktf.stringToTerraform(struct!.tsigKeyValue),
  }
}


export function zoneSecondaryCreateInfoPrimaryNameServer2ToHclTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer2OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigAlgorithm),
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
    tsig_key_value: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSecondaryCreateInfoPrimaryNameServer2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSecondaryCreateInfoPrimaryNameServer2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._tsigAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigAlgorithm = this._tsigAlgorithm;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSecondaryCreateInfoPrimaryNameServer2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._tsigAlgorithm = undefined;
      this._tsigKey = undefined;
      this._tsigKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._tsigAlgorithm = value.tsigAlgorithm;
      this._tsigKey = value.tsigKey;
      this._tsigKeyValue = value.tsigKeyValue;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // tsig_algorithm - computed: false, optional: true, required: false
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  public resetTsigAlgorithm() {
    this._tsigAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key - computed: false, optional: true, required: false
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

  // tsig_key_value - computed: false, optional: true, required: false
  private _tsigKeyValue?: string; 
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
  public set tsigKeyValue(value: string) {
    this._tsigKeyValue = value;
  }
  public resetTsigKeyValue() {
    this._tsigKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue;
  }
}
export interface ZoneSecondaryCreateInfoPrimaryNameServer3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#ip Zone#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_algorithm Zone#tsig_algorithm}
  */
  readonly tsigAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key Zone#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#tsig_key_value Zone#tsig_key_value}
  */
  readonly tsigKeyValue?: string;
}

export function zoneSecondaryCreateInfoPrimaryNameServer3ToTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer3OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    tsig_algorithm: cdktf.stringToTerraform(struct!.tsigAlgorithm),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_value: cdktf.stringToTerraform(struct!.tsigKeyValue),
  }
}


export function zoneSecondaryCreateInfoPrimaryNameServer3ToHclTerraform(struct?: ZoneSecondaryCreateInfoPrimaryNameServer3OutputReference | ZoneSecondaryCreateInfoPrimaryNameServer3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tsigAlgorithm),
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
    tsig_key_value: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSecondaryCreateInfoPrimaryNameServer3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSecondaryCreateInfoPrimaryNameServer3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._tsigAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigAlgorithm = this._tsigAlgorithm;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyValue = this._tsigKeyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSecondaryCreateInfoPrimaryNameServer3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._tsigAlgorithm = undefined;
      this._tsigKey = undefined;
      this._tsigKeyValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._tsigAlgorithm = value.tsigAlgorithm;
      this._tsigKey = value.tsigKey;
      this._tsigKeyValue = value.tsigKeyValue;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // tsig_algorithm - computed: false, optional: true, required: false
  private _tsigAlgorithm?: string; 
  public get tsigAlgorithm() {
    return this.getStringAttribute('tsig_algorithm');
  }
  public set tsigAlgorithm(value: string) {
    this._tsigAlgorithm = value;
  }
  public resetTsigAlgorithm() {
    this._tsigAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigAlgorithmInput() {
    return this._tsigAlgorithm;
  }

  // tsig_key - computed: false, optional: true, required: false
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

  // tsig_key_value - computed: false, optional: true, required: false
  private _tsigKeyValue?: string; 
  public get tsigKeyValue() {
    return this.getStringAttribute('tsig_key_value');
  }
  public set tsigKeyValue(value: string) {
    this._tsigKeyValue = value;
  }
  public resetTsigKeyValue() {
    this._tsigKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyValueInput() {
    return this._tsigKeyValue;
  }
}
export interface ZoneSecondaryCreateInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#notification_email_address Zone#notification_email_address}
  */
  readonly notificationEmailAddress?: string;
  /**
  * primary_name_server_1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#primary_name_server_1 Zone#primary_name_server_1}
  */
  readonly primaryNameServer1: ZoneSecondaryCreateInfoPrimaryNameServer1;
  /**
  * primary_name_server_2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#primary_name_server_2 Zone#primary_name_server_2}
  */
  readonly primaryNameServer2?: ZoneSecondaryCreateInfoPrimaryNameServer2;
  /**
  * primary_name_server_3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#primary_name_server_3 Zone#primary_name_server_3}
  */
  readonly primaryNameServer3?: ZoneSecondaryCreateInfoPrimaryNameServer3;
}

export function zoneSecondaryCreateInfoToTerraform(struct?: ZoneSecondaryCreateInfoOutputReference | ZoneSecondaryCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_email_address: cdktf.stringToTerraform(struct!.notificationEmailAddress),
    primary_name_server_1: zoneSecondaryCreateInfoPrimaryNameServer1ToTerraform(struct!.primaryNameServer1),
    primary_name_server_2: zoneSecondaryCreateInfoPrimaryNameServer2ToTerraform(struct!.primaryNameServer2),
    primary_name_server_3: zoneSecondaryCreateInfoPrimaryNameServer3ToTerraform(struct!.primaryNameServer3),
  }
}


export function zoneSecondaryCreateInfoToHclTerraform(struct?: ZoneSecondaryCreateInfoOutputReference | ZoneSecondaryCreateInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_email_address: {
      value: cdktf.stringToHclTerraform(struct!.notificationEmailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_name_server_1: {
      value: zoneSecondaryCreateInfoPrimaryNameServer1ToHclTerraform(struct!.primaryNameServer1),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneSecondaryCreateInfoPrimaryNameServer1List",
    },
    primary_name_server_2: {
      value: zoneSecondaryCreateInfoPrimaryNameServer2ToHclTerraform(struct!.primaryNameServer2),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneSecondaryCreateInfoPrimaryNameServer2List",
    },
    primary_name_server_3: {
      value: zoneSecondaryCreateInfoPrimaryNameServer3ToHclTerraform(struct!.primaryNameServer3),
      isBlock: true,
      type: "list",
      storageClassType: "ZoneSecondaryCreateInfoPrimaryNameServer3List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZoneSecondaryCreateInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneSecondaryCreateInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationEmailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEmailAddress = this._notificationEmailAddress;
    }
    if (this._primaryNameServer1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNameServer1 = this._primaryNameServer1?.internalValue;
    }
    if (this._primaryNameServer2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNameServer2 = this._primaryNameServer2?.internalValue;
    }
    if (this._primaryNameServer3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNameServer3 = this._primaryNameServer3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneSecondaryCreateInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationEmailAddress = undefined;
      this._primaryNameServer1.internalValue = undefined;
      this._primaryNameServer2.internalValue = undefined;
      this._primaryNameServer3.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationEmailAddress = value.notificationEmailAddress;
      this._primaryNameServer1.internalValue = value.primaryNameServer1;
      this._primaryNameServer2.internalValue = value.primaryNameServer2;
      this._primaryNameServer3.internalValue = value.primaryNameServer3;
    }
  }

  // notification_email_address - computed: false, optional: true, required: false
  private _notificationEmailAddress?: string; 
  public get notificationEmailAddress() {
    return this.getStringAttribute('notification_email_address');
  }
  public set notificationEmailAddress(value: string) {
    this._notificationEmailAddress = value;
  }
  public resetNotificationEmailAddress() {
    this._notificationEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailAddressInput() {
    return this._notificationEmailAddress;
  }

  // primary_name_server_1 - computed: false, optional: false, required: true
  private _primaryNameServer1 = new ZoneSecondaryCreateInfoPrimaryNameServer1OutputReference(this, "primary_name_server_1");
  public get primaryNameServer1() {
    return this._primaryNameServer1;
  }
  public putPrimaryNameServer1(value: ZoneSecondaryCreateInfoPrimaryNameServer1) {
    this._primaryNameServer1.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameServer1Input() {
    return this._primaryNameServer1.internalValue;
  }

  // primary_name_server_2 - computed: false, optional: true, required: false
  private _primaryNameServer2 = new ZoneSecondaryCreateInfoPrimaryNameServer2OutputReference(this, "primary_name_server_2");
  public get primaryNameServer2() {
    return this._primaryNameServer2;
  }
  public putPrimaryNameServer2(value: ZoneSecondaryCreateInfoPrimaryNameServer2) {
    this._primaryNameServer2.internalValue = value;
  }
  public resetPrimaryNameServer2() {
    this._primaryNameServer2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameServer2Input() {
    return this._primaryNameServer2.internalValue;
  }

  // primary_name_server_3 - computed: false, optional: true, required: false
  private _primaryNameServer3 = new ZoneSecondaryCreateInfoPrimaryNameServer3OutputReference(this, "primary_name_server_3");
  public get primaryNameServer3() {
    return this._primaryNameServer3;
  }
  public putPrimaryNameServer3(value: ZoneSecondaryCreateInfoPrimaryNameServer3) {
    this._primaryNameServer3.internalValue = value;
  }
  public resetPrimaryNameServer3() {
    this._primaryNameServer3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameServer3Input() {
    return this._primaryNameServer3.internalValue;
  }
}
export interface ZoneTransferStatusDetails {
}

export function zoneTransferStatusDetailsToTerraform(struct?: ZoneTransferStatusDetailsOutputReference | ZoneTransferStatusDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function zoneTransferStatusDetailsToHclTerraform(struct?: ZoneTransferStatusDetailsOutputReference | ZoneTransferStatusDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ZoneTransferStatusDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZoneTransferStatusDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZoneTransferStatusDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_refresh - computed: true, optional: false, required: false
  public get lastRefresh() {
    return this.getStringAttribute('last_refresh');
  }

  // last_refresh_status - computed: true, optional: false, required: false
  public get lastRefreshStatus() {
    return this.getStringAttribute('last_refresh_status');
  }

  // last_refresh_status_message - computed: true, optional: false, required: false
  public get lastRefreshStatusMessage() {
    return this.getStringAttribute('last_refresh_status_message');
  }

  // next_refresh - computed: true, optional: false, required: false
  public get nextRefresh() {
    return this.getStringAttribute('next_refresh');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone ultradns_zone}
*/
export class Zone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Zone to import
  * @param importFromId The id of the existing Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/zone ultradns_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_zone',
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
    this._accountName = config.accountName;
    this._changeComment = config.changeComment;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._aliasCreateInfo.internalValue = config.aliasCreateInfo;
    this._primaryCreateInfo.internalValue = config.primaryCreateInfo;
    this._registrarInfo.internalValue = config.registrarInfo;
    this._secondaryCreateInfo.internalValue = config.secondaryCreateInfo;
    this._transferStatusDetails.internalValue = config.transferStatusDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // change_comment - computed: false, optional: true, required: false
  private _changeComment?: string; 
  public get changeComment() {
    return this.getStringAttribute('change_comment');
  }
  public set changeComment(value: string) {
    this._changeComment = value;
  }
  public resetChangeComment() {
    this._changeComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeCommentInput() {
    return this._changeComment;
  }

  // dnssec_status - computed: true, optional: false, required: false
  public get dnssecStatus() {
    return this.getStringAttribute('dnssec_status');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // resource_record_count - computed: true, optional: false, required: false
  public get resourceRecordCount() {
    return this.getNumberAttribute('resource_record_count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // alias_create_info - computed: false, optional: true, required: false
  private _aliasCreateInfo = new ZoneAliasCreateInfoOutputReference(this, "alias_create_info");
  public get aliasCreateInfo() {
    return this._aliasCreateInfo;
  }
  public putAliasCreateInfo(value: ZoneAliasCreateInfo) {
    this._aliasCreateInfo.internalValue = value;
  }
  public resetAliasCreateInfo() {
    this._aliasCreateInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasCreateInfoInput() {
    return this._aliasCreateInfo.internalValue;
  }

  // primary_create_info - computed: false, optional: true, required: false
  private _primaryCreateInfo = new ZonePrimaryCreateInfoOutputReference(this, "primary_create_info");
  public get primaryCreateInfo() {
    return this._primaryCreateInfo;
  }
  public putPrimaryCreateInfo(value: ZonePrimaryCreateInfo) {
    this._primaryCreateInfo.internalValue = value;
  }
  public resetPrimaryCreateInfo() {
    this._primaryCreateInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCreateInfoInput() {
    return this._primaryCreateInfo.internalValue;
  }

  // registrar_info - computed: false, optional: true, required: false
  private _registrarInfo = new ZoneRegistrarInfoOutputReference(this, "registrar_info");
  public get registrarInfo() {
    return this._registrarInfo;
  }
  public putRegistrarInfo(value: ZoneRegistrarInfo) {
    this._registrarInfo.internalValue = value;
  }
  public resetRegistrarInfo() {
    this._registrarInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrarInfoInput() {
    return this._registrarInfo.internalValue;
  }

  // secondary_create_info - computed: false, optional: true, required: false
  private _secondaryCreateInfo = new ZoneSecondaryCreateInfoOutputReference(this, "secondary_create_info");
  public get secondaryCreateInfo() {
    return this._secondaryCreateInfo;
  }
  public putSecondaryCreateInfo(value: ZoneSecondaryCreateInfo) {
    this._secondaryCreateInfo.internalValue = value;
  }
  public resetSecondaryCreateInfo() {
    this._secondaryCreateInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCreateInfoInput() {
    return this._secondaryCreateInfo.internalValue;
  }

  // transfer_status_details - computed: false, optional: true, required: false
  private _transferStatusDetails = new ZoneTransferStatusDetailsOutputReference(this, "transfer_status_details");
  public get transferStatusDetails() {
    return this._transferStatusDetails;
  }
  public putTransferStatusDetails(value: ZoneTransferStatusDetails) {
    this._transferStatusDetails.internalValue = value;
  }
  public resetTransferStatusDetails() {
    this._transferStatusDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferStatusDetailsInput() {
    return this._transferStatusDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      change_comment: cdktf.stringToTerraform(this._changeComment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      alias_create_info: zoneAliasCreateInfoToTerraform(this._aliasCreateInfo.internalValue),
      primary_create_info: zonePrimaryCreateInfoToTerraform(this._primaryCreateInfo.internalValue),
      registrar_info: zoneRegistrarInfoToTerraform(this._registrarInfo.internalValue),
      secondary_create_info: zoneSecondaryCreateInfoToTerraform(this._secondaryCreateInfo.internalValue),
      transfer_status_details: zoneTransferStatusDetailsToTerraform(this._transferStatusDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_comment: {
        value: cdktf.stringToHclTerraform(this._changeComment),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_create_info: {
        value: zoneAliasCreateInfoToHclTerraform(this._aliasCreateInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneAliasCreateInfoList",
      },
      primary_create_info: {
        value: zonePrimaryCreateInfoToHclTerraform(this._primaryCreateInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZonePrimaryCreateInfoList",
      },
      registrar_info: {
        value: zoneRegistrarInfoToHclTerraform(this._registrarInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneRegistrarInfoList",
      },
      secondary_create_info: {
        value: zoneSecondaryCreateInfoToHclTerraform(this._secondaryCreateInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneSecondaryCreateInfoList",
      },
      transfer_status_details: {
        value: zoneTransferStatusDetailsToHclTerraform(this._transferStatusDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZoneTransferStatusDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
