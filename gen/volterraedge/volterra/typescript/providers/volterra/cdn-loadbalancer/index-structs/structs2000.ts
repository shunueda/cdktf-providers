import * as cdktf from 'cdktf';
import { CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMiss,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRules,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecification,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOutputReference,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMiss,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissToTerraform,
cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissToHclTerraform,
CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissOutputReference } from './structs1600'
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
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
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#user CdnLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#password CdnLoadbalancer#password}
  */
  readonly password?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#simple_login CdnLoadbalancer#simple_login}
  */
  readonly simpleLogin?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_api_crawler CdnLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_crawler_config CdnLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_code_repo CdnLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_repos CdnLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integration CdnLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#selected_repos CdnLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integrations CdnLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_ref CdnLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#purge_duration_for_inactive_discovered_apis CdnLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
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
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPattern.internalValue = value.keyPattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: false, required: true
  private _keyPattern = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_request_sections CdnLoadbalancer#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_response_sections CdnLoadbalancer#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_sections CdnLoadbalancer#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_target CdnLoadbalancer#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_target CdnLoadbalancer#api_endpoint_target}
  */
  readonly apiEndpointTarget?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_value_pattern CdnLoadbalancer#key_value_pattern}
  */
  readonly keyValuePattern?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_request_sections: cdktf.booleanToTerraform(struct!.allRequestSections),
    all_response_sections: cdktf.booleanToTerraform(struct!.allResponseSections),
    all_sections: cdktf.booleanToTerraform(struct!.allSections),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_target: cdktf.booleanToTerraform(struct!.anyTarget),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_target: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_request_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allRequestSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_response_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allResponseSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_target: {
      value: cdktf.booleanToHclTerraform(struct!.anyTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_target: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequestSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequestSections = this._allRequestSections;
    }
    if (this._allResponseSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allResponseSections = this._allResponseSections;
    }
    if (this._allSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSections = this._allSections;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyTarget = this._anyTarget;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointTarget = this._apiEndpointTarget?.internalValue;
    }
    if (this._customSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections?.internalValue;
    }
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._keyValuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePattern = this._keyValuePattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequestSections = undefined;
      this._allResponseSections = undefined;
      this._allSections = undefined;
      this._anyDomain = undefined;
      this._anyTarget = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointTarget.internalValue = undefined;
      this._customSections.internalValue = undefined;
      this._keyPattern.internalValue = undefined;
      this._keyValuePattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequestSections = value.allRequestSections;
      this._allResponseSections = value.allResponseSections;
      this._allSections = value.allSections;
      this._anyDomain = value.anyDomain;
      this._anyTarget = value.anyTarget;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointTarget.internalValue = value.apiEndpointTarget;
      this._customSections.internalValue = value.customSections;
      this._keyPattern.internalValue = value.keyPattern;
      this._keyValuePattern.internalValue = value.keyValuePattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // all_request_sections - computed: false, optional: true, required: false
  private _allRequestSections?: boolean | cdktf.IResolvable; 
  public get allRequestSections() {
    return this.getBooleanAttribute('all_request_sections');
  }
  public set allRequestSections(value: boolean | cdktf.IResolvable) {
    this._allRequestSections = value;
  }
  public resetAllRequestSections() {
    this._allRequestSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestSectionsInput() {
    return this._allRequestSections;
  }

  // all_response_sections - computed: false, optional: true, required: false
  private _allResponseSections?: boolean | cdktf.IResolvable; 
  public get allResponseSections() {
    return this.getBooleanAttribute('all_response_sections');
  }
  public set allResponseSections(value: boolean | cdktf.IResolvable) {
    this._allResponseSections = value;
  }
  public resetAllResponseSections() {
    this._allResponseSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allResponseSectionsInput() {
    return this._allResponseSections;
  }

  // all_sections - computed: false, optional: true, required: false
  private _allSections?: boolean | cdktf.IResolvable; 
  public get allSections() {
    return this.getBooleanAttribute('all_sections');
  }
  public set allSections(value: boolean | cdktf.IResolvable) {
    this._allSections = value;
  }
  public resetAllSections() {
    this._allSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSectionsInput() {
    return this._allSections;
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_target - computed: false, optional: true, required: false
  private _anyTarget?: boolean | cdktf.IResolvable; 
  public get anyTarget() {
    return this.getBooleanAttribute('any_target');
  }
  public set anyTarget(value: boolean | cdktf.IResolvable) {
    this._anyTarget = value;
  }
  public resetAnyTarget() {
    this._anyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTargetInput() {
    return this._anyTarget;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_target - computed: false, optional: true, required: false
  private _apiEndpointTarget = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
    this._apiEndpointTarget.internalValue = value;
  }
  public resetApiEndpointTarget() {
    this._apiEndpointTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointTargetInput() {
    return this._apiEndpointTarget.internalValue;
  }

  // custom_sections - computed: false, optional: true, required: false
  private _customSections = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
    this._customSections.internalValue = value;
  }
  public resetCustomSections() {
    this._customSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections.internalValue;
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  public resetKeyPattern() {
    this._keyPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // key_value_pattern - computed: false, optional: true, required: false
  private _keyValuePattern = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
    this._keyValuePattern.internalValue = value;
  }
  public resetKeyValuePattern() {
    this._keyValuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePatternInput() {
    return this._keyValuePattern.internalValue;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
    this._valuePattern.internalValue = value;
  }
  public resetValuePattern() {
    this._valuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#type CdnLoadbalancer#type}
  */
  readonly type: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
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
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_detection_config CdnLoadbalancer#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_type CdnLoadbalancer#sensitive_data_type}
  */
  readonly sensitiveDataType: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sensitiveDataDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionConfig = this._sensitiveDataDetectionConfig?.internalValue;
    }
    if (this._sensitiveDataType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataType = this._sensitiveDataType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._sensitiveDataDetectionConfig.internalValue = undefined;
      this._sensitiveDataType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._sensitiveDataDetectionConfig.internalValue = value.sensitiveDataDetectionConfig;
      this._sensitiveDataType.internalValue = value.sensitiveDataType;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sensitive_data_detection_rules CdnLoadbalancer#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disabled_built_in_rules CdnLoadbalancer#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSensitiveDataDetectionRules = this._customSensitiveDataDetectionRules?.internalValue;
    }
    if (this._disabledBuiltInRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledBuiltInRules = this._disabledBuiltInRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSensitiveDataDetectionRules.internalValue = undefined;
      this._disabledBuiltInRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSensitiveDataDetectionRules.internalValue = value.customSensitiveDataDetectionRules;
      this._disabledBuiltInRules.internalValue = value.disabledBuiltInRules;
    }
  }

  // custom_sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _customSensitiveDataDetectionRules = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
    this._customSensitiveDataDetectionRules.internalValue = value;
  }
  public resetCustomSensitiveDataDetectionRules() {
    this._customSensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSensitiveDataDetectionRulesInput() {
    return this._customSensitiveDataDetectionRules.internalValue;
  }

  // disabled_built_in_rules - computed: false, optional: true, required: false
  private _disabledBuiltInRules = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
    this._disabledBuiltInRules.internalValue = value;
  }
  public resetDisabledBuiltInRules() {
    this._disabledBuiltInRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledBuiltInRulesInput() {
    return this._disabledBuiltInRules.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_api_auth_discovery CdnLoadbalancer#default_api_auth_discovery}
  */
  readonly defaultApiAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_learn_from_redirect_traffic CdnLoadbalancer#disable_learn_from_redirect_traffic}
  */
  readonly disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enable_learn_from_redirect_traffic CdnLoadbalancer#enable_learn_from_redirect_traffic}
  */
  readonly enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * api_crawler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_crawler CdnLoadbalancer#api_crawler}
  */
  readonly apiCrawler?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler;
  /**
  * api_discovery_from_code_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_from_code_scan CdnLoadbalancer#api_discovery_from_code_scan}
  */
  readonly apiDiscoveryFromCodeScan?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan;
  /**
  * custom_api_auth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_api_auth_discovery CdnLoadbalancer#custom_api_auth_discovery}
  */
  readonly customApiAuthDiscovery?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#discovered_api_settings CdnLoadbalancer#discovered_api_settings}
  */
  readonly discoveredApiSettings?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_detection_rules CdnLoadbalancer#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_api_auth_discovery: cdktf.booleanToTerraform(struct!.defaultApiAuthDiscovery),
    disable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.disableLearnFromRedirectTraffic),
    enable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.enableLearnFromRedirectTraffic),
    api_crawler: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerToTerraform(struct!.apiCrawler),
    api_discovery_from_code_scan: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanToTerraform(struct!.apiDiscoveryFromCodeScan),
    custom_api_auth_discovery: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryToTerraform(struct!.customApiAuthDiscovery),
    discovered_api_settings: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_api_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.defaultApiAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerToHclTerraform(struct!.apiCrawler),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerList",
    },
    api_discovery_from_code_scan: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanToHclTerraform(struct!.apiDiscoveryFromCodeScan),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanList",
    },
    custom_api_auth_discovery: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryToHclTerraform(struct!.customApiAuthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryList",
    },
    discovered_api_settings: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultApiAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApiAuthDiscovery = this._defaultApiAuthDiscovery;
    }
    if (this._disableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLearnFromRedirectTraffic = this._disableLearnFromRedirectTraffic;
    }
    if (this._enableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromRedirectTraffic = this._enableLearnFromRedirectTraffic;
    }
    if (this._apiCrawler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawler = this._apiCrawler?.internalValue;
    }
    if (this._apiDiscoveryFromCodeScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryFromCodeScan = this._apiDiscoveryFromCodeScan?.internalValue;
    }
    if (this._customApiAuthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApiAuthDiscovery = this._customApiAuthDiscovery?.internalValue;
    }
    if (this._discoveredApiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredApiSettings = this._discoveredApiSettings?.internalValue;
    }
    if (this._sensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionRules = this._sensitiveDataDetectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultApiAuthDiscovery = undefined;
      this._disableLearnFromRedirectTraffic = undefined;
      this._enableLearnFromRedirectTraffic = undefined;
      this._apiCrawler.internalValue = undefined;
      this._apiDiscoveryFromCodeScan.internalValue = undefined;
      this._customApiAuthDiscovery.internalValue = undefined;
      this._discoveredApiSettings.internalValue = undefined;
      this._sensitiveDataDetectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultApiAuthDiscovery = value.defaultApiAuthDiscovery;
      this._disableLearnFromRedirectTraffic = value.disableLearnFromRedirectTraffic;
      this._enableLearnFromRedirectTraffic = value.enableLearnFromRedirectTraffic;
      this._apiCrawler.internalValue = value.apiCrawler;
      this._apiDiscoveryFromCodeScan.internalValue = value.apiDiscoveryFromCodeScan;
      this._customApiAuthDiscovery.internalValue = value.customApiAuthDiscovery;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
      this._sensitiveDataDetectionRules.internalValue = value.sensitiveDataDetectionRules;
    }
  }

  // default_api_auth_discovery - computed: false, optional: true, required: false
  private _defaultApiAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get defaultApiAuthDiscovery() {
    return this.getBooleanAttribute('default_api_auth_discovery');
  }
  public set defaultApiAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._defaultApiAuthDiscovery = value;
  }
  public resetDefaultApiAuthDiscovery() {
    this._defaultApiAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiAuthDiscoveryInput() {
    return this._defaultApiAuthDiscovery;
  }

  // disable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get disableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('disable_learn_from_redirect_traffic');
  }
  public set disableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._disableLearnFromRedirectTraffic = value;
  }
  public resetDisableLearnFromRedirectTraffic() {
    this._disableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLearnFromRedirectTrafficInput() {
    return this._disableLearnFromRedirectTraffic;
  }

  // enable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get enableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('enable_learn_from_redirect_traffic');
  }
  public set enableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._enableLearnFromRedirectTraffic = value;
  }
  public resetEnableLearnFromRedirectTraffic() {
    this._enableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromRedirectTrafficInput() {
    return this._enableLearnFromRedirectTraffic;
  }

  // api_crawler - computed: false, optional: true, required: false
  private _apiCrawler = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawlerOutputReference(this, "api_crawler");
  public get apiCrawler() {
    return this._apiCrawler;
  }
  public putApiCrawler(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiCrawler) {
    this._apiCrawler.internalValue = value;
  }
  public resetApiCrawler() {
    this._apiCrawler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerInput() {
    return this._apiCrawler.internalValue;
  }

  // api_discovery_from_code_scan - computed: false, optional: true, required: false
  private _apiDiscoveryFromCodeScan = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScanOutputReference(this, "api_discovery_from_code_scan");
  public get apiDiscoveryFromCodeScan() {
    return this._apiDiscoveryFromCodeScan;
  }
  public putApiDiscoveryFromCodeScan(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryApiDiscoveryFromCodeScan) {
    this._apiDiscoveryFromCodeScan.internalValue = value;
  }
  public resetApiDiscoveryFromCodeScan() {
    this._apiDiscoveryFromCodeScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryFromCodeScanInput() {
    return this._apiDiscoveryFromCodeScan.internalValue;
  }

  // custom_api_auth_discovery - computed: false, optional: true, required: false
  private _customApiAuthDiscovery = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscoveryOutputReference(this, "custom_api_auth_discovery");
  public get customApiAuthDiscovery() {
    return this._customApiAuthDiscovery;
  }
  public putCustomApiAuthDiscovery(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryCustomApiAuthDiscovery) {
    this._customApiAuthDiscovery.internalValue = value;
  }
  public resetCustomApiAuthDiscovery() {
    this._customApiAuthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApiAuthDiscoveryInput() {
    return this._customApiAuthDiscovery.internalValue;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryDiscoveredApiSettings) {
    this._discoveredApiSettings.internalValue = value;
  }
  public resetDiscoveredApiSettings() {
    this._discoveredApiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredApiSettingsInput() {
    return this._discoveredApiSettings.internalValue;
  }

  // sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _sensitiveDataDetectionRules = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoverySensitiveDataDetectionRules) {
    this._sensitiveDataDetectionRules.internalValue = value;
  }
  public resetSensitiveDataDetectionRules() {
    this._sensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionRulesInput() {
    return this._sensitiveDataDetectionRules.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#report CdnLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    report: cdktf.booleanToTerraform(struct!.report),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block = undefined;
      this._report = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block = value.block;
      this._report = value.report;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cleartext CdnLoadbalancer#cleartext}
  */
  readonly cleartext?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.stringToTerraform(struct!.cleartext),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.stringToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleartext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleartext = value.cleartext;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: string; 
  public get cleartext() {
    return this.getStringAttribute('cleartext');
  }
  public set cleartext(value: string) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#claim_names CdnLoadbalancer#claim_names}
  */
  readonly claimNames?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claimNames),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claimNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimNames = this._claimNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimNames = value.claimNames;
    }
  }

  // claim_names - computed: false, optional: true, required: false
  private _claimNames?: string[]; 
  public get claimNames() {
    return this.getListAttribute('claim_names');
  }
  public set claimNames(value: string[]) {
    this._claimNames = value;
  }
  public resetClaimNames() {
    this._claimNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNamesInput() {
    return this._claimNames;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#audiences CdnLoadbalancer#audiences}
  */
  readonly audiences: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
    }
  }

  // audiences - computed: false, optional: false, required: true
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#audience_disable CdnLoadbalancer#audience_disable}
  */
  readonly audienceDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#issuer CdnLoadbalancer#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#issuer_disable CdnLoadbalancer#issuer_disable}
  */
  readonly issuerDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validate_period_disable CdnLoadbalancer#validate_period_disable}
  */
  readonly validatePeriodDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#validate_period_enable CdnLoadbalancer#validate_period_enable}
  */
  readonly validatePeriodEnable?: boolean | cdktf.IResolvable;
  /**
  * audience block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#audience CdnLoadbalancer#audience}
  */
  readonly audience?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience_disable: cdktf.booleanToTerraform(struct!.audienceDisable),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_disable: cdktf.booleanToTerraform(struct!.issuerDisable),
    validate_period_disable: cdktf.booleanToTerraform(struct!.validatePeriodDisable),
    validate_period_enable: cdktf.booleanToTerraform(struct!.validatePeriodEnable),
    audience: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceToTerraform(struct!.audience),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience_disable: {
      value: cdktf.booleanToHclTerraform(struct!.audienceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_disable: {
      value: cdktf.booleanToHclTerraform(struct!.issuerDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_disable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_enable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audience: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceToHclTerraform(struct!.audience),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audienceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceDisable = this._audienceDisable;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerDisable = this._issuerDisable;
    }
    if (this._validatePeriodDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodDisable = this._validatePeriodDisable;
    }
    if (this._validatePeriodEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodEnable = this._validatePeriodEnable;
    }
    if (this._audience?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audienceDisable = undefined;
      this._issuer = undefined;
      this._issuerDisable = undefined;
      this._validatePeriodDisable = undefined;
      this._validatePeriodEnable = undefined;
      this._audience.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audienceDisable = value.audienceDisable;
      this._issuer = value.issuer;
      this._issuerDisable = value.issuerDisable;
      this._validatePeriodDisable = value.validatePeriodDisable;
      this._validatePeriodEnable = value.validatePeriodEnable;
      this._audience.internalValue = value.audience;
    }
  }

  // audience_disable - computed: false, optional: true, required: false
  private _audienceDisable?: boolean | cdktf.IResolvable; 
  public get audienceDisable() {
    return this.getBooleanAttribute('audience_disable');
  }
  public set audienceDisable(value: boolean | cdktf.IResolvable) {
    this._audienceDisable = value;
  }
  public resetAudienceDisable() {
    this._audienceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceDisableInput() {
    return this._audienceDisable;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_disable - computed: false, optional: true, required: false
  private _issuerDisable?: boolean | cdktf.IResolvable; 
  public get issuerDisable() {
    return this.getBooleanAttribute('issuer_disable');
  }
  public set issuerDisable(value: boolean | cdktf.IResolvable) {
    this._issuerDisable = value;
  }
  public resetIssuerDisable() {
    this._issuerDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDisableInput() {
    return this._issuerDisable;
  }

  // validate_period_disable - computed: false, optional: true, required: false
  private _validatePeriodDisable?: boolean | cdktf.IResolvable; 
  public get validatePeriodDisable() {
    return this.getBooleanAttribute('validate_period_disable');
  }
  public set validatePeriodDisable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodDisable = value;
  }
  public resetValidatePeriodDisable() {
    this._validatePeriodDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodDisableInput() {
    return this._validatePeriodDisable;
  }

  // validate_period_enable - computed: false, optional: true, required: false
  private _validatePeriodEnable?: boolean | cdktf.IResolvable; 
  public get validatePeriodEnable() {
    return this.getBooleanAttribute('validate_period_enable');
  }
  public set validatePeriodEnable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodEnable = value;
  }
  public resetValidatePeriodEnable() {
    this._validatePeriodEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodEnableInput() {
    return this._validatePeriodEnable;
  }

  // audience - computed: false, optional: true, required: false
  private _audience = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudienceOutputReference(this, "audience");
  public get audience() {
    return this._audience;
  }
  public putAudience(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsAudience) {
    this._audience.internalValue = value;
  }
  public resetAudience() {
    this._audience.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.basePaths),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.basePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePaths = value.basePaths;
    }
  }

  // base_paths - computed: false, optional: false, required: true
  private _basePaths?: string[]; 
  public get basePaths() {
    return this.getListAttribute('base_paths');
  }
  public set basePaths(value: string[]) {
    this._basePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_endpoint CdnLoadbalancer#all_endpoint}
  */
  readonly allEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups;
  /**
  * base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_endpoint: cdktf.booleanToTerraform(struct!.allEndpoint),
    api_groups: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsToTerraform(struct!.apiGroups),
    base_paths: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsToTerraform(struct!.basePaths),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.allEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_groups: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsList",
    },
    base_paths: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsToHclTerraform(struct!.basePaths),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEndpoint = this._allEndpoint;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._basePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEndpoint = undefined;
      this._apiGroups.internalValue = undefined;
      this._basePaths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEndpoint = value.allEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._basePaths.internalValue = value.basePaths;
    }
  }

  // all_endpoint - computed: false, optional: true, required: false
  private _allEndpoint?: boolean | cdktf.IResolvable; 
  public get allEndpoint() {
    return this.getBooleanAttribute('all_endpoint');
  }
  public set allEndpoint(value: boolean | cdktf.IResolvable) {
    this._allEndpoint = value;
  }
  public resetAllEndpoint() {
    this._allEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEndpointInput() {
    return this._allEndpoint;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // base_paths - computed: false, optional: true, required: false
  private _basePaths = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePathsOutputReference(this, "base_paths");
  public get basePaths() {
    return this._basePaths;
  }
  public putBasePaths(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetBasePaths) {
    this._basePaths.internalValue = value;
  }
  public resetBasePaths() {
    this._basePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bearer_token CdnLoadbalancer#bearer_token}
  */
  readonly bearerToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie CdnLoadbalancer#cookie}
  */
  readonly cookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#header CdnLoadbalancer#header}
  */
  readonly header?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_param CdnLoadbalancer#query_param}
  */
  readonly queryParam?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.booleanToTerraform(struct!.bearerToken),
    cookie: cdktf.stringToTerraform(struct!.cookie),
    header: cdktf.stringToTerraform(struct!.header),
    query_param: cdktf.stringToTerraform(struct!.queryParam),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.booleanToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_param: {
      value: cdktf.stringToHclTerraform(struct!.queryParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._queryParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParam = this._queryParam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
      this._cookie = undefined;
      this._header = undefined;
      this._queryParam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
      this._cookie = value.cookie;
      this._header = value.header;
      this._queryParam = value.queryParam;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: boolean | cdktf.IResolvable; 
  public get bearerToken() {
    return this.getBooleanAttribute('bearer_token');
  }
  public set bearerToken(value: boolean | cdktf.IResolvable) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam?: string; 
  public get queryParam() {
    return this.getStringAttribute('query_param');
  }
  public set queryParam(value: string) {
    this._queryParam = value;
  }
  public resetQueryParam() {
    this._queryParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#auth_server_uri CdnLoadbalancer#auth_server_uri}
  */
  readonly authServerUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwks CdnLoadbalancer#jwks}
  */
  readonly jwks?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action CdnLoadbalancer#action}
  */
  readonly action: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction;
  /**
  * jwks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwks_config CdnLoadbalancer#jwks_config}
  */
  readonly jwksConfig?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig;
  /**
  * mandatory_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#mandatory_claims CdnLoadbalancer#mandatory_claims}
  */
  readonly mandatoryClaims?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims;
  /**
  * reserved_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#reserved_claims CdnLoadbalancer#reserved_claims}
  */
  readonly reservedClaims?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#target CdnLoadbalancer#target}
  */
  readonly target: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget;
  /**
  * token_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#token_location CdnLoadbalancer#token_location}
  */
  readonly tokenLocation: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_server_uri: cdktf.stringToTerraform(struct!.authServerUri),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    action: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionToTerraform(struct!.action),
    jwks_config: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigToTerraform(struct!.jwksConfig),
    mandatory_claims: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsToTerraform(struct!.mandatoryClaims),
    reserved_claims: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsToTerraform(struct!.reservedClaims),
    target: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetToTerraform(struct!.target),
    token_location: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationToTerraform(struct!.tokenLocation),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_server_uri: {
      value: cdktf.stringToHclTerraform(struct!.authServerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionList",
    },
    jwks_config: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigToHclTerraform(struct!.jwksConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigList",
    },
    mandatory_claims: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsToHclTerraform(struct!.mandatoryClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsList",
    },
    reserved_claims: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsToHclTerraform(struct!.reservedClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsList",
    },
    target: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetList",
    },
    token_location: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationToHclTerraform(struct!.tokenLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authServerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authServerUri = this._authServerUri;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._jwksConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksConfig = this._jwksConfig?.internalValue;
    }
    if (this._mandatoryClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryClaims = this._mandatoryClaims?.internalValue;
    }
    if (this._reservedClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedClaims = this._reservedClaims?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._tokenLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLocation = this._tokenLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authServerUri = undefined;
      this._jwks = undefined;
      this._action.internalValue = undefined;
      this._jwksConfig.internalValue = undefined;
      this._mandatoryClaims.internalValue = undefined;
      this._reservedClaims.internalValue = undefined;
      this._target.internalValue = undefined;
      this._tokenLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authServerUri = value.authServerUri;
      this._jwks = value.jwks;
      this._action.internalValue = value.action;
      this._jwksConfig.internalValue = value.jwksConfig;
      this._mandatoryClaims.internalValue = value.mandatoryClaims;
      this._reservedClaims.internalValue = value.reservedClaims;
      this._target.internalValue = value.target;
      this._tokenLocation.internalValue = value.tokenLocation;
    }
  }

  // auth_server_uri - computed: false, optional: true, required: false
  private _authServerUri?: string; 
  public get authServerUri() {
    return this.getStringAttribute('auth_server_uri');
  }
  public set authServerUri(value: string) {
    this._authServerUri = value;
  }
  public resetAuthServerUri() {
    this._authServerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authServerUriInput() {
    return this._authServerUri;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // action - computed: false, optional: false, required: true
  private _action = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // jwks_config - computed: false, optional: true, required: false
  private _jwksConfig = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfigOutputReference(this, "jwks_config");
  public get jwksConfig() {
    return this._jwksConfig;
  }
  public putJwksConfig(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationJwksConfig) {
    this._jwksConfig.internalValue = value;
  }
  public resetJwksConfig() {
    this._jwksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksConfigInput() {
    return this._jwksConfig.internalValue;
  }

  // mandatory_claims - computed: false, optional: true, required: false
  private _mandatoryClaims = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaimsOutputReference(this, "mandatory_claims");
  public get mandatoryClaims() {
    return this._mandatoryClaims;
  }
  public putMandatoryClaims(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationMandatoryClaims) {
    this._mandatoryClaims.internalValue = value;
  }
  public resetMandatoryClaims() {
    this._mandatoryClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryClaimsInput() {
    return this._mandatoryClaims.internalValue;
  }

  // reserved_claims - computed: false, optional: true, required: false
  private _reservedClaims = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaimsOutputReference(this, "reserved_claims");
  public get reservedClaims() {
    return this._reservedClaims;
  }
  public putReservedClaims(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationReservedClaims) {
    this._reservedClaims.internalValue = value;
  }
  public resetReservedClaims() {
    this._reservedClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedClaimsInput() {
    return this._reservedClaims.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // token_location - computed: false, optional: false, required: true
  private _tokenLocation = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocationOutputReference(this, "token_location");
  public get tokenLocation() {
    return this._tokenLocation;
  }
  public putTokenLocation(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationTokenLocation) {
    this._tokenLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationInput() {
    return this._tokenLocation.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy {
  /**
  * sensitive_data_policy_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_policy_ref CdnLoadbalancer#sensitive_data_policy_ref}
  */
  readonly sensitiveDataPolicyRef: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sensitive_data_policy_ref: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefToTerraform(struct!.sensitiveDataPolicyRef),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sensitive_data_policy_ref: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefToHclTerraform(struct!.sensitiveDataPolicyRef),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sensitiveDataPolicyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataPolicyRef = this._sensitiveDataPolicyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sensitiveDataPolicyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sensitiveDataPolicyRef.internalValue = value.sensitiveDataPolicyRef;
    }
  }

  // sensitive_data_policy_ref - computed: false, optional: false, required: true
  private _sensitiveDataPolicyRef = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRefOutputReference(this, "sensitive_data_policy_ref");
  public get sensitiveDataPolicyRef() {
    return this._sensitiveDataPolicyRef;
  }
  public putSensitiveDataPolicyRef(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicySensitiveDataPolicyRef) {
    this._sensitiveDataPolicyRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataPolicyRefInput() {
    return this._sensitiveDataPolicyRef.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsApiProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_sensitive_data_policy CdnLoadbalancer#default_sensitive_data_policy}
  */
  readonly defaultSensitiveDataPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_api_definition CdnLoadbalancer#disable_api_definition}
  */
  readonly disableApiDefinition?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_api_discovery CdnLoadbalancer#disable_api_discovery}
  */
  readonly disableApiDiscovery?: boolean | cdktf.IResolvable;
  /**
  * api_discovery_on_cache_miss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_on_cache_miss CdnLoadbalancer#api_discovery_on_cache_miss}
  */
  readonly apiDiscoveryOnCacheMiss?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMiss;
  /**
  * api_protection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_protection_rules CdnLoadbalancer#api_protection_rules}
  */
  readonly apiProtectionRules?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRules;
  /**
  * api_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_specification CdnLoadbalancer#api_specification}
  */
  readonly apiSpecification?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecification;
  /**
  * api_specification_on_cache_miss block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_specification_on_cache_miss CdnLoadbalancer#api_specification_on_cache_miss}
  */
  readonly apiSpecificationOnCacheMiss?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMiss;
  /**
  * enable_api_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enable_api_discovery CdnLoadbalancer#enable_api_discovery}
  */
  readonly enableApiDiscovery?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery;
  /**
  * jwt_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_validation CdnLoadbalancer#jwt_validation}
  */
  readonly jwtValidation?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation;
  /**
  * sensitive_data_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_policy CdnLoadbalancer#sensitive_data_policy}
  */
  readonly sensitiveDataPolicy?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sensitive_data_policy: cdktf.booleanToTerraform(struct!.defaultSensitiveDataPolicy),
    disable_api_definition: cdktf.booleanToTerraform(struct!.disableApiDefinition),
    disable_api_discovery: cdktf.booleanToTerraform(struct!.disableApiDiscovery),
    api_discovery_on_cache_miss: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissToTerraform(struct!.apiDiscoveryOnCacheMiss),
    api_protection_rules: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesToTerraform(struct!.apiProtectionRules),
    api_specification: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationToTerraform(struct!.apiSpecification),
    api_specification_on_cache_miss: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissToTerraform(struct!.apiSpecificationOnCacheMiss),
    enable_api_discovery: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryToTerraform(struct!.enableApiDiscovery),
    jwt_validation: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationToTerraform(struct!.jwtValidation),
    sensitive_data_policy: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyToTerraform(struct!.sensitiveDataPolicy),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsApiProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sensitive_data_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSensitiveDataPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_api_definition: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_api_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_discovery_on_cache_miss: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissToHclTerraform(struct!.apiDiscoveryOnCacheMiss),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissList",
    },
    api_protection_rules: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesToHclTerraform(struct!.apiProtectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesList",
    },
    api_specification: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationToHclTerraform(struct!.apiSpecification),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationList",
    },
    api_specification_on_cache_miss: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissToHclTerraform(struct!.apiSpecificationOnCacheMiss),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissList",
    },
    enable_api_discovery: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryToHclTerraform(struct!.enableApiDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryList",
    },
    jwt_validation: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationToHclTerraform(struct!.jwtValidation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationList",
    },
    sensitive_data_policy: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyToHclTerraform(struct!.sensitiveDataPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsApiProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSensitiveDataPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSensitiveDataPolicy = this._defaultSensitiveDataPolicy;
    }
    if (this._disableApiDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiDefinition = this._disableApiDefinition;
    }
    if (this._disableApiDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiDiscovery = this._disableApiDiscovery;
    }
    if (this._apiDiscoveryOnCacheMiss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryOnCacheMiss = this._apiDiscoveryOnCacheMiss?.internalValue;
    }
    if (this._apiProtectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiProtectionRules = this._apiProtectionRules?.internalValue;
    }
    if (this._apiSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSpecification = this._apiSpecification?.internalValue;
    }
    if (this._apiSpecificationOnCacheMiss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSpecificationOnCacheMiss = this._apiSpecificationOnCacheMiss?.internalValue;
    }
    if (this._enableApiDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApiDiscovery = this._enableApiDiscovery?.internalValue;
    }
    if (this._jwtValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtValidation = this._jwtValidation?.internalValue;
    }
    if (this._sensitiveDataPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataPolicy = this._sensitiveDataPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSensitiveDataPolicy = undefined;
      this._disableApiDefinition = undefined;
      this._disableApiDiscovery = undefined;
      this._apiDiscoveryOnCacheMiss.internalValue = undefined;
      this._apiProtectionRules.internalValue = undefined;
      this._apiSpecification.internalValue = undefined;
      this._apiSpecificationOnCacheMiss.internalValue = undefined;
      this._enableApiDiscovery.internalValue = undefined;
      this._jwtValidation.internalValue = undefined;
      this._sensitiveDataPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSensitiveDataPolicy = value.defaultSensitiveDataPolicy;
      this._disableApiDefinition = value.disableApiDefinition;
      this._disableApiDiscovery = value.disableApiDiscovery;
      this._apiDiscoveryOnCacheMiss.internalValue = value.apiDiscoveryOnCacheMiss;
      this._apiProtectionRules.internalValue = value.apiProtectionRules;
      this._apiSpecification.internalValue = value.apiSpecification;
      this._apiSpecificationOnCacheMiss.internalValue = value.apiSpecificationOnCacheMiss;
      this._enableApiDiscovery.internalValue = value.enableApiDiscovery;
      this._jwtValidation.internalValue = value.jwtValidation;
      this._sensitiveDataPolicy.internalValue = value.sensitiveDataPolicy;
    }
  }

  // default_sensitive_data_policy - computed: false, optional: true, required: false
  private _defaultSensitiveDataPolicy?: boolean | cdktf.IResolvable; 
  public get defaultSensitiveDataPolicy() {
    return this.getBooleanAttribute('default_sensitive_data_policy');
  }
  public set defaultSensitiveDataPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultSensitiveDataPolicy = value;
  }
  public resetDefaultSensitiveDataPolicy() {
    this._defaultSensitiveDataPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSensitiveDataPolicyInput() {
    return this._defaultSensitiveDataPolicy;
  }

  // disable_api_definition - computed: false, optional: true, required: false
  private _disableApiDefinition?: boolean | cdktf.IResolvable; 
  public get disableApiDefinition() {
    return this.getBooleanAttribute('disable_api_definition');
  }
  public set disableApiDefinition(value: boolean | cdktf.IResolvable) {
    this._disableApiDefinition = value;
  }
  public resetDisableApiDefinition() {
    this._disableApiDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiDefinitionInput() {
    return this._disableApiDefinition;
  }

  // disable_api_discovery - computed: false, optional: true, required: false
  private _disableApiDiscovery?: boolean | cdktf.IResolvable; 
  public get disableApiDiscovery() {
    return this.getBooleanAttribute('disable_api_discovery');
  }
  public set disableApiDiscovery(value: boolean | cdktf.IResolvable) {
    this._disableApiDiscovery = value;
  }
  public resetDisableApiDiscovery() {
    this._disableApiDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiDiscoveryInput() {
    return this._disableApiDiscovery;
  }

  // api_discovery_on_cache_miss - computed: false, optional: true, required: false
  private _apiDiscoveryOnCacheMiss = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMissOutputReference(this, "api_discovery_on_cache_miss");
  public get apiDiscoveryOnCacheMiss() {
    return this._apiDiscoveryOnCacheMiss;
  }
  public putApiDiscoveryOnCacheMiss(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiDiscoveryOnCacheMiss) {
    this._apiDiscoveryOnCacheMiss.internalValue = value;
  }
  public resetApiDiscoveryOnCacheMiss() {
    this._apiDiscoveryOnCacheMiss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryOnCacheMissInput() {
    return this._apiDiscoveryOnCacheMiss.internalValue;
  }

  // api_protection_rules - computed: false, optional: true, required: false
  private _apiProtectionRules = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRulesOutputReference(this, "api_protection_rules");
  public get apiProtectionRules() {
    return this._apiProtectionRules;
  }
  public putApiProtectionRules(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiProtectionRules) {
    this._apiProtectionRules.internalValue = value;
  }
  public resetApiProtectionRules() {
    this._apiProtectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProtectionRulesInput() {
    return this._apiProtectionRules.internalValue;
  }

  // api_specification - computed: false, optional: true, required: false
  private _apiSpecification = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOutputReference(this, "api_specification");
  public get apiSpecification() {
    return this._apiSpecification;
  }
  public putApiSpecification(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecification) {
    this._apiSpecification.internalValue = value;
  }
  public resetApiSpecification() {
    this._apiSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecificationInput() {
    return this._apiSpecification.internalValue;
  }

  // api_specification_on_cache_miss - computed: false, optional: true, required: false
  private _apiSpecificationOnCacheMiss = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMissOutputReference(this, "api_specification_on_cache_miss");
  public get apiSpecificationOnCacheMiss() {
    return this._apiSpecificationOnCacheMiss;
  }
  public putApiSpecificationOnCacheMiss(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionApiSpecificationOnCacheMiss) {
    this._apiSpecificationOnCacheMiss.internalValue = value;
  }
  public resetApiSpecificationOnCacheMiss() {
    this._apiSpecificationOnCacheMiss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecificationOnCacheMissInput() {
    return this._apiSpecificationOnCacheMiss.internalValue;
  }

  // enable_api_discovery - computed: false, optional: true, required: false
  private _enableApiDiscovery = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscoveryOutputReference(this, "enable_api_discovery");
  public get enableApiDiscovery() {
    return this._enableApiDiscovery;
  }
  public putEnableApiDiscovery(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionEnableApiDiscovery) {
    this._enableApiDiscovery.internalValue = value;
  }
  public resetEnableApiDiscovery() {
    this._enableApiDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApiDiscoveryInput() {
    return this._enableApiDiscovery.internalValue;
  }

  // jwt_validation - computed: false, optional: true, required: false
  private _jwtValidation = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidationOutputReference(this, "jwt_validation");
  public get jwtValidation() {
    return this._jwtValidation;
  }
  public putJwtValidation(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionJwtValidation) {
    this._jwtValidation.internalValue = value;
  }
  public resetJwtValidation() {
    this._jwtValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtValidationInput() {
    return this._jwtValidation.internalValue;
  }

  // sensitive_data_policy - computed: false, optional: true, required: false
  private _sensitiveDataPolicy = new CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicyOutputReference(this, "sensitive_data_policy");
  public get sensitiveDataPolicy() {
    return this._sensitiveDataPolicy;
  }
  public putSensitiveDataPolicy(value: CdnLoadbalancerMoreOptionSecurityOptionsApiProtectionSensitiveDataPolicy) {
    this._sensitiveDataPolicy.internalValue = value;
  }
  public resetSensitiveDataPolicy() {
    this._sensitiveDataPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataPolicyInput() {
    return this._sensitiveDataPolicy.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_auth_config CdnLoadbalancer#custom_auth_config}
  */
  readonly customAuthConfig?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_auth_config: cdktf.stringToTerraform(struct!.customAuthConfig),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_auth_config: {
      value: cdktf.stringToHclTerraform(struct!.customAuthConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAuthConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAuthConfig = this._customAuthConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAuthConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAuthConfig = value.customAuthConfig;
    }
  }

  // custom_auth_config - computed: false, optional: true, required: false
  private _customAuthConfig?: string; 
  public get customAuthConfig() {
    return this.getStringAttribute('custom_auth_config');
  }
  public set customAuthConfig(value: string) {
    this._customAuthConfig = value;
  }
  public resetCustomAuthConfig() {
    this._customAuthConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAuthConfigInput() {
    return this._customAuthConfig;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey): any {
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
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey): any {
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
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyWingmanSecretInfo) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bearer_token CdnLoadbalancer#bearer_token}
  */
  readonly bearerToken?: boolean | cdktf.IResolvable;
  /**
  * backup_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#backup_key CdnLoadbalancer#backup_key}
  */
  readonly backupKey?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie CdnLoadbalancer#cookie}
  */
  readonly cookie?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#header CdnLoadbalancer#header}
  */
  readonly header?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader;
  /**
  * query_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_param CdnLoadbalancer#query_param}
  */
  readonly queryParam?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam;
  /**
  * secret_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_key CdnLoadbalancer#secret_key}
  */
  readonly secretKey: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.booleanToTerraform(struct!.bearerToken),
    backup_key: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyToTerraform(struct!.backupKey),
    cookie: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieToTerraform(struct!.cookie),
    header: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderToTerraform(struct!.header),
    query_param: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamToTerraform(struct!.queryParam),
    secret_key: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyToTerraform(struct!.secretKey),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.booleanToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup_key: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyToHclTerraform(struct!.backupKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyList",
    },
    cookie: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieList",
    },
    header: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderList",
    },
    query_param: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamToHclTerraform(struct!.queryParam),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamList",
    },
    secret_key: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyToHclTerraform(struct!.secretKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._backupKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupKey = this._backupKey?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    if (this._queryParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParam = this._queryParam?.internalValue;
    }
    if (this._secretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
      this._backupKey.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
      this._queryParam.internalValue = undefined;
      this._secretKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
      this._backupKey.internalValue = value.backupKey;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
      this._queryParam.internalValue = value.queryParam;
      this._secretKey.internalValue = value.secretKey;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: boolean | cdktf.IResolvable; 
  public get bearerToken() {
    return this.getBooleanAttribute('bearer_token');
  }
  public set bearerToken(value: boolean | cdktf.IResolvable) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // backup_key - computed: false, optional: true, required: false
  private _backupKey = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKeyOutputReference(this, "backup_key");
  public get backupKey() {
    return this._backupKey;
  }
  public putBackupKey(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtBackupKey) {
    this._backupKey.internalValue = value;
  }
  public resetBackupKey() {
    this._backupKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupKeyInput() {
    return this._backupKey.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParamOutputReference(this, "query_param");
  public get queryParam() {
    return this._queryParam;
  }
  public putQueryParam(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtQueryParam) {
    this._queryParam.internalValue = value;
  }
  public resetQueryParam() {
    this._queryParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam.internalValue;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKeyOutputReference(this, "secret_key");
  public get secretKey() {
    return this._secretKey;
  }
  public putSecretKey(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtSecretKey) {
    this._secretKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsAuthOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_auth CdnLoadbalancer#disable_auth}
  */
  readonly disableAuth?: boolean | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom CdnLoadbalancer#custom}
  */
  readonly custom?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom;
  /**
  * jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt CdnLoadbalancer#jwt}
  */
  readonly jwt?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_auth: cdktf.booleanToTerraform(struct!.disableAuth),
    custom: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomToTerraform(struct!.custom),
    jwt: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtToTerraform(struct!.jwt),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsAuthOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_auth: {
      value: cdktf.booleanToHclTerraform(struct!.disableAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomList",
    },
    jwt: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtToHclTerraform(struct!.jwt),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsAuthOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAuth = this._disableAuth;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._jwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwt = this._jwt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAuth = undefined;
      this._custom.internalValue = undefined;
      this._jwt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAuth = value.disableAuth;
      this._custom.internalValue = value.custom;
      this._jwt.internalValue = value.jwt;
    }
  }

  // disable_auth - computed: false, optional: true, required: false
  private _disableAuth?: boolean | cdktf.IResolvable; 
  public get disableAuth() {
    return this.getBooleanAttribute('disable_auth');
  }
  public set disableAuth(value: boolean | cdktf.IResolvable) {
    this._disableAuth = value;
  }
  public resetDisableAuth() {
    this._disableAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthInput() {
    return this._disableAuth;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // jwt - computed: false, optional: true, required: false
  private _jwt = new CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwtOutputReference(this, "jwt");
  public get jwt() {
    return this._jwt;
  }
  public putJwt(value: CdnLoadbalancerMoreOptionSecurityOptionsAuthOptionsJwt) {
    this._jwt.internalValue = value;
  }
  public resetJwt() {
    this._jwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInput() {
    return this._jwt.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePolicies {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#policies CdnLoadbalancer#policies}
  */
  readonly policies: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsActiveServicePoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
  */
  readonly refUserId?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_method CdnLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#inline_rate_limiter CdnLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_rate_limiter CdnLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_method: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_method: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterList",
    },
    request_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_url CdnLoadbalancer#any_url}
  */
  readonly anyUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_url: cdktf.booleanToTerraform(struct!.anyUrl),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct!.apiEndpoint),
    api_groups: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct!.apiGroups),
    client_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct!.clientMatcher),
    request_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_url: {
      value: cdktf.booleanToHclTerraform(struct!.anyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointList",
    },
    api_groups: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsList",
    },
    client_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherList",
    },
    request_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyUrl = this._anyUrl;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyUrl = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._apiGroups.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyUrl = value.anyUrl;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_url - computed: false, optional: true, required: false
  private _anyUrl?: boolean | cdktf.IResolvable; 
  public get anyUrl() {
    return this.getBooleanAttribute('any_url');
  }
  public set anyUrl(value: boolean | cdktf.IResolvable) {
    this._anyUrl = value;
  }
  public resetAnyUrl() {
    this._anyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyUrlInput() {
    return this._anyUrl;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRules {
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#bypass_rate_limiting_rules CdnLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_rate_limiting_rules: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform, true)(struct!.bypassRateLimitingRules),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_rate_limiting_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform, true)(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassRateLimitingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
    }
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList(this, "bypass_rate_limiting_rules", false);
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#rate_limiter_allowed_prefixes CdnLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimiterAllowedPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimiterAllowedPrefixes.internalValue = value.rateLimiterAllowedPrefixes;
    }
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: false, required: true
  private _rateLimiterAllowedPrefixes = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefixes CdnLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
  */
  readonly refUserId?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiter): any {
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


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiter): any {
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

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRefRateLimiter | undefined) {
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
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerMoreOptionSecurityOptionsCommonSecurityControlsApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
