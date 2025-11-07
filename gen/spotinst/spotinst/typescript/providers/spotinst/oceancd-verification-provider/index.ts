// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceancdVerificationProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}
  */
  readonly clusterIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}
  */
  readonly name: string;
  /**
  * cloud_watch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}
  */
  readonly cloudWatch?: OceancdVerificationProviderCloudWatch;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}
  */
  readonly datadog?: OceancdVerificationProviderDatadog;
  /**
  * jenkins block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}
  */
  readonly jenkins?: OceancdVerificationProviderJenkins;
  /**
  * new_relic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}
  */
  readonly newRelic?: OceancdVerificationProviderNewRelic;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}
  */
  readonly prometheus?: OceancdVerificationProviderPrometheus;
}
export interface OceancdVerificationProviderCloudWatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}
  */
  readonly iamArn: string;
}

export function oceancdVerificationProviderCloudWatchToTerraform(struct?: OceancdVerificationProviderCloudWatchOutputReference | OceancdVerificationProviderCloudWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_arn: cdktf.stringToTerraform(struct!.iamArn),
  }
}


export function oceancdVerificationProviderCloudWatchToHclTerraform(struct?: OceancdVerificationProviderCloudWatchOutputReference | OceancdVerificationProviderCloudWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_arn: {
      value: cdktf.stringToHclTerraform(struct!.iamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationProviderCloudWatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationProviderCloudWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamArn = this._iamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationProviderCloudWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamArn = value.iamArn;
    }
  }

  // iam_arn - computed: false, optional: false, required: true
  private _iamArn?: string; 
  public get iamArn() {
    return this.getStringAttribute('iam_arn');
  }
  public set iamArn(value: string) {
    this._iamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamArnInput() {
    return this._iamArn;
  }
}
export interface OceancdVerificationProviderDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}
  */
  readonly appKey: string;
}

export function oceancdVerificationProviderDatadogToTerraform(struct?: OceancdVerificationProviderDatadogOutputReference | OceancdVerificationProviderDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    app_key: cdktf.stringToTerraform(struct!.appKey),
  }
}


export function oceancdVerificationProviderDatadogToHclTerraform(struct?: OceancdVerificationProviderDatadogOutputReference | OceancdVerificationProviderDatadog): any {
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
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_key: {
      value: cdktf.stringToHclTerraform(struct!.appKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationProviderDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationProviderDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._appKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.appKey = this._appKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationProviderDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._apiKey = undefined;
      this._appKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._apiKey = value.apiKey;
      this._appKey = value.appKey;
    }
  }

  // address - computed: false, optional: false, required: true
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

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // app_key - computed: false, optional: false, required: true
  private _appKey?: string; 
  public get appKey() {
    return this.getStringAttribute('app_key');
  }
  public set appKey(value: string) {
    this._appKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }
}
export interface OceancdVerificationProviderJenkins {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}
  */
  readonly baseUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}
  */
  readonly username: string;
}

export function oceancdVerificationProviderJenkinsToTerraform(struct?: OceancdVerificationProviderJenkinsOutputReference | OceancdVerificationProviderJenkins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function oceancdVerificationProviderJenkinsToHclTerraform(struct?: OceancdVerificationProviderJenkinsOutputReference | OceancdVerificationProviderJenkins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationProviderJenkinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationProviderJenkins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationProviderJenkins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._baseUrl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._baseUrl = value.baseUrl;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface OceancdVerificationProviderNewRelic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}
  */
  readonly baseUrlNerdGraph?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}
  */
  readonly baseUrlRest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}
  */
  readonly personalApiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}
  */
  readonly region?: string;
}

