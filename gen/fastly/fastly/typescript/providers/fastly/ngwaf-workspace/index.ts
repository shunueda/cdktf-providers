// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgwafWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the request headers containing the client IP address. Maximum of 10 header names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#client_ip_headers NgwafWorkspace#client_ip_headers}
  */
  readonly clientIpHeaders?: string[];
  /**
  * The status code returned when a request is blocked. This configuration is applied at the workspace but can be overwritten in rules. Accepted values are [`301`, `302`, `400..599`]. Default value `406`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#default_blocking_response_code NgwafWorkspace#default_blocking_response_code}
  */
  readonly defaultBlockingResponseCode?: number;
  /**
  * The redirect URL used if default_blocking_response_code is `301` or `302`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#default_redirect_url NgwafWorkspace#default_redirect_url}
  */
  readonly defaultRedirectUrl?: string;
  /**
  * The description of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#description NgwafWorkspace#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#id NgwafWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Agents will anonymize IP addresses according to the option selected. Accepted value is `hashed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#ip_anonymization NgwafWorkspace#ip_anonymization}
  */
  readonly ipAnonymization?: string;
  /**
  * The operation mode of the workspace. Accepted values are `off`, `block`, and `log`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#mode NgwafWorkspace#mode}
  */
  readonly mode: string;
  /**
  * The display name of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#name NgwafWorkspace#name}
  */
  readonly name: string;
  /**
  * attack_signal_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#attack_signal_thresholds NgwafWorkspace#attack_signal_thresholds}
  */
  readonly attackSignalThresholds: NgwafWorkspaceAttackSignalThresholds;
}
export interface NgwafWorkspaceAttackSignalThresholds {
  /**
  * Ignore thresholds and block immediately when at least one attack signal is detected. Default value `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#immediate NgwafWorkspace#immediate}
  */
  readonly immediate?: boolean | cdktf.IResolvable;
  /**
  * The one-hour interval threshold. Minimum 1 and maximum 10,000. Default value 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#one_hour NgwafWorkspace#one_hour}
  */
  readonly oneHour?: number;
  /**
  * The one-minute interval threshold. Minimum 1 and maximum 10,000. Default value 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#one_minute NgwafWorkspace#one_minute}
  */
  readonly oneMinute?: number;
  /**
  * The ten-minute interval threshold. Minimum 1 and maximum 10,000. Default value 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#ten_minutes NgwafWorkspace#ten_minutes}
  */
  readonly tenMinutes?: number;
}

export function ngwafWorkspaceAttackSignalThresholdsToTerraform(struct?: NgwafWorkspaceAttackSignalThresholdsOutputReference | NgwafWorkspaceAttackSignalThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immediate: cdktf.booleanToTerraform(struct!.immediate),
    one_hour: cdktf.numberToTerraform(struct!.oneHour),
    one_minute: cdktf.numberToTerraform(struct!.oneMinute),
    ten_minutes: cdktf.numberToTerraform(struct!.tenMinutes),
  }
}


