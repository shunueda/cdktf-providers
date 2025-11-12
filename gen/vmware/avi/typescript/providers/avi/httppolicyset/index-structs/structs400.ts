import * as cdktf from 'cdktf';
import { HttppolicysetHttpSecurityPolicyRulesActionFile,
httppolicysetHttpSecurityPolicyRulesActionFileToTerraform,
httppolicysetHttpSecurityPolicyRulesActionFileToHclTerraform,
HttppolicysetHttpSecurityPolicyRulesActionFileList,
HttppolicysetHttpSecurityPolicyRulesActionRateProfile,
httppolicysetHttpSecurityPolicyRulesActionRateProfileToTerraform,
httppolicysetHttpSecurityPolicyRulesActionRateProfileToHclTerraform,
HttppolicysetHttpSecurityPolicyRulesActionRateProfileList } from './structs0'
export interface HttppolicysetHttpSecurityPolicyRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#https_port Httppolicyset#https_port}
  */
  readonly httpsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#status_code Httppolicyset#status_code}
  */
  readonly statusCode?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#file Httppolicyset#file}
  */
  readonly file?: HttppolicysetHttpSecurityPolicyRulesActionFile[] | cdktf.IResolvable;
  /**
  * rate_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rate_profile Httppolicyset#rate_profile}
  */
  readonly rateProfile?: HttppolicysetHttpSecurityPolicyRulesActionRateProfile[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesActionToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    https_port: cdktf.stringToTerraform(struct!.httpsPort),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    file: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionFileToTerraform, true)(struct!.file),
    rate_profile: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionRateProfileToTerraform, true)(struct!.rateProfile),
  }
}