export function oceancdVerificationProviderNewRelicToTerraform(struct?: OceancdVerificationProviderNewRelicOutputReference | OceancdVerificationProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    base_url_nerd_graph: cdktf.stringToTerraform(struct!.baseUrlNerdGraph),
    base_url_rest: cdktf.stringToTerraform(struct!.baseUrlRest),
    personal_api_key: cdktf.stringToTerraform(struct!.personalApiKey),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function oceancdVerificationProviderNewRelicToHclTerraform(struct?: OceancdVerificationProviderNewRelicOutputReference | OceancdVerificationProviderNewRelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url_nerd_graph: {
      value: cdktf.stringToHclTerraform(struct!.baseUrlNerdGraph),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_url_rest: {
      value: cdktf.stringToHclTerraform(struct!.baseUrlRest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    personal_api_key: {
      value: cdktf.stringToHclTerraform(struct!.personalApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationProviderNewRelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationProviderNewRelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._baseUrlNerdGraph !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlNerdGraph = this._baseUrlNerdGraph;
    }
    if (this._baseUrlRest !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrlRest = this._baseUrlRest;
    }
    if (this._personalApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalApiKey = this._personalApiKey;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationProviderNewRelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._baseUrlNerdGraph = undefined;
      this._baseUrlRest = undefined;
      this._personalApiKey = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._baseUrlNerdGraph = value.baseUrlNerdGraph;
      this._baseUrlRest = value.baseUrlRest;
      this._personalApiKey = value.personalApiKey;
      this._region = value.region;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // base_url_nerd_graph - computed: false, optional: true, required: false
  private _baseUrlNerdGraph?: string; 
  public get baseUrlNerdGraph() {
    return this.getStringAttribute('base_url_nerd_graph');
  }
  public set baseUrlNerdGraph(value: string) {
    this._baseUrlNerdGraph = value;
  }
  public resetBaseUrlNerdGraph() {
    this._baseUrlNerdGraph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlNerdGraphInput() {
    return this._baseUrlNerdGraph;
  }

  // base_url_rest - computed: false, optional: true, required: false
  private _baseUrlRest?: string; 
  public get baseUrlRest() {
    return this.getStringAttribute('base_url_rest');
  }
  public set baseUrlRest(value: string) {
    this._baseUrlRest = value;
  }
  public resetBaseUrlRest() {
    this._baseUrlRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlRestInput() {
    return this._baseUrlRest;
  }

  // personal_api_key - computed: false, optional: false, required: true
  private _personalApiKey?: string; 
  public get personalApiKey() {
    return this.getStringAttribute('personal_api_key');
  }
  public set personalApiKey(value: string) {
    this._personalApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalApiKeyInput() {
    return this._personalApiKey;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface OceancdVerificationProviderPrometheus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}
  */
  readonly address: string;
}

export function oceancdVerificationProviderPrometheusToTerraform(struct?: OceancdVerificationProviderPrometheusOutputReference | OceancdVerificationProviderPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function oceancdVerificationProviderPrometheusToHclTerraform(struct?: OceancdVerificationProviderPrometheusOutputReference | OceancdVerificationProviderPrometheus): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceancdVerificationProviderPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceancdVerificationProviderPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceancdVerificationProviderPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: false, required: true
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider}
*/
export class OceancdVerificationProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_oceancd_verification_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceancdVerificationProvider to import
  * @param importFromId The id of the existing OceancdVerificationProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceancdVerificationProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_oceancd_verification_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceancdVerificationProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OceancdVerificationProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_oceancd_verification_provider',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIds = config.clusterIds;
    this._id = config.id;
    this._name = config.name;
    this._cloudWatch.internalValue = config.cloudWatch;
    this._datadog.internalValue = config.datadog;
    this._jenkins.internalValue = config.jenkins;
    this._newRelic.internalValue = config.newRelic;
    this._prometheus.internalValue = config.prometheus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ids - computed: false, optional: false, required: true
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return this.getListAttribute('cluster_ids');
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
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

  // cloud_watch - computed: false, optional: true, required: false
  private _cloudWatch = new OceancdVerificationProviderCloudWatchOutputReference(this, "cloud_watch");
  public get cloudWatch() {
    return this._cloudWatch;
  }
  public putCloudWatch(value: OceancdVerificationProviderCloudWatch) {
    this._cloudWatch.internalValue = value;
  }
  public resetCloudWatch() {
    this._cloudWatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchInput() {
    return this._cloudWatch.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new OceancdVerificationProviderDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: OceancdVerificationProviderDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // jenkins - computed: false, optional: true, required: false
  private _jenkins = new OceancdVerificationProviderJenkinsOutputReference(this, "jenkins");
  public get jenkins() {
    return this._jenkins;
  }
  public putJenkins(value: OceancdVerificationProviderJenkins) {
    this._jenkins.internalValue = value;
  }
  public resetJenkins() {
    this._jenkins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jenkinsInput() {
    return this._jenkins.internalValue;
  }

  // new_relic - computed: false, optional: true, required: false
  private _newRelic = new OceancdVerificationProviderNewRelicOutputReference(this, "new_relic");
  public get newRelic() {
    return this._newRelic;
  }
  public putNewRelic(value: OceancdVerificationProviderNewRelic) {
    this._newRelic.internalValue = value;
  }
  public resetNewRelic() {
    this._newRelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicInput() {
    return this._newRelic.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new OceancdVerificationProviderPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: OceancdVerificationProviderPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cloud_watch: oceancdVerificationProviderCloudWatchToTerraform(this._cloudWatch.internalValue),
      datadog: oceancdVerificationProviderDatadogToTerraform(this._datadog.internalValue),
      jenkins: oceancdVerificationProviderJenkinsToTerraform(this._jenkins.internalValue),
      new_relic: oceancdVerificationProviderNewRelicToTerraform(this._newRelic.internalValue),
      prometheus: oceancdVerificationProviderPrometheusToTerraform(this._prometheus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      cloud_watch: {
        value: oceancdVerificationProviderCloudWatchToHclTerraform(this._cloudWatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdVerificationProviderCloudWatchList",
      },
      datadog: {
        value: oceancdVerificationProviderDatadogToHclTerraform(this._datadog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdVerificationProviderDatadogList",
      },
      jenkins: {
        value: oceancdVerificationProviderJenkinsToHclTerraform(this._jenkins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdVerificationProviderJenkinsList",
      },
      new_relic: {
        value: oceancdVerificationProviderNewRelicToHclTerraform(this._newRelic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdVerificationProviderNewRelicList",
      },
      prometheus: {
        value: oceancdVerificationProviderPrometheusToHclTerraform(this._prometheus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceancdVerificationProviderPrometheusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
