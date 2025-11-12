// https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of seconds between checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#check_interval SslCheck#check_interval}
  */
  readonly checkInterval: number;
  /**
  * List of contact group IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#contact_groups SslCheck#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Whether to follow redirects when testing. Disabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#follow_redirects SslCheck#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#id SslCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the check should be run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#paused SslCheck#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * Custom user agent string set when testing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#user_agent SslCheck#user_agent}
  */
  readonly userAgent?: string;
  /**
  * alert_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#alert_config SslCheck#alert_config}
  */
  readonly alertConfig: SslCheckAlertConfig;
  /**
  * monitored_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#monitored_resource SslCheck#monitored_resource}
  */
  readonly monitoredResource: SslCheckMonitoredResource;
}
export interface SslCheckAlertConfig {
  /**
  * List representing when alerts should be sent (days). Must be exactly 3 numerical values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#alert_at SslCheck#alert_at}
  */
  readonly alertAt: number[];
  /**
  * Whether to enable alerts when SSL certificate issues are found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#on_broken SslCheck#on_broken}
  */
  readonly onBroken?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable alerts when the SSL certificate is to expire
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#on_expiry SslCheck#on_expiry}
  */
  readonly onExpiry?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable alerts when mixed content is found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#on_mixed SslCheck#on_mixed}
  */
  readonly onMixed?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable alert reminders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#on_reminder SslCheck#on_reminder}
  */
  readonly onReminder?: boolean | cdktf.IResolvable;
}

export function sslCheckAlertConfigToTerraform(struct?: SslCheckAlertConfigOutputReference | SslCheckAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_at: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.alertAt),
    on_broken: cdktf.booleanToTerraform(struct!.onBroken),
    on_expiry: cdktf.booleanToTerraform(struct!.onExpiry),
    on_mixed: cdktf.booleanToTerraform(struct!.onMixed),
    on_reminder: cdktf.booleanToTerraform(struct!.onReminder),
  }
}