export function httppolicysetHttpSecurityPolicyRulesActionToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.stringToHclTerraform(struct!.httpsPort),
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
    file: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionFileList",
    },
    rate_profile: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionRateProfileToHclTerraform, true)(struct!.rateProfile),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionRateProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._rateProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateProfile = this._rateProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._httpsPort = undefined;
      this._statusCode = undefined;
      this._file.internalValue = undefined;
      this._rateProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._httpsPort = value.httpsPort;
      this._statusCode = value.statusCode;
      this._file.internalValue = value.file;
      this._rateProfile.internalValue = value.rateProfile;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: string; 
  public get httpsPort() {
    return this.getStringAttribute('https_port');
  }
  public set httpsPort(value: string) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // status_code - computed: true, optional: true, required: false
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

  // file - computed: false, optional: true, required: false
  private _file = new HttppolicysetHttpSecurityPolicyRulesActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: HttppolicysetHttpSecurityPolicyRulesActionFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // rate_profile - computed: false, optional: true, required: false
  private _rateProfile = new HttppolicysetHttpSecurityPolicyRulesActionRateProfileList(this, "rate_profile", true);
  public get rateProfile() {
    return this._rateProfile;
  }
  public putRateProfile(value: HttppolicysetHttpSecurityPolicyRulesActionRateProfile[] | cdktf.IResolvable) {
    this._rateProfile.internalValue = value;
  }
  public resetRateProfile() {
    this._rateProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateProfileInput() {
    return this._rateProfile.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesActionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesAction[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesActionOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#user_defined_type Httppolicyset#user_defined_type}
  */
  readonly userDefinedType?: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    user_defined_type: cdktf.stringToTerraform(struct!.userDefinedType),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable): any {
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
    user_defined_type: {
      value: cdktf.stringToHclTerraform(struct!.userDefinedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userDefinedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedType = this._userDefinedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._userDefinedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._userDefinedType = value.userDefinedType;
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

  // user_defined_type - computed: true, optional: true, required: false
  private _userDefinedType?: string; 
  public get userDefinedType() {
    return this.getStringAttribute('user_defined_type');
  }
  public set userDefinedType(value: string) {
    this._userDefinedType = value;
  }
  public resetUserDefinedType() {
    this._userDefinedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedTypeInput() {
    return this._userDefinedType;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * classifications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#classifications Httppolicyset#classifications}
  */
  readonly classifications?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    classifications: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsToTerraform, true)(struct!.classifications),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classifications: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsToHclTerraform, true)(struct!.classifications),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._classifications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._classifications.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._classifications.internalValue = value.classifications;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications = new HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassificationsList(this, "classifications", false);
  public get classifications() {
    return this._classifications;
  }
  public putClassifications(value: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultClassifications[] | cdktf.IResolvable) {
    this._classifications.internalValue = value;
  }
  public resetClassifications() {
    this._classifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchClientIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchClientIpToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchClientIpToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchClientIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchClientIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
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

  // addrs - computed: false, optional: true, required: false
  private _addrs = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchClientIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchClientIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchClientIpOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchClientIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchCookieToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchCookie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchCookieToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchCookie | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchCookieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchCookie | cdktf.IResolvable | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchCookie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._name = undefined;
      this._value = undefined;
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
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchCookieList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchCookie[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchCookieOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchCookieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#attribute Httppolicyset#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#values Httppolicyset#values}
  */
  readonly values: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchGeoMatchesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchGeoMatchesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
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

export class HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._matchOperation = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._matchOperation = value.matchOperation;
      this._values = value.values;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchHdrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdr Httppolicyset#hdr}
  */
  readonly hdr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchHdrsToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdr: cdktf.stringToTerraform(struct!.hdr),
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchHdrsToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchHdrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdr: {
      value: cdktf.stringToHclTerraform(struct!.hdr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchHdrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchHdrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdr = this._hdr;
    }
    if (this._matchCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCase = this._matchCase;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchHdrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdr = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdr = value.hdr;
      this._matchCase = value.matchCase;
      this._matchCriteria = value.matchCriteria;
      this._value = value.value;
    }
  }

  // hdr - computed: false, optional: false, required: true
  private _hdr?: string; 
  public get hdr() {
    return this.getStringAttribute('hdr');
  }
  public set hdr(value: string) {
    this._hdr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrInput() {
    return this._hdr;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchHdrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchHdrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchHdrsOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchHdrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchHostHdr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#value Httppolicyset#value}
  */
  readonly value?: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchHostHdrToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchHostHdr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_case: cdktf.stringToTerraform(struct!.matchCase),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchHostHdrToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchHostHdr | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchHostHdrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchHostHdr | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchHostHdr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCase = undefined;
      this._matchCriteria = undefined;
      this._value = undefined;
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
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchHostHdrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchHostHdr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchHostHdrOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchHostHdrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#reputation_types Httppolicyset#reputation_types}
  */
  readonly reputationTypes: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    reputation_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reputationTypes),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reputation_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reputationTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._reputationTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationTypes = this._reputationTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchOperation = undefined;
      this._reputationTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchOperation = value.matchOperation;
      this._reputationTypes = value.reputationTypes;
    }
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
  }

  // reputation_types - computed: false, optional: false, required: true
  private _reputationTypes?: string[]; 
  public get reputationTypes() {
    return this.getListAttribute('reputation_types');
  }
  public set reputationTypes(value: string[]) {
    this._reputationTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationTypesInput() {
    return this._reputationTypes;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#methods Httppolicyset#methods}
  */
  readonly methods: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchMethodToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchMethodToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
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

export class HttppolicysetHttpSecurityPolicyRulesMatchMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._methods = value.methods;
    }
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

export class HttppolicysetHttpSecurityPolicyRulesMatchMethodList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchMethod[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchMethodOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchPathToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchPath | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesMatchPathToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchPath | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchPath | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchPathList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchPath[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchPathOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocols Httppolicyset#protocols}
  */
  readonly protocols: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchProtocolToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    protocols: cdktf.stringToTerraform(struct!.protocols),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchProtocolToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.stringToHclTerraform(struct!.protocols),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._protocols = value.protocols;
    }
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string; 
  public get protocols() {
    return this.getStringAttribute('protocols');
  }
  public set protocols(value: string) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchProtocolList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchProtocol[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchProtocolOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_case Httppolicyset#match_case}
  */
  readonly matchCase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_decoded_string Httppolicyset#match_decoded_string}
  */
  readonly matchDecodedString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_str Httppolicyset#match_str}
  */
  readonly matchStr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchQueryToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchQuery | cdktf.IResolvable): any {
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


export function httppolicysetHttpSecurityPolicyRulesMatchQueryToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchQuery | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchQuery | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchQuery | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchQueryList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchQuery[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchQueryOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#mask Httppolicyset#mask}
  */
  readonly mask: string;
  /**
  * ip_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_addr Httppolicyset#ip_addr}
  */
  readonly ipAddr: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mask: cdktf.stringToTerraform(struct!.mask),
    ip_addr: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrToTerraform, true)(struct!.ipAddr),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrToHclTerraform, true)(struct!.ipAddr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes | cdktf.IResolvable | undefined) {
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
  private _ipAddr = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddrList(this, "ip_addr", true);
  public get ipAddr() {
    return this._ipAddr;
  }
  public putIpAddr(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesIpAddr[] | cdktf.IResolvable) {
    this._ipAddr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addr Httppolicyset#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#type Httppolicyset#type}
  */
  readonly type: string;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable): any {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd | cdktf.IResolvable | undefined) {
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

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges {
  /**
  * begin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#begin Httppolicyset#begin}
  */
  readonly begin: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable;
  /**
  * end block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#end Httppolicyset#end}
  */
  readonly end: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    begin: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginToTerraform, true)(struct!.begin),
    end: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndToTerraform, true)(struct!.end),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    begin: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginToHclTerraform, true)(struct!.begin),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginList",
    },
    end: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndToHclTerraform, true)(struct!.end),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges | cdktf.IResolvable | undefined) {
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
  private _begin = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBeginList(this, "begin", true);
  public get begin() {
    return this._begin;
  }
  public putBegin(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesBegin[] | cdktf.IResolvable) {
    this._begin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get beginInput() {
    return this._begin.internalValue;
  }

  // end - computed: false, optional: false, required: true
  private _end = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEndList(this, "end", true);
  public get end() {
    return this._end;
  }
  public putEnd(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesEnd[] | cdktf.IResolvable) {
    this._end.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#group_refs Httppolicyset#group_refs}
  */
  readonly groupRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * addrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#addrs Httppolicyset#addrs}
  */
  readonly addrs?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable;
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#prefixes Httppolicyset#prefixes}
  */
  readonly prefixes?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable;
  /**
  * ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ranges Httppolicyset#ranges}
  */
  readonly ranges?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupRefs),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    addrs: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsToTerraform, true)(struct!.addrs),
    prefixes: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesToTerraform, true)(struct!.prefixes),
    ranges: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesToTerraform, true)(struct!.ranges),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchSourceIpToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupRefs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsToHclTerraform, true)(struct!.addrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesList",
    },
    ranges: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesToHclTerraform, true)(struct!.ranges),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchSourceIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupRefs = this._groupRefs;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._addrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs?.internalValue;
    }
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    if (this._ranges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranges = this._ranges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupRefs = undefined;
      this._matchCriteria = undefined;
      this._addrs.internalValue = undefined;
      this._prefixes.internalValue = undefined;
      this._ranges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupRefs = value.groupRefs;
      this._matchCriteria = value.matchCriteria;
      this._addrs.internalValue = value.addrs;
      this._prefixes.internalValue = value.prefixes;
      this._ranges.internalValue = value.ranges;
    }
  }

  // group_refs - computed: false, optional: true, required: false
  private _groupRefs?: string[]; 
  public get groupRefs() {
    return this.getListAttribute('group_refs');
  }
  public set groupRefs(value: string[]) {
    this._groupRefs = value;
  }
  public resetGroupRefs() {
    this._groupRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupRefsInput() {
    return this._groupRefs;
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

  // addrs - computed: false, optional: true, required: false
  private _addrs = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrsList(this, "addrs", false);
  public get addrs() {
    return this._addrs;
  }
  public putAddrs(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpAddrs[] | cdktf.IResolvable) {
    this._addrs.internalValue = value;
  }
  public resetAddrs() {
    this._addrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs.internalValue;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  public resetPrefixes() {
    this._prefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }

  // ranges - computed: false, optional: true, required: false
  private _ranges = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRangesList(this, "ranges", false);
  public get ranges() {
    return this._ranges;
  }
  public putRanges(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIpRanges[] | cdktf.IResolvable) {
    this._ranges.internalValue = value;
  }
  public resetRanges() {
    this._ranges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangesInput() {
    return this._ranges.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchSourceIpList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchSourceIp[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchSourceIpOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#fingerprints Httppolicyset#fingerprints}
  */
  readonly fingerprints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_operation Httppolicyset#match_operation}
  */
  readonly matchOperation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#string_group_refs Httppolicyset#string_group_refs}
  */
  readonly stringGroupRefs?: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fingerprints),
    match_operation: cdktf.stringToTerraform(struct!.matchOperation),
    string_group_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringGroupRefs),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    match_operation: {
      value: cdktf.stringToHclTerraform(struct!.matchOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprints = this._fingerprints;
    }
    if (this._matchOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOperation = this._matchOperation;
    }
    if (this._stringGroupRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringGroupRefs = this._stringGroupRefs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprints = undefined;
      this._matchOperation = undefined;
      this._stringGroupRefs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprints = value.fingerprints;
      this._matchOperation = value.matchOperation;
      this._stringGroupRefs = value.stringGroupRefs;
    }
  }

  // fingerprints - computed: false, optional: true, required: false
  private _fingerprints?: string[]; 
  public get fingerprints() {
    return this.getListAttribute('fingerprints');
  }
  public set fingerprints(value: string[]) {
    this._fingerprints = value;
  }
  public resetFingerprints() {
    this._fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintsInput() {
    return this._fingerprints;
  }

  // match_operation - computed: false, optional: false, required: true
  private _matchOperation?: string; 
  public get matchOperation() {
    return this.getStringAttribute('match_operation');
  }
  public set matchOperation(value: string) {
    this._matchOperation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOperationInput() {
    return this._matchOperation;
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

export class HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#versions Httppolicyset#versions}
  */
  readonly versions: string[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchVersionToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchVersionToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._versions = value.versions;
    }
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

  // versions - computed: false, optional: false, required: true
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchVersionList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchVersion[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchVersionOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatchVsPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match_criteria Httppolicyset#match_criteria}
  */
  readonly matchCriteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ports Httppolicyset#ports}
  */
  readonly ports: number[];
}

export function httppolicysetHttpSecurityPolicyRulesMatchVsPortToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchVsPortToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatchVsPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchVsPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatchVsPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatchVsPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchCriteria = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchCriteria = value.matchCriteria;
      this._ports = value.ports;
    }
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

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchVsPortList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatchVsPort[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchVsPortOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchVsPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRulesMatch {
  /**
  * bot_detection_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#bot_detection_result Httppolicyset#bot_detection_result}
  */
  readonly botDetectionResult?: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable;
  /**
  * client_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#client_ip Httppolicyset#client_ip}
  */
  readonly clientIp?: HttppolicysetHttpSecurityPolicyRulesMatchClientIp[] | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#cookie Httppolicyset#cookie}
  */
  readonly cookie?: HttppolicysetHttpSecurityPolicyRulesMatchCookie[] | cdktf.IResolvable;
  /**
  * geo_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#geo_matches Httppolicyset#geo_matches}
  */
  readonly geoMatches?: HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches[] | cdktf.IResolvable;
  /**
  * hdrs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#hdrs Httppolicyset#hdrs}
  */
  readonly hdrs?: HttppolicysetHttpSecurityPolicyRulesMatchHdrs[] | cdktf.IResolvable;
  /**
  * host_hdr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#host_hdr Httppolicyset#host_hdr}
  */
  readonly hostHdr?: HttppolicysetHttpSecurityPolicyRulesMatchHostHdr[] | cdktf.IResolvable;
  /**
  * ip_reputation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#ip_reputation_type Httppolicyset#ip_reputation_type}
  */
  readonly ipReputationType?: HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType[] | cdktf.IResolvable;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#method Httppolicyset#method}
  */
  readonly method?: HttppolicysetHttpSecurityPolicyRulesMatchMethod[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#path Httppolicyset#path}
  */
  readonly path?: HttppolicysetHttpSecurityPolicyRulesMatchPath[] | cdktf.IResolvable;
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#protocol Httppolicyset#protocol}
  */
  readonly protocol?: HttppolicysetHttpSecurityPolicyRulesMatchProtocol[] | cdktf.IResolvable;
  /**
  * query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#query Httppolicyset#query}
  */
  readonly query?: HttppolicysetHttpSecurityPolicyRulesMatchQuery[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#source_ip Httppolicyset#source_ip}
  */
  readonly sourceIp?: HttppolicysetHttpSecurityPolicyRulesMatchSourceIp[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#tls_fingerprint_match Httppolicyset#tls_fingerprint_match}
  */
  readonly tlsFingerprintMatch?: HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable;
  /**
  * version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#version Httppolicyset#version}
  */
  readonly version?: HttppolicysetHttpSecurityPolicyRulesMatchVersion[] | cdktf.IResolvable;
  /**
  * vs_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#vs_port Httppolicyset#vs_port}
  */
  readonly vsPort?: HttppolicysetHttpSecurityPolicyRulesMatchVsPort[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesMatchToTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_detection_result: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultToTerraform, true)(struct!.botDetectionResult),
    client_ip: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchClientIpToTerraform, true)(struct!.clientIp),
    cookie: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchCookieToTerraform, true)(struct!.cookie),
    geo_matches: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchGeoMatchesToTerraform, true)(struct!.geoMatches),
    hdrs: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchHdrsToTerraform, true)(struct!.hdrs),
    host_hdr: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchHostHdrToTerraform, true)(struct!.hostHdr),
    ip_reputation_type: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeToTerraform, true)(struct!.ipReputationType),
    method: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchMethodToTerraform, true)(struct!.method),
    path: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchPathToTerraform, true)(struct!.path),
    protocol: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchProtocolToTerraform, true)(struct!.protocol),
    query: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchQueryToTerraform, true)(struct!.query),
    source_ip: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchSourceIpToTerraform, true)(struct!.sourceIp),
    tls_fingerprint_match: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchToTerraform, true)(struct!.tlsFingerprintMatch),
    version: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchVersionToTerraform, true)(struct!.version),
    vs_port: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchVsPortToTerraform, true)(struct!.vsPort),
  }
}


