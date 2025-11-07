// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the Synthetic test is started or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#active SyntheticTest#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the Application Perspective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#application_id SyntheticTest#application_id}
  */
  readonly applicationId?: string;
  /**
  * Name/value pairs to provide additional information of the Synthetic test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#custom_properties SyntheticTest#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * The description of the Synthetic test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#description SyntheticTest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#id SyntheticTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Friendly name of the Synthetic test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#label SyntheticTest#label}
  */
  readonly label: string;
  /**
  * Array of the PoP location IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#locations SyntheticTest#locations}
  */
  readonly locations: string[];
  /**
  * Defines how the Synthetic test should be executed across multiple PoPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#playback_mode SyntheticTest#playback_mode}
  */
  readonly playbackMode?: string;
  /**
  * How often the playback for a Synthetic test is scheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#test_frequency SyntheticTest#test_frequency}
  */
  readonly testFrequency?: number;
  /**
  * http_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#http_action SyntheticTest#http_action}
  */
  readonly httpAction?: SyntheticTestHttpAction;
  /**
  * http_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#http_script SyntheticTest#http_script}
  */
  readonly httpScript?: SyntheticTestHttpScript;
}
export interface SyntheticTestHttpAction {
  /**
  * A boolean type, if set to true then allow insecure certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#allow_insecure SyntheticTest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  *  The body content to send with the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#body SyntheticTest#body}
  */
  readonly body?: string;
  /**
  * An optional regular expression string to be used to check the test response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#expect_match SyntheticTest#expect_match}
  */
  readonly expectMatch?: string;
  /**
  * An integer type, by default, the Synthetic passes for any 2XX status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#expect_status SyntheticTest#expect_status}
  */
  readonly expectStatus?: number;
  /**
  * A boolean type, true by default; to allow redirect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#follow_redirect SyntheticTest#follow_redirect}
  */
  readonly followRedirect?: boolean | cdktf.IResolvable;
  /**
  * An object with header/value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#headers SyntheticTest#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Flag used to control if HTTP calls will be marked as synthetic calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#mark_synthetic_call SyntheticTest#mark_synthetic_call}
  */
  readonly markSyntheticCall?: boolean | cdktf.IResolvable;
  /**
  * The HTTP operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#operation SyntheticTest#operation}
  */
  readonly operation?: string;
  /**
  * Indicates how many attempts will be allowed to get a successful connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#retries SyntheticTest#retries}
  */
  readonly retries?: number;
  /**
  * The time interval between retries in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#retry_interval SyntheticTest#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * The timeout to be used by the PoP playback engines running the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#timeout SyntheticTest#timeout}
  */
  readonly timeout?: string;
  /**
  * The URL which is being tested
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#url SyntheticTest#url}
  */
  readonly url?: string;
  /**
  * An expression to be evaluated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#validation_string SyntheticTest#validation_string}
  */
  readonly validationString?: string;
}

export function syntheticTestHttpActionToTerraform(struct?: SyntheticTestHttpActionOutputReference | SyntheticTestHttpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    body: cdktf.stringToTerraform(struct!.body),
    expect_match: cdktf.stringToTerraform(struct!.expectMatch),
    expect_status: cdktf.numberToTerraform(struct!.expectStatus),
    follow_redirect: cdktf.booleanToTerraform(struct!.followRedirect),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    mark_synthetic_call: cdktf.booleanToTerraform(struct!.markSyntheticCall),
    operation: cdktf.stringToTerraform(struct!.operation),
    retries: cdktf.numberToTerraform(struct!.retries),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
    validation_string: cdktf.stringToTerraform(struct!.validationString),
  }
}


