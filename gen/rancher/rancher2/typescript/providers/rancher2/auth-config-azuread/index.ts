// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthConfigAzureadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#access_mode AuthConfigAzuread#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#allowed_principal_ids AuthConfigAzuread#allowed_principal_ids}
  */
  readonly allowedPrincipalIds?: string[];
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#annotations AuthConfigAzuread#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#application_id AuthConfigAzuread#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#application_secret AuthConfigAzuread#application_secret}
  */
  readonly applicationSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#auth_endpoint AuthConfigAzuread#auth_endpoint}
  */
  readonly authEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#enabled AuthConfigAzuread#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#endpoint AuthConfigAzuread#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#graph_endpoint AuthConfigAzuread#graph_endpoint}
  */
  readonly graphEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#group_membership_filter AuthConfigAzuread#group_membership_filter}
  */
  readonly groupMembershipFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#id AuthConfigAzuread#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#labels AuthConfigAzuread#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#rancher_url AuthConfigAzuread#rancher_url}
  */
  readonly rancherUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#tenant_id AuthConfigAzuread#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#token_endpoint AuthConfigAzuread#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread rancher2_auth_config_azuread}
*/
export class AuthConfigAzuread extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_auth_config_azuread";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthConfigAzuread resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthConfigAzuread to import
  * @param importFromId The id of the existing AuthConfigAzuread that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthConfigAzuread to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_auth_config_azuread", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/auth_config_azuread rancher2_auth_config_azuread} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthConfigAzureadConfig
  */
  public constructor(scope: Construct, id: string, config: AuthConfigAzureadConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_auth_config_azuread',
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
    this._applicationId = config.applicationId;
    this._applicationSecret = config.applicationSecret;
    this._authEndpoint = config.authEndpoint;
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._graphEndpoint = config.graphEndpoint;
    this._groupMembershipFilter = config.groupMembershipFilter;
    this._id = config.id;
    this._labels = config.labels;
    this._rancherUrl = config.rancherUrl;
    this._tenantId = config.tenantId;
    this._tokenEndpoint = config.tokenEndpoint;
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

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_secret - computed: false, optional: false, required: true
  private _applicationSecret?: string; 
  public get applicationSecret() {
    return this.getStringAttribute('application_secret');
  }
  public set applicationSecret(value: string) {
    this._applicationSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSecretInput() {
    return this._applicationSecret;
  }

  // auth_endpoint - computed: false, optional: false, required: true
  private _authEndpoint?: string; 
  public get authEndpoint() {
    return this.getStringAttribute('auth_endpoint');
  }
  public set authEndpoint(value: string) {
    this._authEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authEndpointInput() {
    return this._authEndpoint;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // graph_endpoint - computed: false, optional: false, required: true
  private _graphEndpoint?: string; 
  public get graphEndpoint() {
    return this.getStringAttribute('graph_endpoint');
  }
  public set graphEndpoint(value: string) {
    this._graphEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphEndpointInput() {
    return this._graphEndpoint;
  }

  // group_membership_filter - computed: false, optional: true, required: false
  private _groupMembershipFilter?: string; 
  public get groupMembershipFilter() {
    return this.getStringAttribute('group_membership_filter');
  }
  public set groupMembershipFilter(value: string) {
    this._groupMembershipFilter = value;
  }
  public resetGroupMembershipFilter() {
    this._groupMembershipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipFilterInput() {
    return this._groupMembershipFilter;
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

  // rancher_url - computed: false, optional: false, required: true
  private _rancherUrl?: string; 
  public get rancherUrl() {
    return this.getStringAttribute('rancher_url');
  }
  public set rancherUrl(value: string) {
    this._rancherUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rancherUrlInput() {
    return this._rancherUrl;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_mode: cdktf.stringToTerraform(this._accessMode),
      allowed_principal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedPrincipalIds),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_secret: cdktf.stringToTerraform(this._applicationSecret),
      auth_endpoint: cdktf.stringToTerraform(this._authEndpoint),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      graph_endpoint: cdktf.stringToTerraform(this._graphEndpoint),
      group_membership_filter: cdktf.stringToTerraform(this._groupMembershipFilter),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      rancher_url: cdktf.stringToTerraform(this._rancherUrl),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
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
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_secret: {
        value: cdktf.stringToHclTerraform(this._applicationSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_endpoint: {
        value: cdktf.stringToHclTerraform(this._authEndpoint),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_endpoint: {
        value: cdktf.stringToHclTerraform(this._graphEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_membership_filter: {
        value: cdktf.stringToHclTerraform(this._groupMembershipFilter),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rancher_url: {
        value: cdktf.stringToHclTerraform(this._rancherUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint: {
        value: cdktf.stringToHclTerraform(this._tokenEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
