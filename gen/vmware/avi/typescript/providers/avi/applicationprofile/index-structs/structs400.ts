import * as cdktf from 'cdktf';
import { ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToTerraform,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToHclTerraform,
ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList,
ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToTerraform,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToHclTerraform,
ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList,
ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToTerraform,
applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToHclTerraform,
ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList,
ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList,
ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit,
applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit,
applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits,
applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToTerraform,
applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToHclTerraform,
ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList,
ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit,
applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList,
ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit,
applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToTerraform,
applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToHclTerraform,
ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList,
ApplicationprofileDosRlProfileDosProfile,
applicationprofileDosRlProfileDosProfileToTerraform,
applicationprofileDosRlProfileDosProfileToHclTerraform,
ApplicationprofileDosRlProfileDosProfileList } from './structs0'
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#add_string Applicationprofile#add_string}
  */
  readonly addString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#keep_query Applicationprofile#keep_query}
  */
  readonly keepQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#port Applicationprofile#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#protocol Applicationprofile#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#host Applicationprofile#host}
  */
  readonly host?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#path Applicationprofile#path}
  */
  readonly path?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_string: cdktf.stringToTerraform(struct!.addString),
    keep_query: cdktf.stringToTerraform(struct!.keepQuery),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    host: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToTerraform, true)(struct!.host),
    path: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToTerraform, true)(struct!.path),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_string: {
      value: cdktf.stringToHclTerraform(struct!.addString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_query: {
      value: cdktf.stringToHclTerraform(struct!.keepQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToHclTerraform, true)(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList",
    },
    path: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addString !== undefined) {
      hasAnyValues = true;
      internalValueResult.addString = this._addString;
    }
    if (this._keepQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepQuery = this._keepQuery;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addString = undefined;
      this._keepQuery = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._statusCode = undefined;
      this._host.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addString = value.addString;
      this._keepQuery = value.keepQuery;
      this._port = value.port;
      this._protocol = value.protocol;
      this._statusCode = value.statusCode;
      this._host.internalValue = value.host;
      this._path.internalValue = value.path;
    }
  }

  // add_string - computed: true, optional: true, required: false
  private _addString?: string; 
  public get addString() {
    return this.getStringAttribute('add_string');
  }
  public set addString(value: string) {
    this._addString = value;
  }
  public resetAddString() {
    this._addString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addStringInput() {
    return this._addString;
  }

  // keep_query - computed: false, optional: true, required: false
  private _keepQuery?: string; 
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }
  public set keepQuery(value: string) {
    this._keepQuery = value;
  }
  public resetKeepQuery() {
    this._keepQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepQueryInput() {
    return this._keepQuery;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // host - computed: false, optional: true, required: false
  private _host = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }
  public putHost(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#status_code Applicationprofile#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#file Applicationprofile#file}
  */
  readonly file?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#redirect Applicationprofile#redirect}
  */
  readonly redirect?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    type: cdktf.stringToTerraform(struct!.type),
    file: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToTerraform, true)(struct!.file),
    redirect: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList",
    },
    redirect: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._type = undefined;
      this._file.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._type = value.type;
      this._file.internalValue = value.file;
      this._redirect.internalValue = value.redirect;
    }
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
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

  // file - computed: false, optional: true, required: false
  private _file = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirect[] | cdktf.IResolvable) {
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

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#burst_sz Applicationprofile#burst_sz}
  */
  readonly burstSz?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#count Applicationprofile#count}
  */
  readonly count?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#period Applicationprofile#period}
  */
  readonly period?: string;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_sz: cdktf.stringToTerraform(struct!.burstSz),
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
    period: cdktf.stringToTerraform(struct!.period),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_sz: {
      value: cdktf.stringToHclTerraform(struct!.burstSz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    period: {
      value: cdktf.stringToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSz !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSz = this._burstSz;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._burstSz = undefined;
      this._count = undefined;
      this._name = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._burstSz = value.burstSz;
      this._count = value.count;
      this._name = value.name;
      this._period = value.period;
    }
  }

  // burst_sz - computed: false, optional: true, required: false
  private _burstSz?: string; 
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }
  public set burstSz(value: string) {
    this._burstSz = value;
  }
  public resetBurstSz() {
    this._burstSz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSzInput() {
    return this._burstSz;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#explicit_tracking Applicationprofile#explicit_tracking}
  */
  readonly explicitTracking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#fine_grain Applicationprofile#fine_grain}
  */
  readonly fineGrain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http_cookie Applicationprofile#http_cookie}
  */
  readonly httpCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http_header Applicationprofile#http_header}
  */
  readonly httpHeader?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#action Applicationprofile#action}
  */
  readonly action: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#rate_limiter Applicationprofile#rate_limiter}
  */
  readonly rateLimiter?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    explicit_tracking: cdktf.stringToTerraform(struct!.explicitTracking),
    fine_grain: cdktf.stringToTerraform(struct!.fineGrain),
    http_cookie: cdktf.stringToTerraform(struct!.httpCookie),
    http_header: cdktf.stringToTerraform(struct!.httpHeader),
    action: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToTerraform, true)(struct!.action),
    rate_limiter: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToTerraform, true)(struct!.rateLimiter),
  }
}


export function applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    explicit_tracking: {
      value: cdktf.stringToHclTerraform(struct!.explicitTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fine_grain: {
      value: cdktf.stringToHclTerraform(struct!.fineGrain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie: {
      value: cdktf.stringToHclTerraform(struct!.httpCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdktf.stringToHclTerraform(struct!.httpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._explicitTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitTracking = this._explicitTracking;
    }
    if (this._fineGrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.fineGrain = this._fineGrain;
    }
    if (this._httpCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookie = this._httpCookie;
    }
    if (this._httpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._explicitTracking = undefined;
      this._fineGrain = undefined;
      this._httpCookie = undefined;
      this._httpHeader = undefined;
      this._action.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._explicitTracking = value.explicitTracking;
      this._fineGrain = value.fineGrain;
      this._httpCookie = value.httpCookie;
      this._httpHeader = value.httpHeader;
      this._action.internalValue = value.action;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // explicit_tracking - computed: false, optional: true, required: false
  private _explicitTracking?: string; 
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }
  public set explicitTracking(value: string) {
    this._explicitTracking = value;
  }
  public resetExplicitTracking() {
    this._explicitTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitTrackingInput() {
    return this._explicitTracking;
  }

  // fine_grain - computed: false, optional: true, required: false
  private _fineGrain?: string; 
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }
  public set fineGrain(value: string) {
    this._fineGrain = value;
  }
  public resetFineGrain() {
    this._fineGrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fineGrainInput() {
    return this._fineGrain;
  }

  // http_cookie - computed: true, optional: true, required: false
  private _httpCookie?: string; 
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }
  public set httpCookie(value: string) {
    this._httpCookie = value;
  }
  public resetHttpCookie() {
    this._httpCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieInput() {
    return this._httpCookie;
  }

  // http_header - computed: true, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
  }

  // action - computed: false, optional: false, required: true
  private _action = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfileRlProfile {
  /**
  * client_ip_connections_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_connections_rate_limit Applicationprofile#client_ip_connections_rate_limit}
  */
  readonly clientIpConnectionsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit[] | cdktf.IResolvable;
  /**
  * client_ip_failed_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_failed_requests_rate_limit Applicationprofile#client_ip_failed_requests_rate_limit}
  */
  readonly clientIpFailedRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * client_ip_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_requests_rate_limit Applicationprofile#client_ip_requests_rate_limit}
  */
  readonly clientIpRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * client_ip_scanners_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_scanners_requests_rate_limit Applicationprofile#client_ip_scanners_requests_rate_limit}
  */
  readonly clientIpScannersRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * client_ip_to_uri_failed_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_to_uri_failed_requests_rate_limit Applicationprofile#client_ip_to_uri_failed_requests_rate_limit}
  */
  readonly clientIpToUriFailedRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * client_ip_to_uri_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_ip_to_uri_requests_rate_limit Applicationprofile#client_ip_to_uri_requests_rate_limit}
  */
  readonly clientIpToUriRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * custom_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#custom_requests_rate_limit Applicationprofile#custom_requests_rate_limit}
  */
  readonly customRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * http_header_rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http_header_rate_limits Applicationprofile#http_header_rate_limits}
  */
  readonly httpHeaderRateLimits?: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits[] | cdktf.IResolvable;
  /**
  * uri_failed_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#uri_failed_requests_rate_limit Applicationprofile#uri_failed_requests_rate_limit}
  */
  readonly uriFailedRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * uri_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#uri_requests_rate_limit Applicationprofile#uri_requests_rate_limit}
  */
  readonly uriRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit[] | cdktf.IResolvable;
  /**
  * uri_scanners_requests_rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#uri_scanners_requests_rate_limit Applicationprofile#uri_scanners_requests_rate_limit}
  */
  readonly uriScannersRequestsRateLimit?: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileRlProfileToTerraform(struct?: ApplicationprofileDosRlProfileRlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_connections_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToTerraform, true)(struct!.clientIpConnectionsRateLimit),
    client_ip_failed_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToTerraform, true)(struct!.clientIpFailedRequestsRateLimit),
    client_ip_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToTerraform, true)(struct!.clientIpRequestsRateLimit),
    client_ip_scanners_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToTerraform, true)(struct!.clientIpScannersRequestsRateLimit),
    client_ip_to_uri_failed_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToTerraform, true)(struct!.clientIpToUriFailedRequestsRateLimit),
    client_ip_to_uri_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToTerraform, true)(struct!.clientIpToUriRequestsRateLimit),
    custom_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToTerraform, true)(struct!.customRequestsRateLimit),
    http_header_rate_limits: cdktf.listMapper(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToTerraform, true)(struct!.httpHeaderRateLimits),
    uri_failed_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToTerraform, true)(struct!.uriFailedRequestsRateLimit),
    uri_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToTerraform, true)(struct!.uriRequestsRateLimit),
    uri_scanners_requests_rate_limit: cdktf.listMapper(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToTerraform, true)(struct!.uriScannersRequestsRateLimit),
  }
}


