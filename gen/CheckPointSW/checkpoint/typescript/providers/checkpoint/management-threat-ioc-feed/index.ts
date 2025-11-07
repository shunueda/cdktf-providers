// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementThreatIocFeedConfig extends cdktf.TerraformMetaArguments {
  /**
  * The feed indicator's action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#action ManagementThreatIocFeed#action}
  */
  readonly action?: string;
  /**
  * Certificate SHA-1 fingerprint to access the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#certificate_id ManagementThreatIocFeed#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#color ManagementThreatIocFeed#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#comments ManagementThreatIocFeed#comments}
  */
  readonly comments?: string;
  /**
  * Custom IOC feed - the column number of comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_comment ManagementThreatIocFeed#custom_comment}
  */
  readonly customComment?: number;
  /**
  * Custom IOC feed - the column number of confidence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_confidence ManagementThreatIocFeed#custom_confidence}
  */
  readonly customConfidence?: number;
  /**
  * Custom IOC feed - the column number of name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_name ManagementThreatIocFeed#custom_name}
  */
  readonly customName?: number;
  /**
  * Custom IOC feed - the column number of severity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_severity ManagementThreatIocFeed#custom_severity}
  */
  readonly customSeverity?: number;
  /**
  * Custom IOC feed - the column number of type in case a specific type is not chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_type ManagementThreatIocFeed#custom_type}
  */
  readonly customType?: number;
  /**
  * Custom IOC feed - the column number of value in case a specific type is chosen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_value ManagementThreatIocFeed#custom_value}
  */
  readonly customValue?: number;
  /**
  * Sets whether this indicator feed is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#enabled ManagementThreatIocFeed#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Feed type to be enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#feed_type ManagementThreatIocFeed#feed_type}
  */
  readonly feedType?: string;
  /**
  * URL of the feed. URL should be written as http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#feed_url ManagementThreatIocFeed#feed_url}
  */
  readonly feedUrl?: string;
  /**
  * The delimiter that separates between the columns in the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#fields_delimiter ManagementThreatIocFeed#fields_delimiter}
  */
  readonly fieldsDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#id ManagementThreatIocFeed#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#ignore_errors ManagementThreatIocFeed#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * A prefix that will determine which lines to ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#ignore_lines_that_start_with ManagementThreatIocFeed#ignore_lines_that_start_with}
  */
  readonly ignoreLinesThatStartWith?: string;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#ignore_warnings ManagementThreatIocFeed#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#name ManagementThreatIocFeed#name}
  */
  readonly name: string;
  /**
  * password for authenticating with the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#password ManagementThreatIocFeed#password}
  */
  readonly password?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#tags ManagementThreatIocFeed#tags}
  */
  readonly tags?: string[];
  /**
  * Set in order to configure a custom indicator feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#use_custom_feed_settings ManagementThreatIocFeed#use_custom_feed_settings}
  */
  readonly useCustomFeedSettings?: boolean | cdktf.IResolvable;
  /**
  * Use the gateway's proxy for retrieving the feed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#use_gateway_proxy ManagementThreatIocFeed#use_gateway_proxy}
  */
  readonly useGatewayProxy?: boolean | cdktf.IResolvable;
  /**
  * username for authenticating with the URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#username ManagementThreatIocFeed#username}
  */
  readonly username?: string;
  /**
  * custom_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#custom_header ManagementThreatIocFeed#custom_header}
  */
  readonly customHeader?: ManagementThreatIocFeedCustomHeader[] | cdktf.IResolvable;
}
export interface ManagementThreatIocFeedCustomHeader {
  /**
  * The name of the HTTP header we wish to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#header_name ManagementThreatIocFeed#header_name}
  */
  readonly headerName?: string;
  /**
  * The name of the HTTP value we wish to add.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#header_value ManagementThreatIocFeed#header_value}
  */
  readonly headerValue?: string;
}

