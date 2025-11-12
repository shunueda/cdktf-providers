// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#annotations Apm#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#description Apm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable Apm#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#id Apm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#labels Apm#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace: string;
  /**
  * aws_site_type_choice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#aws_site_type_choice Apm#aws_site_type_choice}
  */
  readonly awsSiteTypeChoice?: ApmAwsSiteTypeChoice;
  /**
  * baremetal_site_type_choice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#baremetal_site_type_choice Apm#baremetal_site_type_choice}
  */
  readonly baremetalSiteTypeChoice?: ApmBaremetalSiteTypeChoice;
  /**
  * https_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#https_management Apm#https_management}
  */
  readonly httpsManagement?: ApmHttpsManagement;
}
export interface ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo): any {
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


export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo): any {
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

export class ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo): any {
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

export class ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo | undefined) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo;
}

export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword | undefined) {
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
  private _blindfoldSecretInfo = new ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordClearSecretInfo) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite): any {
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


export function apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite): any {
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

export class ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite | undefined) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite {
  /**
  * aws_tgw_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#aws_tgw_site Apm#aws_tgw_site}
  */
  readonly awsTgwSite: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite;
}

export function apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_tgw_site: apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteToTerraform(struct!.awsTgwSite),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_tgw_site: {
      value: apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteToHclTerraform(struct!.awsTgwSite),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsTgwSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTgwSite = this._awsTgwSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsTgwSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsTgwSite.internalValue = value.awsTgwSite;
    }
  }

  // aws_tgw_site - computed: false, optional: false, required: true
  private _awsTgwSite = new ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSiteOutputReference(this, "aws_tgw_site");
  public get awsTgwSite() {
    return this._awsTgwSite;
  }
  public putAwsTgwSite(value: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteAwsTgwSite) {
    this._awsTgwSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwSiteInput() {
    return this._awsTgwSite.internalValue;
  }
}
export interface ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ports Apm#ports}
  */
  readonly ports: string[];
}

export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ports Apm#ports}
  */
  readonly ports: string[];
}

export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ports = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ports = value.ports;
    }
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}
export interface ApmAwsSiteTypeChoiceApmAwsSiteEndpointService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_slo_ip Apm#advertise_on_slo_ip}
  */
  readonly advertiseOnSloIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_slo_ip_external Apm#advertise_on_slo_ip_external}
  */
  readonly advertiseOnSloIpExternal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#automatic_vip Apm#automatic_vip}
  */
  readonly automaticVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#configured_vip Apm#configured_vip}
  */
  readonly configuredVip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_tcp_ports Apm#default_tcp_ports}
  */
  readonly defaultTcpPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable_advertise_on_slo_ip Apm#disable_advertise_on_slo_ip}
  */
  readonly disableAdvertiseOnSloIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#http_port Apm#http_port}
  */
  readonly httpPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#https_port Apm#https_port}
  */
  readonly httpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_tcp_ports Apm#no_tcp_ports}
  */
  readonly noTcpPorts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_udp_ports Apm#no_udp_ports}
  */
  readonly noUdpPorts?: boolean | cdktf.IResolvable;
  /**
  * custom_tcp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_tcp_ports Apm#custom_tcp_ports}
  */
  readonly customTcpPorts?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts;
  /**
  * custom_udp_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_udp_ports Apm#custom_udp_ports}
  */
  readonly customUdpPorts?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts;
}

