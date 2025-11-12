// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthConfigPingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#access_mode AuthConfigPing#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#allowed_principal_ids AuthConfigPing#allowed_principal_ids}
  */
  readonly allowedPrincipalIds?: string[];
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#annotations AuthConfigPing#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#display_name_field AuthConfigPing#display_name_field}
  */
  readonly displayNameField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#enabled AuthConfigPing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#entity_id_field AuthConfigPing#entity_id_field}
  */
  readonly entityIdField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#groups_field AuthConfigPing#groups_field}
  */
  readonly groupsField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#id AuthConfigPing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#idp_metadata_content AuthConfigPing#idp_metadata_content}
  */
  readonly idpMetadataContent: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#labels AuthConfigPing#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#rancher_api_host AuthConfigPing#rancher_api_host}
  */
  readonly rancherApiHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#sp_cert AuthConfigPing#sp_cert}
  */
  readonly spCert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#sp_key AuthConfigPing#sp_key}
  */
  readonly spKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#uid_field AuthConfigPing#uid_field}
  */
  readonly uidField: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#user_name_field AuthConfigPing#user_name_field}
  */
  readonly userNameField: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping rancher2_auth_config_ping}
*/
export class AuthConfigPing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_auth_config_ping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthConfigPing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthConfigPing to import
  * @param importFromId The id of the existing AuthConfigPing that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthConfigPing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_auth_config_ping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_ping rancher2_auth_config_ping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthConfigPingConfig
  */
  public constructor(scope: Construct, id: string, config: AuthConfigPingConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_auth_config_ping',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMode = config.accessMode;
    this._allowedPrincipalIds = config.allowedPrincipalIds;
    this._annotations = config.annotations;
    this._displayNameField = config.displayNameField;
    this._enabled = config.enabled;
    this._entityIdField = config.entityIdField;
    this._groupsField = config.groupsField;
    this._id = config.id;
    this._idpMetadataContent = config.idpMetadataContent;
    this._labels = config.labels;
    this._rancherApiHost = config.rancherApiHost;
    this._spCert = config.spCert;
    this._spKey = config.spKey;
    this._uidField = config.uidField;
    this._userNameField = config.userNameField;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_mode - computed: false, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // allowed_principal_ids - computed: false, optional: true, required: false
  private _allowedPrincipalIds?: string[]; 
  public get allowedPrincipalIds() {
    return this.getListAttribute('allowed_principal_ids');
  }
  public set allowedPrincipalIds(value: string[]) {
    this._allowedPrincipalIds = value;
  }
  public resetAllowedPrincipalIds() {
    this._allowedPrincipalIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPrincipalIdsInput() {
    return this._allowedPrincipalIds;
  }

  // annotations - computed: true, optional: true, required: false
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

  // display_name_field - computed: false, optional: false, required: true
  private _displayNameField?: string; 
  public get displayNameField() {
    return this.getStringAttribute('display_name_field');
  }
  public set displayNameField(value: string) {
    this._displayNameField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameFieldInput() {
    return this._displayNameField;
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

  // entity_id_field - computed: false, optional: true, required: false
  private _entityIdField?: string; 
  public get entityIdField() {
    return this.getStringAttribute('entity_id_field');
  }
  public set entityIdField(value: string) {
    this._entityIdField = value;
  }
  public resetEntityIdField() {
    this._entityIdField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdFieldInput() {
    return this._entityIdField;
  }

  // groups_field - computed: false, optional: false, required: true
  private _groupsField?: string; 
  public get groupsField() {
    return this.getStringAttribute('groups_field');
  }
  public set groupsField(value: string) {
    this._groupsField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsFieldInput() {
    return this._groupsField;
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

  // idp_metadata_content - computed: false, optional: false, required: true
  private _idpMetadataContent?: string; 
  public get idpMetadataContent() {
    return this.getStringAttribute('idp_metadata_content');
  }
  public set idpMetadataContent(value: string) {
    this._idpMetadataContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataContentInput() {
    return this._idpMetadataContent;
  }

  // labels - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rancher_api_host - computed: false, optional: false, required: true
  private _rancherApiHost?: string; 
  public get rancherApiHost() {
    return this.getStringAttribute('rancher_api_host');
  }
  public set rancherApiHost(value: string) {
    this._rancherApiHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherApiHostInput() {
    return this._rancherApiHost;
  }

  // sp_cert - computed: false, optional: false, required: true
  private _spCert?: string; 
  public get spCert() {
    return this.getStringAttribute('sp_cert');
  }
  public set spCert(value: string) {
    this._spCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertInput() {
    return this._spCert;
  }

  // sp_key - computed: false, optional: false, required: true
  private _spKey?: string; 
  public get spKey() {
    return this.getStringAttribute('sp_key');
  }
  public set spKey(value: string) {
    this._spKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spKeyInput() {
    return this._spKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid_field - computed: false, optional: false, required: true
  private _uidField?: string; 
  public get uidField() {
    return this.getStringAttribute('uid_field');
  }
  public set uidField(value: string) {
    this._uidField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidFieldInput() {
    return this._uidField;
  }

  // user_name_field - computed: false, optional: false, required: true
  private _userNameField?: string; 
  public get userNameField() {
    return this.getStringAttribute('user_name_field');
  }
  public set userNameField(value: string) {
    this._userNameField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameFieldInput() {
    return this._userNameField;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalIds),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      display_name_field: cdktf.stringToTerraform(this._displayNameField),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_id_field: cdktf.stringToTerraform(this._entityIdField),
      groups_field: cdktf.stringToTerraform(this._groupsField),
      id: cdktf.stringToTerraform(this._id),
      idp_metadata_content: cdktf.stringToTerraform(this._idpMetadataContent),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      rancher_api_host: cdktf.stringToTerraform(this._rancherApiHost),
      sp_cert: cdktf.stringToTerraform(this._spCert),
      sp_key: cdktf.stringToTerraform(this._spKey),
      uid_field: cdktf.stringToTerraform(this._uidField),
      user_name_field: cdktf.stringToTerraform(this._userNameField),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_mode: {
        value: cdktf.stringToHclTerraform(this._accessMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_principal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedPrincipalIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name_field: {
        value: cdktf.stringToHclTerraform(this._displayNameField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_id_field: {
        value: cdktf.stringToHclTerraform(this._entityIdField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups_field: {
        value: cdktf.stringToHclTerraform(this._groupsField),
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
      idp_metadata_content: {
        value: cdktf.stringToHclTerraform(this._idpMetadataContent),
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
      rancher_api_host: {
        value: cdktf.stringToHclTerraform(this._rancherApiHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_cert: {
        value: cdktf.stringToHclTerraform(this._spCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_key: {
        value: cdktf.stringToHclTerraform(this._spKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid_field: {
        value: cdktf.stringToHclTerraform(this._uidField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name_field: {
        value: cdktf.stringToHclTerraform(this._userNameField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