export function applicationprofileDosRlProfileRlProfileToHclTerraform(struct?: ApplicationprofileDosRlProfileRlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_connections_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToHclTerraform, true)(struct!.clientIpConnectionsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList",
    },
    client_ip_failed_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToHclTerraform, true)(struct!.clientIpFailedRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList",
    },
    client_ip_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToHclTerraform, true)(struct!.clientIpRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList",
    },
    client_ip_scanners_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToHclTerraform, true)(struct!.clientIpScannersRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList",
    },
    client_ip_to_uri_failed_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToHclTerraform, true)(struct!.clientIpToUriFailedRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList",
    },
    client_ip_to_uri_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToHclTerraform, true)(struct!.clientIpToUriRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList",
    },
    custom_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToHclTerraform, true)(struct!.customRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList",
    },
    http_header_rate_limits: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToHclTerraform, true)(struct!.httpHeaderRateLimits),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList",
    },
    uri_failed_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToHclTerraform, true)(struct!.uriFailedRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList",
    },
    uri_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriRequestsRateLimitToHclTerraform, true)(struct!.uriRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList",
    },
    uri_scanners_requests_rate_limit: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitToHclTerraform, true)(struct!.uriScannersRequestsRateLimit),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileRlProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfileRlProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpConnectionsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpConnectionsRateLimit = this._clientIpConnectionsRateLimit?.internalValue;
    }
    if (this._clientIpFailedRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpFailedRequestsRateLimit = this._clientIpFailedRequestsRateLimit?.internalValue;
    }
    if (this._clientIpRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpRequestsRateLimit = this._clientIpRequestsRateLimit?.internalValue;
    }
    if (this._clientIpScannersRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpScannersRequestsRateLimit = this._clientIpScannersRequestsRateLimit?.internalValue;
    }
    if (this._clientIpToUriFailedRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpToUriFailedRequestsRateLimit = this._clientIpToUriFailedRequestsRateLimit?.internalValue;
    }
    if (this._clientIpToUriRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpToUriRequestsRateLimit = this._clientIpToUriRequestsRateLimit?.internalValue;
    }
    if (this._customRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRequestsRateLimit = this._customRequestsRateLimit?.internalValue;
    }
    if (this._httpHeaderRateLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderRateLimits = this._httpHeaderRateLimits?.internalValue;
    }
    if (this._uriFailedRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFailedRequestsRateLimit = this._uriFailedRequestsRateLimit?.internalValue;
    }
    if (this._uriRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriRequestsRateLimit = this._uriRequestsRateLimit?.internalValue;
    }
    if (this._uriScannersRequestsRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriScannersRequestsRateLimit = this._uriScannersRequestsRateLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfileRlProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpConnectionsRateLimit.internalValue = undefined;
      this._clientIpFailedRequestsRateLimit.internalValue = undefined;
      this._clientIpRequestsRateLimit.internalValue = undefined;
      this._clientIpScannersRequestsRateLimit.internalValue = undefined;
      this._clientIpToUriFailedRequestsRateLimit.internalValue = undefined;
      this._clientIpToUriRequestsRateLimit.internalValue = undefined;
      this._customRequestsRateLimit.internalValue = undefined;
      this._httpHeaderRateLimits.internalValue = undefined;
      this._uriFailedRequestsRateLimit.internalValue = undefined;
      this._uriRequestsRateLimit.internalValue = undefined;
      this._uriScannersRequestsRateLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpConnectionsRateLimit.internalValue = value.clientIpConnectionsRateLimit;
      this._clientIpFailedRequestsRateLimit.internalValue = value.clientIpFailedRequestsRateLimit;
      this._clientIpRequestsRateLimit.internalValue = value.clientIpRequestsRateLimit;
      this._clientIpScannersRequestsRateLimit.internalValue = value.clientIpScannersRequestsRateLimit;
      this._clientIpToUriFailedRequestsRateLimit.internalValue = value.clientIpToUriFailedRequestsRateLimit;
      this._clientIpToUriRequestsRateLimit.internalValue = value.clientIpToUriRequestsRateLimit;
      this._customRequestsRateLimit.internalValue = value.customRequestsRateLimit;
      this._httpHeaderRateLimits.internalValue = value.httpHeaderRateLimits;
      this._uriFailedRequestsRateLimit.internalValue = value.uriFailedRequestsRateLimit;
      this._uriRequestsRateLimit.internalValue = value.uriRequestsRateLimit;
      this._uriScannersRequestsRateLimit.internalValue = value.uriScannersRequestsRateLimit;
    }
  }

  // client_ip_connections_rate_limit - computed: false, optional: true, required: false
  private _clientIpConnectionsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList(this, "client_ip_connections_rate_limit", true);
  public get clientIpConnectionsRateLimit() {
    return this._clientIpConnectionsRateLimit;
  }
  public putClientIpConnectionsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit[] | cdktf.IResolvable) {
    this._clientIpConnectionsRateLimit.internalValue = value;
  }
  public resetClientIpConnectionsRateLimit() {
    this._clientIpConnectionsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpConnectionsRateLimitInput() {
    return this._clientIpConnectionsRateLimit.internalValue;
  }

  // client_ip_failed_requests_rate_limit - computed: false, optional: true, required: false
  private _clientIpFailedRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList(this, "client_ip_failed_requests_rate_limit", true);
  public get clientIpFailedRequestsRateLimit() {
    return this._clientIpFailedRequestsRateLimit;
  }
  public putClientIpFailedRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit[] | cdktf.IResolvable) {
    this._clientIpFailedRequestsRateLimit.internalValue = value;
  }
  public resetClientIpFailedRequestsRateLimit() {
    this._clientIpFailedRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpFailedRequestsRateLimitInput() {
    return this._clientIpFailedRequestsRateLimit.internalValue;
  }

  // client_ip_requests_rate_limit - computed: false, optional: true, required: false
  private _clientIpRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList(this, "client_ip_requests_rate_limit", true);
  public get clientIpRequestsRateLimit() {
    return this._clientIpRequestsRateLimit;
  }
  public putClientIpRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit[] | cdktf.IResolvable) {
    this._clientIpRequestsRateLimit.internalValue = value;
  }
  public resetClientIpRequestsRateLimit() {
    this._clientIpRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpRequestsRateLimitInput() {
    return this._clientIpRequestsRateLimit.internalValue;
  }

  // client_ip_scanners_requests_rate_limit - computed: false, optional: true, required: false
  private _clientIpScannersRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList(this, "client_ip_scanners_requests_rate_limit", true);
  public get clientIpScannersRequestsRateLimit() {
    return this._clientIpScannersRequestsRateLimit;
  }
  public putClientIpScannersRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit[] | cdktf.IResolvable) {
    this._clientIpScannersRequestsRateLimit.internalValue = value;
  }
  public resetClientIpScannersRequestsRateLimit() {
    this._clientIpScannersRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpScannersRequestsRateLimitInput() {
    return this._clientIpScannersRequestsRateLimit.internalValue;
  }

  // client_ip_to_uri_failed_requests_rate_limit - computed: false, optional: true, required: false
  private _clientIpToUriFailedRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList(this, "client_ip_to_uri_failed_requests_rate_limit", true);
  public get clientIpToUriFailedRequestsRateLimit() {
    return this._clientIpToUriFailedRequestsRateLimit;
  }
  public putClientIpToUriFailedRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit[] | cdktf.IResolvable) {
    this._clientIpToUriFailedRequestsRateLimit.internalValue = value;
  }
  public resetClientIpToUriFailedRequestsRateLimit() {
    this._clientIpToUriFailedRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpToUriFailedRequestsRateLimitInput() {
    return this._clientIpToUriFailedRequestsRateLimit.internalValue;
  }

  // client_ip_to_uri_requests_rate_limit - computed: false, optional: true, required: false
  private _clientIpToUriRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList(this, "client_ip_to_uri_requests_rate_limit", true);
  public get clientIpToUriRequestsRateLimit() {
    return this._clientIpToUriRequestsRateLimit;
  }
  public putClientIpToUriRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit[] | cdktf.IResolvable) {
    this._clientIpToUriRequestsRateLimit.internalValue = value;
  }
  public resetClientIpToUriRequestsRateLimit() {
    this._clientIpToUriRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpToUriRequestsRateLimitInput() {
    return this._clientIpToUriRequestsRateLimit.internalValue;
  }

  // custom_requests_rate_limit - computed: false, optional: true, required: false
  private _customRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList(this, "custom_requests_rate_limit", true);
  public get customRequestsRateLimit() {
    return this._customRequestsRateLimit;
  }
  public putCustomRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit[] | cdktf.IResolvable) {
    this._customRequestsRateLimit.internalValue = value;
  }
  public resetCustomRequestsRateLimit() {
    this._customRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestsRateLimitInput() {
    return this._customRequestsRateLimit.internalValue;
  }

  // http_header_rate_limits - computed: false, optional: true, required: false
  private _httpHeaderRateLimits = new ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList(this, "http_header_rate_limits", false);
  public get httpHeaderRateLimits() {
    return this._httpHeaderRateLimits;
  }
  public putHttpHeaderRateLimits(value: ApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits[] | cdktf.IResolvable) {
    this._httpHeaderRateLimits.internalValue = value;
  }
  public resetHttpHeaderRateLimits() {
    this._httpHeaderRateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderRateLimitsInput() {
    return this._httpHeaderRateLimits.internalValue;
  }

  // uri_failed_requests_rate_limit - computed: false, optional: true, required: false
  private _uriFailedRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList(this, "uri_failed_requests_rate_limit", true);
  public get uriFailedRequestsRateLimit() {
    return this._uriFailedRequestsRateLimit;
  }
  public putUriFailedRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit[] | cdktf.IResolvable) {
    this._uriFailedRequestsRateLimit.internalValue = value;
  }
  public resetUriFailedRequestsRateLimit() {
    this._uriFailedRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFailedRequestsRateLimitInput() {
    return this._uriFailedRequestsRateLimit.internalValue;
  }

  // uri_requests_rate_limit - computed: false, optional: true, required: false
  private _uriRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList(this, "uri_requests_rate_limit", true);
  public get uriRequestsRateLimit() {
    return this._uriRequestsRateLimit;
  }
  public putUriRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit[] | cdktf.IResolvable) {
    this._uriRequestsRateLimit.internalValue = value;
  }
  public resetUriRequestsRateLimit() {
    this._uriRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriRequestsRateLimitInput() {
    return this._uriRequestsRateLimit.internalValue;
  }

  // uri_scanners_requests_rate_limit - computed: false, optional: true, required: false
  private _uriScannersRequestsRateLimit = new ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitList(this, "uri_scanners_requests_rate_limit", true);
  public get uriScannersRequestsRateLimit() {
    return this._uriScannersRequestsRateLimit;
  }
  public putUriScannersRequestsRateLimit(value: ApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimit[] | cdktf.IResolvable) {
    this._uriScannersRequestsRateLimit.internalValue = value;
  }
  public resetUriScannersRequestsRateLimit() {
    this._uriScannersRequestsRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriScannersRequestsRateLimitInput() {
    return this._uriScannersRequestsRateLimit.internalValue;
  }
}

export class ApplicationprofileDosRlProfileRlProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfileRlProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileRlProfileOutputReference {
    return new ApplicationprofileDosRlProfileRlProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileDosRlProfile {
  /**
  * dos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#dos_profile Applicationprofile#dos_profile}
  */
  readonly dosProfile?: ApplicationprofileDosRlProfileDosProfile[] | cdktf.IResolvable;
  /**
  * rl_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#rl_profile Applicationprofile#rl_profile}
  */
  readonly rlProfile?: ApplicationprofileDosRlProfileRlProfile[] | cdktf.IResolvable;
}

export function applicationprofileDosRlProfileToTerraform(struct?: ApplicationprofileDosRlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dos_profile: cdktf.listMapper(applicationprofileDosRlProfileDosProfileToTerraform, true)(struct!.dosProfile),
    rl_profile: cdktf.listMapper(applicationprofileDosRlProfileRlProfileToTerraform, true)(struct!.rlProfile),
  }
}


export function applicationprofileDosRlProfileToHclTerraform(struct?: ApplicationprofileDosRlProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dos_profile: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileDosProfileToHclTerraform, true)(struct!.dosProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileDosProfileList",
    },
    rl_profile: {
      value: cdktf.listMapperHcl(applicationprofileDosRlProfileRlProfileToHclTerraform, true)(struct!.rlProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileDosRlProfileRlProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileDosRlProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileDosRlProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dosProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dosProfile = this._dosProfile?.internalValue;
    }
    if (this._rlProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rlProfile = this._rlProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileDosRlProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dosProfile.internalValue = undefined;
      this._rlProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dosProfile.internalValue = value.dosProfile;
      this._rlProfile.internalValue = value.rlProfile;
    }
  }

  // dos_profile - computed: false, optional: true, required: false
  private _dosProfile = new ApplicationprofileDosRlProfileDosProfileList(this, "dos_profile", true);
  public get dosProfile() {
    return this._dosProfile;
  }
  public putDosProfile(value: ApplicationprofileDosRlProfileDosProfile[] | cdktf.IResolvable) {
    this._dosProfile.internalValue = value;
  }
  public resetDosProfile() {
    this._dosProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosProfileInput() {
    return this._dosProfile.internalValue;
  }

  // rl_profile - computed: false, optional: true, required: false
  private _rlProfile = new ApplicationprofileDosRlProfileRlProfileList(this, "rl_profile", true);
  public get rlProfile() {
    return this._rlProfile;
  }
  public putRlProfile(value: ApplicationprofileDosRlProfileRlProfile[] | cdktf.IResolvable) {
    this._rlProfile.internalValue = value;
  }
  public resetRlProfile() {
    this._rlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rlProfileInput() {
    return this._rlProfile.internalValue;
  }
}

export class ApplicationprofileDosRlProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileDosRlProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileDosRlProfileOutputReference {
    return new ApplicationprofileDosRlProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCacheConfigUriNonCacheable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#match_case Applicationprofile#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#match_criteria Applicationprofile#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#match_decoded_string Applicationprofile#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#match_str Applicationprofile#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#string_group_refs Applicationprofile#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function applicationprofileHttpProfileCacheConfigUriNonCacheableToTerraform(struct?: ApplicationprofileHttpProfileCacheConfigUriNonCacheable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    match_decoded_string: cdktf.stringToTerraform(struct!.matchDecodedString),
    match_str: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchStr),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function applicationprofileHttpProfileCacheConfigUriNonCacheableToHclTerraform(struct?: ApplicationprofileHttpProfileCacheConfigUriNonCacheable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_case: {
      value: cdktf.stringToHclTerraform(struct!.matchCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_decoded_string: {
      value: cdktf.stringToHclTerraform(struct!.matchDecodedString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_str: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchStr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    string_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCacheConfigUriNonCacheable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._matchDecodedString !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDecodedString = this._matchDecodedString;
    }
    if (this._matchStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchStr = this._matchStr;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCacheConfigUriNonCacheable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._matchDecodedString = undefined;
      this._matchStr = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._matchDecodedString = value.matchDecodedString;
      this._matchStr = value.matchStr;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // match_case - computed: false, optional: true, required: false
  private _matchCase?: string; 
  public get matchCase() {
    return this.getStringAttribute('match_case');
  }
  public set matchCase(value: string) {
    this._matchCase = value;
  }
  public resetMatchCase() {
    this._matchCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCaseInput() {
    return this._matchCase;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_decoded_string - computed: false, optional: true, required: false
  private _matchDecodedString?: string; 
  public get matchDecodedString() {
    return this.getStringAttribute('match_decoded_string');
  }
  public set matchDecodedString(value: string) {
    this._matchDecodedString = value;
  }
  public resetMatchDecodedString() {
    this._matchDecodedString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDecodedStringInput() {
    return this._matchDecodedString;
  }

  // match_str - computed: false, optional: true, required: false
  private _matchStr?: string[]; 
  public get matchStr() {
    return this.getListAttribute('match_str');
  }
  public set matchStr(value: string[]) {
    this._matchStr = value;
  }
  public resetMatchStr() {
    this._matchStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStrInput() {
    return this._matchStr;
  }

  // string_group_refs - computed: false, optional: true, required: false
  private _stringGroupRefs?: string[]; 
  public get stringGroupRefs() {
    return this.getListAttribute('string_group_refs');
  }
  public set stringGroupRefs(value: string[]) {
    this._stringGroupRefs = value;
  }
  public resetStringGroupRefs() {
    this._stringGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringGroupRefsInput() {
    return this._stringGroupRefs;
  }
}

export class ApplicationprofileHttpProfileCacheConfigUriNonCacheableList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCacheConfigUriNonCacheable[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference {
    return new ApplicationprofileHttpProfileCacheConfigUriNonCacheableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#age_header Applicationprofile#age_header}
  */
  readonly ageHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#aggressive Applicationprofile#aggressive}
  */
  readonly aggressive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#date_header Applicationprofile#date_header}
  */
  readonly dateHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#default_expire Applicationprofile#default_expire}
  */
  readonly defaultExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enabled Applicationprofile#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#heuristic_expire Applicationprofile#heuristic_expire}
  */
  readonly heuristicExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ignore_request_cache_control Applicationprofile#ignore_request_cache_control}
  */
  readonly ignoreRequestCacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_cache_size Applicationprofile#max_cache_size}
  */
  readonly maxCacheSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_object_size Applicationprofile#max_object_size}
  */
  readonly maxObjectSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mime_types_block_group_refs Applicationprofile#mime_types_block_group_refs}
  */
  readonly mimeTypesBlockGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mime_types_block_lists Applicationprofile#mime_types_block_lists}
  */
  readonly mimeTypesBlockLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mime_types_group_refs Applicationprofile#mime_types_group_refs}
  */
  readonly mimeTypesGroupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mime_types_list Applicationprofile#mime_types_list}
  */
  readonly mimeTypesList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#min_object_size Applicationprofile#min_object_size}
  */
  readonly minObjectSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#query_cacheable Applicationprofile#query_cacheable}
  */
  readonly queryCacheable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#xcache_header Applicationprofile#xcache_header}
  */
  readonly xcacheHeader?: string;
  /**
  * uri_non_cacheable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#uri_non_cacheable Applicationprofile#uri_non_cacheable}
  */
  readonly uriNonCacheable?: ApplicationprofileHttpProfileCacheConfigUriNonCacheable[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileCacheConfigToTerraform(struct?: ApplicationprofileHttpProfileCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age_header: cdktf.stringToTerraform(struct!.ageHeader),
    aggressive: cdktf.stringToTerraform(struct!.aggressive),
    date_header: cdktf.stringToTerraform(struct!.dateHeader),
    default_expire: cdktf.stringToTerraform(struct!.defaultExpire),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    heuristic_expire: cdktf.stringToTerraform(struct!.heuristicExpire),
    ignore_request_cache_control: cdktf.stringToTerraform(struct!.ignoreRequestCacheControl),
    max_cache_size: cdktf.stringToTerraform(struct!.maxCacheSize),
    max_object_size: cdktf.stringToTerraform(struct!.maxObjectSize),
    mime_types_block_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mimeTypesBlockGroupRefs),
    mime_types_block_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mimeTypesBlockLists),
    mime_types_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mimeTypesGroupRefs),
    mime_types_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mimeTypesList),
    min_object_size: cdktf.stringToTerraform(struct!.minObjectSize),
    query_cacheable: cdktf.stringToTerraform(struct!.queryCacheable),
    xcache_header: cdktf.stringToTerraform(struct!.xcacheHeader),
    uri_non_cacheable: cdktf.listMapper(applicationprofileHttpProfileCacheConfigUriNonCacheableToTerraform, true)(struct!.uriNonCacheable),
  }
}


export function applicationprofileHttpProfileCacheConfigToHclTerraform(struct?: ApplicationprofileHttpProfileCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age_header: {
      value: cdktf.stringToHclTerraform(struct!.ageHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggressive: {
      value: cdktf.stringToHclTerraform(struct!.aggressive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_header: {
      value: cdktf.stringToHclTerraform(struct!.dateHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_expire: {
      value: cdktf.stringToHclTerraform(struct!.defaultExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heuristic_expire: {
      value: cdktf.stringToHclTerraform(struct!.heuristicExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_request_cache_control: {
      value: cdktf.stringToHclTerraform(struct!.ignoreRequestCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.maxCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_object_size: {
      value: cdktf.stringToHclTerraform(struct!.maxObjectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mime_types_block_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mimeTypesBlockGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mime_types_block_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mimeTypesBlockLists),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mime_types_group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mimeTypesGroupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mime_types_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mimeTypesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_object_size: {
      value: cdktf.stringToHclTerraform(struct!.minObjectSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_cacheable: {
      value: cdktf.stringToHclTerraform(struct!.queryCacheable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xcache_header: {
      value: cdktf.stringToHclTerraform(struct!.xcacheHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri_non_cacheable: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCacheConfigUriNonCacheableToHclTerraform, true)(struct!.uriNonCacheable),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCacheConfigUriNonCacheableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ageHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ageHeader = this._ageHeader;
    }
    if (this._aggressive !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressive = this._aggressive;
    }
    if (this._dateHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateHeader = this._dateHeader;
    }
    if (this._defaultExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultExpire = this._defaultExpire;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._heuristicExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.heuristicExpire = this._heuristicExpire;
    }
    if (this._ignoreRequestCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRequestCacheControl = this._ignoreRequestCacheControl;
    }
    if (this._maxCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheSize = this._maxCacheSize;
    }
    if (this._maxObjectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjectSize = this._maxObjectSize;
    }
    if (this._mimeTypesBlockGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeTypesBlockGroupRefs = this._mimeTypesBlockGroupRefs;
    }
    if (this._mimeTypesBlockLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeTypesBlockLists = this._mimeTypesBlockLists;
    }
    if (this._mimeTypesGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeTypesGroupRefs = this._mimeTypesGroupRefs;
    }
    if (this._mimeTypesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.mimeTypesList = this._mimeTypesList;
    }
    if (this._minObjectSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minObjectSize = this._minObjectSize;
    }
    if (this._queryCacheable !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCacheable = this._queryCacheable;
    }
    if (this._xcacheHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.xcacheHeader = this._xcacheHeader;
    }
    if (this._uriNonCacheable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriNonCacheable = this._uriNonCacheable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ageHeader = undefined;
      this._aggressive = undefined;
      this._dateHeader = undefined;
      this._defaultExpire = undefined;
      this._enabled = undefined;
      this._heuristicExpire = undefined;
      this._ignoreRequestCacheControl = undefined;
      this._maxCacheSize = undefined;
      this._maxObjectSize = undefined;
      this._mimeTypesBlockGroupRefs = undefined;
      this._mimeTypesBlockLists = undefined;
      this._mimeTypesGroupRefs = undefined;
      this._mimeTypesList = undefined;
      this._minObjectSize = undefined;
      this._queryCacheable = undefined;
      this._xcacheHeader = undefined;
      this._uriNonCacheable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ageHeader = value.ageHeader;
      this._aggressive = value.aggressive;
      this._dateHeader = value.dateHeader;
      this._defaultExpire = value.defaultExpire;
      this._enabled = value.enabled;
      this._heuristicExpire = value.heuristicExpire;
      this._ignoreRequestCacheControl = value.ignoreRequestCacheControl;
      this._maxCacheSize = value.maxCacheSize;
      this._maxObjectSize = value.maxObjectSize;
      this._mimeTypesBlockGroupRefs = value.mimeTypesBlockGroupRefs;
      this._mimeTypesBlockLists = value.mimeTypesBlockLists;
      this._mimeTypesGroupRefs = value.mimeTypesGroupRefs;
      this._mimeTypesList = value.mimeTypesList;
      this._minObjectSize = value.minObjectSize;
      this._queryCacheable = value.queryCacheable;
      this._xcacheHeader = value.xcacheHeader;
      this._uriNonCacheable.internalValue = value.uriNonCacheable;
    }
  }

  // age_header - computed: false, optional: true, required: false
  private _ageHeader?: string; 
  public get ageHeader() {
    return this.getStringAttribute('age_header');
  }
  public set ageHeader(value: string) {
    this._ageHeader = value;
  }
  public resetAgeHeader() {
    this._ageHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageHeaderInput() {
    return this._ageHeader;
  }

  // aggressive - computed: false, optional: true, required: false
  private _aggressive?: string; 
  public get aggressive() {
    return this.getStringAttribute('aggressive');
  }
  public set aggressive(value: string) {
    this._aggressive = value;
  }
  public resetAggressive() {
    this._aggressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveInput() {
    return this._aggressive;
  }

  // date_header - computed: false, optional: true, required: false
  private _dateHeader?: string; 
  public get dateHeader() {
    return this.getStringAttribute('date_header');
  }
  public set dateHeader(value: string) {
    this._dateHeader = value;
  }
  public resetDateHeader() {
    this._dateHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateHeaderInput() {
    return this._dateHeader;
  }

  // default_expire - computed: false, optional: true, required: false
  private _defaultExpire?: string; 
  public get defaultExpire() {
    return this.getStringAttribute('default_expire');
  }
  public set defaultExpire(value: string) {
    this._defaultExpire = value;
  }
  public resetDefaultExpire() {
    this._defaultExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExpireInput() {
    return this._defaultExpire;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // heuristic_expire - computed: false, optional: true, required: false
  private _heuristicExpire?: string; 
  public get heuristicExpire() {
    return this.getStringAttribute('heuristic_expire');
  }
  public set heuristicExpire(value: string) {
    this._heuristicExpire = value;
  }
  public resetHeuristicExpire() {
    this._heuristicExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heuristicExpireInput() {
    return this._heuristicExpire;
  }

  // ignore_request_cache_control - computed: false, optional: true, required: false
  private _ignoreRequestCacheControl?: string; 
  public get ignoreRequestCacheControl() {
    return this.getStringAttribute('ignore_request_cache_control');
  }
  public set ignoreRequestCacheControl(value: string) {
    this._ignoreRequestCacheControl = value;
  }
  public resetIgnoreRequestCacheControl() {
    this._ignoreRequestCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRequestCacheControlInput() {
    return this._ignoreRequestCacheControl;
  }

  // max_cache_size - computed: false, optional: true, required: false
  private _maxCacheSize?: string; 
  public get maxCacheSize() {
    return this.getStringAttribute('max_cache_size');
  }
  public set maxCacheSize(value: string) {
    this._maxCacheSize = value;
  }
  public resetMaxCacheSize() {
    this._maxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheSizeInput() {
    return this._maxCacheSize;
  }

  // max_object_size - computed: false, optional: true, required: false
  private _maxObjectSize?: string; 
  public get maxObjectSize() {
    return this.getStringAttribute('max_object_size');
  }
  public set maxObjectSize(value: string) {
    this._maxObjectSize = value;
  }
  public resetMaxObjectSize() {
    this._maxObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectSizeInput() {
    return this._maxObjectSize;
  }

  // mime_types_block_group_refs - computed: false, optional: true, required: false
  private _mimeTypesBlockGroupRefs?: string[]; 
  public get mimeTypesBlockGroupRefs() {
    return this.getListAttribute('mime_types_block_group_refs');
  }
  public set mimeTypesBlockGroupRefs(value: string[]) {
    this._mimeTypesBlockGroupRefs = value;
  }
  public resetMimeTypesBlockGroupRefs() {
    this._mimeTypesBlockGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypesBlockGroupRefsInput() {
    return this._mimeTypesBlockGroupRefs;
  }

  // mime_types_block_lists - computed: false, optional: true, required: false
  private _mimeTypesBlockLists?: string[]; 
  public get mimeTypesBlockLists() {
    return this.getListAttribute('mime_types_block_lists');
  }
  public set mimeTypesBlockLists(value: string[]) {
    this._mimeTypesBlockLists = value;
  }
  public resetMimeTypesBlockLists() {
    this._mimeTypesBlockLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypesBlockListsInput() {
    return this._mimeTypesBlockLists;
  }

  // mime_types_group_refs - computed: false, optional: true, required: false
  private _mimeTypesGroupRefs?: string[]; 
  public get mimeTypesGroupRefs() {
    return this.getListAttribute('mime_types_group_refs');
  }
  public set mimeTypesGroupRefs(value: string[]) {
    this._mimeTypesGroupRefs = value;
  }
  public resetMimeTypesGroupRefs() {
    this._mimeTypesGroupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypesGroupRefsInput() {
    return this._mimeTypesGroupRefs;
  }

  // mime_types_list - computed: false, optional: true, required: false
  private _mimeTypesList?: string[]; 
  public get mimeTypesList() {
    return this.getListAttribute('mime_types_list');
  }
  public set mimeTypesList(value: string[]) {
    this._mimeTypesList = value;
  }
  public resetMimeTypesList() {
    this._mimeTypesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mimeTypesListInput() {
    return this._mimeTypesList;
  }

  // min_object_size - computed: false, optional: true, required: false
  private _minObjectSize?: string; 
  public get minObjectSize() {
    return this.getStringAttribute('min_object_size');
  }
  public set minObjectSize(value: string) {
    this._minObjectSize = value;
  }
  public resetMinObjectSize() {
    this._minObjectSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minObjectSizeInput() {
    return this._minObjectSize;
  }

  // query_cacheable - computed: false, optional: true, required: false
  private _queryCacheable?: string; 
  public get queryCacheable() {
    return this.getStringAttribute('query_cacheable');
  }
  public set queryCacheable(value: string) {
    this._queryCacheable = value;
  }
  public resetQueryCacheable() {
    this._queryCacheable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCacheableInput() {
    return this._queryCacheable;
  }

  // xcache_header - computed: false, optional: true, required: false
  private _xcacheHeader?: string; 
  public get xcacheHeader() {
    return this.getStringAttribute('xcache_header');
  }
  public set xcacheHeader(value: string) {
    this._xcacheHeader = value;
  }
  public resetXcacheHeader() {
    this._xcacheHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xcacheHeaderInput() {
    return this._xcacheHeader;
  }

  // uri_non_cacheable - computed: false, optional: true, required: false
  private _uriNonCacheable = new ApplicationprofileHttpProfileCacheConfigUriNonCacheableList(this, "uri_non_cacheable", true);
  public get uriNonCacheable() {
    return this._uriNonCacheable;
  }
  public putUriNonCacheable(value: ApplicationprofileHttpProfileCacheConfigUriNonCacheable[] | cdktf.IResolvable) {
    this._uriNonCacheable.internalValue = value;
  }
  public resetUriNonCacheable() {
    this._uriNonCacheable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriNonCacheableInput() {
    return this._uriNonCacheable.internalValue;
  }
}

export class ApplicationprofileHttpProfileCacheConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCacheConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCacheConfigOutputReference {
    return new ApplicationprofileHttpProfileCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#addr Applicationprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | cdktf.IResolvable): any {
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mask Applicationprofile#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ip_addr Applicationprofile#ip_addr}
  */
  readonly ipAddr: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ipAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mask = undefined;
      this._ipAddr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mask = value.mask;
      this._ipAddr.internalValue = value.ipAddr;
    }
  }

  // mask - computed: false, optional: false, required: true
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#addr Applicationprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | cdktf.IResolvable): any {
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#addr Applicationprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | cdktf.IResolvable): any {
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#begin Applicationprofile#begin}
  */
  readonly begin: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#end Applicationprofile#end}
  */
  readonly end: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToTerraform, true)(struct!.end),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._begin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.begin = this._begin?.internalValue;
    }
    if (this._end?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._begin.internalValue = undefined;
      this._end.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._begin.internalValue = value.begin;
      this._end.internalValue = value.end;
    }
  }

  // begin - computed: false, optional: false, required: true
  private _begin = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#addr Applicationprofile#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
}

export function applicationprofileHttpProfileCompressionProfileFilterIpAddrsToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterIpAddrsToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | cdktf.IResolvable): any {
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
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

export class ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#devices_ref Applicationprofile#devices_ref}
  */
  readonly devicesRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#index Applicationprofile#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ip_addrs_ref Applicationprofile#ip_addrs_ref}
  */
  readonly ipAddrsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#level Applicationprofile#level}
  */
  readonly level: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#match Applicationprofile#match}
  */
  readonly match?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#user_agent Applicationprofile#user_agent}
  */
  readonly userAgent?: string[];
  /**
  * ip_addr_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ip_addr_prefixes Applicationprofile#ip_addr_prefixes}
  */
  readonly ipAddrPrefixes?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes[] | cdktf.IResolvable;
  /**
  * ip_addr_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ip_addr_ranges Applicationprofile#ip_addr_ranges}
  */
  readonly ipAddrRanges?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges[] | cdktf.IResolvable;
  /**
  * ip_addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ip_addrs Applicationprofile#ip_addrs}
  */
  readonly ipAddrs?: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileCompressionProfileFilterToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices_ref: cdktf.stringToTerraform(struct!.devicesRef),
    index: cdktf.stringToTerraform(struct!.index),
    ip_addrs_ref: cdktf.stringToTerraform(struct!.ipAddrsRef),
    level: cdktf.stringToTerraform(struct!.level),
    match: cdktf.stringToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    user_agent: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAgent),
    ip_addr_prefixes: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToTerraform, true)(struct!.ipAddrPrefixes),
    ip_addr_ranges: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToTerraform, true)(struct!.ipAddrRanges),
    ip_addrs: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterIpAddrsToTerraform, true)(struct!.ipAddrs),
  }
}


export function applicationprofileHttpProfileCompressionProfileFilterToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfileFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices_ref: {
      value: cdktf.stringToHclTerraform(struct!.devicesRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addrs_ref: {
      value: cdktf.stringToHclTerraform(struct!.ipAddrsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
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
    user_agent: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAgent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_addr_prefixes: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesToHclTerraform, true)(struct!.ipAddrPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesList",
    },
    ip_addr_ranges: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrRangesToHclTerraform, true)(struct!.ipAddrRanges),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesList",
    },
    ip_addrs: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterIpAddrsToHclTerraform, true)(struct!.ipAddrs),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCompressionProfileFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfileFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicesRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicesRef = this._devicesRef;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._ipAddrsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrsRef = this._ipAddrsRef;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._ipAddrPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrPrefixes = this._ipAddrPrefixes?.internalValue;
    }
    if (this._ipAddrRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrRanges = this._ipAddrRanges?.internalValue;
    }
    if (this._ipAddrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrs = this._ipAddrs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfileFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicesRef = undefined;
      this._index = undefined;
      this._ipAddrsRef = undefined;
      this._level = undefined;
      this._match = undefined;
      this._name = undefined;
      this._userAgent = undefined;
      this._ipAddrPrefixes.internalValue = undefined;
      this._ipAddrRanges.internalValue = undefined;
      this._ipAddrs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicesRef = value.devicesRef;
      this._index = value.index;
      this._ipAddrsRef = value.ipAddrsRef;
      this._level = value.level;
      this._match = value.match;
      this._name = value.name;
      this._userAgent = value.userAgent;
      this._ipAddrPrefixes.internalValue = value.ipAddrPrefixes;
      this._ipAddrRanges.internalValue = value.ipAddrRanges;
      this._ipAddrs.internalValue = value.ipAddrs;
    }
  }

  // devices_ref - computed: true, optional: true, required: false
  private _devicesRef?: string; 
  public get devicesRef() {
    return this.getStringAttribute('devices_ref');
  }
  public set devicesRef(value: string) {
    this._devicesRef = value;
  }
  public resetDevicesRef() {
    this._devicesRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesRefInput() {
    return this._devicesRef;
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // ip_addrs_ref - computed: true, optional: true, required: false
  private _ipAddrsRef?: string; 
  public get ipAddrsRef() {
    return this.getStringAttribute('ip_addrs_ref');
  }
  public set ipAddrsRef(value: string) {
    this._ipAddrsRef = value;
  }
  public resetIpAddrsRef() {
    this._ipAddrsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrsRefInput() {
    return this._ipAddrsRef;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
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

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string[]; 
  public get userAgent() {
    return this.getListAttribute('user_agent');
  }
  public set userAgent(value: string[]) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // ip_addr_prefixes - computed: false, optional: true, required: false
  private _ipAddrPrefixes = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixesList(this, "ip_addr_prefixes", false);
  public get ipAddrPrefixes() {
    return this._ipAddrPrefixes;
  }
  public putIpAddrPrefixes(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrPrefixes[] | cdktf.IResolvable) {
    this._ipAddrPrefixes.internalValue = value;
  }
  public resetIpAddrPrefixes() {
    this._ipAddrPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrPrefixesInput() {
    return this._ipAddrPrefixes.internalValue;
  }

  // ip_addr_ranges - computed: false, optional: true, required: false
  private _ipAddrRanges = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRangesList(this, "ip_addr_ranges", false);
  public get ipAddrRanges() {
    return this._ipAddrRanges;
  }
  public putIpAddrRanges(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrRanges[] | cdktf.IResolvable) {
    this._ipAddrRanges.internalValue = value;
  }
  public resetIpAddrRanges() {
    this._ipAddrRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrRangesInput() {
    return this._ipAddrRanges.internalValue;
  }

  // ip_addrs - computed: false, optional: true, required: false
  private _ipAddrs = new ApplicationprofileHttpProfileCompressionProfileFilterIpAddrsList(this, "ip_addrs", false);
  public get ipAddrs() {
    return this._ipAddrs;
  }
  public putIpAddrs(value: ApplicationprofileHttpProfileCompressionProfileFilterIpAddrs[] | cdktf.IResolvable) {
    this._ipAddrs.internalValue = value;
  }
  public resetIpAddrs() {
    this._ipAddrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrsInput() {
    return this._ipAddrs.internalValue;
  }
}

export class ApplicationprofileHttpProfileCompressionProfileFilterList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfileFilter[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileFilterOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileCompressionProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#buf_num Applicationprofile#buf_num}
  */
  readonly bufNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#buf_size Applicationprofile#buf_size}
  */
  readonly bufSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#compressible_content_ref Applicationprofile#compressible_content_ref}
  */
  readonly compressibleContentRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#compression Applicationprofile#compression}
  */
  readonly compression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#hash_size Applicationprofile#hash_size}
  */
  readonly hashSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#level_aggressive Applicationprofile#level_aggressive}
  */
  readonly levelAggressive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#level_normal Applicationprofile#level_normal}
  */
  readonly levelNormal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_low_rtt Applicationprofile#max_low_rtt}
  */
  readonly maxLowRtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#min_high_rtt Applicationprofile#min_high_rtt}
  */
  readonly minHighRtt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#min_length Applicationprofile#min_length}
  */
  readonly minLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#mobile_str_ref Applicationprofile#mobile_str_ref}
  */
  readonly mobileStrRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#remove_accept_encoding_header Applicationprofile#remove_accept_encoding_header}
  */
  readonly removeAcceptEncodingHeader: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#window_size Applicationprofile#window_size}
  */
  readonly windowSize?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#filter Applicationprofile#filter}
  */
  readonly filter?: ApplicationprofileHttpProfileCompressionProfileFilter[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileCompressionProfileToTerraform(struct?: ApplicationprofileHttpProfileCompressionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buf_num: cdktf.stringToTerraform(struct!.bufNum),
    buf_size: cdktf.stringToTerraform(struct!.bufSize),
    compressible_content_ref: cdktf.stringToTerraform(struct!.compressibleContentRef),
    compression: cdktf.stringToTerraform(struct!.compression),
    hash_size: cdktf.stringToTerraform(struct!.hashSize),
    level_aggressive: cdktf.stringToTerraform(struct!.levelAggressive),
    level_normal: cdktf.stringToTerraform(struct!.levelNormal),
    max_low_rtt: cdktf.stringToTerraform(struct!.maxLowRtt),
    min_high_rtt: cdktf.stringToTerraform(struct!.minHighRtt),
    min_length: cdktf.stringToTerraform(struct!.minLength),
    mobile_str_ref: cdktf.stringToTerraform(struct!.mobileStrRef),
    remove_accept_encoding_header: cdktf.stringToTerraform(struct!.removeAcceptEncodingHeader),
    type: cdktf.stringToTerraform(struct!.type),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
    filter: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileFilterToTerraform, true)(struct!.filter),
  }
}


export function applicationprofileHttpProfileCompressionProfileToHclTerraform(struct?: ApplicationprofileHttpProfileCompressionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buf_num: {
      value: cdktf.stringToHclTerraform(struct!.bufNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buf_size: {
      value: cdktf.stringToHclTerraform(struct!.bufSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compressible_content_ref: {
      value: cdktf.stringToHclTerraform(struct!.compressibleContentRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_size: {
      value: cdktf.stringToHclTerraform(struct!.hashSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_aggressive: {
      value: cdktf.stringToHclTerraform(struct!.levelAggressive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_normal: {
      value: cdktf.stringToHclTerraform(struct!.levelNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_low_rtt: {
      value: cdktf.stringToHclTerraform(struct!.maxLowRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_high_rtt: {
      value: cdktf.stringToHclTerraform(struct!.minHighRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_length: {
      value: cdktf.stringToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_str_ref: {
      value: cdktf.stringToHclTerraform(struct!.mobileStrRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_accept_encoding_header: {
      value: cdktf.stringToHclTerraform(struct!.removeAcceptEncodingHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileCompressionProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileCompressionProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufNum = this._bufNum;
    }
    if (this._bufSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufSize = this._bufSize;
    }
    if (this._compressibleContentRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressibleContentRef = this._compressibleContentRef;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._hashSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSize = this._hashSize;
    }
    if (this._levelAggressive !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelAggressive = this._levelAggressive;
    }
    if (this._levelNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNormal = this._levelNormal;
    }
    if (this._maxLowRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLowRtt = this._maxLowRtt;
    }
    if (this._minHighRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.minHighRtt = this._minHighRtt;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._mobileStrRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileStrRef = this._mobileStrRef;
    }
    if (this._removeAcceptEncodingHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAcceptEncodingHeader = this._removeAcceptEncodingHeader;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileCompressionProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bufNum = undefined;
      this._bufSize = undefined;
      this._compressibleContentRef = undefined;
      this._compression = undefined;
      this._hashSize = undefined;
      this._levelAggressive = undefined;
      this._levelNormal = undefined;
      this._maxLowRtt = undefined;
      this._minHighRtt = undefined;
      this._minLength = undefined;
      this._mobileStrRef = undefined;
      this._removeAcceptEncodingHeader = undefined;
      this._type = undefined;
      this._windowSize = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bufNum = value.bufNum;
      this._bufSize = value.bufSize;
      this._compressibleContentRef = value.compressibleContentRef;
      this._compression = value.compression;
      this._hashSize = value.hashSize;
      this._levelAggressive = value.levelAggressive;
      this._levelNormal = value.levelNormal;
      this._maxLowRtt = value.maxLowRtt;
      this._minHighRtt = value.minHighRtt;
      this._minLength = value.minLength;
      this._mobileStrRef = value.mobileStrRef;
      this._removeAcceptEncodingHeader = value.removeAcceptEncodingHeader;
      this._type = value.type;
      this._windowSize = value.windowSize;
      this._filter.internalValue = value.filter;
    }
  }

  // buf_num - computed: false, optional: true, required: false
  private _bufNum?: string; 
  public get bufNum() {
    return this.getStringAttribute('buf_num');
  }
  public set bufNum(value: string) {
    this._bufNum = value;
  }
  public resetBufNum() {
    this._bufNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufNumInput() {
    return this._bufNum;
  }

  // buf_size - computed: false, optional: true, required: false
  private _bufSize?: string; 
  public get bufSize() {
    return this.getStringAttribute('buf_size');
  }
  public set bufSize(value: string) {
    this._bufSize = value;
  }
  public resetBufSize() {
    this._bufSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufSizeInput() {
    return this._bufSize;
  }

  // compressible_content_ref - computed: true, optional: true, required: false
  private _compressibleContentRef?: string; 
  public get compressibleContentRef() {
    return this.getStringAttribute('compressible_content_ref');
  }
  public set compressibleContentRef(value: string) {
    this._compressibleContentRef = value;
  }
  public resetCompressibleContentRef() {
    this._compressibleContentRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressibleContentRefInput() {
    return this._compressibleContentRef;
  }

  // compression - computed: false, optional: false, required: true
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // hash_size - computed: false, optional: true, required: false
  private _hashSize?: string; 
  public get hashSize() {
    return this.getStringAttribute('hash_size');
  }
  public set hashSize(value: string) {
    this._hashSize = value;
  }
  public resetHashSize() {
    this._hashSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSizeInput() {
    return this._hashSize;
  }

  // level_aggressive - computed: false, optional: true, required: false
  private _levelAggressive?: string; 
  public get levelAggressive() {
    return this.getStringAttribute('level_aggressive');
  }
  public set levelAggressive(value: string) {
    this._levelAggressive = value;
  }
  public resetLevelAggressive() {
    this._levelAggressive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelAggressiveInput() {
    return this._levelAggressive;
  }

  // level_normal - computed: false, optional: true, required: false
  private _levelNormal?: string; 
  public get levelNormal() {
    return this.getStringAttribute('level_normal');
  }
  public set levelNormal(value: string) {
    this._levelNormal = value;
  }
  public resetLevelNormal() {
    this._levelNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNormalInput() {
    return this._levelNormal;
  }

  // max_low_rtt - computed: false, optional: true, required: false
  private _maxLowRtt?: string; 
  public get maxLowRtt() {
    return this.getStringAttribute('max_low_rtt');
  }
  public set maxLowRtt(value: string) {
    this._maxLowRtt = value;
  }
  public resetMaxLowRtt() {
    this._maxLowRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLowRttInput() {
    return this._maxLowRtt;
  }

  // min_high_rtt - computed: false, optional: true, required: false
  private _minHighRtt?: string; 
  public get minHighRtt() {
    return this.getStringAttribute('min_high_rtt');
  }
  public set minHighRtt(value: string) {
    this._minHighRtt = value;
  }
  public resetMinHighRtt() {
    this._minHighRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHighRttInput() {
    return this._minHighRtt;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // mobile_str_ref - computed: true, optional: true, required: false
  private _mobileStrRef?: string; 
  public get mobileStrRef() {
    return this.getStringAttribute('mobile_str_ref');
  }
  public set mobileStrRef(value: string) {
    this._mobileStrRef = value;
  }
  public resetMobileStrRef() {
    this._mobileStrRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileStrRefInput() {
    return this._mobileStrRef;
  }

  // remove_accept_encoding_header - computed: false, optional: false, required: true
  private _removeAcceptEncodingHeader?: string; 
  public get removeAcceptEncodingHeader() {
    return this.getStringAttribute('remove_accept_encoding_header');
  }
  public set removeAcceptEncodingHeader(value: string) {
    this._removeAcceptEncodingHeader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAcceptEncodingHeaderInput() {
    return this._removeAcceptEncodingHeader;
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

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ApplicationprofileHttpProfileCompressionProfileFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ApplicationprofileHttpProfileCompressionProfileFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class ApplicationprofileHttpProfileCompressionProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileCompressionProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileCompressionProfileOutputReference {
    return new ApplicationprofileHttpProfileCompressionProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileHttp2Profile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enable_http2_server_push Applicationprofile#enable_http2_server_push}
  */
  readonly enableHttp2ServerPush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http2_initial_window_size Applicationprofile#http2_initial_window_size}
  */
  readonly http2InitialWindowSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_concurrent_pushes_per_connection Applicationprofile#max_http2_concurrent_pushes_per_connection}
  */
  readonly maxHttp2ConcurrentPushesPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_concurrent_streams_per_connection Applicationprofile#max_http2_concurrent_streams_per_connection}
  */
  readonly maxHttp2ConcurrentStreamsPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_control_frames_per_connection Applicationprofile#max_http2_control_frames_per_connection}
  */
  readonly maxHttp2ControlFramesPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_empty_data_frames_per_connection Applicationprofile#max_http2_empty_data_frames_per_connection}
  */
  readonly maxHttp2EmptyDataFramesPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_header_field_size Applicationprofile#max_http2_header_field_size}
  */
  readonly maxHttp2HeaderFieldSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_queued_frames_to_client_per_connection Applicationprofile#max_http2_queued_frames_to_client_per_connection}
  */
  readonly maxHttp2QueuedFramesToClientPerConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_http2_requests_per_connection Applicationprofile#max_http2_requests_per_connection}
  */
  readonly maxHttp2RequestsPerConnection?: string;
}

export function applicationprofileHttpProfileHttp2ProfileToTerraform(struct?: ApplicationprofileHttpProfileHttp2Profile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_http2_server_push: cdktf.stringToTerraform(struct!.enableHttp2ServerPush),
    http2_initial_window_size: cdktf.stringToTerraform(struct!.http2InitialWindowSize),
    max_http2_concurrent_pushes_per_connection: cdktf.stringToTerraform(struct!.maxHttp2ConcurrentPushesPerConnection),
    max_http2_concurrent_streams_per_connection: cdktf.stringToTerraform(struct!.maxHttp2ConcurrentStreamsPerConnection),
    max_http2_control_frames_per_connection: cdktf.stringToTerraform(struct!.maxHttp2ControlFramesPerConnection),
    max_http2_empty_data_frames_per_connection: cdktf.stringToTerraform(struct!.maxHttp2EmptyDataFramesPerConnection),
    max_http2_header_field_size: cdktf.stringToTerraform(struct!.maxHttp2HeaderFieldSize),
    max_http2_queued_frames_to_client_per_connection: cdktf.stringToTerraform(struct!.maxHttp2QueuedFramesToClientPerConnection),
    max_http2_requests_per_connection: cdktf.stringToTerraform(struct!.maxHttp2RequestsPerConnection),
  }
}


export function applicationprofileHttpProfileHttp2ProfileToHclTerraform(struct?: ApplicationprofileHttpProfileHttp2Profile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_http2_server_push: {
      value: cdktf.stringToHclTerraform(struct!.enableHttp2ServerPush),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2_initial_window_size: {
      value: cdktf.stringToHclTerraform(struct!.http2InitialWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_concurrent_pushes_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2ConcurrentPushesPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_concurrent_streams_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2ConcurrentStreamsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_control_frames_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2ControlFramesPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_empty_data_frames_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2EmptyDataFramesPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_header_field_size: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2HeaderFieldSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_queued_frames_to_client_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2QueuedFramesToClientPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_http2_requests_per_connection: {
      value: cdktf.stringToHclTerraform(struct!.maxHttp2RequestsPerConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileHttp2ProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileHttp2Profile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHttp2ServerPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2ServerPush = this._enableHttp2ServerPush;
    }
    if (this._http2InitialWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2InitialWindowSize = this._http2InitialWindowSize;
    }
    if (this._maxHttp2ConcurrentPushesPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2ConcurrentPushesPerConnection = this._maxHttp2ConcurrentPushesPerConnection;
    }
    if (this._maxHttp2ConcurrentStreamsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2ConcurrentStreamsPerConnection = this._maxHttp2ConcurrentStreamsPerConnection;
    }
    if (this._maxHttp2ControlFramesPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2ControlFramesPerConnection = this._maxHttp2ControlFramesPerConnection;
    }
    if (this._maxHttp2EmptyDataFramesPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2EmptyDataFramesPerConnection = this._maxHttp2EmptyDataFramesPerConnection;
    }
    if (this._maxHttp2HeaderFieldSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2HeaderFieldSize = this._maxHttp2HeaderFieldSize;
    }
    if (this._maxHttp2QueuedFramesToClientPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2QueuedFramesToClientPerConnection = this._maxHttp2QueuedFramesToClientPerConnection;
    }
    if (this._maxHttp2RequestsPerConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHttp2RequestsPerConnection = this._maxHttp2RequestsPerConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileHttp2Profile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableHttp2ServerPush = undefined;
      this._http2InitialWindowSize = undefined;
      this._maxHttp2ConcurrentPushesPerConnection = undefined;
      this._maxHttp2ConcurrentStreamsPerConnection = undefined;
      this._maxHttp2ControlFramesPerConnection = undefined;
      this._maxHttp2EmptyDataFramesPerConnection = undefined;
      this._maxHttp2HeaderFieldSize = undefined;
      this._maxHttp2QueuedFramesToClientPerConnection = undefined;
      this._maxHttp2RequestsPerConnection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableHttp2ServerPush = value.enableHttp2ServerPush;
      this._http2InitialWindowSize = value.http2InitialWindowSize;
      this._maxHttp2ConcurrentPushesPerConnection = value.maxHttp2ConcurrentPushesPerConnection;
      this._maxHttp2ConcurrentStreamsPerConnection = value.maxHttp2ConcurrentStreamsPerConnection;
      this._maxHttp2ControlFramesPerConnection = value.maxHttp2ControlFramesPerConnection;
      this._maxHttp2EmptyDataFramesPerConnection = value.maxHttp2EmptyDataFramesPerConnection;
      this._maxHttp2HeaderFieldSize = value.maxHttp2HeaderFieldSize;
      this._maxHttp2QueuedFramesToClientPerConnection = value.maxHttp2QueuedFramesToClientPerConnection;
      this._maxHttp2RequestsPerConnection = value.maxHttp2RequestsPerConnection;
    }
  }

  // enable_http2_server_push - computed: false, optional: true, required: false
  private _enableHttp2ServerPush?: string; 
  public get enableHttp2ServerPush() {
    return this.getStringAttribute('enable_http2_server_push');
  }
  public set enableHttp2ServerPush(value: string) {
    this._enableHttp2ServerPush = value;
  }
  public resetEnableHttp2ServerPush() {
    this._enableHttp2ServerPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2ServerPushInput() {
    return this._enableHttp2ServerPush;
  }

  // http2_initial_window_size - computed: false, optional: true, required: false
  private _http2InitialWindowSize?: string; 
  public get http2InitialWindowSize() {
    return this.getStringAttribute('http2_initial_window_size');
  }
  public set http2InitialWindowSize(value: string) {
    this._http2InitialWindowSize = value;
  }
  public resetHttp2InitialWindowSize() {
    this._http2InitialWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2InitialWindowSizeInput() {
    return this._http2InitialWindowSize;
  }

  // max_http2_concurrent_pushes_per_connection - computed: false, optional: true, required: false
  private _maxHttp2ConcurrentPushesPerConnection?: string; 
  public get maxHttp2ConcurrentPushesPerConnection() {
    return this.getStringAttribute('max_http2_concurrent_pushes_per_connection');
  }
  public set maxHttp2ConcurrentPushesPerConnection(value: string) {
    this._maxHttp2ConcurrentPushesPerConnection = value;
  }
  public resetMaxHttp2ConcurrentPushesPerConnection() {
    this._maxHttp2ConcurrentPushesPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2ConcurrentPushesPerConnectionInput() {
    return this._maxHttp2ConcurrentPushesPerConnection;
  }

  // max_http2_concurrent_streams_per_connection - computed: false, optional: true, required: false
  private _maxHttp2ConcurrentStreamsPerConnection?: string; 
  public get maxHttp2ConcurrentStreamsPerConnection() {
    return this.getStringAttribute('max_http2_concurrent_streams_per_connection');
  }
  public set maxHttp2ConcurrentStreamsPerConnection(value: string) {
    this._maxHttp2ConcurrentStreamsPerConnection = value;
  }
  public resetMaxHttp2ConcurrentStreamsPerConnection() {
    this._maxHttp2ConcurrentStreamsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2ConcurrentStreamsPerConnectionInput() {
    return this._maxHttp2ConcurrentStreamsPerConnection;
  }

  // max_http2_control_frames_per_connection - computed: false, optional: true, required: false
  private _maxHttp2ControlFramesPerConnection?: string; 
  public get maxHttp2ControlFramesPerConnection() {
    return this.getStringAttribute('max_http2_control_frames_per_connection');
  }
  public set maxHttp2ControlFramesPerConnection(value: string) {
    this._maxHttp2ControlFramesPerConnection = value;
  }
  public resetMaxHttp2ControlFramesPerConnection() {
    this._maxHttp2ControlFramesPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2ControlFramesPerConnectionInput() {
    return this._maxHttp2ControlFramesPerConnection;
  }

  // max_http2_empty_data_frames_per_connection - computed: false, optional: true, required: false
  private _maxHttp2EmptyDataFramesPerConnection?: string; 
  public get maxHttp2EmptyDataFramesPerConnection() {
    return this.getStringAttribute('max_http2_empty_data_frames_per_connection');
  }
  public set maxHttp2EmptyDataFramesPerConnection(value: string) {
    this._maxHttp2EmptyDataFramesPerConnection = value;
  }
  public resetMaxHttp2EmptyDataFramesPerConnection() {
    this._maxHttp2EmptyDataFramesPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2EmptyDataFramesPerConnectionInput() {
    return this._maxHttp2EmptyDataFramesPerConnection;
  }

  // max_http2_header_field_size - computed: false, optional: true, required: false
  private _maxHttp2HeaderFieldSize?: string; 
  public get maxHttp2HeaderFieldSize() {
    return this.getStringAttribute('max_http2_header_field_size');
  }
  public set maxHttp2HeaderFieldSize(value: string) {
    this._maxHttp2HeaderFieldSize = value;
  }
  public resetMaxHttp2HeaderFieldSize() {
    this._maxHttp2HeaderFieldSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2HeaderFieldSizeInput() {
    return this._maxHttp2HeaderFieldSize;
  }

  // max_http2_queued_frames_to_client_per_connection - computed: false, optional: true, required: false
  private _maxHttp2QueuedFramesToClientPerConnection?: string; 
  public get maxHttp2QueuedFramesToClientPerConnection() {
    return this.getStringAttribute('max_http2_queued_frames_to_client_per_connection');
  }
  public set maxHttp2QueuedFramesToClientPerConnection(value: string) {
    this._maxHttp2QueuedFramesToClientPerConnection = value;
  }
  public resetMaxHttp2QueuedFramesToClientPerConnection() {
    this._maxHttp2QueuedFramesToClientPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2QueuedFramesToClientPerConnectionInput() {
    return this._maxHttp2QueuedFramesToClientPerConnection;
  }

  // max_http2_requests_per_connection - computed: false, optional: true, required: false
  private _maxHttp2RequestsPerConnection?: string; 
  public get maxHttp2RequestsPerConnection() {
    return this.getStringAttribute('max_http2_requests_per_connection');
  }
  public set maxHttp2RequestsPerConnection(value: string) {
    this._maxHttp2RequestsPerConnection = value;
  }
  public resetMaxHttp2RequestsPerConnection() {
    this._maxHttp2RequestsPerConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHttp2RequestsPerConnectionInput() {
    return this._maxHttp2RequestsPerConnection;
  }
}

export class ApplicationprofileHttpProfileHttp2ProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileHttp2Profile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileHttp2ProfileOutputReference {
    return new ApplicationprofileHttpProfileHttp2ProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileSessionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_cookie_httponly Applicationprofile#session_cookie_httponly}
  */
  readonly sessionCookieHttponly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_cookie_name Applicationprofile#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_cookie_samesite Applicationprofile#session_cookie_samesite}
  */
  readonly sessionCookieSamesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_cookie_secure Applicationprofile#session_cookie_secure}
  */
  readonly sessionCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_establishment_timeout Applicationprofile#session_establishment_timeout}
  */
  readonly sessionEstablishmentTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_idle_timeout Applicationprofile#session_idle_timeout}
  */
  readonly sessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_maximum_timeout Applicationprofile#session_maximum_timeout}
  */
  readonly sessionMaximumTimeout?: string;
}

export function applicationprofileHttpProfileSessionConfigToTerraform(struct?: ApplicationprofileHttpProfileSessionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_cookie_httponly: cdktf.stringToTerraform(struct!.sessionCookieHttponly),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_cookie_samesite: cdktf.stringToTerraform(struct!.sessionCookieSamesite),
    session_cookie_secure: cdktf.stringToTerraform(struct!.sessionCookieSecure),
    session_establishment_timeout: cdktf.stringToTerraform(struct!.sessionEstablishmentTimeout),
    session_idle_timeout: cdktf.stringToTerraform(struct!.sessionIdleTimeout),
    session_maximum_timeout: cdktf.stringToTerraform(struct!.sessionMaximumTimeout),
  }
}


export function applicationprofileHttpProfileSessionConfigToHclTerraform(struct?: ApplicationprofileHttpProfileSessionConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_cookie_httponly: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_samesite: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_secure: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_establishment_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionEstablishmentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_maximum_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionMaximumTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileSessionConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileSessionConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionCookieHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieHttponly = this._sessionCookieHttponly;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionCookieSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSamesite = this._sessionCookieSamesite;
    }
    if (this._sessionCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSecure = this._sessionCookieSecure;
    }
    if (this._sessionEstablishmentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEstablishmentTimeout = this._sessionEstablishmentTimeout;
    }
    if (this._sessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdleTimeout = this._sessionIdleTimeout;
    }
    if (this._sessionMaximumTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMaximumTimeout = this._sessionMaximumTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileSessionConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionCookieHttponly = undefined;
      this._sessionCookieName = undefined;
      this._sessionCookieSamesite = undefined;
      this._sessionCookieSecure = undefined;
      this._sessionEstablishmentTimeout = undefined;
      this._sessionIdleTimeout = undefined;
      this._sessionMaximumTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionCookieHttponly = value.sessionCookieHttponly;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionCookieSamesite = value.sessionCookieSamesite;
      this._sessionCookieSecure = value.sessionCookieSecure;
      this._sessionEstablishmentTimeout = value.sessionEstablishmentTimeout;
      this._sessionIdleTimeout = value.sessionIdleTimeout;
      this._sessionMaximumTimeout = value.sessionMaximumTimeout;
    }
  }

  // session_cookie_httponly - computed: false, optional: true, required: false
  private _sessionCookieHttponly?: string; 
  public get sessionCookieHttponly() {
    return this.getStringAttribute('session_cookie_httponly');
  }
  public set sessionCookieHttponly(value: string) {
    this._sessionCookieHttponly = value;
  }
  public resetSessionCookieHttponly() {
    this._sessionCookieHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieHttponlyInput() {
    return this._sessionCookieHttponly;
  }

  // session_cookie_name - computed: false, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_cookie_samesite - computed: false, optional: true, required: false
  private _sessionCookieSamesite?: string; 
  public get sessionCookieSamesite() {
    return this.getStringAttribute('session_cookie_samesite');
  }
  public set sessionCookieSamesite(value: string) {
    this._sessionCookieSamesite = value;
  }
  public resetSessionCookieSamesite() {
    this._sessionCookieSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSamesiteInput() {
    return this._sessionCookieSamesite;
  }

  // session_cookie_secure - computed: false, optional: true, required: false
  private _sessionCookieSecure?: string; 
  public get sessionCookieSecure() {
    return this.getStringAttribute('session_cookie_secure');
  }
  public set sessionCookieSecure(value: string) {
    this._sessionCookieSecure = value;
  }
  public resetSessionCookieSecure() {
    this._sessionCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSecureInput() {
    return this._sessionCookieSecure;
  }

  // session_establishment_timeout - computed: false, optional: true, required: false
  private _sessionEstablishmentTimeout?: string; 
  public get sessionEstablishmentTimeout() {
    return this.getStringAttribute('session_establishment_timeout');
  }
  public set sessionEstablishmentTimeout(value: string) {
    this._sessionEstablishmentTimeout = value;
  }
  public resetSessionEstablishmentTimeout() {
    this._sessionEstablishmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEstablishmentTimeoutInput() {
    return this._sessionEstablishmentTimeout;
  }

  // session_idle_timeout - computed: false, optional: true, required: false
  private _sessionIdleTimeout?: string; 
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }
  public set sessionIdleTimeout(value: string) {
    this._sessionIdleTimeout = value;
  }
  public resetSessionIdleTimeout() {
    this._sessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleTimeoutInput() {
    return this._sessionIdleTimeout;
  }

  // session_maximum_timeout - computed: false, optional: true, required: false
  private _sessionMaximumTimeout?: string; 
  public get sessionMaximumTimeout() {
    return this.getStringAttribute('session_maximum_timeout');
  }
  public set sessionMaximumTimeout(value: string) {
    this._sessionMaximumTimeout = value;
  }
  public resetSessionMaximumTimeout() {
    this._sessionMaximumTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMaximumTimeoutInput() {
    return this._sessionMaximumTimeout;
  }
}

export class ApplicationprofileHttpProfileSessionConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileSessionConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileSessionConfigOutputReference {
    return new ApplicationprofileHttpProfileSessionConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileSslClientCertificateActionHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#request_header Applicationprofile#request_header}
  */
  readonly requestHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#request_header_value Applicationprofile#request_header_value}
  */
  readonly requestHeaderValue?: string;
}

export function applicationprofileHttpProfileSslClientCertificateActionHeadersToTerraform(struct?: ApplicationprofileHttpProfileSslClientCertificateActionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_header: cdktf.stringToTerraform(struct!.requestHeader),
    request_header_value: cdktf.stringToTerraform(struct!.requestHeaderValue),
  }
}


export function applicationprofileHttpProfileSslClientCertificateActionHeadersToHclTerraform(struct?: ApplicationprofileHttpProfileSslClientCertificateActionHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_header: {
      value: cdktf.stringToHclTerraform(struct!.requestHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_header_value: {
      value: cdktf.stringToHclTerraform(struct!.requestHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileSslClientCertificateActionHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader;
    }
    if (this._requestHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderValue = this._requestHeaderValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileSslClientCertificateActionHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requestHeader = undefined;
      this._requestHeaderValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requestHeader = value.requestHeader;
      this._requestHeaderValue = value.requestHeaderValue;
    }
  }

  // request_header - computed: true, optional: true, required: false
  private _requestHeader?: string; 
  public get requestHeader() {
    return this.getStringAttribute('request_header');
  }
  public set requestHeader(value: string) {
    this._requestHeader = value;
  }
  public resetRequestHeader() {
    this._requestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader;
  }

  // request_header_value - computed: true, optional: true, required: false
  private _requestHeaderValue?: string; 
  public get requestHeaderValue() {
    return this.getStringAttribute('request_header_value');
  }
  public set requestHeaderValue(value: string) {
    this._requestHeaderValue = value;
  }
  public resetRequestHeaderValue() {
    this._requestHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderValueInput() {
    return this._requestHeaderValue;
  }
}

export class ApplicationprofileHttpProfileSslClientCertificateActionHeadersList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileSslClientCertificateActionHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference {
    return new ApplicationprofileHttpProfileSslClientCertificateActionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileSslClientCertificateAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#close_connection Applicationprofile#close_connection}
  */
  readonly closeConnection?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#headers Applicationprofile#headers}
  */
  readonly headers?: ApplicationprofileHttpProfileSslClientCertificateActionHeaders[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileSslClientCertificateActionToTerraform(struct?: ApplicationprofileHttpProfileSslClientCertificateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    close_connection: cdktf.stringToTerraform(struct!.closeConnection),
    headers: cdktf.listMapper(applicationprofileHttpProfileSslClientCertificateActionHeadersToTerraform, true)(struct!.headers),
  }
}


export function applicationprofileHttpProfileSslClientCertificateActionToHclTerraform(struct?: ApplicationprofileHttpProfileSslClientCertificateAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    close_connection: {
      value: cdktf.stringToHclTerraform(struct!.closeConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileSslClientCertificateActionHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationprofileHttpProfileSslClientCertificateActionHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileSslClientCertificateActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileSslClientCertificateAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closeConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeConnection = this._closeConnection;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileSslClientCertificateAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closeConnection = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closeConnection = value.closeConnection;
      this._headers.internalValue = value.headers;
    }
  }

  // close_connection - computed: false, optional: true, required: false
  private _closeConnection?: string; 
  public get closeConnection() {
    return this.getStringAttribute('close_connection');
  }
  public set closeConnection(value: string) {
    this._closeConnection = value;
  }
  public resetCloseConnection() {
    this._closeConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeConnectionInput() {
    return this._closeConnection;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApplicationprofileHttpProfileSslClientCertificateActionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApplicationprofileHttpProfileSslClientCertificateActionHeaders[] | cdktf.IResolvable) {
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

export class ApplicationprofileHttpProfileSslClientCertificateActionList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileSslClientCertificateAction[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileSslClientCertificateActionOutputReference {
    return new ApplicationprofileHttpProfileSslClientCertificateActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfileTrueClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#direction Applicationprofile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#headers Applicationprofile#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#index_in_header Applicationprofile#index_in_header}
  */
  readonly indexInHeader?: string;
}

export function applicationprofileHttpProfileTrueClientIpToTerraform(struct?: ApplicationprofileHttpProfileTrueClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    index_in_header: cdktf.stringToTerraform(struct!.indexInHeader),
  }
}


export function applicationprofileHttpProfileTrueClientIpToHclTerraform(struct?: ApplicationprofileHttpProfileTrueClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    index_in_header: {
      value: cdktf.stringToHclTerraform(struct!.indexInHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileTrueClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfileTrueClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._indexInHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexInHeader = this._indexInHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfileTrueClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._headers = undefined;
      this._indexInHeader = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._headers = value.headers;
      this._indexInHeader = value.indexInHeader;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // index_in_header - computed: false, optional: true, required: false
  private _indexInHeader?: string; 
  public get indexInHeader() {
    return this.getStringAttribute('index_in_header');
  }
  public set indexInHeader(value: string) {
    this._indexInHeader = value;
  }
  public resetIndexInHeader() {
    this._indexInHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInHeaderInput() {
    return this._indexInHeader;
  }
}

export class ApplicationprofileHttpProfileTrueClientIpList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfileTrueClientIp[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileTrueClientIpOutputReference {
    return new ApplicationprofileHttpProfileTrueClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileHttpProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#allow_dots_in_header_name Applicationprofile#allow_dots_in_header_name}
  */
  readonly allowDotsInHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_body_timeout Applicationprofile#client_body_timeout}
  */
  readonly clientBodyTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_header_timeout Applicationprofile#client_header_timeout}
  */
  readonly clientHeaderTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_max_body_size Applicationprofile#client_max_body_size}
  */
  readonly clientMaxBodySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_max_header_size Applicationprofile#client_max_header_size}
  */
  readonly clientMaxHeaderSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#client_max_request_size Applicationprofile#client_max_request_size}
  */
  readonly clientMaxRequestSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#close_server_side_connection_on_error Applicationprofile#close_server_side_connection_on_error}
  */
  readonly closeServerSideConnectionOnError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#collect_client_tls_fingerprint Applicationprofile#collect_client_tls_fingerprint}
  */
  readonly collectClientTlsFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#connection_multiplexing_enabled Applicationprofile#connection_multiplexing_enabled}
  */
  readonly connectionMultiplexingEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#detect_ntlm_app Applicationprofile#detect_ntlm_app}
  */
  readonly detectNtlmApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#disable_keepalive_posts_msie6 Applicationprofile#disable_keepalive_posts_msie6}
  */
  readonly disableKeepalivePostsMsie6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#disable_sni_hostname_check Applicationprofile#disable_sni_hostname_check}
  */
  readonly disableSniHostnameCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enable_chunk_merge Applicationprofile#enable_chunk_merge}
  */
  readonly enableChunkMerge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enable_fire_and_forget Applicationprofile#enable_fire_and_forget}
  */
  readonly enableFireAndForget?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enable_request_body_buffering Applicationprofile#enable_request_body_buffering}
  */
  readonly enableRequestBodyBuffering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#enable_request_body_metrics Applicationprofile#enable_request_body_metrics}
  */
  readonly enableRequestBodyMetrics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#fwd_close_hdr_for_bound_connections Applicationprofile#fwd_close_hdr_for_bound_connections}
  */
  readonly fwdCloseHdrForBoundConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#hsts_enabled Applicationprofile#hsts_enabled}
  */
  readonly hstsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#hsts_max_age Applicationprofile#hsts_max_age}
  */
  readonly hstsMaxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#hsts_subdomains_enabled Applicationprofile#hsts_subdomains_enabled}
  */
  readonly hstsSubdomainsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http_to_https Applicationprofile#http_to_https}
  */
  readonly httpToHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http_upstream_buffer_size Applicationprofile#http_upstream_buffer_size}
  */
  readonly httpUpstreamBufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#httponly_enabled Applicationprofile#httponly_enabled}
  */
  readonly httponlyEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#keepalive_header Applicationprofile#keepalive_header}
  */
  readonly keepaliveHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#keepalive_timeout Applicationprofile#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_bad_rps_cip Applicationprofile#max_bad_rps_cip}
  */
  readonly maxBadRpsCip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_bad_rps_cip_uri Applicationprofile#max_bad_rps_cip_uri}
  */
  readonly maxBadRpsCipUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_bad_rps_uri Applicationprofile#max_bad_rps_uri}
  */
  readonly maxBadRpsUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_header_count Applicationprofile#max_header_count}
  */
  readonly maxHeaderCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_keepalive_requests Applicationprofile#max_keepalive_requests}
  */
  readonly maxKeepaliveRequests?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_response_headers_size Applicationprofile#max_response_headers_size}
  */
  readonly maxResponseHeadersSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_rps_cip Applicationprofile#max_rps_cip}
  */
  readonly maxRpsCip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_rps_cip_uri Applicationprofile#max_rps_cip_uri}
  */
  readonly maxRpsCipUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_rps_unknown_cip Applicationprofile#max_rps_unknown_cip}
  */
  readonly maxRpsUnknownCip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_rps_unknown_uri Applicationprofile#max_rps_unknown_uri}
  */
  readonly maxRpsUnknownUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#max_rps_uri Applicationprofile#max_rps_uri}
  */
  readonly maxRpsUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#pass_through_x_accel_headers Applicationprofile#pass_through_x_accel_headers}
  */
  readonly passThroughXAccelHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#pki_profile_ref Applicationprofile#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#post_accept_timeout Applicationprofile#post_accept_timeout}
  */
  readonly postAcceptTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#reset_conn_http_on_ssl_port Applicationprofile#reset_conn_http_on_ssl_port}
  */
  readonly resetConnHttpOnSslPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#respond_with_100_continue Applicationprofile#respond_with_100_continue}
  */
  readonly respondWith100Continue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#secure_cookie_enabled Applicationprofile#secure_cookie_enabled}
  */
  readonly secureCookieEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#server_side_redirect_to_https Applicationprofile#server_side_redirect_to_https}
  */
  readonly serverSideRedirectToHttps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ssl_client_certificate_mode Applicationprofile#ssl_client_certificate_mode}
  */
  readonly sslClientCertificateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#use_app_keepalive_timeout Applicationprofile#use_app_keepalive_timeout}
  */
  readonly useAppKeepaliveTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#use_true_client_ip Applicationprofile#use_true_client_ip}
  */
  readonly useTrueClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#websockets_enabled Applicationprofile#websockets_enabled}
  */
  readonly websocketsEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#x_forwarded_proto_enabled Applicationprofile#x_forwarded_proto_enabled}
  */
  readonly xForwardedProtoEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#xff_alternate_name Applicationprofile#xff_alternate_name}
  */
  readonly xffAlternateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#xff_enabled Applicationprofile#xff_enabled}
  */
  readonly xffEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#xff_update Applicationprofile#xff_update}
  */
  readonly xffUpdate?: string;
  /**
  * cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#cache_config Applicationprofile#cache_config}
  */
  readonly cacheConfig?: ApplicationprofileHttpProfileCacheConfig[] | cdktf.IResolvable;
  /**
  * compression_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#compression_profile Applicationprofile#compression_profile}
  */
  readonly compressionProfile?: ApplicationprofileHttpProfileCompressionProfile[] | cdktf.IResolvable;
  /**
  * http2_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#http2_profile Applicationprofile#http2_profile}
  */
  readonly http2Profile?: ApplicationprofileHttpProfileHttp2Profile[] | cdktf.IResolvable;
  /**
  * session_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#session_config Applicationprofile#session_config}
  */
  readonly sessionConfig?: ApplicationprofileHttpProfileSessionConfig[] | cdktf.IResolvable;
  /**
  * ssl_client_certificate_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ssl_client_certificate_action Applicationprofile#ssl_client_certificate_action}
  */
  readonly sslClientCertificateAction?: ApplicationprofileHttpProfileSslClientCertificateAction[] | cdktf.IResolvable;
  /**
  * true_client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#true_client_ip Applicationprofile#true_client_ip}
  */
  readonly trueClientIp?: ApplicationprofileHttpProfileTrueClientIp[] | cdktf.IResolvable;
}

export function applicationprofileHttpProfileToTerraform(struct?: ApplicationprofileHttpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dots_in_header_name: cdktf.stringToTerraform(struct!.allowDotsInHeaderName),
    client_body_timeout: cdktf.stringToTerraform(struct!.clientBodyTimeout),
    client_header_timeout: cdktf.stringToTerraform(struct!.clientHeaderTimeout),
    client_max_body_size: cdktf.stringToTerraform(struct!.clientMaxBodySize),
    client_max_header_size: cdktf.stringToTerraform(struct!.clientMaxHeaderSize),
    client_max_request_size: cdktf.stringToTerraform(struct!.clientMaxRequestSize),
    close_server_side_connection_on_error: cdktf.stringToTerraform(struct!.closeServerSideConnectionOnError),
    collect_client_tls_fingerprint: cdktf.stringToTerraform(struct!.collectClientTlsFingerprint),
    connection_multiplexing_enabled: cdktf.stringToTerraform(struct!.connectionMultiplexingEnabled),
    detect_ntlm_app: cdktf.stringToTerraform(struct!.detectNtlmApp),
    disable_keepalive_posts_msie6: cdktf.stringToTerraform(struct!.disableKeepalivePostsMsie6),
    disable_sni_hostname_check: cdktf.stringToTerraform(struct!.disableSniHostnameCheck),
    enable_chunk_merge: cdktf.stringToTerraform(struct!.enableChunkMerge),
    enable_fire_and_forget: cdktf.stringToTerraform(struct!.enableFireAndForget),
    enable_request_body_buffering: cdktf.stringToTerraform(struct!.enableRequestBodyBuffering),
    enable_request_body_metrics: cdktf.stringToTerraform(struct!.enableRequestBodyMetrics),
    fwd_close_hdr_for_bound_connections: cdktf.stringToTerraform(struct!.fwdCloseHdrForBoundConnections),
    hsts_enabled: cdktf.stringToTerraform(struct!.hstsEnabled),
    hsts_max_age: cdktf.stringToTerraform(struct!.hstsMaxAge),
    hsts_subdomains_enabled: cdktf.stringToTerraform(struct!.hstsSubdomainsEnabled),
    http_to_https: cdktf.stringToTerraform(struct!.httpToHttps),
    http_upstream_buffer_size: cdktf.stringToTerraform(struct!.httpUpstreamBufferSize),
    httponly_enabled: cdktf.stringToTerraform(struct!.httponlyEnabled),
    keepalive_header: cdktf.stringToTerraform(struct!.keepaliveHeader),
    keepalive_timeout: cdktf.stringToTerraform(struct!.keepaliveTimeout),
    max_bad_rps_cip: cdktf.stringToTerraform(struct!.maxBadRpsCip),
    max_bad_rps_cip_uri: cdktf.stringToTerraform(struct!.maxBadRpsCipUri),
    max_bad_rps_uri: cdktf.stringToTerraform(struct!.maxBadRpsUri),
    max_header_count: cdktf.stringToTerraform(struct!.maxHeaderCount),
    max_keepalive_requests: cdktf.stringToTerraform(struct!.maxKeepaliveRequests),
    max_response_headers_size: cdktf.stringToTerraform(struct!.maxResponseHeadersSize),
    max_rps_cip: cdktf.stringToTerraform(struct!.maxRpsCip),
    max_rps_cip_uri: cdktf.stringToTerraform(struct!.maxRpsCipUri),
    max_rps_unknown_cip: cdktf.stringToTerraform(struct!.maxRpsUnknownCip),
    max_rps_unknown_uri: cdktf.stringToTerraform(struct!.maxRpsUnknownUri),
    max_rps_uri: cdktf.stringToTerraform(struct!.maxRpsUri),
    pass_through_x_accel_headers: cdktf.stringToTerraform(struct!.passThroughXAccelHeaders),
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    post_accept_timeout: cdktf.stringToTerraform(struct!.postAcceptTimeout),
    reset_conn_http_on_ssl_port: cdktf.stringToTerraform(struct!.resetConnHttpOnSslPort),
    respond_with_100_continue: cdktf.stringToTerraform(struct!.respondWith100Continue),
    secure_cookie_enabled: cdktf.stringToTerraform(struct!.secureCookieEnabled),
    server_side_redirect_to_https: cdktf.stringToTerraform(struct!.serverSideRedirectToHttps),
    ssl_client_certificate_mode: cdktf.stringToTerraform(struct!.sslClientCertificateMode),
    use_app_keepalive_timeout: cdktf.stringToTerraform(struct!.useAppKeepaliveTimeout),
    use_true_client_ip: cdktf.stringToTerraform(struct!.useTrueClientIp),
    websockets_enabled: cdktf.stringToTerraform(struct!.websocketsEnabled),
    x_forwarded_proto_enabled: cdktf.stringToTerraform(struct!.xForwardedProtoEnabled),
    xff_alternate_name: cdktf.stringToTerraform(struct!.xffAlternateName),
    xff_enabled: cdktf.stringToTerraform(struct!.xffEnabled),
    xff_update: cdktf.stringToTerraform(struct!.xffUpdate),
    cache_config: cdktf.listMapper(applicationprofileHttpProfileCacheConfigToTerraform, true)(struct!.cacheConfig),
    compression_profile: cdktf.listMapper(applicationprofileHttpProfileCompressionProfileToTerraform, true)(struct!.compressionProfile),
    http2_profile: cdktf.listMapper(applicationprofileHttpProfileHttp2ProfileToTerraform, true)(struct!.http2Profile),
    session_config: cdktf.listMapper(applicationprofileHttpProfileSessionConfigToTerraform, true)(struct!.sessionConfig),
    ssl_client_certificate_action: cdktf.listMapper(applicationprofileHttpProfileSslClientCertificateActionToTerraform, true)(struct!.sslClientCertificateAction),
    true_client_ip: cdktf.listMapper(applicationprofileHttpProfileTrueClientIpToTerraform, true)(struct!.trueClientIp),
  }
}


export function applicationprofileHttpProfileToHclTerraform(struct?: ApplicationprofileHttpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dots_in_header_name: {
      value: cdktf.stringToHclTerraform(struct!.allowDotsInHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_body_timeout: {
      value: cdktf.stringToHclTerraform(struct!.clientBodyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_header_timeout: {
      value: cdktf.stringToHclTerraform(struct!.clientHeaderTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.clientMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_max_header_size: {
      value: cdktf.stringToHclTerraform(struct!.clientMaxHeaderSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_max_request_size: {
      value: cdktf.stringToHclTerraform(struct!.clientMaxRequestSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    close_server_side_connection_on_error: {
      value: cdktf.stringToHclTerraform(struct!.closeServerSideConnectionOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_client_tls_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.collectClientTlsFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_multiplexing_enabled: {
      value: cdktf.stringToHclTerraform(struct!.connectionMultiplexingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detect_ntlm_app: {
      value: cdktf.stringToHclTerraform(struct!.detectNtlmApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_keepalive_posts_msie6: {
      value: cdktf.stringToHclTerraform(struct!.disableKeepalivePostsMsie6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_sni_hostname_check: {
      value: cdktf.stringToHclTerraform(struct!.disableSniHostnameCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_chunk_merge: {
      value: cdktf.stringToHclTerraform(struct!.enableChunkMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_fire_and_forget: {
      value: cdktf.stringToHclTerraform(struct!.enableFireAndForget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_request_body_buffering: {
      value: cdktf.stringToHclTerraform(struct!.enableRequestBodyBuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_request_body_metrics: {
      value: cdktf.stringToHclTerraform(struct!.enableRequestBodyMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fwd_close_hdr_for_bound_connections: {
      value: cdktf.stringToHclTerraform(struct!.fwdCloseHdrForBoundConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsts_enabled: {
      value: cdktf.stringToHclTerraform(struct!.hstsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsts_max_age: {
      value: cdktf.stringToHclTerraform(struct!.hstsMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsts_subdomains_enabled: {
      value: cdktf.stringToHclTerraform(struct!.hstsSubdomainsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_to_https: {
      value: cdktf.stringToHclTerraform(struct!.httpToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_upstream_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.httpUpstreamBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    httponly_enabled: {
      value: cdktf.stringToHclTerraform(struct!.httponlyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_header: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bad_rps_cip: {
      value: cdktf.stringToHclTerraform(struct!.maxBadRpsCip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bad_rps_cip_uri: {
      value: cdktf.stringToHclTerraform(struct!.maxBadRpsCipUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bad_rps_uri: {
      value: cdktf.stringToHclTerraform(struct!.maxBadRpsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_header_count: {
      value: cdktf.stringToHclTerraform(struct!.maxHeaderCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_keepalive_requests: {
      value: cdktf.stringToHclTerraform(struct!.maxKeepaliveRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_response_headers_size: {
      value: cdktf.stringToHclTerraform(struct!.maxResponseHeadersSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps_cip: {
      value: cdktf.stringToHclTerraform(struct!.maxRpsCip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps_cip_uri: {
      value: cdktf.stringToHclTerraform(struct!.maxRpsCipUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps_unknown_cip: {
      value: cdktf.stringToHclTerraform(struct!.maxRpsUnknownCip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps_unknown_uri: {
      value: cdktf.stringToHclTerraform(struct!.maxRpsUnknownUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_rps_uri: {
      value: cdktf.stringToHclTerraform(struct!.maxRpsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_through_x_accel_headers: {
      value: cdktf.stringToHclTerraform(struct!.passThroughXAccelHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_accept_timeout: {
      value: cdktf.stringToHclTerraform(struct!.postAcceptTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_conn_http_on_ssl_port: {
      value: cdktf.stringToHclTerraform(struct!.resetConnHttpOnSslPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    respond_with_100_continue: {
      value: cdktf.stringToHclTerraform(struct!.respondWith100Continue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_cookie_enabled: {
      value: cdktf.stringToHclTerraform(struct!.secureCookieEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_redirect_to_https: {
      value: cdktf.stringToHclTerraform(struct!.serverSideRedirectToHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_certificate_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCertificateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_app_keepalive_timeout: {
      value: cdktf.stringToHclTerraform(struct!.useAppKeepaliveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_true_client_ip: {
      value: cdktf.stringToHclTerraform(struct!.useTrueClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    websockets_enabled: {
      value: cdktf.stringToHclTerraform(struct!.websocketsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_forwarded_proto_enabled: {
      value: cdktf.stringToHclTerraform(struct!.xForwardedProtoEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xff_alternate_name: {
      value: cdktf.stringToHclTerraform(struct!.xffAlternateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xff_enabled: {
      value: cdktf.stringToHclTerraform(struct!.xffEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xff_update: {
      value: cdktf.stringToHclTerraform(struct!.xffUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_config: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCacheConfigToHclTerraform, true)(struct!.cacheConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCacheConfigList",
    },
    compression_profile: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileCompressionProfileToHclTerraform, true)(struct!.compressionProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileCompressionProfileList",
    },
    http2_profile: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileHttp2ProfileToHclTerraform, true)(struct!.http2Profile),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileHttp2ProfileList",
    },
    session_config: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileSessionConfigToHclTerraform, true)(struct!.sessionConfig),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileSessionConfigList",
    },
    ssl_client_certificate_action: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileSslClientCertificateActionToHclTerraform, true)(struct!.sslClientCertificateAction),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileSslClientCertificateActionList",
    },
    true_client_ip: {
      value: cdktf.listMapperHcl(applicationprofileHttpProfileTrueClientIpToHclTerraform, true)(struct!.trueClientIp),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileHttpProfileTrueClientIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileHttpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileHttpProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDotsInHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDotsInHeaderName = this._allowDotsInHeaderName;
    }
    if (this._clientBodyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientBodyTimeout = this._clientBodyTimeout;
    }
    if (this._clientHeaderTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeaderTimeout = this._clientHeaderTimeout;
    }
    if (this._clientMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxBodySize = this._clientMaxBodySize;
    }
    if (this._clientMaxHeaderSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxHeaderSize = this._clientMaxHeaderSize;
    }
    if (this._clientMaxRequestSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMaxRequestSize = this._clientMaxRequestSize;
    }
    if (this._closeServerSideConnectionOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeServerSideConnectionOnError = this._closeServerSideConnectionOnError;
    }
    if (this._collectClientTlsFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectClientTlsFingerprint = this._collectClientTlsFingerprint;
    }
    if (this._connectionMultiplexingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionMultiplexingEnabled = this._connectionMultiplexingEnabled;
    }
    if (this._detectNtlmApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectNtlmApp = this._detectNtlmApp;
    }
    if (this._disableKeepalivePostsMsie6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKeepalivePostsMsie6 = this._disableKeepalivePostsMsie6;
    }
    if (this._disableSniHostnameCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSniHostnameCheck = this._disableSniHostnameCheck;
    }
    if (this._enableChunkMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableChunkMerge = this._enableChunkMerge;
    }
    if (this._enableFireAndForget !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFireAndForget = this._enableFireAndForget;
    }
    if (this._enableRequestBodyBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRequestBodyBuffering = this._enableRequestBodyBuffering;
    }
    if (this._enableRequestBodyMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRequestBodyMetrics = this._enableRequestBodyMetrics;
    }
    if (this._fwdCloseHdrForBoundConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdCloseHdrForBoundConnections = this._fwdCloseHdrForBoundConnections;
    }
    if (this._hstsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsEnabled = this._hstsEnabled;
    }
    if (this._hstsMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsMaxAge = this._hstsMaxAge;
    }
    if (this._hstsSubdomainsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hstsSubdomainsEnabled = this._hstsSubdomainsEnabled;
    }
    if (this._httpToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpToHttps = this._httpToHttps;
    }
    if (this._httpUpstreamBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUpstreamBufferSize = this._httpUpstreamBufferSize;
    }
    if (this._httponlyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.httponlyEnabled = this._httponlyEnabled;
    }
    if (this._keepaliveHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveHeader = this._keepaliveHeader;
    }
    if (this._keepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveTimeout = this._keepaliveTimeout;
    }
    if (this._maxBadRpsCip !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRpsCip = this._maxBadRpsCip;
    }
    if (this._maxBadRpsCipUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRpsCipUri = this._maxBadRpsCipUri;
    }
    if (this._maxBadRpsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRpsUri = this._maxBadRpsUri;
    }
    if (this._maxHeaderCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCount = this._maxHeaderCount;
    }
    if (this._maxKeepaliveRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxKeepaliveRequests = this._maxKeepaliveRequests;
    }
    if (this._maxResponseHeadersSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResponseHeadersSize = this._maxResponseHeadersSize;
    }
    if (this._maxRpsCip !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRpsCip = this._maxRpsCip;
    }
    if (this._maxRpsCipUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRpsCipUri = this._maxRpsCipUri;
    }
    if (this._maxRpsUnknownCip !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRpsUnknownCip = this._maxRpsUnknownCip;
    }
    if (this._maxRpsUnknownUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRpsUnknownUri = this._maxRpsUnknownUri;
    }
    if (this._maxRpsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRpsUri = this._maxRpsUri;
    }
    if (this._passThroughXAccelHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passThroughXAccelHeaders = this._passThroughXAccelHeaders;
    }
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._postAcceptTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.postAcceptTimeout = this._postAcceptTimeout;
    }
    if (this._resetConnHttpOnSslPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetConnHttpOnSslPort = this._resetConnHttpOnSslPort;
    }
    if (this._respondWith100Continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.respondWith100Continue = this._respondWith100Continue;
    }
    if (this._secureCookieEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureCookieEnabled = this._secureCookieEnabled;
    }
    if (this._serverSideRedirectToHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideRedirectToHttps = this._serverSideRedirectToHttps;
    }
    if (this._sslClientCertificateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificateMode = this._sslClientCertificateMode;
    }
    if (this._useAppKeepaliveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAppKeepaliveTimeout = this._useAppKeepaliveTimeout;
    }
    if (this._useTrueClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTrueClientIp = this._useTrueClientIp;
    }
    if (this._websocketsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocketsEnabled = this._websocketsEnabled;
    }
    if (this._xForwardedProtoEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardedProtoEnabled = this._xForwardedProtoEnabled;
    }
    if (this._xffAlternateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffAlternateName = this._xffAlternateName;
    }
    if (this._xffEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffEnabled = this._xffEnabled;
    }
    if (this._xffUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.xffUpdate = this._xffUpdate;
    }
    if (this._cacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheConfig = this._cacheConfig?.internalValue;
    }
    if (this._compressionProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionProfile = this._compressionProfile?.internalValue;
    }
    if (this._http2Profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Profile = this._http2Profile?.internalValue;
    }
    if (this._sessionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionConfig = this._sessionConfig?.internalValue;
    }
    if (this._sslClientCertificateAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificateAction = this._sslClientCertificateAction?.internalValue;
    }
    if (this._trueClientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trueClientIp = this._trueClientIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileHttpProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDotsInHeaderName = undefined;
      this._clientBodyTimeout = undefined;
      this._clientHeaderTimeout = undefined;
      this._clientMaxBodySize = undefined;
      this._clientMaxHeaderSize = undefined;
      this._clientMaxRequestSize = undefined;
      this._closeServerSideConnectionOnError = undefined;
      this._collectClientTlsFingerprint = undefined;
      this._connectionMultiplexingEnabled = undefined;
      this._detectNtlmApp = undefined;
      this._disableKeepalivePostsMsie6 = undefined;
      this._disableSniHostnameCheck = undefined;
      this._enableChunkMerge = undefined;
      this._enableFireAndForget = undefined;
      this._enableRequestBodyBuffering = undefined;
      this._enableRequestBodyMetrics = undefined;
      this._fwdCloseHdrForBoundConnections = undefined;
      this._hstsEnabled = undefined;
      this._hstsMaxAge = undefined;
      this._hstsSubdomainsEnabled = undefined;
      this._httpToHttps = undefined;
      this._httpUpstreamBufferSize = undefined;
      this._httponlyEnabled = undefined;
      this._keepaliveHeader = undefined;
      this._keepaliveTimeout = undefined;
      this._maxBadRpsCip = undefined;
      this._maxBadRpsCipUri = undefined;
      this._maxBadRpsUri = undefined;
      this._maxHeaderCount = undefined;
      this._maxKeepaliveRequests = undefined;
      this._maxResponseHeadersSize = undefined;
      this._maxRpsCip = undefined;
      this._maxRpsCipUri = undefined;
      this._maxRpsUnknownCip = undefined;
      this._maxRpsUnknownUri = undefined;
      this._maxRpsUri = undefined;
      this._passThroughXAccelHeaders = undefined;
      this._pkiProfileRef = undefined;
      this._postAcceptTimeout = undefined;
      this._resetConnHttpOnSslPort = undefined;
      this._respondWith100Continue = undefined;
      this._secureCookieEnabled = undefined;
      this._serverSideRedirectToHttps = undefined;
      this._sslClientCertificateMode = undefined;
      this._useAppKeepaliveTimeout = undefined;
      this._useTrueClientIp = undefined;
      this._websocketsEnabled = undefined;
      this._xForwardedProtoEnabled = undefined;
      this._xffAlternateName = undefined;
      this._xffEnabled = undefined;
      this._xffUpdate = undefined;
      this._cacheConfig.internalValue = undefined;
      this._compressionProfile.internalValue = undefined;
      this._http2Profile.internalValue = undefined;
      this._sessionConfig.internalValue = undefined;
      this._sslClientCertificateAction.internalValue = undefined;
      this._trueClientIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDotsInHeaderName = value.allowDotsInHeaderName;
      this._clientBodyTimeout = value.clientBodyTimeout;
      this._clientHeaderTimeout = value.clientHeaderTimeout;
      this._clientMaxBodySize = value.clientMaxBodySize;
      this._clientMaxHeaderSize = value.clientMaxHeaderSize;
      this._clientMaxRequestSize = value.clientMaxRequestSize;
      this._closeServerSideConnectionOnError = value.closeServerSideConnectionOnError;
      this._collectClientTlsFingerprint = value.collectClientTlsFingerprint;
      this._connectionMultiplexingEnabled = value.connectionMultiplexingEnabled;
      this._detectNtlmApp = value.detectNtlmApp;
      this._disableKeepalivePostsMsie6 = value.disableKeepalivePostsMsie6;
      this._disableSniHostnameCheck = value.disableSniHostnameCheck;
      this._enableChunkMerge = value.enableChunkMerge;
      this._enableFireAndForget = value.enableFireAndForget;
      this._enableRequestBodyBuffering = value.enableRequestBodyBuffering;
      this._enableRequestBodyMetrics = value.enableRequestBodyMetrics;
      this._fwdCloseHdrForBoundConnections = value.fwdCloseHdrForBoundConnections;
      this._hstsEnabled = value.hstsEnabled;
      this._hstsMaxAge = value.hstsMaxAge;
      this._hstsSubdomainsEnabled = value.hstsSubdomainsEnabled;
      this._httpToHttps = value.httpToHttps;
      this._httpUpstreamBufferSize = value.httpUpstreamBufferSize;
      this._httponlyEnabled = value.httponlyEnabled;
      this._keepaliveHeader = value.keepaliveHeader;
      this._keepaliveTimeout = value.keepaliveTimeout;
      this._maxBadRpsCip = value.maxBadRpsCip;
      this._maxBadRpsCipUri = value.maxBadRpsCipUri;
      this._maxBadRpsUri = value.maxBadRpsUri;
      this._maxHeaderCount = value.maxHeaderCount;
      this._maxKeepaliveRequests = value.maxKeepaliveRequests;
      this._maxResponseHeadersSize = value.maxResponseHeadersSize;
      this._maxRpsCip = value.maxRpsCip;
      this._maxRpsCipUri = value.maxRpsCipUri;
      this._maxRpsUnknownCip = value.maxRpsUnknownCip;
      this._maxRpsUnknownUri = value.maxRpsUnknownUri;
      this._maxRpsUri = value.maxRpsUri;
      this._passThroughXAccelHeaders = value.passThroughXAccelHeaders;
      this._pkiProfileRef = value.pkiProfileRef;
      this._postAcceptTimeout = value.postAcceptTimeout;
      this._resetConnHttpOnSslPort = value.resetConnHttpOnSslPort;
      this._respondWith100Continue = value.respondWith100Continue;
      this._secureCookieEnabled = value.secureCookieEnabled;
      this._serverSideRedirectToHttps = value.serverSideRedirectToHttps;
      this._sslClientCertificateMode = value.sslClientCertificateMode;
      this._useAppKeepaliveTimeout = value.useAppKeepaliveTimeout;
      this._useTrueClientIp = value.useTrueClientIp;
      this._websocketsEnabled = value.websocketsEnabled;
      this._xForwardedProtoEnabled = value.xForwardedProtoEnabled;
      this._xffAlternateName = value.xffAlternateName;
      this._xffEnabled = value.xffEnabled;
      this._xffUpdate = value.xffUpdate;
      this._cacheConfig.internalValue = value.cacheConfig;
      this._compressionProfile.internalValue = value.compressionProfile;
      this._http2Profile.internalValue = value.http2Profile;
      this._sessionConfig.internalValue = value.sessionConfig;
      this._sslClientCertificateAction.internalValue = value.sslClientCertificateAction;
      this._trueClientIp.internalValue = value.trueClientIp;
    }
  }

  // allow_dots_in_header_name - computed: false, optional: true, required: false
  private _allowDotsInHeaderName?: string; 
  public get allowDotsInHeaderName() {
    return this.getStringAttribute('allow_dots_in_header_name');
  }
  public set allowDotsInHeaderName(value: string) {
    this._allowDotsInHeaderName = value;
  }
  public resetAllowDotsInHeaderName() {
    this._allowDotsInHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDotsInHeaderNameInput() {
    return this._allowDotsInHeaderName;
  }

  // client_body_timeout - computed: false, optional: true, required: false
  private _clientBodyTimeout?: string; 
  public get clientBodyTimeout() {
    return this.getStringAttribute('client_body_timeout');
  }
  public set clientBodyTimeout(value: string) {
    this._clientBodyTimeout = value;
  }
  public resetClientBodyTimeout() {
    this._clientBodyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientBodyTimeoutInput() {
    return this._clientBodyTimeout;
  }

  // client_header_timeout - computed: false, optional: true, required: false
  private _clientHeaderTimeout?: string; 
  public get clientHeaderTimeout() {
    return this.getStringAttribute('client_header_timeout');
  }
  public set clientHeaderTimeout(value: string) {
    this._clientHeaderTimeout = value;
  }
  public resetClientHeaderTimeout() {
    this._clientHeaderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeaderTimeoutInput() {
    return this._clientHeaderTimeout;
  }

  // client_max_body_size - computed: false, optional: true, required: false
  private _clientMaxBodySize?: string; 
  public get clientMaxBodySize() {
    return this.getStringAttribute('client_max_body_size');
  }
  public set clientMaxBodySize(value: string) {
    this._clientMaxBodySize = value;
  }
  public resetClientMaxBodySize() {
    this._clientMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxBodySizeInput() {
    return this._clientMaxBodySize;
  }

  // client_max_header_size - computed: false, optional: true, required: false
  private _clientMaxHeaderSize?: string; 
  public get clientMaxHeaderSize() {
    return this.getStringAttribute('client_max_header_size');
  }
  public set clientMaxHeaderSize(value: string) {
    this._clientMaxHeaderSize = value;
  }
  public resetClientMaxHeaderSize() {
    this._clientMaxHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxHeaderSizeInput() {
    return this._clientMaxHeaderSize;
  }

  // client_max_request_size - computed: false, optional: true, required: false
  private _clientMaxRequestSize?: string; 
  public get clientMaxRequestSize() {
    return this.getStringAttribute('client_max_request_size');
  }
  public set clientMaxRequestSize(value: string) {
    this._clientMaxRequestSize = value;
  }
  public resetClientMaxRequestSize() {
    this._clientMaxRequestSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMaxRequestSizeInput() {
    return this._clientMaxRequestSize;
  }

  // close_server_side_connection_on_error - computed: false, optional: true, required: false
  private _closeServerSideConnectionOnError?: string; 
  public get closeServerSideConnectionOnError() {
    return this.getStringAttribute('close_server_side_connection_on_error');
  }
  public set closeServerSideConnectionOnError(value: string) {
    this._closeServerSideConnectionOnError = value;
  }
  public resetCloseServerSideConnectionOnError() {
    this._closeServerSideConnectionOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeServerSideConnectionOnErrorInput() {
    return this._closeServerSideConnectionOnError;
  }

  // collect_client_tls_fingerprint - computed: false, optional: true, required: false
  private _collectClientTlsFingerprint?: string; 
  public get collectClientTlsFingerprint() {
    return this.getStringAttribute('collect_client_tls_fingerprint');
  }
  public set collectClientTlsFingerprint(value: string) {
    this._collectClientTlsFingerprint = value;
  }
  public resetCollectClientTlsFingerprint() {
    this._collectClientTlsFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectClientTlsFingerprintInput() {
    return this._collectClientTlsFingerprint;
  }

  // connection_multiplexing_enabled - computed: false, optional: true, required: false
  private _connectionMultiplexingEnabled?: string; 
  public get connectionMultiplexingEnabled() {
    return this.getStringAttribute('connection_multiplexing_enabled');
  }
  public set connectionMultiplexingEnabled(value: string) {
    this._connectionMultiplexingEnabled = value;
  }
  public resetConnectionMultiplexingEnabled() {
    this._connectionMultiplexingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMultiplexingEnabledInput() {
    return this._connectionMultiplexingEnabled;
  }

  // detect_ntlm_app - computed: false, optional: true, required: false
  private _detectNtlmApp?: string; 
  public get detectNtlmApp() {
    return this.getStringAttribute('detect_ntlm_app');
  }
  public set detectNtlmApp(value: string) {
    this._detectNtlmApp = value;
  }
  public resetDetectNtlmApp() {
    this._detectNtlmApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectNtlmAppInput() {
    return this._detectNtlmApp;
  }

  // disable_keepalive_posts_msie6 - computed: false, optional: true, required: false
  private _disableKeepalivePostsMsie6?: string; 
  public get disableKeepalivePostsMsie6() {
    return this.getStringAttribute('disable_keepalive_posts_msie6');
  }
  public set disableKeepalivePostsMsie6(value: string) {
    this._disableKeepalivePostsMsie6 = value;
  }
  public resetDisableKeepalivePostsMsie6() {
    this._disableKeepalivePostsMsie6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKeepalivePostsMsie6Input() {
    return this._disableKeepalivePostsMsie6;
  }

  // disable_sni_hostname_check - computed: false, optional: true, required: false
  private _disableSniHostnameCheck?: string; 
  public get disableSniHostnameCheck() {
    return this.getStringAttribute('disable_sni_hostname_check');
  }
  public set disableSniHostnameCheck(value: string) {
    this._disableSniHostnameCheck = value;
  }
  public resetDisableSniHostnameCheck() {
    this._disableSniHostnameCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniHostnameCheckInput() {
    return this._disableSniHostnameCheck;
  }

  // enable_chunk_merge - computed: false, optional: true, required: false
  private _enableChunkMerge?: string; 
  public get enableChunkMerge() {
    return this.getStringAttribute('enable_chunk_merge');
  }
  public set enableChunkMerge(value: string) {
    this._enableChunkMerge = value;
  }
  public resetEnableChunkMerge() {
    this._enableChunkMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableChunkMergeInput() {
    return this._enableChunkMerge;
  }

  // enable_fire_and_forget - computed: false, optional: true, required: false
  private _enableFireAndForget?: string; 
  public get enableFireAndForget() {
    return this.getStringAttribute('enable_fire_and_forget');
  }
  public set enableFireAndForget(value: string) {
    this._enableFireAndForget = value;
  }
  public resetEnableFireAndForget() {
    this._enableFireAndForget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFireAndForgetInput() {
    return this._enableFireAndForget;
  }

  // enable_request_body_buffering - computed: false, optional: true, required: false
  private _enableRequestBodyBuffering?: string; 
  public get enableRequestBodyBuffering() {
    return this.getStringAttribute('enable_request_body_buffering');
  }
  public set enableRequestBodyBuffering(value: string) {
    this._enableRequestBodyBuffering = value;
  }
  public resetEnableRequestBodyBuffering() {
    this._enableRequestBodyBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestBodyBufferingInput() {
    return this._enableRequestBodyBuffering;
  }

  // enable_request_body_metrics - computed: false, optional: true, required: false
  private _enableRequestBodyMetrics?: string; 
  public get enableRequestBodyMetrics() {
    return this.getStringAttribute('enable_request_body_metrics');
  }
  public set enableRequestBodyMetrics(value: string) {
    this._enableRequestBodyMetrics = value;
  }
  public resetEnableRequestBodyMetrics() {
    this._enableRequestBodyMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestBodyMetricsInput() {
    return this._enableRequestBodyMetrics;
  }

  // fwd_close_hdr_for_bound_connections - computed: false, optional: true, required: false
  private _fwdCloseHdrForBoundConnections?: string; 
  public get fwdCloseHdrForBoundConnections() {
    return this.getStringAttribute('fwd_close_hdr_for_bound_connections');
  }
  public set fwdCloseHdrForBoundConnections(value: string) {
    this._fwdCloseHdrForBoundConnections = value;
  }
  public resetFwdCloseHdrForBoundConnections() {
    this._fwdCloseHdrForBoundConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdCloseHdrForBoundConnectionsInput() {
    return this._fwdCloseHdrForBoundConnections;
  }

  // hsts_enabled - computed: false, optional: true, required: false
  private _hstsEnabled?: string; 
  public get hstsEnabled() {
    return this.getStringAttribute('hsts_enabled');
  }
  public set hstsEnabled(value: string) {
    this._hstsEnabled = value;
  }
  public resetHstsEnabled() {
    this._hstsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsEnabledInput() {
    return this._hstsEnabled;
  }

  // hsts_max_age - computed: false, optional: true, required: false
  private _hstsMaxAge?: string; 
  public get hstsMaxAge() {
    return this.getStringAttribute('hsts_max_age');
  }
  public set hstsMaxAge(value: string) {
    this._hstsMaxAge = value;
  }
  public resetHstsMaxAge() {
    this._hstsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsMaxAgeInput() {
    return this._hstsMaxAge;
  }

  // hsts_subdomains_enabled - computed: false, optional: true, required: false
  private _hstsSubdomainsEnabled?: string; 
  public get hstsSubdomainsEnabled() {
    return this.getStringAttribute('hsts_subdomains_enabled');
  }
  public set hstsSubdomainsEnabled(value: string) {
    this._hstsSubdomainsEnabled = value;
  }
  public resetHstsSubdomainsEnabled() {
    this._hstsSubdomainsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsSubdomainsEnabledInput() {
    return this._hstsSubdomainsEnabled;
  }

  // http_to_https - computed: false, optional: true, required: false
  private _httpToHttps?: string; 
  public get httpToHttps() {
    return this.getStringAttribute('http_to_https');
  }
  public set httpToHttps(value: string) {
    this._httpToHttps = value;
  }
  public resetHttpToHttps() {
    this._httpToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpToHttpsInput() {
    return this._httpToHttps;
  }

  // http_upstream_buffer_size - computed: false, optional: true, required: false
  private _httpUpstreamBufferSize?: string; 
  public get httpUpstreamBufferSize() {
    return this.getStringAttribute('http_upstream_buffer_size');
  }
  public set httpUpstreamBufferSize(value: string) {
    this._httpUpstreamBufferSize = value;
  }
  public resetHttpUpstreamBufferSize() {
    this._httpUpstreamBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUpstreamBufferSizeInput() {
    return this._httpUpstreamBufferSize;
  }

  // httponly_enabled - computed: false, optional: true, required: false
  private _httponlyEnabled?: string; 
  public get httponlyEnabled() {
    return this.getStringAttribute('httponly_enabled');
  }
  public set httponlyEnabled(value: string) {
    this._httponlyEnabled = value;
  }
  public resetHttponlyEnabled() {
    this._httponlyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httponlyEnabledInput() {
    return this._httponlyEnabled;
  }

  // keepalive_header - computed: false, optional: true, required: false
  private _keepaliveHeader?: string; 
  public get keepaliveHeader() {
    return this.getStringAttribute('keepalive_header');
  }
  public set keepaliveHeader(value: string) {
    this._keepaliveHeader = value;
  }
  public resetKeepaliveHeader() {
    this._keepaliveHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveHeaderInput() {
    return this._keepaliveHeader;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // max_bad_rps_cip - computed: false, optional: true, required: false
  private _maxBadRpsCip?: string; 
  public get maxBadRpsCip() {
    return this.getStringAttribute('max_bad_rps_cip');
  }
  public set maxBadRpsCip(value: string) {
    this._maxBadRpsCip = value;
  }
  public resetMaxBadRpsCip() {
    this._maxBadRpsCip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRpsCipInput() {
    return this._maxBadRpsCip;
  }

  // max_bad_rps_cip_uri - computed: false, optional: true, required: false
  private _maxBadRpsCipUri?: string; 
  public get maxBadRpsCipUri() {
    return this.getStringAttribute('max_bad_rps_cip_uri');
  }
  public set maxBadRpsCipUri(value: string) {
    this._maxBadRpsCipUri = value;
  }
  public resetMaxBadRpsCipUri() {
    this._maxBadRpsCipUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRpsCipUriInput() {
    return this._maxBadRpsCipUri;
  }

  // max_bad_rps_uri - computed: false, optional: true, required: false
  private _maxBadRpsUri?: string; 
  public get maxBadRpsUri() {
    return this.getStringAttribute('max_bad_rps_uri');
  }
  public set maxBadRpsUri(value: string) {
    this._maxBadRpsUri = value;
  }
  public resetMaxBadRpsUri() {
    this._maxBadRpsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRpsUriInput() {
    return this._maxBadRpsUri;
  }

  // max_header_count - computed: false, optional: true, required: false
  private _maxHeaderCount?: string; 
  public get maxHeaderCount() {
    return this.getStringAttribute('max_header_count');
  }
  public set maxHeaderCount(value: string) {
    this._maxHeaderCount = value;
  }
  public resetMaxHeaderCount() {
    this._maxHeaderCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountInput() {
    return this._maxHeaderCount;
  }

  // max_keepalive_requests - computed: false, optional: true, required: false
  private _maxKeepaliveRequests?: string; 
  public get maxKeepaliveRequests() {
    return this.getStringAttribute('max_keepalive_requests');
  }
  public set maxKeepaliveRequests(value: string) {
    this._maxKeepaliveRequests = value;
  }
  public resetMaxKeepaliveRequests() {
    this._maxKeepaliveRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKeepaliveRequestsInput() {
    return this._maxKeepaliveRequests;
  }

  // max_response_headers_size - computed: false, optional: true, required: false
  private _maxResponseHeadersSize?: string; 
  public get maxResponseHeadersSize() {
    return this.getStringAttribute('max_response_headers_size');
  }
  public set maxResponseHeadersSize(value: string) {
    this._maxResponseHeadersSize = value;
  }
  public resetMaxResponseHeadersSize() {
    this._maxResponseHeadersSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResponseHeadersSizeInput() {
    return this._maxResponseHeadersSize;
  }

  // max_rps_cip - computed: false, optional: true, required: false
  private _maxRpsCip?: string; 
  public get maxRpsCip() {
    return this.getStringAttribute('max_rps_cip');
  }
  public set maxRpsCip(value: string) {
    this._maxRpsCip = value;
  }
  public resetMaxRpsCip() {
    this._maxRpsCip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsCipInput() {
    return this._maxRpsCip;
  }

  // max_rps_cip_uri - computed: false, optional: true, required: false
  private _maxRpsCipUri?: string; 
  public get maxRpsCipUri() {
    return this.getStringAttribute('max_rps_cip_uri');
  }
  public set maxRpsCipUri(value: string) {
    this._maxRpsCipUri = value;
  }
  public resetMaxRpsCipUri() {
    this._maxRpsCipUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsCipUriInput() {
    return this._maxRpsCipUri;
  }

  // max_rps_unknown_cip - computed: false, optional: true, required: false
  private _maxRpsUnknownCip?: string; 
  public get maxRpsUnknownCip() {
    return this.getStringAttribute('max_rps_unknown_cip');
  }
  public set maxRpsUnknownCip(value: string) {
    this._maxRpsUnknownCip = value;
  }
  public resetMaxRpsUnknownCip() {
    this._maxRpsUnknownCip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsUnknownCipInput() {
    return this._maxRpsUnknownCip;
  }

  // max_rps_unknown_uri - computed: false, optional: true, required: false
  private _maxRpsUnknownUri?: string; 
  public get maxRpsUnknownUri() {
    return this.getStringAttribute('max_rps_unknown_uri');
  }
  public set maxRpsUnknownUri(value: string) {
    this._maxRpsUnknownUri = value;
  }
  public resetMaxRpsUnknownUri() {
    this._maxRpsUnknownUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsUnknownUriInput() {
    return this._maxRpsUnknownUri;
  }

  // max_rps_uri - computed: false, optional: true, required: false
  private _maxRpsUri?: string; 
  public get maxRpsUri() {
    return this.getStringAttribute('max_rps_uri');
  }
  public set maxRpsUri(value: string) {
    this._maxRpsUri = value;
  }
  public resetMaxRpsUri() {
    this._maxRpsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRpsUriInput() {
    return this._maxRpsUri;
  }

  // pass_through_x_accel_headers - computed: false, optional: true, required: false
  private _passThroughXAccelHeaders?: string; 
  public get passThroughXAccelHeaders() {
    return this.getStringAttribute('pass_through_x_accel_headers');
  }
  public set passThroughXAccelHeaders(value: string) {
    this._passThroughXAccelHeaders = value;
  }
  public resetPassThroughXAccelHeaders() {
    this._passThroughXAccelHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughXAccelHeadersInput() {
    return this._passThroughXAccelHeaders;
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // post_accept_timeout - computed: false, optional: true, required: false
  private _postAcceptTimeout?: string; 
  public get postAcceptTimeout() {
    return this.getStringAttribute('post_accept_timeout');
  }
  public set postAcceptTimeout(value: string) {
    this._postAcceptTimeout = value;
  }
  public resetPostAcceptTimeout() {
    this._postAcceptTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAcceptTimeoutInput() {
    return this._postAcceptTimeout;
  }

  // reset_conn_http_on_ssl_port - computed: false, optional: true, required: false
  private _resetConnHttpOnSslPort?: string; 
  public get resetConnHttpOnSslPort() {
    return this.getStringAttribute('reset_conn_http_on_ssl_port');
  }
  public set resetConnHttpOnSslPort(value: string) {
    this._resetConnHttpOnSslPort = value;
  }
  public resetResetConnHttpOnSslPort() {
    this._resetConnHttpOnSslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetConnHttpOnSslPortInput() {
    return this._resetConnHttpOnSslPort;
  }

  // respond_with_100_continue - computed: false, optional: true, required: false
  private _respondWith100Continue?: string; 
  public get respondWith100Continue() {
    return this.getStringAttribute('respond_with_100_continue');
  }
  public set respondWith100Continue(value: string) {
    this._respondWith100Continue = value;
  }
  public resetRespondWith100Continue() {
    this._respondWith100Continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondWith100ContinueInput() {
    return this._respondWith100Continue;
  }

  // secure_cookie_enabled - computed: false, optional: true, required: false
  private _secureCookieEnabled?: string; 
  public get secureCookieEnabled() {
    return this.getStringAttribute('secure_cookie_enabled');
  }
  public set secureCookieEnabled(value: string) {
    this._secureCookieEnabled = value;
  }
  public resetSecureCookieEnabled() {
    this._secureCookieEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureCookieEnabledInput() {
    return this._secureCookieEnabled;
  }

  // server_side_redirect_to_https - computed: false, optional: true, required: false
  private _serverSideRedirectToHttps?: string; 
  public get serverSideRedirectToHttps() {
    return this.getStringAttribute('server_side_redirect_to_https');
  }
  public set serverSideRedirectToHttps(value: string) {
    this._serverSideRedirectToHttps = value;
  }
  public resetServerSideRedirectToHttps() {
    this._serverSideRedirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideRedirectToHttpsInput() {
    return this._serverSideRedirectToHttps;
  }

  // ssl_client_certificate_mode - computed: false, optional: true, required: false
  private _sslClientCertificateMode?: string; 
  public get sslClientCertificateMode() {
    return this.getStringAttribute('ssl_client_certificate_mode');
  }
  public set sslClientCertificateMode(value: string) {
    this._sslClientCertificateMode = value;
  }
  public resetSslClientCertificateMode() {
    this._sslClientCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateModeInput() {
    return this._sslClientCertificateMode;
  }

  // use_app_keepalive_timeout - computed: false, optional: true, required: false
  private _useAppKeepaliveTimeout?: string; 
  public get useAppKeepaliveTimeout() {
    return this.getStringAttribute('use_app_keepalive_timeout');
  }
  public set useAppKeepaliveTimeout(value: string) {
    this._useAppKeepaliveTimeout = value;
  }
  public resetUseAppKeepaliveTimeout() {
    this._useAppKeepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAppKeepaliveTimeoutInput() {
    return this._useAppKeepaliveTimeout;
  }

  // use_true_client_ip - computed: false, optional: true, required: false
  private _useTrueClientIp?: string; 
  public get useTrueClientIp() {
    return this.getStringAttribute('use_true_client_ip');
  }
  public set useTrueClientIp(value: string) {
    this._useTrueClientIp = value;
  }
  public resetUseTrueClientIp() {
    this._useTrueClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTrueClientIpInput() {
    return this._useTrueClientIp;
  }

  // websockets_enabled - computed: false, optional: true, required: false
  private _websocketsEnabled?: string; 
  public get websocketsEnabled() {
    return this.getStringAttribute('websockets_enabled');
  }
  public set websocketsEnabled(value: string) {
    this._websocketsEnabled = value;
  }
  public resetWebsocketsEnabled() {
    this._websocketsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketsEnabledInput() {
    return this._websocketsEnabled;
  }

  // x_forwarded_proto_enabled - computed: false, optional: true, required: false
  private _xForwardedProtoEnabled?: string; 
  public get xForwardedProtoEnabled() {
    return this.getStringAttribute('x_forwarded_proto_enabled');
  }
  public set xForwardedProtoEnabled(value: string) {
    this._xForwardedProtoEnabled = value;
  }
  public resetXForwardedProtoEnabled() {
    this._xForwardedProtoEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedProtoEnabledInput() {
    return this._xForwardedProtoEnabled;
  }

  // xff_alternate_name - computed: false, optional: true, required: false
  private _xffAlternateName?: string; 
  public get xffAlternateName() {
    return this.getStringAttribute('xff_alternate_name');
  }
  public set xffAlternateName(value: string) {
    this._xffAlternateName = value;
  }
  public resetXffAlternateName() {
    this._xffAlternateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffAlternateNameInput() {
    return this._xffAlternateName;
  }

  // xff_enabled - computed: false, optional: true, required: false
  private _xffEnabled?: string; 
  public get xffEnabled() {
    return this.getStringAttribute('xff_enabled');
  }
  public set xffEnabled(value: string) {
    this._xffEnabled = value;
  }
  public resetXffEnabled() {
    this._xffEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffEnabledInput() {
    return this._xffEnabled;
  }

  // xff_update - computed: false, optional: true, required: false
  private _xffUpdate?: string; 
  public get xffUpdate() {
    return this.getStringAttribute('xff_update');
  }
  public set xffUpdate(value: string) {
    this._xffUpdate = value;
  }
  public resetXffUpdate() {
    this._xffUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xffUpdateInput() {
    return this._xffUpdate;
  }

  // cache_config - computed: false, optional: true, required: false
  private _cacheConfig = new ApplicationprofileHttpProfileCacheConfigList(this, "cache_config", true);
  public get cacheConfig() {
    return this._cacheConfig;
  }
  public putCacheConfig(value: ApplicationprofileHttpProfileCacheConfig[] | cdktf.IResolvable) {
    this._cacheConfig.internalValue = value;
  }
  public resetCacheConfig() {
    this._cacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigInput() {
    return this._cacheConfig.internalValue;
  }

  // compression_profile - computed: false, optional: true, required: false
  private _compressionProfile = new ApplicationprofileHttpProfileCompressionProfileList(this, "compression_profile", true);
  public get compressionProfile() {
    return this._compressionProfile;
  }
  public putCompressionProfile(value: ApplicationprofileHttpProfileCompressionProfile[] | cdktf.IResolvable) {
    this._compressionProfile.internalValue = value;
  }
  public resetCompressionProfile() {
    this._compressionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionProfileInput() {
    return this._compressionProfile.internalValue;
  }

  // http2_profile - computed: false, optional: true, required: false
  private _http2Profile = new ApplicationprofileHttpProfileHttp2ProfileList(this, "http2_profile", true);
  public get http2Profile() {
    return this._http2Profile;
  }
  public putHttp2Profile(value: ApplicationprofileHttpProfileHttp2Profile[] | cdktf.IResolvable) {
    this._http2Profile.internalValue = value;
  }
  public resetHttp2Profile() {
    this._http2Profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ProfileInput() {
    return this._http2Profile.internalValue;
  }

  // session_config - computed: false, optional: true, required: false
  private _sessionConfig = new ApplicationprofileHttpProfileSessionConfigList(this, "session_config", true);
  public get sessionConfig() {
    return this._sessionConfig;
  }
  public putSessionConfig(value: ApplicationprofileHttpProfileSessionConfig[] | cdktf.IResolvable) {
    this._sessionConfig.internalValue = value;
  }
  public resetSessionConfig() {
    this._sessionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionConfigInput() {
    return this._sessionConfig.internalValue;
  }

  // ssl_client_certificate_action - computed: false, optional: true, required: false
  private _sslClientCertificateAction = new ApplicationprofileHttpProfileSslClientCertificateActionList(this, "ssl_client_certificate_action", true);
  public get sslClientCertificateAction() {
    return this._sslClientCertificateAction;
  }
  public putSslClientCertificateAction(value: ApplicationprofileHttpProfileSslClientCertificateAction[] | cdktf.IResolvable) {
    this._sslClientCertificateAction.internalValue = value;
  }
  public resetSslClientCertificateAction() {
    this._sslClientCertificateAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateActionInput() {
    return this._sslClientCertificateAction.internalValue;
  }

  // true_client_ip - computed: false, optional: true, required: false
  private _trueClientIp = new ApplicationprofileHttpProfileTrueClientIpList(this, "true_client_ip", true);
  public get trueClientIp() {
    return this._trueClientIp;
  }
  public putTrueClientIp(value: ApplicationprofileHttpProfileTrueClientIp[] | cdktf.IResolvable) {
    this._trueClientIp.internalValue = value;
  }
  public resetTrueClientIp() {
    this._trueClientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trueClientIpInput() {
    return this._trueClientIp.internalValue;
  }
}

export class ApplicationprofileHttpProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileHttpProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileHttpProfileOutputReference {
    return new ApplicationprofileHttpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileL4SslProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ssl_stream_idle_timeout Applicationprofile#ssl_stream_idle_timeout}
  */
  readonly sslStreamIdleTimeout?: string;
}

export function applicationprofileL4SslProfileToTerraform(struct?: ApplicationprofileL4SslProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_stream_idle_timeout: cdktf.stringToTerraform(struct!.sslStreamIdleTimeout),
  }
}


export function applicationprofileL4SslProfileToHclTerraform(struct?: ApplicationprofileL4SslProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_stream_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sslStreamIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileL4SslProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileL4SslProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslStreamIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslStreamIdleTimeout = this._sslStreamIdleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileL4SslProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslStreamIdleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslStreamIdleTimeout = value.sslStreamIdleTimeout;
    }
  }

  // ssl_stream_idle_timeout - computed: false, optional: true, required: false
  private _sslStreamIdleTimeout?: string; 
  public get sslStreamIdleTimeout() {
    return this.getStringAttribute('ssl_stream_idle_timeout');
  }
  public set sslStreamIdleTimeout(value: string) {
    this._sslStreamIdleTimeout = value;
  }
  public resetSslStreamIdleTimeout() {
    this._sslStreamIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslStreamIdleTimeoutInput() {
    return this._sslStreamIdleTimeout;
  }
}

export class ApplicationprofileL4SslProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileL4SslProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileL4SslProfileOutputReference {
    return new ApplicationprofileL4SslProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#key Applicationprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#values Applicationprofile#values}
  */
  readonly values?: string[];
}

export function applicationprofileMarkersToTerraform(struct?: ApplicationprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function applicationprofileMarkersToHclTerraform(struct?: ApplicationprofileMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApplicationprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileMarkersOutputReference {
    return new ApplicationprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileSipServiceProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#transaction_timeout Applicationprofile#transaction_timeout}
  */
  readonly transactionTimeout?: string;
}

export function applicationprofileSipServiceProfileToTerraform(struct?: ApplicationprofileSipServiceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transaction_timeout: cdktf.stringToTerraform(struct!.transactionTimeout),
  }
}


export function applicationprofileSipServiceProfileToHclTerraform(struct?: ApplicationprofileSipServiceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transaction_timeout: {
      value: cdktf.stringToHclTerraform(struct!.transactionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileSipServiceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileSipServiceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transactionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionTimeout = this._transactionTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileSipServiceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transactionTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transactionTimeout = value.transactionTimeout;
    }
  }

  // transaction_timeout - computed: false, optional: true, required: false
  private _transactionTimeout?: string; 
  public get transactionTimeout() {
    return this.getStringAttribute('transaction_timeout');
  }
  public set transactionTimeout(value: string) {
    this._transactionTimeout = value;
  }
  public resetTransactionTimeout() {
    this._transactionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionTimeoutInput() {
    return this._transactionTimeout;
  }
}

export class ApplicationprofileSipServiceProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileSipServiceProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileSipServiceProfileOutputReference {
    return new ApplicationprofileSipServiceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileTcpAppProfileFtpProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#deactivate_active Applicationprofile#deactivate_active}
  */
  readonly deactivateActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#deactivate_passive Applicationprofile#deactivate_passive}
  */
  readonly deactivatePassive?: string;
}

export function applicationprofileTcpAppProfileFtpProfileToTerraform(struct?: ApplicationprofileTcpAppProfileFtpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deactivate_active: cdktf.stringToTerraform(struct!.deactivateActive),
    deactivate_passive: cdktf.stringToTerraform(struct!.deactivatePassive),
  }
}


export function applicationprofileTcpAppProfileFtpProfileToHclTerraform(struct?: ApplicationprofileTcpAppProfileFtpProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deactivate_active: {
      value: cdktf.stringToHclTerraform(struct!.deactivateActive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deactivate_passive: {
      value: cdktf.stringToHclTerraform(struct!.deactivatePassive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileTcpAppProfileFtpProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileTcpAppProfileFtpProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deactivateActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivateActive = this._deactivateActive;
    }
    if (this._deactivatePassive !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivatePassive = this._deactivatePassive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileTcpAppProfileFtpProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deactivateActive = undefined;
      this._deactivatePassive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deactivateActive = value.deactivateActive;
      this._deactivatePassive = value.deactivatePassive;
    }
  }

  // deactivate_active - computed: false, optional: true, required: false
  private _deactivateActive?: string; 
  public get deactivateActive() {
    return this.getStringAttribute('deactivate_active');
  }
  public set deactivateActive(value: string) {
    this._deactivateActive = value;
  }
  public resetDeactivateActive() {
    this._deactivateActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateActiveInput() {
    return this._deactivateActive;
  }

  // deactivate_passive - computed: false, optional: true, required: false
  private _deactivatePassive?: string; 
  public get deactivatePassive() {
    return this.getStringAttribute('deactivate_passive');
  }
  public set deactivatePassive(value: string) {
    this._deactivatePassive = value;
  }
  public resetDeactivatePassive() {
    this._deactivatePassive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatePassiveInput() {
    return this._deactivatePassive;
  }
}

export class ApplicationprofileTcpAppProfileFtpProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileTcpAppProfileFtpProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileTcpAppProfileFtpProfileOutputReference {
    return new ApplicationprofileTcpAppProfileFtpProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationprofileTcpAppProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#pki_profile_ref Applicationprofile#pki_profile_ref}
  */
  readonly pkiProfileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#proxy_protocol_enabled Applicationprofile#proxy_protocol_enabled}
  */
  readonly proxyProtocolEnabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#proxy_protocol_version Applicationprofile#proxy_protocol_version}
  */
  readonly proxyProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ssl_client_certificate_mode Applicationprofile#ssl_client_certificate_mode}
  */
  readonly sslClientCertificateMode?: string;
  /**
  * ftp_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/applicationprofile#ftp_profile Applicationprofile#ftp_profile}
  */
  readonly ftpProfile?: ApplicationprofileTcpAppProfileFtpProfile[] | cdktf.IResolvable;
}

export function applicationprofileTcpAppProfileToTerraform(struct?: ApplicationprofileTcpAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pki_profile_ref: cdktf.stringToTerraform(struct!.pkiProfileRef),
    proxy_protocol_enabled: cdktf.stringToTerraform(struct!.proxyProtocolEnabled),
    proxy_protocol_version: cdktf.stringToTerraform(struct!.proxyProtocolVersion),
    ssl_client_certificate_mode: cdktf.stringToTerraform(struct!.sslClientCertificateMode),
    ftp_profile: cdktf.listMapper(applicationprofileTcpAppProfileFtpProfileToTerraform, true)(struct!.ftpProfile),
  }
}


export function applicationprofileTcpAppProfileToHclTerraform(struct?: ApplicationprofileTcpAppProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pki_profile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiProfileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol_enabled: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocolEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_client_certificate_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslClientCertificateMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_profile: {
      value: cdktf.listMapperHcl(applicationprofileTcpAppProfileFtpProfileToHclTerraform, true)(struct!.ftpProfile),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationprofileTcpAppProfileFtpProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationprofileTcpAppProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationprofileTcpAppProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pkiProfileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiProfileRef = this._pkiProfileRef;
    }
    if (this._proxyProtocolEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolEnabled = this._proxyProtocolEnabled;
    }
    if (this._proxyProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolVersion = this._proxyProtocolVersion;
    }
    if (this._sslClientCertificateMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslClientCertificateMode = this._sslClientCertificateMode;
    }
    if (this._ftpProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpProfile = this._ftpProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationprofileTcpAppProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pkiProfileRef = undefined;
      this._proxyProtocolEnabled = undefined;
      this._proxyProtocolVersion = undefined;
      this._sslClientCertificateMode = undefined;
      this._ftpProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pkiProfileRef = value.pkiProfileRef;
      this._proxyProtocolEnabled = value.proxyProtocolEnabled;
      this._proxyProtocolVersion = value.proxyProtocolVersion;
      this._sslClientCertificateMode = value.sslClientCertificateMode;
      this._ftpProfile.internalValue = value.ftpProfile;
    }
  }

  // pki_profile_ref - computed: true, optional: true, required: false
  private _pkiProfileRef?: string; 
  public get pkiProfileRef() {
    return this.getStringAttribute('pki_profile_ref');
  }
  public set pkiProfileRef(value: string) {
    this._pkiProfileRef = value;
  }
  public resetPkiProfileRef() {
    this._pkiProfileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiProfileRefInput() {
    return this._pkiProfileRef;
  }

  // proxy_protocol_enabled - computed: false, optional: true, required: false
  private _proxyProtocolEnabled?: string; 
  public get proxyProtocolEnabled() {
    return this.getStringAttribute('proxy_protocol_enabled');
  }
  public set proxyProtocolEnabled(value: string) {
    this._proxyProtocolEnabled = value;
  }
  public resetProxyProtocolEnabled() {
    this._proxyProtocolEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolEnabledInput() {
    return this._proxyProtocolEnabled;
  }

  // proxy_protocol_version - computed: false, optional: true, required: false
  private _proxyProtocolVersion?: string; 
  public get proxyProtocolVersion() {
    return this.getStringAttribute('proxy_protocol_version');
  }
  public set proxyProtocolVersion(value: string) {
    this._proxyProtocolVersion = value;
  }
  public resetProxyProtocolVersion() {
    this._proxyProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolVersionInput() {
    return this._proxyProtocolVersion;
  }

  // ssl_client_certificate_mode - computed: false, optional: true, required: false
  private _sslClientCertificateMode?: string; 
  public get sslClientCertificateMode() {
    return this.getStringAttribute('ssl_client_certificate_mode');
  }
  public set sslClientCertificateMode(value: string) {
    this._sslClientCertificateMode = value;
  }
  public resetSslClientCertificateMode() {
    this._sslClientCertificateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslClientCertificateModeInput() {
    return this._sslClientCertificateMode;
  }

  // ftp_profile - computed: false, optional: true, required: false
  private _ftpProfile = new ApplicationprofileTcpAppProfileFtpProfileList(this, "ftp_profile", true);
  public get ftpProfile() {
    return this._ftpProfile;
  }
  public putFtpProfile(value: ApplicationprofileTcpAppProfileFtpProfile[] | cdktf.IResolvable) {
    this._ftpProfile.internalValue = value;
  }
  public resetFtpProfile() {
    this._ftpProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpProfileInput() {
    return this._ftpProfile.internalValue;
  }
}

export class ApplicationprofileTcpAppProfileList extends cdktf.ComplexList {
  public internalValue? : ApplicationprofileTcpAppProfile[] | cdktf.IResolvable

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
  public get(index: number): ApplicationprofileTcpAppProfileOutputReference {
    return new ApplicationprofileTcpAppProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
