// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#access_token DevopsConnection#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#app_password DevopsConnection#app_password}
  */
  readonly appPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#base_url DevopsConnection#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#connection_type DevopsConnection#connection_type}
  */
  readonly connectionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#defined_tags DevopsConnection#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#description DevopsConnection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#display_name DevopsConnection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#freeform_tags DevopsConnection#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#id DevopsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#project_id DevopsConnection#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#username DevopsConnection#username}
  */
  readonly username?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#timeouts DevopsConnection#timeouts}
  */
  readonly timeouts?: DevopsConnectionTimeouts;
  /**
  * tls_verify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#tls_verify_config DevopsConnection#tls_verify_config}
  */
  readonly tlsVerifyConfig?: DevopsConnectionTlsVerifyConfig;
}
export interface DevopsConnectionLastConnectionValidationResult {
}

export function devopsConnectionLastConnectionValidationResultToTerraform(struct?: DevopsConnectionLastConnectionValidationResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function devopsConnectionLastConnectionValidationResultToHclTerraform(struct?: DevopsConnectionLastConnectionValidationResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DevopsConnectionLastConnectionValidationResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DevopsConnectionLastConnectionValidationResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsConnectionLastConnectionValidationResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // time_validated - computed: true, optional: false, required: false
  public get timeValidated() {
    return this.getStringAttribute('time_validated');
  }
}

export class DevopsConnectionLastConnectionValidationResultList extends cdktf.ComplexList {

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
  public get(index: number): DevopsConnectionLastConnectionValidationResultOutputReference {
    return new DevopsConnectionLastConnectionValidationResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DevopsConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#create DevopsConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#delete DevopsConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#update DevopsConnection#update}
  */
  readonly update?: string;
}

export function devopsConnectionTimeoutsToTerraform(struct?: DevopsConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function devopsConnectionTimeoutsToHclTerraform(struct?: DevopsConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsConnectionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface DevopsConnectionTlsVerifyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#ca_certificate_bundle_id DevopsConnection#ca_certificate_bundle_id}
  */
  readonly caCertificateBundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#tls_verify_mode DevopsConnection#tls_verify_mode}
  */
  readonly tlsVerifyMode: string;
}

export function devopsConnectionTlsVerifyConfigToTerraform(struct?: DevopsConnectionTlsVerifyConfigOutputReference | DevopsConnectionTlsVerifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate_bundle_id: cdktf.stringToTerraform(struct!.caCertificateBundleId),
    tls_verify_mode: cdktf.stringToTerraform(struct!.tlsVerifyMode),
  }
}


export function devopsConnectionTlsVerifyConfigToHclTerraform(struct?: DevopsConnectionTlsVerifyConfigOutputReference | DevopsConnectionTlsVerifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate_bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.caCertificateBundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_verify_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsVerifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsConnectionTlsVerifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsConnectionTlsVerifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificateBundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateBundleId = this._caCertificateBundleId;
    }
    if (this._tlsVerifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerifyMode = this._tlsVerifyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsConnectionTlsVerifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificateBundleId = undefined;
      this._tlsVerifyMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificateBundleId = value.caCertificateBundleId;
      this._tlsVerifyMode = value.tlsVerifyMode;
    }
  }

  // ca_certificate_bundle_id - computed: false, optional: false, required: true
  private _caCertificateBundleId?: string; 
  public get caCertificateBundleId() {
    return this.getStringAttribute('ca_certificate_bundle_id');
  }
  public set caCertificateBundleId(value: string) {
    this._caCertificateBundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateBundleIdInput() {
    return this._caCertificateBundleId;
  }

  // tls_verify_mode - computed: false, optional: false, required: true
  private _tlsVerifyMode?: string; 
  public get tlsVerifyMode() {
    return this.getStringAttribute('tls_verify_mode');
  }
  public set tlsVerifyMode(value: string) {
    this._tlsVerifyMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyModeInput() {
    return this._tlsVerifyMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection oci_devops_connection}
*/
export class DevopsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsConnection to import
  * @param importFromId The id of the existing DevopsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/devops_connection oci_devops_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_connection',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessToken = config.accessToken;
    this._appPassword = config.appPassword;
    this._baseUrl = config.baseUrl;
    this._connectionType = config.connectionType;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._username = config.username;
    this._timeouts.internalValue = config.timeouts;
    this._tlsVerifyConfig.internalValue = config.tlsVerifyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // app_password - computed: true, optional: true, required: false
  private _appPassword?: string; 
  public get appPassword() {
    return this.getStringAttribute('app_password');
  }
  public set appPassword(value: string) {
    this._appPassword = value;
  }
  public resetAppPassword() {
    this._appPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPasswordInput() {
    return this._appPassword;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // last_connection_validation_result - computed: true, optional: false, required: false
  private _lastConnectionValidationResult = new DevopsConnectionLastConnectionValidationResultList(this, "last_connection_validation_result", false);
  public get lastConnectionValidationResult() {
    return this._lastConnectionValidationResult;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // username - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tls_verify_config - computed: false, optional: true, required: false
  private _tlsVerifyConfig = new DevopsConnectionTlsVerifyConfigOutputReference(this, "tls_verify_config");
  public get tlsVerifyConfig() {
    return this._tlsVerifyConfig;
  }
  public putTlsVerifyConfig(value: DevopsConnectionTlsVerifyConfig) {
    this._tlsVerifyConfig.internalValue = value;
  }
  public resetTlsVerifyConfig() {
    this._tlsVerifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyConfigInput() {
    return this._tlsVerifyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      app_password: cdktf.stringToTerraform(this._appPassword),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      username: cdktf.stringToTerraform(this._username),
      timeouts: devopsConnectionTimeoutsToTerraform(this._timeouts.internalValue),
      tls_verify_config: devopsConnectionTlsVerifyConfigToTerraform(this._tlsVerifyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_password: {
        value: cdktf.stringToHclTerraform(this._appPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: devopsConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsConnectionTimeouts",
      },
      tls_verify_config: {
        value: devopsConnectionTlsVerifyConfigToHclTerraform(this._tlsVerifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsConnectionTlsVerifyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
