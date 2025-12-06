// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdmCertAssetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The keychain accessibility that determines when the keychain item is available for use. Defaults to `Default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#accessible MdmCertAsset#accessible}
  */
  readonly accessible?: string;
  /**
  * `ID` of the optional MDM ACME issuer that could be used to issue the certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#acme_issuer_id MdmCertAsset#acme_issuer_id}
  */
  readonly acmeIssuerId?: string;
  /**
  * `ID` of the cert asset artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#artifact_id MdmCertAsset#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The default shard value. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#default_shard MdmCertAsset#default_shard}
  */
  readonly defaultShard?: number;
  /**
  * Machines tagged with one of these tags will not receive the cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#excluded_tag_ids MdmCertAsset#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * Toggles the installation of the cert asset on iOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ios MdmCertAsset#ios}
  */
  readonly ios?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iOS version or higher will **not** receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ios_max_version MdmCertAsset#ios_max_version}
  */
  readonly iosMaxVersion?: string;
  /**
  * Devices with this iOS version or higher will receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ios_min_version MdmCertAsset#ios_min_version}
  */
  readonly iosMinVersion?: string;
  /**
  * Toggles the installation of the cert asset on iPadOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ipados MdmCertAsset#ipados}
  */
  readonly ipados?: boolean | cdktf.IResolvable;
  /**
  * Devices with this iPadOS version or higher will **not** receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ipados_max_version MdmCertAsset#ipados_max_version}
  */
  readonly ipadosMaxVersion?: string;
  /**
  * Devices with this iPadOS version or higher will receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#ipados_min_version MdmCertAsset#ipados_min_version}
  */
  readonly ipadosMinVersion?: string;
  /**
  * Toggles the installation of the cert asset on macOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#macos MdmCertAsset#macos}
  */
  readonly macos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this macOS version or higher will **not** receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#macos_max_version MdmCertAsset#macos_max_version}
  */
  readonly macosMaxVersion?: string;
  /**
  * Devices with this macOS version or higher will receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#macos_min_version MdmCertAsset#macos_min_version}
  */
  readonly macosMinVersion?: string;
  /**
  * `ID` of the MDM SCEP issuer that could be used to issue the certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#scep_issuer_id MdmCertAsset#scep_issuer_id}
  */
  readonly scepIssuerId?: string;
  /**
  * The modulo used to calculate the shards. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#shard_modulo MdmCertAsset#shard_modulo}
  */
  readonly shardModulo?: number;
  /**
  * A set of relative distinguished names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#subject MdmCertAsset#subject}
  */
  readonly subject?: MdmCertAssetSubject[] | cdktf.IResolvable;
  /**
  * The subject's alternative name for the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#subject_alt_name MdmCertAsset#subject_alt_name}
  */
  readonly subjectAltName?: MdmCertAssetSubjectAltName;
  /**
  * A set of tag shard values different from the default shard, to determine if the tagged machines will receive the cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#tag_shards MdmCertAsset#tag_shards}
  */
  readonly tagShards?: MdmCertAssetTagShards[] | cdktf.IResolvable;
  /**
  * Toggles the installation of the cert asset on tvOS devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#tvos MdmCertAsset#tvos}
  */
  readonly tvos?: boolean | cdktf.IResolvable;
  /**
  * Devices with this tvOS version or higher will **not** receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#tvos_max_version MdmCertAsset#tvos_max_version}
  */
  readonly tvosMaxVersion?: string;
  /**
  * Devices with this tvOS version or higher will receive this cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#tvos_min_version MdmCertAsset#tvos_min_version}
  */
  readonly tvosMinVersion?: string;
  /**
  * Version of the cert asset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#version MdmCertAsset#version}
  */
  readonly version: number;
}
export interface MdmCertAssetSubject {
  /**
  * Type of the RDN. You can represent OIDs as dotted numbers or use shortcuts for country (`C`), locality (`L`), state (`ST`), organization (`O`), organizational unit (`OU`), and common name (`CN`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#type MdmCertAsset#type}
  */
  readonly type: string;
  /**
  * The value of the RDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#value MdmCertAsset#value}
  */
  readonly value: string;
}