export function managementThreatIocFeedCustomHeaderToTerraform(struct?: ManagementThreatIocFeedCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function managementThreatIocFeedCustomHeaderToHclTerraform(struct?: ManagementThreatIocFeedCustomHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatIocFeedCustomHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatIocFeedCustomHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatIocFeedCustomHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class ManagementThreatIocFeedCustomHeaderList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatIocFeedCustomHeader[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatIocFeedCustomHeaderOutputReference {
    return new ManagementThreatIocFeedCustomHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed checkpoint_management_threat_ioc_feed}
*/
export class ManagementThreatIocFeed extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_ioc_feed";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementThreatIocFeed resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementThreatIocFeed to import
  * @param importFromId The id of the existing ManagementThreatIocFeed that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementThreatIocFeed to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_ioc_feed", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_threat_ioc_feed checkpoint_management_threat_ioc_feed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementThreatIocFeedConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementThreatIocFeedConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_ioc_feed',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._certificateId = config.certificateId;
    this._color = config.color;
    this._comments = config.comments;
    this._customComment = config.customComment;
    this._customConfidence = config.customConfidence;
    this._customName = config.customName;
    this._customSeverity = config.customSeverity;
    this._customType = config.customType;
    this._customValue = config.customValue;
    this._enabled = config.enabled;
    this._feedType = config.feedType;
    this._feedUrl = config.feedUrl;
    this._fieldsDelimiter = config.fieldsDelimiter;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreLinesThatStartWith = config.ignoreLinesThatStartWith;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._password = config.password;
    this._tags = config.tags;
    this._useCustomFeedSettings = config.useCustomFeedSettings;
    this._useGatewayProxy = config.useGatewayProxy;
    this._username = config.username;
    this._customHeader.internalValue = config.customHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // custom_comment - computed: false, optional: true, required: false
  private _customComment?: number; 
  public get customComment() {
    return this.getNumberAttribute('custom_comment');
  }
  public set customComment(value: number) {
    this._customComment = value;
  }
  public resetCustomComment() {
    this._customComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCommentInput() {
    return this._customComment;
  }

  // custom_confidence - computed: false, optional: true, required: false
  private _customConfidence?: number; 
  public get customConfidence() {
    return this.getNumberAttribute('custom_confidence');
  }
  public set customConfidence(value: number) {
    this._customConfidence = value;
  }
  public resetCustomConfidence() {
    this._customConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfidenceInput() {
    return this._customConfidence;
  }

  // custom_name - computed: false, optional: true, required: false
  private _customName?: number; 
  public get customName() {
    return this.getNumberAttribute('custom_name');
  }
  public set customName(value: number) {
    this._customName = value;
  }
  public resetCustomName() {
    this._customName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNameInput() {
    return this._customName;
  }

  // custom_severity - computed: false, optional: true, required: false
  private _customSeverity?: number; 
  public get customSeverity() {
    return this.getNumberAttribute('custom_severity');
  }
  public set customSeverity(value: number) {
    this._customSeverity = value;
  }
  public resetCustomSeverity() {
    this._customSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSeverityInput() {
    return this._customSeverity;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: number; 
  public get customType() {
    return this.getNumberAttribute('custom_type');
  }
  public set customType(value: number) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // custom_value - computed: false, optional: true, required: false
  private _customValue?: number; 
  public get customValue() {
    return this.getNumberAttribute('custom_value');
  }
  public set customValue(value: number) {
    this._customValue = value;
  }
  public resetCustomValue() {
    this._customValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customValueInput() {
    return this._customValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // feed_type - computed: false, optional: true, required: false
  private _feedType?: string; 
  public get feedType() {
    return this.getStringAttribute('feed_type');
  }
  public set feedType(value: string) {
    this._feedType = value;
  }
  public resetFeedType() {
    this._feedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedTypeInput() {
    return this._feedType;
  }

  // feed_url - computed: false, optional: true, required: false
  private _feedUrl?: string; 
  public get feedUrl() {
    return this.getStringAttribute('feed_url');
  }
  public set feedUrl(value: string) {
    this._feedUrl = value;
  }
  public resetFeedUrl() {
    this._feedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedUrlInput() {
    return this._feedUrl;
  }

  // fields_delimiter - computed: false, optional: true, required: false
  private _fieldsDelimiter?: string; 
  public get fieldsDelimiter() {
    return this.getStringAttribute('fields_delimiter');
  }
  public set fieldsDelimiter(value: string) {
    this._fieldsDelimiter = value;
  }
  public resetFieldsDelimiter() {
    this._fieldsDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsDelimiterInput() {
    return this._fieldsDelimiter;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_lines_that_start_with - computed: false, optional: true, required: false
  private _ignoreLinesThatStartWith?: string; 
  public get ignoreLinesThatStartWith() {
    return this.getStringAttribute('ignore_lines_that_start_with');
  }
  public set ignoreLinesThatStartWith(value: string) {
    this._ignoreLinesThatStartWith = value;
  }
  public resetIgnoreLinesThatStartWith() {
    this._ignoreLinesThatStartWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLinesThatStartWithInput() {
    return this._ignoreLinesThatStartWith;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_custom_feed_settings - computed: false, optional: true, required: false
  private _useCustomFeedSettings?: boolean | cdktf.IResolvable; 
  public get useCustomFeedSettings() {
    return this.getBooleanAttribute('use_custom_feed_settings');
  }
  public set useCustomFeedSettings(value: boolean | cdktf.IResolvable) {
    this._useCustomFeedSettings = value;
  }
  public resetUseCustomFeedSettings() {
    this._useCustomFeedSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomFeedSettingsInput() {
    return this._useCustomFeedSettings;
  }

  // use_gateway_proxy - computed: false, optional: true, required: false
  private _useGatewayProxy?: boolean | cdktf.IResolvable; 
  public get useGatewayProxy() {
    return this.getBooleanAttribute('use_gateway_proxy');
  }
  public set useGatewayProxy(value: boolean | cdktf.IResolvable) {
    this._useGatewayProxy = value;
  }
  public resetUseGatewayProxy() {
    this._useGatewayProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGatewayProxyInput() {
    return this._useGatewayProxy;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // custom_header - computed: false, optional: true, required: false
  private _customHeader = new ManagementThreatIocFeedCustomHeaderList(this, "custom_header", false);
  public get customHeader() {
    return this._customHeader;
  }
  public putCustomHeader(value: ManagementThreatIocFeedCustomHeader[] | cdktf.IResolvable) {
    this._customHeader.internalValue = value;
  }
  public resetCustomHeader() {
    this._customHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderInput() {
    return this._customHeader.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      custom_comment: cdktf.numberToTerraform(this._customComment),
      custom_confidence: cdktf.numberToTerraform(this._customConfidence),
      custom_name: cdktf.numberToTerraform(this._customName),
      custom_severity: cdktf.numberToTerraform(this._customSeverity),
      custom_type: cdktf.numberToTerraform(this._customType),
      custom_value: cdktf.numberToTerraform(this._customValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      feed_type: cdktf.stringToTerraform(this._feedType),
      feed_url: cdktf.stringToTerraform(this._feedUrl),
      fields_delimiter: cdktf.stringToTerraform(this._fieldsDelimiter),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_lines_that_start_with: cdktf.stringToTerraform(this._ignoreLinesThatStartWith),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      use_custom_feed_settings: cdktf.booleanToTerraform(this._useCustomFeedSettings),
      use_gateway_proxy: cdktf.booleanToTerraform(this._useGatewayProxy),
      username: cdktf.stringToTerraform(this._username),
      custom_header: cdktf.listMapper(managementThreatIocFeedCustomHeaderToTerraform, true)(this._customHeader.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_comment: {
        value: cdktf.numberToHclTerraform(this._customComment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_confidence: {
        value: cdktf.numberToHclTerraform(this._customConfidence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_name: {
        value: cdktf.numberToHclTerraform(this._customName),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_severity: {
        value: cdktf.numberToHclTerraform(this._customSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_type: {
        value: cdktf.numberToHclTerraform(this._customType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_value: {
        value: cdktf.numberToHclTerraform(this._customValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feed_type: {
        value: cdktf.stringToHclTerraform(this._feedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feed_url: {
        value: cdktf.stringToHclTerraform(this._feedUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields_delimiter: {
        value: cdktf.stringToHclTerraform(this._fieldsDelimiter),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_lines_that_start_with: {
        value: cdktf.stringToHclTerraform(this._ignoreLinesThatStartWith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      use_custom_feed_settings: {
        value: cdktf.booleanToHclTerraform(this._useCustomFeedSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_gateway_proxy: {
        value: cdktf.booleanToHclTerraform(this._useGatewayProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_header: {
        value: cdktf.listMapperHcl(managementThreatIocFeedCustomHeaderToHclTerraform, true)(this._customHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatIocFeedCustomHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