export function sslCheckAlertConfigToHclTerraform(struct?: SslCheckAlertConfigOutputReference | SslCheckAlertConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_at: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.alertAt),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    on_broken: {
      value: cdktf.booleanToHclTerraform(struct!.onBroken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.onExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_mixed: {
      value: cdktf.booleanToHclTerraform(struct!.onMixed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_reminder: {
      value: cdktf.booleanToHclTerraform(struct!.onReminder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslCheckAlertConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslCheckAlertConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertAt = this._alertAt;
    }
    if (this._onBroken !== undefined) {
      hasAnyValues = true;
      internalValueResult.onBroken = this._onBroken;
    }
    if (this._onExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExpiry = this._onExpiry;
    }
    if (this._onMixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.onMixed = this._onMixed;
    }
    if (this._onReminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.onReminder = this._onReminder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslCheckAlertConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertAt = undefined;
      this._onBroken = undefined;
      this._onExpiry = undefined;
      this._onMixed = undefined;
      this._onReminder = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertAt = value.alertAt;
      this._onBroken = value.onBroken;
      this._onExpiry = value.onExpiry;
      this._onMixed = value.onMixed;
      this._onReminder = value.onReminder;
    }
  }

  // alert_at - computed: false, optional: false, required: true
  private _alertAt?: number[]; 
  public get alertAt() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('alert_at')));
  }
  public set alertAt(value: number[]) {
    this._alertAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertAtInput() {
    return this._alertAt;
  }

  // on_broken - computed: false, optional: true, required: false
  private _onBroken?: boolean | cdktf.IResolvable; 
  public get onBroken() {
    return this.getBooleanAttribute('on_broken');
  }
  public set onBroken(value: boolean | cdktf.IResolvable) {
    this._onBroken = value;
  }
  public resetOnBroken() {
    this._onBroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBrokenInput() {
    return this._onBroken;
  }

  // on_expiry - computed: false, optional: true, required: false
  private _onExpiry?: boolean | cdktf.IResolvable; 
  public get onExpiry() {
    return this.getBooleanAttribute('on_expiry');
  }
  public set onExpiry(value: boolean | cdktf.IResolvable) {
    this._onExpiry = value;
  }
  public resetOnExpiry() {
    this._onExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExpiryInput() {
    return this._onExpiry;
  }

  // on_mixed - computed: false, optional: true, required: false
  private _onMixed?: boolean | cdktf.IResolvable; 
  public get onMixed() {
    return this.getBooleanAttribute('on_mixed');
  }
  public set onMixed(value: boolean | cdktf.IResolvable) {
    this._onMixed = value;
  }
  public resetOnMixed() {
    this._onMixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onMixedInput() {
    return this._onMixed;
  }

  // on_reminder - computed: false, optional: true, required: false
  private _onReminder?: boolean | cdktf.IResolvable; 
  public get onReminder() {
    return this.getBooleanAttribute('on_reminder');
  }
  public set onReminder(value: boolean | cdktf.IResolvable) {
    this._onReminder = value;
  }
  public resetOnReminder() {
    this._onReminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReminderInput() {
    return this._onReminder;
  }
}
export interface SslCheckMonitoredResource {
  /**
  * URL of the server under test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#address SslCheck#address}
  */
  readonly address: string;
  /**
  * Hostname of the server under test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#hostname SslCheck#hostname}
  */
  readonly hostname?: string;
}

export function sslCheckMonitoredResourceToTerraform(struct?: SslCheckMonitoredResourceOutputReference | SslCheckMonitoredResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function sslCheckMonitoredResourceToHclTerraform(struct?: SslCheckMonitoredResourceOutputReference | SslCheckMonitoredResource): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslCheckMonitoredResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SslCheckMonitoredResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslCheckMonitoredResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._hostname = value.hostname;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check statuscake_ssl_check}
*/
export class SslCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuscake_ssl_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslCheck to import
  * @param importFromId The id of the existing SslCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuscake_ssl_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/statuscakedev/statuscake/2.2.2/docs/resources/ssl_check statuscake_ssl_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslCheckConfig
  */
  public constructor(scope: Construct, id: string, config: SslCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'statuscake_ssl_check',
      terraformGeneratorMetadata: {
        providerName: 'statuscake',
        providerVersion: '2.2.2',
        providerVersionConstraint: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkInterval = config.checkInterval;
    this._contactGroups = config.contactGroups;
    this._followRedirects = config.followRedirects;
    this._id = config.id;
    this._paused = config.paused;
    this._userAgent = config.userAgent;
    this._alertConfig.internalValue = config.alertConfig;
    this._monitoredResource.internalValue = config.monitoredResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_interval - computed: false, optional: false, required: true
  private _checkInterval?: number; 
  public get checkInterval() {
    return this.getNumberAttribute('check_interval');
  }
  public set checkInterval(value: number) {
    this._checkInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIntervalInput() {
    return this._checkInterval;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('contact_groups'));
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
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

  // paused - computed: false, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // alert_config - computed: false, optional: false, required: true
  private _alertConfig = new SslCheckAlertConfigOutputReference(this, "alert_config");
  public get alertConfig() {
    return this._alertConfig;
  }
  public putAlertConfig(value: SslCheckAlertConfig) {
    this._alertConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigInput() {
    return this._alertConfig.internalValue;
  }

  // monitored_resource - computed: false, optional: false, required: true
  private _monitoredResource = new SslCheckMonitoredResourceOutputReference(this, "monitored_resource");
  public get monitoredResource() {
    return this._monitoredResource;
  }
  public putMonitoredResource(value: SslCheckMonitoredResource) {
    this._monitoredResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceInput() {
    return this._monitoredResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_interval: cdktf.numberToTerraform(this._checkInterval),
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      id: cdktf.stringToTerraform(this._id),
      paused: cdktf.booleanToTerraform(this._paused),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      alert_config: sslCheckAlertConfigToTerraform(this._alertConfig.internalValue),
      monitored_resource: sslCheckMonitoredResourceToTerraform(this._monitoredResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_interval: {
        value: cdktf.numberToHclTerraform(this._checkInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      follow_redirects: {
        value: cdktf.booleanToHclTerraform(this._followRedirects),
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
      paused: {
        value: cdktf.booleanToHclTerraform(this._paused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_config: {
        value: sslCheckAlertConfigToHclTerraform(this._alertConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslCheckAlertConfigList",
      },
      monitored_resource: {
        value: sslCheckMonitoredResourceToHclTerraform(this._monitoredResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslCheckMonitoredResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
