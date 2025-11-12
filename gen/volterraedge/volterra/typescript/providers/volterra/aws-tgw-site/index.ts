// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsTgwSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#annotations AwsTgwSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#block_all_services AwsTgwSite#block_all_services}
  */
  readonly blockAllServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#default_blocked_services AwsTgwSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#description AwsTgwSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#direct_connect_disabled AwsTgwSite#direct_connect_disabled}
  */
  readonly directConnectDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disable AwsTgwSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#id AwsTgwSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#labels AwsTgwSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#logs_streaming_disabled AwsTgwSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tags AwsTgwSite#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * aws_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#aws_parameters AwsTgwSite#aws_parameters}
  */
  readonly awsParameters: AwsTgwSiteAwsParameters;
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#blocked_services AwsTgwSite#blocked_services}
  */
  readonly blockedServices?: AwsTgwSiteBlockedServices;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#coordinates AwsTgwSite#coordinates}
  */
  readonly coordinates?: AwsTgwSiteCoordinates;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_dns AwsTgwSite#custom_dns}
  */
  readonly customDns?: AwsTgwSiteCustomDns;
  /**
  * direct_connect_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#direct_connect_enabled AwsTgwSite#direct_connect_enabled}
  */
  readonly directConnectEnabled?: AwsTgwSiteDirectConnectEnabled;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#kubernetes_upgrade_drain AwsTgwSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: AwsTgwSiteKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#log_receiver AwsTgwSite#log_receiver}
  */
  readonly logReceiver?: AwsTgwSiteLogReceiver;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#offline_survivability_mode AwsTgwSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: AwsTgwSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#os AwsTgwSite#os}
  */
  readonly os?: AwsTgwSiteOs;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#performance_enhancement_mode AwsTgwSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AwsTgwSitePerformanceEnhancementMode;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#private_connectivity AwsTgwSite#private_connectivity}
  */
  readonly privateConnectivity?: AwsTgwSitePrivateConnectivity;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#sw AwsTgwSite#sw}
  */
  readonly sw?: AwsTgwSiteSw;
  /**
  * tgw_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tgw_security AwsTgwSite#tgw_security}
  */
  readonly tgwSecurity?: AwsTgwSiteTgwSecurity;
  /**
  * vn_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vn_config AwsTgwSite#vn_config}
  */
  readonly vnConfig?: AwsTgwSiteVnConfig;
  /**
  * vpc_attachments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vpc_attachments AwsTgwSite#vpc_attachments}
  */
  readonly vpcAttachments?: AwsTgwSiteVpcAttachments;
}
export interface AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#decryption_provider AwsTgwSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#location AwsTgwSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#store_provider AwsTgwSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function awsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoToTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoOutputReference | AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo): any {
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


export function awsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoOutputReference | AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo): any {
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

export class AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#provider AwsTgwSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#url AwsTgwSite#url}
  */
  readonly url: string;
}

export function awsTgwSiteAwsParametersAdminPasswordClearSecretInfoToTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordClearSecretInfoOutputReference | AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function awsTgwSiteAwsParametersAdminPasswordClearSecretInfoToHclTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordClearSecretInfoOutputReference | AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo): any {
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

export class AwsTgwSiteAwsParametersAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo | undefined) {
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
export interface AwsTgwSiteAwsParametersAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#blindfold_secret_info AwsTgwSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#clear_secret_info AwsTgwSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo;
}