export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_slo_ip: cdktf.booleanToTerraform(struct!.advertiseOnSloIp),
    advertise_on_slo_ip_external: cdktf.booleanToTerraform(struct!.advertiseOnSloIpExternal),
    automatic_vip: cdktf.booleanToTerraform(struct!.automaticVip),
    configured_vip: cdktf.stringToTerraform(struct!.configuredVip),
    default_tcp_ports: cdktf.booleanToTerraform(struct!.defaultTcpPorts),
    disable_advertise_on_slo_ip: cdktf.booleanToTerraform(struct!.disableAdvertiseOnSloIp),
    http_port: cdktf.booleanToTerraform(struct!.httpPort),
    https_port: cdktf.booleanToTerraform(struct!.httpsPort),
    no_tcp_ports: cdktf.booleanToTerraform(struct!.noTcpPorts),
    no_udp_ports: cdktf.booleanToTerraform(struct!.noUdpPorts),
    custom_tcp_ports: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsToTerraform(struct!.customTcpPorts),
    custom_udp_ports: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsToTerraform(struct!.customUdpPorts),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteEndpointService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_slo_ip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSloIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_slo_ip_external: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnSloIpExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_vip: {
      value: cdktf.booleanToHclTerraform(struct!.automaticVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configured_vip: {
      value: cdktf.stringToHclTerraform(struct!.configuredVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_tcp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTcpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_advertise_on_slo_ip: {
      value: cdktf.booleanToHclTerraform(struct!.disableAdvertiseOnSloIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_port: {
      value: cdktf.booleanToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    https_port: {
      value: cdktf.booleanToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_tcp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.noTcpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_udp_ports: {
      value: cdktf.booleanToHclTerraform(struct!.noUdpPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_tcp_ports: {
      value: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsToHclTerraform(struct!.customTcpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsList",
    },
    custom_udp_ports: {
      value: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsToHclTerraform(struct!.customUdpPorts),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteEndpointService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnSloIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloIp = this._advertiseOnSloIp;
    }
    if (this._advertiseOnSloIpExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloIpExternal = this._advertiseOnSloIpExternal;
    }
    if (this._automaticVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticVip = this._automaticVip;
    }
    if (this._configuredVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredVip = this._configuredVip;
    }
    if (this._defaultTcpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTcpPorts = this._defaultTcpPorts;
    }
    if (this._disableAdvertiseOnSloIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAdvertiseOnSloIp = this._disableAdvertiseOnSloIp;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._noTcpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTcpPorts = this._noTcpPorts;
    }
    if (this._noUdpPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.noUdpPorts = this._noUdpPorts;
    }
    if (this._customTcpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTcpPorts = this._customTcpPorts?.internalValue;
    }
    if (this._customUdpPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customUdpPorts = this._customUdpPorts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnSloIp = undefined;
      this._advertiseOnSloIpExternal = undefined;
      this._automaticVip = undefined;
      this._configuredVip = undefined;
      this._defaultTcpPorts = undefined;
      this._disableAdvertiseOnSloIp = undefined;
      this._httpPort = undefined;
      this._httpsPort = undefined;
      this._noTcpPorts = undefined;
      this._noUdpPorts = undefined;
      this._customTcpPorts.internalValue = undefined;
      this._customUdpPorts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnSloIp = value.advertiseOnSloIp;
      this._advertiseOnSloIpExternal = value.advertiseOnSloIpExternal;
      this._automaticVip = value.automaticVip;
      this._configuredVip = value.configuredVip;
      this._defaultTcpPorts = value.defaultTcpPorts;
      this._disableAdvertiseOnSloIp = value.disableAdvertiseOnSloIp;
      this._httpPort = value.httpPort;
      this._httpsPort = value.httpsPort;
      this._noTcpPorts = value.noTcpPorts;
      this._noUdpPorts = value.noUdpPorts;
      this._customTcpPorts.internalValue = value.customTcpPorts;
      this._customUdpPorts.internalValue = value.customUdpPorts;
    }
  }

  // advertise_on_slo_ip - computed: false, optional: true, required: false
  private _advertiseOnSloIp?: boolean | cdktf.IResolvable; 
  public get advertiseOnSloIp() {
    return this.getBooleanAttribute('advertise_on_slo_ip');
  }
  public set advertiseOnSloIp(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSloIp = value;
  }
  public resetAdvertiseOnSloIp() {
    this._advertiseOnSloIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloIpInput() {
    return this._advertiseOnSloIp;
  }

  // advertise_on_slo_ip_external - computed: false, optional: true, required: false
  private _advertiseOnSloIpExternal?: boolean | cdktf.IResolvable; 
  public get advertiseOnSloIpExternal() {
    return this.getBooleanAttribute('advertise_on_slo_ip_external');
  }
  public set advertiseOnSloIpExternal(value: boolean | cdktf.IResolvable) {
    this._advertiseOnSloIpExternal = value;
  }
  public resetAdvertiseOnSloIpExternal() {
    this._advertiseOnSloIpExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloIpExternalInput() {
    return this._advertiseOnSloIpExternal;
  }

  // automatic_vip - computed: false, optional: true, required: false
  private _automaticVip?: boolean | cdktf.IResolvable; 
  public get automaticVip() {
    return this.getBooleanAttribute('automatic_vip');
  }
  public set automaticVip(value: boolean | cdktf.IResolvable) {
    this._automaticVip = value;
  }
  public resetAutomaticVip() {
    this._automaticVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticVipInput() {
    return this._automaticVip;
  }

  // configured_vip - computed: false, optional: true, required: false
  private _configuredVip?: string; 
  public get configuredVip() {
    return this.getStringAttribute('configured_vip');
  }
  public set configuredVip(value: string) {
    this._configuredVip = value;
  }
  public resetConfiguredVip() {
    this._configuredVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredVipInput() {
    return this._configuredVip;
  }

  // default_tcp_ports - computed: false, optional: true, required: false
  private _defaultTcpPorts?: boolean | cdktf.IResolvable; 
  public get defaultTcpPorts() {
    return this.getBooleanAttribute('default_tcp_ports');
  }
  public set defaultTcpPorts(value: boolean | cdktf.IResolvable) {
    this._defaultTcpPorts = value;
  }
  public resetDefaultTcpPorts() {
    this._defaultTcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTcpPortsInput() {
    return this._defaultTcpPorts;
  }

  // disable_advertise_on_slo_ip - computed: false, optional: true, required: false
  private _disableAdvertiseOnSloIp?: boolean | cdktf.IResolvable; 
  public get disableAdvertiseOnSloIp() {
    return this.getBooleanAttribute('disable_advertise_on_slo_ip');
  }
  public set disableAdvertiseOnSloIp(value: boolean | cdktf.IResolvable) {
    this._disableAdvertiseOnSloIp = value;
  }
  public resetDisableAdvertiseOnSloIp() {
    this._disableAdvertiseOnSloIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAdvertiseOnSloIpInput() {
    return this._disableAdvertiseOnSloIp;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: boolean | cdktf.IResolvable; 
  public get httpPort() {
    return this.getBooleanAttribute('http_port');
  }
  public set httpPort(value: boolean | cdktf.IResolvable) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: boolean | cdktf.IResolvable; 
  public get httpsPort() {
    return this.getBooleanAttribute('https_port');
  }
  public set httpsPort(value: boolean | cdktf.IResolvable) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // no_tcp_ports - computed: false, optional: true, required: false
  private _noTcpPorts?: boolean | cdktf.IResolvable; 
  public get noTcpPorts() {
    return this.getBooleanAttribute('no_tcp_ports');
  }
  public set noTcpPorts(value: boolean | cdktf.IResolvable) {
    this._noTcpPorts = value;
  }
  public resetNoTcpPorts() {
    this._noTcpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTcpPortsInput() {
    return this._noTcpPorts;
  }

  // no_udp_ports - computed: false, optional: true, required: false
  private _noUdpPorts?: boolean | cdktf.IResolvable; 
  public get noUdpPorts() {
    return this.getBooleanAttribute('no_udp_ports');
  }
  public set noUdpPorts(value: boolean | cdktf.IResolvable) {
    this._noUdpPorts = value;
  }
  public resetNoUdpPorts() {
    this._noUdpPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noUdpPortsInput() {
    return this._noUdpPorts;
  }

  // custom_tcp_ports - computed: false, optional: true, required: false
  private _customTcpPorts = new ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPortsOutputReference(this, "custom_tcp_ports");
  public get customTcpPorts() {
    return this._customTcpPorts;
  }
  public putCustomTcpPorts(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomTcpPorts) {
    this._customTcpPorts.internalValue = value;
  }
  public resetCustomTcpPorts() {
    this._customTcpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTcpPortsInput() {
    return this._customTcpPorts.internalValue;
  }

  // custom_udp_ports - computed: false, optional: true, required: false
  private _customUdpPorts = new ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPortsOutputReference(this, "custom_udp_ports");
  public get customUdpPorts() {
    return this._customUdpPorts;
  }
  public putCustomUdpPorts(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceCustomUdpPorts) {
    this._customUdpPorts.internalValue = value;
  }
  public resetCustomUdpPorts() {
    this._customUdpPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUdpPortsInput() {
    return this._customUdpPorts.internalValue;
  }
}
export interface ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ipv4 Apm#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ipv6 Apm#ipv6}
  */
  readonly ipv6?: string;
}

export function apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam): any {
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

export class ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam | undefined) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#existing_subnet_id Apm#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#subnet_param Apm#subnet_param}
  */
  readonly subnetParam?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam;
}

export function apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetOutputReference | ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet): any {
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
      value: apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet | undefined {
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

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet | undefined) {
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
  private _subnetParam = new ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetSubnetParam) {
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
export interface ApmAwsSiteTypeChoiceApmAwsSiteNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#automatic_prefix Apm#automatic_prefix}
  */
  readonly automaticPrefix?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#aws_az_name Apm#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#node_name Apm#node_name}
  */
  readonly nodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#reserved_mgmt_subnet Apm#reserved_mgmt_subnet}
  */
  readonly reservedMgmtSubnet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tunnel_prefix Apm#tunnel_prefix}
  */
  readonly tunnelPrefix?: string;
  /**
  * mgmt_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#mgmt_subnet Apm#mgmt_subnet}
  */
  readonly mgmtSubnet?: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet;
}

export function apmAwsSiteTypeChoiceApmAwsSiteNodesToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_prefix: cdktf.booleanToTerraform(struct!.automaticPrefix),
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    reserved_mgmt_subnet: cdktf.booleanToTerraform(struct!.reservedMgmtSubnet),
    tunnel_prefix: cdktf.stringToTerraform(struct!.tunnelPrefix),
    mgmt_subnet: apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetToTerraform(struct!.mgmtSubnet),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteNodesToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.automaticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_mgmt_subnet: {
      value: cdktf.booleanToHclTerraform(struct!.reservedMgmtSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tunnelPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mgmt_subnet: {
      value: apmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetToHclTerraform(struct!.mgmtSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSiteNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticPrefix = this._automaticPrefix;
    }
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._reservedMgmtSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedMgmtSubnet = this._reservedMgmtSubnet;
    }
    if (this._tunnelPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPrefix = this._tunnelPrefix;
    }
    if (this._mgmtSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtSubnet = this._mgmtSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSiteNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automaticPrefix = undefined;
      this._awsAzName = undefined;
      this._nodeName = undefined;
      this._reservedMgmtSubnet = undefined;
      this._tunnelPrefix = undefined;
      this._mgmtSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automaticPrefix = value.automaticPrefix;
      this._awsAzName = value.awsAzName;
      this._nodeName = value.nodeName;
      this._reservedMgmtSubnet = value.reservedMgmtSubnet;
      this._tunnelPrefix = value.tunnelPrefix;
      this._mgmtSubnet.internalValue = value.mgmtSubnet;
    }
  }

  // automatic_prefix - computed: false, optional: true, required: false
  private _automaticPrefix?: boolean | cdktf.IResolvable; 
  public get automaticPrefix() {
    return this.getBooleanAttribute('automatic_prefix');
  }
  public set automaticPrefix(value: boolean | cdktf.IResolvable) {
    this._automaticPrefix = value;
  }
  public resetAutomaticPrefix() {
    this._automaticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPrefixInput() {
    return this._automaticPrefix;
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // reserved_mgmt_subnet - computed: false, optional: true, required: false
  private _reservedMgmtSubnet?: boolean | cdktf.IResolvable; 
  public get reservedMgmtSubnet() {
    return this.getBooleanAttribute('reserved_mgmt_subnet');
  }
  public set reservedMgmtSubnet(value: boolean | cdktf.IResolvable) {
    this._reservedMgmtSubnet = value;
  }
  public resetReservedMgmtSubnet() {
    this._reservedMgmtSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMgmtSubnetInput() {
    return this._reservedMgmtSubnet;
  }

  // tunnel_prefix - computed: false, optional: true, required: false
  private _tunnelPrefix?: string; 
  public get tunnelPrefix() {
    return this.getStringAttribute('tunnel_prefix');
  }
  public set tunnelPrefix(value: string) {
    this._tunnelPrefix = value;
  }
  public resetTunnelPrefix() {
    this._tunnelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPrefixInput() {
    return this._tunnelPrefix;
  }

  // mgmt_subnet - computed: false, optional: true, required: false
  private _mgmtSubnet = new ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnetOutputReference(this, "mgmt_subnet");
  public get mgmtSubnet() {
    return this._mgmtSubnet;
  }
  public putMgmtSubnet(value: ApmAwsSiteTypeChoiceApmAwsSiteNodesMgmtSubnet) {
    this._mgmtSubnet.internalValue = value;
  }
  public resetMgmtSubnet() {
    this._mgmtSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSubnetInput() {
    return this._mgmtSubnet.internalValue;
  }
}

export class ApmAwsSiteTypeChoiceApmAwsSiteNodesList extends cdktf.ComplexList {
  public internalValue? : ApmAwsSiteTypeChoiceApmAwsSiteNodes[] | cdktf.IResolvable

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
  public get(index: number): ApmAwsSiteTypeChoiceApmAwsSiteNodesOutputReference {
    return new ApmAwsSiteTypeChoiceApmAwsSiteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmAwsSiteTypeChoiceApmAwsSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#admin_username Apm#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ssh_key Apm#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tags Apm#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#admin_password Apm#admin_password}
  */
  readonly adminPassword: ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword;
  /**
  * aws_tgw_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#aws_tgw_site Apm#aws_tgw_site}
  */
  readonly awsTgwSite: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite;
  /**
  * endpoint_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#endpoint_service Apm#endpoint_service}
  */
  readonly endpointService?: ApmAwsSiteTypeChoiceApmAwsSiteEndpointService;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#nodes Apm#nodes}
  */
  readonly nodes: ApmAwsSiteTypeChoiceApmAwsSiteNodes[] | cdktf.IResolvable;
}

export function apmAwsSiteTypeChoiceApmAwsSiteToTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    admin_password: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordToTerraform(struct!.adminPassword),
    aws_tgw_site: apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteToTerraform(struct!.awsTgwSite),
    endpoint_service: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceToTerraform(struct!.endpointService),
    nodes: cdktf.listMapper(apmAwsSiteTypeChoiceApmAwsSiteNodesToTerraform, true)(struct!.nodes),
  }
}


export function apmAwsSiteTypeChoiceApmAwsSiteToHclTerraform(struct?: ApmAwsSiteTypeChoiceApmAwsSiteOutputReference | ApmAwsSiteTypeChoiceApmAwsSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    admin_password: {
      value: apmAwsSiteTypeChoiceApmAwsSiteAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordList",
    },
    aws_tgw_site: {
      value: apmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteToHclTerraform(struct!.awsTgwSite),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteList",
    },
    endpoint_service: {
      value: apmAwsSiteTypeChoiceApmAwsSiteEndpointServiceToHclTerraform(struct!.endpointService),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceList",
    },
    nodes: {
      value: cdktf.listMapperHcl(apmAwsSiteTypeChoiceApmAwsSiteNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceApmAwsSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceApmAwsSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    if (this._awsTgwSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTgwSite = this._awsTgwSite?.internalValue;
    }
    if (this._endpointService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointService = this._endpointService?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceApmAwsSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._sshKey = undefined;
      this._tags = undefined;
      this._adminPassword.internalValue = undefined;
      this._awsTgwSite.internalValue = undefined;
      this._endpointService.internalValue = undefined;
      this._nodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._sshKey = value.sshKey;
      this._tags = value.tags;
      this._adminPassword.internalValue = value.adminPassword;
      this._awsTgwSite.internalValue = value.awsTgwSite;
      this._endpointService.internalValue = value.endpointService;
      this._nodes.internalValue = value.nodes;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
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

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword = new ApmAwsSiteTypeChoiceApmAwsSiteAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: ApmAwsSiteTypeChoiceApmAwsSiteAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // aws_tgw_site - computed: false, optional: false, required: true
  private _awsTgwSite = new ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSiteOutputReference(this, "aws_tgw_site");
  public get awsTgwSite() {
    return this._awsTgwSite;
  }
  public putAwsTgwSite(value: ApmAwsSiteTypeChoiceApmAwsSiteAwsTgwSite) {
    this._awsTgwSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTgwSiteInput() {
    return this._awsTgwSite.internalValue;
  }

  // endpoint_service - computed: false, optional: true, required: false
  private _endpointService = new ApmAwsSiteTypeChoiceApmAwsSiteEndpointServiceOutputReference(this, "endpoint_service");
  public get endpointService() {
    return this._endpointService;
  }
  public putEndpointService(value: ApmAwsSiteTypeChoiceApmAwsSiteEndpointService) {
    this._endpointService.internalValue = value;
  }
  public resetEndpointService() {
    this._endpointService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceInput() {
    return this._endpointService.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new ApmAwsSiteTypeChoiceApmAwsSiteNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ApmAwsSiteTypeChoiceApmAwsSiteNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}
export interface ApmAwsSiteTypeChoiceMarketPlaceImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#best_plus_pay_g200_mbps Apm#best_plus_pay_g200_mbps}
  */
  readonly bestPlusPayG200Mbps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#best_plus_payg_1gbps Apm#best_plus_payg_1gbps}
  */
  readonly bestPlusPayg1Gbps?: boolean | cdktf.IResolvable;
}

export function apmAwsSiteTypeChoiceMarketPlaceImageToTerraform(struct?: ApmAwsSiteTypeChoiceMarketPlaceImageOutputReference | ApmAwsSiteTypeChoiceMarketPlaceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    best_plus_pay_g200_mbps: cdktf.booleanToTerraform(struct!.bestPlusPayG200Mbps),
    best_plus_payg_1gbps: cdktf.booleanToTerraform(struct!.bestPlusPayg1Gbps),
  }
}


export function apmAwsSiteTypeChoiceMarketPlaceImageToHclTerraform(struct?: ApmAwsSiteTypeChoiceMarketPlaceImageOutputReference | ApmAwsSiteTypeChoiceMarketPlaceImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    best_plus_pay_g200_mbps: {
      value: cdktf.booleanToHclTerraform(struct!.bestPlusPayG200Mbps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    best_plus_payg_1gbps: {
      value: cdktf.booleanToHclTerraform(struct!.bestPlusPayg1Gbps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceMarketPlaceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoiceMarketPlaceImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bestPlusPayG200Mbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestPlusPayG200Mbps = this._bestPlusPayG200Mbps;
    }
    if (this._bestPlusPayg1Gbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestPlusPayg1Gbps = this._bestPlusPayg1Gbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoiceMarketPlaceImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bestPlusPayG200Mbps = undefined;
      this._bestPlusPayg1Gbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bestPlusPayG200Mbps = value.bestPlusPayG200Mbps;
      this._bestPlusPayg1Gbps = value.bestPlusPayg1Gbps;
    }
  }

  // best_plus_pay_g200_mbps - computed: false, optional: true, required: false
  private _bestPlusPayG200Mbps?: boolean | cdktf.IResolvable; 
  public get bestPlusPayG200Mbps() {
    return this.getBooleanAttribute('best_plus_pay_g200_mbps');
  }
  public set bestPlusPayG200Mbps(value: boolean | cdktf.IResolvable) {
    this._bestPlusPayG200Mbps = value;
  }
  public resetBestPlusPayG200Mbps() {
    this._bestPlusPayG200Mbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestPlusPayG200MbpsInput() {
    return this._bestPlusPayG200Mbps;
  }

  // best_plus_payg_1gbps - computed: false, optional: true, required: false
  private _bestPlusPayg1Gbps?: boolean | cdktf.IResolvable; 
  public get bestPlusPayg1Gbps() {
    return this.getBooleanAttribute('best_plus_payg_1gbps');
  }
  public set bestPlusPayg1Gbps(value: boolean | cdktf.IResolvable) {
    this._bestPlusPayg1Gbps = value;
  }
  public resetBestPlusPayg1Gbps() {
    this._bestPlusPayg1Gbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestPlusPayg1GbpsInput() {
    return this._bestPlusPayg1Gbps;
  }
}
export interface ApmAwsSiteTypeChoice {
  /**
  * apm_aws_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#apm_aws_site Apm#apm_aws_site}
  */
  readonly apmAwsSite: ApmAwsSiteTypeChoiceApmAwsSite;
  /**
  * market_place_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#market_place_image Apm#market_place_image}
  */
  readonly marketPlaceImage?: ApmAwsSiteTypeChoiceMarketPlaceImage;
}

export function apmAwsSiteTypeChoiceToTerraform(struct?: ApmAwsSiteTypeChoiceOutputReference | ApmAwsSiteTypeChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apm_aws_site: apmAwsSiteTypeChoiceApmAwsSiteToTerraform(struct!.apmAwsSite),
    market_place_image: apmAwsSiteTypeChoiceMarketPlaceImageToTerraform(struct!.marketPlaceImage),
  }
}


export function apmAwsSiteTypeChoiceToHclTerraform(struct?: ApmAwsSiteTypeChoiceOutputReference | ApmAwsSiteTypeChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apm_aws_site: {
      value: apmAwsSiteTypeChoiceApmAwsSiteToHclTerraform(struct!.apmAwsSite),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceApmAwsSiteList",
    },
    market_place_image: {
      value: apmAwsSiteTypeChoiceMarketPlaceImageToHclTerraform(struct!.marketPlaceImage),
      isBlock: true,
      type: "list",
      storageClassType: "ApmAwsSiteTypeChoiceMarketPlaceImageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmAwsSiteTypeChoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmAwsSiteTypeChoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apmAwsSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apmAwsSite = this._apmAwsSite?.internalValue;
    }
    if (this._marketPlaceImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketPlaceImage = this._marketPlaceImage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmAwsSiteTypeChoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apmAwsSite.internalValue = undefined;
      this._marketPlaceImage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apmAwsSite.internalValue = value.apmAwsSite;
      this._marketPlaceImage.internalValue = value.marketPlaceImage;
    }
  }

  // apm_aws_site - computed: false, optional: false, required: true
  private _apmAwsSite = new ApmAwsSiteTypeChoiceApmAwsSiteOutputReference(this, "apm_aws_site");
  public get apmAwsSite() {
    return this._apmAwsSite;
  }
  public putApmAwsSite(value: ApmAwsSiteTypeChoiceApmAwsSite) {
    this._apmAwsSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apmAwsSiteInput() {
    return this._apmAwsSite.internalValue;
  }

  // market_place_image - computed: false, optional: true, required: false
  private _marketPlaceImage = new ApmAwsSiteTypeChoiceMarketPlaceImageOutputReference(this, "market_place_image");
  public get marketPlaceImage() {
    return this._marketPlaceImage;
  }
  public putMarketPlaceImage(value: ApmAwsSiteTypeChoiceMarketPlaceImage) {
    this._marketPlaceImage.internalValue = value;
  }
  public resetMarketPlaceImage() {
    this._marketPlaceImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketPlaceImageInput() {
    return this._marketPlaceImage.internalValue;
  }
}
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo): any {
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


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword | undefined) {
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
  private _blindfoldSecretInfo = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordClearSecretInfo) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite): any {
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


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo): any {
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


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword | undefined) {
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
  private _blindfoldSecretInfo = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordClearSecretInfo) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#license_pool_name Apm#license_pool_name}
  */
  readonly licensePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#license_server_ip Apm#license_server_ip}
  */
  readonly licenseServerIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#sku_name Apm#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#username Apm#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#password Apm#password}
  */
  readonly password: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_pool_name: cdktf.stringToTerraform(struct!.licensePoolName),
    license_server_ip: cdktf.stringToTerraform(struct!.licenseServerIp),
    sku_name: cdktf.stringToTerraform(struct!.skuName),
    username: cdktf.stringToTerraform(struct!.username),
    password: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordToTerraform(struct!.password),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.licensePoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.licenseServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku_name: {
      value: cdktf.stringToHclTerraform(struct!.skuName),
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
    password: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._licensePoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.licensePoolName = this._licensePoolName;
    }
    if (this._licenseServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseServerIp = this._licenseServerIp;
    }
    if (this._skuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuName = this._skuName;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._licensePoolName = undefined;
      this._licenseServerIp = undefined;
      this._skuName = undefined;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._licensePoolName = value.licensePoolName;
      this._licenseServerIp = value.licenseServerIp;
      this._skuName = value.skuName;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // license_pool_name - computed: false, optional: false, required: true
  private _licensePoolName?: string; 
  public get licensePoolName() {
    return this.getStringAttribute('license_pool_name');
  }
  public set licensePoolName(value: string) {
    this._licensePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licensePoolNameInput() {
    return this._licensePoolName;
  }

  // license_server_ip - computed: false, optional: false, required: true
  private _licenseServerIp?: string; 
  public get licenseServerIp() {
    return this.getStringAttribute('license_server_ip');
  }
  public set licenseServerIp(value: string) {
    this._licenseServerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseServerIpInput() {
    return this._licenseServerIp;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
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

  // password - computed: false, optional: false, required: true
  private _password = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstancePassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface): any {
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


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#network_gateway Apm#network_gateway}
  */
  readonly networkGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#network_self_ip Apm#network_self_ip}
  */
  readonly networkSelfIp: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#interface Apm#interface}
  */
  readonly interface: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_gateway: cdktf.stringToTerraform(struct!.networkGateway),
    network_self_ip: cdktf.stringToTerraform(struct!.networkSelfIp),
    interface: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceToTerraform(struct!.interface),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_gateway: {
      value: cdktf.stringToHclTerraform(struct!.networkGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_self_ip: {
      value: cdktf.stringToHclTerraform(struct!.networkSelfIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkGateway = this._networkGateway;
    }
    if (this._networkSelfIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSelfIp = this._networkSelfIp;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkGateway = undefined;
      this._networkSelfIp = undefined;
      this._interface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkGateway = value.networkGateway;
      this._networkSelfIp = value.networkSelfIp;
      this._interface.internalValue = value.interface;
    }
  }

  // network_gateway - computed: false, optional: true, required: false
  private _networkGateway?: string; 
  public get networkGateway() {
    return this.getStringAttribute('network_gateway');
  }
  public set networkGateway(value: string) {
    this._networkGateway = value;
  }
  public resetNetworkGateway() {
    this._networkGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkGatewayInput() {
    return this._networkGateway;
  }

  // network_self_ip - computed: false, optional: false, required: true
  private _networkSelfIp?: string; 
  public get networkSelfIp() {
    return this.getStringAttribute('network_self_ip');
  }
  public set networkSelfIp(value: string) {
    this._networkSelfIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSelfIpInput() {
    return this._networkSelfIp;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceInterface) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface): any {
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


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface): any {
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

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface | undefined {
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

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface | undefined) {
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
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#network_gateway Apm#network_gateway}
  */
  readonly networkGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#network_self_ip Apm#network_self_ip}
  */
  readonly networkSelfIp: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#interface Apm#interface}
  */
  readonly interface: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_gateway: cdktf.stringToTerraform(struct!.networkGateway),
    network_self_ip: cdktf.stringToTerraform(struct!.networkSelfIp),
    interface: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceToTerraform(struct!.interface),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_gateway: {
      value: cdktf.stringToHclTerraform(struct!.networkGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_self_ip: {
      value: cdktf.stringToHclTerraform(struct!.networkSelfIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkGateway = this._networkGateway;
    }
    if (this._networkSelfIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSelfIp = this._networkSelfIp;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkGateway = undefined;
      this._networkSelfIp = undefined;
      this._interface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkGateway = value.networkGateway;
      this._networkSelfIp = value.networkSelfIp;
      this._interface.internalValue = value.interface;
    }
  }

  // network_gateway - computed: false, optional: true, required: false
  private _networkGateway?: string; 
  public get networkGateway() {
    return this.getStringAttribute('network_gateway');
  }
  public set networkGateway(value: string) {
    this._networkGateway = value;
  }
  public resetNetworkGateway() {
    this._networkGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkGatewayInput() {
    return this._networkGateway;
  }

  // network_self_ip - computed: false, optional: false, required: true
  private _networkSelfIp?: string; 
  public get networkSelfIp() {
    return this.getStringAttribute('network_self_ip');
  }
  public set networkSelfIp(value: string) {
    this._networkSelfIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSelfIpInput() {
    return this._networkSelfIp;
  }

  // interface - computed: false, optional: false, required: true
  private _interface = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceInterface) {
    this._interface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#bm_node_memory_size Apm#bm_node_memory_size}
  */
  readonly bmNodeMemorySize: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#bm_virtual_cpu_count Apm#bm_virtual_cpu_count}
  */
  readonly bmVirtualCpuCount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#node_name Apm#node_name}
  */
  readonly nodeName: string;
  /**
  * external_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#external_interface Apm#external_interface}
  */
  readonly externalInterface?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface;
  /**
  * internal_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#internal_interface Apm#internal_interface}
  */
  readonly internalInterface?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bm_node_memory_size: cdktf.stringToTerraform(struct!.bmNodeMemorySize),
    bm_virtual_cpu_count: cdktf.stringToTerraform(struct!.bmVirtualCpuCount),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    external_interface: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceToTerraform(struct!.externalInterface),
    internal_interface: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceToTerraform(struct!.internalInterface),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bm_node_memory_size: {
      value: cdktf.stringToHclTerraform(struct!.bmNodeMemorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bm_virtual_cpu_count: {
      value: cdktf.stringToHclTerraform(struct!.bmVirtualCpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_interface: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceToHclTerraform(struct!.externalInterface),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceList",
    },
    internal_interface: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceToHclTerraform(struct!.internalInterface),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bmNodeMemorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmNodeMemorySize = this._bmNodeMemorySize;
    }
    if (this._bmVirtualCpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.bmVirtualCpuCount = this._bmVirtualCpuCount;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._externalInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalInterface = this._externalInterface?.internalValue;
    }
    if (this._internalInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalInterface = this._internalInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bmNodeMemorySize = undefined;
      this._bmVirtualCpuCount = undefined;
      this._nodeName = undefined;
      this._externalInterface.internalValue = undefined;
      this._internalInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bmNodeMemorySize = value.bmNodeMemorySize;
      this._bmVirtualCpuCount = value.bmVirtualCpuCount;
      this._nodeName = value.nodeName;
      this._externalInterface.internalValue = value.externalInterface;
      this._internalInterface.internalValue = value.internalInterface;
    }
  }

  // bm_node_memory_size - computed: false, optional: false, required: true
  private _bmNodeMemorySize?: string; 
  public get bmNodeMemorySize() {
    return this.getStringAttribute('bm_node_memory_size');
  }
  public set bmNodeMemorySize(value: string) {
    this._bmNodeMemorySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bmNodeMemorySizeInput() {
    return this._bmNodeMemorySize;
  }

  // bm_virtual_cpu_count - computed: false, optional: false, required: true
  private _bmVirtualCpuCount?: string; 
  public get bmVirtualCpuCount() {
    return this.getStringAttribute('bm_virtual_cpu_count');
  }
  public set bmVirtualCpuCount(value: string) {
    this._bmVirtualCpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bmVirtualCpuCountInput() {
    return this._bmVirtualCpuCount;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // external_interface - computed: false, optional: true, required: false
  private _externalInterface = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterfaceOutputReference(this, "external_interface");
  public get externalInterface() {
    return this._externalInterface;
  }
  public putExternalInterface(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesExternalInterface) {
    this._externalInterface.internalValue = value;
  }
  public resetExternalInterface() {
    this._externalInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInterfaceInput() {
    return this._externalInterface.internalValue;
  }

  // internal_interface - computed: false, optional: true, required: false
  private _internalInterface = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterfaceOutputReference(this, "internal_interface");
  public get internalInterface() {
    return this._internalInterface;
  }
  public putInternalInterface(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesInternalInterface) {
    this._internalInterface.internalValue = value;
  }
  public resetInternalInterface() {
    this._internalInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInterfaceInput() {
    return this._internalInterface.internalValue;
  }
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesList extends cdktf.ComplexList {
  public internalValue? : ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes[] | cdktf.IResolvable

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
  public get(index: number): ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesOutputReference {
    return new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmBaremetalSiteTypeChoiceF5BareMetalSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#admin_username Apm#admin_username}
  */
  readonly adminUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#public_download_url Apm#public_download_url}
  */
  readonly publicDownloadUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#ssh_key Apm#ssh_key}
  */
  readonly sshKey: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#admin_password Apm#admin_password}
  */
  readonly adminPassword: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword;
  /**
  * bare_metal_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#bare_metal_site Apm#bare_metal_site}
  */
  readonly bareMetalSite: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite;
  /**
  * bigiq_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#bigiq_instance Apm#bigiq_instance}
  */
  readonly bigiqInstance: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#nodes Apm#nodes}
  */
  readonly nodes: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes[] | cdktf.IResolvable;
}

export function apmBaremetalSiteTypeChoiceF5BareMetalSiteToTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    public_download_url: cdktf.stringToTerraform(struct!.publicDownloadUrl),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    admin_password: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordToTerraform(struct!.adminPassword),
    bare_metal_site: apmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteToTerraform(struct!.bareMetalSite),
    bigiq_instance: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceToTerraform(struct!.bigiqInstance),
    nodes: cdktf.listMapper(apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesToTerraform, true)(struct!.nodes),
  }
}


export function apmBaremetalSiteTypeChoiceF5BareMetalSiteToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceF5BareMetalSiteOutputReference | ApmBaremetalSiteTypeChoiceF5BareMetalSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_download_url: {
      value: cdktf.stringToHclTerraform(struct!.publicDownloadUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordList",
    },
    bare_metal_site: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteToHclTerraform(struct!.bareMetalSite),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteList",
    },
    bigiq_instance: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceToHclTerraform(struct!.bigiqInstance),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceList",
    },
    nodes: {
      value: cdktf.listMapperHcl(apmBaremetalSiteTypeChoiceF5BareMetalSiteNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceF5BareMetalSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoiceF5BareMetalSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._publicDownloadUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicDownloadUrl = this._publicDownloadUrl;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    if (this._bareMetalSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bareMetalSite = this._bareMetalSite?.internalValue;
    }
    if (this._bigiqInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigiqInstance = this._bigiqInstance?.internalValue;
    }
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoiceF5BareMetalSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsername = undefined;
      this._publicDownloadUrl = undefined;
      this._sshKey = undefined;
      this._adminPassword.internalValue = undefined;
      this._bareMetalSite.internalValue = undefined;
      this._bigiqInstance.internalValue = undefined;
      this._nodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsername = value.adminUsername;
      this._publicDownloadUrl = value.publicDownloadUrl;
      this._sshKey = value.sshKey;
      this._adminPassword.internalValue = value.adminPassword;
      this._bareMetalSite.internalValue = value.bareMetalSite;
      this._bigiqInstance.internalValue = value.bigiqInstance;
      this._nodes.internalValue = value.nodes;
    }
  }

  // admin_username - computed: false, optional: false, required: true
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
  }

  // public_download_url - computed: false, optional: false, required: true
  private _publicDownloadUrl?: string; 
  public get publicDownloadUrl() {
    return this.getStringAttribute('public_download_url');
  }
  public set publicDownloadUrl(value: string) {
    this._publicDownloadUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicDownloadUrlInput() {
    return this._publicDownloadUrl;
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

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // bare_metal_site - computed: false, optional: false, required: true
  private _bareMetalSite = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSiteOutputReference(this, "bare_metal_site");
  public get bareMetalSite() {
    return this._bareMetalSite;
  }
  public putBareMetalSite(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBareMetalSite) {
    this._bareMetalSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalSiteInput() {
    return this._bareMetalSite.internalValue;
  }

  // bigiq_instance - computed: false, optional: false, required: true
  private _bigiqInstance = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstanceOutputReference(this, "bigiq_instance");
  public get bigiqInstance() {
    return this._bigiqInstance;
  }
  public putBigiqInstance(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteBigiqInstance) {
    this._bigiqInstance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigiqInstanceInput() {
    return this._bigiqInstance.internalValue;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: ApmBaremetalSiteTypeChoiceF5BareMetalSiteNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}
export interface ApmBaremetalSiteTypeChoice {
  /**
  * f5_bare_metal_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#f5_bare_metal_site Apm#f5_bare_metal_site}
  */
  readonly f5BareMetalSite: ApmBaremetalSiteTypeChoiceF5BareMetalSite;
}

export function apmBaremetalSiteTypeChoiceToTerraform(struct?: ApmBaremetalSiteTypeChoiceOutputReference | ApmBaremetalSiteTypeChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_bare_metal_site: apmBaremetalSiteTypeChoiceF5BareMetalSiteToTerraform(struct!.f5BareMetalSite),
  }
}


export function apmBaremetalSiteTypeChoiceToHclTerraform(struct?: ApmBaremetalSiteTypeChoiceOutputReference | ApmBaremetalSiteTypeChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_bare_metal_site: {
      value: apmBaremetalSiteTypeChoiceF5BareMetalSiteToHclTerraform(struct!.f5BareMetalSite),
      isBlock: true,
      type: "list",
      storageClassType: "ApmBaremetalSiteTypeChoiceF5BareMetalSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmBaremetalSiteTypeChoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmBaremetalSiteTypeChoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5BareMetalSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5BareMetalSite = this._f5BareMetalSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmBaremetalSiteTypeChoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5BareMetalSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5BareMetalSite.internalValue = value.f5BareMetalSite;
    }
  }

  // f5_bare_metal_site - computed: false, optional: false, required: true
  private _f5BareMetalSite = new ApmBaremetalSiteTypeChoiceF5BareMetalSiteOutputReference(this, "f5_bare_metal_site");
  public get f5BareMetalSite() {
    return this._f5BareMetalSite;
  }
  public putF5BareMetalSite(value: ApmBaremetalSiteTypeChoiceF5BareMetalSite) {
    this._f5BareMetalSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get f5BareMetalSiteInput() {
    return this._f5BareMetalSite.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnInternetPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnInternetPublicIpToTerraform(struct?: ApmHttpsManagementAdvertiseOnInternetPublicIpOutputReference | ApmHttpsManagementAdvertiseOnInternetPublicIp): any {
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


export function apmHttpsManagementAdvertiseOnInternetPublicIpToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnInternetPublicIpOutputReference | ApmHttpsManagementAdvertiseOnInternetPublicIp): any {
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

export class ApmHttpsManagementAdvertiseOnInternetPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnInternetPublicIp | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnInternetPublicIp | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnInternet {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#public_ip Apm#public_ip}
  */
  readonly publicIp: ApmHttpsManagementAdvertiseOnInternetPublicIp;
}

export function apmHttpsManagementAdvertiseOnInternetToTerraform(struct?: ApmHttpsManagementAdvertiseOnInternetOutputReference | ApmHttpsManagementAdvertiseOnInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: apmHttpsManagementAdvertiseOnInternetPublicIpToTerraform(struct!.publicIp),
  }
}


export function apmHttpsManagementAdvertiseOnInternetToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnInternetOutputReference | ApmHttpsManagementAdvertiseOnInternet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: apmHttpsManagementAdvertiseOnInternetPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnInternetPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnInternetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnInternet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnInternet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new ApmHttpsManagementAdvertiseOnInternetPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: ApmHttpsManagementAdvertiseOnInternetPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#hash_algorithms Apm#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms): any {
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

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling {
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults {
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#certificate_url Apm#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#description Apm#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_hash_algorithms Apm#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable_ocsp_stapling Apm#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#private_key Apm#private_key}
  */
  readonly privateKey: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_system_defaults Apm#use_system_defaults}
  */
  readonly useSystemDefaults?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsCertificatesToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable): any {
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
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesUseSystemDefaults) {
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

export class ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ApmHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference {
    return new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#cipher_suites Apm#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#max_version Apm#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#min_version Apm#min_version}
  */
  readonly minVersion?: string;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity): any {
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
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_security Apm#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#low_security Apm#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#medium_security Apm#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_security Apm#custom_security}
  */
  readonly customSecurity?: ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity;
}

export function apmHttpsManagementAdvertiseOnSliVipTlsConfigToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: apmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipTlsConfigToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSliVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: ApmHttpsManagementAdvertiseOnSliVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSliVipUseMtlsCrlToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl): any {
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


export function apmHttpsManagementAdvertiseOnSliVipUseMtlsCrlToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl): any {
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

export class ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa): any {
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


export function apmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa): any {
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

export class ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_header_elements Apm#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function apmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#client_certificate_optional Apm#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_crl Apm#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca_url Apm#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_disabled Apm#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#crl Apm#crl}
  */
  readonly crl?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca Apm#trusted_ca}
  */
  readonly trustedCa?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_options Apm#xfcc_options}
  */
  readonly xfccOptions?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions;
}

export function apmHttpsManagementAdvertiseOnSliVipUseMtlsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: apmHttpsManagementAdvertiseOnSliVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: apmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: apmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipUseMtlsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSliVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
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
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: apmHttpsManagementAdvertiseOnSliVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: apmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: apmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
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

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: ApmHttpsManagementAdvertiseOnSliVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSliVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_mtls Apm#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_certificates Apm#tls_certificates}
  */
  readonly tlsCertificates: ApmHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_config Apm#tls_config}
  */
  readonly tlsConfig?: ApmHttpsManagementAdvertiseOnSliVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_mtls Apm#use_mtls}
  */
  readonly useMtls?: ApmHttpsManagementAdvertiseOnSliVipUseMtls;
}

export function apmHttpsManagementAdvertiseOnSliVipToTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipOutputReference | ApmHttpsManagementAdvertiseOnSliVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(apmHttpsManagementAdvertiseOnSliVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: apmHttpsManagementAdvertiseOnSliVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: apmHttpsManagementAdvertiseOnSliVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function apmHttpsManagementAdvertiseOnSliVipToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSliVipOutputReference | ApmHttpsManagementAdvertiseOnSliVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(apmHttpsManagementAdvertiseOnSliVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesList",
    },
    tls_config: {
      value: apmHttpsManagementAdvertiseOnSliVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipTlsConfigList",
    },
    use_mtls: {
      value: apmHttpsManagementAdvertiseOnSliVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSliVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSliVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSliVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new ApmHttpsManagementAdvertiseOnSliVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: ApmHttpsManagementAdvertiseOnSliVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApmHttpsManagementAdvertiseOnSliVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApmHttpsManagementAdvertiseOnSliVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new ApmHttpsManagementAdvertiseOnSliVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: ApmHttpsManagementAdvertiseOnSliVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#hash_algorithms Apm#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms): any {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling {
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults {
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#certificate_url Apm#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#description Apm#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_hash_algorithms Apm#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable_ocsp_stapling Apm#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#private_key Apm#private_key}
  */
  readonly privateKey: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_system_defaults Apm#use_system_defaults}
  */
  readonly useSystemDefaults?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable): any {
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
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesUseSystemDefaults) {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference {
    return new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#cipher_suites Apm#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#max_version Apm#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#min_version Apm#min_version}
  */
  readonly minVersion?: string;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity): any {
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
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_security Apm#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#low_security Apm#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#medium_security Apm#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_security Apm#custom_security}
  */
  readonly customSecurity?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl): any {
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


export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl): any {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa): any {
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


export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa): any {
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

export class ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_header_elements Apm#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#client_certificate_optional Apm#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_crl Apm#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca_url Apm#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_disabled Apm#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#crl Apm#crl}
  */
  readonly crl?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca Apm#trusted_ca}
  */
  readonly trustedCa?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_options Apm#xfcc_options}
  */
  readonly xfccOptions?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
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
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
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

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloInternetVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_mtls Apm#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_certificates Apm#tls_certificates}
  */
  readonly tlsCertificates: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_config Apm#tls_config}
  */
  readonly tlsConfig?: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_mtls Apm#use_mtls}
  */
  readonly useMtls?: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls;
}

export function apmHttpsManagementAdvertiseOnSloInternetVipToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function apmHttpsManagementAdvertiseOnSloInternetVipToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloInternetVipOutputReference | ApmHttpsManagementAdvertiseOnSloInternetVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(apmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList",
    },
    tls_config: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigList",
    },
    use_mtls: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloInternetVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloInternetVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloInternetVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApmHttpsManagementAdvertiseOnSloInternetVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new ApmHttpsManagementAdvertiseOnSloInternetVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: ApmHttpsManagementAdvertiseOnSloInternetVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#hash_algorithms Apm#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms): any {
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

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling {
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults {
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#certificate_url Apm#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#description Apm#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_hash_algorithms Apm#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable_ocsp_stapling Apm#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#private_key Apm#private_key}
  */
  readonly privateKey: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_system_defaults Apm#use_system_defaults}
  */
  readonly useSystemDefaults?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsCertificatesToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable): any {
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
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesUseSystemDefaults) {
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

export class ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ApmHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference {
    return new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#cipher_suites Apm#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#max_version Apm#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#min_version Apm#min_version}
  */
  readonly minVersion?: string;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity): any {
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
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_security Apm#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#low_security Apm#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#medium_security Apm#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_security Apm#custom_security}
  */
  readonly customSecurity?: ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity;
}

export function apmHttpsManagementAdvertiseOnSloSliTlsConfigToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: apmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliTlsConfigToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloSliTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: ApmHttpsManagementAdvertiseOnSloSliTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloSliUseMtlsCrlToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl): any {
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


export function apmHttpsManagementAdvertiseOnSloSliUseMtlsCrlToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl): any {
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

export class ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa): any {
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


export function apmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa): any {
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

export class ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_header_elements Apm#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function apmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSliUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#client_certificate_optional Apm#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_crl Apm#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca_url Apm#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_disabled Apm#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#crl Apm#crl}
  */
  readonly crl?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca Apm#trusted_ca}
  */
  readonly trustedCa?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_options Apm#xfcc_options}
  */
  readonly xfccOptions?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions;
}

export function apmHttpsManagementAdvertiseOnSloSliUseMtlsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: apmHttpsManagementAdvertiseOnSloSliUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: apmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: apmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliUseMtlsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloSliUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
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
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: apmHttpsManagementAdvertiseOnSloSliUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrlList",
    },
    trusted_ca: {
      value: apmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: apmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSliUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSliUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
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

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: ApmHttpsManagementAdvertiseOnSloSliUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_mtls Apm#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_certificates Apm#tls_certificates}
  */
  readonly tlsCertificates: ApmHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_config Apm#tls_config}
  */
  readonly tlsConfig?: ApmHttpsManagementAdvertiseOnSloSliTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_mtls Apm#use_mtls}
  */
  readonly useMtls?: ApmHttpsManagementAdvertiseOnSloSliUseMtls;
}

export function apmHttpsManagementAdvertiseOnSloSliToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliOutputReference | ApmHttpsManagementAdvertiseOnSloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(apmHttpsManagementAdvertiseOnSloSliTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: apmHttpsManagementAdvertiseOnSloSliTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: apmHttpsManagementAdvertiseOnSloSliUseMtlsToTerraform(struct!.useMtls),
  }
}


export function apmHttpsManagementAdvertiseOnSloSliToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloSliOutputReference | ApmHttpsManagementAdvertiseOnSloSli): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(apmHttpsManagementAdvertiseOnSloSliTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesList",
    },
    tls_config: {
      value: apmHttpsManagementAdvertiseOnSloSliTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliTlsConfigList",
    },
    use_mtls: {
      value: apmHttpsManagementAdvertiseOnSloSliUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloSli | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloSli | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new ApmHttpsManagementAdvertiseOnSloSliTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: ApmHttpsManagementAdvertiseOnSloSliTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApmHttpsManagementAdvertiseOnSloSliTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApmHttpsManagementAdvertiseOnSloSliTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new ApmHttpsManagementAdvertiseOnSloSliUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: ApmHttpsManagementAdvertiseOnSloSliUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#hash_algorithms Apm#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms): any {
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

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling {
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#decryption_provider Apm#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#location Apm#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#store_provider Apm#store_provider}
  */
  readonly storeProvider?: string;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#provider Apm#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#url Apm#url}
  */
  readonly url: string;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#blindfold_secret_info Apm#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#clear_secret_info Apm#clear_secret_info}
  */
  readonly clearSecretInfo?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults {
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#certificate_url Apm#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#description Apm#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_hash_algorithms Apm#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#disable_ocsp_stapling Apm#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#private_key Apm#private_key}
  */
  readonly privateKey: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_system_defaults Apm#use_system_defaults}
  */
  readonly useSystemDefaults?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsCertificatesToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable): any {
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
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesUseSystemDefaults) {
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

export class ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ApmHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference {
    return new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#cipher_suites Apm#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#max_version Apm#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#min_version Apm#min_version}
  */
  readonly minVersion?: string;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity): any {
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
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_security Apm#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#low_security Apm#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#medium_security Apm#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#custom_security Apm#custom_security}
  */
  readonly customSecurity?: ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity;
}

export function apmHttpsManagementAdvertiseOnSloVipTlsConfigToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: apmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipTlsConfigToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference | ApmHttpsManagementAdvertiseOnSloVipTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: ApmHttpsManagementAdvertiseOnSloVipTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloVipUseMtlsCrlToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl): any {
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


export function apmHttpsManagementAdvertiseOnSloVipUseMtlsCrlToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl): any {
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

export class ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#name Apm#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#namespace Apm#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tenant Apm#tenant}
  */
  readonly tenant?: string;
}

export function apmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa): any {
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


export function apmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa): any {
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

export class ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa | undefined) {
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
export interface ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_header_elements Apm#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function apmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVipUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#client_certificate_optional Apm#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_crl Apm#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca_url Apm#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_disabled Apm#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#crl Apm#crl}
  */
  readonly crl?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#trusted_ca Apm#trusted_ca}
  */
  readonly trustedCa?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#xfcc_options Apm#xfcc_options}
  */
  readonly xfccOptions?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions;
}

export function apmHttpsManagementAdvertiseOnSloVipUseMtlsToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: apmHttpsManagementAdvertiseOnSloVipUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: apmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: apmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipUseMtlsToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference | ApmHttpsManagementAdvertiseOnSloVipUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
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
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: apmHttpsManagementAdvertiseOnSloVipUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrlList",
    },
    trusted_ca: {
      value: apmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: apmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVipUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVipUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
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

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: ApmHttpsManagementAdvertiseOnSloVipUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface ApmHttpsManagementAdvertiseOnSloVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#no_mtls Apm#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_certificates Apm#tls_certificates}
  */
  readonly tlsCertificates: ApmHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#tls_config Apm#tls_config}
  */
  readonly tlsConfig?: ApmHttpsManagementAdvertiseOnSloVipTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#use_mtls Apm#use_mtls}
  */
  readonly useMtls?: ApmHttpsManagementAdvertiseOnSloVipUseMtls;
}

export function apmHttpsManagementAdvertiseOnSloVipToTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipOutputReference | ApmHttpsManagementAdvertiseOnSloVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(apmHttpsManagementAdvertiseOnSloVipTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: apmHttpsManagementAdvertiseOnSloVipTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: apmHttpsManagementAdvertiseOnSloVipUseMtlsToTerraform(struct!.useMtls),
  }
}


export function apmHttpsManagementAdvertiseOnSloVipToHclTerraform(struct?: ApmHttpsManagementAdvertiseOnSloVipOutputReference | ApmHttpsManagementAdvertiseOnSloVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(apmHttpsManagementAdvertiseOnSloVipTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesList",
    },
    tls_config: {
      value: apmHttpsManagementAdvertiseOnSloVipTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipTlsConfigList",
    },
    use_mtls: {
      value: apmHttpsManagementAdvertiseOnSloVipUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementAdvertiseOnSloVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagementAdvertiseOnSloVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagementAdvertiseOnSloVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new ApmHttpsManagementAdvertiseOnSloVipTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: ApmHttpsManagementAdvertiseOnSloVipTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new ApmHttpsManagementAdvertiseOnSloVipTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: ApmHttpsManagementAdvertiseOnSloVipTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new ApmHttpsManagementAdvertiseOnSloVipUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: ApmHttpsManagementAdvertiseOnSloVipUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface ApmHttpsManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_internet_default_vip Apm#advertise_on_internet_default_vip}
  */
  readonly advertiseOnInternetDefaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#default_https_port Apm#default_https_port}
  */
  readonly defaultHttpsPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#domain_suffix Apm#domain_suffix}
  */
  readonly domainSuffix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#https_port Apm#https_port}
  */
  readonly httpsPort?: number;
  /**
  * advertise_on_internet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_internet Apm#advertise_on_internet}
  */
  readonly advertiseOnInternet?: ApmHttpsManagementAdvertiseOnInternet;
  /**
  * advertise_on_sli_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_sli_vip Apm#advertise_on_sli_vip}
  */
  readonly advertiseOnSliVip?: ApmHttpsManagementAdvertiseOnSliVip;
  /**
  * advertise_on_slo_internet_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_slo_internet_vip Apm#advertise_on_slo_internet_vip}
  */
  readonly advertiseOnSloInternetVip?: ApmHttpsManagementAdvertiseOnSloInternetVip;
  /**
  * advertise_on_slo_sli block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_slo_sli Apm#advertise_on_slo_sli}
  */
  readonly advertiseOnSloSli?: ApmHttpsManagementAdvertiseOnSloSli;
  /**
  * advertise_on_slo_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#advertise_on_slo_vip Apm#advertise_on_slo_vip}
  */
  readonly advertiseOnSloVip?: ApmHttpsManagementAdvertiseOnSloVip;
}

export function apmHttpsManagementToTerraform(struct?: ApmHttpsManagementOutputReference | ApmHttpsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_internet_default_vip: cdktf.booleanToTerraform(struct!.advertiseOnInternetDefaultVip),
    default_https_port: cdktf.booleanToTerraform(struct!.defaultHttpsPort),
    domain_suffix: cdktf.stringToTerraform(struct!.domainSuffix),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    advertise_on_internet: apmHttpsManagementAdvertiseOnInternetToTerraform(struct!.advertiseOnInternet),
    advertise_on_sli_vip: apmHttpsManagementAdvertiseOnSliVipToTerraform(struct!.advertiseOnSliVip),
    advertise_on_slo_internet_vip: apmHttpsManagementAdvertiseOnSloInternetVipToTerraform(struct!.advertiseOnSloInternetVip),
    advertise_on_slo_sli: apmHttpsManagementAdvertiseOnSloSliToTerraform(struct!.advertiseOnSloSli),
    advertise_on_slo_vip: apmHttpsManagementAdvertiseOnSloVipToTerraform(struct!.advertiseOnSloVip),
  }
}


export function apmHttpsManagementToHclTerraform(struct?: ApmHttpsManagementOutputReference | ApmHttpsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_internet_default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnInternetDefaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_https_port: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHttpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_suffix: {
      value: cdktf.stringToHclTerraform(struct!.domainSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertise_on_internet: {
      value: apmHttpsManagementAdvertiseOnInternetToHclTerraform(struct!.advertiseOnInternet),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnInternetList",
    },
    advertise_on_sli_vip: {
      value: apmHttpsManagementAdvertiseOnSliVipToHclTerraform(struct!.advertiseOnSliVip),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSliVipList",
    },
    advertise_on_slo_internet_vip: {
      value: apmHttpsManagementAdvertiseOnSloInternetVipToHclTerraform(struct!.advertiseOnSloInternetVip),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloInternetVipList",
    },
    advertise_on_slo_sli: {
      value: apmHttpsManagementAdvertiseOnSloSliToHclTerraform(struct!.advertiseOnSloSli),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloSliList",
    },
    advertise_on_slo_vip: {
      value: apmHttpsManagementAdvertiseOnSloVipToHclTerraform(struct!.advertiseOnSloVip),
      isBlock: true,
      type: "list",
      storageClassType: "ApmHttpsManagementAdvertiseOnSloVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApmHttpsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApmHttpsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnInternetDefaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnInternetDefaultVip = this._advertiseOnInternetDefaultVip;
    }
    if (this._defaultHttpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHttpsPort = this._defaultHttpsPort;
    }
    if (this._domainSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainSuffix = this._domainSuffix;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._advertiseOnInternet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnInternet = this._advertiseOnInternet?.internalValue;
    }
    if (this._advertiseOnSliVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSliVip = this._advertiseOnSliVip?.internalValue;
    }
    if (this._advertiseOnSloInternetVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloInternetVip = this._advertiseOnSloInternetVip?.internalValue;
    }
    if (this._advertiseOnSloSli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloSli = this._advertiseOnSloSli?.internalValue;
    }
    if (this._advertiseOnSloVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnSloVip = this._advertiseOnSloVip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApmHttpsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnInternetDefaultVip = undefined;
      this._defaultHttpsPort = undefined;
      this._domainSuffix = undefined;
      this._httpsPort = undefined;
      this._advertiseOnInternet.internalValue = undefined;
      this._advertiseOnSliVip.internalValue = undefined;
      this._advertiseOnSloInternetVip.internalValue = undefined;
      this._advertiseOnSloSli.internalValue = undefined;
      this._advertiseOnSloVip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnInternetDefaultVip = value.advertiseOnInternetDefaultVip;
      this._defaultHttpsPort = value.defaultHttpsPort;
      this._domainSuffix = value.domainSuffix;
      this._httpsPort = value.httpsPort;
      this._advertiseOnInternet.internalValue = value.advertiseOnInternet;
      this._advertiseOnSliVip.internalValue = value.advertiseOnSliVip;
      this._advertiseOnSloInternetVip.internalValue = value.advertiseOnSloInternetVip;
      this._advertiseOnSloSli.internalValue = value.advertiseOnSloSli;
      this._advertiseOnSloVip.internalValue = value.advertiseOnSloVip;
    }
  }

  // advertise_on_internet_default_vip - computed: false, optional: true, required: false
  private _advertiseOnInternetDefaultVip?: boolean | cdktf.IResolvable; 
  public get advertiseOnInternetDefaultVip() {
    return this.getBooleanAttribute('advertise_on_internet_default_vip');
  }
  public set advertiseOnInternetDefaultVip(value: boolean | cdktf.IResolvable) {
    this._advertiseOnInternetDefaultVip = value;
  }
  public resetAdvertiseOnInternetDefaultVip() {
    this._advertiseOnInternetDefaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnInternetDefaultVipInput() {
    return this._advertiseOnInternetDefaultVip;
  }

  // default_https_port - computed: false, optional: true, required: false
  private _defaultHttpsPort?: boolean | cdktf.IResolvable; 
  public get defaultHttpsPort() {
    return this.getBooleanAttribute('default_https_port');
  }
  public set defaultHttpsPort(value: boolean | cdktf.IResolvable) {
    this._defaultHttpsPort = value;
  }
  public resetDefaultHttpsPort() {
    this._defaultHttpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHttpsPortInput() {
    return this._defaultHttpsPort;
  }

  // domain_suffix - computed: false, optional: false, required: true
  private _domainSuffix?: string; 
  public get domainSuffix() {
    return this.getStringAttribute('domain_suffix');
  }
  public set domainSuffix(value: string) {
    this._domainSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainSuffixInput() {
    return this._domainSuffix;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // advertise_on_internet - computed: false, optional: true, required: false
  private _advertiseOnInternet = new ApmHttpsManagementAdvertiseOnInternetOutputReference(this, "advertise_on_internet");
  public get advertiseOnInternet() {
    return this._advertiseOnInternet;
  }
  public putAdvertiseOnInternet(value: ApmHttpsManagementAdvertiseOnInternet) {
    this._advertiseOnInternet.internalValue = value;
  }
  public resetAdvertiseOnInternet() {
    this._advertiseOnInternet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnInternetInput() {
    return this._advertiseOnInternet.internalValue;
  }

  // advertise_on_sli_vip - computed: false, optional: true, required: false
  private _advertiseOnSliVip = new ApmHttpsManagementAdvertiseOnSliVipOutputReference(this, "advertise_on_sli_vip");
  public get advertiseOnSliVip() {
    return this._advertiseOnSliVip;
  }
  public putAdvertiseOnSliVip(value: ApmHttpsManagementAdvertiseOnSliVip) {
    this._advertiseOnSliVip.internalValue = value;
  }
  public resetAdvertiseOnSliVip() {
    this._advertiseOnSliVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSliVipInput() {
    return this._advertiseOnSliVip.internalValue;
  }

  // advertise_on_slo_internet_vip - computed: false, optional: true, required: false
  private _advertiseOnSloInternetVip = new ApmHttpsManagementAdvertiseOnSloInternetVipOutputReference(this, "advertise_on_slo_internet_vip");
  public get advertiseOnSloInternetVip() {
    return this._advertiseOnSloInternetVip;
  }
  public putAdvertiseOnSloInternetVip(value: ApmHttpsManagementAdvertiseOnSloInternetVip) {
    this._advertiseOnSloInternetVip.internalValue = value;
  }
  public resetAdvertiseOnSloInternetVip() {
    this._advertiseOnSloInternetVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloInternetVipInput() {
    return this._advertiseOnSloInternetVip.internalValue;
  }

  // advertise_on_slo_sli - computed: false, optional: true, required: false
  private _advertiseOnSloSli = new ApmHttpsManagementAdvertiseOnSloSliOutputReference(this, "advertise_on_slo_sli");
  public get advertiseOnSloSli() {
    return this._advertiseOnSloSli;
  }
  public putAdvertiseOnSloSli(value: ApmHttpsManagementAdvertiseOnSloSli) {
    this._advertiseOnSloSli.internalValue = value;
  }
  public resetAdvertiseOnSloSli() {
    this._advertiseOnSloSli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloSliInput() {
    return this._advertiseOnSloSli.internalValue;
  }

  // advertise_on_slo_vip - computed: false, optional: true, required: false
  private _advertiseOnSloVip = new ApmHttpsManagementAdvertiseOnSloVipOutputReference(this, "advertise_on_slo_vip");
  public get advertiseOnSloVip() {
    return this._advertiseOnSloVip;
  }
  public putAdvertiseOnSloVip(value: ApmHttpsManagementAdvertiseOnSloVip) {
    this._advertiseOnSloVip.internalValue = value;
  }
  public resetAdvertiseOnSloVip() {
    this._advertiseOnSloVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnSloVipInput() {
    return this._advertiseOnSloVip.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm volterra_apm}
*/
export class Apm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_apm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Apm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Apm to import
  * @param importFromId The id of the existing Apm that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Apm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_apm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/apm volterra_apm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmConfig
  */
  public constructor(scope: Construct, id: string, config: ApmConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_apm',
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
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._awsSiteTypeChoice.internalValue = config.awsSiteTypeChoice;
    this._baremetalSiteTypeChoice.internalValue = config.baremetalSiteTypeChoice;
    this._httpsManagement.internalValue = config.httpsManagement;
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

  // aws_site_type_choice - computed: false, optional: true, required: false
  private _awsSiteTypeChoice = new ApmAwsSiteTypeChoiceOutputReference(this, "aws_site_type_choice");
  public get awsSiteTypeChoice() {
    return this._awsSiteTypeChoice;
  }
  public putAwsSiteTypeChoice(value: ApmAwsSiteTypeChoice) {
    this._awsSiteTypeChoice.internalValue = value;
  }
  public resetAwsSiteTypeChoice() {
    this._awsSiteTypeChoice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSiteTypeChoiceInput() {
    return this._awsSiteTypeChoice.internalValue;
  }

  // baremetal_site_type_choice - computed: false, optional: true, required: false
  private _baremetalSiteTypeChoice = new ApmBaremetalSiteTypeChoiceOutputReference(this, "baremetal_site_type_choice");
  public get baremetalSiteTypeChoice() {
    return this._baremetalSiteTypeChoice;
  }
  public putBaremetalSiteTypeChoice(value: ApmBaremetalSiteTypeChoice) {
    this._baremetalSiteTypeChoice.internalValue = value;
  }
  public resetBaremetalSiteTypeChoice() {
    this._baremetalSiteTypeChoice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baremetalSiteTypeChoiceInput() {
    return this._baremetalSiteTypeChoice.internalValue;
  }

  // https_management - computed: false, optional: true, required: false
  private _httpsManagement = new ApmHttpsManagementOutputReference(this, "https_management");
  public get httpsManagement() {
    return this._httpsManagement;
  }
  public putHttpsManagement(value: ApmHttpsManagement) {
    this._httpsManagement.internalValue = value;
  }
  public resetHttpsManagement() {
    this._httpsManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsManagementInput() {
    return this._httpsManagement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      aws_site_type_choice: apmAwsSiteTypeChoiceToTerraform(this._awsSiteTypeChoice.internalValue),
      baremetal_site_type_choice: apmBaremetalSiteTypeChoiceToTerraform(this._baremetalSiteTypeChoice.internalValue),
      https_management: apmHttpsManagementToTerraform(this._httpsManagement.internalValue),
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
      aws_site_type_choice: {
        value: apmAwsSiteTypeChoiceToHclTerraform(this._awsSiteTypeChoice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmAwsSiteTypeChoiceList",
      },
      baremetal_site_type_choice: {
        value: apmBaremetalSiteTypeChoiceToHclTerraform(this._baremetalSiteTypeChoice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmBaremetalSiteTypeChoiceList",
      },
      https_management: {
        value: apmHttpsManagementToHclTerraform(this._httpsManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApmHttpsManagementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
