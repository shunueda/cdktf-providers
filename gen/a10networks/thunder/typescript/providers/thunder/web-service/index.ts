// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Diable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#auto_redirt_disable WebService#auto_redirt_disable}
  */
  readonly autoRedirtDisable?: number;
  /**
  * Idle timeout of a xml service connection in minutes (Connection idle timeout value in minutes, default 10, 0 means never timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#axapi_idle WebService#axapi_idle}
  */
  readonly axapiIdle?: number;
  /**
  * Set the max allowed aXAPI sessions (Session limit (default 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#axapi_session_limit WebService#axapi_session_limit}
  */
  readonly axapiSessionLimit?: number;
  /**
  * Idle timeout of a connection in minutes (Connection idle timeout value in minutes, default 10, 0 means never timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#gui_idle WebService#gui_idle}
  */
  readonly guiIdle?: number;
  /**
  * Set the max allowed GUI sessions (Session limit (default 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#gui_session_limit WebService#gui_session_limit}
  */
  readonly guiSessionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#id WebService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set KeepAliveTimeout in seconds (KeepAliveTimeout in seconds (default 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#keep_alive_timeout WebService#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Set GUI login message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#login_message WebService#login_message}
  */
  readonly loginMessage?: string;
  /**
  * Set MaxKeepAliveRequests (MaxKeepAliveRequests (default 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#max_keep_alive_requests WebService#max_keep_alive_requests}
  */
  readonly maxKeepAliveRequests?: number;
  /**
  * Set Max Connections of MPM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#mpm_max_conn WebService#mpm_max_conn}
  */
  readonly mpmMaxConn?: number;
  /**
  * Set Max Connections Per Child of MPM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#mpm_max_conn_per_child WebService#mpm_max_conn_per_child}
  */
  readonly mpmMaxConnPerChild?: number;
  /**
  * Set Min Spare Connections of MPM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#mpm_min_spare_conn WebService#mpm_min_spare_conn}
  */
  readonly mpmMinSpareConn?: number;
  /**
  * Set Web Server Port (Port number(default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#port WebService#port}
  */
  readonly port?: number;
  /**
  * Set Pre GUI login message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#pre_login_message WebService#pre_login_message}
  */
  readonly preLoginMessage?: string;
  /**
  * Set web secure server port number for listening (Secure Port Number(default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#secure_port WebService#secure_port}
  */
  readonly securePort?: number;
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#secure_server_disable WebService#secure_server_disable}
  */
  readonly secureServerDisable?: number;
  /**
  * Disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#server_disable WebService#server_disable}
  */
  readonly serverDisable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#uuid WebService#uuid}
  */
  readonly uuid?: string;
  /**
  * public_apis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#public_apis WebService#public_apis}
  */
  readonly publicApis?: WebServicePublicApis[] | cdktf.IResolvable;
  /**
  * secure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#secure WebService#secure}
  */
  readonly secure?: WebServiceSecure;
}
export interface WebServicePublicApis {
  /**
  * API URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#api_uri WebService#api_uri}
  */
  readonly apiUri?: string;
}

export function webServicePublicApisToTerraform(struct?: WebServicePublicApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_uri: cdktf.stringToTerraform(struct!.apiUri),
  }
}


