// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectedApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#adobe_commerce_connector ProtectedApplication#adobe_commerce_connector}
  */
  readonly adobeCommerceConnector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#annotations ProtectedApplication#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#big_ip_iapp ProtectedApplication#big_ip_iapp}
  */
  readonly bigIpIapp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#custom_connector ProtectedApplication#custom_connector}
  */
  readonly customConnector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#f5_big_ip ProtectedApplication#f5_big_ip}
  */
  readonly f5BigIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#id ProtectedApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#labels ProtectedApplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#namespace ProtectedApplication#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#not_applicable_connector ProtectedApplication#not_applicable_connector}
  */
  readonly notApplicableConnector?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#region ProtectedApplication#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#salesforce_commerce_connector ProtectedApplication#salesforce_commerce_connector}
  */
  readonly salesforceCommerceConnector?: boolean | cdktf.IResolvable;
  /**
  * cloudflare block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#cloudflare ProtectedApplication#cloudflare}
  */
  readonly cloudflare?: ProtectedApplicationCloudflare;
  /**
  * cloudfront block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#cloudfront ProtectedApplication#cloudfront}
  */
  readonly cloudfront?: ProtectedApplicationCloudfront;
}
export interface ProtectedApplicationCloudflareJsInsertAllPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
}

export function protectedApplicationCloudflareJsInsertAllPagesToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesOutputReference | ProtectedApplicationCloudflareJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
  }
}


export function protectedApplicationCloudflareJsInsertAllPagesToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesOutputReference | ProtectedApplicationCloudflareJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertAllPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._jsDownloadPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._jsDownloadPath = value.jsDownloadPath;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }
}
export interface ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata): any {
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


export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata): any {
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

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata | undefined) {
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
export interface ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath;
}

export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareJsInsertAllPagesExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exclude_list ProtectedApplication#exclude_list}
  */
  readonly excludeList?: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function protectedApplicationCloudflareJsInsertAllPagesExceptToTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    exclude_list: cdktf.listMapper(protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function protectedApplicationCloudflareJsInsertAllPagesExceptToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertAllPagesExceptOutputReference | ProtectedApplicationCloudflareJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._jsDownloadPath = undefined;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._jsDownloadPath = value.jsDownloadPath;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: ProtectedApplicationCloudflareJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudflareJsInsertionRulesExcludeListDomainToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomainOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesExcludeListDomainToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomainOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudflareJsInsertionRulesExcludeListMetadataToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadataOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata): any {
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


export function protectedApplicationCloudflareJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadataOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata): any {
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

export class ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata | undefined) {
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
export interface ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudflareJsInsertionRulesExcludeListPathToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListPathOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesExcludeListPathToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListPathOutputReference | ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath;
}

export function protectedApplicationCloudflareJsInsertionRulesExcludeListStructToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: protectedApplicationCloudflareJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudflareJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: protectedApplicationCloudflareJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesExcludeListStructToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: protectedApplicationCloudflareJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: protectedApplicationCloudflareJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: protectedApplicationCloudflareJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ProtectedApplicationCloudflareJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructOutputReference {
    return new ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudflareJsInsertionRulesRulesDomainToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRulesDomainOutputReference | ProtectedApplicationCloudflareJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesRulesDomainToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRulesDomainOutputReference | ProtectedApplicationCloudflareJsInsertionRulesRulesDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesRulesDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudflareJsInsertionRulesRulesMetadataToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRulesMetadataOutputReference | ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata): any {
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


export function protectedApplicationCloudflareJsInsertionRulesRulesMetadataToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRulesMetadataOutputReference | ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata): any {
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

export class ProtectedApplicationCloudflareJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata | undefined) {
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
export interface ProtectedApplicationCloudflareJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_path ProtectedApplication#exact_path}
  */
  readonly exactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#glob ProtectedApplication#glob}
  */
  readonly glob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudflareJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata;
}