export function syntheticTestHttpActionToHclTerraform(struct?: SyntheticTestHttpActionOutputReference | SyntheticTestHttpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_match: {
      value: cdktf.stringToHclTerraform(struct!.expectMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expect_status: {
      value: cdktf.numberToHclTerraform(struct!.expectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mark_synthetic_call: {
      value: cdktf.booleanToHclTerraform(struct!.markSyntheticCall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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
    validation_string: {
      value: cdktf.stringToHclTerraform(struct!.validationString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticTestHttpActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticTestHttpAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._expectMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectMatch = this._expectMatch;
    }
    if (this._expectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectStatus = this._expectStatus;
    }
    if (this._followRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirect = this._followRedirect;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._markSyntheticCall !== undefined) {
      hasAnyValues = true;
      internalValueResult.markSyntheticCall = this._markSyntheticCall;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._validationString !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationString = this._validationString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticTestHttpAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._body = undefined;
      this._expectMatch = undefined;
      this._expectStatus = undefined;
      this._followRedirect = undefined;
      this._headers = undefined;
      this._markSyntheticCall = undefined;
      this._operation = undefined;
      this._retries = undefined;
      this._retryInterval = undefined;
      this._timeout = undefined;
      this._url = undefined;
      this._validationString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._body = value.body;
      this._expectMatch = value.expectMatch;
      this._expectStatus = value.expectStatus;
      this._followRedirect = value.followRedirect;
      this._headers = value.headers;
      this._markSyntheticCall = value.markSyntheticCall;
      this._operation = value.operation;
      this._retries = value.retries;
      this._retryInterval = value.retryInterval;
      this._timeout = value.timeout;
      this._url = value.url;
      this._validationString = value.validationString;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
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

  // expect_match - computed: false, optional: true, required: false
  private _expectMatch?: string; 
  public get expectMatch() {
    return this.getStringAttribute('expect_match');
  }
  public set expectMatch(value: string) {
    this._expectMatch = value;
  }
  public resetExpectMatch() {
    this._expectMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectMatchInput() {
    return this._expectMatch;
  }

  // expect_status - computed: false, optional: true, required: false
  private _expectStatus?: number; 
  public get expectStatus() {
    return this.getNumberAttribute('expect_status');
  }
  public set expectStatus(value: number) {
    this._expectStatus = value;
  }
  public resetExpectStatus() {
    this._expectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectStatusInput() {
    return this._expectStatus;
  }

  // follow_redirect - computed: false, optional: true, required: false
  private _followRedirect?: boolean | cdktf.IResolvable; 
  public get followRedirect() {
    return this.getBooleanAttribute('follow_redirect');
  }
  public set followRedirect(value: boolean | cdktf.IResolvable) {
    this._followRedirect = value;
  }
  public resetFollowRedirect() {
    this._followRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectInput() {
    return this._followRedirect;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // mark_synthetic_call - computed: false, optional: true, required: false
  private _markSyntheticCall?: boolean | cdktf.IResolvable; 
  public get markSyntheticCall() {
    return this.getBooleanAttribute('mark_synthetic_call');
  }
  public set markSyntheticCall(value: boolean | cdktf.IResolvable) {
    this._markSyntheticCall = value;
  }
  public resetMarkSyntheticCall() {
    this._markSyntheticCall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markSyntheticCallInput() {
    return this._markSyntheticCall;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // validation_string - computed: false, optional: true, required: false
  private _validationString?: string; 
  public get validationString() {
    return this.getStringAttribute('validation_string');
  }
  public set validationString(value: string) {
    this._validationString = value;
  }
  public resetValidationString() {
    this._validationString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationStringInput() {
    return this._validationString;
  }
}
export interface SyntheticTestHttpScript {
  /**
  * Flag used to control if HTTP calls will be marked as synthetic calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#mark_synthetic_call SyntheticTest#mark_synthetic_call}
  */
  readonly markSyntheticCall?: boolean | cdktf.IResolvable;
  /**
  * Indicates how many attempts will be allowed to get a successful connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#retries SyntheticTest#retries}
  */
  readonly retries?: number;
  /**
  * The time interval between retries in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#retry_interval SyntheticTest#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * The Javascript content in plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#script SyntheticTest#script}
  */
  readonly script: string;
  /**
  * The timeout to be used by the PoP playback engines running the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#timeout SyntheticTest#timeout}
  */
  readonly timeout?: string;
}

export function syntheticTestHttpScriptToTerraform(struct?: SyntheticTestHttpScriptOutputReference | SyntheticTestHttpScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mark_synthetic_call: cdktf.booleanToTerraform(struct!.markSyntheticCall),
    retries: cdktf.numberToTerraform(struct!.retries),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    script: cdktf.stringToTerraform(struct!.script),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function syntheticTestHttpScriptToHclTerraform(struct?: SyntheticTestHttpScriptOutputReference | SyntheticTestHttpScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mark_synthetic_call: {
      value: cdktf.booleanToHclTerraform(struct!.markSyntheticCall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SyntheticTestHttpScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SyntheticTestHttpScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._markSyntheticCall !== undefined) {
      hasAnyValues = true;
      internalValueResult.markSyntheticCall = this._markSyntheticCall;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SyntheticTestHttpScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._markSyntheticCall = undefined;
      this._retries = undefined;
      this._retryInterval = undefined;
      this._script = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._markSyntheticCall = value.markSyntheticCall;
      this._retries = value.retries;
      this._retryInterval = value.retryInterval;
      this._script = value.script;
      this._timeout = value.timeout;
    }
  }

  // mark_synthetic_call - computed: false, optional: true, required: false
  private _markSyntheticCall?: boolean | cdktf.IResolvable; 
  public get markSyntheticCall() {
    return this.getBooleanAttribute('mark_synthetic_call');
  }
  public set markSyntheticCall(value: boolean | cdktf.IResolvable) {
    this._markSyntheticCall = value;
  }
  public resetMarkSyntheticCall() {
    this._markSyntheticCall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markSyntheticCallInput() {
    return this._markSyntheticCall;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test instana_synthetic_test}
*/
export class SyntheticTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_synthetic_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyntheticTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyntheticTest to import
  * @param importFromId The id of the existing SyntheticTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyntheticTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_synthetic_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/synthetic_test instana_synthetic_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticTestConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticTestConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_synthetic_test',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._applicationId = config.applicationId;
    this._customProperties = config.customProperties;
    this._description = config.description;
    this._id = config.id;
    this._label = config.label;
    this._locations = config.locations;
    this._playbackMode = config.playbackMode;
    this._testFrequency = config.testFrequency;
    this._httpAction.internalValue = config.httpAction;
    this._httpScript.internalValue = config.httpScript;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // playback_mode - computed: false, optional: true, required: false
  private _playbackMode?: string; 
  public get playbackMode() {
    return this.getStringAttribute('playback_mode');
  }
  public set playbackMode(value: string) {
    this._playbackMode = value;
  }
  public resetPlaybackMode() {
    this._playbackMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackModeInput() {
    return this._playbackMode;
  }

  // test_frequency - computed: false, optional: true, required: false
  private _testFrequency?: number; 
  public get testFrequency() {
    return this.getNumberAttribute('test_frequency');
  }
  public set testFrequency(value: number) {
    this._testFrequency = value;
  }
  public resetTestFrequency() {
    this._testFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFrequencyInput() {
    return this._testFrequency;
  }

  // http_action - computed: false, optional: true, required: false
  private _httpAction = new SyntheticTestHttpActionOutputReference(this, "http_action");
  public get httpAction() {
    return this._httpAction;
  }
  public putHttpAction(value: SyntheticTestHttpAction) {
    this._httpAction.internalValue = value;
  }
  public resetHttpAction() {
    this._httpAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpActionInput() {
    return this._httpAction.internalValue;
  }

  // http_script - computed: false, optional: true, required: false
  private _httpScript = new SyntheticTestHttpScriptOutputReference(this, "http_script");
  public get httpScript() {
    return this._httpScript;
  }
  public putHttpScript(value: SyntheticTestHttpScript) {
    this._httpScript.internalValue = value;
  }
  public resetHttpScript() {
    this._httpScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpScriptInput() {
    return this._httpScript.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      application_id: cdktf.stringToTerraform(this._applicationId),
      custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._customProperties),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
      playback_mode: cdktf.stringToTerraform(this._playbackMode),
      test_frequency: cdktf.numberToTerraform(this._testFrequency),
      http_action: syntheticTestHttpActionToTerraform(this._httpAction.internalValue),
      http_script: syntheticTestHttpScriptToTerraform(this._httpScript.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customProperties),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      playback_mode: {
        value: cdktf.stringToHclTerraform(this._playbackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_frequency: {
        value: cdktf.numberToHclTerraform(this._testFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_action: {
        value: syntheticTestHttpActionToHclTerraform(this._httpAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticTestHttpActionList",
      },
      http_script: {
        value: syntheticTestHttpScriptToHclTerraform(this._httpScript.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SyntheticTestHttpScriptList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