export function webServicePublicApisToHclTerraform(struct?: WebServicePublicApis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_uri: {
      value: cdktf.stringToHclTerraform(struct!.apiUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServicePublicApisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebServicePublicApis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUri = this._apiUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServicePublicApis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiUri = value.apiUri;
    }
  }

  // api_uri - computed: false, optional: true, required: false
  private _apiUri?: string; 
  public get apiUri() {
    return this.getStringAttribute('api_uri');
  }
  public set apiUri(value: string) {
    this._apiUri = value;
  }
  public resetApiUri() {
    this._apiUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUriInput() {
    return this._apiUri;
  }
}

export class WebServicePublicApisList extends cdktf.ComplexList {
  public internalValue? : WebServicePublicApis[] | cdktf.IResolvable

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
  public get(index: number): WebServicePublicApisOutputReference {
    return new WebServicePublicApisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebServiceSecureCertificate {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#file_url WebService#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Load WEB certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#load WebService#load}
  */
  readonly load?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#use_mgmt_port WebService#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function webServiceSecureCertificateToTerraform(struct?: WebServiceSecureCertificateOutputReference | WebServiceSecureCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    load: cdktf.numberToTerraform(struct!.load),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function webServiceSecureCertificateToHclTerraform(struct?: WebServiceSecureCertificateOutputReference | WebServiceSecureCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load: {
      value: cdktf.numberToHclTerraform(struct!.load),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceSecureCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceSecureCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileUrl = undefined;
      this._load = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileUrl = value.fileUrl;
      this._load = value.load;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // load - computed: false, optional: true, required: false
  private _load?: number; 
  public get load() {
    return this.getNumberAttribute('load');
  }
  public set load(value: number) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface WebServiceSecureGenerate {
  /**
  * The country name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#country WebService#country}
  */
  readonly country?: string;
  /**
  * The domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#domain_name WebService#domain_name}
  */
  readonly domainName?: string;
  /**
  * The location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#state WebService#state}
  */
  readonly state?: string;
}

export function webServiceSecureGenerateToTerraform(struct?: WebServiceSecureGenerateOutputReference | WebServiceSecureGenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function webServiceSecureGenerateToHclTerraform(struct?: WebServiceSecureGenerateOutputReference | WebServiceSecureGenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceSecureGenerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureGenerate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceSecureGenerate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._domainName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
      this._domainName = value.domainName;
      this._state = value.state;
    }
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface WebServiceSecurePrivateKey {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#file_url WebService#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Load WEB private-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#load WebService#load}
  */
  readonly load?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#use_mgmt_port WebService#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function webServiceSecurePrivateKeyToTerraform(struct?: WebServiceSecurePrivateKeyOutputReference | WebServiceSecurePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    load: cdktf.numberToTerraform(struct!.load),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function webServiceSecurePrivateKeyToHclTerraform(struct?: WebServiceSecurePrivateKeyOutputReference | WebServiceSecurePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load: {
      value: cdktf.numberToHclTerraform(struct!.load),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceSecurePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecurePrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._load !== undefined) {
      hasAnyValues = true;
      internalValueResult.load = this._load;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceSecurePrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileUrl = undefined;
      this._load = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileUrl = value.fileUrl;
      this._load = value.load;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // load - computed: false, optional: true, required: false
  private _load?: number; 
  public get load() {
    return this.getNumberAttribute('load');
  }
  public set load(value: number) {
    this._load = value;
  }
  public resetLoad() {
    this._load = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadInput() {
    return this._load;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}
export interface WebServiceSecureRegenerate {
  /**
  * The country name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#country WebService#country}
  */
  readonly country?: string;
  /**
  * The domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#domain_name WebService#domain_name}
  */
  readonly domainName?: string;
  /**
  * The location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#state WebService#state}
  */
  readonly state?: string;
}

export function webServiceSecureRegenerateToTerraform(struct?: WebServiceSecureRegenerateOutputReference | WebServiceSecureRegenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country: cdktf.stringToTerraform(struct!.country),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function webServiceSecureRegenerateToHclTerraform(struct?: WebServiceSecureRegenerateOutputReference | WebServiceSecureRegenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceSecureRegenerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureRegenerate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceSecureRegenerate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._country = undefined;
      this._domainName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._country = value.country;
      this._domainName = value.domainName;
      this._state = value.state;
    }
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface WebServiceSecure {
  /**
  * Restart WEB service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#restart WebService#restart}
  */
  readonly restart?: number;
  /**
  * Wipe WEB private-key and certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#wipe WebService#wipe}
  */
  readonly wipe?: number;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#certificate WebService#certificate}
  */
  readonly certificate?: WebServiceSecureCertificate;
  /**
  * generate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#generate WebService#generate}
  */
  readonly generate?: WebServiceSecureGenerate;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#private_key WebService#private_key}
  */
  readonly privateKey?: WebServiceSecurePrivateKey;
  /**
  * regenerate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#regenerate WebService#regenerate}
  */
  readonly regenerate?: WebServiceSecureRegenerate;
}

export function webServiceSecureToTerraform(struct?: WebServiceSecureOutputReference | WebServiceSecure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: cdktf.numberToTerraform(struct!.restart),
    wipe: cdktf.numberToTerraform(struct!.wipe),
    certificate: webServiceSecureCertificateToTerraform(struct!.certificate),
    generate: webServiceSecureGenerateToTerraform(struct!.generate),
    private_key: webServiceSecurePrivateKeyToTerraform(struct!.privateKey),
    regenerate: webServiceSecureRegenerateToTerraform(struct!.regenerate),
  }
}


export function webServiceSecureToHclTerraform(struct?: WebServiceSecureOutputReference | WebServiceSecure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: cdktf.numberToHclTerraform(struct!.restart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wipe: {
      value: cdktf.numberToHclTerraform(struct!.wipe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate: {
      value: webServiceSecureCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "list",
      storageClassType: "WebServiceSecureCertificateList",
    },
    generate: {
      value: webServiceSecureGenerateToHclTerraform(struct!.generate),
      isBlock: true,
      type: "list",
      storageClassType: "WebServiceSecureGenerateList",
    },
    private_key: {
      value: webServiceSecurePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "WebServiceSecurePrivateKeyList",
    },
    regenerate: {
      value: webServiceSecureRegenerateToHclTerraform(struct!.regenerate),
      isBlock: true,
      type: "list",
      storageClassType: "WebServiceSecureRegenerateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebServiceSecureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restart !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart;
    }
    if (this._wipe !== undefined) {
      hasAnyValues = true;
      internalValueResult.wipe = this._wipe;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._generate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._regenerate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regenerate = this._regenerate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebServiceSecure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restart = undefined;
      this._wipe = undefined;
      this._certificate.internalValue = undefined;
      this._generate.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._regenerate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restart = value.restart;
      this._wipe = value.wipe;
      this._certificate.internalValue = value.certificate;
      this._generate.internalValue = value.generate;
      this._privateKey.internalValue = value.privateKey;
      this._regenerate.internalValue = value.regenerate;
    }
  }

  // restart - computed: false, optional: true, required: false
  private _restart?: number; 
  public get restart() {
    return this.getNumberAttribute('restart');
  }
  public set restart(value: number) {
    this._restart = value;
  }
  public resetRestart() {
    this._restart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart;
  }

  // wipe - computed: false, optional: true, required: false
  private _wipe?: number; 
  public get wipe() {
    return this.getNumberAttribute('wipe');
  }
  public set wipe(value: number) {
    this._wipe = value;
  }
  public resetWipe() {
    this._wipe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeInput() {
    return this._wipe;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate = new WebServiceSecureCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: WebServiceSecureCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // generate - computed: false, optional: true, required: false
  private _generate = new WebServiceSecureGenerateOutputReference(this, "generate");
  public get generate() {
    return this._generate;
  }
  public putGenerate(value: WebServiceSecureGenerate) {
    this._generate.internalValue = value;
  }
  public resetGenerate() {
    this._generate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate.internalValue;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey = new WebServiceSecurePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: WebServiceSecurePrivateKey) {
    this._privateKey.internalValue = value;
  }
  public resetPrivateKey() {
    this._privateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // regenerate - computed: false, optional: true, required: false
  private _regenerate = new WebServiceSecureRegenerateOutputReference(this, "regenerate");
  public get regenerate() {
    return this._regenerate;
  }
  public putRegenerate(value: WebServiceSecureRegenerate) {
    this._regenerate.internalValue = value;
  }
  public resetRegenerate() {
    this._regenerate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateInput() {
    return this._regenerate.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service thunder_web_service}
*/
export class WebService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebService to import
  * @param importFromId The id of the existing WebService that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/web_service thunder_web_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_service',
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
    this._autoRedirtDisable = config.autoRedirtDisable;
    this._axapiIdle = config.axapiIdle;
    this._axapiSessionLimit = config.axapiSessionLimit;
    this._guiIdle = config.guiIdle;
    this._guiSessionLimit = config.guiSessionLimit;
    this._id = config.id;
    this._keepAliveTimeout = config.keepAliveTimeout;
    this._loginMessage = config.loginMessage;
    this._maxKeepAliveRequests = config.maxKeepAliveRequests;
    this._mpmMaxConn = config.mpmMaxConn;
    this._mpmMaxConnPerChild = config.mpmMaxConnPerChild;
    this._mpmMinSpareConn = config.mpmMinSpareConn;
    this._port = config.port;
    this._preLoginMessage = config.preLoginMessage;
    this._securePort = config.securePort;
    this._secureServerDisable = config.secureServerDisable;
    this._serverDisable = config.serverDisable;
    this._uuid = config.uuid;
    this._publicApis.internalValue = config.publicApis;
    this._secure.internalValue = config.secure;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_redirt_disable - computed: false, optional: true, required: false
  private _autoRedirtDisable?: number; 
  public get autoRedirtDisable() {
    return this.getNumberAttribute('auto_redirt_disable');
  }
  public set autoRedirtDisable(value: number) {
    this._autoRedirtDisable = value;
  }
  public resetAutoRedirtDisable() {
    this._autoRedirtDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirtDisableInput() {
    return this._autoRedirtDisable;
  }

  // axapi_idle - computed: false, optional: true, required: false
  private _axapiIdle?: number; 
  public get axapiIdle() {
    return this.getNumberAttribute('axapi_idle');
  }
  public set axapiIdle(value: number) {
    this._axapiIdle = value;
  }
  public resetAxapiIdle() {
    this._axapiIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axapiIdleInput() {
    return this._axapiIdle;
  }

  // axapi_session_limit - computed: false, optional: true, required: false
  private _axapiSessionLimit?: number; 
  public get axapiSessionLimit() {
    return this.getNumberAttribute('axapi_session_limit');
  }
  public set axapiSessionLimit(value: number) {
    this._axapiSessionLimit = value;
  }
  public resetAxapiSessionLimit() {
    this._axapiSessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axapiSessionLimitInput() {
    return this._axapiSessionLimit;
  }

  // gui_idle - computed: false, optional: true, required: false
  private _guiIdle?: number; 
  public get guiIdle() {
    return this.getNumberAttribute('gui_idle');
  }
  public set guiIdle(value: number) {
    this._guiIdle = value;
  }
  public resetGuiIdle() {
    this._guiIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiIdleInput() {
    return this._guiIdle;
  }

  // gui_session_limit - computed: false, optional: true, required: false
  private _guiSessionLimit?: number; 
  public get guiSessionLimit() {
    return this.getNumberAttribute('gui_session_limit');
  }
  public set guiSessionLimit(value: number) {
    this._guiSessionLimit = value;
  }
  public resetGuiSessionLimit() {
    this._guiSessionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiSessionLimitInput() {
    return this._guiSessionLimit;
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

  // keep_alive_timeout - computed: false, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
  }

  // login_message - computed: false, optional: true, required: false
  private _loginMessage?: string; 
  public get loginMessage() {
    return this.getStringAttribute('login_message');
  }
  public set loginMessage(value: string) {
    this._loginMessage = value;
  }
  public resetLoginMessage() {
    this._loginMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMessageInput() {
    return this._loginMessage;
  }

  // max_keep_alive_requests - computed: false, optional: true, required: false
  private _maxKeepAliveRequests?: number; 
  public get maxKeepAliveRequests() {
    return this.getNumberAttribute('max_keep_alive_requests');
  }
  public set maxKeepAliveRequests(value: number) {
    this._maxKeepAliveRequests = value;
  }
  public resetMaxKeepAliveRequests() {
    this._maxKeepAliveRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKeepAliveRequestsInput() {
    return this._maxKeepAliveRequests;
  }

  // mpm_max_conn - computed: false, optional: true, required: false
  private _mpmMaxConn?: number; 
  public get mpmMaxConn() {
    return this.getNumberAttribute('mpm_max_conn');
  }
  public set mpmMaxConn(value: number) {
    this._mpmMaxConn = value;
  }
  public resetMpmMaxConn() {
    this._mpmMaxConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpmMaxConnInput() {
    return this._mpmMaxConn;
  }

  // mpm_max_conn_per_child - computed: false, optional: true, required: false
  private _mpmMaxConnPerChild?: number; 
  public get mpmMaxConnPerChild() {
    return this.getNumberAttribute('mpm_max_conn_per_child');
  }
  public set mpmMaxConnPerChild(value: number) {
    this._mpmMaxConnPerChild = value;
  }
  public resetMpmMaxConnPerChild() {
    this._mpmMaxConnPerChild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpmMaxConnPerChildInput() {
    return this._mpmMaxConnPerChild;
  }

  // mpm_min_spare_conn - computed: false, optional: true, required: false
  private _mpmMinSpareConn?: number; 
  public get mpmMinSpareConn() {
    return this.getNumberAttribute('mpm_min_spare_conn');
  }
  public set mpmMinSpareConn(value: number) {
    this._mpmMinSpareConn = value;
  }
  public resetMpmMinSpareConn() {
    this._mpmMinSpareConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpmMinSpareConnInput() {
    return this._mpmMinSpareConn;
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

  // pre_login_message - computed: false, optional: true, required: false
  private _preLoginMessage?: string; 
  public get preLoginMessage() {
    return this.getStringAttribute('pre_login_message');
  }
  public set preLoginMessage(value: string) {
    this._preLoginMessage = value;
  }
  public resetPreLoginMessage() {
    this._preLoginMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preLoginMessageInput() {
    return this._preLoginMessage;
  }

  // secure_port - computed: false, optional: true, required: false
  private _securePort?: number; 
  public get securePort() {
    return this.getNumberAttribute('secure_port');
  }
  public set securePort(value: number) {
    this._securePort = value;
  }
  public resetSecurePort() {
    this._securePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securePortInput() {
    return this._securePort;
  }

  // secure_server_disable - computed: false, optional: true, required: false
  private _secureServerDisable?: number; 
  public get secureServerDisable() {
    return this.getNumberAttribute('secure_server_disable');
  }
  public set secureServerDisable(value: number) {
    this._secureServerDisable = value;
  }
  public resetSecureServerDisable() {
    this._secureServerDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureServerDisableInput() {
    return this._secureServerDisable;
  }

  // server_disable - computed: false, optional: true, required: false
  private _serverDisable?: number; 
  public get serverDisable() {
    return this.getNumberAttribute('server_disable');
  }
  public set serverDisable(value: number) {
    this._serverDisable = value;
  }
  public resetServerDisable() {
    this._serverDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDisableInput() {
    return this._serverDisable;
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

  // public_apis - computed: false, optional: true, required: false
  private _publicApis = new WebServicePublicApisList(this, "public_apis", false);
  public get publicApis() {
    return this._publicApis;
  }
  public putPublicApis(value: WebServicePublicApis[] | cdktf.IResolvable) {
    this._publicApis.internalValue = value;
  }
  public resetPublicApis() {
    this._publicApis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicApisInput() {
    return this._publicApis.internalValue;
  }

  // secure - computed: false, optional: true, required: false
  private _secure = new WebServiceSecureOutputReference(this, "secure");
  public get secure() {
    return this._secure;
  }
  public putSecure(value: WebServiceSecure) {
    this._secure.internalValue = value;
  }
  public resetSecure() {
    this._secure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_redirt_disable: cdktf.numberToTerraform(this._autoRedirtDisable),
      axapi_idle: cdktf.numberToTerraform(this._axapiIdle),
      axapi_session_limit: cdktf.numberToTerraform(this._axapiSessionLimit),
      gui_idle: cdktf.numberToTerraform(this._guiIdle),
      gui_session_limit: cdktf.numberToTerraform(this._guiSessionLimit),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_timeout: cdktf.numberToTerraform(this._keepAliveTimeout),
      login_message: cdktf.stringToTerraform(this._loginMessage),
      max_keep_alive_requests: cdktf.numberToTerraform(this._maxKeepAliveRequests),
      mpm_max_conn: cdktf.numberToTerraform(this._mpmMaxConn),
      mpm_max_conn_per_child: cdktf.numberToTerraform(this._mpmMaxConnPerChild),
      mpm_min_spare_conn: cdktf.numberToTerraform(this._mpmMinSpareConn),
      port: cdktf.numberToTerraform(this._port),
      pre_login_message: cdktf.stringToTerraform(this._preLoginMessage),
      secure_port: cdktf.numberToTerraform(this._securePort),
      secure_server_disable: cdktf.numberToTerraform(this._secureServerDisable),
      server_disable: cdktf.numberToTerraform(this._serverDisable),
      uuid: cdktf.stringToTerraform(this._uuid),
      public_apis: cdktf.listMapper(webServicePublicApisToTerraform, true)(this._publicApis.internalValue),
      secure: webServiceSecureToTerraform(this._secure.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_redirt_disable: {
        value: cdktf.numberToHclTerraform(this._autoRedirtDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      axapi_idle: {
        value: cdktf.numberToHclTerraform(this._axapiIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      axapi_session_limit: {
        value: cdktf.numberToHclTerraform(this._axapiSessionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gui_idle: {
        value: cdktf.numberToHclTerraform(this._guiIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gui_session_limit: {
        value: cdktf.numberToHclTerraform(this._guiSessionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive_timeout: {
        value: cdktf.numberToHclTerraform(this._keepAliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_message: {
        value: cdktf.stringToHclTerraform(this._loginMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_keep_alive_requests: {
        value: cdktf.numberToHclTerraform(this._maxKeepAliveRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpm_max_conn: {
        value: cdktf.numberToHclTerraform(this._mpmMaxConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpm_max_conn_per_child: {
        value: cdktf.numberToHclTerraform(this._mpmMaxConnPerChild),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mpm_min_spare_conn: {
        value: cdktf.numberToHclTerraform(this._mpmMinSpareConn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pre_login_message: {
        value: cdktf.stringToHclTerraform(this._preLoginMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_port: {
        value: cdktf.numberToHclTerraform(this._securePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure_server_disable: {
        value: cdktf.numberToHclTerraform(this._secureServerDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_disable: {
        value: cdktf.numberToHclTerraform(this._serverDisable),
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
      public_apis: {
        value: cdktf.listMapperHcl(webServicePublicApisToHclTerraform, true)(this._publicApis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServicePublicApisList",
      },
      secure: {
        value: webServiceSecureToHclTerraform(this._secure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServiceSecureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
