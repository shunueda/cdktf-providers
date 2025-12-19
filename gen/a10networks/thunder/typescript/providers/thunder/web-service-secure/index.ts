// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebServiceSecureAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#id WebServiceSecureA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Restart WEB service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#restart WebServiceSecureA#restart}
  */
  readonly restart?: number;
  /**
  * Wipe WEB private-key and certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#wipe WebServiceSecureA#wipe}
  */
  readonly wipe?: number;
  /**
  * certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#certificate WebServiceSecureA#certificate}
  */
  readonly certificate?: WebServiceSecureCertificateA;
  /**
  * generate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#generate WebServiceSecureA#generate}
  */
  readonly generate?: WebServiceSecureGenerateA;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#private_key WebServiceSecureA#private_key}
  */
  readonly privateKey?: WebServiceSecurePrivateKeyA;
  /**
  * regenerate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#regenerate WebServiceSecureA#regenerate}
  */
  readonly regenerate?: WebServiceSecureRegenerateA;
}
export interface WebServiceSecureCertificateA {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#file_url WebServiceSecureA#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Load WEB certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#load WebServiceSecureA#load}
  */
  readonly load?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#use_mgmt_port WebServiceSecureA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function webServiceSecureCertificateAToTerraform(struct?: WebServiceSecureCertificateAOutputReference | WebServiceSecureCertificateA): any {
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


export function webServiceSecureCertificateAToHclTerraform(struct?: WebServiceSecureCertificateAOutputReference | WebServiceSecureCertificateA): any {
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

export class WebServiceSecureCertificateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureCertificateA | undefined {
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

  public set internalValue(value: WebServiceSecureCertificateA | undefined) {
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
export interface WebServiceSecureGenerateA {
  /**
  * The country name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#country WebServiceSecureA#country}
  */
  readonly country?: string;
  /**
  * The domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#domain_name WebServiceSecureA#domain_name}
  */
  readonly domainName?: string;
  /**
  * The location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#state WebServiceSecureA#state}
  */
  readonly state?: string;
}

export function webServiceSecureGenerateAToTerraform(struct?: WebServiceSecureGenerateAOutputReference | WebServiceSecureGenerateA): any {
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


export function webServiceSecureGenerateAToHclTerraform(struct?: WebServiceSecureGenerateAOutputReference | WebServiceSecureGenerateA): any {
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

export class WebServiceSecureGenerateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureGenerateA | undefined {
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

  public set internalValue(value: WebServiceSecureGenerateA | undefined) {
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
export interface WebServiceSecurePrivateKeyA {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#file_url WebServiceSecureA#file_url}
  */
  readonly fileUrl?: string;
  /**
  * Load WEB private-key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#load WebServiceSecureA#load}
  */
  readonly load?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#use_mgmt_port WebServiceSecureA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function webServiceSecurePrivateKeyAToTerraform(struct?: WebServiceSecurePrivateKeyAOutputReference | WebServiceSecurePrivateKeyA): any {
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


export function webServiceSecurePrivateKeyAToHclTerraform(struct?: WebServiceSecurePrivateKeyAOutputReference | WebServiceSecurePrivateKeyA): any {
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

export class WebServiceSecurePrivateKeyAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecurePrivateKeyA | undefined {
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

  public set internalValue(value: WebServiceSecurePrivateKeyA | undefined) {
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
export interface WebServiceSecureRegenerateA {
  /**
  * The country name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#country WebServiceSecureA#country}
  */
  readonly country?: string;
  /**
  * The domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#domain_name WebServiceSecureA#domain_name}
  */
  readonly domainName?: string;
  /**
  * The location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#state WebServiceSecureA#state}
  */
  readonly state?: string;
}

export function webServiceSecureRegenerateAToTerraform(struct?: WebServiceSecureRegenerateAOutputReference | WebServiceSecureRegenerateA): any {
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


export function webServiceSecureRegenerateAToHclTerraform(struct?: WebServiceSecureRegenerateAOutputReference | WebServiceSecureRegenerateA): any {
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

export class WebServiceSecureRegenerateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebServiceSecureRegenerateA | undefined {
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

  public set internalValue(value: WebServiceSecureRegenerateA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure thunder_web_service_secure}
*/
export class WebServiceSecureA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_service_secure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebServiceSecureA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebServiceSecureA to import
  * @param importFromId The id of the existing WebServiceSecureA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebServiceSecureA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_service_secure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_service_secure thunder_web_service_secure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebServiceSecureAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebServiceSecureAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_service_secure',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._restart = config.restart;
    this._wipe = config.wipe;
    this._certificate.internalValue = config.certificate;
    this._generate.internalValue = config.generate;
    this._privateKey.internalValue = config.privateKey;
    this._regenerate.internalValue = config.regenerate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _certificate = new WebServiceSecureCertificateAOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: WebServiceSecureCertificateA) {
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
  private _generate = new WebServiceSecureGenerateAOutputReference(this, "generate");
  public get generate() {
    return this._generate;
  }
  public putGenerate(value: WebServiceSecureGenerateA) {
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
  private _privateKey = new WebServiceSecurePrivateKeyAOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: WebServiceSecurePrivateKeyA) {
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
  private _regenerate = new WebServiceSecureRegenerateAOutputReference(this, "regenerate");
  public get regenerate() {
    return this._regenerate;
  }
  public putRegenerate(value: WebServiceSecureRegenerateA) {
    this._regenerate.internalValue = value;
  }
  public resetRegenerate() {
    this._regenerate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regenerateInput() {
    return this._regenerate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      restart: cdktf.numberToTerraform(this._restart),
      wipe: cdktf.numberToTerraform(this._wipe),
      certificate: webServiceSecureCertificateAToTerraform(this._certificate.internalValue),
      generate: webServiceSecureGenerateAToTerraform(this._generate.internalValue),
      private_key: webServiceSecurePrivateKeyAToTerraform(this._privateKey.internalValue),
      regenerate: webServiceSecureRegenerateAToTerraform(this._regenerate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart: {
        value: cdktf.numberToHclTerraform(this._restart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wipe: {
        value: cdktf.numberToHclTerraform(this._wipe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: webServiceSecureCertificateAToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServiceSecureCertificateAList",
      },
      generate: {
        value: webServiceSecureGenerateAToHclTerraform(this._generate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServiceSecureGenerateAList",
      },
      private_key: {
        value: webServiceSecurePrivateKeyAToHclTerraform(this._privateKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServiceSecurePrivateKeyAList",
      },
      regenerate: {
        value: webServiceSecureRegenerateAToHclTerraform(this._regenerate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebServiceSecureRegenerateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
