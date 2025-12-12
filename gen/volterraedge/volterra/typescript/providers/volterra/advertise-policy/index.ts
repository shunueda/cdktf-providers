// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdvertisePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#address AdvertisePolicy#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#annotations AdvertisePolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#description AdvertisePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#disable AdvertisePolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#id AdvertisePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#labels AdvertisePolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#port AdvertisePolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#port_ranges AdvertisePolicy#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#protocol AdvertisePolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#skip_xff_append AdvertisePolicy#skip_xff_append}
  */
  readonly skipXffAppend?: boolean | cdktf.IResolvable;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#public_ip AdvertisePolicy#public_ip}
  */
  readonly publicIp?: AdvertisePolicyPublicIp[] | cdktf.IResolvable;
  /**
  * tls_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tls_parameters AdvertisePolicy#tls_parameters}
  */
  readonly tlsParameters?: AdvertisePolicyTlsParameters;
  /**
  * where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#where AdvertisePolicy#where}
  */
  readonly where?: AdvertisePolicyWhere;
}
export interface AdvertisePolicyPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyPublicIpToTerraform(struct?: AdvertisePolicyPublicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyPublicIpToHclTerraform(struct?: AdvertisePolicyPublicIp | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyPublicIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyPublicIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyPublicIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyPublicIpList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyPublicIp[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyPublicIpOutputReference {
    return new AdvertisePolicyPublicIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyTlsParametersClientCertificateOptional {
}

export function advertisePolicyTlsParametersClientCertificateOptionalToTerraform(struct?: AdvertisePolicyTlsParametersClientCertificateOptionalOutputReference | AdvertisePolicyTlsParametersClientCertificateOptional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advertisePolicyTlsParametersClientCertificateOptionalToHclTerraform(struct?: AdvertisePolicyTlsParametersClientCertificateOptionalOutputReference | AdvertisePolicyTlsParametersClientCertificateOptional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvertisePolicyTlsParametersClientCertificateOptionalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersClientCertificateOptional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersClientCertificateOptional | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AdvertisePolicyTlsParametersClientCertificateRequired {
}

export function advertisePolicyTlsParametersClientCertificateRequiredToTerraform(struct?: AdvertisePolicyTlsParametersClientCertificateRequiredOutputReference | AdvertisePolicyTlsParametersClientCertificateRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advertisePolicyTlsParametersClientCertificateRequiredToHclTerraform(struct?: AdvertisePolicyTlsParametersClientCertificateRequiredOutputReference | AdvertisePolicyTlsParametersClientCertificateRequired): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvertisePolicyTlsParametersClientCertificateRequiredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersClientCertificateRequired | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersClientCertificateRequired | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#hash_algorithms AdvertisePolicy#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling {
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#decryption_provider AdvertisePolicy#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#location AdvertisePolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#store_provider AdvertisePolicy#store_provider}
  */
  readonly storeProvider?: string;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#decryption_provider AdvertisePolicy#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#location AdvertisePolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#store_provider AdvertisePolicy#store_provider}
  */
  readonly storeProvider?: string;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#provider AdvertisePolicy#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#url AdvertisePolicy#url}
  */
  readonly url: string;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#key AdvertisePolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#location AdvertisePolicy#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#provider AdvertisePolicy#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#secret_encoding AdvertisePolicy#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#version AdvertisePolicy#version}
  */
  readonly version?: number;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name: string;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#secret_encoding_type AdvertisePolicy#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#blindfold_secret_info AdvertisePolicy#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#blindfold_secret_info_internal AdvertisePolicy#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#clear_secret_info AdvertisePolicy#clear_secret_info}
  */
  readonly clearSecretInfo?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#vault_secret_info AdvertisePolicy#vault_secret_info}
  */
  readonly vaultSecretInfo?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#wingman_secret_info AdvertisePolicy#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults {
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference | AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#certificate_url AdvertisePolicy#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#description AdvertisePolicy#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#custom_hash_algorithms AdvertisePolicy#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#disable_ocsp_stapling AdvertisePolicy#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#private_key AdvertisePolicy#private_key}
  */
  readonly privateKey: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#use_system_defaults AdvertisePolicy#use_system_defaults}
  */
  readonly useSystemDefaults?: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults;
}

export function advertisePolicyTlsParametersCommonParamsTlsCertificatesToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: advertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: advertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: advertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function advertisePolicyTlsParametersCommonParamsTlsCertificatesToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: advertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class AdvertisePolicyTlsParametersCommonParamsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyTlsParametersCommonParamsTlsCertificatesOutputReference {
    return new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference {
    return new AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa {
  /**
  * trusted_ca_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#trusted_ca_list AdvertisePolicy#trusted_ca_list}
  */
  readonly trustedCaList?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable;
}

export function advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaOutputReference | AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_list: cdktf.listMapper(advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToTerraform, true)(struct!.trustedCaList),
  }
}


export function advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaOutputReference | AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_list: {
      value: cdktf.listMapperHcl(advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform, true)(struct!.trustedCaList),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaList = this._trustedCaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaList.internalValue = value.trustedCaList;
    }
  }

  // trusted_ca_list - computed: false, optional: true, required: false
  private _trustedCaList = new AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList(this, "trusted_ca_list", false);
  public get trustedCaList() {
    return this._trustedCaList;
  }
  public putTrustedCaList(value: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable) {
    this._trustedCaList.internalValue = value;
  }
  public resetTrustedCaList() {
    this._trustedCaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaListInput() {
    return this._trustedCaList.internalValue;
  }
}
export interface AdvertisePolicyTlsParametersCommonParamsValidationParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#skip_hostname_verification AdvertisePolicy#skip_hostname_verification}
  */
  readonly skipHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#trusted_ca_url AdvertisePolicy#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#use_volterra_trusted_ca_url AdvertisePolicy#use_volterra_trusted_ca_url}
  */
  readonly useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#verify_subject_alt_names AdvertisePolicy#verify_subject_alt_names}
  */
  readonly verifySubjectAltNames?: string[];
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#trusted_ca AdvertisePolicy#trusted_ca}
  */
  readonly trustedCa?: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa;
}

export function advertisePolicyTlsParametersCommonParamsValidationParamsToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsOutputReference | AdvertisePolicyTlsParametersCommonParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_hostname_verification: cdktf.booleanToTerraform(struct!.skipHostnameVerification),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    use_volterra_trusted_ca_url: cdktf.booleanToTerraform(struct!.useVolterraTrustedCaUrl),
    verify_subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltNames),
    trusted_ca: advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function advertisePolicyTlsParametersCommonParamsValidationParamsToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsValidationParamsOutputReference | AdvertisePolicyTlsParametersCommonParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_hostname_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipHostnameVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_volterra_trusted_ca_url: {
      value: cdktf.booleanToHclTerraform(struct!.useVolterraTrustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifySubjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: advertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsValidationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParamsValidationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHostnameVerification = this._skipHostnameVerification;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._useVolterraTrustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVolterraTrustedCaUrl = this._useVolterraTrustedCaUrl;
    }
    if (this._verifySubjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltNames = this._verifySubjectAltNames;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParamsValidationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipHostnameVerification = undefined;
      this._trustedCaUrl = undefined;
      this._useVolterraTrustedCaUrl = undefined;
      this._verifySubjectAltNames = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipHostnameVerification = value.skipHostnameVerification;
      this._trustedCaUrl = value.trustedCaUrl;
      this._useVolterraTrustedCaUrl = value.useVolterraTrustedCaUrl;
      this._verifySubjectAltNames = value.verifySubjectAltNames;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // skip_hostname_verification - computed: false, optional: true, required: false
  private _skipHostnameVerification?: boolean | cdktf.IResolvable; 
  public get skipHostnameVerification() {
    return this.getBooleanAttribute('skip_hostname_verification');
  }
  public set skipHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._skipHostnameVerification = value;
  }
  public resetSkipHostnameVerification() {
    this._skipHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostnameVerificationInput() {
    return this._skipHostnameVerification;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // use_volterra_trusted_ca_url - computed: false, optional: true, required: false
  private _useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable; 
  public get useVolterraTrustedCaUrl() {
    return this.getBooleanAttribute('use_volterra_trusted_ca_url');
  }
  public set useVolterraTrustedCaUrl(value: boolean | cdktf.IResolvable) {
    this._useVolterraTrustedCaUrl = value;
  }
  public resetUseVolterraTrustedCaUrl() {
    this._useVolterraTrustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVolterraTrustedCaUrlInput() {
    return this._useVolterraTrustedCaUrl;
  }

  // verify_subject_alt_names - computed: false, optional: true, required: false
  private _verifySubjectAltNames?: string[]; 
  public get verifySubjectAltNames() {
    return this.getListAttribute('verify_subject_alt_names');
  }
  public set verifySubjectAltNames(value: string[]) {
    this._verifySubjectAltNames = value;
  }
  public resetVerifySubjectAltNames() {
    this._verifySubjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubjectAltNamesInput() {
    return this._verifySubjectAltNames;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: AdvertisePolicyTlsParametersCommonParamsValidationParamsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface AdvertisePolicyTlsParametersCommonParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#cipher_suites AdvertisePolicy#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#maximum_protocol_version AdvertisePolicy#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#minimum_protocol_version AdvertisePolicy#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#trusted_ca_url AdvertisePolicy#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tls_certificates AdvertisePolicy#tls_certificates}
  */
  readonly tlsCertificates?: AdvertisePolicyTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable;
  /**
  * validation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#validation_params AdvertisePolicy#validation_params}
  */
  readonly validationParams?: AdvertisePolicyTlsParametersCommonParamsValidationParams;
}

export function advertisePolicyTlsParametersCommonParamsToTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsOutputReference | AdvertisePolicyTlsParametersCommonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    tls_certificates: cdktf.listMapper(advertisePolicyTlsParametersCommonParamsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    validation_params: advertisePolicyTlsParametersCommonParamsValidationParamsToTerraform(struct!.validationParams),
  }
}


export function advertisePolicyTlsParametersCommonParamsToHclTerraform(struct?: AdvertisePolicyTlsParametersCommonParamsOutputReference | AdvertisePolicyTlsParametersCommonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(advertisePolicyTlsParametersCommonParamsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsTlsCertificatesList",
    },
    validation_params: {
      value: advertisePolicyTlsParametersCommonParamsValidationParamsToHclTerraform(struct!.validationParams),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsValidationParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCommonParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersCommonParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._validationParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationParams = this._validationParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCommonParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
      this._trustedCaUrl = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._validationParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._trustedCaUrl = value.trustedCaUrl;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._validationParams.internalValue = value.validationParams;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // tls_certificates - computed: false, optional: true, required: false
  private _tlsCertificates = new AdvertisePolicyTlsParametersCommonParamsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: AdvertisePolicyTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  public resetTlsCertificates() {
    this._tlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // validation_params - computed: false, optional: true, required: false
  private _validationParams = new AdvertisePolicyTlsParametersCommonParamsValidationParamsOutputReference(this, "validation_params");
  public get validationParams() {
    return this._validationParams;
  }
  public putValidationParams(value: AdvertisePolicyTlsParametersCommonParamsValidationParams) {
    this._validationParams.internalValue = value;
  }
  public resetValidationParams() {
    this._validationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationParamsInput() {
    return this._validationParams.internalValue;
  }
}
export interface AdvertisePolicyTlsParametersCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyTlsParametersCrlToTerraform(struct?: AdvertisePolicyTlsParametersCrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyTlsParametersCrlToHclTerraform(struct?: AdvertisePolicyTlsParametersCrl | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersCrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyTlsParametersCrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersCrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyTlsParametersCrlList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyTlsParametersCrl[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyTlsParametersCrlOutputReference {
    return new AdvertisePolicyTlsParametersCrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyTlsParametersNoClientCertificate {
}

export function advertisePolicyTlsParametersNoClientCertificateToTerraform(struct?: AdvertisePolicyTlsParametersNoClientCertificateOutputReference | AdvertisePolicyTlsParametersNoClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function advertisePolicyTlsParametersNoClientCertificateToHclTerraform(struct?: AdvertisePolicyTlsParametersNoClientCertificateOutputReference | AdvertisePolicyTlsParametersNoClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AdvertisePolicyTlsParametersNoClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParametersNoClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParametersNoClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AdvertisePolicyTlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#require_client_certificate AdvertisePolicy#require_client_certificate}
  */
  readonly requireClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#xfcc_header_elements AdvertisePolicy#xfcc_header_elements}
  */
  readonly xfccHeaderElements?: string[];
  /**
  * client_certificate_optional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#client_certificate_optional AdvertisePolicy#client_certificate_optional}
  */
  readonly clientCertificateOptional?: AdvertisePolicyTlsParametersClientCertificateOptional;
  /**
  * client_certificate_required block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#client_certificate_required AdvertisePolicy#client_certificate_required}
  */
  readonly clientCertificateRequired?: AdvertisePolicyTlsParametersClientCertificateRequired;
  /**
  * common_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#common_params AdvertisePolicy#common_params}
  */
  readonly commonParams?: AdvertisePolicyTlsParametersCommonParams;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#crl AdvertisePolicy#crl}
  */
  readonly crl?: AdvertisePolicyTlsParametersCrl[] | cdktf.IResolvable;
  /**
  * no_client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#no_client_certificate AdvertisePolicy#no_client_certificate}
  */
  readonly noClientCertificate?: AdvertisePolicyTlsParametersNoClientCertificate;
}

export function advertisePolicyTlsParametersToTerraform(struct?: AdvertisePolicyTlsParametersOutputReference | AdvertisePolicyTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_client_certificate: cdktf.booleanToTerraform(struct!.requireClientCertificate),
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
    client_certificate_optional: advertisePolicyTlsParametersClientCertificateOptionalToTerraform(struct!.clientCertificateOptional),
    client_certificate_required: advertisePolicyTlsParametersClientCertificateRequiredToTerraform(struct!.clientCertificateRequired),
    common_params: advertisePolicyTlsParametersCommonParamsToTerraform(struct!.commonParams),
    crl: cdktf.listMapper(advertisePolicyTlsParametersCrlToTerraform, true)(struct!.crl),
    no_client_certificate: advertisePolicyTlsParametersNoClientCertificateToTerraform(struct!.noClientCertificate),
  }
}


export function advertisePolicyTlsParametersToHclTerraform(struct?: AdvertisePolicyTlsParametersOutputReference | AdvertisePolicyTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.requireClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_certificate_optional: {
      value: advertisePolicyTlsParametersClientCertificateOptionalToHclTerraform(struct!.clientCertificateOptional),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersClientCertificateOptionalList",
    },
    client_certificate_required: {
      value: advertisePolicyTlsParametersClientCertificateRequiredToHclTerraform(struct!.clientCertificateRequired),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersClientCertificateRequiredList",
    },
    common_params: {
      value: advertisePolicyTlsParametersCommonParamsToHclTerraform(struct!.commonParams),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCommonParamsList",
    },
    crl: {
      value: cdktf.listMapperHcl(advertisePolicyTlsParametersCrlToHclTerraform, true)(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersCrlList",
    },
    no_client_certificate: {
      value: advertisePolicyTlsParametersNoClientCertificateToHclTerraform(struct!.noClientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyTlsParametersNoClientCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyTlsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyTlsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireClientCertificate = this._requireClientCertificate;
    }
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    if (this._clientCertificateOptional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional?.internalValue;
    }
    if (this._clientCertificateRequired?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateRequired = this._clientCertificateRequired?.internalValue;
    }
    if (this._commonParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonParams = this._commonParams?.internalValue;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._noClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClientCertificate = this._noClientCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyTlsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireClientCertificate = undefined;
      this._xfccHeaderElements = undefined;
      this._clientCertificateOptional.internalValue = undefined;
      this._clientCertificateRequired.internalValue = undefined;
      this._commonParams.internalValue = undefined;
      this._crl.internalValue = undefined;
      this._noClientCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireClientCertificate = value.requireClientCertificate;
      this._xfccHeaderElements = value.xfccHeaderElements;
      this._clientCertificateOptional.internalValue = value.clientCertificateOptional;
      this._clientCertificateRequired.internalValue = value.clientCertificateRequired;
      this._commonParams.internalValue = value.commonParams;
      this._crl.internalValue = value.crl;
      this._noClientCertificate.internalValue = value.noClientCertificate;
    }
  }

  // require_client_certificate - computed: false, optional: true, required: false
  private _requireClientCertificate?: boolean | cdktf.IResolvable; 
  public get requireClientCertificate() {
    return this.getBooleanAttribute('require_client_certificate');
  }
  public set requireClientCertificate(value: boolean | cdktf.IResolvable) {
    this._requireClientCertificate = value;
  }
  public resetRequireClientCertificate() {
    this._requireClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientCertificateInput() {
    return this._requireClientCertificate;
  }

  // xfcc_header_elements - computed: false, optional: true, required: false
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  public resetXfccHeaderElements() {
    this._xfccHeaderElements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional = new AdvertisePolicyTlsParametersClientCertificateOptionalOutputReference(this, "client_certificate_optional");
  public get clientCertificateOptional() {
    return this._clientCertificateOptional;
  }
  public putClientCertificateOptional(value: AdvertisePolicyTlsParametersClientCertificateOptional) {
    this._clientCertificateOptional.internalValue = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional.internalValue;
  }

  // client_certificate_required - computed: false, optional: true, required: false
  private _clientCertificateRequired = new AdvertisePolicyTlsParametersClientCertificateRequiredOutputReference(this, "client_certificate_required");
  public get clientCertificateRequired() {
    return this._clientCertificateRequired;
  }
  public putClientCertificateRequired(value: AdvertisePolicyTlsParametersClientCertificateRequired) {
    this._clientCertificateRequired.internalValue = value;
  }
  public resetClientCertificateRequired() {
    this._clientCertificateRequired.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateRequiredInput() {
    return this._clientCertificateRequired.internalValue;
  }

  // common_params - computed: false, optional: true, required: false
  private _commonParams = new AdvertisePolicyTlsParametersCommonParamsOutputReference(this, "common_params");
  public get commonParams() {
    return this._commonParams;
  }
  public putCommonParams(value: AdvertisePolicyTlsParametersCommonParams) {
    this._commonParams.internalValue = value;
  }
  public resetCommonParams() {
    this._commonParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonParamsInput() {
    return this._commonParams.internalValue;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new AdvertisePolicyTlsParametersCrlList(this, "crl", false);
  public get crl() {
    return this._crl;
  }
  public putCrl(value: AdvertisePolicyTlsParametersCrl[] | cdktf.IResolvable) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // no_client_certificate - computed: false, optional: true, required: false
  private _noClientCertificate = new AdvertisePolicyTlsParametersNoClientCertificateOutputReference(this, "no_client_certificate");
  public get noClientCertificate() {
    return this._noClientCertificate;
  }
  public putNoClientCertificate(value: AdvertisePolicyTlsParametersNoClientCertificate) {
    this._noClientCertificate.internalValue = value;
  }
  public resetNoClientCertificate() {
    this._noClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientCertificateInput() {
    return this._noClientCertificate.internalValue;
  }
}
export interface AdvertisePolicyWhereSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyWhereSiteRefToTerraform(struct?: AdvertisePolicyWhereSiteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyWhereSiteRefToHclTerraform(struct?: AdvertisePolicyWhereSiteRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyWhereSiteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereSiteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyWhereSiteRefList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyWhereSiteRef[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyWhereSiteRefOutputReference {
    return new AdvertisePolicyWhereSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyWhereSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyWhereSiteRefsToTerraform(struct?: AdvertisePolicyWhereSiteRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyWhereSiteRefsToHclTerraform(struct?: AdvertisePolicyWhereSiteRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyWhereSiteRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereSiteRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyWhereSiteRefsList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyWhereSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyWhereSiteRefsOutputReference {
    return new AdvertisePolicyWhereSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#disable_internet_vip AdvertisePolicy#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#enable_internet_vip AdvertisePolicy#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#network_type AdvertisePolicy#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#ref AdvertisePolicy#ref}
  */
  readonly ref: AdvertisePolicyWhereSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#refs AdvertisePolicy#refs}
  */
  readonly refs?: AdvertisePolicyWhereSiteRefs[] | cdktf.IResolvable;
}

export function advertisePolicyWhereSiteToTerraform(struct?: AdvertisePolicyWhereSiteOutputReference | AdvertisePolicyWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(advertisePolicyWhereSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(advertisePolicyWhereSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function advertisePolicyWhereSiteToHclTerraform(struct?: AdvertisePolicyWhereSiteOutputReference | AdvertisePolicyWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(advertisePolicyWhereSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(advertisePolicyWhereSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new AdvertisePolicyWhereSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: AdvertisePolicyWhereSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new AdvertisePolicyWhereSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: AdvertisePolicyWhereSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface AdvertisePolicyWhereVirtualNetworkRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyWhereVirtualNetworkRefToTerraform(struct?: AdvertisePolicyWhereVirtualNetworkRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyWhereVirtualNetworkRefToHclTerraform(struct?: AdvertisePolicyWhereVirtualNetworkRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereVirtualNetworkRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyWhereVirtualNetworkRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereVirtualNetworkRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyWhereVirtualNetworkRefList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyWhereVirtualNetworkRef[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyWhereVirtualNetworkRefOutputReference {
    return new AdvertisePolicyWhereVirtualNetworkRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyWhereVirtualNetwork {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#ref AdvertisePolicy#ref}
  */
  readonly ref: AdvertisePolicyWhereVirtualNetworkRef[] | cdktf.IResolvable;
}

export function advertisePolicyWhereVirtualNetworkToTerraform(struct?: AdvertisePolicyWhereVirtualNetworkOutputReference | AdvertisePolicyWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(advertisePolicyWhereVirtualNetworkRefToTerraform, true)(struct!.ref),
  }
}


export function advertisePolicyWhereVirtualNetworkToHclTerraform(struct?: AdvertisePolicyWhereVirtualNetworkOutputReference | AdvertisePolicyWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(advertisePolicyWhereVirtualNetworkRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereVirtualNetworkRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new AdvertisePolicyWhereVirtualNetworkRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: AdvertisePolicyWhereVirtualNetworkRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface AdvertisePolicyWhereVirtualSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyWhereVirtualSiteRefToTerraform(struct?: AdvertisePolicyWhereVirtualSiteRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyWhereVirtualSiteRefToHclTerraform(struct?: AdvertisePolicyWhereVirtualSiteRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereVirtualSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyWhereVirtualSiteRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereVirtualSiteRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyWhereVirtualSiteRefList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyWhereVirtualSiteRef[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyWhereVirtualSiteRefOutputReference {
    return new AdvertisePolicyWhereVirtualSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyWhereVirtualSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#name AdvertisePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#namespace AdvertisePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#tenant AdvertisePolicy#tenant}
  */
  readonly tenant?: string;
}

export function advertisePolicyWhereVirtualSiteRefsToTerraform(struct?: AdvertisePolicyWhereVirtualSiteRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function advertisePolicyWhereVirtualSiteRefsToHclTerraform(struct?: AdvertisePolicyWhereVirtualSiteRefs | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereVirtualSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AdvertisePolicyWhereVirtualSiteRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereVirtualSiteRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class AdvertisePolicyWhereVirtualSiteRefsList extends cdktf.ComplexList {
  public internalValue? : AdvertisePolicyWhereVirtualSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): AdvertisePolicyWhereVirtualSiteRefsOutputReference {
    return new AdvertisePolicyWhereVirtualSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AdvertisePolicyWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#disable_internet_vip AdvertisePolicy#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#enable_internet_vip AdvertisePolicy#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#network_type AdvertisePolicy#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#ref AdvertisePolicy#ref}
  */
  readonly ref: AdvertisePolicyWhereVirtualSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#refs AdvertisePolicy#refs}
  */
  readonly refs?: AdvertisePolicyWhereVirtualSiteRefs[] | cdktf.IResolvable;
}

export function advertisePolicyWhereVirtualSiteToTerraform(struct?: AdvertisePolicyWhereVirtualSiteOutputReference | AdvertisePolicyWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(advertisePolicyWhereVirtualSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(advertisePolicyWhereVirtualSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function advertisePolicyWhereVirtualSiteToHclTerraform(struct?: AdvertisePolicyWhereVirtualSiteOutputReference | AdvertisePolicyWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(advertisePolicyWhereVirtualSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereVirtualSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(advertisePolicyWhereVirtualSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereVirtualSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new AdvertisePolicyWhereVirtualSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: AdvertisePolicyWhereVirtualSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new AdvertisePolicyWhereVirtualSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: AdvertisePolicyWhereVirtualSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface AdvertisePolicyWhere {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#site AdvertisePolicy#site}
  */
  readonly site?: AdvertisePolicyWhereSite;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#virtual_network AdvertisePolicy#virtual_network}
  */
  readonly virtualNetwork?: AdvertisePolicyWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#virtual_site AdvertisePolicy#virtual_site}
  */
  readonly virtualSite?: AdvertisePolicyWhereVirtualSite;
}

export function advertisePolicyWhereToTerraform(struct?: AdvertisePolicyWhereOutputReference | AdvertisePolicyWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: advertisePolicyWhereSiteToTerraform(struct!.site),
    virtual_network: advertisePolicyWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: advertisePolicyWhereVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function advertisePolicyWhereToHclTerraform(struct?: AdvertisePolicyWhereOutputReference | AdvertisePolicyWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: advertisePolicyWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereSiteList",
    },
    virtual_network: {
      value: advertisePolicyWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereVirtualNetworkList",
    },
    virtual_site: {
      value: advertisePolicyWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "AdvertisePolicyWhereVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AdvertisePolicyWhereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AdvertisePolicyWhere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AdvertisePolicyWhere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new AdvertisePolicyWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: AdvertisePolicyWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new AdvertisePolicyWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: AdvertisePolicyWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new AdvertisePolicyWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: AdvertisePolicyWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy volterra_advertise_policy}
*/
export class AdvertisePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_advertise_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdvertisePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdvertisePolicy to import
  * @param importFromId The id of the existing AdvertisePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdvertisePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_advertise_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/advertise_policy volterra_advertise_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdvertisePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AdvertisePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_advertise_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._port = config.port;
    this._portRanges = config.portRanges;
    this._protocol = config.protocol;
    this._skipXffAppend = config.skipXffAppend;
    this._publicIp.internalValue = config.publicIp;
    this._tlsParameters.internalValue = config.tlsParameters;
    this._where.internalValue = config.where;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
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

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // skip_xff_append - computed: false, optional: true, required: false
  private _skipXffAppend?: boolean | cdktf.IResolvable; 
  public get skipXffAppend() {
    return this.getBooleanAttribute('skip_xff_append');
  }
  public set skipXffAppend(value: boolean | cdktf.IResolvable) {
    this._skipXffAppend = value;
  }
  public resetSkipXffAppend() {
    this._skipXffAppend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipXffAppendInput() {
    return this._skipXffAppend;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new AdvertisePolicyPublicIpList(this, "public_ip", false);
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: AdvertisePolicyPublicIp[] | cdktf.IResolvable) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // tls_parameters - computed: false, optional: true, required: false
  private _tlsParameters = new AdvertisePolicyTlsParametersOutputReference(this, "tls_parameters");
  public get tlsParameters() {
    return this._tlsParameters;
  }
  public putTlsParameters(value: AdvertisePolicyTlsParameters) {
    this._tlsParameters.internalValue = value;
  }
  public resetTlsParameters() {
    this._tlsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParametersInput() {
    return this._tlsParameters.internalValue;
  }

  // where - computed: false, optional: true, required: false
  private _where = new AdvertisePolicyWhereOutputReference(this, "where");
  public get where() {
    return this._where;
  }
  public putWhere(value: AdvertisePolicyWhere) {
    this._where.internalValue = value;
  }
  public resetWhere() {
    this._where.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      port: cdktf.numberToTerraform(this._port),
      port_ranges: cdktf.stringToTerraform(this._portRanges),
      protocol: cdktf.stringToTerraform(this._protocol),
      skip_xff_append: cdktf.booleanToTerraform(this._skipXffAppend),
      public_ip: cdktf.listMapper(advertisePolicyPublicIpToTerraform, true)(this._publicIp.internalValue),
      tls_parameters: advertisePolicyTlsParametersToTerraform(this._tlsParameters.internalValue),
      where: advertisePolicyWhereToTerraform(this._where.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_ranges: {
        value: cdktf.stringToHclTerraform(this._portRanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_xff_append: {
        value: cdktf.booleanToHclTerraform(this._skipXffAppend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_ip: {
        value: cdktf.listMapperHcl(advertisePolicyPublicIpToHclTerraform, true)(this._publicIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvertisePolicyPublicIpList",
      },
      tls_parameters: {
        value: advertisePolicyTlsParametersToHclTerraform(this._tlsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvertisePolicyTlsParametersList",
      },
      where: {
        value: advertisePolicyWhereToHclTerraform(this._where.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AdvertisePolicyWhereList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