export function httppolicysetHttpSecurityPolicyRulesMatchToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRulesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_detection_result: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultToHclTerraform, true)(struct!.botDetectionResult),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultList",
    },
    client_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchClientIpToHclTerraform, true)(struct!.clientIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchClientIpList",
    },
    cookie: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchCookieToHclTerraform, true)(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchCookieList",
    },
    geo_matches: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchGeoMatchesToHclTerraform, true)(struct!.geoMatches),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesList",
    },
    hdrs: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchHdrsToHclTerraform, true)(struct!.hdrs),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchHdrsList",
    },
    host_hdr: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchHostHdrToHclTerraform, true)(struct!.hostHdr),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchHostHdrList",
    },
    ip_reputation_type: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeToHclTerraform, true)(struct!.ipReputationType),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeList",
    },
    method: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchMethodToHclTerraform, true)(struct!.method),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchMethodList",
    },
    path: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchPathList",
    },
    protocol: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchProtocolToHclTerraform, true)(struct!.protocol),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchProtocolList",
    },
    query: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchQueryToHclTerraform, true)(struct!.query),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchQueryList",
    },
    source_ip: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchSourceIpToHclTerraform, true)(struct!.sourceIp),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchSourceIpList",
    },
    tls_fingerprint_match: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchToHclTerraform, true)(struct!.tlsFingerprintMatch),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchList",
    },
    version: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchVersionToHclTerraform, true)(struct!.version),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchVersionList",
    },
    vs_port: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchVsPortToHclTerraform, true)(struct!.vsPort),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchVsPortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRulesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botDetectionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDetectionResult = this._botDetectionResult?.internalValue;
    }
    if (this._clientIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._geoMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatches = this._geoMatches?.internalValue;
    }
    if (this._hdrs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdrs = this._hdrs?.internalValue;
    }
    if (this._hostHdr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHdr = this._hostHdr?.internalValue;
    }
    if (this._ipReputationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReputationType = this._ipReputationType?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    if (this._tlsFingerprintMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatch = this._tlsFingerprintMatch?.internalValue;
    }
    if (this._version?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version?.internalValue;
    }
    if (this._vsPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsPort = this._vsPort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRulesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = undefined;
      this._clientIp.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._geoMatches.internalValue = undefined;
      this._hdrs.internalValue = undefined;
      this._hostHdr.internalValue = undefined;
      this._ipReputationType.internalValue = undefined;
      this._method.internalValue = undefined;
      this._path.internalValue = undefined;
      this._protocol.internalValue = undefined;
      this._query.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
      this._tlsFingerprintMatch.internalValue = undefined;
      this._version.internalValue = undefined;
      this._vsPort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botDetectionResult.internalValue = value.botDetectionResult;
      this._clientIp.internalValue = value.clientIp;
      this._cookie.internalValue = value.cookie;
      this._geoMatches.internalValue = value.geoMatches;
      this._hdrs.internalValue = value.hdrs;
      this._hostHdr.internalValue = value.hostHdr;
      this._ipReputationType.internalValue = value.ipReputationType;
      this._method.internalValue = value.method;
      this._path.internalValue = value.path;
      this._protocol.internalValue = value.protocol;
      this._query.internalValue = value.query;
      this._sourceIp.internalValue = value.sourceIp;
      this._tlsFingerprintMatch.internalValue = value.tlsFingerprintMatch;
      this._version.internalValue = value.version;
      this._vsPort.internalValue = value.vsPort;
    }
  }

  // bot_detection_result - computed: false, optional: true, required: false
  private _botDetectionResult = new HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResultList(this, "bot_detection_result", true);
  public get botDetectionResult() {
    return this._botDetectionResult;
  }
  public putBotDetectionResult(value: HttppolicysetHttpSecurityPolicyRulesMatchBotDetectionResult[] | cdktf.IResolvable) {
    this._botDetectionResult.internalValue = value;
  }
  public resetBotDetectionResult() {
    this._botDetectionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionResultInput() {
    return this._botDetectionResult.internalValue;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp = new HttppolicysetHttpSecurityPolicyRulesMatchClientIpList(this, "client_ip", true);
  public get clientIp() {
    return this._clientIp;
  }
  public putClientIp(value: HttppolicysetHttpSecurityPolicyRulesMatchClientIp[] | cdktf.IResolvable) {
    this._clientIp.internalValue = value;
  }
  public resetClientIp() {
    this._clientIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttppolicysetHttpSecurityPolicyRulesMatchCookieList(this, "cookie", true);
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttppolicysetHttpSecurityPolicyRulesMatchCookie[] | cdktf.IResolvable) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // geo_matches - computed: false, optional: true, required: false
  private _geoMatches = new HttppolicysetHttpSecurityPolicyRulesMatchGeoMatchesList(this, "geo_matches", false);
  public get geoMatches() {
    return this._geoMatches;
  }
  public putGeoMatches(value: HttppolicysetHttpSecurityPolicyRulesMatchGeoMatches[] | cdktf.IResolvable) {
    this._geoMatches.internalValue = value;
  }
  public resetGeoMatches() {
    this._geoMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchesInput() {
    return this._geoMatches.internalValue;
  }

  // hdrs - computed: false, optional: true, required: false
  private _hdrs = new HttppolicysetHttpSecurityPolicyRulesMatchHdrsList(this, "hdrs", false);
  public get hdrs() {
    return this._hdrs;
  }
  public putHdrs(value: HttppolicysetHttpSecurityPolicyRulesMatchHdrs[] | cdktf.IResolvable) {
    this._hdrs.internalValue = value;
  }
  public resetHdrs() {
    this._hdrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdrsInput() {
    return this._hdrs.internalValue;
  }

  // host_hdr - computed: false, optional: true, required: false
  private _hostHdr = new HttppolicysetHttpSecurityPolicyRulesMatchHostHdrList(this, "host_hdr", true);
  public get hostHdr() {
    return this._hostHdr;
  }
  public putHostHdr(value: HttppolicysetHttpSecurityPolicyRulesMatchHostHdr[] | cdktf.IResolvable) {
    this._hostHdr.internalValue = value;
  }
  public resetHostHdr() {
    this._hostHdr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHdrInput() {
    return this._hostHdr.internalValue;
  }

  // ip_reputation_type - computed: false, optional: true, required: false
  private _ipReputationType = new HttppolicysetHttpSecurityPolicyRulesMatchIpReputationTypeList(this, "ip_reputation_type", true);
  public get ipReputationType() {
    return this._ipReputationType;
  }
  public putIpReputationType(value: HttppolicysetHttpSecurityPolicyRulesMatchIpReputationType[] | cdktf.IResolvable) {
    this._ipReputationType.internalValue = value;
  }
  public resetIpReputationType() {
    this._ipReputationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReputationTypeInput() {
    return this._ipReputationType.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new HttppolicysetHttpSecurityPolicyRulesMatchMethodList(this, "method", true);
  public get method() {
    return this._method;
  }
  public putMethod(value: HttppolicysetHttpSecurityPolicyRulesMatchMethod[] | cdktf.IResolvable) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new HttppolicysetHttpSecurityPolicyRulesMatchPathList(this, "path", true);
  public get path() {
    return this._path;
  }
  public putPath(value: HttppolicysetHttpSecurityPolicyRulesMatchPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol = new HttppolicysetHttpSecurityPolicyRulesMatchProtocolList(this, "protocol", true);
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: HttppolicysetHttpSecurityPolicyRulesMatchProtocol[] | cdktf.IResolvable) {
    this._protocol.internalValue = value;
  }
  public resetProtocol() {
    this._protocol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // query - computed: false, optional: true, required: false
  private _query = new HttppolicysetHttpSecurityPolicyRulesMatchQueryList(this, "query", true);
  public get query() {
    return this._query;
  }
  public putQuery(value: HttppolicysetHttpSecurityPolicyRulesMatchQuery[] | cdktf.IResolvable) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new HttppolicysetHttpSecurityPolicyRulesMatchSourceIpList(this, "source_ip", true);
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: HttppolicysetHttpSecurityPolicyRulesMatchSourceIp[] | cdktf.IResolvable) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }

  // tls_fingerprint_match - computed: false, optional: true, required: false
  private _tlsFingerprintMatch = new HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatchList(this, "tls_fingerprint_match", true);
  public get tlsFingerprintMatch() {
    return this._tlsFingerprintMatch;
  }
  public putTlsFingerprintMatch(value: HttppolicysetHttpSecurityPolicyRulesMatchTlsFingerprintMatch[] | cdktf.IResolvable) {
    this._tlsFingerprintMatch.internalValue = value;
  }
  public resetTlsFingerprintMatch() {
    this._tlsFingerprintMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatchInput() {
    return this._tlsFingerprintMatch.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version = new HttppolicysetHttpSecurityPolicyRulesMatchVersionList(this, "version", true);
  public get version() {
    return this._version;
  }
  public putVersion(value: HttppolicysetHttpSecurityPolicyRulesMatchVersion[] | cdktf.IResolvable) {
    this._version.internalValue = value;
  }
  public resetVersion() {
    this._version.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // vs_port - computed: false, optional: true, required: false
  private _vsPort = new HttppolicysetHttpSecurityPolicyRulesMatchVsPortList(this, "vs_port", true);
  public get vsPort() {
    return this._vsPort;
  }
  public putVsPort(value: HttppolicysetHttpSecurityPolicyRulesMatchVsPort[] | cdktf.IResolvable) {
    this._vsPort.internalValue = value;
  }
  public resetVsPort() {
    this._vsPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsPortInput() {
    return this._vsPort.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesMatchList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRulesMatch[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesMatchOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#enable Httppolicyset#enable}
  */
  readonly enable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#index Httppolicyset#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#log Httppolicyset#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#name Httppolicyset#name}
  */
  readonly name: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#action Httppolicyset#action}
  */
  readonly action?: HttppolicysetHttpSecurityPolicyRulesAction[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#match Httppolicyset#match}
  */
  readonly match?: HttppolicysetHttpSecurityPolicyRulesMatch[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyRulesToTerraform(struct?: HttppolicysetHttpSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    index: cdktf.stringToTerraform(struct!.index),
    log: cdktf.stringToTerraform(struct!.log),
    name: cdktf.stringToTerraform(struct!.name),
    action: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesActionToTerraform, true)(struct!.action),
    match: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesMatchToTerraform, true)(struct!.match),
  }
}


export function httppolicysetHttpSecurityPolicyRulesToHclTerraform(struct?: HttppolicysetHttpSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
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
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
    action: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesActionToHclTerraform, true)(struct!.action),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesActionList",
    },
    match: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "set",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._index = undefined;
      this._log = undefined;
      this._name = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._index = value.index;
      this._log = value.log;
      this._name = value.name;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
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

  // action - computed: false, optional: true, required: false
  private _action = new HttppolicysetHttpSecurityPolicyRulesActionList(this, "action", true);
  public get action() {
    return this._action;
  }
  public putAction(value: HttppolicysetHttpSecurityPolicyRulesAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new HttppolicysetHttpSecurityPolicyRulesMatchList(this, "match", true);
  public get match() {
    return this._match;
  }
  public putMatch(value: HttppolicysetHttpSecurityPolicyRulesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyRulesOutputReference {
    return new HttppolicysetHttpSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetHttpSecurityPolicy {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#rules Httppolicyset#rules}
  */
  readonly rules?: HttppolicysetHttpSecurityPolicyRules[] | cdktf.IResolvable;
}

export function httppolicysetHttpSecurityPolicyToTerraform(struct?: HttppolicysetHttpSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(httppolicysetHttpSecurityPolicyRulesToTerraform, true)(struct!.rules),
  }
}


export function httppolicysetHttpSecurityPolicyToHclTerraform(struct?: HttppolicysetHttpSecurityPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(httppolicysetHttpSecurityPolicyRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttppolicysetHttpSecurityPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttppolicysetHttpSecurityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetHttpSecurityPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttppolicysetHttpSecurityPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HttppolicysetHttpSecurityPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttppolicysetHttpSecurityPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class HttppolicysetHttpSecurityPolicyList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetHttpSecurityPolicy[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetHttpSecurityPolicyOutputReference {
    return new HttppolicysetHttpSecurityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttppolicysetMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#key Httppolicyset#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/httppolicyset#values Httppolicyset#values}
  */
  readonly values?: string[];
}

export function httppolicysetMarkersToTerraform(struct?: HttppolicysetMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function httppolicysetMarkersToHclTerraform(struct?: HttppolicysetMarkers | cdktf.IResolvable): any {
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

export class HttppolicysetMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttppolicysetMarkers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttppolicysetMarkers | cdktf.IResolvable | undefined) {
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

export class HttppolicysetMarkersList extends cdktf.ComplexList {
  public internalValue? : HttppolicysetMarkers[] | cdktf.IResolvable

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
  public get(index: number): HttppolicysetMarkersOutputReference {
    return new HttppolicysetMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