export function mdmCertAssetSubjectToTerraform(struct?: MdmCertAssetSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mdmCertAssetSubjectToHclTerraform(struct?: MdmCertAssetSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmCertAssetSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmCertAssetSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmCertAssetSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MdmCertAssetSubjectList extends cdktf.ComplexList {
  public internalValue? : MdmCertAssetSubject[] | cdktf.IResolvable

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
  public get(index: number): MdmCertAssetSubjectOutputReference {
    return new MdmCertAssetSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MdmCertAssetSubjectAltName {
  /**
  * The DNS name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#dns_name MdmCertAsset#dns_name}
  */
  readonly dnsName?: string;
  /**
  * The NT principal name. Use an OID set to `1.3.6.1.4.1.311.20.2.3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#nt_principal_name MdmCertAsset#nt_principal_name}
  */
  readonly ntPrincipalName?: string;
  /**
  * The RFC 822 email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#rfc822_name MdmCertAsset#rfc822_name}
  */
  readonly rfc822Name?: string;
  /**
  * The uniform resource identifier (URI).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#uri MdmCertAsset#uri}
  */
  readonly uri?: string;
}

export function mdmCertAssetSubjectAltNameToTerraform(struct?: MdmCertAssetSubjectAltName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    nt_principal_name: cdktf.stringToTerraform(struct!.ntPrincipalName),
    rfc822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function mdmCertAssetSubjectAltNameToHclTerraform(struct?: MdmCertAssetSubjectAltName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nt_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.ntPrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc822_name: {
      value: cdktf.stringToHclTerraform(struct!.rfc822Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmCertAssetSubjectAltNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdmCertAssetSubjectAltName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._ntPrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntPrincipalName = this._ntPrincipalName;
    }
    if (this._rfc822Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc822Name = this._rfc822Name;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmCertAssetSubjectAltName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsName = undefined;
      this._ntPrincipalName = undefined;
      this._rfc822Name = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsName = value.dnsName;
      this._ntPrincipalName = value.ntPrincipalName;
      this._rfc822Name = value.rfc822Name;
      this._uri = value.uri;
    }
  }

  // dns_name - computed: true, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // nt_principal_name - computed: true, optional: true, required: false
  private _ntPrincipalName?: string; 
  public get ntPrincipalName() {
    return this.getStringAttribute('nt_principal_name');
  }
  public set ntPrincipalName(value: string) {
    this._ntPrincipalName = value;
  }
  public resetNtPrincipalName() {
    this._ntPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntPrincipalNameInput() {
    return this._ntPrincipalName;
  }

  // rfc822_name - computed: true, optional: true, required: false
  private _rfc822Name?: string; 
  public get rfc822Name() {
    return this.getStringAttribute('rfc822_name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface MdmCertAssetTagShards {
  /**
  * The shard for the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#shard MdmCertAsset#shard}
  */
  readonly shard: number;
  /**
  * The `ID` of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#tag_id MdmCertAsset#tag_id}
  */
  readonly tagId: number;
}

export function mdmCertAssetTagShardsToTerraform(struct?: MdmCertAssetTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
    tag_id: cdktf.numberToTerraform(struct!.tagId),
  }
}


export function mdmCertAssetTagShardsToHclTerraform(struct?: MdmCertAssetTagShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard: {
      value: cdktf.numberToHclTerraform(struct!.shard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_id: {
      value: cdktf.numberToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdmCertAssetTagShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MdmCertAssetTagShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard;
    }
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdmCertAssetTagShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shard = undefined;
      this._tagId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shard = value.shard;
      this._tagId = value.tagId;
    }
  }

  // shard - computed: true, optional: false, required: true
  private _shard?: number; 
  public get shard() {
    return this.getNumberAttribute('shard');
  }
  public set shard(value: number) {
    this._shard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // tag_id - computed: true, optional: false, required: true
  private _tagId?: number; 
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }
  public set tagId(value: number) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }
}

export class MdmCertAssetTagShardsList extends cdktf.ComplexList {
  public internalValue? : MdmCertAssetTagShards[] | cdktf.IResolvable

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
  public get(index: number): MdmCertAssetTagShardsOutputReference {
    return new MdmCertAssetTagShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset zentral_mdm_cert_asset}
*/
export class MdmCertAsset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_mdm_cert_asset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdmCertAsset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdmCertAsset to import
  * @param importFromId The id of the existing MdmCertAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdmCertAsset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_mdm_cert_asset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/mdm_cert_asset zentral_mdm_cert_asset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdmCertAssetConfig
  */
  public constructor(scope: Construct, id: string, config: MdmCertAssetConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_mdm_cert_asset',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessible = config.accessible;
    this._acmeIssuerId = config.acmeIssuerId;
    this._artifactId = config.artifactId;
    this._defaultShard = config.defaultShard;
    this._excludedTagIds = config.excludedTagIds;
    this._ios = config.ios;
    this._iosMaxVersion = config.iosMaxVersion;
    this._iosMinVersion = config.iosMinVersion;
    this._ipados = config.ipados;
    this._ipadosMaxVersion = config.ipadosMaxVersion;
    this._ipadosMinVersion = config.ipadosMinVersion;
    this._macos = config.macos;
    this._macosMaxVersion = config.macosMaxVersion;
    this._macosMinVersion = config.macosMinVersion;
    this._scepIssuerId = config.scepIssuerId;
    this._shardModulo = config.shardModulo;
    this._subject.internalValue = config.subject;
    this._subjectAltName.internalValue = config.subjectAltName;
    this._tagShards.internalValue = config.tagShards;
    this._tvos = config.tvos;
    this._tvosMaxVersion = config.tvosMaxVersion;
    this._tvosMinVersion = config.tvosMinVersion;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessible - computed: true, optional: true, required: false
  private _accessible?: string; 
  public get accessible() {
    return this.getStringAttribute('accessible');
  }
  public set accessible(value: string) {
    this._accessible = value;
  }
  public resetAccessible() {
    this._accessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibleInput() {
    return this._accessible;
  }

  // acme_issuer_id - computed: false, optional: true, required: false
  private _acmeIssuerId?: string; 
  public get acmeIssuerId() {
    return this.getStringAttribute('acme_issuer_id');
  }
  public set acmeIssuerId(value: string) {
    this._acmeIssuerId = value;
  }
  public resetAcmeIssuerId() {
    this._acmeIssuerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeIssuerIdInput() {
    return this._acmeIssuerId;
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // default_shard - computed: true, optional: true, required: false
  private _defaultShard?: number; 
  public get defaultShard() {
    return this.getNumberAttribute('default_shard');
  }
  public set defaultShard(value: number) {
    this._defaultShard = value;
  }
  public resetDefaultShard() {
    this._defaultShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultShardInput() {
    return this._defaultShard;
  }

  // excluded_tag_ids - computed: true, optional: true, required: false
  private _excludedTagIds?: number[]; 
  public get excludedTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_tag_ids')));
  }
  public set excludedTagIds(value: number[]) {
    this._excludedTagIds = value;
  }
  public resetExcludedTagIds() {
    this._excludedTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagIdsInput() {
    return this._excludedTagIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ios - computed: true, optional: true, required: false
  private _ios?: boolean | cdktf.IResolvable; 
  public get ios() {
    return this.getBooleanAttribute('ios');
  }
  public set ios(value: boolean | cdktf.IResolvable) {
    this._ios = value;
  }
  public resetIos() {
    this._ios = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosInput() {
    return this._ios;
  }

  // ios_max_version - computed: true, optional: true, required: false
  private _iosMaxVersion?: string; 
  public get iosMaxVersion() {
    return this.getStringAttribute('ios_max_version');
  }
  public set iosMaxVersion(value: string) {
    this._iosMaxVersion = value;
  }
  public resetIosMaxVersion() {
    this._iosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosMaxVersionInput() {
    return this._iosMaxVersion;
  }

  // ios_min_version - computed: true, optional: true, required: false
  private _iosMinVersion?: string; 
  public get iosMinVersion() {
    return this.getStringAttribute('ios_min_version');
  }
  public set iosMinVersion(value: string) {
    this._iosMinVersion = value;
  }
  public resetIosMinVersion() {
    this._iosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iosMinVersionInput() {
    return this._iosMinVersion;
  }

  // ipados - computed: true, optional: true, required: false
  private _ipados?: boolean | cdktf.IResolvable; 
  public get ipados() {
    return this.getBooleanAttribute('ipados');
  }
  public set ipados(value: boolean | cdktf.IResolvable) {
    this._ipados = value;
  }
  public resetIpados() {
    this._ipados = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosInput() {
    return this._ipados;
  }

  // ipados_max_version - computed: true, optional: true, required: false
  private _ipadosMaxVersion?: string; 
  public get ipadosMaxVersion() {
    return this.getStringAttribute('ipados_max_version');
  }
  public set ipadosMaxVersion(value: string) {
    this._ipadosMaxVersion = value;
  }
  public resetIpadosMaxVersion() {
    this._ipadosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosMaxVersionInput() {
    return this._ipadosMaxVersion;
  }

  // ipados_min_version - computed: true, optional: true, required: false
  private _ipadosMinVersion?: string; 
  public get ipadosMinVersion() {
    return this.getStringAttribute('ipados_min_version');
  }
  public set ipadosMinVersion(value: string) {
    this._ipadosMinVersion = value;
  }
  public resetIpadosMinVersion() {
    this._ipadosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipadosMinVersionInput() {
    return this._ipadosMinVersion;
  }

  // macos - computed: true, optional: true, required: false
  private _macos?: boolean | cdktf.IResolvable; 
  public get macos() {
    return this.getBooleanAttribute('macos');
  }
  public set macos(value: boolean | cdktf.IResolvable) {
    this._macos = value;
  }
  public resetMacos() {
    this._macos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosInput() {
    return this._macos;
  }

  // macos_max_version - computed: true, optional: true, required: false
  private _macosMaxVersion?: string; 
  public get macosMaxVersion() {
    return this.getStringAttribute('macos_max_version');
  }
  public set macosMaxVersion(value: string) {
    this._macosMaxVersion = value;
  }
  public resetMacosMaxVersion() {
    this._macosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosMaxVersionInput() {
    return this._macosMaxVersion;
  }

  // macos_min_version - computed: true, optional: true, required: false
  private _macosMinVersion?: string; 
  public get macosMinVersion() {
    return this.getStringAttribute('macos_min_version');
  }
  public set macosMinVersion(value: string) {
    this._macosMinVersion = value;
  }
  public resetMacosMinVersion() {
    this._macosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosMinVersionInput() {
    return this._macosMinVersion;
  }

  // scep_issuer_id - computed: false, optional: true, required: false
  private _scepIssuerId?: string; 
  public get scepIssuerId() {
    return this.getStringAttribute('scep_issuer_id');
  }
  public set scepIssuerId(value: string) {
    this._scepIssuerId = value;
  }
  public resetScepIssuerId() {
    this._scepIssuerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepIssuerIdInput() {
    return this._scepIssuerId;
  }

  // shard_modulo - computed: true, optional: true, required: false
  private _shardModulo?: number; 
  public get shardModulo() {
    return this.getNumberAttribute('shard_modulo');
  }
  public set shardModulo(value: number) {
    this._shardModulo = value;
  }
  public resetShardModulo() {
    this._shardModulo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardModuloInput() {
    return this._shardModulo;
  }

  // subject - computed: true, optional: true, required: false
  private _subject = new MdmCertAssetSubjectList(this, "subject", true);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: MdmCertAssetSubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // subject_alt_name - computed: true, optional: true, required: false
  private _subjectAltName = new MdmCertAssetSubjectAltNameOutputReference(this, "subject_alt_name");
  public get subjectAltName() {
    return this._subjectAltName;
  }
  public putSubjectAltName(value: MdmCertAssetSubjectAltName) {
    this._subjectAltName.internalValue = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName.internalValue;
  }

  // tag_shards - computed: true, optional: true, required: false
  private _tagShards = new MdmCertAssetTagShardsList(this, "tag_shards", true);
  public get tagShards() {
    return this._tagShards;
  }
  public putTagShards(value: MdmCertAssetTagShards[] | cdktf.IResolvable) {
    this._tagShards.internalValue = value;
  }
  public resetTagShards() {
    this._tagShards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagShardsInput() {
    return this._tagShards.internalValue;
  }

  // tvos - computed: true, optional: true, required: false
  private _tvos?: boolean | cdktf.IResolvable; 
  public get tvos() {
    return this.getBooleanAttribute('tvos');
  }
  public set tvos(value: boolean | cdktf.IResolvable) {
    this._tvos = value;
  }
  public resetTvos() {
    this._tvos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosInput() {
    return this._tvos;
  }

  // tvos_max_version - computed: true, optional: true, required: false
  private _tvosMaxVersion?: string; 
  public get tvosMaxVersion() {
    return this.getStringAttribute('tvos_max_version');
  }
  public set tvosMaxVersion(value: string) {
    this._tvosMaxVersion = value;
  }
  public resetTvosMaxVersion() {
    this._tvosMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosMaxVersionInput() {
    return this._tvosMaxVersion;
  }

  // tvos_min_version - computed: true, optional: true, required: false
  private _tvosMinVersion?: string; 
  public get tvosMinVersion() {
    return this.getStringAttribute('tvos_min_version');
  }
  public set tvosMinVersion(value: string) {
    this._tvosMinVersion = value;
  }
  public resetTvosMinVersion() {
    this._tvosMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tvosMinVersionInput() {
    return this._tvosMinVersion;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessible: cdktf.stringToTerraform(this._accessible),
      acme_issuer_id: cdktf.stringToTerraform(this._acmeIssuerId),
      artifact_id: cdktf.stringToTerraform(this._artifactId),
      default_shard: cdktf.numberToTerraform(this._defaultShard),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      ios: cdktf.booleanToTerraform(this._ios),
      ios_max_version: cdktf.stringToTerraform(this._iosMaxVersion),
      ios_min_version: cdktf.stringToTerraform(this._iosMinVersion),
      ipados: cdktf.booleanToTerraform(this._ipados),
      ipados_max_version: cdktf.stringToTerraform(this._ipadosMaxVersion),
      ipados_min_version: cdktf.stringToTerraform(this._ipadosMinVersion),
      macos: cdktf.booleanToTerraform(this._macos),
      macos_max_version: cdktf.stringToTerraform(this._macosMaxVersion),
      macos_min_version: cdktf.stringToTerraform(this._macosMinVersion),
      scep_issuer_id: cdktf.stringToTerraform(this._scepIssuerId),
      shard_modulo: cdktf.numberToTerraform(this._shardModulo),
      subject: cdktf.listMapper(mdmCertAssetSubjectToTerraform, false)(this._subject.internalValue),
      subject_alt_name: mdmCertAssetSubjectAltNameToTerraform(this._subjectAltName.internalValue),
      tag_shards: cdktf.listMapper(mdmCertAssetTagShardsToTerraform, false)(this._tagShards.internalValue),
      tvos: cdktf.booleanToTerraform(this._tvos),
      tvos_max_version: cdktf.stringToTerraform(this._tvosMaxVersion),
      tvos_min_version: cdktf.stringToTerraform(this._tvosMinVersion),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessible: {
        value: cdktf.stringToHclTerraform(this._accessible),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_issuer_id: {
        value: cdktf.stringToHclTerraform(this._acmeIssuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_id: {
        value: cdktf.stringToHclTerraform(this._artifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_shard: {
        value: cdktf.numberToHclTerraform(this._defaultShard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excluded_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      ios: {
        value: cdktf.booleanToHclTerraform(this._ios),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ios_max_version: {
        value: cdktf.stringToHclTerraform(this._iosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ios_min_version: {
        value: cdktf.stringToHclTerraform(this._iosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipados: {
        value: cdktf.booleanToHclTerraform(this._ipados),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipados_max_version: {
        value: cdktf.stringToHclTerraform(this._ipadosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipados_min_version: {
        value: cdktf.stringToHclTerraform(this._ipadosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos: {
        value: cdktf.booleanToHclTerraform(this._macos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      macos_max_version: {
        value: cdktf.stringToHclTerraform(this._macosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macos_min_version: {
        value: cdktf.stringToHclTerraform(this._macosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_issuer_id: {
        value: cdktf.stringToHclTerraform(this._scepIssuerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_modulo: {
        value: cdktf.numberToHclTerraform(this._shardModulo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subject: {
        value: cdktf.listMapperHcl(mdmCertAssetSubjectToHclTerraform, false)(this._subject.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdmCertAssetSubjectList",
      },
      subject_alt_name: {
        value: mdmCertAssetSubjectAltNameToHclTerraform(this._subjectAltName.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdmCertAssetSubjectAltName",
      },
      tag_shards: {
        value: cdktf.listMapperHcl(mdmCertAssetTagShardsToHclTerraform, false)(this._tagShards.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MdmCertAssetTagShardsList",
      },
      tvos: {
        value: cdktf.booleanToHclTerraform(this._tvos),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tvos_max_version: {
        value: cdktf.stringToHclTerraform(this._tvosMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tvos_min_version: {
        value: cdktf.stringToHclTerraform(this._tvosMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