export function protectedApplicationCloudflareJsInsertionRulesRulesToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    exact_path: cdktf.stringToTerraform(struct!.exactPath),
    glob: cdktf.stringToTerraform(struct!.glob),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    domain: protectedApplicationCloudflareJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudflareJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesRulesToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesRules | cdktf.IResolvable): any {
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
    exact_path: {
      value: cdktf.stringToHclTerraform(struct!.exactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glob: {
      value: cdktf.stringToHclTerraform(struct!.glob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: protectedApplicationCloudflareJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: protectedApplicationCloudflareJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._exactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactPath = this._exactPath;
    }
    if (this._glob !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._exactPath = undefined;
      this._glob = undefined;
      this._prefix = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._exactPath = value.exactPath;
      this._glob = value.glob;
      this._prefix = value.prefix;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
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

  // exact_path - computed: false, optional: true, required: false
  private _exactPath?: string; 
  public get exactPath() {
    return this.getStringAttribute('exact_path');
  }
  public set exactPath(value: string) {
    this._exactPath = value;
  }
  public resetExactPath() {
    this._exactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactPathInput() {
    return this._exactPath;
  }

  // glob - computed: false, optional: true, required: false
  private _glob?: string; 
  public get glob() {
    return this.getStringAttribute('glob');
  }
  public set glob(value: string) {
    this._glob = value;
  }
  public resetGlob() {
    this._glob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudflareJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudflareJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudflareJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudflareJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ProtectedApplicationCloudflareJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareJsInsertionRulesRulesOutputReference {
    return new ProtectedApplicationCloudflareJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareJsInsertionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exclude_list ProtectedApplication#exclude_list}
  */
  readonly excludeList?: ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#rules ProtectedApplication#rules}
  */
  readonly rules: ProtectedApplicationCloudflareJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function protectedApplicationCloudflareJsInsertionRulesToTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesOutputReference | ProtectedApplicationCloudflareJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    exclude_list: cdktf.listMapper(protectedApplicationCloudflareJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(protectedApplicationCloudflareJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function protectedApplicationCloudflareJsInsertionRulesToHclTerraform(struct?: ProtectedApplicationCloudflareJsInsertionRulesOutputReference | ProtectedApplicationCloudflareJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._jsDownloadPath = undefined;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._jsDownloadPath = value.jsDownloadPath;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new ProtectedApplicationCloudflareJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: ProtectedApplicationCloudflareJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ProtectedApplicationCloudflareJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ProtectedApplicationCloudflareJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ProtectedApplicationCloudflareManualJsInsert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_mode ProtectedApplication#javascript_mode}
  */
  readonly javascriptMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
}

export function protectedApplicationCloudflareManualJsInsertToTerraform(struct?: ProtectedApplicationCloudflareManualJsInsertOutputReference | ProtectedApplicationCloudflareManualJsInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_mode: cdktf.stringToTerraform(struct!.javascriptMode),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
  }
}


export function protectedApplicationCloudflareManualJsInsertToHclTerraform(struct?: ProtectedApplicationCloudflareManualJsInsertOutputReference | ProtectedApplicationCloudflareManualJsInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_mode: {
      value: cdktf.stringToHclTerraform(struct!.javascriptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareManualJsInsertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareManualJsInsert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptMode = this._javascriptMode;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareManualJsInsert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptMode = undefined;
      this._jsDownloadPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptMode = value.javascriptMode;
      this._jsDownloadPath = value.jsDownloadPath;
    }
  }

  // javascript_mode - computed: false, optional: false, required: true
  private _javascriptMode?: string; 
  public get javascriptMode() {
    return this.getStringAttribute('javascript_mode');
  }
  public set javascriptMode(value: string) {
    this._javascriptMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptModeInput() {
    return this._javascriptMode;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }
}
export interface ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact ProtectedApplication#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersToTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersToHclTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersOutputReference {
    return new ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#headers ProtectedApplication#headers}
  */
  readonly headers?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable;
}

export function protectedApplicationCloudflareMobileSdkConfigMobileIdentifierToTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierOutputReference | ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(protectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersToTerraform, true)(struct!.headers),
  }
}


export function protectedApplicationCloudflareMobileSdkConfigMobileIdentifierToHclTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierOutputReference | ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ProtectedApplicationCloudflareMobileSdkConfig {
  /**
  * mobile_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_identifier ProtectedApplication#mobile_identifier}
  */
  readonly mobileIdentifier?: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier;
}

export function protectedApplicationCloudflareMobileSdkConfigToTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigOutputReference | ProtectedApplicationCloudflareMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: protectedApplicationCloudflareMobileSdkConfigMobileIdentifierToTerraform(struct!.mobileIdentifier),
  }
}


export function protectedApplicationCloudflareMobileSdkConfigToHclTerraform(struct?: ProtectedApplicationCloudflareMobileSdkConfigOutputReference | ProtectedApplicationCloudflareMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: protectedApplicationCloudflareMobileSdkConfigMobileIdentifierToHclTerraform(struct!.mobileIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareMobileSdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareMobileSdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareMobileSdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier.internalValue = value.mobileIdentifier;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier = new ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifierOutputReference(this, "mobile_identifier");
  public get mobileIdentifier() {
    return this._mobileIdentifier;
  }
  public putMobileIdentifier(value: ProtectedApplicationCloudflareMobileSdkConfigMobileIdentifier) {
    this._mobileIdentifier.internalValue = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier.internalValue;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudflareProtectedEndpointsDomainToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsDomainOutputReference | ProtectedApplicationCloudflareProtectedEndpointsDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsDomainToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsDomainOutputReference | ProtectedApplicationCloudflareProtectedEndpointsDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudflareProtectedEndpointsMetadataToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMetadataOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMetadata): any {
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


export function protectedApplicationCloudflareProtectedEndpointsMetadataToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMetadataOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMetadata): any {
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

export class ProtectedApplicationCloudflareProtectedEndpointsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsMetadata | undefined) {
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
export interface ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsMobileClientBlockToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlockOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsMobileClientBlockToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlockOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudflareProtectedEndpointsMobileClientContinueToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinueOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsMobileClientContinueToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinueOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsMobileClient {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block ProtectedApplication#block}
  */
  readonly block?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock;
  /**
  * continue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue ProtectedApplication#continue}
  */
  readonly continue?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue;
}

export function protectedApplicationCloudflareProtectedEndpointsMobileClientToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: protectedApplicationCloudflareProtectedEndpointsMobileClientBlockToTerraform(struct!.block),
    continue: protectedApplicationCloudflareProtectedEndpointsMobileClientContinueToTerraform(struct!.continue),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsMobileClientToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsMobileClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: protectedApplicationCloudflareProtectedEndpointsMobileClientBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlockList",
    },
    continue: {
      value: protectedApplicationCloudflareProtectedEndpointsMobileClientContinueToHclTerraform(struct!.continue),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsMobileClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsMobileClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._continue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block.internalValue = undefined;
      this._continue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block.internalValue = value.block;
      this._continue.internalValue = value.continue;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClientBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // continue - computed: false, optional: true, required: false
  private _continue = new ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinueOutputReference(this, "continue");
  public get continue() {
    return this._continue;
  }
  public putContinue(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClientContinue) {
    this._continue.internalValue = value;
  }
  public resetContinue() {
    this._continue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue.internalValue;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#caseinsensitive ProtectedApplication#caseinsensitive}
  */
  readonly caseinsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: string;
}

export function protectedApplicationCloudflareProtectedEndpointsPathToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsPathOutputReference | ProtectedApplicationCloudflareProtectedEndpointsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caseinsensitive: cdktf.booleanToTerraform(struct!.caseinsensitive),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsPathToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsPathOutputReference | ProtectedApplicationCloudflareProtectedEndpointsPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caseinsensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseinsensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ProtectedApplicationCloudflareProtectedEndpointsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseinsensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseinsensitive = this._caseinsensitive;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseinsensitive = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseinsensitive = value.caseinsensitive;
      this._path = value.path;
    }
  }

  // caseinsensitive - computed: false, optional: true, required: false
  private _caseinsensitive?: boolean | cdktf.IResolvable; 
  public get caseinsensitive() {
    return this.getBooleanAttribute('caseinsensitive');
  }
  public set caseinsensitive(value: boolean | cdktf.IResolvable) {
    this._caseinsensitive = value;
  }
  public resetCaseinsensitive() {
    this._caseinsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseinsensitiveInput() {
    return this._caseinsensitive;
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
export interface ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsWebClientBlockToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientBlockOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebClientBlockToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientBlockOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebClientBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudflareProtectedEndpointsWebClientContinueToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientContinueOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebClientContinueToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientContinueOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebClientContinueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#location ProtectedApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsWebClientRedirectToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirectOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebClientRedirectToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirectOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebClient {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block ProtectedApplication#block}
  */
  readonly block?: ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock;
  /**
  * continue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue ProtectedApplication#continue}
  */
  readonly continue?: ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#redirect ProtectedApplication#redirect}
  */
  readonly redirect?: ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect;
}

export function protectedApplicationCloudflareProtectedEndpointsWebClientToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: protectedApplicationCloudflareProtectedEndpointsWebClientBlockToTerraform(struct!.block),
    continue: protectedApplicationCloudflareProtectedEndpointsWebClientContinueToTerraform(struct!.continue),
    redirect: protectedApplicationCloudflareProtectedEndpointsWebClientRedirectToTerraform(struct!.redirect),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebClientToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: protectedApplicationCloudflareProtectedEndpointsWebClientBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebClientBlockList",
    },
    continue: {
      value: protectedApplicationCloudflareProtectedEndpointsWebClientContinueToHclTerraform(struct!.continue),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebClientContinueList",
    },
    redirect: {
      value: protectedApplicationCloudflareProtectedEndpointsWebClientRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._continue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block.internalValue = undefined;
      this._continue.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block.internalValue = value.block;
      this._continue.internalValue = value.continue;
      this._redirect.internalValue = value.redirect;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new ProtectedApplicationCloudflareProtectedEndpointsWebClientBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // continue - computed: false, optional: true, required: false
  private _continue = new ProtectedApplicationCloudflareProtectedEndpointsWebClientContinueOutputReference(this, "continue");
  public get continue() {
    return this._continue;
  }
  public putContinue(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientContinue) {
    this._continue.internalValue = value;
  }
  public resetContinue() {
    this._continue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ProtectedApplicationCloudflareProtectedEndpointsWebClientRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#location ProtectedApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient {
  /**
  * block_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block_mobile ProtectedApplication#block_mobile}
  */
  readonly blockMobile?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile;
  /**
  * block_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block_web ProtectedApplication#block_web}
  */
  readonly blockWeb?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb;
  /**
  * continue_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_mobile ProtectedApplication#continue_mobile}
  */
  readonly continueMobile?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile;
  /**
  * continue_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_web ProtectedApplication#continue_web}
  */
  readonly continueWeb?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb;
  /**
  * redirect_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#redirect_web ProtectedApplication#redirect_web}
  */
  readonly redirectWeb?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb;
}

export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_mobile: protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileToTerraform(struct!.blockMobile),
    block_web: protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebToTerraform(struct!.blockWeb),
    continue_mobile: protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileToTerraform(struct!.continueMobile),
    continue_web: protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebToTerraform(struct!.continueWeb),
    redirect_web: protectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebToTerraform(struct!.redirectWeb),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsWebMobileClientToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientOutputReference | ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_mobile: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileToHclTerraform(struct!.blockMobile),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileList",
    },
    block_web: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebToHclTerraform(struct!.blockWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebList",
    },
    continue_mobile: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileToHclTerraform(struct!.continueMobile),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileList",
    },
    continue_web: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebToHclTerraform(struct!.continueWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebList",
    },
    redirect_web: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebToHclTerraform(struct!.redirectWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMobile = this._blockMobile?.internalValue;
    }
    if (this._blockWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockWeb = this._blockWeb?.internalValue;
    }
    if (this._continueMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueMobile = this._continueMobile?.internalValue;
    }
    if (this._continueWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueWeb = this._continueWeb?.internalValue;
    }
    if (this._redirectWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectWeb = this._redirectWeb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockMobile.internalValue = undefined;
      this._blockWeb.internalValue = undefined;
      this._continueMobile.internalValue = undefined;
      this._continueWeb.internalValue = undefined;
      this._redirectWeb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockMobile.internalValue = value.blockMobile;
      this._blockWeb.internalValue = value.blockWeb;
      this._continueMobile.internalValue = value.continueMobile;
      this._continueWeb.internalValue = value.continueWeb;
      this._redirectWeb.internalValue = value.redirectWeb;
    }
  }

  // block_mobile - computed: false, optional: true, required: false
  private _blockMobile = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobileOutputReference(this, "block_mobile");
  public get blockMobile() {
    return this._blockMobile;
  }
  public putBlockMobile(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockMobile) {
    this._blockMobile.internalValue = value;
  }
  public resetBlockMobile() {
    this._blockMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMobileInput() {
    return this._blockMobile.internalValue;
  }

  // block_web - computed: false, optional: true, required: false
  private _blockWeb = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWebOutputReference(this, "block_web");
  public get blockWeb() {
    return this._blockWeb;
  }
  public putBlockWeb(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientBlockWeb) {
    this._blockWeb.internalValue = value;
  }
  public resetBlockWeb() {
    this._blockWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockWebInput() {
    return this._blockWeb.internalValue;
  }

  // continue_mobile - computed: false, optional: true, required: false
  private _continueMobile = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobileOutputReference(this, "continue_mobile");
  public get continueMobile() {
    return this._continueMobile;
  }
  public putContinueMobile(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueMobile) {
    this._continueMobile.internalValue = value;
  }
  public resetContinueMobile() {
    this._continueMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueMobileInput() {
    return this._continueMobile.internalValue;
  }

  // continue_web - computed: false, optional: true, required: false
  private _continueWeb = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWebOutputReference(this, "continue_web");
  public get continueWeb() {
    return this._continueWeb;
  }
  public putContinueWeb(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientContinueWeb) {
    this._continueWeb.internalValue = value;
  }
  public resetContinueWeb() {
    this._continueWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueWebInput() {
    return this._continueWeb.internalValue;
  }

  // redirect_web - computed: false, optional: true, required: false
  private _redirectWeb = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWebOutputReference(this, "redirect_web");
  public get redirectWeb() {
    return this._redirectWeb;
  }
  public putRedirectWeb(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientRedirectWeb) {
    this._redirectWeb.internalValue = value;
  }
  public resetRedirectWeb() {
    this._redirectWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectWebInput() {
    return this._redirectWeb.internalValue;
  }
}
export interface ProtectedApplicationCloudflareProtectedEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#http_methods ProtectedApplication#http_methods}
  */
  readonly httpMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#query ProtectedApplication#query}
  */
  readonly query?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudflareProtectedEndpointsDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudflareProtectedEndpointsMetadata;
  /**
  * mobile_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_client ProtectedApplication#mobile_client}
  */
  readonly mobileClient?: ProtectedApplicationCloudflareProtectedEndpointsMobileClient;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: ProtectedApplicationCloudflareProtectedEndpointsPath;
  /**
  * web_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#web_client ProtectedApplication#web_client}
  */
  readonly webClient?: ProtectedApplicationCloudflareProtectedEndpointsWebClient;
  /**
  * web_mobile_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#web_mobile_client ProtectedApplication#web_mobile_client}
  */
  readonly webMobileClient?: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient;
}

export function protectedApplicationCloudflareProtectedEndpointsToTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    query: cdktf.stringToTerraform(struct!.query),
    domain: protectedApplicationCloudflareProtectedEndpointsDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudflareProtectedEndpointsMetadataToTerraform(struct!.metadata),
    mobile_client: protectedApplicationCloudflareProtectedEndpointsMobileClientToTerraform(struct!.mobileClient),
    path: protectedApplicationCloudflareProtectedEndpointsPathToTerraform(struct!.path),
    web_client: protectedApplicationCloudflareProtectedEndpointsWebClientToTerraform(struct!.webClient),
    web_mobile_client: protectedApplicationCloudflareProtectedEndpointsWebMobileClientToTerraform(struct!.webMobileClient),
  }
}


export function protectedApplicationCloudflareProtectedEndpointsToHclTerraform(struct?: ProtectedApplicationCloudflareProtectedEndpoints | cdktf.IResolvable): any {
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
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: protectedApplicationCloudflareProtectedEndpointsDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsDomainList",
    },
    metadata: {
      value: protectedApplicationCloudflareProtectedEndpointsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsMetadataList",
    },
    mobile_client: {
      value: protectedApplicationCloudflareProtectedEndpointsMobileClientToHclTerraform(struct!.mobileClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsMobileClientList",
    },
    path: {
      value: protectedApplicationCloudflareProtectedEndpointsPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsPathList",
    },
    web_client: {
      value: protectedApplicationCloudflareProtectedEndpointsWebClientToHclTerraform(struct!.webClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebClientList",
    },
    web_mobile_client: {
      value: protectedApplicationCloudflareProtectedEndpointsWebMobileClientToHclTerraform(struct!.webMobileClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareProtectedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareProtectedEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mobileClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileClient = this._mobileClient?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._webClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webClient = this._webClient?.internalValue;
    }
    if (this._webMobileClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webMobileClient = this._webMobileClient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareProtectedEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._httpMethods = undefined;
      this._query = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._mobileClient.internalValue = undefined;
      this._path.internalValue = undefined;
      this._webClient.internalValue = undefined;
      this._webMobileClient.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._httpMethods = value.httpMethods;
      this._query = value.query;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._mobileClient.internalValue = value.mobileClient;
      this._path.internalValue = value.path;
      this._webClient.internalValue = value.webClient;
      this._webMobileClient.internalValue = value.webMobileClient;
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

  // http_methods - computed: false, optional: false, required: true
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudflareProtectedEndpointsDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudflareProtectedEndpointsDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudflareProtectedEndpointsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudflareProtectedEndpointsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mobile_client - computed: false, optional: true, required: false
  private _mobileClient = new ProtectedApplicationCloudflareProtectedEndpointsMobileClientOutputReference(this, "mobile_client");
  public get mobileClient() {
    return this._mobileClient;
  }
  public putMobileClient(value: ProtectedApplicationCloudflareProtectedEndpointsMobileClient) {
    this._mobileClient.internalValue = value;
  }
  public resetMobileClient() {
    this._mobileClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileClientInput() {
    return this._mobileClient.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ProtectedApplicationCloudflareProtectedEndpointsPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ProtectedApplicationCloudflareProtectedEndpointsPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // web_client - computed: false, optional: true, required: false
  private _webClient = new ProtectedApplicationCloudflareProtectedEndpointsWebClientOutputReference(this, "web_client");
  public get webClient() {
    return this._webClient;
  }
  public putWebClient(value: ProtectedApplicationCloudflareProtectedEndpointsWebClient) {
    this._webClient.internalValue = value;
  }
  public resetWebClient() {
    this._webClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webClientInput() {
    return this._webClient.internalValue;
  }

  // web_mobile_client - computed: false, optional: true, required: false
  private _webMobileClient = new ProtectedApplicationCloudflareProtectedEndpointsWebMobileClientOutputReference(this, "web_mobile_client");
  public get webMobileClient() {
    return this._webMobileClient;
  }
  public putWebMobileClient(value: ProtectedApplicationCloudflareProtectedEndpointsWebMobileClient) {
    this._webMobileClient.internalValue = value;
  }
  public resetWebMobileClient() {
    this._webMobileClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webMobileClientInput() {
    return this._webMobileClient.internalValue;
  }
}

export class ProtectedApplicationCloudflareProtectedEndpointsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareProtectedEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareProtectedEndpointsOutputReference {
    return new ProtectedApplicationCloudflareProtectedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact ProtectedApplication#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudflareTrustedClientsHttpHeaderHeadersToTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudflareTrustedClientsHttpHeaderHeadersToHclTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersOutputReference {
    return new ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflareTrustedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#headers ProtectedApplication#headers}
  */
  readonly headers: ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function protectedApplicationCloudflareTrustedClientsHttpHeaderToTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsHttpHeaderOutputReference | ProtectedApplicationCloudflareTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(protectedApplicationCloudflareTrustedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function protectedApplicationCloudflareTrustedClientsHttpHeaderToHclTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsHttpHeaderOutputReference | ProtectedApplicationCloudflareTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareTrustedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareTrustedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareTrustedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareTrustedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ProtectedApplicationCloudflareTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ProtectedApplicationCloudflareTrustedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudflareTrustedClientsMetadataToTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsMetadataOutputReference | ProtectedApplicationCloudflareTrustedClientsMetadata): any {
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


export function protectedApplicationCloudflareTrustedClientsMetadataToHclTerraform(struct?: ProtectedApplicationCloudflareTrustedClientsMetadataOutputReference | ProtectedApplicationCloudflareTrustedClientsMetadata): any {
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

export class ProtectedApplicationCloudflareTrustedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflareTrustedClientsMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudflareTrustedClientsMetadata | undefined) {
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
export interface ProtectedApplicationCloudflareTrustedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#ip_prefix ProtectedApplication#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#http_header ProtectedApplication#http_header}
  */
  readonly httpHeader?: ProtectedApplicationCloudflareTrustedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudflareTrustedClientsMetadata;
}

export function protectedApplicationCloudflareTrustedClientsToTerraform(struct?: ProtectedApplicationCloudflareTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    http_header: protectedApplicationCloudflareTrustedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: protectedApplicationCloudflareTrustedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function protectedApplicationCloudflareTrustedClientsToHclTerraform(struct?: ProtectedApplicationCloudflareTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: protectedApplicationCloudflareTrustedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareTrustedClientsHttpHeaderList",
    },
    metadata: {
      value: protectedApplicationCloudflareTrustedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareTrustedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareTrustedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudflareTrustedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflareTrustedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPrefix = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPrefix = value.ipPrefix;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new ProtectedApplicationCloudflareTrustedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: ProtectedApplicationCloudflareTrustedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudflareTrustedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudflareTrustedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ProtectedApplicationCloudflareTrustedClientsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudflareTrustedClients[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudflareTrustedClientsOutputReference {
    return new ProtectedApplicationCloudflareTrustedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudflare {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_mitigation_action_hdr ProtectedApplication#continue_mitigation_action_hdr}
  */
  readonly continueMitigationActionHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_js_insert ProtectedApplication#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_mobile_sdk ProtectedApplication#disable_mobile_sdk}
  */
  readonly disableMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#loglevel ProtectedApplication#loglevel}
  */
  readonly loglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#timeout ProtectedApplication#timeout}
  */
  readonly timeout?: number;
  /**
  * js_insert_all_pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insert_all_pages ProtectedApplication#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: ProtectedApplicationCloudflareJsInsertAllPages;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insert_all_pages_except ProtectedApplication#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: ProtectedApplicationCloudflareJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insertion_rules ProtectedApplication#js_insertion_rules}
  */
  readonly jsInsertionRules?: ProtectedApplicationCloudflareJsInsertionRules;
  /**
  * manual_js_insert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#manual_js_insert ProtectedApplication#manual_js_insert}
  */
  readonly manualJsInsert?: ProtectedApplicationCloudflareManualJsInsert;
  /**
  * mobile_sdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_sdk_config ProtectedApplication#mobile_sdk_config}
  */
  readonly mobileSdkConfig?: ProtectedApplicationCloudflareMobileSdkConfig;
  /**
  * protected_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#protected_endpoints ProtectedApplication#protected_endpoints}
  */
  readonly protectedEndpoints: ProtectedApplicationCloudflareProtectedEndpoints[] | cdktf.IResolvable;
  /**
  * trusted_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#trusted_clients ProtectedApplication#trusted_clients}
  */
  readonly trustedClients?: ProtectedApplicationCloudflareTrustedClients[] | cdktf.IResolvable;
}

export function protectedApplicationCloudflareToTerraform(struct?: ProtectedApplicationCloudflareOutputReference | ProtectedApplicationCloudflare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_mitigation_action_hdr: cdktf.stringToTerraform(struct!.continueMitigationActionHdr),
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    disable_mobile_sdk: cdktf.booleanToTerraform(struct!.disableMobileSdk),
    loglevel: cdktf.stringToTerraform(struct!.loglevel),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    js_insert_all_pages: protectedApplicationCloudflareJsInsertAllPagesToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: protectedApplicationCloudflareJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: protectedApplicationCloudflareJsInsertionRulesToTerraform(struct!.jsInsertionRules),
    manual_js_insert: protectedApplicationCloudflareManualJsInsertToTerraform(struct!.manualJsInsert),
    mobile_sdk_config: protectedApplicationCloudflareMobileSdkConfigToTerraform(struct!.mobileSdkConfig),
    protected_endpoints: cdktf.listMapper(protectedApplicationCloudflareProtectedEndpointsToTerraform, true)(struct!.protectedEndpoints),
    trusted_clients: cdktf.listMapper(protectedApplicationCloudflareTrustedClientsToTerraform, true)(struct!.trustedClients),
  }
}


export function protectedApplicationCloudflareToHclTerraform(struct?: ProtectedApplicationCloudflareOutputReference | ProtectedApplicationCloudflare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_mitigation_action_hdr: {
      value: cdktf.stringToHclTerraform(struct!.continueMitigationActionHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.disableMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loglevel: {
      value: cdktf.stringToHclTerraform(struct!.loglevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    js_insert_all_pages: {
      value: protectedApplicationCloudflareJsInsertAllPagesToHclTerraform(struct!.jsInsertAllPages),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesList",
    },
    js_insert_all_pages_except: {
      value: protectedApplicationCloudflareJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: protectedApplicationCloudflareJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareJsInsertionRulesList",
    },
    manual_js_insert: {
      value: protectedApplicationCloudflareManualJsInsertToHclTerraform(struct!.manualJsInsert),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareManualJsInsertList",
    },
    mobile_sdk_config: {
      value: protectedApplicationCloudflareMobileSdkConfigToHclTerraform(struct!.mobileSdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareMobileSdkConfigList",
    },
    protected_endpoints: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareProtectedEndpointsToHclTerraform, true)(struct!.protectedEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareProtectedEndpointsList",
    },
    trusted_clients: {
      value: cdktf.listMapperHcl(protectedApplicationCloudflareTrustedClientsToHclTerraform, true)(struct!.trustedClients),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudflareTrustedClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudflareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudflare | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueMitigationActionHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueMitigationActionHdr = this._continueMitigationActionHdr;
    }
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._disableMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMobileSdk = this._disableMobileSdk;
    }
    if (this._loglevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loglevel = this._loglevel;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._jsInsertAllPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages?.internalValue;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    if (this._manualJsInsert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualJsInsert = this._manualJsInsert?.internalValue;
    }
    if (this._mobileSdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSdkConfig = this._mobileSdkConfig?.internalValue;
    }
    if (this._protectedEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedEndpoints = this._protectedEndpoints?.internalValue;
    }
    if (this._trustedClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedClients = this._trustedClients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudflare | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueMitigationActionHdr = undefined;
      this._disableJsInsert = undefined;
      this._disableMobileSdk = undefined;
      this._loglevel = undefined;
      this._timeout = undefined;
      this._jsInsertAllPages.internalValue = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
      this._manualJsInsert.internalValue = undefined;
      this._mobileSdkConfig.internalValue = undefined;
      this._protectedEndpoints.internalValue = undefined;
      this._trustedClients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueMitigationActionHdr = value.continueMitigationActionHdr;
      this._disableJsInsert = value.disableJsInsert;
      this._disableMobileSdk = value.disableMobileSdk;
      this._loglevel = value.loglevel;
      this._timeout = value.timeout;
      this._jsInsertAllPages.internalValue = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
      this._manualJsInsert.internalValue = value.manualJsInsert;
      this._mobileSdkConfig.internalValue = value.mobileSdkConfig;
      this._protectedEndpoints.internalValue = value.protectedEndpoints;
      this._trustedClients.internalValue = value.trustedClients;
    }
  }

  // continue_mitigation_action_hdr - computed: false, optional: true, required: false
  private _continueMitigationActionHdr?: string; 
  public get continueMitigationActionHdr() {
    return this.getStringAttribute('continue_mitigation_action_hdr');
  }
  public set continueMitigationActionHdr(value: string) {
    this._continueMitigationActionHdr = value;
  }
  public resetContinueMitigationActionHdr() {
    this._continueMitigationActionHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueMitigationActionHdrInput() {
    return this._continueMitigationActionHdr;
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // disable_mobile_sdk - computed: false, optional: true, required: false
  private _disableMobileSdk?: boolean | cdktf.IResolvable; 
  public get disableMobileSdk() {
    return this.getBooleanAttribute('disable_mobile_sdk');
  }
  public set disableMobileSdk(value: boolean | cdktf.IResolvable) {
    this._disableMobileSdk = value;
  }
  public resetDisableMobileSdk() {
    this._disableMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMobileSdkInput() {
    return this._disableMobileSdk;
  }

  // loglevel - computed: false, optional: true, required: false
  private _loglevel?: string; 
  public get loglevel() {
    return this.getStringAttribute('loglevel');
  }
  public set loglevel(value: string) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages = new ProtectedApplicationCloudflareJsInsertAllPagesOutputReference(this, "js_insert_all_pages");
  public get jsInsertAllPages() {
    return this._jsInsertAllPages;
  }
  public putJsInsertAllPages(value: ProtectedApplicationCloudflareJsInsertAllPages) {
    this._jsInsertAllPages.internalValue = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages.internalValue;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new ProtectedApplicationCloudflareJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: ProtectedApplicationCloudflareJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new ProtectedApplicationCloudflareJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: ProtectedApplicationCloudflareJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }

  // manual_js_insert - computed: false, optional: true, required: false
  private _manualJsInsert = new ProtectedApplicationCloudflareManualJsInsertOutputReference(this, "manual_js_insert");
  public get manualJsInsert() {
    return this._manualJsInsert;
  }
  public putManualJsInsert(value: ProtectedApplicationCloudflareManualJsInsert) {
    this._manualJsInsert.internalValue = value;
  }
  public resetManualJsInsert() {
    this._manualJsInsert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualJsInsertInput() {
    return this._manualJsInsert.internalValue;
  }

  // mobile_sdk_config - computed: false, optional: true, required: false
  private _mobileSdkConfig = new ProtectedApplicationCloudflareMobileSdkConfigOutputReference(this, "mobile_sdk_config");
  public get mobileSdkConfig() {
    return this._mobileSdkConfig;
  }
  public putMobileSdkConfig(value: ProtectedApplicationCloudflareMobileSdkConfig) {
    this._mobileSdkConfig.internalValue = value;
  }
  public resetMobileSdkConfig() {
    this._mobileSdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSdkConfigInput() {
    return this._mobileSdkConfig.internalValue;
  }

  // protected_endpoints - computed: false, optional: false, required: true
  private _protectedEndpoints = new ProtectedApplicationCloudflareProtectedEndpointsList(this, "protected_endpoints", false);
  public get protectedEndpoints() {
    return this._protectedEndpoints;
  }
  public putProtectedEndpoints(value: ProtectedApplicationCloudflareProtectedEndpoints[] | cdktf.IResolvable) {
    this._protectedEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedEndpointsInput() {
    return this._protectedEndpoints.internalValue;
  }

  // trusted_clients - computed: false, optional: true, required: false
  private _trustedClients = new ProtectedApplicationCloudflareTrustedClientsList(this, "trusted_clients", false);
  public get trustedClients() {
    return this._trustedClients;
  }
  public putTrustedClients(value: ProtectedApplicationCloudflareTrustedClients[] | cdktf.IResolvable) {
    this._trustedClients.internalValue = value;
  }
  public resetTrustedClients() {
    this._trustedClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientsInput() {
    return this._trustedClients.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontAwsConfigurationIdSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#ids ProtectedApplication#ids}
  */
  readonly ids: string[];
}

export function protectedApplicationCloudfrontAwsConfigurationIdSelectorToTerraform(struct?: ProtectedApplicationCloudfrontAwsConfigurationIdSelectorOutputReference | ProtectedApplicationCloudfrontAwsConfigurationIdSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ids),
  }
}


export function protectedApplicationCloudfrontAwsConfigurationIdSelectorToHclTerraform(struct?: ProtectedApplicationCloudfrontAwsConfigurationIdSelectorOutputReference | ProtectedApplicationCloudfrontAwsConfigurationIdSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontAwsConfigurationIdSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontAwsConfigurationIdSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ids !== undefined) {
      hasAnyValues = true;
      internalValueResult.ids = this._ids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontAwsConfigurationIdSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ids = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ids = value.ids;
    }
  }

  // ids - computed: false, optional: false, required: true
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }
}
export interface ProtectedApplicationCloudfrontAwsConfigurationTagSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#tags ProtectedApplication#tags}
  */
  readonly tags: { [key: string]: string };
}

export function protectedApplicationCloudfrontAwsConfigurationTagSelectorToTerraform(struct?: ProtectedApplicationCloudfrontAwsConfigurationTagSelectorOutputReference | ProtectedApplicationCloudfrontAwsConfigurationTagSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function protectedApplicationCloudfrontAwsConfigurationTagSelectorToHclTerraform(struct?: ProtectedApplicationCloudfrontAwsConfigurationTagSelectorOutputReference | ProtectedApplicationCloudfrontAwsConfigurationTagSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontAwsConfigurationTagSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontAwsConfigurationTagSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontAwsConfigurationTagSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
    }
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertAllPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
}

export function protectedApplicationCloudfrontJsInsertAllPagesToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesOutputReference | ProtectedApplicationCloudfrontJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
  }
}


export function protectedApplicationCloudfrontJsInsertAllPagesToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesOutputReference | ProtectedApplicationCloudfrontJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._jsDownloadPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._jsDownloadPath = value.jsDownloadPath;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata): any {
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


export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata): any {
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

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata | undefined) {
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
export interface ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath;
}

export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontJsInsertAllPagesExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exclude_list ProtectedApplication#exclude_list}
  */
  readonly excludeList?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontJsInsertAllPagesExceptToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    exclude_list: cdktf.listMapper(protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function protectedApplicationCloudfrontJsInsertAllPagesExceptToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertAllPagesExceptOutputReference | ProtectedApplicationCloudfrontJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._jsDownloadPath = undefined;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._jsDownloadPath = value.jsDownloadPath;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: ProtectedApplicationCloudfrontJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudfrontJsInsertionRulesExcludeListDomainToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomainOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesExcludeListDomainToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomainOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata): any {
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


export function protectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata): any {
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

export class ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata | undefined) {
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
export interface ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudfrontJsInsertionRulesExcludeListPathToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPathOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesExcludeListPathToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPathOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath;
}

export function protectedApplicationCloudfrontJsInsertionRulesExcludeListStructToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: protectedApplicationCloudfrontJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: protectedApplicationCloudfrontJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesExcludeListStructToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: protectedApplicationCloudfrontJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: protectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: protectedApplicationCloudfrontJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructOutputReference {
    return new ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudfrontJsInsertionRulesRulesDomainToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRulesDomainOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesRulesDomainToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRulesDomainOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudfrontJsInsertionRulesRulesMetadataToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata): any {
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


export function protectedApplicationCloudfrontJsInsertionRulesRulesMetadataToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadataOutputReference | ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata): any {
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

export class ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata | undefined) {
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
export interface ProtectedApplicationCloudfrontJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_path ProtectedApplication#exact_path}
  */
  readonly exactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#glob ProtectedApplication#glob}
  */
  readonly glob?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#prefix ProtectedApplication#prefix}
  */
  readonly prefix?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata;
}

export function protectedApplicationCloudfrontJsInsertionRulesRulesToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    exact_path: cdktf.stringToTerraform(struct!.exactPath),
    glob: cdktf.stringToTerraform(struct!.glob),
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    domain: protectedApplicationCloudfrontJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: protectedApplicationCloudfrontJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesRulesToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesRules | cdktf.IResolvable): any {
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
    exact_path: {
      value: cdktf.stringToHclTerraform(struct!.exactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glob: {
      value: cdktf.stringToHclTerraform(struct!.glob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: protectedApplicationCloudfrontJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: protectedApplicationCloudfrontJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._exactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactPath = this._exactPath;
    }
    if (this._glob !== undefined) {
      hasAnyValues = true;
      internalValueResult.glob = this._glob;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._exactPath = undefined;
      this._glob = undefined;
      this._path = undefined;
      this._prefix = undefined;
      this._domain.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._exactPath = value.exactPath;
      this._glob = value.glob;
      this._path = value.path;
      this._prefix = value.prefix;
      this._domain.internalValue = value.domain;
      this._metadata.internalValue = value.metadata;
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

  // exact_path - computed: false, optional: true, required: false
  private _exactPath?: string; 
  public get exactPath() {
    return this.getStringAttribute('exact_path');
  }
  public set exactPath(value: string) {
    this._exactPath = value;
  }
  public resetExactPath() {
    this._exactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactPathInput() {
    return this._exactPath;
  }

  // glob - computed: false, optional: true, required: false
  private _glob?: string; 
  public get glob() {
    return this.getStringAttribute('glob');
  }
  public set glob(value: string) {
    this._glob = value;
  }
  public resetGlob() {
    this._glob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globInput() {
    return this._glob;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudfrontJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudfrontJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudfrontJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ProtectedApplicationCloudfrontJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontJsInsertionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontJsInsertionRulesRulesOutputReference {
    return new ProtectedApplicationCloudfrontJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontJsInsertionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_location ProtectedApplication#javascript_location}
  */
  readonly javascriptLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_mode ProtectedApplication#javascript_mode}
  */
  readonly javascriptMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exclude_list ProtectedApplication#exclude_list}
  */
  readonly excludeList?: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#rules ProtectedApplication#rules}
  */
  readonly rules: ProtectedApplicationCloudfrontJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontJsInsertionRulesToTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesOutputReference | ProtectedApplicationCloudfrontJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    javascript_mode: cdktf.stringToTerraform(struct!.javascriptMode),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    exclude_list: cdktf.listMapper(protectedApplicationCloudfrontJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(protectedApplicationCloudfrontJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function protectedApplicationCloudfrontJsInsertionRulesToHclTerraform(struct?: ProtectedApplicationCloudfrontJsInsertionRulesOutputReference | ProtectedApplicationCloudfrontJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript_mode: {
      value: cdktf.stringToHclTerraform(struct!.javascriptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._javascriptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptMode = this._javascriptMode;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._javascriptMode = undefined;
      this._jsDownloadPath = undefined;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._javascriptMode = value.javascriptMode;
      this._jsDownloadPath = value.jsDownloadPath;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // javascript_location - computed: false, optional: false, required: true
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // javascript_mode - computed: false, optional: false, required: true
  private _javascriptMode?: string; 
  public get javascriptMode() {
    return this.getStringAttribute('javascript_mode');
  }
  public set javascriptMode(value: string) {
    this._javascriptMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptModeInput() {
    return this._javascriptMode;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: ProtectedApplicationCloudfrontJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ProtectedApplicationCloudfrontJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ProtectedApplicationCloudfrontJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontManualJsInsert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#javascript_mode ProtectedApplication#javascript_mode}
  */
  readonly javascriptMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
}

export function protectedApplicationCloudfrontManualJsInsertToTerraform(struct?: ProtectedApplicationCloudfrontManualJsInsertOutputReference | ProtectedApplicationCloudfrontManualJsInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_mode: cdktf.stringToTerraform(struct!.javascriptMode),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
  }
}


export function protectedApplicationCloudfrontManualJsInsertToHclTerraform(struct?: ProtectedApplicationCloudfrontManualJsInsertOutputReference | ProtectedApplicationCloudfrontManualJsInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_mode: {
      value: cdktf.stringToHclTerraform(struct!.javascriptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontManualJsInsertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontManualJsInsert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptMode = this._javascriptMode;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontManualJsInsert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptMode = undefined;
      this._jsDownloadPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptMode = value.javascriptMode;
      this._jsDownloadPath = value.jsDownloadPath;
    }
  }

  // javascript_mode - computed: false, optional: false, required: true
  private _javascriptMode?: string; 
  public get javascriptMode() {
    return this.getStringAttribute('javascript_mode');
  }
  public set javascriptMode(value: string) {
    this._javascriptMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptModeInput() {
    return this._javascriptMode;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }
}
export interface ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact ProtectedApplication#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersToTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersToHclTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersOutputReference {
    return new ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#headers ProtectedApplication#headers}
  */
  readonly headers?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierToTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierOutputReference | ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersToTerraform, true)(struct!.headers),
  }
}


export function protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierToHclTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierOutputReference | ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontMobileSdkConfig {
  /**
  * mobile_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_identifier ProtectedApplication#mobile_identifier}
  */
  readonly mobileIdentifier?: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier;
}

export function protectedApplicationCloudfrontMobileSdkConfigToTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigOutputReference | ProtectedApplicationCloudfrontMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierToTerraform(struct!.mobileIdentifier),
  }
}


export function protectedApplicationCloudfrontMobileSdkConfigToHclTerraform(struct?: ProtectedApplicationCloudfrontMobileSdkConfigOutputReference | ProtectedApplicationCloudfrontMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: protectedApplicationCloudfrontMobileSdkConfigMobileIdentifierToHclTerraform(struct!.mobileIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontMobileSdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontMobileSdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontMobileSdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier.internalValue = value.mobileIdentifier;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier = new ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifierOutputReference(this, "mobile_identifier");
  public get mobileIdentifier() {
    return this._mobileIdentifier;
  }
  public putMobileIdentifier(value: ProtectedApplicationCloudfrontMobileSdkConfigMobileIdentifier) {
    this._mobileIdentifier.internalValue = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact_value ProtectedApplication#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_value ProtectedApplication#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#suffix_value ProtectedApplication#suffix_value}
  */
  readonly suffixValue?: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsDomainToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsDomainOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsDomain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsDomainToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsDomainOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsDomain): any {
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
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsDomain | undefined {
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
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsDomain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
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

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#create ProtectedApplication#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#password_reset ProtectedApplication#password_reset}
  */
  readonly passwordReset?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    password_reset: cdktf.booleanToTerraform(struct!.passwordReset),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_reset: {
      value: cdktf.booleanToHclTerraform(struct!.passwordReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._passwordReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordReset = this._passwordReset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._passwordReset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._passwordReset = value.passwordReset;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // password_reset - computed: false, optional: true, required: false
  private _passwordReset?: boolean | cdktf.IResolvable; 
  public get passwordReset() {
    return this.getBooleanAttribute('password_reset');
  }
  public set passwordReset(value: boolean | cdktf.IResolvable) {
    this._passwordReset = value;
  }
  public resetPasswordReset() {
    this._passwordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetInput() {
    return this._passwordReset;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_values ProtectedApplication#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference {
    return new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex_values ProtectedApplication#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference {
    return new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult {
  /**
  * failure_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#failure_conditions ProtectedApplication#failure_conditions}
  */
  readonly failureConditions?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable;
  /**
  * success_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#success_conditions ProtectedApplication#success_conditions}
  */
  readonly successConditions?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_conditions: cdktf.listMapper(protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToTerraform, true)(struct!.failureConditions),
    success_conditions: cdktf.listMapper(protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToTerraform, true)(struct!.successConditions),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_conditions: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsToHclTerraform, true)(struct!.failureConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList",
    },
    success_conditions: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsToHclTerraform, true)(struct!.successConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureConditions = this._failureConditions?.internalValue;
    }
    if (this._successConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successConditions = this._successConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureConditions.internalValue = undefined;
      this._successConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureConditions.internalValue = value.failureConditions;
      this._successConditions.internalValue = value.successConditions;
    }
  }

  // failure_conditions - computed: false, optional: true, required: false
  private _failureConditions = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditionsList(this, "failure_conditions", false);
  public get failureConditions() {
    return this._failureConditions;
  }
  public putFailureConditions(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultFailureConditions[] | cdktf.IResolvable) {
    this._failureConditions.internalValue = value;
  }
  public resetFailureConditions() {
    this._failureConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionsInput() {
    return this._failureConditions.internalValue;
  }

  // success_conditions - computed: false, optional: true, required: false
  private _successConditions = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditionsList(this, "success_conditions", false);
  public get successConditions() {
    return this._successConditions;
  }
  public putSuccessConditions(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultSuccessConditions[] | cdktf.IResolvable) {
    this._successConditions.internalValue = value;
  }
  public resetSuccessConditions() {
    this._successConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionsInput() {
    return this._successConditions.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_transaction_result ProtectedApplication#disable_transaction_result}
  */
  readonly disableTransactionResult?: boolean | cdktf.IResolvable;
  /**
  * transaction_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#transaction_result ProtectedApplication#transaction_result}
  */
  readonly transactionResult?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_transaction_result: cdktf.booleanToTerraform(struct!.disableTransactionResult),
    transaction_result: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultToTerraform(struct!.transactionResult),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_transaction_result: {
      value: cdktf.booleanToHclTerraform(struct!.disableTransactionResult),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transaction_result: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultToHclTerraform(struct!.transactionResult),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableTransactionResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTransactionResult = this._disableTransactionResult;
    }
    if (this._transactionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionResult = this._transactionResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableTransactionResult = undefined;
      this._transactionResult.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableTransactionResult = value.disableTransactionResult;
      this._transactionResult.internalValue = value.transactionResult;
    }
  }

  // disable_transaction_result - computed: false, optional: true, required: false
  private _disableTransactionResult?: boolean | cdktf.IResolvable; 
  public get disableTransactionResult() {
    return this.getBooleanAttribute('disable_transaction_result');
  }
  public set disableTransactionResult(value: boolean | cdktf.IResolvable) {
    this._disableTransactionResult = value;
  }
  public resetDisableTransactionResult() {
    this._disableTransactionResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTransactionResultInput() {
    return this._disableTransactionResult;
  }

  // transaction_result - computed: false, optional: true, required: false
  private _transactionResult = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResultOutputReference(this, "transaction_result");
  public get transactionResult() {
    return this._transactionResult;
  }
  public putTransactionResult(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginTransactionResult) {
    this._transactionResult.internalValue = value;
  }
  public resetTransactionResult() {
    this._transactionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionResultInput() {
    return this._transactionResult.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#login_mfa ProtectedApplication#login_mfa}
  */
  readonly loginMfa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#login_partner ProtectedApplication#login_partner}
  */
  readonly loginPartner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#logout ProtectedApplication#logout}
  */
  readonly logout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#token_refresh ProtectedApplication#token_refresh}
  */
  readonly tokenRefresh?: boolean | cdktf.IResolvable;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#login ProtectedApplication#login}
  */
  readonly login?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_mfa: cdktf.booleanToTerraform(struct!.loginMfa),
    login_partner: cdktf.booleanToTerraform(struct!.loginPartner),
    logout: cdktf.booleanToTerraform(struct!.logout),
    token_refresh: cdktf.booleanToTerraform(struct!.tokenRefresh),
    login: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginToTerraform(struct!.login),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_mfa: {
      value: cdktf.booleanToHclTerraform(struct!.loginMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_partner: {
      value: cdktf.booleanToHclTerraform(struct!.loginPartner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout: {
      value: cdktf.booleanToHclTerraform(struct!.logout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.tokenRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMfa = this._loginMfa;
    }
    if (this._loginPartner !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPartner = this._loginPartner;
    }
    if (this._logout !== undefined) {
      hasAnyValues = true;
      internalValueResult.logout = this._logout;
    }
    if (this._tokenRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefresh = this._tokenRefresh;
    }
    if (this._login?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginMfa = undefined;
      this._loginPartner = undefined;
      this._logout = undefined;
      this._tokenRefresh = undefined;
      this._login.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginMfa = value.loginMfa;
      this._loginPartner = value.loginPartner;
      this._logout = value.logout;
      this._tokenRefresh = value.tokenRefresh;
      this._login.internalValue = value.login;
    }
  }

  // login_mfa - computed: false, optional: true, required: false
  private _loginMfa?: boolean | cdktf.IResolvable; 
  public get loginMfa() {
    return this.getBooleanAttribute('login_mfa');
  }
  public set loginMfa(value: boolean | cdktf.IResolvable) {
    this._loginMfa = value;
  }
  public resetLoginMfa() {
    this._loginMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMfaInput() {
    return this._loginMfa;
  }

  // login_partner - computed: false, optional: true, required: false
  private _loginPartner?: boolean | cdktf.IResolvable; 
  public get loginPartner() {
    return this.getBooleanAttribute('login_partner');
  }
  public set loginPartner(value: boolean | cdktf.IResolvable) {
    this._loginPartner = value;
  }
  public resetLoginPartner() {
    this._loginPartner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPartnerInput() {
    return this._loginPartner;
  }

  // logout - computed: false, optional: true, required: false
  private _logout?: boolean | cdktf.IResolvable; 
  public get logout() {
    return this.getBooleanAttribute('logout');
  }
  public set logout(value: boolean | cdktf.IResolvable) {
    this._logout = value;
  }
  public resetLogout() {
    this._logout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutInput() {
    return this._logout;
  }

  // token_refresh - computed: false, optional: true, required: false
  private _tokenRefresh?: boolean | cdktf.IResolvable; 
  public get tokenRefresh() {
    return this.getBooleanAttribute('token_refresh');
  }
  public set tokenRefresh(value: boolean | cdktf.IResolvable) {
    this._tokenRefresh = value;
  }
  public resetTokenRefresh() {
    this._tokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshInput() {
    return this._tokenRefresh;
  }

  // login - computed: false, optional: true, required: false
  private _login = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#apply ProtectedApplication#apply}
  */
  readonly apply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#money_transfer ProtectedApplication#money_transfer}
  */
  readonly moneyTransfer?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.booleanToTerraform(struct!.apply),
    money_transfer: cdktf.booleanToTerraform(struct!.moneyTransfer),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.booleanToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    money_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.moneyTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._moneyTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.moneyTransfer = this._moneyTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apply = undefined;
      this._moneyTransfer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apply = value.apply;
      this._moneyTransfer = value.moneyTransfer;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: boolean | cdktf.IResolvable; 
  public get apply() {
    return this.getBooleanAttribute('apply');
  }
  public set apply(value: boolean | cdktf.IResolvable) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // money_transfer - computed: false, optional: true, required: false
  private _moneyTransfer?: boolean | cdktf.IResolvable; 
  public get moneyTransfer() {
    return this.getBooleanAttribute('money_transfer');
  }
  public set moneyTransfer(value: boolean | cdktf.IResolvable) {
    this._moneyTransfer = value;
  }
  public resetMoneyTransfer() {
    this._moneyTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moneyTransferInput() {
    return this._moneyTransfer;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#checkin ProtectedApplication#checkin}
  */
  readonly checkin?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkin: cdktf.booleanToTerraform(struct!.checkin),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkin: {
      value: cdktf.booleanToHclTerraform(struct!.checkin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkin !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkin = this._checkin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkin = value.checkin;
    }
  }

  // checkin - computed: false, optional: true, required: false
  private _checkin?: boolean | cdktf.IResolvable; 
  public get checkin() {
    return this.getBooleanAttribute('checkin');
  }
  public set checkin(value: boolean | cdktf.IResolvable) {
    this._checkin = value;
  }
  public resetCheckin() {
    this._checkin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinInput() {
    return this._checkin;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#create ProtectedApplication#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#update ProtectedApplication#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#view ProtectedApplication#view}
  */
  readonly view?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    update: cdktf.booleanToTerraform(struct!.update),
    view: cdktf.booleanToTerraform(struct!.view),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.booleanToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._update = value.update;
      this._view = value.view;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // view - computed: false, optional: true, required: false
  private _view?: boolean | cdktf.IResolvable; 
  public get view() {
    return this.getBooleanAttribute('view');
  }
  public set view(value: boolean | cdktf.IResolvable) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#flight_search ProtectedApplication#flight_search}
  */
  readonly flightSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#product_search ProtectedApplication#product_search}
  */
  readonly productSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#reservation_search ProtectedApplication#reservation_search}
  */
  readonly reservationSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#room_search ProtectedApplication#room_search}
  */
  readonly roomSearch?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flight_search: cdktf.booleanToTerraform(struct!.flightSearch),
    product_search: cdktf.booleanToTerraform(struct!.productSearch),
    reservation_search: cdktf.booleanToTerraform(struct!.reservationSearch),
    room_search: cdktf.booleanToTerraform(struct!.roomSearch),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flight_search: {
      value: cdktf.booleanToHclTerraform(struct!.flightSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product_search: {
      value: cdktf.booleanToHclTerraform(struct!.productSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reservation_search: {
      value: cdktf.booleanToHclTerraform(struct!.reservationSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    room_search: {
      value: cdktf.booleanToHclTerraform(struct!.roomSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flightSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.flightSearch = this._flightSearch;
    }
    if (this._productSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSearch = this._productSearch;
    }
    if (this._reservationSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationSearch = this._reservationSearch;
    }
    if (this._roomSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.roomSearch = this._roomSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flightSearch = undefined;
      this._productSearch = undefined;
      this._reservationSearch = undefined;
      this._roomSearch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flightSearch = value.flightSearch;
      this._productSearch = value.productSearch;
      this._reservationSearch = value.reservationSearch;
      this._roomSearch = value.roomSearch;
    }
  }

  // flight_search - computed: false, optional: true, required: false
  private _flightSearch?: boolean | cdktf.IResolvable; 
  public get flightSearch() {
    return this.getBooleanAttribute('flight_search');
  }
  public set flightSearch(value: boolean | cdktf.IResolvable) {
    this._flightSearch = value;
  }
  public resetFlightSearch() {
    this._flightSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightSearchInput() {
    return this._flightSearch;
  }

  // product_search - computed: false, optional: true, required: false
  private _productSearch?: boolean | cdktf.IResolvable; 
  public get productSearch() {
    return this.getBooleanAttribute('product_search');
  }
  public set productSearch(value: boolean | cdktf.IResolvable) {
    this._productSearch = value;
  }
  public resetProductSearch() {
    this._productSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSearchInput() {
    return this._productSearch;
  }

  // reservation_search - computed: false, optional: true, required: false
  private _reservationSearch?: boolean | cdktf.IResolvable; 
  public get reservationSearch() {
    return this.getBooleanAttribute('reservation_search');
  }
  public set reservationSearch(value: boolean | cdktf.IResolvable) {
    this._reservationSearch = value;
  }
  public resetReservationSearch() {
    this._reservationSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationSearchInput() {
    return this._reservationSearch;
  }

  // room_search - computed: false, optional: true, required: false
  private _roomSearch?: boolean | cdktf.IResolvable; 
  public get roomSearch() {
    return this.getBooleanAttribute('room_search');
  }
  public set roomSearch(value: boolean | cdktf.IResolvable) {
    this._roomSearch = value;
  }
  public resetRoomSearch() {
    this._roomSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roomSearchInput() {
    return this._roomSearch;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#gift_card_make_purchase_with_gift_card ProtectedApplication#gift_card_make_purchase_with_gift_card}
  */
  readonly giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#gift_card_validation ProtectedApplication#gift_card_validation}
  */
  readonly giftCardValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_add_to_cart ProtectedApplication#shop_add_to_cart}
  */
  readonly shopAddToCart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_checkout ProtectedApplication#shop_checkout}
  */
  readonly shopCheckout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_choose_seat ProtectedApplication#shop_choose_seat}
  */
  readonly shopChooseSeat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_enter_drawing_submission ProtectedApplication#shop_enter_drawing_submission}
  */
  readonly shopEnterDrawingSubmission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_make_payment ProtectedApplication#shop_make_payment}
  */
  readonly shopMakePayment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_order ProtectedApplication#shop_order}
  */
  readonly shopOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_price_inquiry ProtectedApplication#shop_price_inquiry}
  */
  readonly shopPriceInquiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_promo_code_validation ProtectedApplication#shop_promo_code_validation}
  */
  readonly shopPromoCodeValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_purchase_gift_card ProtectedApplication#shop_purchase_gift_card}
  */
  readonly shopPurchaseGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shop_update_quantity ProtectedApplication#shop_update_quantity}
  */
  readonly shopUpdateQuantity?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gift_card_make_purchase_with_gift_card: cdktf.booleanToTerraform(struct!.giftCardMakePurchaseWithGiftCard),
    gift_card_validation: cdktf.booleanToTerraform(struct!.giftCardValidation),
    shop_add_to_cart: cdktf.booleanToTerraform(struct!.shopAddToCart),
    shop_checkout: cdktf.booleanToTerraform(struct!.shopCheckout),
    shop_choose_seat: cdktf.booleanToTerraform(struct!.shopChooseSeat),
    shop_enter_drawing_submission: cdktf.booleanToTerraform(struct!.shopEnterDrawingSubmission),
    shop_make_payment: cdktf.booleanToTerraform(struct!.shopMakePayment),
    shop_order: cdktf.booleanToTerraform(struct!.shopOrder),
    shop_price_inquiry: cdktf.booleanToTerraform(struct!.shopPriceInquiry),
    shop_promo_code_validation: cdktf.booleanToTerraform(struct!.shopPromoCodeValidation),
    shop_purchase_gift_card: cdktf.booleanToTerraform(struct!.shopPurchaseGiftCard),
    shop_update_quantity: cdktf.booleanToTerraform(struct!.shopUpdateQuantity),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gift_card_make_purchase_with_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardMakePurchaseWithGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gift_card_validation: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_add_to_cart: {
      value: cdktf.booleanToHclTerraform(struct!.shopAddToCart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_checkout: {
      value: cdktf.booleanToHclTerraform(struct!.shopCheckout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_choose_seat: {
      value: cdktf.booleanToHclTerraform(struct!.shopChooseSeat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_enter_drawing_submission: {
      value: cdktf.booleanToHclTerraform(struct!.shopEnterDrawingSubmission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_make_payment: {
      value: cdktf.booleanToHclTerraform(struct!.shopMakePayment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_order: {
      value: cdktf.booleanToHclTerraform(struct!.shopOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_price_inquiry: {
      value: cdktf.booleanToHclTerraform(struct!.shopPriceInquiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_promo_code_validation: {
      value: cdktf.booleanToHclTerraform(struct!.shopPromoCodeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_purchase_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.shopPurchaseGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_update_quantity: {
      value: cdktf.booleanToHclTerraform(struct!.shopUpdateQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._giftCardMakePurchaseWithGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardMakePurchaseWithGiftCard = this._giftCardMakePurchaseWithGiftCard;
    }
    if (this._giftCardValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardValidation = this._giftCardValidation;
    }
    if (this._shopAddToCart !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopAddToCart = this._shopAddToCart;
    }
    if (this._shopCheckout !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopCheckout = this._shopCheckout;
    }
    if (this._shopChooseSeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopChooseSeat = this._shopChooseSeat;
    }
    if (this._shopEnterDrawingSubmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopEnterDrawingSubmission = this._shopEnterDrawingSubmission;
    }
    if (this._shopMakePayment !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopMakePayment = this._shopMakePayment;
    }
    if (this._shopOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopOrder = this._shopOrder;
    }
    if (this._shopPriceInquiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPriceInquiry = this._shopPriceInquiry;
    }
    if (this._shopPromoCodeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPromoCodeValidation = this._shopPromoCodeValidation;
    }
    if (this._shopPurchaseGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPurchaseGiftCard = this._shopPurchaseGiftCard;
    }
    if (this._shopUpdateQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopUpdateQuantity = this._shopUpdateQuantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._giftCardMakePurchaseWithGiftCard = undefined;
      this._giftCardValidation = undefined;
      this._shopAddToCart = undefined;
      this._shopCheckout = undefined;
      this._shopChooseSeat = undefined;
      this._shopEnterDrawingSubmission = undefined;
      this._shopMakePayment = undefined;
      this._shopOrder = undefined;
      this._shopPriceInquiry = undefined;
      this._shopPromoCodeValidation = undefined;
      this._shopPurchaseGiftCard = undefined;
      this._shopUpdateQuantity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._giftCardMakePurchaseWithGiftCard = value.giftCardMakePurchaseWithGiftCard;
      this._giftCardValidation = value.giftCardValidation;
      this._shopAddToCart = value.shopAddToCart;
      this._shopCheckout = value.shopCheckout;
      this._shopChooseSeat = value.shopChooseSeat;
      this._shopEnterDrawingSubmission = value.shopEnterDrawingSubmission;
      this._shopMakePayment = value.shopMakePayment;
      this._shopOrder = value.shopOrder;
      this._shopPriceInquiry = value.shopPriceInquiry;
      this._shopPromoCodeValidation = value.shopPromoCodeValidation;
      this._shopPurchaseGiftCard = value.shopPurchaseGiftCard;
      this._shopUpdateQuantity = value.shopUpdateQuantity;
    }
  }

  // gift_card_make_purchase_with_gift_card - computed: false, optional: true, required: false
  private _giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable; 
  public get giftCardMakePurchaseWithGiftCard() {
    return this.getBooleanAttribute('gift_card_make_purchase_with_gift_card');
  }
  public set giftCardMakePurchaseWithGiftCard(value: boolean | cdktf.IResolvable) {
    this._giftCardMakePurchaseWithGiftCard = value;
  }
  public resetGiftCardMakePurchaseWithGiftCard() {
    this._giftCardMakePurchaseWithGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardMakePurchaseWithGiftCardInput() {
    return this._giftCardMakePurchaseWithGiftCard;
  }

  // gift_card_validation - computed: false, optional: true, required: false
  private _giftCardValidation?: boolean | cdktf.IResolvable; 
  public get giftCardValidation() {
    return this.getBooleanAttribute('gift_card_validation');
  }
  public set giftCardValidation(value: boolean | cdktf.IResolvable) {
    this._giftCardValidation = value;
  }
  public resetGiftCardValidation() {
    this._giftCardValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardValidationInput() {
    return this._giftCardValidation;
  }

  // shop_add_to_cart - computed: false, optional: true, required: false
  private _shopAddToCart?: boolean | cdktf.IResolvable; 
  public get shopAddToCart() {
    return this.getBooleanAttribute('shop_add_to_cart');
  }
  public set shopAddToCart(value: boolean | cdktf.IResolvable) {
    this._shopAddToCart = value;
  }
  public resetShopAddToCart() {
    this._shopAddToCart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopAddToCartInput() {
    return this._shopAddToCart;
  }

  // shop_checkout - computed: false, optional: true, required: false
  private _shopCheckout?: boolean | cdktf.IResolvable; 
  public get shopCheckout() {
    return this.getBooleanAttribute('shop_checkout');
  }
  public set shopCheckout(value: boolean | cdktf.IResolvable) {
    this._shopCheckout = value;
  }
  public resetShopCheckout() {
    this._shopCheckout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopCheckoutInput() {
    return this._shopCheckout;
  }

  // shop_choose_seat - computed: false, optional: true, required: false
  private _shopChooseSeat?: boolean | cdktf.IResolvable; 
  public get shopChooseSeat() {
    return this.getBooleanAttribute('shop_choose_seat');
  }
  public set shopChooseSeat(value: boolean | cdktf.IResolvable) {
    this._shopChooseSeat = value;
  }
  public resetShopChooseSeat() {
    this._shopChooseSeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopChooseSeatInput() {
    return this._shopChooseSeat;
  }

  // shop_enter_drawing_submission - computed: false, optional: true, required: false
  private _shopEnterDrawingSubmission?: boolean | cdktf.IResolvable; 
  public get shopEnterDrawingSubmission() {
    return this.getBooleanAttribute('shop_enter_drawing_submission');
  }
  public set shopEnterDrawingSubmission(value: boolean | cdktf.IResolvable) {
    this._shopEnterDrawingSubmission = value;
  }
  public resetShopEnterDrawingSubmission() {
    this._shopEnterDrawingSubmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopEnterDrawingSubmissionInput() {
    return this._shopEnterDrawingSubmission;
  }

  // shop_make_payment - computed: false, optional: true, required: false
  private _shopMakePayment?: boolean | cdktf.IResolvable; 
  public get shopMakePayment() {
    return this.getBooleanAttribute('shop_make_payment');
  }
  public set shopMakePayment(value: boolean | cdktf.IResolvable) {
    this._shopMakePayment = value;
  }
  public resetShopMakePayment() {
    this._shopMakePayment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopMakePaymentInput() {
    return this._shopMakePayment;
  }

  // shop_order - computed: false, optional: true, required: false
  private _shopOrder?: boolean | cdktf.IResolvable; 
  public get shopOrder() {
    return this.getBooleanAttribute('shop_order');
  }
  public set shopOrder(value: boolean | cdktf.IResolvable) {
    this._shopOrder = value;
  }
  public resetShopOrder() {
    this._shopOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopOrderInput() {
    return this._shopOrder;
  }

  // shop_price_inquiry - computed: false, optional: true, required: false
  private _shopPriceInquiry?: boolean | cdktf.IResolvable; 
  public get shopPriceInquiry() {
    return this.getBooleanAttribute('shop_price_inquiry');
  }
  public set shopPriceInquiry(value: boolean | cdktf.IResolvable) {
    this._shopPriceInquiry = value;
  }
  public resetShopPriceInquiry() {
    this._shopPriceInquiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPriceInquiryInput() {
    return this._shopPriceInquiry;
  }

  // shop_promo_code_validation - computed: false, optional: true, required: false
  private _shopPromoCodeValidation?: boolean | cdktf.IResolvable; 
  public get shopPromoCodeValidation() {
    return this.getBooleanAttribute('shop_promo_code_validation');
  }
  public set shopPromoCodeValidation(value: boolean | cdktf.IResolvable) {
    this._shopPromoCodeValidation = value;
  }
  public resetShopPromoCodeValidation() {
    this._shopPromoCodeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPromoCodeValidationInput() {
    return this._shopPromoCodeValidation;
  }

  // shop_purchase_gift_card - computed: false, optional: true, required: false
  private _shopPurchaseGiftCard?: boolean | cdktf.IResolvable; 
  public get shopPurchaseGiftCard() {
    return this.getBooleanAttribute('shop_purchase_gift_card');
  }
  public set shopPurchaseGiftCard(value: boolean | cdktf.IResolvable) {
    this._shopPurchaseGiftCard = value;
  }
  public resetShopPurchaseGiftCard() {
    this._shopPurchaseGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPurchaseGiftCardInput() {
    return this._shopPurchaseGiftCard;
  }

  // shop_update_quantity - computed: false, optional: true, required: false
  private _shopUpdateQuantity?: boolean | cdktf.IResolvable; 
  public get shopUpdateQuantity() {
    return this.getBooleanAttribute('shop_update_quantity');
  }
  public set shopUpdateQuantity(value: boolean | cdktf.IResolvable) {
    this._shopUpdateQuantity = value;
  }
  public resetShopUpdateQuantity() {
    this._shopUpdateQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopUpdateQuantityInput() {
    return this._shopUpdateQuantity;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel {
  /**
  * account_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#account_management ProtectedApplication#account_management}
  */
  readonly accountManagement?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#authentication ProtectedApplication#authentication}
  */
  readonly authentication?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication;
  /**
  * financial_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#financial_services ProtectedApplication#financial_services}
  */
  readonly financialServices?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices;
  /**
  * flight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#flight ProtectedApplication#flight}
  */
  readonly flight?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight;
  /**
  * profile_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#profile_management ProtectedApplication#profile_management}
  */
  readonly profileManagement?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#search ProtectedApplication#search}
  */
  readonly search?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch;
  /**
  * shopping_gift_cards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#shopping_gift_cards ProtectedApplication#shopping_gift_cards}
  */
  readonly shoppingGiftCards?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards;
}

export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_management: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementToTerraform(struct!.accountManagement),
    authentication: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationToTerraform(struct!.authentication),
    financial_services: protectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesToTerraform(struct!.financialServices),
    flight: protectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightToTerraform(struct!.flight),
    profile_management: protectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementToTerraform(struct!.profileManagement),
    search: protectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchToTerraform(struct!.search),
    shopping_gift_cards: protectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsToTerraform(struct!.shoppingGiftCards),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsFlowLabelToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_management: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementToHclTerraform(struct!.accountManagement),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementList",
    },
    authentication: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationList",
    },
    financial_services: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesToHclTerraform(struct!.financialServices),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesList",
    },
    flight: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightToHclTerraform(struct!.flight),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightList",
    },
    profile_management: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementToHclTerraform(struct!.profileManagement),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementList",
    },
    search: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchList",
    },
    shopping_gift_cards: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct!.shoppingGiftCards),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountManagement = this._accountManagement?.internalValue;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._financialServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialServices = this._financialServices?.internalValue;
    }
    if (this._flight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flight = this._flight?.internalValue;
    }
    if (this._profileManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileManagement = this._profileManagement?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._shoppingGiftCards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shoppingGiftCards = this._shoppingGiftCards?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountManagement.internalValue = undefined;
      this._authentication.internalValue = undefined;
      this._financialServices.internalValue = undefined;
      this._flight.internalValue = undefined;
      this._profileManagement.internalValue = undefined;
      this._search.internalValue = undefined;
      this._shoppingGiftCards.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountManagement.internalValue = value.accountManagement;
      this._authentication.internalValue = value.authentication;
      this._financialServices.internalValue = value.financialServices;
      this._flight.internalValue = value.flight;
      this._profileManagement.internalValue = value.profileManagement;
      this._search.internalValue = value.search;
      this._shoppingGiftCards.internalValue = value.shoppingGiftCards;
    }
  }

  // account_management - computed: false, optional: true, required: false
  private _accountManagement = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagementOutputReference(this, "account_management");
  public get accountManagement() {
    return this._accountManagement;
  }
  public putAccountManagement(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAccountManagement) {
    this._accountManagement.internalValue = value;
  }
  public resetAccountManagement() {
    this._accountManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManagementInput() {
    return this._accountManagement.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // financial_services - computed: false, optional: true, required: false
  private _financialServices = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServicesOutputReference(this, "financial_services");
  public get financialServices() {
    return this._financialServices;
  }
  public putFinancialServices(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFinancialServices) {
    this._financialServices.internalValue = value;
  }
  public resetFinancialServices() {
    this._financialServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialServicesInput() {
    return this._financialServices.internalValue;
  }

  // flight - computed: false, optional: true, required: false
  private _flight = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlightOutputReference(this, "flight");
  public get flight() {
    return this._flight;
  }
  public putFlight(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelFlight) {
    this._flight.internalValue = value;
  }
  public resetFlight() {
    this._flight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightInput() {
    return this._flight.internalValue;
  }

  // profile_management - computed: false, optional: true, required: false
  private _profileManagement = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagementOutputReference(this, "profile_management");
  public get profileManagement() {
    return this._profileManagement;
  }
  public putProfileManagement(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelProfileManagement) {
    this._profileManagement.internalValue = value;
  }
  public resetProfileManagement() {
    this._profileManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileManagementInput() {
    return this._profileManagement.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // shopping_gift_cards - computed: false, optional: true, required: false
  private _shoppingGiftCards = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCardsOutputReference(this, "shopping_gift_cards");
  public get shoppingGiftCards() {
    return this._shoppingGiftCards;
  }
  public putShoppingGiftCards(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelShoppingGiftCards) {
    this._shoppingGiftCards.internalValue = value;
  }
  public resetShoppingGiftCards() {
    this._shoppingGiftCards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingGiftCardsInput() {
    return this._shoppingGiftCards.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsMetadataToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMetadataOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMetadata): any {
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


export function protectedApplicationCloudfrontProtectedEndpointsMetadataToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMetadataOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMetadata): any {
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

export class ProtectedApplicationCloudfrontProtectedEndpointsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsMetadata | undefined) {
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
export interface ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsMobileClientBlockToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlockOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsMobileClientBlockToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlockOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsMobileClientContinueToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinueOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsMobileClientContinueToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinueOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsMobileClient {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block ProtectedApplication#block}
  */
  readonly block?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock;
  /**
  * continue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue ProtectedApplication#continue}
  */
  readonly continue?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue;
}

export function protectedApplicationCloudfrontProtectedEndpointsMobileClientToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: protectedApplicationCloudfrontProtectedEndpointsMobileClientBlockToTerraform(struct!.block),
    continue: protectedApplicationCloudfrontProtectedEndpointsMobileClientContinueToTerraform(struct!.continue),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsMobileClientToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: protectedApplicationCloudfrontProtectedEndpointsMobileClientBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlockList",
    },
    continue: {
      value: protectedApplicationCloudfrontProtectedEndpointsMobileClientContinueToHclTerraform(struct!.continue),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsMobileClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsMobileClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._continue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block.internalValue = undefined;
      this._continue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block.internalValue = value.block;
      this._continue.internalValue = value.continue;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // continue - computed: false, optional: true, required: false
  private _continue = new ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinueOutputReference(this, "continue");
  public get continue() {
    return this._continue;
  }
  public putContinue(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClientContinue) {
    this._continue.internalValue = value;
  }
  public resetContinue() {
    this._continue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebClientBlockToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlockOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebClientBlockToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlockOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebClientContinueToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinueOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebClientContinueToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinueOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#location ProtectedApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebClientRedirectToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirectOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebClientRedirectToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirectOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebClient {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block ProtectedApplication#block}
  */
  readonly block?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock;
  /**
  * continue block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue ProtectedApplication#continue}
  */
  readonly continue?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#redirect ProtectedApplication#redirect}
  */
  readonly redirect?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebClientToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: protectedApplicationCloudfrontProtectedEndpointsWebClientBlockToTerraform(struct!.block),
    continue: protectedApplicationCloudfrontProtectedEndpointsWebClientContinueToTerraform(struct!.continue),
    redirect: protectedApplicationCloudfrontProtectedEndpointsWebClientRedirectToTerraform(struct!.redirect),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebClientToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebClientBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlockList",
    },
    continue: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebClientContinueToHclTerraform(struct!.continue),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinueList",
    },
    redirect: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebClientRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._continue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block.internalValue = undefined;
      this._continue.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block.internalValue = value.block;
      this._continue.internalValue = value.continue;
      this._redirect.internalValue = value.redirect;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientBlock) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // continue - computed: false, optional: true, required: false
  private _continue = new ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinueOutputReference(this, "continue");
  public get continue() {
    return this._continue;
  }
  public putContinue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientContinue) {
    this._continue.internalValue = value;
  }
  public resetContinue() {
    this._continue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClientRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#body ProtectedApplication#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#content_type ProtectedApplication#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._contentType = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._contentType = value.contentType;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#add_header ProtectedApplication#add_header}
  */
  readonly addHeader?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#no_header ProtectedApplication#no_header}
  */
  readonly noHeader?: boolean | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_header: cdktf.booleanToTerraform(struct!.addHeader),
    no_header: cdktf.booleanToTerraform(struct!.noHeader),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_header: {
      value: cdktf.booleanToHclTerraform(struct!.addHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_header: {
      value: cdktf.booleanToHclTerraform(struct!.noHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHeader = this._addHeader;
    }
    if (this._noHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeader = this._noHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHeader = undefined;
      this._noHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHeader = value.addHeader;
      this._noHeader = value.noHeader;
    }
  }

  // add_header - computed: false, optional: true, required: false
  private _addHeader?: boolean | cdktf.IResolvable; 
  public get addHeader() {
    return this.getBooleanAttribute('add_header');
  }
  public set addHeader(value: boolean | cdktf.IResolvable) {
    this._addHeader = value;
  }
  public resetAddHeader() {
    this._addHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHeaderInput() {
    return this._addHeader;
  }

  // no_header - computed: false, optional: true, required: false
  private _noHeader?: boolean | cdktf.IResolvable; 
  public get noHeader() {
    return this.getBooleanAttribute('no_header');
  }
  public set noHeader(value: boolean | cdktf.IResolvable) {
    this._noHeader = value;
  }
  public resetNoHeader() {
    this._noHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeaderInput() {
    return this._noHeader;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#location ProtectedApplication#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#status ProtectedApplication#status}
  */
  readonly status: string;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient {
  /**
  * block_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block_mobile ProtectedApplication#block_mobile}
  */
  readonly blockMobile?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile;
  /**
  * block_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#block_web ProtectedApplication#block_web}
  */
  readonly blockWeb?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb;
  /**
  * continue_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_mobile ProtectedApplication#continue_mobile}
  */
  readonly continueMobile?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile;
  /**
  * continue_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_web ProtectedApplication#continue_web}
  */
  readonly continueWeb?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb;
  /**
  * redirect_web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#redirect_web ProtectedApplication#redirect_web}
  */
  readonly redirectWeb?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb;
}

export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_mobile: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileToTerraform(struct!.blockMobile),
    block_web: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebToTerraform(struct!.blockWeb),
    continue_mobile: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileToTerraform(struct!.continueMobile),
    continue_web: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebToTerraform(struct!.continueWeb),
    redirect_web: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebToTerraform(struct!.redirectWeb),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsWebMobileClientToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientOutputReference | ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_mobile: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileToHclTerraform(struct!.blockMobile),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileList",
    },
    block_web: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebToHclTerraform(struct!.blockWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebList",
    },
    continue_mobile: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileToHclTerraform(struct!.continueMobile),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileList",
    },
    continue_web: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebToHclTerraform(struct!.continueWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebList",
    },
    redirect_web: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebToHclTerraform(struct!.redirectWeb),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockMobile = this._blockMobile?.internalValue;
    }
    if (this._blockWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockWeb = this._blockWeb?.internalValue;
    }
    if (this._continueMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueMobile = this._continueMobile?.internalValue;
    }
    if (this._continueWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueWeb = this._continueWeb?.internalValue;
    }
    if (this._redirectWeb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectWeb = this._redirectWeb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockMobile.internalValue = undefined;
      this._blockWeb.internalValue = undefined;
      this._continueMobile.internalValue = undefined;
      this._continueWeb.internalValue = undefined;
      this._redirectWeb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockMobile.internalValue = value.blockMobile;
      this._blockWeb.internalValue = value.blockWeb;
      this._continueMobile.internalValue = value.continueMobile;
      this._continueWeb.internalValue = value.continueWeb;
      this._redirectWeb.internalValue = value.redirectWeb;
    }
  }

  // block_mobile - computed: false, optional: true, required: false
  private _blockMobile = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobileOutputReference(this, "block_mobile");
  public get blockMobile() {
    return this._blockMobile;
  }
  public putBlockMobile(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockMobile) {
    this._blockMobile.internalValue = value;
  }
  public resetBlockMobile() {
    this._blockMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockMobileInput() {
    return this._blockMobile.internalValue;
  }

  // block_web - computed: false, optional: true, required: false
  private _blockWeb = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWebOutputReference(this, "block_web");
  public get blockWeb() {
    return this._blockWeb;
  }
  public putBlockWeb(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientBlockWeb) {
    this._blockWeb.internalValue = value;
  }
  public resetBlockWeb() {
    this._blockWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockWebInput() {
    return this._blockWeb.internalValue;
  }

  // continue_mobile - computed: false, optional: true, required: false
  private _continueMobile = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobileOutputReference(this, "continue_mobile");
  public get continueMobile() {
    return this._continueMobile;
  }
  public putContinueMobile(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueMobile) {
    this._continueMobile.internalValue = value;
  }
  public resetContinueMobile() {
    this._continueMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueMobileInput() {
    return this._continueMobile.internalValue;
  }

  // continue_web - computed: false, optional: true, required: false
  private _continueWeb = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWebOutputReference(this, "continue_web");
  public get continueWeb() {
    return this._continueWeb;
  }
  public putContinueWeb(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientContinueWeb) {
    this._continueWeb.internalValue = value;
  }
  public resetContinueWeb() {
    this._continueWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueWebInput() {
    return this._continueWeb.internalValue;
  }

  // redirect_web - computed: false, optional: true, required: false
  private _redirectWeb = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWebOutputReference(this, "redirect_web");
  public get redirectWeb() {
    return this._redirectWeb;
  }
  public putRedirectWeb(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientRedirectWeb) {
    this._redirectWeb.internalValue = value;
  }
  public resetRedirectWeb() {
    this._redirectWeb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectWebInput() {
    return this._redirectWeb.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontProtectedEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#any_domain ProtectedApplication#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#http_methods ProtectedApplication#http_methods}
  */
  readonly httpMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#path ProtectedApplication#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#query ProtectedApplication#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#undefined_flow_label ProtectedApplication#undefined_flow_label}
  */
  readonly undefinedFlowLabel?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#domain ProtectedApplication#domain}
  */
  readonly domain?: ProtectedApplicationCloudfrontProtectedEndpointsDomain;
  /**
  * flow_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#flow_label ProtectedApplication#flow_label}
  */
  readonly flowLabel?: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudfrontProtectedEndpointsMetadata;
  /**
  * mobile_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_client ProtectedApplication#mobile_client}
  */
  readonly mobileClient?: ProtectedApplicationCloudfrontProtectedEndpointsMobileClient;
  /**
  * web_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#web_client ProtectedApplication#web_client}
  */
  readonly webClient?: ProtectedApplicationCloudfrontProtectedEndpointsWebClient;
  /**
  * web_mobile_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#web_mobile_client ProtectedApplication#web_mobile_client}
  */
  readonly webMobileClient?: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient;
}

export function protectedApplicationCloudfrontProtectedEndpointsToTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    path: cdktf.stringToTerraform(struct!.path),
    query: cdktf.stringToTerraform(struct!.query),
    undefined_flow_label: cdktf.booleanToTerraform(struct!.undefinedFlowLabel),
    domain: protectedApplicationCloudfrontProtectedEndpointsDomainToTerraform(struct!.domain),
    flow_label: protectedApplicationCloudfrontProtectedEndpointsFlowLabelToTerraform(struct!.flowLabel),
    metadata: protectedApplicationCloudfrontProtectedEndpointsMetadataToTerraform(struct!.metadata),
    mobile_client: protectedApplicationCloudfrontProtectedEndpointsMobileClientToTerraform(struct!.mobileClient),
    web_client: protectedApplicationCloudfrontProtectedEndpointsWebClientToTerraform(struct!.webClient),
    web_mobile_client: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientToTerraform(struct!.webMobileClient),
  }
}


export function protectedApplicationCloudfrontProtectedEndpointsToHclTerraform(struct?: ProtectedApplicationCloudfrontProtectedEndpoints | cdktf.IResolvable): any {
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
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
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
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    undefined_flow_label: {
      value: cdktf.booleanToHclTerraform(struct!.undefinedFlowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: protectedApplicationCloudfrontProtectedEndpointsDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsDomainList",
    },
    flow_label: {
      value: protectedApplicationCloudfrontProtectedEndpointsFlowLabelToHclTerraform(struct!.flowLabel),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelList",
    },
    metadata: {
      value: protectedApplicationCloudfrontProtectedEndpointsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsMetadataList",
    },
    mobile_client: {
      value: protectedApplicationCloudfrontProtectedEndpointsMobileClientToHclTerraform(struct!.mobileClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsMobileClientList",
    },
    web_client: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebClientToHclTerraform(struct!.webClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebClientList",
    },
    web_mobile_client: {
      value: protectedApplicationCloudfrontProtectedEndpointsWebMobileClientToHclTerraform(struct!.webMobileClient),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontProtectedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontProtectedEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._undefinedFlowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedFlowLabel = this._undefinedFlowLabel;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._flowLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mobileClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileClient = this._mobileClient?.internalValue;
    }
    if (this._webClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webClient = this._webClient?.internalValue;
    }
    if (this._webMobileClient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webMobileClient = this._webMobileClient?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontProtectedEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._httpMethods = undefined;
      this._path = undefined;
      this._query = undefined;
      this._undefinedFlowLabel = undefined;
      this._domain.internalValue = undefined;
      this._flowLabel.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._mobileClient.internalValue = undefined;
      this._webClient.internalValue = undefined;
      this._webMobileClient.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._httpMethods = value.httpMethods;
      this._path = value.path;
      this._query = value.query;
      this._undefinedFlowLabel = value.undefinedFlowLabel;
      this._domain.internalValue = value.domain;
      this._flowLabel.internalValue = value.flowLabel;
      this._metadata.internalValue = value.metadata;
      this._mobileClient.internalValue = value.mobileClient;
      this._webClient.internalValue = value.webClient;
      this._webMobileClient.internalValue = value.webMobileClient;
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

  // http_methods - computed: false, optional: false, required: true
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // undefined_flow_label - computed: false, optional: true, required: false
  private _undefinedFlowLabel?: boolean | cdktf.IResolvable; 
  public get undefinedFlowLabel() {
    return this.getBooleanAttribute('undefined_flow_label');
  }
  public set undefinedFlowLabel(value: boolean | cdktf.IResolvable) {
    this._undefinedFlowLabel = value;
  }
  public resetUndefinedFlowLabel() {
    this._undefinedFlowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedFlowLabelInput() {
    return this._undefinedFlowLabel;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new ProtectedApplicationCloudfrontProtectedEndpointsDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: ProtectedApplicationCloudfrontProtectedEndpointsDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel = new ProtectedApplicationCloudfrontProtectedEndpointsFlowLabelOutputReference(this, "flow_label");
  public get flowLabel() {
    return this._flowLabel;
  }
  public putFlowLabel(value: ProtectedApplicationCloudfrontProtectedEndpointsFlowLabel) {
    this._flowLabel.internalValue = value;
  }
  public resetFlowLabel() {
    this._flowLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudfrontProtectedEndpointsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudfrontProtectedEndpointsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mobile_client - computed: false, optional: true, required: false
  private _mobileClient = new ProtectedApplicationCloudfrontProtectedEndpointsMobileClientOutputReference(this, "mobile_client");
  public get mobileClient() {
    return this._mobileClient;
  }
  public putMobileClient(value: ProtectedApplicationCloudfrontProtectedEndpointsMobileClient) {
    this._mobileClient.internalValue = value;
  }
  public resetMobileClient() {
    this._mobileClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileClientInput() {
    return this._mobileClient.internalValue;
  }

  // web_client - computed: false, optional: true, required: false
  private _webClient = new ProtectedApplicationCloudfrontProtectedEndpointsWebClientOutputReference(this, "web_client");
  public get webClient() {
    return this._webClient;
  }
  public putWebClient(value: ProtectedApplicationCloudfrontProtectedEndpointsWebClient) {
    this._webClient.internalValue = value;
  }
  public resetWebClient() {
    this._webClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webClientInput() {
    return this._webClient.internalValue;
  }

  // web_mobile_client - computed: false, optional: true, required: false
  private _webMobileClient = new ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClientOutputReference(this, "web_mobile_client");
  public get webMobileClient() {
    return this._webMobileClient;
  }
  public putWebMobileClient(value: ProtectedApplicationCloudfrontProtectedEndpointsWebMobileClient) {
    this._webMobileClient.internalValue = value;
  }
  public resetWebMobileClient() {
    this._webMobileClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webMobileClientInput() {
    return this._webMobileClient.internalValue;
  }
}

export class ProtectedApplicationCloudfrontProtectedEndpointsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontProtectedEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontProtectedEndpointsOutputReference {
    return new ProtectedApplicationCloudfrontProtectedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#exact ProtectedApplication#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#regex ProtectedApplication#regex}
  */
  readonly regex?: string;
}

export function protectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersToTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function protectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersToHclTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._name = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._name = value.name;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersOutputReference {
    return new ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfrontTrustedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#headers ProtectedApplication#headers}
  */
  readonly headers: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontTrustedClientsHttpHeaderToTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderOutputReference | ProtectedApplicationCloudfrontTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(protectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function protectedApplicationCloudfrontTrustedClientsHttpHeaderToHclTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderOutputReference | ProtectedApplicationCloudfrontTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontTrustedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontTrustedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontTrustedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ProtectedApplicationCloudfrontTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ProtectedApplicationCloudfrontTrustedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#description ProtectedApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable ProtectedApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#name ProtectedApplication#name}
  */
  readonly name: string;
}

export function protectedApplicationCloudfrontTrustedClientsMetadataToTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsMetadataOutputReference | ProtectedApplicationCloudfrontTrustedClientsMetadata): any {
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


export function protectedApplicationCloudfrontTrustedClientsMetadataToHclTerraform(struct?: ProtectedApplicationCloudfrontTrustedClientsMetadataOutputReference | ProtectedApplicationCloudfrontTrustedClientsMetadata): any {
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

export class ProtectedApplicationCloudfrontTrustedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfrontTrustedClientsMetadata | undefined {
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

  public set internalValue(value: ProtectedApplicationCloudfrontTrustedClientsMetadata | undefined) {
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
export interface ProtectedApplicationCloudfrontTrustedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#ip_prefix ProtectedApplication#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#http_header ProtectedApplication#http_header}
  */
  readonly httpHeader?: ProtectedApplicationCloudfrontTrustedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#metadata ProtectedApplication#metadata}
  */
  readonly metadata: ProtectedApplicationCloudfrontTrustedClientsMetadata;
}

export function protectedApplicationCloudfrontTrustedClientsToTerraform(struct?: ProtectedApplicationCloudfrontTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    http_header: protectedApplicationCloudfrontTrustedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: protectedApplicationCloudfrontTrustedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function protectedApplicationCloudfrontTrustedClientsToHclTerraform(struct?: ProtectedApplicationCloudfrontTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: protectedApplicationCloudfrontTrustedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontTrustedClientsHttpHeaderList",
    },
    metadata: {
      value: protectedApplicationCloudfrontTrustedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontTrustedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontTrustedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectedApplicationCloudfrontTrustedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfrontTrustedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipPrefix = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipPrefix = value.ipPrefix;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new ProtectedApplicationCloudfrontTrustedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: ProtectedApplicationCloudfrontTrustedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ProtectedApplicationCloudfrontTrustedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ProtectedApplicationCloudfrontTrustedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class ProtectedApplicationCloudfrontTrustedClientsList extends cdktf.ComplexList {
  public internalValue? : ProtectedApplicationCloudfrontTrustedClients[] | cdktf.IResolvable

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
  public get(index: number): ProtectedApplicationCloudfrontTrustedClientsOutputReference {
    return new ProtectedApplicationCloudfrontTrustedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProtectedApplicationCloudfront {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#aws_account_no ProtectedApplication#aws_account_no}
  */
  readonly awsAccountNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#continue_mitigation_action_hdr ProtectedApplication#continue_mitigation_action_hdr}
  */
  readonly continueMitigationActionHdr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#data_sample ProtectedApplication#data_sample}
  */
  readonly dataSample?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_aws_configuration ProtectedApplication#disable_aws_configuration}
  */
  readonly disableAwsConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_js_insert ProtectedApplication#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#disable_mobile_sdk ProtectedApplication#disable_mobile_sdk}
  */
  readonly disableMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_download_path ProtectedApplication#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#loglevel ProtectedApplication#loglevel}
  */
  readonly loglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#timeout ProtectedApplication#timeout}
  */
  readonly timeout?: number;
  /**
  * aws_configuration_id_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#aws_configuration_id_selector ProtectedApplication#aws_configuration_id_selector}
  */
  readonly awsConfigurationIdSelector?: ProtectedApplicationCloudfrontAwsConfigurationIdSelector;
  /**
  * aws_configuration_tag_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#aws_configuration_tag_selector ProtectedApplication#aws_configuration_tag_selector}
  */
  readonly awsConfigurationTagSelector?: ProtectedApplicationCloudfrontAwsConfigurationTagSelector;
  /**
  * js_insert_all_pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insert_all_pages ProtectedApplication#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: ProtectedApplicationCloudfrontJsInsertAllPages;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insert_all_pages_except ProtectedApplication#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: ProtectedApplicationCloudfrontJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#js_insertion_rules ProtectedApplication#js_insertion_rules}
  */
  readonly jsInsertionRules?: ProtectedApplicationCloudfrontJsInsertionRules;
  /**
  * manual_js_insert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#manual_js_insert ProtectedApplication#manual_js_insert}
  */
  readonly manualJsInsert?: ProtectedApplicationCloudfrontManualJsInsert;
  /**
  * mobile_sdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#mobile_sdk_config ProtectedApplication#mobile_sdk_config}
  */
  readonly mobileSdkConfig?: ProtectedApplicationCloudfrontMobileSdkConfig;
  /**
  * protected_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#protected_endpoints ProtectedApplication#protected_endpoints}
  */
  readonly protectedEndpoints: ProtectedApplicationCloudfrontProtectedEndpoints[] | cdktf.IResolvable;
  /**
  * trusted_clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#trusted_clients ProtectedApplication#trusted_clients}
  */
  readonly trustedClients?: ProtectedApplicationCloudfrontTrustedClients[] | cdktf.IResolvable;
}

export function protectedApplicationCloudfrontToTerraform(struct?: ProtectedApplicationCloudfrontOutputReference | ProtectedApplicationCloudfront): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_account_no: cdktf.stringToTerraform(struct!.awsAccountNo),
    continue_mitigation_action_hdr: cdktf.stringToTerraform(struct!.continueMitigationActionHdr),
    data_sample: cdktf.numberToTerraform(struct!.dataSample),
    disable_aws_configuration: cdktf.booleanToTerraform(struct!.disableAwsConfiguration),
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    disable_mobile_sdk: cdktf.booleanToTerraform(struct!.disableMobileSdk),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    loglevel: cdktf.stringToTerraform(struct!.loglevel),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    aws_configuration_id_selector: protectedApplicationCloudfrontAwsConfigurationIdSelectorToTerraform(struct!.awsConfigurationIdSelector),
    aws_configuration_tag_selector: protectedApplicationCloudfrontAwsConfigurationTagSelectorToTerraform(struct!.awsConfigurationTagSelector),
    js_insert_all_pages: protectedApplicationCloudfrontJsInsertAllPagesToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: protectedApplicationCloudfrontJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: protectedApplicationCloudfrontJsInsertionRulesToTerraform(struct!.jsInsertionRules),
    manual_js_insert: protectedApplicationCloudfrontManualJsInsertToTerraform(struct!.manualJsInsert),
    mobile_sdk_config: protectedApplicationCloudfrontMobileSdkConfigToTerraform(struct!.mobileSdkConfig),
    protected_endpoints: cdktf.listMapper(protectedApplicationCloudfrontProtectedEndpointsToTerraform, true)(struct!.protectedEndpoints),
    trusted_clients: cdktf.listMapper(protectedApplicationCloudfrontTrustedClientsToTerraform, true)(struct!.trustedClients),
  }
}


export function protectedApplicationCloudfrontToHclTerraform(struct?: ProtectedApplicationCloudfrontOutputReference | ProtectedApplicationCloudfront): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_account_no: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue_mitigation_action_hdr: {
      value: cdktf.stringToHclTerraform(struct!.continueMitigationActionHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_sample: {
      value: cdktf.numberToHclTerraform(struct!.dataSample),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_aws_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.disableAwsConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.disableMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loglevel: {
      value: cdktf.stringToHclTerraform(struct!.loglevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aws_configuration_id_selector: {
      value: protectedApplicationCloudfrontAwsConfigurationIdSelectorToHclTerraform(struct!.awsConfigurationIdSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontAwsConfigurationIdSelectorList",
    },
    aws_configuration_tag_selector: {
      value: protectedApplicationCloudfrontAwsConfigurationTagSelectorToHclTerraform(struct!.awsConfigurationTagSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontAwsConfigurationTagSelectorList",
    },
    js_insert_all_pages: {
      value: protectedApplicationCloudfrontJsInsertAllPagesToHclTerraform(struct!.jsInsertAllPages),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesList",
    },
    js_insert_all_pages_except: {
      value: protectedApplicationCloudfrontJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: protectedApplicationCloudfrontJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontJsInsertionRulesList",
    },
    manual_js_insert: {
      value: protectedApplicationCloudfrontManualJsInsertToHclTerraform(struct!.manualJsInsert),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontManualJsInsertList",
    },
    mobile_sdk_config: {
      value: protectedApplicationCloudfrontMobileSdkConfigToHclTerraform(struct!.mobileSdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontMobileSdkConfigList",
    },
    protected_endpoints: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontProtectedEndpointsToHclTerraform, true)(struct!.protectedEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontProtectedEndpointsList",
    },
    trusted_clients: {
      value: cdktf.listMapperHcl(protectedApplicationCloudfrontTrustedClientsToHclTerraform, true)(struct!.trustedClients),
      isBlock: true,
      type: "list",
      storageClassType: "ProtectedApplicationCloudfrontTrustedClientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtectedApplicationCloudfrontOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProtectedApplicationCloudfront | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccountNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountNo = this._awsAccountNo;
    }
    if (this._continueMitigationActionHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueMitigationActionHdr = this._continueMitigationActionHdr;
    }
    if (this._dataSample !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSample = this._dataSample;
    }
    if (this._disableAwsConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAwsConfiguration = this._disableAwsConfiguration;
    }
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._disableMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMobileSdk = this._disableMobileSdk;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._loglevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loglevel = this._loglevel;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._awsConfigurationIdSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfigurationIdSelector = this._awsConfigurationIdSelector?.internalValue;
    }
    if (this._awsConfigurationTagSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsConfigurationTagSelector = this._awsConfigurationTagSelector?.internalValue;
    }
    if (this._jsInsertAllPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages?.internalValue;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    if (this._manualJsInsert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualJsInsert = this._manualJsInsert?.internalValue;
    }
    if (this._mobileSdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSdkConfig = this._mobileSdkConfig?.internalValue;
    }
    if (this._protectedEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedEndpoints = this._protectedEndpoints?.internalValue;
    }
    if (this._trustedClients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedClients = this._trustedClients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectedApplicationCloudfront | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsAccountNo = undefined;
      this._continueMitigationActionHdr = undefined;
      this._dataSample = undefined;
      this._disableAwsConfiguration = undefined;
      this._disableJsInsert = undefined;
      this._disableMobileSdk = undefined;
      this._jsDownloadPath = undefined;
      this._loglevel = undefined;
      this._timeout = undefined;
      this._awsConfigurationIdSelector.internalValue = undefined;
      this._awsConfigurationTagSelector.internalValue = undefined;
      this._jsInsertAllPages.internalValue = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
      this._manualJsInsert.internalValue = undefined;
      this._mobileSdkConfig.internalValue = undefined;
      this._protectedEndpoints.internalValue = undefined;
      this._trustedClients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsAccountNo = value.awsAccountNo;
      this._continueMitigationActionHdr = value.continueMitigationActionHdr;
      this._dataSample = value.dataSample;
      this._disableAwsConfiguration = value.disableAwsConfiguration;
      this._disableJsInsert = value.disableJsInsert;
      this._disableMobileSdk = value.disableMobileSdk;
      this._jsDownloadPath = value.jsDownloadPath;
      this._loglevel = value.loglevel;
      this._timeout = value.timeout;
      this._awsConfigurationIdSelector.internalValue = value.awsConfigurationIdSelector;
      this._awsConfigurationTagSelector.internalValue = value.awsConfigurationTagSelector;
      this._jsInsertAllPages.internalValue = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
      this._manualJsInsert.internalValue = value.manualJsInsert;
      this._mobileSdkConfig.internalValue = value.mobileSdkConfig;
      this._protectedEndpoints.internalValue = value.protectedEndpoints;
      this._trustedClients.internalValue = value.trustedClients;
    }
  }

  // aws_account_no - computed: false, optional: true, required: false
  private _awsAccountNo?: string; 
  public get awsAccountNo() {
    return this.getStringAttribute('aws_account_no');
  }
  public set awsAccountNo(value: string) {
    this._awsAccountNo = value;
  }
  public resetAwsAccountNo() {
    this._awsAccountNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountNoInput() {
    return this._awsAccountNo;
  }

  // continue_mitigation_action_hdr - computed: false, optional: true, required: false
  private _continueMitigationActionHdr?: string; 
  public get continueMitigationActionHdr() {
    return this.getStringAttribute('continue_mitigation_action_hdr');
  }
  public set continueMitigationActionHdr(value: string) {
    this._continueMitigationActionHdr = value;
  }
  public resetContinueMitigationActionHdr() {
    this._continueMitigationActionHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueMitigationActionHdrInput() {
    return this._continueMitigationActionHdr;
  }

  // data_sample - computed: false, optional: true, required: false
  private _dataSample?: number; 
  public get dataSample() {
    return this.getNumberAttribute('data_sample');
  }
  public set dataSample(value: number) {
    this._dataSample = value;
  }
  public resetDataSample() {
    this._dataSample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSampleInput() {
    return this._dataSample;
  }

  // disable_aws_configuration - computed: false, optional: true, required: false
  private _disableAwsConfiguration?: boolean | cdktf.IResolvable; 
  public get disableAwsConfiguration() {
    return this.getBooleanAttribute('disable_aws_configuration');
  }
  public set disableAwsConfiguration(value: boolean | cdktf.IResolvable) {
    this._disableAwsConfiguration = value;
  }
  public resetDisableAwsConfiguration() {
    this._disableAwsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAwsConfigurationInput() {
    return this._disableAwsConfiguration;
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // disable_mobile_sdk - computed: false, optional: true, required: false
  private _disableMobileSdk?: boolean | cdktf.IResolvable; 
  public get disableMobileSdk() {
    return this.getBooleanAttribute('disable_mobile_sdk');
  }
  public set disableMobileSdk(value: boolean | cdktf.IResolvable) {
    this._disableMobileSdk = value;
  }
  public resetDisableMobileSdk() {
    this._disableMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMobileSdkInput() {
    return this._disableMobileSdk;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // loglevel - computed: false, optional: true, required: false
  private _loglevel?: string; 
  public get loglevel() {
    return this.getStringAttribute('loglevel');
  }
  public set loglevel(value: string) {
    this._loglevel = value;
  }
  public resetLoglevel() {
    this._loglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loglevelInput() {
    return this._loglevel;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // aws_configuration_id_selector - computed: false, optional: true, required: false
  private _awsConfigurationIdSelector = new ProtectedApplicationCloudfrontAwsConfigurationIdSelectorOutputReference(this, "aws_configuration_id_selector");
  public get awsConfigurationIdSelector() {
    return this._awsConfigurationIdSelector;
  }
  public putAwsConfigurationIdSelector(value: ProtectedApplicationCloudfrontAwsConfigurationIdSelector) {
    this._awsConfigurationIdSelector.internalValue = value;
  }
  public resetAwsConfigurationIdSelector() {
    this._awsConfigurationIdSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigurationIdSelectorInput() {
    return this._awsConfigurationIdSelector.internalValue;
  }

  // aws_configuration_tag_selector - computed: false, optional: true, required: false
  private _awsConfigurationTagSelector = new ProtectedApplicationCloudfrontAwsConfigurationTagSelectorOutputReference(this, "aws_configuration_tag_selector");
  public get awsConfigurationTagSelector() {
    return this._awsConfigurationTagSelector;
  }
  public putAwsConfigurationTagSelector(value: ProtectedApplicationCloudfrontAwsConfigurationTagSelector) {
    this._awsConfigurationTagSelector.internalValue = value;
  }
  public resetAwsConfigurationTagSelector() {
    this._awsConfigurationTagSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigurationTagSelectorInput() {
    return this._awsConfigurationTagSelector.internalValue;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages = new ProtectedApplicationCloudfrontJsInsertAllPagesOutputReference(this, "js_insert_all_pages");
  public get jsInsertAllPages() {
    return this._jsInsertAllPages;
  }
  public putJsInsertAllPages(value: ProtectedApplicationCloudfrontJsInsertAllPages) {
    this._jsInsertAllPages.internalValue = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages.internalValue;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new ProtectedApplicationCloudfrontJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: ProtectedApplicationCloudfrontJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new ProtectedApplicationCloudfrontJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: ProtectedApplicationCloudfrontJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }

  // manual_js_insert - computed: false, optional: true, required: false
  private _manualJsInsert = new ProtectedApplicationCloudfrontManualJsInsertOutputReference(this, "manual_js_insert");
  public get manualJsInsert() {
    return this._manualJsInsert;
  }
  public putManualJsInsert(value: ProtectedApplicationCloudfrontManualJsInsert) {
    this._manualJsInsert.internalValue = value;
  }
  public resetManualJsInsert() {
    this._manualJsInsert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualJsInsertInput() {
    return this._manualJsInsert.internalValue;
  }

  // mobile_sdk_config - computed: false, optional: true, required: false
  private _mobileSdkConfig = new ProtectedApplicationCloudfrontMobileSdkConfigOutputReference(this, "mobile_sdk_config");
  public get mobileSdkConfig() {
    return this._mobileSdkConfig;
  }
  public putMobileSdkConfig(value: ProtectedApplicationCloudfrontMobileSdkConfig) {
    this._mobileSdkConfig.internalValue = value;
  }
  public resetMobileSdkConfig() {
    this._mobileSdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSdkConfigInput() {
    return this._mobileSdkConfig.internalValue;
  }

  // protected_endpoints - computed: false, optional: false, required: true
  private _protectedEndpoints = new ProtectedApplicationCloudfrontProtectedEndpointsList(this, "protected_endpoints", false);
  public get protectedEndpoints() {
    return this._protectedEndpoints;
  }
  public putProtectedEndpoints(value: ProtectedApplicationCloudfrontProtectedEndpoints[] | cdktf.IResolvable) {
    this._protectedEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedEndpointsInput() {
    return this._protectedEndpoints.internalValue;
  }

  // trusted_clients - computed: false, optional: true, required: false
  private _trustedClients = new ProtectedApplicationCloudfrontTrustedClientsList(this, "trusted_clients", false);
  public get trustedClients() {
    return this._trustedClients;
  }
  public putTrustedClients(value: ProtectedApplicationCloudfrontTrustedClients[] | cdktf.IResolvable) {
    this._trustedClients.internalValue = value;
  }
  public resetTrustedClients() {
    this._trustedClients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedClientsInput() {
    return this._trustedClients.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application volterra_protected_application}
*/
export class ProtectedApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_protected_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectedApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectedApplication to import
  * @param importFromId The id of the existing ProtectedApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectedApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_protected_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/protected_application volterra_protected_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectedApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectedApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_protected_application',
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
    this._adobeCommerceConnector = config.adobeCommerceConnector;
    this._annotations = config.annotations;
    this._bigIpIapp = config.bigIpIapp;
    this._customConnector = config.customConnector;
    this._description = config.description;
    this._disable = config.disable;
    this._f5BigIp = config.f5BigIp;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._notApplicableConnector = config.notApplicableConnector;
    this._region = config.region;
    this._salesforceCommerceConnector = config.salesforceCommerceConnector;
    this._cloudflare.internalValue = config.cloudflare;
    this._cloudfront.internalValue = config.cloudfront;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adobe_commerce_connector - computed: false, optional: true, required: false
  private _adobeCommerceConnector?: boolean | cdktf.IResolvable; 
  public get adobeCommerceConnector() {
    return this.getBooleanAttribute('adobe_commerce_connector');
  }
  public set adobeCommerceConnector(value: boolean | cdktf.IResolvable) {
    this._adobeCommerceConnector = value;
  }
  public resetAdobeCommerceConnector() {
    this._adobeCommerceConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adobeCommerceConnectorInput() {
    return this._adobeCommerceConnector;
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

  // big_ip_iapp - computed: false, optional: true, required: false
  private _bigIpIapp?: boolean | cdktf.IResolvable; 
  public get bigIpIapp() {
    return this.getBooleanAttribute('big_ip_iapp');
  }
  public set bigIpIapp(value: boolean | cdktf.IResolvable) {
    this._bigIpIapp = value;
  }
  public resetBigIpIapp() {
    this._bigIpIapp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigIpIappInput() {
    return this._bigIpIapp;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector?: boolean | cdktf.IResolvable; 
  public get customConnector() {
    return this.getBooleanAttribute('custom_connector');
  }
  public set customConnector(value: boolean | cdktf.IResolvable) {
    this._customConnector = value;
  }
  public resetCustomConnector() {
    this._customConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector;
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

  // f5_big_ip - computed: false, optional: true, required: false
  private _f5BigIp?: boolean | cdktf.IResolvable; 
  public get f5BigIp() {
    return this.getBooleanAttribute('f5_big_ip');
  }
  public set f5BigIp(value: boolean | cdktf.IResolvable) {
    this._f5BigIp = value;
  }
  public resetF5BigIp() {
    this._f5BigIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5BigIpInput() {
    return this._f5BigIp;
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

  // not_applicable_connector - computed: false, optional: true, required: false
  private _notApplicableConnector?: boolean | cdktf.IResolvable; 
  public get notApplicableConnector() {
    return this.getBooleanAttribute('not_applicable_connector');
  }
  public set notApplicableConnector(value: boolean | cdktf.IResolvable) {
    this._notApplicableConnector = value;
  }
  public resetNotApplicableConnector() {
    this._notApplicableConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notApplicableConnectorInput() {
    return this._notApplicableConnector;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // salesforce_commerce_connector - computed: false, optional: true, required: false
  private _salesforceCommerceConnector?: boolean | cdktf.IResolvable; 
  public get salesforceCommerceConnector() {
    return this.getBooleanAttribute('salesforce_commerce_connector');
  }
  public set salesforceCommerceConnector(value: boolean | cdktf.IResolvable) {
    this._salesforceCommerceConnector = value;
  }
  public resetSalesforceCommerceConnector() {
    this._salesforceCommerceConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceCommerceConnectorInput() {
    return this._salesforceCommerceConnector;
  }

  // cloudflare - computed: false, optional: true, required: false
  private _cloudflare = new ProtectedApplicationCloudflareOutputReference(this, "cloudflare");
  public get cloudflare() {
    return this._cloudflare;
  }
  public putCloudflare(value: ProtectedApplicationCloudflare) {
    this._cloudflare.internalValue = value;
  }
  public resetCloudflare() {
    this._cloudflare.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareInput() {
    return this._cloudflare.internalValue;
  }

  // cloudfront - computed: false, optional: true, required: false
  private _cloudfront = new ProtectedApplicationCloudfrontOutputReference(this, "cloudfront");
  public get cloudfront() {
    return this._cloudfront;
  }
  public putCloudfront(value: ProtectedApplicationCloudfront) {
    this._cloudfront.internalValue = value;
  }
  public resetCloudfront() {
    this._cloudfront.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfrontInput() {
    return this._cloudfront.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adobe_commerce_connector: cdktf.booleanToTerraform(this._adobeCommerceConnector),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      big_ip_iapp: cdktf.booleanToTerraform(this._bigIpIapp),
      custom_connector: cdktf.booleanToTerraform(this._customConnector),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      f5_big_ip: cdktf.booleanToTerraform(this._f5BigIp),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      not_applicable_connector: cdktf.booleanToTerraform(this._notApplicableConnector),
      region: cdktf.stringToTerraform(this._region),
      salesforce_commerce_connector: cdktf.booleanToTerraform(this._salesforceCommerceConnector),
      cloudflare: protectedApplicationCloudflareToTerraform(this._cloudflare.internalValue),
      cloudfront: protectedApplicationCloudfrontToTerraform(this._cloudfront.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adobe_commerce_connector: {
        value: cdktf.booleanToHclTerraform(this._adobeCommerceConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      big_ip_iapp: {
        value: cdktf.booleanToHclTerraform(this._bigIpIapp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_connector: {
        value: cdktf.booleanToHclTerraform(this._customConnector),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      f5_big_ip: {
        value: cdktf.booleanToHclTerraform(this._f5BigIp),
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
      not_applicable_connector: {
        value: cdktf.booleanToHclTerraform(this._notApplicableConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salesforce_commerce_connector: {
        value: cdktf.booleanToHclTerraform(this._salesforceCommerceConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudflare: {
        value: protectedApplicationCloudflareToHclTerraform(this._cloudflare.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectedApplicationCloudflareList",
      },
      cloudfront: {
        value: protectedApplicationCloudfrontToHclTerraform(this._cloudfront.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtectedApplicationCloudfrontList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