export function ngwafWorkspaceAttackSignalThresholdsToHclTerraform(struct?: NgwafWorkspaceAttackSignalThresholdsOutputReference | NgwafWorkspaceAttackSignalThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immediate: {
      value: cdktf.booleanToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    one_hour: {
      value: cdktf.numberToHclTerraform(struct!.oneHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_minute: {
      value: cdktf.numberToHclTerraform(struct!.oneMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ten_minutes: {
      value: cdktf.numberToHclTerraform(struct!.tenMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NgwafWorkspaceAttackSignalThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NgwafWorkspaceAttackSignalThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._oneHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneHour = this._oneHour;
    }
    if (this._oneMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneMinute = this._oneMinute;
    }
    if (this._tenMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenMinutes = this._tenMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgwafWorkspaceAttackSignalThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immediate = undefined;
      this._oneHour = undefined;
      this._oneMinute = undefined;
      this._tenMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immediate = value.immediate;
      this._oneHour = value.oneHour;
      this._oneMinute = value.oneMinute;
      this._tenMinutes = value.tenMinutes;
    }
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: boolean | cdktf.IResolvable; 
  public get immediate() {
    return this.getBooleanAttribute('immediate');
  }
  public set immediate(value: boolean | cdktf.IResolvable) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
  }

  // one_hour - computed: false, optional: true, required: false
  private _oneHour?: number; 
  public get oneHour() {
    return this.getNumberAttribute('one_hour');
  }
  public set oneHour(value: number) {
    this._oneHour = value;
  }
  public resetOneHour() {
    this._oneHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneHourInput() {
    return this._oneHour;
  }

  // one_minute - computed: false, optional: true, required: false
  private _oneMinute?: number; 
  public get oneMinute() {
    return this.getNumberAttribute('one_minute');
  }
  public set oneMinute(value: number) {
    this._oneMinute = value;
  }
  public resetOneMinute() {
    this._oneMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneMinuteInput() {
    return this._oneMinute;
  }

  // ten_minutes - computed: false, optional: true, required: false
  private _tenMinutes?: number; 
  public get tenMinutes() {
    return this.getNumberAttribute('ten_minutes');
  }
  public set tenMinutes(value: number) {
    this._tenMinutes = value;
  }
  public resetTenMinutes() {
    this._tenMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenMinutesInput() {
    return this._tenMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace fastly_ngwaf_workspace}
*/
export class NgwafWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_ngwaf_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgwafWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgwafWorkspace to import
  * @param importFromId The id of the existing NgwafWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgwafWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_ngwaf_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/ngwaf_workspace fastly_ngwaf_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgwafWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: NgwafWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_ngwaf_workspace',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientIpHeaders = config.clientIpHeaders;
    this._defaultBlockingResponseCode = config.defaultBlockingResponseCode;
    this._defaultRedirectUrl = config.defaultRedirectUrl;
    this._description = config.description;
    this._id = config.id;
    this._ipAnonymization = config.ipAnonymization;
    this._mode = config.mode;
    this._name = config.name;
    this._attackSignalThresholds.internalValue = config.attackSignalThresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_ip_headers - computed: false, optional: true, required: false
  private _clientIpHeaders?: string[]; 
  public get clientIpHeaders() {
    return this.getListAttribute('client_ip_headers');
  }
  public set clientIpHeaders(value: string[]) {
    this._clientIpHeaders = value;
  }
  public resetClientIpHeaders() {
    this._clientIpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHeadersInput() {
    return this._clientIpHeaders;
  }

  // default_blocking_response_code - computed: false, optional: true, required: false
  private _defaultBlockingResponseCode?: number; 
  public get defaultBlockingResponseCode() {
    return this.getNumberAttribute('default_blocking_response_code');
  }
  public set defaultBlockingResponseCode(value: number) {
    this._defaultBlockingResponseCode = value;
  }
  public resetDefaultBlockingResponseCode() {
    this._defaultBlockingResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBlockingResponseCodeInput() {
    return this._defaultBlockingResponseCode;
  }

  // default_redirect_url - computed: false, optional: true, required: false
  private _defaultRedirectUrl?: string; 
  public get defaultRedirectUrl() {
    return this.getStringAttribute('default_redirect_url');
  }
  public set defaultRedirectUrl(value: string) {
    this._defaultRedirectUrl = value;
  }
  public resetDefaultRedirectUrl() {
    this._defaultRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUrlInput() {
    return this._defaultRedirectUrl;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // ip_anonymization - computed: false, optional: true, required: false
  private _ipAnonymization?: string; 
  public get ipAnonymization() {
    return this.getStringAttribute('ip_anonymization');
  }
  public set ipAnonymization(value: string) {
    this._ipAnonymization = value;
  }
  public resetIpAnonymization() {
    this._ipAnonymization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAnonymizationInput() {
    return this._ipAnonymization;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // attack_signal_thresholds - computed: false, optional: false, required: true
  private _attackSignalThresholds = new NgwafWorkspaceAttackSignalThresholdsOutputReference(this, "attack_signal_thresholds");
  public get attackSignalThresholds() {
    return this._attackSignalThresholds;
  }
  public putAttackSignalThresholds(value: NgwafWorkspaceAttackSignalThresholds) {
    this._attackSignalThresholds.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attackSignalThresholdsInput() {
    return this._attackSignalThresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ip_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIpHeaders),
      default_blocking_response_code: cdktf.numberToTerraform(this._defaultBlockingResponseCode),
      default_redirect_url: cdktf.stringToTerraform(this._defaultRedirectUrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_anonymization: cdktf.stringToTerraform(this._ipAnonymization),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      attack_signal_thresholds: ngwafWorkspaceAttackSignalThresholdsToTerraform(this._attackSignalThresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_ip_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIpHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_blocking_response_code: {
        value: cdktf.numberToHclTerraform(this._defaultBlockingResponseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_redirect_url: {
        value: cdktf.stringToHclTerraform(this._defaultRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      ip_anonymization: {
        value: cdktf.stringToHclTerraform(this._ipAnonymization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_signal_thresholds: {
        value: ngwafWorkspaceAttackSignalThresholdsToHclTerraform(this._attackSignalThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NgwafWorkspaceAttackSignalThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