export function awsTgwSiteAwsParametersAdminPasswordToTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordOutputReference | AwsTgwSiteAwsParametersAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: awsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: awsTgwSiteAwsParametersAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function awsTgwSiteAwsParametersAdminPasswordToHclTerraform(struct?: AwsTgwSiteAwsParametersAdminPasswordOutputReference | AwsTgwSiteAwsParametersAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: awsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: awsTgwSiteAwsParametersAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAdminPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAdminPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AwsTgwSiteAwsParametersAdminPasswordBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new AwsTgwSiteAwsParametersAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AwsTgwSiteAwsParametersAdminPasswordClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface AwsTgwSiteAwsParametersAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteAwsParametersAwsCredToTerraform(struct?: AwsTgwSiteAwsParametersAwsCredOutputReference | AwsTgwSiteAwsParametersAwsCred): any {
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


export function awsTgwSiteAwsParametersAwsCredToHclTerraform(struct?: AwsTgwSiteAwsParametersAwsCredOutputReference | AwsTgwSiteAwsParametersAwsCred): any {
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

export class AwsTgwSiteAwsParametersAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAwsCred | undefined {
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

  public set internalValue(value: AwsTgwSiteAwsParametersAwsCred | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsTgwSiteAwsParametersAzNodesInsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#existing_subnet_id AwsTgwSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#subnet_param AwsTgwSite#subnet_param}
  */
  readonly subnetParam?: AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam;
}

export function awsTgwSiteAwsParametersAzNodesInsideSubnetToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesInsideSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsTgwSiteAwsParametersAzNodesInsideSubnetToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesInsideSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesInsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesInsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesInsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsTgwSiteAwsParametersAzNodesInsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsTgwSiteAwsParametersAzNodesOutsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#existing_subnet_id AwsTgwSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#subnet_param AwsTgwSite#subnet_param}
  */
  readonly subnetParam?: AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam;
}

export function awsTgwSiteAwsParametersAzNodesOutsideSubnetToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesOutsideSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsTgwSiteAwsParametersAzNodesOutsideSubnetToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesOutsideSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesOutsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesOutsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesOutsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsTgwSiteAwsParametersAzNodesOutsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamOutputReference | AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsTgwSiteAwsParametersAzNodesWorkloadSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#existing_subnet_id AwsTgwSite#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#subnet_param AwsTgwSite#subnet_param}
  */
  readonly subnetParam?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam;
}

export function awsTgwSiteAwsParametersAzNodesWorkloadSubnetToTerraform(struct?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesWorkloadSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: awsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function awsTgwSiteAwsParametersAzNodesWorkloadSubnetToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetOutputReference | AwsTgwSiteAwsParametersAzNodesWorkloadSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: awsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesWorkloadSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersAzNodesWorkloadSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodesWorkloadSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AwsTgwSiteAwsParametersAzNodesWorkloadSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AwsTgwSiteAwsParametersAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#aws_az_name AwsTgwSite#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#reserved_inside_subnet AwsTgwSite#reserved_inside_subnet}
  */
  readonly reservedInsideSubnet?: boolean | cdktf.IResolvable;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside_subnet AwsTgwSite#inside_subnet}
  */
  readonly insideSubnet?: AwsTgwSiteAwsParametersAzNodesInsideSubnet;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside_subnet AwsTgwSite#outside_subnet}
  */
  readonly outsideSubnet: AwsTgwSiteAwsParametersAzNodesOutsideSubnet;
  /**
  * workload_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#workload_subnet AwsTgwSite#workload_subnet}
  */
  readonly workloadSubnet?: AwsTgwSiteAwsParametersAzNodesWorkloadSubnet;
}

export function awsTgwSiteAwsParametersAzNodesToTerraform(struct?: AwsTgwSiteAwsParametersAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    reserved_inside_subnet: cdktf.booleanToTerraform(struct!.reservedInsideSubnet),
    inside_subnet: awsTgwSiteAwsParametersAzNodesInsideSubnetToTerraform(struct!.insideSubnet),
    outside_subnet: awsTgwSiteAwsParametersAzNodesOutsideSubnetToTerraform(struct!.outsideSubnet),
    workload_subnet: awsTgwSiteAwsParametersAzNodesWorkloadSubnetToTerraform(struct!.workloadSubnet),
  }
}


export function awsTgwSiteAwsParametersAzNodesToHclTerraform(struct?: AwsTgwSiteAwsParametersAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_inside_subnet: {
      value: cdktf.booleanToHclTerraform(struct!.reservedInsideSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_subnet: {
      value: awsTgwSiteAwsParametersAzNodesInsideSubnetToHclTerraform(struct!.insideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesInsideSubnetList",
    },
    outside_subnet: {
      value: awsTgwSiteAwsParametersAzNodesOutsideSubnetToHclTerraform(struct!.outsideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesOutsideSubnetList",
    },
    workload_subnet: {
      value: awsTgwSiteAwsParametersAzNodesWorkloadSubnetToHclTerraform(struct!.workloadSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesWorkloadSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteAwsParametersAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._reservedInsideSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedInsideSubnet = this._reservedInsideSubnet;
    }
    if (this._insideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnet = this._insideSubnet?.internalValue;
    }
    if (this._outsideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnet = this._outsideSubnet?.internalValue;
    }
    if (this._workloadSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnet = this._workloadSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._reservedInsideSubnet = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
      this._workloadSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._reservedInsideSubnet = value.reservedInsideSubnet;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
      this._workloadSubnet.internalValue = value.workloadSubnet;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // reserved_inside_subnet - computed: false, optional: true, required: false
  private _reservedInsideSubnet?: boolean | cdktf.IResolvable; 
  public get reservedInsideSubnet() {
    return this.getBooleanAttribute('reserved_inside_subnet');
  }
  public set reservedInsideSubnet(value: boolean | cdktf.IResolvable) {
    this._reservedInsideSubnet = value;
  }
  public resetReservedInsideSubnet() {
    this._reservedInsideSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInsideSubnetInput() {
    return this._reservedInsideSubnet;
  }

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new AwsTgwSiteAwsParametersAzNodesInsideSubnetOutputReference(this, "inside_subnet");
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: AwsTgwSiteAwsParametersAzNodesInsideSubnet) {
    this._insideSubnet.internalValue = value;
  }
  public resetInsideSubnet() {
    this._insideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetInput() {
    return this._insideSubnet.internalValue;
  }

  // outside_subnet - computed: false, optional: false, required: true
  private _outsideSubnet = new AwsTgwSiteAwsParametersAzNodesOutsideSubnetOutputReference(this, "outside_subnet");
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: AwsTgwSiteAwsParametersAzNodesOutsideSubnet) {
    this._outsideSubnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetInput() {
    return this._outsideSubnet.internalValue;
  }

  // workload_subnet - computed: false, optional: true, required: false
  private _workloadSubnet = new AwsTgwSiteAwsParametersAzNodesWorkloadSubnetOutputReference(this, "workload_subnet");
  public get workloadSubnet() {
    return this._workloadSubnet;
  }
  public putWorkloadSubnet(value: AwsTgwSiteAwsParametersAzNodesWorkloadSubnet) {
    this._workloadSubnet.internalValue = value;
  }
  public resetWorkloadSubnet() {
    this._workloadSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetInput() {
    return this._workloadSubnet.internalValue;
  }
}

export class AwsTgwSiteAwsParametersAzNodesList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteAwsParametersAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteAwsParametersAzNodesOutputReference {
    return new AwsTgwSiteAwsParametersAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteAwsParametersCustomSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside_security_group_id AwsTgwSite#inside_security_group_id}
  */
  readonly insideSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside_security_group_id AwsTgwSite#outside_security_group_id}
  */
  readonly outsideSecurityGroupId?: string;
}

export function awsTgwSiteAwsParametersCustomSecurityGroupToTerraform(struct?: AwsTgwSiteAwsParametersCustomSecurityGroupOutputReference | AwsTgwSiteAwsParametersCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_security_group_id: cdktf.stringToTerraform(struct!.insideSecurityGroupId),
    outside_security_group_id: cdktf.stringToTerraform(struct!.outsideSecurityGroupId),
  }
}


export function awsTgwSiteAwsParametersCustomSecurityGroupToHclTerraform(struct?: AwsTgwSiteAwsParametersCustomSecurityGroupOutputReference | AwsTgwSiteAwsParametersCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.insideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.outsideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersCustomSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersCustomSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSecurityGroupId = this._insideSecurityGroupId;
    }
    if (this._outsideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSecurityGroupId = this._outsideSecurityGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersCustomSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideSecurityGroupId = undefined;
      this._outsideSecurityGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideSecurityGroupId = value.insideSecurityGroupId;
      this._outsideSecurityGroupId = value.outsideSecurityGroupId;
    }
  }

  // inside_security_group_id - computed: false, optional: true, required: false
  private _insideSecurityGroupId?: string; 
  public get insideSecurityGroupId() {
    return this.getStringAttribute('inside_security_group_id');
  }
  public set insideSecurityGroupId(value: string) {
    this._insideSecurityGroupId = value;
  }
  public resetInsideSecurityGroupId() {
    this._insideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSecurityGroupIdInput() {
    return this._insideSecurityGroupId;
  }

  // outside_security_group_id - computed: false, optional: true, required: false
  private _outsideSecurityGroupId?: string; 
  public get outsideSecurityGroupId() {
    return this.getStringAttribute('outside_security_group_id');
  }
  public set outsideSecurityGroupId(value: string) {
    this._outsideSecurityGroupId = value;
  }
  public resetOutsideSecurityGroupId() {
    this._outsideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSecurityGroupIdInput() {
    return this._outsideSecurityGroupId;
  }
}
export interface AwsTgwSiteAwsParametersExistingTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tgw_asn AwsTgwSite#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tgw_id AwsTgwSite#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#volterra_site_asn AwsTgwSite#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function awsTgwSiteAwsParametersExistingTgwToTerraform(struct?: AwsTgwSiteAwsParametersExistingTgwOutputReference | AwsTgwSiteAwsParametersExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    tgw_id: cdktf.stringToTerraform(struct!.tgwId),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function awsTgwSiteAwsParametersExistingTgwToHclTerraform(struct?: AwsTgwSiteAwsParametersExistingTgwOutputReference | AwsTgwSiteAwsParametersExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgw_id: {
      value: cdktf.stringToHclTerraform(struct!.tgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersExistingTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersExistingTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._tgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwId = this._tgwId;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersExistingTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._tgwId = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._tgwId = value.tgwId;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // tgw_id - computed: false, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface AwsTgwSiteAwsParametersNewTgwUserAssigned {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tgw_asn AwsTgwSite#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#volterra_site_asn AwsTgwSite#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function awsTgwSiteAwsParametersNewTgwUserAssignedToTerraform(struct?: AwsTgwSiteAwsParametersNewTgwUserAssignedOutputReference | AwsTgwSiteAwsParametersNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function awsTgwSiteAwsParametersNewTgwUserAssignedToHclTerraform(struct?: AwsTgwSiteAwsParametersNewTgwUserAssignedOutputReference | AwsTgwSiteAwsParametersNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersNewTgwUserAssignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersNewTgwUserAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersNewTgwUserAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface AwsTgwSiteAwsParametersNewTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#system_generated AwsTgwSite#system_generated}
  */
  readonly systemGenerated?: boolean | cdktf.IResolvable;
  /**
  * user_assigned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#user_assigned AwsTgwSite#user_assigned}
  */
  readonly userAssigned?: AwsTgwSiteAwsParametersNewTgwUserAssigned;
}

export function awsTgwSiteAwsParametersNewTgwToTerraform(struct?: AwsTgwSiteAwsParametersNewTgwOutputReference | AwsTgwSiteAwsParametersNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_generated: cdktf.booleanToTerraform(struct!.systemGenerated),
    user_assigned: awsTgwSiteAwsParametersNewTgwUserAssignedToTerraform(struct!.userAssigned),
  }
}


export function awsTgwSiteAwsParametersNewTgwToHclTerraform(struct?: AwsTgwSiteAwsParametersNewTgwOutputReference | AwsTgwSiteAwsParametersNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_generated: {
      value: cdktf.booleanToHclTerraform(struct!.systemGenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_assigned: {
      value: awsTgwSiteAwsParametersNewTgwUserAssignedToHclTerraform(struct!.userAssigned),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersNewTgwUserAssignedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersNewTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersNewTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemGenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemGenerated = this._systemGenerated;
    }
    if (this._userAssigned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssigned = this._userAssigned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersNewTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemGenerated = undefined;
      this._userAssigned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemGenerated = value.systemGenerated;
      this._userAssigned.internalValue = value.userAssigned;
    }
  }

  // system_generated - computed: false, optional: true, required: false
  private _systemGenerated?: boolean | cdktf.IResolvable; 
  public get systemGenerated() {
    return this.getBooleanAttribute('system_generated');
  }
  public set systemGenerated(value: boolean | cdktf.IResolvable) {
    this._systemGenerated = value;
  }
  public resetSystemGenerated() {
    this._systemGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedInput() {
    return this._systemGenerated;
  }

  // user_assigned - computed: false, optional: true, required: false
  private _userAssigned = new AwsTgwSiteAwsParametersNewTgwUserAssignedOutputReference(this, "user_assigned");
  public get userAssigned() {
    return this._userAssigned;
  }
  public putUserAssigned(value: AwsTgwSiteAwsParametersNewTgwUserAssigned) {
    this._userAssigned.internalValue = value;
  }
  public resetUserAssigned() {
    this._userAssigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedInput() {
    return this._userAssigned.internalValue;
  }
}
export interface AwsTgwSiteAwsParametersNewVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#autogenerate AwsTgwSite#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name_tag AwsTgwSite#name_tag}
  */
  readonly nameTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#primary_ipv4 AwsTgwSite#primary_ipv4}
  */
  readonly primaryIpv4: string;
}

export function awsTgwSiteAwsParametersNewVpcToTerraform(struct?: AwsTgwSiteAwsParametersNewVpcOutputReference | AwsTgwSiteAwsParametersNewVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    name_tag: cdktf.stringToTerraform(struct!.nameTag),
    primary_ipv4: cdktf.stringToTerraform(struct!.primaryIpv4),
  }
}


export function awsTgwSiteAwsParametersNewVpcToHclTerraform(struct?: AwsTgwSiteAwsParametersNewVpcOutputReference | AwsTgwSiteAwsParametersNewVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerate: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_tag: {
      value: cdktf.stringToHclTerraform(struct!.nameTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersNewVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersNewVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._nameTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTag = this._nameTag;
    }
    if (this._primaryIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpv4 = this._primaryIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersNewVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._nameTag = undefined;
      this._primaryIpv4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._nameTag = value.nameTag;
      this._primaryIpv4 = value.primaryIpv4;
    }
  }

  // autogenerate - computed: false, optional: true, required: false
  private _autogenerate?: boolean | cdktf.IResolvable; 
  public get autogenerate() {
    return this.getBooleanAttribute('autogenerate');
  }
  public set autogenerate(value: boolean | cdktf.IResolvable) {
    this._autogenerate = value;
  }
  public resetAutogenerate() {
    this._autogenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateInput() {
    return this._autogenerate;
  }

  // name_tag - computed: false, optional: true, required: false
  private _nameTag?: string; 
  public get nameTag() {
    return this.getStringAttribute('name_tag');
  }
  public set nameTag(value: string) {
    this._nameTag = value;
  }
  public resetNameTag() {
    this._nameTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTagInput() {
    return this._nameTag;
  }

  // primary_ipv4 - computed: false, optional: false, required: true
  private _primaryIpv4?: string; 
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }
  public set primaryIpv4(value: string) {
    this._primaryIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv4Input() {
    return this._primaryIpv4;
  }
}
export interface AwsTgwSiteAwsParametersTgwCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: string;
}

export function awsTgwSiteAwsParametersTgwCidrToTerraform(struct?: AwsTgwSiteAwsParametersTgwCidrOutputReference | AwsTgwSiteAwsParametersTgwCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteAwsParametersTgwCidrToHclTerraform(struct?: AwsTgwSiteAwsParametersTgwCidrOutputReference | AwsTgwSiteAwsParametersTgwCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersTgwCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParametersTgwCidr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParametersTgwCidr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AwsTgwSiteAwsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#aws_region AwsTgwSite#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disable_internet_vip AwsTgwSite#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disk_size AwsTgwSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#enable_internet_vip AwsTgwSite#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#f5xc_security_group AwsTgwSite#f5xc_security_group}
  */
  readonly f5XcSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#instance_type AwsTgwSite#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_worker_nodes AwsTgwSite#no_worker_nodes}
  */
  readonly noWorkerNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#nodes_per_az AwsTgwSite#nodes_per_az}
  */
  readonly nodesPerAz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#reserved_tgw_cidr AwsTgwSite#reserved_tgw_cidr}
  */
  readonly reservedTgwCidr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ssh_key AwsTgwSite#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#total_nodes AwsTgwSite#total_nodes}
  */
  readonly totalNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vpc_id AwsTgwSite#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#admin_password AwsTgwSite#admin_password}
  */
  readonly adminPassword?: AwsTgwSiteAwsParametersAdminPassword;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#aws_cred AwsTgwSite#aws_cred}
  */
  readonly awsCred?: AwsTgwSiteAwsParametersAwsCred;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#az_nodes AwsTgwSite#az_nodes}
  */
  readonly azNodes: AwsTgwSiteAwsParametersAzNodes[] | cdktf.IResolvable;
  /**
  * custom_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_security_group AwsTgwSite#custom_security_group}
  */
  readonly customSecurityGroup?: AwsTgwSiteAwsParametersCustomSecurityGroup;
  /**
  * existing_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#existing_tgw AwsTgwSite#existing_tgw}
  */
  readonly existingTgw?: AwsTgwSiteAwsParametersExistingTgw;
  /**
  * new_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#new_tgw AwsTgwSite#new_tgw}
  */
  readonly newTgw?: AwsTgwSiteAwsParametersNewTgw;
  /**
  * new_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#new_vpc AwsTgwSite#new_vpc}
  */
  readonly newVpc?: AwsTgwSiteAwsParametersNewVpc;
  /**
  * tgw_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tgw_cidr AwsTgwSite#tgw_cidr}
  */
  readonly tgwCidr?: AwsTgwSiteAwsParametersTgwCidr;
}

export function awsTgwSiteAwsParametersToTerraform(struct?: AwsTgwSiteAwsParametersOutputReference | AwsTgwSiteAwsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    f5xc_security_group: cdktf.booleanToTerraform(struct!.f5XcSecurityGroup),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    no_worker_nodes: cdktf.booleanToTerraform(struct!.noWorkerNodes),
    nodes_per_az: cdktf.numberToTerraform(struct!.nodesPerAz),
    reserved_tgw_cidr: cdktf.booleanToTerraform(struct!.reservedTgwCidr),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    total_nodes: cdktf.numberToTerraform(struct!.totalNodes),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    admin_password: awsTgwSiteAwsParametersAdminPasswordToTerraform(struct!.adminPassword),
    aws_cred: awsTgwSiteAwsParametersAwsCredToTerraform(struct!.awsCred),
    az_nodes: cdktf.listMapper(awsTgwSiteAwsParametersAzNodesToTerraform, true)(struct!.azNodes),
    custom_security_group: awsTgwSiteAwsParametersCustomSecurityGroupToTerraform(struct!.customSecurityGroup),
    existing_tgw: awsTgwSiteAwsParametersExistingTgwToTerraform(struct!.existingTgw),
    new_tgw: awsTgwSiteAwsParametersNewTgwToTerraform(struct!.newTgw),
    new_vpc: awsTgwSiteAwsParametersNewVpcToTerraform(struct!.newVpc),
    tgw_cidr: awsTgwSiteAwsParametersTgwCidrToTerraform(struct!.tgwCidr),
  }
}


export function awsTgwSiteAwsParametersToHclTerraform(struct?: AwsTgwSiteAwsParametersOutputReference | AwsTgwSiteAwsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    f5xc_security_group: {
      value: cdktf.booleanToHclTerraform(struct!.f5XcSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_worker_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.noWorkerNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nodes_per_az: {
      value: cdktf.numberToHclTerraform(struct!.nodesPerAz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_tgw_cidr: {
      value: cdktf.booleanToHclTerraform(struct!.reservedTgwCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_nodes: {
      value: cdktf.numberToHclTerraform(struct!.totalNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: awsTgwSiteAwsParametersAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAdminPasswordList",
    },
    aws_cred: {
      value: awsTgwSiteAwsParametersAwsCredToHclTerraform(struct!.awsCred),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAwsCredList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(awsTgwSiteAwsParametersAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersAzNodesList",
    },
    custom_security_group: {
      value: awsTgwSiteAwsParametersCustomSecurityGroupToHclTerraform(struct!.customSecurityGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersCustomSecurityGroupList",
    },
    existing_tgw: {
      value: awsTgwSiteAwsParametersExistingTgwToHclTerraform(struct!.existingTgw),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersExistingTgwList",
    },
    new_tgw: {
      value: awsTgwSiteAwsParametersNewTgwToHclTerraform(struct!.newTgw),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersNewTgwList",
    },
    new_vpc: {
      value: awsTgwSiteAwsParametersNewVpcToHclTerraform(struct!.newVpc),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersNewVpcList",
    },
    tgw_cidr: {
      value: awsTgwSiteAwsParametersTgwCidrToHclTerraform(struct!.tgwCidr),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteAwsParametersTgwCidrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteAwsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteAwsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._f5XcSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5XcSecurityGroup = this._f5XcSecurityGroup;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._noWorkerNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWorkerNodes = this._noWorkerNodes;
    }
    if (this._nodesPerAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesPerAz = this._nodesPerAz;
    }
    if (this._reservedTgwCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedTgwCidr = this._reservedTgwCidr;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._totalNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNodes = this._totalNodes;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    if (this._awsCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCred = this._awsCred?.internalValue;
    }
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
    }
    if (this._customSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurityGroup = this._customSecurityGroup?.internalValue;
    }
    if (this._existingTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingTgw = this._existingTgw?.internalValue;
    }
    if (this._newTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTgw = this._newTgw?.internalValue;
    }
    if (this._newVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newVpc = this._newVpc?.internalValue;
    }
    if (this._tgwCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwCidr = this._tgwCidr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteAwsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._disableInternetVip = undefined;
      this._diskSize = undefined;
      this._enableInternetVip = undefined;
      this._f5XcSecurityGroup = undefined;
      this._instanceType = undefined;
      this._noWorkerNodes = undefined;
      this._nodesPerAz = undefined;
      this._reservedTgwCidr = undefined;
      this._sshKey = undefined;
      this._totalNodes = undefined;
      this._vpcId = undefined;
      this._adminPassword.internalValue = undefined;
      this._awsCred.internalValue = undefined;
      this._azNodes.internalValue = undefined;
      this._customSecurityGroup.internalValue = undefined;
      this._existingTgw.internalValue = undefined;
      this._newTgw.internalValue = undefined;
      this._newVpc.internalValue = undefined;
      this._tgwCidr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._disableInternetVip = value.disableInternetVip;
      this._diskSize = value.diskSize;
      this._enableInternetVip = value.enableInternetVip;
      this._f5XcSecurityGroup = value.f5XcSecurityGroup;
      this._instanceType = value.instanceType;
      this._noWorkerNodes = value.noWorkerNodes;
      this._nodesPerAz = value.nodesPerAz;
      this._reservedTgwCidr = value.reservedTgwCidr;
      this._sshKey = value.sshKey;
      this._totalNodes = value.totalNodes;
      this._vpcId = value.vpcId;
      this._adminPassword.internalValue = value.adminPassword;
      this._awsCred.internalValue = value.awsCred;
      this._azNodes.internalValue = value.azNodes;
      this._customSecurityGroup.internalValue = value.customSecurityGroup;
      this._existingTgw.internalValue = value.existingTgw;
      this._newTgw.internalValue = value.newTgw;
      this._newVpc.internalValue = value.newVpc;
      this._tgwCidr.internalValue = value.tgwCidr;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
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

  // f5xc_security_group - computed: false, optional: true, required: false
  private _f5XcSecurityGroup?: boolean | cdktf.IResolvable; 
  public get f5XcSecurityGroup() {
    return this.getBooleanAttribute('f5xc_security_group');
  }
  public set f5XcSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._f5XcSecurityGroup = value;
  }
  public resetF5XcSecurityGroup() {
    this._f5XcSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5XcSecurityGroupInput() {
    return this._f5XcSecurityGroup;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // no_worker_nodes - computed: false, optional: true, required: false
  private _noWorkerNodes?: boolean | cdktf.IResolvable; 
  public get noWorkerNodes() {
    return this.getBooleanAttribute('no_worker_nodes');
  }
  public set noWorkerNodes(value: boolean | cdktf.IResolvable) {
    this._noWorkerNodes = value;
  }
  public resetNoWorkerNodes() {
    this._noWorkerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorkerNodesInput() {
    return this._noWorkerNodes;
  }

  // nodes_per_az - computed: false, optional: true, required: false
  private _nodesPerAz?: number; 
  public get nodesPerAz() {
    return this.getNumberAttribute('nodes_per_az');
  }
  public set nodesPerAz(value: number) {
    this._nodesPerAz = value;
  }
  public resetNodesPerAz() {
    this._nodesPerAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesPerAzInput() {
    return this._nodesPerAz;
  }

  // reserved_tgw_cidr - computed: false, optional: true, required: false
  private _reservedTgwCidr?: boolean | cdktf.IResolvable; 
  public get reservedTgwCidr() {
    return this.getBooleanAttribute('reserved_tgw_cidr');
  }
  public set reservedTgwCidr(value: boolean | cdktf.IResolvable) {
    this._reservedTgwCidr = value;
  }
  public resetReservedTgwCidr() {
    this._reservedTgwCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedTgwCidrInput() {
    return this._reservedTgwCidr;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // total_nodes - computed: false, optional: true, required: false
  private _totalNodes?: number; 
  public get totalNodes() {
    return this.getNumberAttribute('total_nodes');
  }
  public set totalNodes(value: number) {
    this._totalNodes = value;
  }
  public resetTotalNodes() {
    this._totalNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesInput() {
    return this._totalNodes;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword = new AwsTgwSiteAwsParametersAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: AwsTgwSiteAwsParametersAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  public resetAdminPassword() {
    this._adminPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // aws_cred - computed: false, optional: true, required: false
  private _awsCred = new AwsTgwSiteAwsParametersAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: AwsTgwSiteAwsParametersAwsCred) {
    this._awsCred.internalValue = value;
  }
  public resetAwsCred() {
    this._awsCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // az_nodes - computed: false, optional: false, required: true
  private _azNodes = new AwsTgwSiteAwsParametersAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AwsTgwSiteAwsParametersAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // custom_security_group - computed: false, optional: true, required: false
  private _customSecurityGroup = new AwsTgwSiteAwsParametersCustomSecurityGroupOutputReference(this, "custom_security_group");
  public get customSecurityGroup() {
    return this._customSecurityGroup;
  }
  public putCustomSecurityGroup(value: AwsTgwSiteAwsParametersCustomSecurityGroup) {
    this._customSecurityGroup.internalValue = value;
  }
  public resetCustomSecurityGroup() {
    this._customSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupInput() {
    return this._customSecurityGroup.internalValue;
  }

  // existing_tgw - computed: false, optional: true, required: false
  private _existingTgw = new AwsTgwSiteAwsParametersExistingTgwOutputReference(this, "existing_tgw");
  public get existingTgw() {
    return this._existingTgw;
  }
  public putExistingTgw(value: AwsTgwSiteAwsParametersExistingTgw) {
    this._existingTgw.internalValue = value;
  }
  public resetExistingTgw() {
    this._existingTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTgwInput() {
    return this._existingTgw.internalValue;
  }

  // new_tgw - computed: false, optional: true, required: false
  private _newTgw = new AwsTgwSiteAwsParametersNewTgwOutputReference(this, "new_tgw");
  public get newTgw() {
    return this._newTgw;
  }
  public putNewTgw(value: AwsTgwSiteAwsParametersNewTgw) {
    this._newTgw.internalValue = value;
  }
  public resetNewTgw() {
    this._newTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTgwInput() {
    return this._newTgw.internalValue;
  }

  // new_vpc - computed: false, optional: true, required: false
  private _newVpc = new AwsTgwSiteAwsParametersNewVpcOutputReference(this, "new_vpc");
  public get newVpc() {
    return this._newVpc;
  }
  public putNewVpc(value: AwsTgwSiteAwsParametersNewVpc) {
    this._newVpc.internalValue = value;
  }
  public resetNewVpc() {
    this._newVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVpcInput() {
    return this._newVpc.internalValue;
  }

  // tgw_cidr - computed: false, optional: true, required: false
  private _tgwCidr = new AwsTgwSiteAwsParametersTgwCidrOutputReference(this, "tgw_cidr");
  public get tgwCidr() {
    return this._tgwCidr;
  }
  public putTgwCidr(value: AwsTgwSiteAwsParametersTgwCidr) {
    this._tgwCidr.internalValue = value;
  }
  public resetTgwCidr() {
    this._tgwCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwCidrInput() {
    return this._tgwCidr.internalValue;
  }
}
export interface AwsTgwSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#dns AwsTgwSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#network_type AwsTgwSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ssh AwsTgwSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#web_user_interface AwsTgwSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function awsTgwSiteBlockedServicesBlockedSeviceToTerraform(struct?: AwsTgwSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function awsTgwSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: AwsTgwSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
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
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class AwsTgwSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteBlockedServicesBlockedSeviceOutputReference {
    return new AwsTgwSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#blocked_sevice AwsTgwSite#blocked_sevice}
  */
  readonly blockedSevice?: AwsTgwSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function awsTgwSiteBlockedServicesToTerraform(struct?: AwsTgwSiteBlockedServicesOutputReference | AwsTgwSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(awsTgwSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function awsTgwSiteBlockedServicesToHclTerraform(struct?: AwsTgwSiteBlockedServicesOutputReference | AwsTgwSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(awsTgwSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteBlockedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedSevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedSevice.internalValue = value.blockedSevice;
    }
  }

  // blocked_sevice - computed: false, optional: true, required: false
  private _blockedSevice = new AwsTgwSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: AwsTgwSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
    this._blockedSevice.internalValue = value;
  }
  public resetBlockedSevice() {
    this._blockedSevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSeviceInput() {
    return this._blockedSevice.internalValue;
  }
}
export interface AwsTgwSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#latitude AwsTgwSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#longitude AwsTgwSite#longitude}
  */
  readonly longitude?: number;
}

export function awsTgwSiteCoordinatesToTerraform(struct?: AwsTgwSiteCoordinatesOutputReference | AwsTgwSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function awsTgwSiteCoordinatesToHclTerraform(struct?: AwsTgwSiteCoordinatesOutputReference | AwsTgwSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface AwsTgwSiteCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside_nameserver AwsTgwSite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside_nameserver_v6 AwsTgwSite#inside_nameserver_v6}
  */
  readonly insideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside_nameserver AwsTgwSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside_nameserver_v6 AwsTgwSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
}

export function awsTgwSiteCustomDnsToTerraform(struct?: AwsTgwSiteCustomDnsOutputReference | AwsTgwSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_nameserver: cdktf.stringToTerraform(struct!.insideNameserver),
    inside_nameserver_v6: cdktf.stringToTerraform(struct!.insideNameserverV6),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
  }
}


export function awsTgwSiteCustomDnsToHclTerraform(struct?: AwsTgwSiteCustomDnsOutputReference | AwsTgwSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserver = this._insideNameserver;
    }
    if (this._insideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserverV6 = this._insideNameserverV6;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNameserver = undefined;
      this._insideNameserverV6 = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNameserver = value.insideNameserver;
      this._insideNameserverV6 = value.insideNameserverV6;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
    }
  }

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_nameserver_v6 - computed: false, optional: true, required: false
  private _insideNameserverV6?: string; 
  public get insideNameserverV6() {
    return this.getStringAttribute('inside_nameserver_v6');
  }
  public set insideNameserverV6(value: string) {
    this._insideNameserverV6 = value;
  }
  public resetInsideNameserverV6() {
    this._insideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverV6Input() {
    return this._insideNameserverV6;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }
}
export interface AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#cloudlink_network_name AwsTgwSite#cloudlink_network_name}
  */
  readonly cloudlinkNetworkName: string;
}

export function awsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference | AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudlink_network_name: cdktf.stringToTerraform(struct!.cloudlinkNetworkName),
  }
}


export function awsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToHclTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference | AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudlink_network_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudlinkNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudlinkNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudlinkNetworkName = this._cloudlinkNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudlinkNetworkName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudlinkNetworkName = value.cloudlinkNetworkName;
    }
  }

  // cloudlink_network_name - computed: false, optional: false, required: true
  private _cloudlinkNetworkName?: string; 
  public get cloudlinkNetworkName() {
    return this.getStringAttribute('cloudlink_network_name');
  }
  public set cloudlinkNetworkName(value: string) {
    this._cloudlinkNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudlinkNetworkNameInput() {
    return this._cloudlinkNetworkName;
  }
}
export interface AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#other_region AwsTgwSite#other_region}
  */
  readonly otherRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#same_as_site_region AwsTgwSite#same_as_site_region}
  */
  readonly sameAsSiteRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vif_id AwsTgwSite#vif_id}
  */
  readonly vifId: string;
}

export function awsTgwSiteDirectConnectEnabledHostedVifsVifListStructToTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_region: cdktf.stringToTerraform(struct!.otherRegion),
    same_as_site_region: cdktf.booleanToTerraform(struct!.sameAsSiteRegion),
    vif_id: cdktf.stringToTerraform(struct!.vifId),
  }
}


export function awsTgwSiteDirectConnectEnabledHostedVifsVifListStructToHclTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_region: {
      value: cdktf.stringToHclTerraform(struct!.otherRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_site_region: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsSiteRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vif_id: {
      value: cdktf.stringToHclTerraform(struct!.vifId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherRegion = this._otherRegion;
    }
    if (this._sameAsSiteRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsSiteRegion = this._sameAsSiteRegion;
    }
    if (this._vifId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifId = this._vifId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._otherRegion = undefined;
      this._sameAsSiteRegion = undefined;
      this._vifId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._otherRegion = value.otherRegion;
      this._sameAsSiteRegion = value.sameAsSiteRegion;
      this._vifId = value.vifId;
    }
  }

  // other_region - computed: false, optional: true, required: false
  private _otherRegion?: string; 
  public get otherRegion() {
    return this.getStringAttribute('other_region');
  }
  public set otherRegion(value: string) {
    this._otherRegion = value;
  }
  public resetOtherRegion() {
    this._otherRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherRegionInput() {
    return this._otherRegion;
  }

  // same_as_site_region - computed: false, optional: true, required: false
  private _sameAsSiteRegion?: boolean | cdktf.IResolvable; 
  public get sameAsSiteRegion() {
    return this.getBooleanAttribute('same_as_site_region');
  }
  public set sameAsSiteRegion(value: boolean | cdktf.IResolvable) {
    this._sameAsSiteRegion = value;
  }
  public resetSameAsSiteRegion() {
    this._sameAsSiteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsSiteRegionInput() {
    return this._sameAsSiteRegion;
  }

  // vif_id - computed: false, optional: false, required: true
  private _vifId?: string; 
  public get vifId() {
    return this.getStringAttribute('vif_id');
  }
  public set vifId(value: string) {
    this._vifId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vifIdInput() {
    return this._vifId;
  }
}

export class AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructOutputReference {
    return new AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteDirectConnectEnabledHostedVifs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#site_registration_over_internet AwsTgwSite#site_registration_over_internet}
  */
  readonly siteRegistrationOverInternet?: boolean | cdktf.IResolvable;
  /**
  * site_registration_over_direct_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#site_registration_over_direct_connect AwsTgwSite#site_registration_over_direct_connect}
  */
  readonly siteRegistrationOverDirectConnect?: AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect;
  /**
  * vif_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vif_list AwsTgwSite#vif_list}
  */
  readonly vifList?: AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable;
}

export function awsTgwSiteDirectConnectEnabledHostedVifsToTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsOutputReference | AwsTgwSiteDirectConnectEnabledHostedVifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_registration_over_internet: cdktf.booleanToTerraform(struct!.siteRegistrationOverInternet),
    site_registration_over_direct_connect: awsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToTerraform(struct!.siteRegistrationOverDirectConnect),
    vif_list: cdktf.listMapper(awsTgwSiteDirectConnectEnabledHostedVifsVifListStructToTerraform, true)(struct!.vifList),
  }
}


export function awsTgwSiteDirectConnectEnabledHostedVifsToHclTerraform(struct?: AwsTgwSiteDirectConnectEnabledHostedVifsOutputReference | AwsTgwSiteDirectConnectEnabledHostedVifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_registration_over_internet: {
      value: cdktf.booleanToHclTerraform(struct!.siteRegistrationOverInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_registration_over_direct_connect: {
      value: awsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectToHclTerraform(struct!.siteRegistrationOverDirectConnect),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectList",
    },
    vif_list: {
      value: cdktf.listMapperHcl(awsTgwSiteDirectConnectEnabledHostedVifsVifListStructToHclTerraform, true)(struct!.vifList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteDirectConnectEnabledHostedVifsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteDirectConnectEnabledHostedVifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteRegistrationOverInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverInternet = this._siteRegistrationOverInternet;
    }
    if (this._siteRegistrationOverDirectConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverDirectConnect = this._siteRegistrationOverDirectConnect?.internalValue;
    }
    if (this._vifList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vifList = this._vifList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteDirectConnectEnabledHostedVifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteRegistrationOverInternet = undefined;
      this._siteRegistrationOverDirectConnect.internalValue = undefined;
      this._vifList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteRegistrationOverInternet = value.siteRegistrationOverInternet;
      this._siteRegistrationOverDirectConnect.internalValue = value.siteRegistrationOverDirectConnect;
      this._vifList.internalValue = value.vifList;
    }
  }

  // site_registration_over_internet - computed: false, optional: true, required: false
  private _siteRegistrationOverInternet?: boolean | cdktf.IResolvable; 
  public get siteRegistrationOverInternet() {
    return this.getBooleanAttribute('site_registration_over_internet');
  }
  public set siteRegistrationOverInternet(value: boolean | cdktf.IResolvable) {
    this._siteRegistrationOverInternet = value;
  }
  public resetSiteRegistrationOverInternet() {
    this._siteRegistrationOverInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverInternetInput() {
    return this._siteRegistrationOverInternet;
  }

  // site_registration_over_direct_connect - computed: false, optional: true, required: false
  private _siteRegistrationOverDirectConnect = new AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnectOutputReference(this, "site_registration_over_direct_connect");
  public get siteRegistrationOverDirectConnect() {
    return this._siteRegistrationOverDirectConnect;
  }
  public putSiteRegistrationOverDirectConnect(value: AwsTgwSiteDirectConnectEnabledHostedVifsSiteRegistrationOverDirectConnect) {
    this._siteRegistrationOverDirectConnect.internalValue = value;
  }
  public resetSiteRegistrationOverDirectConnect() {
    this._siteRegistrationOverDirectConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverDirectConnectInput() {
    return this._siteRegistrationOverDirectConnect.internalValue;
  }

  // vif_list - computed: false, optional: true, required: false
  private _vifList = new AwsTgwSiteDirectConnectEnabledHostedVifsVifListStructList(this, "vif_list", false);
  public get vifList() {
    return this._vifList;
  }
  public putVifList(value: AwsTgwSiteDirectConnectEnabledHostedVifsVifListStruct[] | cdktf.IResolvable) {
    this._vifList.internalValue = value;
  }
  public resetVifList() {
    this._vifList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vifListInput() {
    return this._vifList.internalValue;
  }
}
export interface AwsTgwSiteDirectConnectEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#auto_asn AwsTgwSite#auto_asn}
  */
  readonly autoAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_asn AwsTgwSite#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#standard_vifs AwsTgwSite#standard_vifs}
  */
  readonly standardVifs?: boolean | cdktf.IResolvable;
  /**
  * hosted_vifs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#hosted_vifs AwsTgwSite#hosted_vifs}
  */
  readonly hostedVifs?: AwsTgwSiteDirectConnectEnabledHostedVifs;
}

export function awsTgwSiteDirectConnectEnabledToTerraform(struct?: AwsTgwSiteDirectConnectEnabledOutputReference | AwsTgwSiteDirectConnectEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_asn: cdktf.booleanToTerraform(struct!.autoAsn),
    custom_asn: cdktf.numberToTerraform(struct!.customAsn),
    standard_vifs: cdktf.booleanToTerraform(struct!.standardVifs),
    hosted_vifs: awsTgwSiteDirectConnectEnabledHostedVifsToTerraform(struct!.hostedVifs),
  }
}


export function awsTgwSiteDirectConnectEnabledToHclTerraform(struct?: AwsTgwSiteDirectConnectEnabledOutputReference | AwsTgwSiteDirectConnectEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_asn: {
      value: cdktf.booleanToHclTerraform(struct!.autoAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_asn: {
      value: cdktf.numberToHclTerraform(struct!.customAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_vifs: {
      value: cdktf.booleanToHclTerraform(struct!.standardVifs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hosted_vifs: {
      value: awsTgwSiteDirectConnectEnabledHostedVifsToHclTerraform(struct!.hostedVifs),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteDirectConnectEnabledHostedVifsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteDirectConnectEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteDirectConnectEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAsn = this._autoAsn;
    }
    if (this._customAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAsn = this._customAsn;
    }
    if (this._standardVifs !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardVifs = this._standardVifs;
    }
    if (this._hostedVifs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedVifs = this._hostedVifs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteDirectConnectEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoAsn = undefined;
      this._customAsn = undefined;
      this._standardVifs = undefined;
      this._hostedVifs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoAsn = value.autoAsn;
      this._customAsn = value.customAsn;
      this._standardVifs = value.standardVifs;
      this._hostedVifs.internalValue = value.hostedVifs;
    }
  }

  // auto_asn - computed: false, optional: true, required: false
  private _autoAsn?: boolean | cdktf.IResolvable; 
  public get autoAsn() {
    return this.getBooleanAttribute('auto_asn');
  }
  public set autoAsn(value: boolean | cdktf.IResolvable) {
    this._autoAsn = value;
  }
  public resetAutoAsn() {
    this._autoAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsnInput() {
    return this._autoAsn;
  }

  // custom_asn - computed: false, optional: true, required: false
  private _customAsn?: number; 
  public get customAsn() {
    return this.getNumberAttribute('custom_asn');
  }
  public set customAsn(value: number) {
    this._customAsn = value;
  }
  public resetCustomAsn() {
    this._customAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAsnInput() {
    return this._customAsn;
  }

  // standard_vifs - computed: false, optional: true, required: false
  private _standardVifs?: boolean | cdktf.IResolvable; 
  public get standardVifs() {
    return this.getBooleanAttribute('standard_vifs');
  }
  public set standardVifs(value: boolean | cdktf.IResolvable) {
    this._standardVifs = value;
  }
  public resetStandardVifs() {
    this._standardVifs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardVifsInput() {
    return this._standardVifs;
  }

  // hosted_vifs - computed: false, optional: true, required: false
  private _hostedVifs = new AwsTgwSiteDirectConnectEnabledHostedVifsOutputReference(this, "hosted_vifs");
  public get hostedVifs() {
    return this._hostedVifs;
  }
  public putHostedVifs(value: AwsTgwSiteDirectConnectEnabledHostedVifs) {
    this._hostedVifs.internalValue = value;
  }
  public resetHostedVifs() {
    this._hostedVifs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedVifsInput() {
    return this._hostedVifs.internalValue;
  }
}
export interface AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#drain_max_unavailable_node_count AwsTgwSite#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#drain_node_timeout AwsTgwSite#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
}

export function awsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
  }
}


export function awsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainNodeTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainNodeTimeout = value.drainNodeTimeout;
    }
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }
}
export interface AwsTgwSiteKubernetesUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disable_upgrade_drain AwsTgwSite#disable_upgrade_drain}
  */
  readonly disableUpgradeDrain?: boolean | cdktf.IResolvable;
  /**
  * enable_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#enable_upgrade_drain AwsTgwSite#enable_upgrade_drain}
  */
  readonly enableUpgradeDrain?: AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain;
}

export function awsTgwSiteKubernetesUpgradeDrainToTerraform(struct?: AwsTgwSiteKubernetesUpgradeDrainOutputReference | AwsTgwSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_upgrade_drain: cdktf.booleanToTerraform(struct!.disableUpgradeDrain),
    enable_upgrade_drain: awsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct!.enableUpgradeDrain),
  }
}


export function awsTgwSiteKubernetesUpgradeDrainToHclTerraform(struct?: AwsTgwSiteKubernetesUpgradeDrainOutputReference | AwsTgwSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_upgrade_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpgradeDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upgrade_drain: {
      value: awsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct!.enableUpgradeDrain),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteKubernetesUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteKubernetesUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUpgradeDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpgradeDrain = this._disableUpgradeDrain;
    }
    if (this._enableUpgradeDrain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpgradeDrain = this._enableUpgradeDrain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteKubernetesUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUpgradeDrain = undefined;
      this._enableUpgradeDrain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUpgradeDrain = value.disableUpgradeDrain;
      this._enableUpgradeDrain.internalValue = value.enableUpgradeDrain;
    }
  }

  // disable_upgrade_drain - computed: false, optional: true, required: false
  private _disableUpgradeDrain?: boolean | cdktf.IResolvable; 
  public get disableUpgradeDrain() {
    return this.getBooleanAttribute('disable_upgrade_drain');
  }
  public set disableUpgradeDrain(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeDrain = value;
  }
  public resetDisableUpgradeDrain() {
    this._disableUpgradeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeDrainInput() {
    return this._disableUpgradeDrain;
  }

  // enable_upgrade_drain - computed: false, optional: true, required: false
  private _enableUpgradeDrain = new AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference(this, "enable_upgrade_drain");
  public get enableUpgradeDrain() {
    return this._enableUpgradeDrain;
  }
  public putEnableUpgradeDrain(value: AwsTgwSiteKubernetesUpgradeDrainEnableUpgradeDrain) {
    this._enableUpgradeDrain.internalValue = value;
  }
  public resetEnableUpgradeDrain() {
    this._enableUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpgradeDrainInput() {
    return this._enableUpgradeDrain.internalValue;
  }
}
export interface AwsTgwSiteLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteLogReceiverToTerraform(struct?: AwsTgwSiteLogReceiverOutputReference | AwsTgwSiteLogReceiver): any {
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


export function awsTgwSiteLogReceiverToHclTerraform(struct?: AwsTgwSiteLogReceiverOutputReference | AwsTgwSiteLogReceiver): any {
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

export class AwsTgwSiteLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteLogReceiver | undefined {
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

  public set internalValue(value: AwsTgwSiteLogReceiver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface AwsTgwSiteOfflineSurvivabilityMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#enable_offline_survivability_mode AwsTgwSite#enable_offline_survivability_mode}
  */
  readonly enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_offline_survivability_mode AwsTgwSite#no_offline_survivability_mode}
  */
  readonly noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
}

export function awsTgwSiteOfflineSurvivabilityModeToTerraform(struct?: AwsTgwSiteOfflineSurvivabilityModeOutputReference | AwsTgwSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_offline_survivability_mode: cdktf.booleanToTerraform(struct!.enableOfflineSurvivabilityMode),
    no_offline_survivability_mode: cdktf.booleanToTerraform(struct!.noOfflineSurvivabilityMode),
  }
}


export function awsTgwSiteOfflineSurvivabilityModeToHclTerraform(struct?: AwsTgwSiteOfflineSurvivabilityModeOutputReference | AwsTgwSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.noOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteOfflineSurvivabilityModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteOfflineSurvivabilityMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOfflineSurvivabilityMode = this._enableOfflineSurvivabilityMode;
    }
    if (this._noOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfflineSurvivabilityMode = this._noOfflineSurvivabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteOfflineSurvivabilityMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOfflineSurvivabilityMode = undefined;
      this._noOfflineSurvivabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOfflineSurvivabilityMode = value.enableOfflineSurvivabilityMode;
      this._noOfflineSurvivabilityMode = value.noOfflineSurvivabilityMode;
    }
  }

  // enable_offline_survivability_mode - computed: false, optional: true, required: false
  private _enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get enableOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('enable_offline_survivability_mode');
  }
  public set enableOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._enableOfflineSurvivabilityMode = value;
  }
  public resetEnableOfflineSurvivabilityMode() {
    this._enableOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOfflineSurvivabilityModeInput() {
    return this._enableOfflineSurvivabilityMode;
  }

  // no_offline_survivability_mode - computed: false, optional: true, required: false
  private _noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get noOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('no_offline_survivability_mode');
  }
  public set noOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._noOfflineSurvivabilityMode = value;
  }
  public resetNoOfflineSurvivabilityMode() {
    this._noOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfflineSurvivabilityModeInput() {
    return this._noOfflineSurvivabilityMode;
  }
}
export interface AwsTgwSiteOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#default_os_version AwsTgwSite#default_os_version}
  */
  readonly defaultOsVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#operating_system_version AwsTgwSite#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function awsTgwSiteOsToTerraform(struct?: AwsTgwSiteOsOutputReference | AwsTgwSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_os_version: cdktf.booleanToTerraform(struct!.defaultOsVersion),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function awsTgwSiteOsToHclTerraform(struct?: AwsTgwSiteOsOutputReference | AwsTgwSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_os_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOsVersion = this._defaultOsVersion;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultOsVersion = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultOsVersion = value.defaultOsVersion;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // default_os_version - computed: false, optional: true, required: false
  private _defaultOsVersion?: boolean | cdktf.IResolvable; 
  public get defaultOsVersion() {
    return this.getBooleanAttribute('default_os_version');
  }
  public set defaultOsVersion(value: boolean | cdktf.IResolvable) {
    this._defaultOsVersion = value;
  }
  public resetDefaultOsVersion() {
    this._defaultOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsVersionInput() {
    return this._defaultOsVersion;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#jumbo AwsTgwSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_jumbo AwsTgwSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function awsTgwSitePerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AwsTgwSitePerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function awsTgwSitePerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AwsTgwSitePerformanceEnhancementModePerfModeL3EnhancedOutputReference | AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSitePerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AwsTgwSitePerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#perf_mode_l7_enhanced AwsTgwSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#perf_mode_l3_enhanced AwsTgwSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced;
}

export function awsTgwSitePerformanceEnhancementModeToTerraform(struct?: AwsTgwSitePerformanceEnhancementModeOutputReference | AwsTgwSitePerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: awsTgwSitePerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function awsTgwSitePerformanceEnhancementModeToHclTerraform(struct?: AwsTgwSitePerformanceEnhancementModeOutputReference | AwsTgwSitePerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: awsTgwSitePerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSitePerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSitePerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSitePerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSitePerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AwsTgwSitePerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AwsTgwSitePerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AwsTgwSitePrivateConnectivityCloudLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSitePrivateConnectivityCloudLinkToTerraform(struct?: AwsTgwSitePrivateConnectivityCloudLinkOutputReference | AwsTgwSitePrivateConnectivityCloudLink): any {
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


export function awsTgwSitePrivateConnectivityCloudLinkToHclTerraform(struct?: AwsTgwSitePrivateConnectivityCloudLinkOutputReference | AwsTgwSitePrivateConnectivityCloudLink): any {
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

export class AwsTgwSitePrivateConnectivityCloudLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSitePrivateConnectivityCloudLink | undefined {
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

  public set internalValue(value: AwsTgwSitePrivateConnectivityCloudLink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AwsTgwSitePrivateConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside AwsTgwSite#inside}
  */
  readonly inside?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside AwsTgwSite#outside}
  */
  readonly outside?: boolean | cdktf.IResolvable;
  /**
  * cloud_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#cloud_link AwsTgwSite#cloud_link}
  */
  readonly cloudLink: AwsTgwSitePrivateConnectivityCloudLink;
}

export function awsTgwSitePrivateConnectivityToTerraform(struct?: AwsTgwSitePrivateConnectivityOutputReference | AwsTgwSitePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.booleanToTerraform(struct!.inside),
    outside: cdktf.booleanToTerraform(struct!.outside),
    cloud_link: awsTgwSitePrivateConnectivityCloudLinkToTerraform(struct!.cloudLink),
  }
}


export function awsTgwSitePrivateConnectivityToHclTerraform(struct?: AwsTgwSitePrivateConnectivityOutputReference | AwsTgwSitePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.booleanToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside: {
      value: cdktf.booleanToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_link: {
      value: awsTgwSitePrivateConnectivityCloudLinkToHclTerraform(struct!.cloudLink),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSitePrivateConnectivityCloudLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSitePrivateConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSitePrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._cloudLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLink = this._cloudLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSitePrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._cloudLink.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._cloudLink.internalValue = value.cloudLink;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: boolean | cdktf.IResolvable; 
  public get inside() {
    return this.getBooleanAttribute('inside');
  }
  public set inside(value: boolean | cdktf.IResolvable) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: boolean | cdktf.IResolvable; 
  public get outside() {
    return this.getBooleanAttribute('outside');
  }
  public set outside(value: boolean | cdktf.IResolvable) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // cloud_link - computed: false, optional: false, required: true
  private _cloudLink = new AwsTgwSitePrivateConnectivityCloudLinkOutputReference(this, "cloud_link");
  public get cloudLink() {
    return this._cloudLink;
  }
  public putCloudLink(value: AwsTgwSitePrivateConnectivityCloudLink) {
    this._cloudLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLinkInput() {
    return this._cloudLink.internalValue;
  }
}
export interface AwsTgwSiteSw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#default_sw_version AwsTgwSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#volterra_software_version AwsTgwSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function awsTgwSiteSwToTerraform(struct?: AwsTgwSiteSwOutputReference | AwsTgwSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function awsTgwSiteSwToHclTerraform(struct?: AwsTgwSiteSwOutputReference | AwsTgwSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteSwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteSw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteSw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}
export interface AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies | cdktf.IResolvable): any {
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


export function awsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies | cdktf.IResolvable): any {
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

export class AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesOutputReference {
    return new AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteTgwSecurityActiveEastWestServicePolicies {
  /**
  * service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#service_policies AwsTgwSite#service_policies}
  */
  readonly servicePolicies?: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies[] | cdktf.IResolvable;
}

export function awsTgwSiteTgwSecurityActiveEastWestServicePoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesOutputReference | AwsTgwSiteTgwSecurityActiveEastWestServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_policies: cdktf.listMapper(awsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesToTerraform, true)(struct!.servicePolicies),
  }
}


export function awsTgwSiteTgwSecurityActiveEastWestServicePoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesOutputReference | AwsTgwSiteTgwSecurityActiveEastWestServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_policies: {
      value: cdktf.listMapperHcl(awsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesToHclTerraform, true)(struct!.servicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteTgwSecurityActiveEastWestServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePolicies = this._servicePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveEastWestServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePolicies.internalValue = value.servicePolicies;
    }
  }

  // service_policies - computed: false, optional: true, required: false
  private _servicePolicies = new AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePoliciesList(this, "service_policies", false);
  public get servicePolicies() {
    return this._servicePolicies;
  }
  public putServicePolicies(value: AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesServicePolicies[] | cdktf.IResolvable) {
    this._servicePolicies.internalValue = value;
  }
  public resetServicePolicies() {
    this._servicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoliciesInput() {
    return this._servicePolicies.internalValue;
  }
}
export interface AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#enhanced_firewall_policies AwsTgwSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function awsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteTgwSecurityActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#forward_proxy_policies AwsTgwSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function awsTgwSiteTgwSecurityActiveForwardProxyPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(awsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function awsTgwSiteTgwSecurityActiveForwardProxyPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(awsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteTgwSecurityActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function awsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteTgwSecurityActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#network_policies AwsTgwSite#network_policies}
  */
  readonly networkPolicies: AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function awsTgwSiteTgwSecurityActiveNetworkPoliciesToTerraform(struct?: AwsTgwSiteTgwSecurityActiveNetworkPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(awsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function awsTgwSiteTgwSecurityActiveNetworkPoliciesToHclTerraform(struct?: AwsTgwSiteTgwSecurityActiveNetworkPoliciesOutputReference | AwsTgwSiteTgwSecurityActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(awsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteTgwSecurityActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteTgwSecurityActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteTgwSecurityActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AwsTgwSiteTgwSecurityActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AwsTgwSiteTgwSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#east_west_service_policy_allow_all AwsTgwSite#east_west_service_policy_allow_all}
  */
  readonly eastWestServicePolicyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#forward_proxy_allow_all AwsTgwSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_east_west_policy AwsTgwSite#no_east_west_policy}
  */
  readonly noEastWestPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_forward_proxy AwsTgwSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_network_policy AwsTgwSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * active_east_west_service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#active_east_west_service_policies AwsTgwSite#active_east_west_service_policies}
  */
  readonly activeEastWestServicePolicies?: AwsTgwSiteTgwSecurityActiveEastWestServicePolicies;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#active_enhanced_firewall_policies AwsTgwSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#active_forward_proxy_policies AwsTgwSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AwsTgwSiteTgwSecurityActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#active_network_policies AwsTgwSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AwsTgwSiteTgwSecurityActiveNetworkPolicies;
}

export function awsTgwSiteTgwSecurityToTerraform(struct?: AwsTgwSiteTgwSecurityOutputReference | AwsTgwSiteTgwSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    east_west_service_policy_allow_all: cdktf.booleanToTerraform(struct!.eastWestServicePolicyAllowAll),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_east_west_policy: cdktf.booleanToTerraform(struct!.noEastWestPolicy),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    active_east_west_service_policies: awsTgwSiteTgwSecurityActiveEastWestServicePoliciesToTerraform(struct!.activeEastWestServicePolicies),
    active_enhanced_firewall_policies: awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: awsTgwSiteTgwSecurityActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: awsTgwSiteTgwSecurityActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
  }
}


export function awsTgwSiteTgwSecurityToHclTerraform(struct?: AwsTgwSiteTgwSecurityOutputReference | AwsTgwSiteTgwSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    east_west_service_policy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.eastWestServicePolicyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_east_west_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noEastWestPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    active_east_west_service_policies: {
      value: awsTgwSiteTgwSecurityActiveEastWestServicePoliciesToHclTerraform(struct!.activeEastWestServicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesList",
    },
    active_enhanced_firewall_policies: {
      value: awsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: awsTgwSiteTgwSecurityActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: awsTgwSiteTgwSecurityActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteTgwSecurityActiveNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteTgwSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteTgwSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eastWestServicePolicyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestServicePolicyAllowAll = this._eastWestServicePolicyAllowAll;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noEastWestPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noEastWestPolicy = this._noEastWestPolicy;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._activeEastWestServicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEastWestServicePolicies = this._activeEastWestServicePolicies?.internalValue;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteTgwSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eastWestServicePolicyAllowAll = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noEastWestPolicy = undefined;
      this._noForwardProxy = undefined;
      this._noNetworkPolicy = undefined;
      this._activeEastWestServicePolicies.internalValue = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eastWestServicePolicyAllowAll = value.eastWestServicePolicyAllowAll;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noEastWestPolicy = value.noEastWestPolicy;
      this._noForwardProxy = value.noForwardProxy;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._activeEastWestServicePolicies.internalValue = value.activeEastWestServicePolicies;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
    }
  }

  // east_west_service_policy_allow_all - computed: false, optional: true, required: false
  private _eastWestServicePolicyAllowAll?: boolean | cdktf.IResolvable; 
  public get eastWestServicePolicyAllowAll() {
    return this.getBooleanAttribute('east_west_service_policy_allow_all');
  }
  public set eastWestServicePolicyAllowAll(value: boolean | cdktf.IResolvable) {
    this._eastWestServicePolicyAllowAll = value;
  }
  public resetEastWestServicePolicyAllowAll() {
    this._eastWestServicePolicyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestServicePolicyAllowAllInput() {
    return this._eastWestServicePolicyAllowAll;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_east_west_policy - computed: false, optional: true, required: false
  private _noEastWestPolicy?: boolean | cdktf.IResolvable; 
  public get noEastWestPolicy() {
    return this.getBooleanAttribute('no_east_west_policy');
  }
  public set noEastWestPolicy(value: boolean | cdktf.IResolvable) {
    this._noEastWestPolicy = value;
  }
  public resetNoEastWestPolicy() {
    this._noEastWestPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noEastWestPolicyInput() {
    return this._noEastWestPolicy;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // active_east_west_service_policies - computed: false, optional: true, required: false
  private _activeEastWestServicePolicies = new AwsTgwSiteTgwSecurityActiveEastWestServicePoliciesOutputReference(this, "active_east_west_service_policies");
  public get activeEastWestServicePolicies() {
    return this._activeEastWestServicePolicies;
  }
  public putActiveEastWestServicePolicies(value: AwsTgwSiteTgwSecurityActiveEastWestServicePolicies) {
    this._activeEastWestServicePolicies.internalValue = value;
  }
  public resetActiveEastWestServicePolicies() {
    this._activeEastWestServicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEastWestServicePoliciesInput() {
    return this._activeEastWestServicePolicies.internalValue;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new AwsTgwSiteTgwSecurityActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AwsTgwSiteTgwSecurityActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new AwsTgwSiteTgwSecurityActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AwsTgwSiteTgwSecurityActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new AwsTgwSiteTgwSecurityActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AwsTgwSiteTgwSecurityActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }
}
export interface AwsTgwSiteVnConfigAllowedVipPortCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#port_ranges AwsTgwSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsTgwSiteVnConfigAllowedVipPortCustomPortsToTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortCustomPortsOutputReference | AwsTgwSiteVnConfigAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsTgwSiteVnConfigAllowedVipPortCustomPortsToHclTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortCustomPortsOutputReference | AwsTgwSiteVnConfigAllowedVipPortCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigAllowedVipPortCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigAllowedVipPortCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigAllowedVipPortCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsTgwSiteVnConfigAllowedVipPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disable_allowed_vip_port AwsTgwSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_http_https_port AwsTgwSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_http_port AwsTgwSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_https_port AwsTgwSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_ports AwsTgwSite#custom_ports}
  */
  readonly customPorts?: AwsTgwSiteVnConfigAllowedVipPortCustomPorts;
}

export function awsTgwSiteVnConfigAllowedVipPortToTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortOutputReference | AwsTgwSiteVnConfigAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsTgwSiteVnConfigAllowedVipPortCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsTgwSiteVnConfigAllowedVipPortToHclTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortOutputReference | AwsTgwSiteVnConfigAllowedVipPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsTgwSiteVnConfigAllowedVipPortCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigAllowedVipPortCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigAllowedVipPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigAllowedVipPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigAllowedVipPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsTgwSiteVnConfigAllowedVipPortCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsTgwSiteVnConfigAllowedVipPortCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#port_ranges AwsTgwSite#port_ranges}
  */
  readonly portRanges: string;
}

export function awsTgwSiteVnConfigAllowedVipPortSliCustomPortsToTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortSliCustomPortsOutputReference | AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function awsTgwSiteVnConfigAllowedVipPortSliCustomPortsToHclTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortSliCustomPortsOutputReference | AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigAllowedVipPortSliCustomPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
    }
  }

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface AwsTgwSiteVnConfigAllowedVipPortSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#disable_allowed_vip_port AwsTgwSite#disable_allowed_vip_port}
  */
  readonly disableAllowedVipPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_http_https_port AwsTgwSite#use_http_https_port}
  */
  readonly useHttpHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_http_port AwsTgwSite#use_http_port}
  */
  readonly useHttpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#use_https_port AwsTgwSite#use_https_port}
  */
  readonly useHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * custom_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_ports AwsTgwSite#custom_ports}
  */
  readonly customPorts?: AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts;
}

export function awsTgwSiteVnConfigAllowedVipPortSliToTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortSliOutputReference | AwsTgwSiteVnConfigAllowedVipPortSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_allowed_vip_port: cdktf.booleanToTerraform(struct!.disableAllowedVipPort),
    use_http_https_port: cdktf.booleanToTerraform(struct!.useHttpHttpsPort),
    use_http_port: cdktf.booleanToTerraform(struct!.useHttpPort),
    use_https_port: cdktf.booleanToTerraform(struct!.useHttpsPort),
    custom_ports: awsTgwSiteVnConfigAllowedVipPortSliCustomPortsToTerraform(struct!.customPorts),
  }
}


export function awsTgwSiteVnConfigAllowedVipPortSliToHclTerraform(struct?: AwsTgwSiteVnConfigAllowedVipPortSliOutputReference | AwsTgwSiteVnConfigAllowedVipPortSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_allowed_vip_port: {
      value: cdktf.booleanToHclTerraform(struct!.disableAllowedVipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_http_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ports: {
      value: awsTgwSiteVnConfigAllowedVipPortSliCustomPortsToHclTerraform(struct!.customPorts),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigAllowedVipPortSliCustomPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigAllowedVipPortSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigAllowedVipPortSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAllowedVipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAllowedVipPort = this._disableAllowedVipPort;
    }
    if (this._useHttpHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpHttpsPort = this._useHttpHttpsPort;
    }
    if (this._useHttpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpPort = this._useHttpPort;
    }
    if (this._useHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpsPort = this._useHttpsPort;
    }
    if (this._customPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPorts = this._customPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigAllowedVipPortSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAllowedVipPort = undefined;
      this._useHttpHttpsPort = undefined;
      this._useHttpPort = undefined;
      this._useHttpsPort = undefined;
      this._customPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAllowedVipPort = value.disableAllowedVipPort;
      this._useHttpHttpsPort = value.useHttpHttpsPort;
      this._useHttpPort = value.useHttpPort;
      this._useHttpsPort = value.useHttpsPort;
      this._customPorts.internalValue = value.customPorts;
    }
  }

  // disable_allowed_vip_port - computed: false, optional: true, required: false
  private _disableAllowedVipPort?: boolean | cdktf.IResolvable; 
  public get disableAllowedVipPort() {
    return this.getBooleanAttribute('disable_allowed_vip_port');
  }
  public set disableAllowedVipPort(value: boolean | cdktf.IResolvable) {
    this._disableAllowedVipPort = value;
  }
  public resetDisableAllowedVipPort() {
    this._disableAllowedVipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAllowedVipPortInput() {
    return this._disableAllowedVipPort;
  }

  // use_http_https_port - computed: false, optional: true, required: false
  private _useHttpHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpHttpsPort() {
    return this.getBooleanAttribute('use_http_https_port');
  }
  public set useHttpHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpHttpsPort = value;
  }
  public resetUseHttpHttpsPort() {
    this._useHttpHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpHttpsPortInput() {
    return this._useHttpHttpsPort;
  }

  // use_http_port - computed: false, optional: true, required: false
  private _useHttpPort?: boolean | cdktf.IResolvable; 
  public get useHttpPort() {
    return this.getBooleanAttribute('use_http_port');
  }
  public set useHttpPort(value: boolean | cdktf.IResolvable) {
    this._useHttpPort = value;
  }
  public resetUseHttpPort() {
    this._useHttpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpPortInput() {
    return this._useHttpPort;
  }

  // use_https_port - computed: false, optional: true, required: false
  private _useHttpsPort?: boolean | cdktf.IResolvable; 
  public get useHttpsPort() {
    return this.getBooleanAttribute('use_https_port');
  }
  public set useHttpsPort(value: boolean | cdktf.IResolvable) {
    this._useHttpsPort = value;
  }
  public resetUseHttpsPort() {
    this._useHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsPortInput() {
    return this._useHttpsPort;
  }

  // custom_ports - computed: false, optional: true, required: false
  private _customPorts = new AwsTgwSiteVnConfigAllowedVipPortSliCustomPortsOutputReference(this, "custom_ports");
  public get customPorts() {
    return this._customPorts;
  }
  public putCustomPorts(value: AwsTgwSiteVnConfigAllowedVipPortSliCustomPorts) {
    this._customPorts.internalValue = value;
  }
  public resetCustomPorts() {
    this._customPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortsInput() {
    return this._customPorts.internalValue;
  }
}
export interface AwsTgwSiteVnConfigDcClusterGroupInsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigDcClusterGroupInsideVnToTerraform(struct?: AwsTgwSiteVnConfigDcClusterGroupInsideVnOutputReference | AwsTgwSiteVnConfigDcClusterGroupInsideVn): any {
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


export function awsTgwSiteVnConfigDcClusterGroupInsideVnToHclTerraform(struct?: AwsTgwSiteVnConfigDcClusterGroupInsideVnOutputReference | AwsTgwSiteVnConfigDcClusterGroupInsideVn): any {
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

export class AwsTgwSiteVnConfigDcClusterGroupInsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigDcClusterGroupInsideVn | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigDcClusterGroupInsideVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface AwsTgwSiteVnConfigDcClusterGroupOutsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigDcClusterGroupOutsideVnToTerraform(struct?: AwsTgwSiteVnConfigDcClusterGroupOutsideVnOutputReference | AwsTgwSiteVnConfigDcClusterGroupOutsideVn): any {
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


export function awsTgwSiteVnConfigDcClusterGroupOutsideVnToHclTerraform(struct?: AwsTgwSiteVnConfigDcClusterGroupOutsideVnOutputReference | AwsTgwSiteVnConfigDcClusterGroupOutsideVn): any {
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

export class AwsTgwSiteVnConfigDcClusterGroupOutsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigDcClusterGroupOutsideVn | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigDcClusterGroupOutsideVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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
export interface AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#global_vn AwsTgwSite#global_vn}
  */
  readonly globalVn: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#global_vn AwsTgwSite#global_vn}
  */
  readonly globalVn: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections {
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#sli_to_global_dr AwsTgwSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#slo_to_global_dr AwsTgwSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_to_global_dr: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sli_to_global_dr: {
      value: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sliToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliToGlobalDr = this._sliToGlobalDr?.internalValue;
    }
    if (this._sloToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloToGlobalDr = this._sloToGlobalDr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sliToGlobalDr.internalValue = undefined;
      this._sloToGlobalDr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
    this._sliToGlobalDr.internalValue = value;
  }
  public resetSliToGlobalDr() {
    this._sliToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliToGlobalDrInput() {
    return this._sliToGlobalDr.internalValue;
  }

  // slo_to_global_dr - computed: false, optional: true, required: false
  private _sloToGlobalDr = new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
    this._sloToGlobalDr.internalValue = value;
  }
  public resetSloToGlobalDr() {
    this._sloToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloToGlobalDrInput() {
    return this._sloToGlobalDr.internalValue;
  }
}

export class AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#global_network_connections AwsTgwSite#global_network_connections}
  */
  readonly globalNetworkConnections: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function awsTgwSiteVnConfigGlobalNetworkListStructToTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListStructOutputReference | AwsTgwSiteVnConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function awsTgwSiteVnConfigGlobalNetworkListStructToHclTerraform(struct?: AwsTgwSiteVnConfigGlobalNetworkListStructOutputReference | AwsTgwSiteVnConfigGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigGlobalNetworkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalNetworkConnections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalNetworkConnections.internalValue = value.globalNetworkConnections;
    }
  }

  // global_network_connections - computed: false, optional: false, required: true
  private _globalNetworkConnections = new AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AwsTgwSiteVnConfigGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#addr AwsTgwSite#addr}
  */
  readonly addr?: string;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#addr AwsTgwSite#addr}
  */
  readonly addr?: string;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#type AwsTgwSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#interface AwsTgwSite#interface}
  */
  readonly interface?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#nexthop_address AwsTgwSite#nexthop_address}
  */
  readonly nexthopAddress?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
    interface: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#plen AwsTgwSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#prefix AwsTgwSite#prefix}
  */
  readonly prefix?: string;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
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
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#plen AwsTgwSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#prefix AwsTgwSite#prefix}
  */
  readonly prefix?: string;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
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
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#attrs AwsTgwSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#labels AwsTgwSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#nexthop AwsTgwSite#nexthop}
  */
  readonly nexthop?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#subnets AwsTgwSite#subnets}
  */
  readonly subnets: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#simple_static_route AwsTgwSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_static_route AwsTgwSite#custom_static_route}
  */
  readonly customStaticRoute?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructOutputReference {
    return new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigInsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#static_route_list AwsTgwSite#static_route_list}
  */
  readonly staticRouteList: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function awsTgwSiteVnConfigInsideStaticRoutesToTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesOutputReference | AwsTgwSiteVnConfigInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function awsTgwSiteVnConfigInsideStaticRoutesToHclTerraform(struct?: AwsTgwSiteVnConfigInsideStaticRoutesOutputReference | AwsTgwSiteVnConfigInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigInsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigInsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigInsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AwsTgwSiteVnConfigInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#name AwsTgwSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#namespace AwsTgwSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#tenant AwsTgwSite#tenant}
  */
  readonly tenant?: string;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#addr AwsTgwSite#addr}
  */
  readonly addr?: string;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#addr AwsTgwSite#addr}
  */
  readonly addr?: string;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#type AwsTgwSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#interface AwsTgwSite#interface}
  */
  readonly interface?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#nexthop_address AwsTgwSite#nexthop_address}
  */
  readonly nexthopAddress?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
    interface: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#plen AwsTgwSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#prefix AwsTgwSite#prefix}
  */
  readonly prefix?: string;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
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
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#plen AwsTgwSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#prefix AwsTgwSite#prefix}
  */
  readonly prefix?: string;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
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
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv4 AwsTgwSite#ipv4}
  */
  readonly ipv4?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#ipv6 AwsTgwSite#ipv6}
  */
  readonly ipv6?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#attrs AwsTgwSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#labels AwsTgwSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#nexthop AwsTgwSite#nexthop}
  */
  readonly nexthop?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#subnets AwsTgwSite#subnets}
  */
  readonly subnets: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#simple_static_route AwsTgwSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#custom_static_route AwsTgwSite#custom_static_route}
  */
  readonly customStaticRoute?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVnConfigOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#static_route_list AwsTgwSite#static_route_list}
  */
  readonly staticRouteList: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function awsTgwSiteVnConfigOutsideStaticRoutesToTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function awsTgwSiteVnConfigOutsideStaticRoutesToHclTerraform(struct?: AwsTgwSiteVnConfigOutsideStaticRoutesOutputReference | AwsTgwSiteVnConfigOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(awsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfigOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfigOutsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AwsTgwSiteVnConfigOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AwsTgwSiteVnConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_dc_cluster_group AwsTgwSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_global_network AwsTgwSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_inside_static_routes AwsTgwSite#no_inside_static_routes}
  */
  readonly noInsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#no_outside_static_routes AwsTgwSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#sm_connection_public_ip AwsTgwSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#sm_connection_pvt_ip AwsTgwSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * allowed_vip_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#allowed_vip_port AwsTgwSite#allowed_vip_port}
  */
  readonly allowedVipPort?: AwsTgwSiteVnConfigAllowedVipPort;
  /**
  * allowed_vip_port_sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#allowed_vip_port_sli AwsTgwSite#allowed_vip_port_sli}
  */
  readonly allowedVipPortSli?: AwsTgwSiteVnConfigAllowedVipPortSli;
  /**
  * dc_cluster_group_inside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#dc_cluster_group_inside_vn AwsTgwSite#dc_cluster_group_inside_vn}
  */
  readonly dcClusterGroupInsideVn?: AwsTgwSiteVnConfigDcClusterGroupInsideVn;
  /**
  * dc_cluster_group_outside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#dc_cluster_group_outside_vn AwsTgwSite#dc_cluster_group_outside_vn}
  */
  readonly dcClusterGroupOutsideVn?: AwsTgwSiteVnConfigDcClusterGroupOutsideVn;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#global_network_list AwsTgwSite#global_network_list}
  */
  readonly globalNetworkList?: AwsTgwSiteVnConfigGlobalNetworkListStruct;
  /**
  * inside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#inside_static_routes AwsTgwSite#inside_static_routes}
  */
  readonly insideStaticRoutes?: AwsTgwSiteVnConfigInsideStaticRoutes;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#outside_static_routes AwsTgwSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AwsTgwSiteVnConfigOutsideStaticRoutes;
}

export function awsTgwSiteVnConfigToTerraform(struct?: AwsTgwSiteVnConfigOutputReference | AwsTgwSiteVnConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_inside_static_routes: cdktf.booleanToTerraform(struct!.noInsideStaticRoutes),
    no_outside_static_routes: cdktf.booleanToTerraform(struct!.noOutsideStaticRoutes),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    allowed_vip_port: awsTgwSiteVnConfigAllowedVipPortToTerraform(struct!.allowedVipPort),
    allowed_vip_port_sli: awsTgwSiteVnConfigAllowedVipPortSliToTerraform(struct!.allowedVipPortSli),
    dc_cluster_group_inside_vn: awsTgwSiteVnConfigDcClusterGroupInsideVnToTerraform(struct!.dcClusterGroupInsideVn),
    dc_cluster_group_outside_vn: awsTgwSiteVnConfigDcClusterGroupOutsideVnToTerraform(struct!.dcClusterGroupOutsideVn),
    global_network_list: awsTgwSiteVnConfigGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    inside_static_routes: awsTgwSiteVnConfigInsideStaticRoutesToTerraform(struct!.insideStaticRoutes),
    outside_static_routes: awsTgwSiteVnConfigOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
  }
}


export function awsTgwSiteVnConfigToHclTerraform(struct?: AwsTgwSiteVnConfigOutputReference | AwsTgwSiteVnConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_inside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noInsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_outside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noOutsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_vip_port: {
      value: awsTgwSiteVnConfigAllowedVipPortToHclTerraform(struct!.allowedVipPort),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigAllowedVipPortList",
    },
    allowed_vip_port_sli: {
      value: awsTgwSiteVnConfigAllowedVipPortSliToHclTerraform(struct!.allowedVipPortSli),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigAllowedVipPortSliList",
    },
    dc_cluster_group_inside_vn: {
      value: awsTgwSiteVnConfigDcClusterGroupInsideVnToHclTerraform(struct!.dcClusterGroupInsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigDcClusterGroupInsideVnList",
    },
    dc_cluster_group_outside_vn: {
      value: awsTgwSiteVnConfigDcClusterGroupOutsideVnToHclTerraform(struct!.dcClusterGroupOutsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigDcClusterGroupOutsideVnList",
    },
    global_network_list: {
      value: awsTgwSiteVnConfigGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigGlobalNetworkListStructList",
    },
    inside_static_routes: {
      value: awsTgwSiteVnConfigInsideStaticRoutesToHclTerraform(struct!.insideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigInsideStaticRoutesList",
    },
    outside_static_routes: {
      value: awsTgwSiteVnConfigOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVnConfigOutsideStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVnConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVnConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noInsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInsideStaticRoutes = this._noInsideStaticRoutes;
    }
    if (this._noOutsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOutsideStaticRoutes = this._noOutsideStaticRoutes;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._allowedVipPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVipPort = this._allowedVipPort?.internalValue;
    }
    if (this._allowedVipPortSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVipPortSli = this._allowedVipPortSli?.internalValue;
    }
    if (this._dcClusterGroupInsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupInsideVn = this._dcClusterGroupInsideVn?.internalValue;
    }
    if (this._dcClusterGroupOutsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupOutsideVn = this._dcClusterGroupOutsideVn?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._insideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStaticRoutes = this._insideStaticRoutes?.internalValue;
    }
    if (this._outsideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStaticRoutes = this._outsideStaticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVnConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noDcClusterGroup = undefined;
      this._noGlobalNetwork = undefined;
      this._noInsideStaticRoutes = undefined;
      this._noOutsideStaticRoutes = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._allowedVipPort.internalValue = undefined;
      this._allowedVipPortSli.internalValue = undefined;
      this._dcClusterGroupInsideVn.internalValue = undefined;
      this._dcClusterGroupOutsideVn.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._insideStaticRoutes.internalValue = undefined;
      this._outsideStaticRoutes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noInsideStaticRoutes = value.noInsideStaticRoutes;
      this._noOutsideStaticRoutes = value.noOutsideStaticRoutes;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._allowedVipPort.internalValue = value.allowedVipPort;
      this._allowedVipPortSli.internalValue = value.allowedVipPortSli;
      this._dcClusterGroupInsideVn.internalValue = value.dcClusterGroupInsideVn;
      this._dcClusterGroupOutsideVn.internalValue = value.dcClusterGroupOutsideVn;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._insideStaticRoutes.internalValue = value.insideStaticRoutes;
      this._outsideStaticRoutes.internalValue = value.outsideStaticRoutes;
    }
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_inside_static_routes - computed: false, optional: true, required: false
  private _noInsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noInsideStaticRoutes() {
    return this.getBooleanAttribute('no_inside_static_routes');
  }
  public set noInsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noInsideStaticRoutes = value;
  }
  public resetNoInsideStaticRoutes() {
    this._noInsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInsideStaticRoutesInput() {
    return this._noInsideStaticRoutes;
  }

  // no_outside_static_routes - computed: false, optional: true, required: false
  private _noOutsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noOutsideStaticRoutes() {
    return this.getBooleanAttribute('no_outside_static_routes');
  }
  public set noOutsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noOutsideStaticRoutes = value;
  }
  public resetNoOutsideStaticRoutes() {
    this._noOutsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOutsideStaticRoutesInput() {
    return this._noOutsideStaticRoutes;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // allowed_vip_port - computed: false, optional: true, required: false
  private _allowedVipPort = new AwsTgwSiteVnConfigAllowedVipPortOutputReference(this, "allowed_vip_port");
  public get allowedVipPort() {
    return this._allowedVipPort;
  }
  public putAllowedVipPort(value: AwsTgwSiteVnConfigAllowedVipPort) {
    this._allowedVipPort.internalValue = value;
  }
  public resetAllowedVipPort() {
    this._allowedVipPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVipPortInput() {
    return this._allowedVipPort.internalValue;
  }

  // allowed_vip_port_sli - computed: false, optional: true, required: false
  private _allowedVipPortSli = new AwsTgwSiteVnConfigAllowedVipPortSliOutputReference(this, "allowed_vip_port_sli");
  public get allowedVipPortSli() {
    return this._allowedVipPortSli;
  }
  public putAllowedVipPortSli(value: AwsTgwSiteVnConfigAllowedVipPortSli) {
    this._allowedVipPortSli.internalValue = value;
  }
  public resetAllowedVipPortSli() {
    this._allowedVipPortSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVipPortSliInput() {
    return this._allowedVipPortSli.internalValue;
  }

  // dc_cluster_group_inside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupInsideVn = new AwsTgwSiteVnConfigDcClusterGroupInsideVnOutputReference(this, "dc_cluster_group_inside_vn");
  public get dcClusterGroupInsideVn() {
    return this._dcClusterGroupInsideVn;
  }
  public putDcClusterGroupInsideVn(value: AwsTgwSiteVnConfigDcClusterGroupInsideVn) {
    this._dcClusterGroupInsideVn.internalValue = value;
  }
  public resetDcClusterGroupInsideVn() {
    this._dcClusterGroupInsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInsideVnInput() {
    return this._dcClusterGroupInsideVn.internalValue;
  }

  // dc_cluster_group_outside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupOutsideVn = new AwsTgwSiteVnConfigDcClusterGroupOutsideVnOutputReference(this, "dc_cluster_group_outside_vn");
  public get dcClusterGroupOutsideVn() {
    return this._dcClusterGroupOutsideVn;
  }
  public putDcClusterGroupOutsideVn(value: AwsTgwSiteVnConfigDcClusterGroupOutsideVn) {
    this._dcClusterGroupOutsideVn.internalValue = value;
  }
  public resetDcClusterGroupOutsideVn() {
    this._dcClusterGroupOutsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupOutsideVnInput() {
    return this._dcClusterGroupOutsideVn.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new AwsTgwSiteVnConfigGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AwsTgwSiteVnConfigGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // inside_static_routes - computed: false, optional: true, required: false
  private _insideStaticRoutes = new AwsTgwSiteVnConfigInsideStaticRoutesOutputReference(this, "inside_static_routes");
  public get insideStaticRoutes() {
    return this._insideStaticRoutes;
  }
  public putInsideStaticRoutes(value: AwsTgwSiteVnConfigInsideStaticRoutes) {
    this._insideStaticRoutes.internalValue = value;
  }
  public resetInsideStaticRoutes() {
    this._insideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStaticRoutesInput() {
    return this._insideStaticRoutes.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new AwsTgwSiteVnConfigOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AwsTgwSiteVnConfigOutsideStaticRoutes) {
    this._outsideStaticRoutes.internalValue = value;
  }
  public resetOutsideStaticRoutes() {
    this._outsideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStaticRoutesInput() {
    return this._outsideStaticRoutes.internalValue;
  }
}
export interface AwsTgwSiteVpcAttachmentsVpcListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#labels AwsTgwSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vpc_id AwsTgwSite#vpc_id}
  */
  readonly vpcId?: string;
}

export function awsTgwSiteVpcAttachmentsVpcListStructToTerraform(struct?: AwsTgwSiteVpcAttachmentsVpcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function awsTgwSiteVpcAttachmentsVpcListStructToHclTerraform(struct?: AwsTgwSiteVpcAttachmentsVpcListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVpcAttachmentsVpcListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsTgwSiteVpcAttachmentsVpcListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVpcAttachmentsVpcListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._vpcId = value.vpcId;
    }
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class AwsTgwSiteVpcAttachmentsVpcListStructList extends cdktf.ComplexList {
  public internalValue? : AwsTgwSiteVpcAttachmentsVpcListStruct[] | cdktf.IResolvable

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
  public get(index: number): AwsTgwSiteVpcAttachmentsVpcListStructOutputReference {
    return new AwsTgwSiteVpcAttachmentsVpcListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsTgwSiteVpcAttachments {
  /**
  * vpc_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#vpc_list AwsTgwSite#vpc_list}
  */
  readonly vpcList?: AwsTgwSiteVpcAttachmentsVpcListStruct[] | cdktf.IResolvable;
}

export function awsTgwSiteVpcAttachmentsToTerraform(struct?: AwsTgwSiteVpcAttachmentsOutputReference | AwsTgwSiteVpcAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_list: cdktf.listMapper(awsTgwSiteVpcAttachmentsVpcListStructToTerraform, true)(struct!.vpcList),
  }
}


export function awsTgwSiteVpcAttachmentsToHclTerraform(struct?: AwsTgwSiteVpcAttachmentsOutputReference | AwsTgwSiteVpcAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_list: {
      value: cdktf.listMapperHcl(awsTgwSiteVpcAttachmentsVpcListStructToHclTerraform, true)(struct!.vpcList),
      isBlock: true,
      type: "list",
      storageClassType: "AwsTgwSiteVpcAttachmentsVpcListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsTgwSiteVpcAttachmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsTgwSiteVpcAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcList = this._vpcList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsTgwSiteVpcAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcList.internalValue = value.vpcList;
    }
  }

  // vpc_list - computed: false, optional: true, required: false
  private _vpcList = new AwsTgwSiteVpcAttachmentsVpcListStructList(this, "vpc_list", false);
  public get vpcList() {
    return this._vpcList;
  }
  public putVpcList(value: AwsTgwSiteVpcAttachmentsVpcListStruct[] | cdktf.IResolvable) {
    this._vpcList.internalValue = value;
  }
  public resetVpcList() {
    this._vpcList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcListInput() {
    return this._vpcList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site volterra_aws_tgw_site}
*/
export class AwsTgwSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_aws_tgw_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsTgwSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsTgwSite to import
  * @param importFromId The id of the existing AwsTgwSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsTgwSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_aws_tgw_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/aws_tgw_site volterra_aws_tgw_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsTgwSiteConfig
  */
  public constructor(scope: Construct, id: string, config: AwsTgwSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_aws_tgw_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._blockAllServices = config.blockAllServices;
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._description = config.description;
    this._directConnectDisabled = config.directConnectDisabled;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._name = config.name;
    this._namespace = config.namespace;
    this._tags = config.tags;
    this._awsParameters.internalValue = config.awsParameters;
    this._blockedServices.internalValue = config.blockedServices;
    this._coordinates.internalValue = config.coordinates;
    this._customDns.internalValue = config.customDns;
    this._directConnectEnabled.internalValue = config.directConnectEnabled;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._performanceEnhancementMode.internalValue = config.performanceEnhancementMode;
    this._privateConnectivity.internalValue = config.privateConnectivity;
    this._sw.internalValue = config.sw;
    this._tgwSecurity.internalValue = config.tgwSecurity;
    this._vnConfig.internalValue = config.vnConfig;
    this._vpcAttachments.internalValue = config.vpcAttachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // block_all_services - computed: false, optional: true, required: false
  private _blockAllServices?: boolean | cdktf.IResolvable; 
  public get blockAllServices() {
    return this.getBooleanAttribute('block_all_services');
  }
  public set blockAllServices(value: boolean | cdktf.IResolvable) {
    this._blockAllServices = value;
  }
  public resetBlockAllServices() {
    this._blockAllServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllServicesInput() {
    return this._blockAllServices;
  }

  // default_blocked_services - computed: false, optional: true, required: false
  private _defaultBlockedServices?: boolean | cdktf.IResolvable; 
  public get defaultBlockedServices() {
    return this.getBooleanAttribute('default_blocked_services');
  }
  public set defaultBlockedServices(value: boolean | cdktf.IResolvable) {
    this._defaultBlockedServices = value;
  }
  public resetDefaultBlockedServices() {
    this._defaultBlockedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBlockedServicesInput() {
    return this._defaultBlockedServices;
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

  // direct_connect_disabled - computed: false, optional: true, required: false
  private _directConnectDisabled?: boolean | cdktf.IResolvable; 
  public get directConnectDisabled() {
    return this.getBooleanAttribute('direct_connect_disabled');
  }
  public set directConnectDisabled(value: boolean | cdktf.IResolvable) {
    this._directConnectDisabled = value;
  }
  public resetDirectConnectDisabled() {
    this._directConnectDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectDisabledInput() {
    return this._directConnectDisabled;
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

  // logs_streaming_disabled - computed: false, optional: true, required: false
  private _logsStreamingDisabled?: boolean | cdktf.IResolvable; 
  public get logsStreamingDisabled() {
    return this.getBooleanAttribute('logs_streaming_disabled');
  }
  public set logsStreamingDisabled(value: boolean | cdktf.IResolvable) {
    this._logsStreamingDisabled = value;
  }
  public resetLogsStreamingDisabled() {
    this._logsStreamingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsStreamingDisabledInput() {
    return this._logsStreamingDisabled;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // aws_parameters - computed: false, optional: false, required: true
  private _awsParameters = new AwsTgwSiteAwsParametersOutputReference(this, "aws_parameters");
  public get awsParameters() {
    return this._awsParameters;
  }
  public putAwsParameters(value: AwsTgwSiteAwsParameters) {
    this._awsParameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsParametersInput() {
    return this._awsParameters.internalValue;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new AwsTgwSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: AwsTgwSiteBlockedServices) {
    this._blockedServices.internalValue = value;
  }
  public resetBlockedServices() {
    this._blockedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new AwsTgwSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: AwsTgwSiteCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new AwsTgwSiteCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: AwsTgwSiteCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // direct_connect_enabled - computed: false, optional: true, required: false
  private _directConnectEnabled = new AwsTgwSiteDirectConnectEnabledOutputReference(this, "direct_connect_enabled");
  public get directConnectEnabled() {
    return this._directConnectEnabled;
  }
  public putDirectConnectEnabled(value: AwsTgwSiteDirectConnectEnabled) {
    this._directConnectEnabled.internalValue = value;
  }
  public resetDirectConnectEnabled() {
    this._directConnectEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectEnabledInput() {
    return this._directConnectEnabled.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new AwsTgwSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: AwsTgwSiteKubernetesUpgradeDrain) {
    this._kubernetesUpgradeDrain.internalValue = value;
  }
  public resetKubernetesUpgradeDrain() {
    this._kubernetesUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUpgradeDrainInput() {
    return this._kubernetesUpgradeDrain.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new AwsTgwSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: AwsTgwSiteLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // offline_survivability_mode - computed: false, optional: true, required: false
  private _offlineSurvivabilityMode = new AwsTgwSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: AwsTgwSiteOfflineSurvivabilityMode) {
    this._offlineSurvivabilityMode.internalValue = value;
  }
  public resetOfflineSurvivabilityMode() {
    this._offlineSurvivabilityMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineSurvivabilityModeInput() {
    return this._offlineSurvivabilityMode.internalValue;
  }

  // os - computed: false, optional: true, required: false
  private _os = new AwsTgwSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: AwsTgwSiteOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AwsTgwSitePerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AwsTgwSitePerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new AwsTgwSitePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: AwsTgwSitePrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new AwsTgwSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: AwsTgwSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // tgw_security - computed: false, optional: true, required: false
  private _tgwSecurity = new AwsTgwSiteTgwSecurityOutputReference(this, "tgw_security");
  public get tgwSecurity() {
    return this._tgwSecurity;
  }
  public putTgwSecurity(value: AwsTgwSiteTgwSecurity) {
    this._tgwSecurity.internalValue = value;
  }
  public resetTgwSecurity() {
    this._tgwSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwSecurityInput() {
    return this._tgwSecurity.internalValue;
  }

  // vn_config - computed: false, optional: true, required: false
  private _vnConfig = new AwsTgwSiteVnConfigOutputReference(this, "vn_config");
  public get vnConfig() {
    return this._vnConfig;
  }
  public putVnConfig(value: AwsTgwSiteVnConfig) {
    this._vnConfig.internalValue = value;
  }
  public resetVnConfig() {
    this._vnConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnConfigInput() {
    return this._vnConfig.internalValue;
  }

  // vpc_attachments - computed: false, optional: true, required: false
  private _vpcAttachments = new AwsTgwSiteVpcAttachmentsOutputReference(this, "vpc_attachments");
  public get vpcAttachments() {
    return this._vpcAttachments;
  }
  public putVpcAttachments(value: AwsTgwSiteVpcAttachments) {
    this._vpcAttachments.internalValue = value;
  }
  public resetVpcAttachments() {
    this._vpcAttachments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAttachmentsInput() {
    return this._vpcAttachments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      block_all_services: cdktf.booleanToTerraform(this._blockAllServices),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      description: cdktf.stringToTerraform(this._description),
      direct_connect_disabled: cdktf.booleanToTerraform(this._directConnectDisabled),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      aws_parameters: awsTgwSiteAwsParametersToTerraform(this._awsParameters.internalValue),
      blocked_services: awsTgwSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      coordinates: awsTgwSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_dns: awsTgwSiteCustomDnsToTerraform(this._customDns.internalValue),
      direct_connect_enabled: awsTgwSiteDirectConnectEnabledToTerraform(this._directConnectEnabled.internalValue),
      kubernetes_upgrade_drain: awsTgwSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: awsTgwSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      offline_survivability_mode: awsTgwSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: awsTgwSiteOsToTerraform(this._os.internalValue),
      performance_enhancement_mode: awsTgwSitePerformanceEnhancementModeToTerraform(this._performanceEnhancementMode.internalValue),
      private_connectivity: awsTgwSitePrivateConnectivityToTerraform(this._privateConnectivity.internalValue),
      sw: awsTgwSiteSwToTerraform(this._sw.internalValue),
      tgw_security: awsTgwSiteTgwSecurityToTerraform(this._tgwSecurity.internalValue),
      vn_config: awsTgwSiteVnConfigToTerraform(this._vnConfig.internalValue),
      vpc_attachments: awsTgwSiteVpcAttachmentsToTerraform(this._vpcAttachments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      block_all_services: {
        value: cdktf.booleanToHclTerraform(this._blockAllServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_blocked_services: {
        value: cdktf.booleanToHclTerraform(this._defaultBlockedServices),
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
      direct_connect_disabled: {
        value: cdktf.booleanToHclTerraform(this._directConnectDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      logs_streaming_disabled: {
        value: cdktf.booleanToHclTerraform(this._logsStreamingDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      aws_parameters: {
        value: awsTgwSiteAwsParametersToHclTerraform(this._awsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteAwsParametersList",
      },
      blocked_services: {
        value: awsTgwSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteBlockedServicesList",
      },
      coordinates: {
        value: awsTgwSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteCoordinatesList",
      },
      custom_dns: {
        value: awsTgwSiteCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteCustomDnsList",
      },
      direct_connect_enabled: {
        value: awsTgwSiteDirectConnectEnabledToHclTerraform(this._directConnectEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteDirectConnectEnabledList",
      },
      kubernetes_upgrade_drain: {
        value: awsTgwSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: awsTgwSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteLogReceiverList",
      },
      offline_survivability_mode: {
        value: awsTgwSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: awsTgwSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteOsList",
      },
      performance_enhancement_mode: {
        value: awsTgwSitePerformanceEnhancementModeToHclTerraform(this._performanceEnhancementMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSitePerformanceEnhancementModeList",
      },
      private_connectivity: {
        value: awsTgwSitePrivateConnectivityToHclTerraform(this._privateConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSitePrivateConnectivityList",
      },
      sw: {
        value: awsTgwSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteSwList",
      },
      tgw_security: {
        value: awsTgwSiteTgwSecurityToHclTerraform(this._tgwSecurity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteTgwSecurityList",
      },
      vn_config: {
        value: awsTgwSiteVnConfigToHclTerraform(this._vnConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteVnConfigList",
      },
      vpc_attachments: {
        value: awsTgwSiteVpcAttachmentsToHclTerraform(this._vpcAttachments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsTgwSiteVpcAttachmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
