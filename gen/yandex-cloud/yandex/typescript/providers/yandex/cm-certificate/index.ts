// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#deletion_protection CmCertificate#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#description CmCertificate#description}
  */
  readonly description?: string;
  /**
  * Domains for this certificate. Should be specified for managed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#domains CmCertificate#domains}
  */
  readonly domains?: string[];
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#folder_id CmCertificate#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#id CmCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#labels CmCertificate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#name CmCertificate#name}
  */
  readonly name: string;
  /**
  * managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#managed CmCertificate#managed}
  */
  readonly managed?: CmCertificateManaged;
  /**
  * self_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#self_managed CmCertificate#self_managed}
  */
  readonly selfManaged?: CmCertificateSelfManaged;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#timeouts CmCertificate#timeouts}
  */
  readonly timeouts?: CmCertificateTimeouts;
}
export interface CmCertificateChallenges {
}

export function cmCertificateChallengesToTerraform(struct?: CmCertificateChallenges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cmCertificateChallengesToHclTerraform(struct?: CmCertificateChallenges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CmCertificateChallengesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmCertificateChallenges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmCertificateChallenges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // dns_type - computed: true, optional: false, required: false
  public get dnsType() {
    return this.getStringAttribute('dns_type');
  }

  // dns_value - computed: true, optional: false, required: false
  public get dnsValue() {
    return this.getStringAttribute('dns_value');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // http_content - computed: true, optional: false, required: false
  public get httpContent() {
    return this.getStringAttribute('http_content');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CmCertificateChallengesList extends cdktf.ComplexList {

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
  public get(index: number): CmCertificateChallengesOutputReference {
    return new CmCertificateChallengesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmCertificateManaged {
  /**
  * Expected number of challenge count needed to validate certificate. Resource creation will fail if the specified value does not match the actual number of challenges received from issue provider. This argument is helpful for safe automatic resource creation for passing challenges for multi-domain certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#challenge_count CmCertificate#challenge_count}
  */
  readonly challengeCount?: number;
  /**
  * Domain owner-check method. Possible values:
  * * `DNS_CNAME` - you will need to create a CNAME dns record with the specified value. Recommended for fully automated certificate renewal.
  * * `DNS_TXT` - you will need to create a TXT dns record with specified value.
  * * `HTTP` - you will need to place specified value into specified url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#challenge_type CmCertificate#challenge_type}
  */
  readonly challengeType: string;
}

export function cmCertificateManagedToTerraform(struct?: CmCertificateManagedOutputReference | CmCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_count: cdktf.numberToTerraform(struct!.challengeCount),
    challenge_type: cdktf.stringToTerraform(struct!.challengeType),
  }
}


export function cmCertificateManagedToHclTerraform(struct?: CmCertificateManagedOutputReference | CmCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_count: {
      value: cdktf.numberToHclTerraform(struct!.challengeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_type: {
      value: cdktf.stringToHclTerraform(struct!.challengeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmCertificateManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmCertificateManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeCount = this._challengeCount;
    }
    if (this._challengeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeType = this._challengeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmCertificateManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengeCount = undefined;
      this._challengeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengeCount = value.challengeCount;
      this._challengeType = value.challengeType;
    }
  }

  // challenge_count - computed: false, optional: true, required: false
  private _challengeCount?: number; 
  public get challengeCount() {
    return this.getNumberAttribute('challenge_count');
  }
  public set challengeCount(value: number) {
    this._challengeCount = value;
  }
  public resetChallengeCount() {
    this._challengeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeCountInput() {
    return this._challengeCount;
  }

  // challenge_type - computed: false, optional: false, required: true
  private _challengeType?: string; 
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }
  public set challengeType(value: string) {
    this._challengeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeTypeInput() {
    return this._challengeType;
  }
}
export interface CmCertificateSelfManagedPrivateKeyLockboxSecret {
  /**
  * Lockbox secret Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#id CmCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Key of the Lockbox secret, the value of which contains the private key of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#key CmCertificate#key}
  */
  readonly key: string;
}

export function cmCertificateSelfManagedPrivateKeyLockboxSecretToTerraform(struct?: CmCertificateSelfManagedPrivateKeyLockboxSecretOutputReference | CmCertificateSelfManagedPrivateKeyLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function cmCertificateSelfManagedPrivateKeyLockboxSecretToHclTerraform(struct?: CmCertificateSelfManagedPrivateKeyLockboxSecretOutputReference | CmCertificateSelfManagedPrivateKeyLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmCertificateSelfManagedPrivateKeyLockboxSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmCertificateSelfManagedPrivateKeyLockboxSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmCertificateSelfManagedPrivateKeyLockboxSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._key = value.key;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface CmCertificateSelfManaged {
  /**
  * Certificate with chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#certificate CmCertificate#certificate}
  */
  readonly certificate: string;
  /**
  * Private key of certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#private_key CmCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * private_key_lockbox_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#private_key_lockbox_secret CmCertificate#private_key_lockbox_secret}
  */
  readonly privateKeyLockboxSecret?: CmCertificateSelfManagedPrivateKeyLockboxSecret;
}

export function cmCertificateSelfManagedToTerraform(struct?: CmCertificateSelfManagedOutputReference | CmCertificateSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_lockbox_secret: cmCertificateSelfManagedPrivateKeyLockboxSecretToTerraform(struct!.privateKeyLockboxSecret),
  }
}


export function cmCertificateSelfManagedToHclTerraform(struct?: CmCertificateSelfManagedOutputReference | CmCertificateSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_lockbox_secret: {
      value: cmCertificateSelfManagedPrivateKeyLockboxSecretToHclTerraform(struct!.privateKeyLockboxSecret),
      isBlock: true,
      type: "list",
      storageClassType: "CmCertificateSelfManagedPrivateKeyLockboxSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmCertificateSelfManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmCertificateSelfManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyLockboxSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyLockboxSecret = this._privateKeyLockboxSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmCertificateSelfManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._privateKey = undefined;
      this._privateKeyLockboxSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._privateKey = value.privateKey;
      this._privateKeyLockboxSecret.internalValue = value.privateKeyLockboxSecret;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_lockbox_secret - computed: false, optional: true, required: false
  private _privateKeyLockboxSecret = new CmCertificateSelfManagedPrivateKeyLockboxSecretOutputReference(this, "private_key_lockbox_secret");
  public get privateKeyLockboxSecret() {
    return this._privateKeyLockboxSecret;
  }
  public putPrivateKeyLockboxSecret(value: CmCertificateSelfManagedPrivateKeyLockboxSecret) {
    this._privateKeyLockboxSecret.internalValue = value;
  }
  public resetPrivateKeyLockboxSecret() {
    this._privateKeyLockboxSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyLockboxSecretInput() {
    return this._privateKeyLockboxSecret.internalValue;
  }
}
export interface CmCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#create CmCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#delete CmCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#read CmCertificate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#update CmCertificate#update}
  */
  readonly update?: string;
}

export function cmCertificateTimeoutsToTerraform(struct?: CmCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cmCertificateTimeoutsToHclTerraform(struct?: CmCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmCertificateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmCertificateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate yandex_cm_certificate}
*/
export class CmCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cm_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmCertificate to import
  * @param importFromId The id of the existing CmCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cm_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/cm_certificate yandex_cm_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CmCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_cm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._domains = config.domains;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._managed.internalValue = config.managed;
    this._selfManaged.internalValue = config.selfManaged;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // challenges - computed: true, optional: false, required: false
  private _challenges = new CmCertificateChallengesList(this, "challenges", false);
  public get challenges() {
    return this._challenges;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new CmCertificateManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: CmCertificateManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged = new CmCertificateSelfManagedOutputReference(this, "self_managed");
  public get selfManaged() {
    return this._selfManaged;
  }
  public putSelfManaged(value: CmCertificateSelfManaged) {
    this._selfManaged.internalValue = value;
  }
  public resetSelfManaged() {
    this._selfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CmCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CmCertificateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domains),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      managed: cmCertificateManagedToTerraform(this._managed.internalValue),
      self_managed: cmCertificateSelfManagedToTerraform(this._selfManaged.internalValue),
      timeouts: cmCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: cmCertificateManagedToHclTerraform(this._managed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmCertificateManagedList",
      },
      self_managed: {
        value: cmCertificateSelfManagedToHclTerraform(this._selfManaged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmCertificateSelfManagedList",
      },
      timeouts: {
        value: cmCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmCertificateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
